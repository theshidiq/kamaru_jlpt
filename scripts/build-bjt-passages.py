"""
Build src/lib/passages_bjt.ts from the business texts below.

Run:  python scripts/build-bjt-passages.py      (needs: pip install janome)

Each text is plain Japanese; this script segments it into the reader's
seg[] tokens:
  * tokens are merged back into BJT vocab words (取引 + 先 -> 取引先), so a
    tap resolves to the word being studied;
  * conjugated verbs/adjectives are split at the stem, matching the JLPT
    passages (伺い -> 伺 + い), because the reader looks words up by prefix
    and 伺い is not a prefix of 伺う;
  * vocab words take their reviewed reading rather than the analyser's
    (it reads お手数 as おてかず), and READING_FIX covers other known misreads.

All company and person names are invented. The texts are original.
"""
import json, re, os, sys
from janome.tokenizer import Tokenizer

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOCAB = json.load(open(os.path.join(ROOT, 'public', 'bjt_vocab.json'), encoding='utf-8'))
WORDS = {w['word']: w.get('furigana', '') for w in VOCAB}

# Readings the analyser gets wrong in these texts.
READING_FIX = {
    '一割': 'いちわり', '今月末': 'こんげつまつ', '中村': 'なかむら', '木村': 'きむら',
    '高橋': 'たかはし', '佐藤': 'さとう', '鈴木': 'すずき', '田中': 'たなか', '山口': 'やまぐち',
    '各位': 'かくい', '方': 'かた', '一人': 'ひとり', '何か所': 'なんかしょ', '日程': 'にってい',
    '人事部': 'じんじぶ', '企画部': 'きかくぶ', '営業部': 'えいぎょうぶ', '第二': 'だいに',
    '六割': 'ろくわり', '四割': 'よんわり', '三部': 'さんぶ', '今日中': 'きょうじゅう',
    '十か所': 'じゅっかしょ', '十日': 'とおか', '三人': 'さんにん', '三十分': 'さんじゅっぷん', '三冊': 'さんさつ',
    '一日': 'いちにち', '二年': 'にねん', '見積もり': 'みつもり', '保守': 'ほしゅ', '費用': 'ひよう', '広報': 'こうほう',
    '小林': 'こばやし', '山田': 'やまだ', '昇進': 'しょうしん', '若手': 'わかて', '本番': 'ほんばん',
}

KANJI = re.compile(r'[一-鿿々]')
tok = Tokenizer()

def hira(s):
    return ''.join(chr(ord(c) - 0x60) if 'ァ' <= c <= 'ヶ' else c for c in s)

def segment(text):
    raw = [(t.surface, hira(t.reading) if t.reading != '*' else t.surface,
            t.part_of_speech.split(',')[0], t.base_form) for t in tok.tokenize(text)]
    out, i = [], 0
    while i < len(raw):
        # 1. longest run of tokens that spells a vocab word or a fixed reading
        merged = None
        for j in range(min(len(raw), i + 6), i + 1, -1):
            surf = ''.join(r[0] for r in raw[i:j])
            if surf in WORDS or surf in READING_FIX:
                merged = (surf, j); break
        if merged:
            surf, j = merged
            reading = READING_FIX.get(surf) or WORDS.get(surf) or ''.join(r[1] for r in raw[i:j])
            out.append({'t': surf, 'r': reading, 'lex': surf in WORDS} if KANJI.search(surf) else {'t': surf, 'lex': surf in WORDS})
            i = j; continue
        surf, reading, pos, base = raw[i]
        # 2. conjugated verb/adjective: split at the stem it shares with the
        #    vocab word it belongs to, falling back to its own base form. The
        #    vocab word wins because the analyser's base can be a different
        #    verb: 読み取れ is potential 読み取れる, but the word is 読み取る.
        if pos in ('動詞', '形容詞') and surf != base and (KANJI.search(surf) or base in WORDS):
            def shared(a, b):
                k = 0
                while k < min(len(a), len(b)) and a[k] == b[k]:
                    k += 1
                return k
            best = max((shared(surf, w) for w in WORDS if w[0] == surf[0]), default=0)
            # The analyser's own base form wins when it is a vocab word: 指し
            # is all of 指し示す's stem, but it is 指す being conjugated.
            if base in WORDS and shared(surf, base) < len(surf):
                best = shared(surf, base)
            if best == len(surf):
                # Already a clean stem of a vocab word (申し上げ, いただけ):
                # nothing to split, but it is still the word being studied.
                out.append({'t': surf, 'r': reading, 'lex': True} if KANJI.search(surf) else {'t': surf, 'lex': True})
                i += 1; continue
            k = best if best else shared(surf, base)
            stem, rest = surf[:k], surf[k:]
            if stem and rest and reading.endswith(hira(rest)):
                r = reading[:len(reading) - len(rest)]
                out.append({'t': stem, 'r': r, 'lex': bool(best)} if KANJI.search(stem) else {'t': stem, 'lex': bool(best)})
                out.append({'t': rest})
                i += 1; continue
        if KANJI.search(surf):
            # A single-token vocab word still takes the reviewed reading: the
            # analyser has none for words outside its dictionary (聴解).
            out.append({'t': surf, 'r': READING_FIX.get(surf) or WORDS.get(surf) or reading, 'lex': surf in WORDS})
        else:
            out.append({'t': surf, 'lex': surf in WORDS})
        i += 1
    # 3. collapse runs of plain kana/punctuation into one token. Only tokens
    #    deliberately matched to a vocab word stay separate: a stray い left on
    #    its own would prefix-match いただく in the reader and light up as a word.
    def plain(x):
        return 'r' not in x and not x.get('lex')
    merged = []
    for x in out:
        if merged and plain(x) and plain(merged[-1]):
            merged[-1] = {'t': merged[-1]['t'] + x['t']}
        else:
            merged.append(x)
    return merged

# ─── Texts ───────────────────────────────────────────────────────────────────
# Line tuple: (japanese, english, speaker or None, 'header'/'signature' or None)
H, S = 'header', 'signature'

PASSAGES = [
  dict(chapter=1, section=1, format='email', title='取引先へのメールについて', lines=[
    ('件名：取引先へのメールについて', 'Subject: About your email to the client', None, H),
    ('宛先：営業部 鈴木さん', 'To: Suzuki, Sales Department', None, H),
    ('鈴木さん', 'Suzuki,', None, None),
    ('お疲れさまです。中村です。', 'Thanks for your work. This is Nakamura.', None, None),
    ('昨日の新製品のご案内メールを確認しました。取引先の高橋様からも、さっそくご返信をいただいています。',
     "I checked yesterday's email announcing the new product. We've already received a reply from Mr Takahashi at the client, too.", None, None),
    ('商品の説明や価格、値引きの条件はわかりやすく、よくまとまっていました。',
     'The product description, the price and the discount terms were clear and well organized.', None, None),
    ('ただ、敬語の使い方に何か所か気になる点がありました。',
     'However, there were a few places where the keigo caught my attention.', None, None),
    ('まず、「高橋様が申し上げたとおり」と書いていましたが、「申し上げる」は謙譲語なので、お客様の行動には使いません。',
     "First, you wrote 'as Mr Takahashi 申し上げた', but 申し上げる is humble language, so it isn't used for a customer's actions.", None, None),
    ('この場合は尊敬語を使って、「おっしゃったとおり」とするのが正しい形です。',
     "In this case the correct form uses respectful language: 'おっしゃったとおり'.", None, None),
    ('また、「来週、ご挨拶に行きます」は「伺います」にすると、相手への敬意がより伝わります。',
     "Also, if you change 'I will come to greet you next week' to 伺います, your respect for them comes across better.", None, None),
    ('「製品の資料を送ってくださいませんか」も、顧客にお願いする場合は「お送りいただけますでしょうか」のほうが丁寧です。',
     "And 'could you send the product materials (くださいませんか)' is more polite as お送りいただけますでしょうか when asking a customer.", None, None),
    ('納品日や購入の手続きについては問題ありません。',
     'There are no problems with the delivery date or the purchase procedure.', None, None),
    ('敬語の間違いは、今後の取引にも影響することがあります。謙譲と尊敬の区別はビジネスの基本なので、少しずつ慣れていきましょう。',
     'Keigo mistakes can affect future business with a client. Telling humble and respectful forms apart is a basic of business, so let’s get used to it step by step.', None, None),
    ('新製品の販売と広告の件も、引き続きよろしくお願いします。',
     'Please keep going with the new product’s sales and advertising, too.', None, None),
    ('営業部 中村', 'Nakamura, Sales Department', None, S),
  ]),
  dict(chapter=1, section=2, format='chat', title='会議の準備', lines=[
    ('木村さん、明日の会議の資料はどうなっていますか。', "Kimura, how are the materials for tomorrow's meeting coming along?", '田中課長', None),
    ('今、作成中です。午後にはお送りできると思います。', "I'm making them now. I think I can send them this afternoon.", '木村', None),
    ('ありがとう。予算の項目を一つ追加してもらえますか。', 'Thanks. Could you add one budget item?', '田中課長', None),
    ('承知しました。先週の研修の予算ですね。', "Understood. The budget for last week's training, right?", '木村', None),
    ('そうです。講師への謝礼も入れておいてください。', "Yes. Please include the lecturer's fee as well.", '田中課長', None),
    ('かしこまりました。それから、株式会社ミナト商事からのクレームの件ですが、担当者の方から文書で連絡がありました。',
     "Certainly. Also, about the complaint from Minato Trading Co., Ltd. — their person in charge contacted us in writing.", '木村', None),
    ('どんな内容でしたか。', 'What did it say?', '田中課長', None),
    ('納品が遅れたことへの苦情です。私の立場では判断が難しいので、課長のご意見を伺えますか。',
     "It's a complaint about the late delivery. It's hard to judge from my position, so may I ask for your opinion?", '木村', None),
    ('わかりました。その件は会議で私から発言します。資料には、経緯を省略せずに書いておいてください。',
     "All right. I'll raise it myself at the meeting. In the materials, please write out what happened without leaving anything out.", '田中課長', None),
    ('はい。改善策の提案も一緒に載せます。', "Yes. I'll include a proposal for improvements as well.", '木村', None),
    ('助かります。会議室の予約は、総務の担当に依頼しましたか。', 'That helps. Did you ask the person in charge at General Affairs to book the meeting room?', '田中課長', None),
    ('はい、第二会議室を押さえました。資料の管理も私が担当しますので、修正があればいつでもおっしゃってください。',
     "Yes, I've reserved Meeting Room 2. I'll also look after the materials, so let me know any time you want changes.", '木村', None),
    ('ありがとう。私の上司の山口部長にも見ていただくので、よろしくお願いします。',
     "Thanks. My own boss, Manager Yamaguchi, will look at them too, so please do a careful job.", '田中課長', None),
    ('それと、部下の待遇について社員から意見が出ているので、その件も少し話したいと思います。',
     'One more thing: staff have raised opinions about how our team members are treated, so I’d like to discuss that briefly too.', '田中課長', None),
    ('承知いたしました。', 'Understood.', '木村', None),
  ]),
  dict(chapter=1, section=3, format='meeting', title='新入社員の研修について', lines=[
    ('今日は、来月の新入社員研修の内容について検討したいと思います。',
     "Today I'd like to discuss the content of next month's new-employee training.", '中村', None),
    ('はい。去年の研修では、電話の場面で適切に対応できない新人が多かったです。',
     "Yes. In last year's training, many new staff couldn't respond appropriately on the phone.", '木村', None),
    ('具体的には、どんな課題がありましたか。', 'Specifically, what problems were there?', '中村', None),
    ('相手の用件を正しく把握できない場合がありました。伝言を受けても、内容を確認せずに電話を切ってしまうんです。',
     "Sometimes they couldn't correctly grasp what the caller wanted. Even when they took a message, they hung up without confirming it.", '木村', None),
    ('なるほど。敬語の知識があっても、実際のコミュニケーションで使えるとは限りませんね。',
     "I see. Knowing keigo doesn't mean you can use it in real communication.", '中村', None),
    ('はい。ですから今年は、講義の形式を変更して、ロールプレイを中心にしたいと考えています。',
     'Right. So this year I want to change the format from lectures to mainly role-play.', '木村', None),
    ('いいですね。ロールプレイでは、どんな人物を想定しますか。', 'Good. What kind of people will the role-plays assume?', '中村', None),
    ('急いでいる取引先や、怒っているお客様など、いくつかの状況を用意します。',
     "I'll prepare several situations, such as a client in a hurry or an angry customer.", '木村', None),
    ('相手の気持ちを理解して、落ち着いて問いかける練習も必要ですね。',
     'They also need practice understanding how the other person feels and asking questions calmly.', '中村', None),
    ('おっしゃるとおりです。最後に、学んだことを一人ずつ述べる時間も設けます。',
     "Exactly. At the end, I'll also set aside time for each person to state what they learned.", '木村', None),
    ('評価はどうしますか。', 'How will you assess them?', '中村', None),
    ('表現の正確さだけでなく、相手に合わせて対応を変える能力も見ます。',
     "I'll look not only at accurate expression but also at the ability to adjust to the other person.", '木村', None),
    ('わかりました。研修にかかわる先輩社員にも、協力をお願いしておいてください。',
     'Understood. Please also ask the senior staff involved in the training for their cooperation.', '中村', None),
    ('承知しました。資料の最後の部分は中村さんにも確認していただけますか。案ができたら連絡します。',
     "Will do. Could you also check the last part of the materials? I'll contact you when the draft is ready.", '木村', None),
    ('もちろんです。効果を数字で示すことができれば、部長への報告もしやすいですね。',
     "Of course. If we can show the results in numbers, reporting to the manager will be easier too.", '中村', None),
  ]),
  dict(chapter=1, section=4, format='memo', title='顧客アンケートの結果について', lines=[
    ('件名：顧客アンケートの結果について', 'Subject: Results of the customer survey', None, H),
    ('宛先：営業部各位', 'To: All Sales Department staff', None, H),
    ('今回の顧客アンケートの結果を、以下のとおり報告します。',
     'I report the results of this customer survey as follows.', None, None),
    ('回答者の約六割が、購入の際に最も重視する条件として「価格」を挙げました。',
     'About 60% of respondents named price as the condition they value most when buying.', None, None),
    ('また、「価格が高いと感じる」という項目に「当てはまる」と答えた人は、全体の四割でした。',
     "And 40% of everyone answered 'applies to me' for the item 'I feel prices are high'.", None, None),
    ('ところが、実際に購入された商品を見ると、価格より使いやすさで選んだ人が多いことが読み取れます。',
     'However, looking at the products actually bought, we can see that many chose on ease of use rather than price.', None, None),
    ('この矛盾を解く鍵は、自由回答にありました。',
     'The key to solving this contradiction was in the free-text answers.', None, None),
    ('お客様は安さを求めながらも、最終的には日常での使いやすさで判断していると推測されます。',
     'It seems customers look for low prices but in the end judge on how easy a product is to use every day.', None, None),
    ('数字が人間の行動をそのまま表すとは限らない、という点が大きなポイントです。',
     "The main point is that the numbers don't necessarily reflect people's behaviour as it is.", None, None),
    ('さらに、「店員のセリフが丁寧だった」という声も目立ちました。接客という行為そのものが、購入の決め手になっていると考えられます。',
     "Furthermore, many said 'the staff member's words were polite'. The act of serving customers itself seems to be a deciding factor.", None, None),
    ('ただし、店舗によって結果が大きく異なるため、地域ごとの分析も必要です。',
     'However, results differ greatly between stores, so an analysis by region is also needed.', None, None),
    ('話題になっている新製品については、可能であれば店頭での聞き取りも行いたいと考えています。',
     "For the new product people are talking about, I'd like to also interview customers in store if possible.", None, None),
    ('以上を踏まえ、来月から接客の基本を見直す研修を行うことを提案します。',
     "Based on the above, I propose training from next month to review the basics of customer service.", None, None),
    ('なお、回答データの処理は情報システム部に依頼済みです。',
     'Note that the processing of the response data has already been requested from IT.', None, None),
    ('企画部 木村', 'Kimura, Planning Department', None, S),
  ]),
  dict(chapter=1, section=5, format='notice', title='BJT模擬テスト実施のお知らせ', lines=[
    ('件名：BJT模擬テスト実施のお知らせ', 'Subject: Notice of a BJT mock test', None, H),
    ('宛先：社員各位', 'To: All employees', None, H),
    ('人事部より、BJT模擬テストの実施についてお知らせします。',
     'HR is announcing a BJT mock test.', None, None),
    ('ビジネスの現場で日本語が正確に通じるかどうかは、業務上とても重要です。',
     'Whether your Japanese gets across accurately in real business situations is very important for your work.', None, None),
    ('そこで、日本語の力を客観的に測る機会として、来月、社内で模擬テストを行います。希望者は誰でも受験できます。',
     "So, as a chance to measure your Japanese objectively, we will hold a mock test in-house next month. Anyone who wishes can take it.", None, None),
    ('テストは聴解、聴読解、読解の三部で構成されています。',
     'The test has three parts: listening, listening-and-reading, and reading.', None, None),
    ('聴解では音声を聞き、画面に表示された選択肢から答えを選びます。',
     'In listening, you hear audio and choose an answer from the options shown on screen.', None, None),
    ('読解では、文脈から判断して空欄に入る語句を選ぶ問題も出題されます。',
     'In reading, there are also questions where you judge from context and choose the words that go in a blank.', None, None),
    ('解答はすべてパソコンで行います。正解・不正解だけでなく、どの分野が弱いかも結果に表示されます。',
     'All answers are made on a computer. The results show not only correct and incorrect answers but also which areas are weak.', None, None),
    ('受験日は、業務の予定に応じて二つの日程から選べます。',
     'You can choose between two test dates depending on your work schedule.', None, None),
    ('最近、お客様への対応で不適切な表現があったという報告が増えています。敬語の使い方を見直す機会としても、ぜひご活用ください。',
     "Recently there have been more reports of inappropriate expressions when dealing with customers. Please also use this as a chance to review your keigo.", None, None),
    ('自分の日本語の力を正しく認識することが、上達への第一歩です。',
     "Recognizing your own level of Japanese accurately is the first step to improving.", None, None),
    ('当然ですが、テストの結果が人事評価に影響することはありません。',
     'Needless to say, the results will not affect your performance evaluation.', None, None),
    ('前回に比べて申し込みが大幅に増えているため、早めにお申し込みください。',
     'Applications are well up on last time, so please apply early.', None, None),
    ('人事部', 'Human Resources', None, S),
  ]),
  # ─── Chapter 2 ─────────────────────────────────────────────────────────────
  dict(chapter=2, section=1, format='conversation', title='展示会の準備', lines=[
    ('木村さん、明日の展示会、準備はどうですか。', "Kimura, how are the preparations for tomorrow's trade show?", '中村', None),
    ('はい、弊社の新しい機器の展示は、ほぼ終わりました。', "Our new equipment display is almost finished.", '木村', None),
    ('ありがとう。開発部が二年かけて企画した製品だから、たくさんの方にご来場いただきたいですね。',
     'Thanks. Development spent two years planning this product, so we want lots of people to come.', '中村', None),
    ('はい。ただ、お客様への言葉づかいが少し心配です。', "Yes. I'm a little worried about how I speak to visitors, though.", '木村', None),
    ('大切なのはマナーと、丁寧な言葉の使い分けです。お客様の行動には尊敬語を使いましょう。',
     "What matters is manners, and choosing the right polite words. Use respectful language for what the customer does.", '中村', None),
    ('「少々お待ちください」や「よろしいでしょうか」のような表現ですね。', "Expressions like 少々お待ちください and よろしいでしょうか.", '木村', None),
    ('そうです。自分のことは、「ご案内いたします」のように言います。', "Right. For your own actions, say things like ご案内いたします.", '中村', None),
    ('わかりました。アンケートのご記入も、お願いしてみます。', "Understood. I'll also ask them to fill in the survey.", '木村', None),
    ('いいですね。ご注文の相談があったら、在庫と出荷の日程を確認してから答えてください。',
     'Good. If someone asks about an order, check the stock and shipping dates before you answer.', '中村', None),
    ('はい。生産が追いつかない場合は、どうしますか。', "OK. What if production can't keep up?", '木村', None),
    ('そのときは、私に連絡してください。来月、価格の改定もあるので、契約の話は私がします。',
     "Then contact me. Prices are being revised next month, so I'll handle any contract talks.", '中村', None),
    ('承知しました。導入を考えている店舗の方も、来られるそうですね。', "Understood. I hear people from shops thinking of adopting it are coming too.", '木村', None),
    ('ええ。来年、新店舗を十か所開く会社もあるので、大きなチャンスです。', "Yes. One company is opening ten new stores next year, so it's a big chance.", '中村', None),
    ('はい、がんばります。', "Yes, I'll do my best.", '木村', None),
  ]),
  dict(chapter=2, section=2, format='email', title='社内セミナーと精算書について', lines=[
    ('件名：社内セミナーと精算書の新しい運用について', 'Subject: The in-house seminar and the new expense-form procedure', None, H),
    ('宛先：各支店 スタッフ各位', 'To: All staff at every branch', None, H),
    ('いつもお疲れさまです。総務部の佐藤です。', "Thank you for your hard work. This is Sato from General Affairs.", None, None),
    ('来月十日に、新入社員と若手スタッフを対象にした社内セミナーを開きます。',
     "On the 10th of next month we'll hold an in-house seminar for new employees and junior staff.", None, None),
    ('講師には、IT産業の企業で広報を担当していた方をお招きします。',
     "Our lecturer previously handled PR at a company in the IT industry.", None, None),
    ('当日は、前年に好評だった広告案の作り方も紹介する予定です。',
     "On the day, they'll also show how to put together an advertising proposal, which was popular last year.", None, None),
    ('また、常務と部長からも、今後の方針についてお話があります。',
     'The managing director and the department managers will also talk about our plans going forward.', None, None),
    ('次に、交通費の精算についてお知らせします。今月から、精算書の運用が新しくなりました。',
     'Next, about settling travel expenses. From this month, expense forms are handled in a new way.', None, None),
    ('精算書には、必ず日付と標題を入れてください。書き方は、総務のマニュアルにまとめてあります。',
     "Always put the date and a title on your expense form. How to fill it in is in the General Affairs manual.", None, None),
    ('先方に送る案内状も、同じマニュアルの形式で作成してください。',
     'Please also prepare invitation letters to clients in the same format as the manual.', None, None),
    ('文言を修正するときは、意図が変わらないように注意してください。',
     "When you change the wording, take care that the intended meaning doesn't change.", None, None),
    ('なお、急ぎでない申請は、今月の受け付けを見送ることがあります。',
     'Note that requests that are not urgent may be held over this month.', None, None),
    ('ご不明な点は、総務部までご連絡ください。', 'If anything is unclear, please contact General Affairs.', None, None),
    ('総務部 佐藤', 'Sato, General Affairs', None, S),
  ]),
  dict(chapter=2, section=3, format='phone', title='見積もりの修正について', lines=[
    ('お電話ありがとうございます。ミナト医療の小林です。', 'Thank you for calling. This is Kobayashi at Minato Medical.', '小林', None),
    ('いつもお世話になっております。サクラシステムの山田です。先日はありがとうございました。',
     'Thank you as always. This is Yamada from Sakura Systems. Thank you for the other day.', '山田', None),
    ('こちらこそ。今日は、どのようなご用件でしょうか。', 'Likewise. What can I do for you today?', '小林', None),
    ('先日ご提示した見積もりについて、一部修正がありまして、至急お伝えしたいと思いました。',
     "There's a change to part of the quote we gave you the other day, and I wanted to let you know right away.", '山田', None),
    ('そうですか。どの部分でしょうか。', 'I see. Which part?', '小林', None),
    ('新しいシステムの使用料に、保守の費用を含む形に変えました。', "We've changed the fee for the new system so that it includes maintenance.", '山田', None),
    ('なるほど。資料は、もうダウンロードできますか。', 'I see. Can I download the materials already?', '小林', None),
    ('はい、すでにサイトに上げてあります。パスワードを入力して、ご覧ください。',
     "Yes, they're already on the site. Please enter the password to view them.", '山田', None),
    ('ありがとうございます。社内では、導入の効果とメリットを重視していますので、その点の報告もいただけますか。',
     "Thank you. Internally we place weight on the effects and benefits of adopting it, so could you report on that too?", '小林', None),
    ('もちろんです。構成と効果をまとめた資料を、次の打ち合わせでご説明します。',
     "Of course. I'll explain the setup and the effects at our next meeting, with materials summarising them.", '山田', None),
    ('それから、該当する部署の担当者が、工場の見学を希望しています。',
     'Also, the person in charge in the relevant department would like to tour the factory.', '小林', None),
    ('承知しました。見学のあとで、会食の席もご用意いたします。', "Certainly. We'll arrange a meal together after the tour as well.", '山田', None),
    ('助かります。意思の疎通がしっかりできると、商談も進めやすいですね。',
     "That helps. When we understand each other well, the negotiations go more smoothly.", '小林', None),
    ('はい。お客様のレベルに合わせた説明を意識して、準備いたします。',
     "Yes. I'll prepare with your team's level in mind.", '山田', None),
  ]),
  dict(chapter=2, section=4, format='conversation', title='学習アプリの分析', lines=[
    ('木村さん、この前の学習アプリの分析、もう終わりましたか。', 'Kimura, have you finished analysing that learning app yet?', '佐藤', None),
    ('はい。全体の結果を見ると、前半のレッスンでやめてしまう人が多いことが、明らかになりました。',
     "Yes. Looking at the overall results, it's clear that many people quit during the first half of the lessons.", '木村', None),
    ('単に、問題が難しいからでしょうか。', 'Is it simply that the questions are hard?', '佐藤', None),
    ('それだけではないと思います。利用者に理由を尋ねると、設定がわかりにくいという声もありました。',
     "I don't think that's all. When we asked users why, some said the settings were hard to understand.", '木村', None),
    ('なるほど。どの箇所を指して、わかりにくいと言っているんですか。', 'I see. Which part are they pointing to when they say that?', '佐藤', None),
    ('最初に、学ぶ目的とレベルを選ぶ画面です。', 'The first screen, where you choose your reason for learning and your level.', '木村', None),
    ('そこで迷うと、別の画面に移動しても、問題が生じやすいですね。',
     'If you get lost there, problems tend to come up even after you move to another screen.', '佐藤', None),
    ('はい。それから、地域によっても結果が違いました。', 'Yes. And the results also differed by region.', '木村', None),
    ('一般のやり方を、すべての地域に当てはめるのは難しいですね。', "It's hard to apply the usual approach to every region.", '佐藤', None),
    ('ええ。対象によって、ふさわしい方式は、それぞれ違うと思います。',
     'Right. I think the suitable approach is different for each group.', '木村', None),
    ('学習の時間は、どう測定しましたか。', 'How did you measure study time?', '佐藤', None),
    ('アプリの記録を使いました。ただ、特定の利用者の記録が多いので、留意が必要です。',
     "We used the app's records. But a lot of them come from particular users, so we need to keep that in mind.", '木村', None),
    ('ほかにも、気をつけるべき事柄はありますか。', 'Is there anything else to watch out for?', '佐藤', None),
    ('数字だけでは、本当の理由がわからない可能性があります。次は、直接話を聞いてみます。',
     "The numbers alone may not show the real reason. Next, I'll talk to people directly.", '木村', None),
  ]),
  dict(chapter=2, section=5, format='conversation', title='模擬テストの結果', lines=[
    ('木村さん、おはようございます。先週のBJTの模擬テスト、採点の結果が出ましたよ。',
     "Good morning, Kimura. The scores for last week's BJT mock test are out.", '中村', None),
    ('おはようございます。どうでしたか。想像より悪くなければいいんですが。',
     "Good morning. How was it? I hope it's not worse than I imagined.", '木村', None),
    ('全体的には、悪くありません。ただ、聴解の設問で、点数が低い部分がありました。',
     'On the whole, not bad. But some of the listening questions scored low.', '中村', None),
    ('そうですか。具体例を一つ挙げてもらえますか。', 'I see. Could you give me one concrete example?', '木村', None),
    ('会話に三人以上が登場する問題です。誰の発話か、わからなくなったようですね。',
     'Questions where three or more people appear in the conversation. It seems you lost track of who said what.', '中村', None),
    ('確かに、現実の会議と同様に、話す人が多いと難しいです。', "True. Just like real meetings, it's hard when lots of people are talking.", '木村', None),
    ('解決の手段として、毎朝ニュースを聞く活動を、開始したらどうでしょう。',
     'As a way to fix it, how about starting to listen to the news every morning?', '中村', None),
    ('いい考えですね。一日三十分程度なら、続けられそうです。', "Good idea. Around thirty minutes a day, I think I can keep that up.", '木村', None),
    ('それから、留意点を一つ挙げると、基本的な敬語も、もう一度確認しておくといいですね。',
     "And one point to note: it's worth reviewing basic keigo again too.", '中村', None),
    ('はい。本番の前に、ほかに関連する練習はありますか。', 'OK. Is there any other related practice before the real test?', '木村', None),
    ('ビジネスの場面を中心にした問題集が、候補として三冊あります。',
     'There are three candidate workbooks that focus on business situations.', '中村', None),
    ('一般的な問題集より、そちらのほうが好ましいですね。', "Those sound better than general workbooks.", '木村', None),
    ('ええ。今後の結果は、昇進の希望にも、よい影響を与えると思いますよ。',
     'Yes. Your results from here on should help your hopes of promotion too.', '中村', None),
    ('ありがとうございます。具体的な計画を立てて、がんばります。', "Thank you. I'll make a concrete plan and work hard.", '木村', None),
  ]),
]

# ─── Build ───────────────────────────────────────────────────────────────────
def ts_str(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

section_words = {}
for w in VOCAB:
    section_words.setdefault((w['chapter'], w['section']), []).append(w['word'])

HIRA = re.compile(r'^[\u3040-\u309f]+$')

def lookup(text, words):  # mirrors SectionReader.lookup for formatted passages
    return next((w for w in words if w == text
                 or (w.startswith(text) and HIRA.match(w[len(text):]))), None)

out = ["import type { SectionPassage } from '@/types/passage'", '',
       '/**', ' * Business Japanese reading texts for BJT sections: emails, office chat,',
       ' * meetings, reports and notices, each built around its section\'s words.',
       ' * Audio: scripts/generate-bjt-passages.ts. Generated by scripts/build-bjt-passages.py; edit the',
       ' * texts there and re-run rather than editing this file.', ' */',
       'export const PASSAGES_BJT: SectionPassage[] = [']
report = []
false_hits = []
for p in PASSAGES:
    words = section_words[(p['chapter'], p['section'])]
    used = set()
    out.append('  {')
    out.append(f"    level: 'BJT', chapter: {p['chapter']}, section: {p['section']}, format: '{p['format']}',")
    out.append(f"    title: {ts_str(p['title'])},")
    sents = []
    for jp, en, sp, kind in p['lines']:
        seg = segment(jp)
        for x in seg:
            hit = lookup(x['t'], words)
            if hit and x.get('lex'):
                used.add(hit)
            elif hit:
                false_hits.append((p['chapter'], p['section'], x['t'], hit))
        toks = ', '.join('{ t: %s%s }' % (ts_str(x['t']), f", r: {ts_str(x['r'])}" if x.get('r') else '') for x in seg)  # 'lex' is build-only
        extra = (f", speaker: {ts_str(sp)}" if sp else '') + (f", kind: '{kind}'" if kind else '')
        sents.append(f"      {{ seg: [{toks}], en: {ts_str(en)}{extra} }},")
    tw = [w for w in words if w in used]
    out.append('    targetWords: [' + ', '.join(ts_str(w) for w in tw) + '],')
    out.append('    sentences: [')
    out.extend(sents)
    out.append('    ],')
    out.append('  },')
    report.append((p['chapter'], p['section'], p['format'], len(tw), len(words), [w for w in words if w not in used]))
out.append(']')
open(os.path.join(ROOT, 'src', 'lib', 'passages_bjt.ts'), 'w', encoding='utf-8').write('\n'.join(out) + '\n')

for ch, se, fmt, n, total, miss in report:
    print(f'{ch}-{se} {fmt:8} tappable {n}/{total}' + (f'   not reachable: {" ".join(miss)}' if miss else ''))
for ch, se, t, hit in false_hits:
    print(f'  unintended tap: {ch}-{se} token {t!r} would open {hit!r}')
if '--review' in sys.argv:
    for p in PASSAGES:
        print(f"\n=== {p['chapter']}-{p['section']} ===")
        for jp, *_ in p['lines']:
            print(' '.join(f"{x['t']}({x['r']})" if x.get('r') else x['t'] for x in segment(jp)))
