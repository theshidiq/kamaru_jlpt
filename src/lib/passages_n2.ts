import type { SectionPassage } from '@/types/passage'

/**
 * Original reading passages, one per N2 section, weaving that section's
 * vocabulary into a short coherent narrative rather than a word list.
 *
 * All content is written for this app — no reproduction of JLPT material.
 *
 * seg[] uses the same token shape as the vocab example sentences, so the
 * furigana renderer is shared and the audio generator can map each token to
 * a character range in the ElevenLabs alignment.
 */
export const PASSAGES_N2: SectionPassage[] = [
  // ── Chapter 1 · Section 1 — Family ──────────────────────────────────────
  {
    level: 'N2',
    chapter: 1,
    section: 1,
    title: '家族の役目',
    targetWords: [
      '一家', 'ありがたい', '向き合う', 'つくづく', '養う', '役目', '甘える',
      '世間知らず', 'しつけ', '言いつける', '自立', '言い出す', '意思', '尊重',
      '説得', '納得', '逆らう', '反省', '放っておく', '介護', 'ホームヘルパー',
      '世代', '継ぐ', '妊娠', '出産', '産む',
    ],
    sentences: [
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'の' }, { t: '一家', r: 'いっか' },
          { t: 'は、' }, { t: '祖父', r: 'そふ' }, { t: 'の' },
          { t: '代', r: 'だい' }, { t: 'から' }, { t: '小', r: 'ちい' },
          { t: 'さな' }, { t: '店', r: 'みせ' }, { t: 'を' },
          { t: '継', r: 'つ' }, { t: 'いできた。' },
        ],
        en: 'My family has carried on a small shop since my grandfather’s generation.',
      },
      {
        seg: [
          { t: '父', r: 'ちち' }, { t: 'は' }, { t: '店', r: 'みせ' },
          { t: 'で' }, { t: '家族', r: 'かぞく' }, { t: 'を' },
          { t: '養', r: 'やしな' }, { t: 'い、' }, { t: '母', r: 'はは' },
          { t: 'は' }, { t: '私', r: 'わたし' }, { t: 'たちの' },
          { t: 'しつけ' }, { t: 'を' }, { t: '自分', r: 'じぶん' },
          { t: 'の' }, { t: '役目', r: 'やくめ' }, { t: 'だと' },
          { t: '考', r: 'かんが' }, { t: 'えていた。' },
        ],
        en: 'My father supported the family through the shop, and my mother saw our upbringing as her own duty.',
      },
      {
        seg: [
          { t: '子', r: 'こ' }, { t: 'どものころ、' },
          { t: '私', r: 'わたし' }, { t: 'は' }, { t: 'よく' },
          { t: '母', r: 'はは' }, { t: 'に' }, { t: '甘', r: 'あま' },
          { t: 'え、' }, { t: '兄', r: 'あに' }, { t: 'の' },
          { t: 'いたずら' }, { t: 'を' }, { t: '父', r: 'ちち' },
          { t: 'に' }, { t: '言', r: 'い' }, { t: 'いつけて' },
          { t: 'ばかりいた。' },
        ],
        en: 'As a child I often acted spoiled with my mother and was always telling my father about my brother’s mischief.',
      },
      {
        seg: [
          { t: '十八', r: 'じゅうはち' }, { t: 'の' }, { t: '春', r: 'はる' },
          { t: '、' }, { t: '東京', r: 'とうきょう' }, { t: 'で' },
          { t: '働', r: 'はたら' }, { t: 'きたいと' }, { t: '言', r: 'い' },
          { t: 'い' }, { t: '出', r: 'だ' }, { t: 'したとき、' },
          { t: '父', r: 'ちち' }, { t: 'は' }, { t: '強', r: 'つよ' },
          { t: 'く' }, { t: '反対', r: 'はんたい' }, { t: 'した。' },
        ],
        en: 'The spring I turned eighteen, when I brought up wanting to work in Tokyo, my father strongly objected.',
      },
      {
        seg: [
          { t: 'お' }, { t: '前', r: 'まえ' }, { t: 'は' },
          { t: '世間知', r: 'せけんし' }, { t: 'らずだから、' },
          { t: '一人', r: 'ひとり' }, { t: 'で' }, { t: '自立', r: 'じりつ' },
          { t: 'などできない、と。' },
        ],
        en: '"You are naive about the world," he said, "you could never stand on your own."',
      },
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'は' }, { t: '逆', r: 'さか' },
          { t: 'らわず、' }, { t: '一晩', r: 'ひとばん' },
          { t: 'かけて' }, { t: '父', r: 'ちち' }, { t: 'と' },
          { t: '向', r: 'む' }, { t: 'き' }, { t: '合', r: 'あ' },
          { t: 'い、' }, { t: '自分', r: 'じぶん' }, { t: 'の' },
          { t: '意思', r: 'いし' }, { t: 'を' }, { t: 'ゆっくり' },
          { t: '説明', r: 'せつめい' }, { t: 'した。' },
        ],
        en: 'Rather than defy him, I spent a whole evening facing my father and slowly explaining my own intentions.',
      },
      {
        seg: [
          { t: '説得', r: 'せっとく' }, { t: 'に' }, { t: '三日', r: 'みっか' }, { t: 'かかったが、' },
          { t: '最後', r: 'さいご' }, { t: 'には' }, { t: '父', r: 'ちち' },
          { t: 'も' }, { t: '納得', r: 'なっとく' }, { t: 'し、' },
          { t: '私', r: 'わたし' }, { t: 'の' }, { t: '決断', r: 'けつだん' },
          { t: 'を' }, { t: '尊重', r: 'そんちょう' }, { t: 'してくれた。' },
        ],
        en: 'Persuading him took three days, but in the end my father accepted it and respected my decision.',
      },
      {
        seg: [
          { t: 'あのとき' }, { t: '放', r: 'ほう' }, { t: 'っておかれて' },
          { t: 'いたら、' }, { t: '今', r: 'いま' }, { t: 'の' },
          { t: '私', r: 'わたし' }, { t: 'は' }, { t: 'なかっただろうと、' },
          { t: 'つくづく' }, { t: '思', r: 'おも' }, { t: 'う。' },
        ],
        en: 'I feel deeply that if I had simply been left alone back then, I would not be who I am today.',
      },
      {
        seg: [
          { t: '去年', r: 'きょねん' }, { t: '、' }, { t: '姉', r: 'あね' },
          { t: 'が' }, { t: '妊娠', r: 'にんしん' }, { t: 'し、' },
          { t: '無事', r: 'ぶじ' }, { t: 'に' }, { t: '女', r: 'おんな' },
          { t: 'の' }, { t: '子', r: 'こ' }, { t: 'を' },
          { t: '産', r: 'う' }, { t: 'んだ。' },
        ],
        en: 'Last year my older sister became pregnant and safely gave birth to a baby girl.',
      },
      {
        seg: [
          { t: '出産', r: 'しゅっさん' }, { t: 'の' }, { t: '日', r: 'ひ' },
          { t: '、' }, { t: '三', r: 'さん' }, { t: 'つの' },
          { t: '世代', r: 'せだい' }, { t: 'が' },
          { t: '病院', r: 'びょういん' }, { t: 'に' },
          { t: '集', r: 'あつ' }, { t: 'まった。' },
        ],
        en: 'On the day of the birth, three generations gathered at the hospital.',
      },
      {
        seg: [
          { t: '同', r: 'おな' }, { t: 'じころ' }, { t: '祖母', r: 'そぼ' },
          { t: 'の' }, { t: '介護', r: 'かいご' }, { t: 'が' },
          { t: '始', r: 'はじ' }, { t: 'まり、' },
          { t: '週', r: 'しゅう' }, { t: 'に' }, { t: '二', r: 'に' },
          { t: '度', r: 'ど' }, { t: 'ホームヘルパー' }, { t: 'に' },
          { t: '来', r: 'き' }, { t: 'てもらっている。' },
        ],
        en: 'Around the same time, care for my grandmother began, and a home helper now comes twice a week.',
      },
      {
        seg: [
          { t: '若', r: 'わか' }, { t: 'いころ' }, { t: 'の' },
          { t: '自分', r: 'じぶん' }, { t: 'を' },
          { t: '反省', r: 'はんせい' }, { t: 'することも' },
          { t: '多', r: 'おお' }, { t: 'いが、' },
          { t: '家族', r: 'かぞく' }, { t: 'がいることを' },
          { t: '今', r: 'いま' }, { t: 'は' }, { t: '心', r: 'こころ' },
          { t: 'から' }, { t: 'ありがたい' }, { t: 'と' },
          { t: '思', r: 'おも' }, { t: 'う。' },
        ],
        en: 'I often reflect on how I was when I was young, but now I am truly grateful to have a family.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 1,
    section: 2,
    title: '友人という縁',
    targetWords: [
      '友人', '仲', '縁', 'ニックネーム', '大半', '恵まれる', '頼る', '頼もしい', '見習う', '打ち明ける', '励ます', 'あえて', 'なぐさめる', '察する', '思いやり', '何気ない', 'からかう', '幹事', '呼び出す', '盛り上がる', 'あきれる', 'ふざける', '久しい',
    ],
    sentences: [
      {
        seg: [
          { t: '大学', r: 'だいがく' }, { t: 'の' }, { t: '友人', r: 'ゆうじん' }, { t: 'と' }, { t: '出会', r: 'であ' }, { t: 'って' }, { t: 'から、' }, { t: 'もう' }, { t: '十', r: 'じゅう' }, { t: '年', r: 'ねん' }, { t: 'が' }, { t: '過', r: 'す' }, { t: 'ぎた。' },
        ],
        en: 'More than ten years have passed since I met my friend from university.',
      },
      {
        seg: [
          { t: '久', r: 'ひさ' }, { t: 'しく' }, { t: '会', r: 'あ' }, { t: 'わない' }, { t: '時期', r: 'じき' }, { t: 'も' }, { t: 'あったが、' }, { t: '私', r: 'わたし' }, { t: 'たちの' }, { t: '仲', r: 'なか' }, { t: 'は' }, { t: '変', r: 'か' }, { t: 'わらない。' },
        ],
        en: 'There were long stretches when we did not meet, but our friendship has not changed.',
      },
      {
        seg: [
          { t: '縁', r: 'えん' }, { t: 'とは' }, { t: 'ふしぎな' }, { t: 'もの' }, { t: 'だと' }, { t: '思', r: 'おも' }, { t: 'う。' },
        ],
        en: 'Fate is a curious thing, I think.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'は' }, { t: '皆', r: 'みな' }, { t: 'から' }, { t: 'へんな' }, { t: 'ニックネーム' }, { t: 'で' }, { t: '呼', r: 'よ' }, { t: 'ばれて' }, { t: 'いたが、' }, { t: 'いつも' }, { t: '笑', r: 'わら' }, { t: 'って' }, { t: 'ふざけて' }, { t: 'いた。' },
        ],
        en: 'Everyone called him by a strange nickname, but he always laughed and joked about it.',
      },
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'の' }, { t: '友人', r: 'ゆうじん' }, { t: 'の' }, { t: '大半', r: 'たいはん' }, { t: 'は' }, { t: '社会', r: 'しゃかい' }, { t: 'に' }, { t: '出', r: 'で' }, { t: 'て' }, { t: '忙', r: 'いそが' }, { t: 'しくなった。' },
        ],
        en: 'The majority of my friends became busy once they entered working life.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'だけは' }, { t: 'いつでも' }, { t: '頼', r: 'たよ' }, { t: 'れる、' }, { t: 'とても' }, { t: '頼', r: 'たの' }, { t: 'もしい' }, { t: '存在', r: 'そんざい' }, { t: 'だ。' },
        ],
        en: 'He alone is someone I can always rely on — a truly dependable presence.',
      },
      {
        seg: [
          { t: '仕事', r: 'しごと' }, { t: 'で' }, { t: '失敗', r: 'しっぱい' }, { t: 'した' }, { t: '夜', r: 'よる' }, { t: '、' }, { t: '私', r: 'わたし' }, { t: 'は' }, { t: '彼', r: 'かれ' }, { t: 'に' }, { t: '悩', r: 'なや' }, { t: 'みを' }, { t: '打', r: 'う' }, { t: 'ち' }, { t: '明', r: 'あ' }, { t: 'けた。' },
        ],
        en: 'The night I failed at work, I confided my worries in him.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'は' }, { t: 'あきれる' }, { t: 'こと' }, { t: 'も' }, { t: 'なく、' }, { t: 'ただ' }, { t: '黙', r: 'だま' }, { t: 'って' }, { t: '察', r: 'さっ' }, { t: 'して' }, { t: 'くれた。' },
        ],
        en: 'He was not exasperated with me; he simply stayed quiet and understood.',
      },
      {
        seg: [
          { t: 'そして' }, { t: 'あえて' }, { t: '明', r: 'あか' }, { t: 'るい' }, { t: '声', r: 'こえ' }, { t: 'で' }, { t: '私', r: 'わたし' }, { t: 'を' }, { t: 'なぐさめ、' }, { t: '励', r: 'はげ' }, { t: 'まして' }, { t: 'くれた。' },
        ],
        en: 'And then he deliberately used a bright voice to comfort and encourage me.',
      },
      {
        seg: [
          { t: 'その' }, { t: '何気', r: 'なにげ' }, { t: 'ない' }, { t: '思', r: 'おも' }, { t: 'いやり' }, { t: 'に、' }, { t: '私', r: 'わたし' }, { t: 'は' }, { t: '恵', r: 'めぐ' }, { t: 'まれて' }, { t: 'いると' }, { t: '感', r: 'かん' }, { t: 'じた。' },
        ],
        en: 'In that casual consideration, I felt how fortunate I was.',
      },
      {
        seg: [
          { t: '来月', r: 'らいげつ' }, { t: '、' }, { t: '私', r: 'わたし' }, { t: 'が' }, { t: '幹事', r: 'かんじ' }, { t: 'に' }, { t: 'なって' }, { t: '同級生', r: 'どうきゅうせい' }, { t: 'を' }, { t: '呼', r: 'よ' }, { t: 'び' }, { t: '出', r: 'だ' }, { t: 'す' }, { t: '予定', r: 'よてい' }, { t: 'だ。' },
        ],
        en: 'Next month I am to be the organizer and call our old classmates together.',
      },
      {
        seg: [
          { t: 'きっと' }, { t: '昔', r: 'むかし' }, { t: 'のように' }, { t: 'からかい' }, { t: '合', r: 'あ' }, { t: 'って、' }, { t: '大', r: 'おお' }, { t: 'いに' }, { t: '盛', r: 'も' }, { t: 'り' }, { t: '上', r: 'あ' }, { t: 'がる' }, { t: 'だろう。' },
        ],
        en: 'We will surely tease each other like the old days and have a lively time.',
      },
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'も' }, { t: '彼', r: 'かれ' }, { t: 'の' }, { t: '優', r: 'やさ' }, { t: 'しさ' }, { t: 'を' }, { t: '見習', r: 'みなら' }, { t: 'いたい。' },
        ],
        en: 'I want to follow his example of kindness.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 1,
    section: 3,
    title: '思いがけない再会',
    targetWords: [
      '初対面', '自己紹介', 'おじぎ', '近所付き合い', '大家', '飼い主', '交わす', '呼び止める', '振り返る', '再会', '覚え', '心当たり', '結びつく', 'とっさ', 'てっきり', '思い込む', 'コミュニケーション', 'ネットワーク', '直接', '接する', '招く', '気配り', '込める', '同期', 'ぐち', '大いに',
    ],
    sentences: [
      {
        seg: [
          { t: '引', r: 'ひ' }, { t: 'っ' }, { t: '越', r: 'こ' }, { t: 'した' }, { t: '日', r: 'ひ' }, { t: '、' }, { t: '私', r: 'わたし' }, { t: 'は' }, { t: '大家', r: 'おおや' }, { t: 'さん' }, { t: 'と' }, { t: '初対面', r: 'しょたいめん' }, { t: 'の' }, { t: '挨拶', r: 'あいさつ' }, { t: 'を' }, { t: 'した。' },
        ],
        en: 'The day I moved in, I greeted my landlord for the first time.',
      },
      {
        seg: [
          { t: '丁寧', r: 'ていねい' }, { t: 'に' }, { t: 'おじぎ' }, { t: 'を' }, { t: 'して、' }, { t: '自己紹介', r: 'じこしょうかい' }, { t: 'を' }, { t: 'した。' },
        ],
        en: 'I bowed politely and introduced myself.',
      },
      {
        seg: [
          { t: '近所付', r: 'きんじょづ' }, { t: 'き' }, { t: '合', r: 'あ' }, { t: 'い' }, { t: 'は' }, { t: '苦手', r: 'にがて' }, { t: 'だったが、' }, { t: '気配', r: 'きくば' }, { t: 'り' }, { t: 'を' }, { t: '込', r: 'こ' }, { t: 'めて' }, { t: '接', r: 'せっ' }, { t: 'する' }, { t: 'ように' }, { t: 'した。' },
        ],
        en: 'I was not good at neighborhood relations, but I tried to deal with people attentively.',
      },
      {
        seg: [
          { t: 'ある' }, { t: '朝', r: 'あさ' }, { t: '、' }, { t: '犬', r: 'いぬ' }, { t: 'の' }, { t: '飼', r: 'か' }, { t: 'い' }, { t: '主', r: 'ぬし' }, { t: 'に' }, { t: '呼', r: 'よ' }, { t: 'び' }, { t: '止', r: 'と' }, { t: 'められた。' },
        ],
        en: 'One morning, a dog owner called out and stopped me.',
      },
      {
        seg: [
          { t: '振', r: 'ふ' }, { t: 'り' }, { t: '返', r: 'かえ' }, { t: 'ると、' }, { t: 'どこか' }, { t: '見覚', r: 'みおぼ' }, { t: 'え' }, { t: 'の' }, { t: 'ある' }, { t: '顔', r: 'かお' }, { t: 'だった。' },
        ],
        en: 'When I looked back, it was a face I somehow recognized.',
      },
      {
        seg: [
          { t: 'てっきり' }, { t: '近所', r: 'きんじょ' }, { t: 'の' }, { t: '人', r: 'ひと' }, { t: 'だと' }, { t: '思', r: 'おも' }, { t: 'い' }, { t: '込', r: 'こ' }, { t: 'んで' }, { t: 'いたが、' }, { t: '違', r: 'ちが' }, { t: 'った。' },
        ],
        en: 'I had been certain he was someone from the neighborhood, but I was wrong.',
      },
      {
        seg: [
          { t: '高校', r: 'こうこう' }, { t: 'の' }, { t: '同期', r: 'どうき' }, { t: 'だと' }, { t: '分', r: 'わ' }, { t: 'かった' }, { t: '瞬間', r: 'しゅんかん' }, { t: '、' }, { t: 'とっさに' }, { t: '声', r: 'こえ' }, { t: 'が' }, { t: '出', r: 'で' }, { t: 'なかった。' },
        ],
        en: 'The instant I realized he was from my high school year, no words came out.',
      },
      {
        seg: [
          { t: '心当', r: 'こころあ' }, { t: 'たり' }, { t: 'の' }, { t: 'ない' }, { t: '名前', r: 'なまえ' }, { t: 'が' }, { t: '記憶', r: 'きおく' }, { t: 'と' }, { t: '結', r: 'むす' }, { t: 'びついた' }, { t: 'とき、' }, { t: '二人', r: 'ふたり' }, { t: 'で' }, { t: '笑', r: 'わら' }, { t: 'った。' },
        ],
        en: 'When a name I could not place connected with my memory, the two of us laughed.',
      },
      {
        seg: [
          { t: '十', r: 'じゅう' }, { t: '年', r: 'ねん' }, { t: 'ぶり' }, { t: 'の' }, { t: '再会', r: 'さいかい' }, { t: 'だった。' },
        ],
        en: 'It was a reunion after ten years.',
      },
      {
        seg: [
          { t: 'メール' }, { t: 'や' }, { t: 'ネットワーク' }, { t: 'で' }, { t: 'の' }, { t: 'コミュニケーション' }, { t: 'も' }, { t: 'いい' }, { t: 'が、' }, { t: '直接', r: 'ちょくせつ' }, { t: '会', r: 'かい' }, { t: 'うのに' }, { t: 'はかなわない。' },
        ],
        en: 'Communication by email or online networks is fine, but nothing beats meeting in person.',
      },
      {
        seg: [
          { t: '今度', r: 'こんど' }, { t: '、' }, { t: '家', r: 'いえ' }, { t: 'に' }, { t: '招', r: 'まね' }, { t: 'いて、' }, { t: '仕事', r: 'しごと' }, { t: 'の' }, { t: 'ぐち' }, { t: 'でも' }, { t: '大', r: 'おお' }, { t: 'いに' }, { t: '話', r: 'はな' }, { t: 'そう' }, { t: 'と' }, { t: '約束', r: 'やくそく' }, { t: 'した。' },
        ],
        en: 'We promised that next time I would invite him over and we would grumble at length about work.',
      },
      {
        seg: [
          { t: '言葉', r: 'ことば' }, { t: 'を' }, { t: '交', r: 'か' }, { t: 'わす' }, { t: 'だけ' }, { t: 'で、' }, { t: 'その' }, { t: '日', r: 'ひ' }, { t: 'は' }, { t: '明', r: 'あか' }, { t: 'るく' }, { t: 'なった。' },
        ],
        en: 'Simply exchanging words made that day brighter.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 1,
    section: 4,
    title: '視線のむこう',
    targetWords: [
      'カップル', '愛', '同士', '互い', 'つり合う', 'むしろ', 'いわば', '視線', '見つめる', 'そらす', 'ちらっと', 'もしかすると', '探る', '示す', '口実', 'うつむく', 'こそこそ', 'ささやく', '禁物', '許す', '合コン', 'アプローチ', '運命', '決意', 'プロポーズ', '誓う', '花嫁',
    ],
    sentences: [
      {
        seg: [
          { t: '駅', r: 'えき' }, { t: 'の' }, { t: '本屋', r: 'ほんや' }, { t: 'で、' }, { t: '私', r: 'わたし' }, { t: 'は' }, { t: 'はじめて' }, { t: '彼女', r: 'かのじょ' }, { t: 'の' }, { t: '視線', r: 'しせん' }, { t: 'に' }, { t: '気', r: 'き' }, { t: 'づいた。' },
        ],
        en: 'At the bookshop by the station, I noticed her gaze for the first time.',
      },
      {
        seg: [
          { t: '目', r: 'め' }, { t: 'が' }, { t: '合', r: 'あ' }, { t: 'うと、' }, { t: '彼女', r: 'かのじょ' }, { t: 'は' }, { t: 'ちらっと' }, { t: 'こちら' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'て、' }, { t: 'すぐに' }, { t: '目', r: 'め' }, { t: 'を' }, { t: 'そらした。' },
        ],
        en: 'When our eyes met, she glanced over and immediately looked away.',
      },
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'も' }, { t: 'うつむいて' }, { t: 'しまい、' }, { t: 'その' }, { t: '日', r: 'ひ' }, { t: 'は' }, { t: '何', r: 'なに' }, { t: 'も' }, { t: '言', r: 'い' }, { t: 'えなかった。' },
        ],
        en: 'I looked down as well, and said nothing that day.',
      },
      {
        seg: [
          { t: '友人', r: 'ゆうじん' }, { t: 'に' }, { t: '相談', r: 'そうだん' }, { t: 'すると、' }, { t: 'こそこそ' }, { t: '悩', r: 'なや' }, { t: 'む' }, { t: 'の' }, { t: 'は' }, { t: '禁物', r: 'きんもつ' }, { t: 'だと' }, { t: '言', r: 'い' }, { t: 'われた。' },
        ],
        en: 'When I asked a friend, he told me that agonizing over it in secret was the worst thing to do.',
      },
      {
        seg: [
          { t: '合', r: 'ごう' }, { t: 'コン' }, { t: 'に' }, { t: '誘', r: 'さそ' }, { t: 'われた' }, { t: 'こと' }, { t: 'も' }, { t: 'あった' }, { t: 'が、' }, { t: '私', r: 'わたし' }, { t: 'は' }, { t: '興味', r: 'きょうみ' }, { t: 'を' }, { t: '示', r: 'しめ' }, { t: 'さなかった。' },
        ],
        en: 'I was invited to a group blind date once, but I showed no interest.',
      },
      {
        seg: [
          { t: 'むしろ' }, { t: 'はっきり' }, { t: 'アプローチ' }, { t: 'した' }, { t: '方', r: 'ほう' }, { t: 'が' }, { t: 'いい、' }, { t: 'いわば' }, { t: '勇気', r: 'ゆうき' }, { t: 'の' }, { t: '問題', r: 'もんだい' }, { t: 'だ、と。' },
        ],
        en: 'Rather, he said, I should approach her clearly — it was, so to speak, a matter of courage.',
      },
      {
        seg: [
          { t: '本', r: 'ほん' }, { t: 'を' }, { t: '借', r: 'か' }, { t: 'りる' }, { t: 'という' }, { t: '口実', r: 'こうじつ' }, { t: 'で、' }, { t: '私', r: 'わたし' }, { t: 'は' }, { t: '彼女', r: 'かのじょ' }, { t: 'に' }, { t: '話', r: 'はな' }, { t: 'しかけた。' },
        ],
        en: 'Using the excuse of borrowing a book, I spoke to her.',
      },
      {
        seg: [
          { t: '相手', r: 'あいて' }, { t: 'の' }, { t: '気持', r: 'きも' }, { t: 'ち' }, { t: 'を' }, { t: '探', r: 'さぐ' }, { t: 'る' }, { t: 'ように、' }, { t: 'ゆっくり' }, { t: 'と' }, { t: '言葉', r: 'ことば' }, { t: 'を' }, { t: '選', r: 'えら' }, { t: 'んだ。' },
        ],
        en: 'I chose my words slowly, as if probing how she felt.',
      },
      {
        seg: [
          { t: 'もしかすると' }, { t: '迷惑', r: 'めいわく' }, { t: 'かも' }, { t: 'しれない' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'ったが、' }, { t: '彼女', r: 'かのじょ' }, { t: 'は' }, { t: '笑', r: 'わら' }, { t: 'って' }, { t: '許', r: 'ゆる' }, { t: 'して' }, { t: 'くれた。' },
        ],
        en: 'I thought I might be bothering her, but she laughed and forgave me.',
      },
      {
        seg: [
          { t: 'それから' }, { t: '私', r: 'わたし' }, { t: 'たち' }, { t: 'は' }, { t: '恋人', r: 'こいびと' }, { t: '同士', r: 'どうし' }, { t: 'に' }, { t: 'なり、' }, { t: '互', r: 'たが' }, { t: 'いの' }, { t: '時間', r: 'じかん' }, { t: 'を' }, { t: '大切', r: 'たいせつ' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'After that we became a couple and treasured our time together.',
      },
      {
        seg: [
          { t: 'カップル' }, { t: 'として' }, { t: 'つり' }, { t: '合', r: 'あ' }, { t: 'って' }, { t: 'いる' }, { t: 'か' }, { t: 'どうか' }, { t: 'など、' }, { t: 'もう' }, { t: '気', r: 'き' }, { t: 'に' }, { t: 'ならなかった。' },
        ],
        en: 'Whether we matched as a couple no longer concerned me at all.',
      },
      {
        seg: [
          { t: '彼女', r: 'かのじょ' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'つめる' }, { t: 'たび' }, { t: 'に、' }, { t: 'これ' }, { t: 'が' }, { t: '運命', r: 'うんめい' }, { t: 'だと' }, { t: '感', r: 'かん' }, { t: 'じた。' },
        ],
        en: 'Every time I gazed at her, I felt this was fate.',
      },
      {
        seg: [
          { t: '去年', r: 'きょねん' }, { t: 'の' }, { t: '冬', r: 'ふゆ' }, { t: '、' }, { t: '私', r: 'わたし' }, { t: 'は' }, { t: '決意', r: 'けつい' }, { t: 'して' }, { t: 'プロポーズ' }, { t: 'した。' },
        ],
        en: 'Last winter, I made up my mind and proposed.',
      },
      {
        seg: [
          { t: '小', r: 'ちい' }, { t: 'さな' }, { t: '声', r: 'こえ' }, { t: 'で' }, { t: 'ささやいた' }, { t: '愛', r: 'あい' }, { t: 'の' }, { t: '言葉', r: 'ことば' }, { t: 'を、' }, { t: '一生', r: 'いっしょう' }, { t: '守', r: 'まも' }, { t: 'る' }, { t: 'と' }, { t: '誓', r: 'ちか' }, { t: 'った。' },
        ],
        en: 'I vowed to keep forever the words of love I whispered in a small voice.',
      },
      {
        seg: [
          { t: '春', r: 'はる' }, { t: '、' }, { t: '彼女', r: 'かのじょ' }, { t: 'は' }, { t: '花嫁', r: 'はなよめ' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'In spring, she will become a bride.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 1,
    section: 5,
    title: 'ささいなことから',
    targetWords: [
      'ささいな', '避ける', '誤解', '勘違い', '言い訳', 'きっぱり', 'ばかにする', 'いやみ', '責める', 'けなす', 'だまる', 'にらむ', '裏切る', 'だます', 'せい', '行為', '口論', '怒鳴る', '殴る', '貸し借り', 'ばらす', '気まずい', '今さら', '台無し', 'うらむ', '追い出す', '仲間外れ', 'あいつ', '他人',
    ],
    sentences: [
      {
        seg: [
          { t: 'ささいな' }, { t: '約束', r: 'やくそく' }, { t: 'を' }, { t: '破', r: 'やぶ' }, { t: 'った' }, { t: 'こと' }, { t: 'から、' }, { t: 'すべて' }, { t: 'が' }, { t: '始', r: 'はじ' }, { t: 'まった。' },
        ],
        en: 'It all began from a trivial broken promise.',
      },
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'の' }, { t: '言', r: 'い' }, { t: 'い' }, { t: '訳', r: 'わけ' }, { t: 'を、' }, { t: '彼', r: 'かれ' }, { t: 'は' }, { t: 'きっぱり' }, { t: 'と' }, { t: '断', r: 'ことわ' }, { t: 'った。' },
        ],
        en: 'He flatly rejected my excuse.',
      },
      {
        seg: [
          { t: 'ただの' }, { t: '誤解', r: 'ごかい' }, { t: 'だと' }, { t: '思', r: 'おも' }, { t: 'って' }, { t: 'いたが、' }, { t: '勘違', r: 'かんちが' }, { t: 'い' }, { t: 'して' }, { t: 'いた' }, { t: 'のは' }, { t: '私', r: 'わたし' }, { t: 'の' }, { t: '方', r: 'ほう' }, { t: 'だった。' },
        ],
        en: 'I thought it was a simple misunderstanding, but I was the one who had it wrong.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'は' }, { t: '私', r: 'わたし' }, { t: 'を' }, { t: 'ばかにする' }, { t: 'ように' }, { t: 'いやみ' }, { t: 'を' }, { t: '言', r: 'い' }, { t: 'い、' }, { t: '私', r: 'わたし' }, { t: 'の' }, { t: '仕事', r: 'しごと' }, { t: 'を' }, { t: 'けなした。' },
        ],
        en: 'He said sarcastic things as if looking down on me, and disparaged my work.',
      },
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'も' }, { t: '黙', r: 'だま' }, { t: 'って' }, { t: 'いられず、' }, { t: '彼', r: 'かれ' }, { t: 'を' }, { t: 'にらんで' }, { t: '責', r: 'せ' }, { t: 'めた。' },
        ],
        en: 'I could not stay silent either; I glared at him and blamed him.',
      },
      {
        seg: [
          { t: '口論', r: 'こうろん' }, { t: 'は' }, { t: 'ひどく' }, { t: 'なり、' }, { t: 'ついに' }, { t: '彼', r: 'かれ' }, { t: 'は' }, { t: '怒鳴', r: 'どな' }, { t: 'った。' },
        ],
        en: 'The quarrel worsened, and at last he shouted.',
      },
      {
        seg: [
          { t: '殴', r: 'なぐ' }, { t: 'られる' }, { t: 'か' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'った' }, { t: 'が、' }, { t: 'そこ' }, { t: 'まで' }, { t: 'の' }, { t: '行為', r: 'こうい' }, { t: 'は' }, { t: 'なかった。' },
        ],
        en: 'I thought I might be hit, but it did not come to that.',
      },
      {
        seg: [
          { t: '金', r: 'かね' }, { t: 'の' }, { t: '貸', r: 'か' }, { t: 'し' }, { t: '借', r: 'が' }, { t: 'り' }, { t: 'の' }, { t: 'こと' }, { t: 'まで' }, { t: 'ばらされ、' }, { t: '気', r: 'き' }, { t: 'まずい' }, { t: '空気', r: 'くうき' }, { t: 'が' }, { t: '残', r: 'のこ' }, { t: 'った。' },
        ],
        en: 'Even our lending and borrowing of money was revealed, and an awkward atmosphere remained.',
      },
      {
        seg: [
          { t: '信', r: 'しん' }, { t: 'じて' }, { t: 'いた' }, { t: '相手', r: 'あいて' }, { t: 'に' }, { t: 'だまされ、' }, { t: '裏切', r: 'うらぎ' }, { t: 'られた' }, { t: 'と' }, { t: '感', r: 'かん' }, { t: 'じた。' },
        ],
        en: 'I felt deceived and betrayed by someone I had trusted.',
      },
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'の' }, { t: 'せい' }, { t: 'だ' }, { t: 'と' }, { t: '言', r: 'い' }, { t: 'う' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: 'いて、' }, { t: 'グループ' }, { t: 'で' }, { t: '仲間外', r: 'なかまはず' }, { t: 'れ' }, { t: 'に' }, { t: 'された。' },
        ],
        en: 'Some said it was my fault, and I was left out of the group.',
      },
      {
        seg: [
          { t: 'あいつ' }, { t: 'と' }, { t: 'は' }, { t: 'もう' }, { t: '他人', r: 'たにん' }, { t: 'だ' }, { t: 'と、' }, { t: 'しばらく' }, { t: 'は' }, { t: 'うらんで' }, { t: 'いた。' },
        ],
        en: 'For a while I resented him, telling myself we were strangers now.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'を' }, { t: '避', r: 'さ' }, { t: 'け、' }, { t: '教室', r: 'きょうしつ' }, { t: 'から' }, { t: '追', r: 'お' }, { t: 'い' }, { t: '出', r: 'だ' }, { t: 'したい' }, { t: 'と' }, { t: 'さえ' }, { t: '思', r: 'おも' }, { t: 'った。' },
        ],
        en: 'I avoided him, and even wanted to drive him out of the classroom.',
      },
      {
        seg: [
          { t: 'だが' }, { t: '十', r: 'じゅう' }, { t: '年', r: 'ねん' }, { t: 'の' }, { t: '友情', r: 'ゆうじょう' }, { t: 'を' }, { t: '台無', r: 'だいな' }, { t: 'し' }, { t: 'に' }, { t: 'する' }, { t: 'の' }, { t: 'は、' }, { t: 'あまりに' }, { t: 'もったいない。' },
        ],
        en: 'But ruining a ten-year friendship would be far too great a waste.',
      },
      {
        seg: [
          { t: '今さら', r: 'いまさら' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'いながら' }, { t: 'も、' }, { t: '私', r: 'わたし' }, { t: 'は' }, { t: '彼', r: 'かれ' }, { t: 'に' }, { t: '連絡', r: 'れんらく' }, { t: 'する' }, { t: 'こと' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'Even while thinking it was too late, I decided to contact him.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 2,
    section: 1,
    title: '我が家をさがす',
    targetWords: [
      '一人住まい', '賃貸', '敷金', '更新', 'ローン', '決まり', '一戸建て', 'マイホーム', '我が家', '家屋', '屋根', '洗面所', '物置', '間取り', '空間', '奥', '手前', '南向き', '温もり', '頑丈な', '点検', '停止', '物音', '防犯', 'ぞっと', '警備', '新築',
    ],
    sentences: [
      {
        seg: [
          { t: '東京', r: 'とうきょう' }, { t: 'で' }, { t: 'の' }, { t: '一人住', r: 'ひとりず' }, { t: 'まい' }, { t: 'も' }, { t: '三', r: 'さん' }, { t: '年目', r: 'ねんめ' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'This is my third year living alone in Tokyo.',
      },
      {
        seg: [
          { t: '賃貸', r: 'ちんたい' }, { t: 'の' }, { t: '契約', r: 'けいやく' }, { t: 'を' }, { t: '更新', r: 'こうしん' }, { t: 'する' }, { t: 'とき、' }, { t: '敷金', r: 'しききん' }, { t: 'の' }, { t: '決', r: 'き' }, { t: 'まり' }, { t: 'を' }, { t: 'よく' }, { t: '読', r: 'よ' }, { t: 'んだ。' },
        ],
        en: 'When renewing the rental contract, I read the rules about the deposit carefully.',
      },
      {
        seg: [
          { t: 'いつ', r: '・' }, { t: 'か' }, { t: 'は' }, { t: 'ローン' }, { t: 'を' }, { t: '組', r: 'く' }, { t: 'んで' }, { t: 'マイホーム' }, { t: 'を' }, { t: '持', r: 'も' }, { t: 'ちたい。' },
        ],
        en: 'Someday I want to take out a loan and own my own home.',
      },
      {
        seg: [
          { t: 'できれば' }, { t: '一戸建', r: 'いっこだ' }, { t: 'て' }, { t: 'が' }, { t: 'いい' }, { t: 'が、' }, { t: '家屋', r: 'かおく' }, { t: 'の' }, { t: '値段', r: 'ねだん' }, { t: 'は' }, { t: '高', r: 'たか' }, { t: 'い。' },
        ],
        en: 'A detached house would be best, but house prices are high.',
      },
      {
        seg: [
          { t: '我', r: 'わ' }, { t: 'が' }, { t: '家', r: 'や' }, { t: 'の' }, { t: '理想', r: 'りそう' }, { t: 'は、' }, { t: '南向', r: 'みなみむ' }, { t: 'き' }, { t: 'で' }, { t: '日', r: 'ひ' }, { t: 'の' }, { t: '入', r: 'はい' }, { t: 'る' }, { t: '間取', r: 'まど' }, { t: 'り' }, { t: 'だ。' },
        ],
        en: 'My ideal home has a south-facing layout that lets the light in.',
      },
      {
        seg: [
          { t: '広', r: 'ひろ' }, { t: 'い' }, { t: '空間', r: 'くうかん' }, { t: 'と' }, { t: '木', r: 'き' }, { t: 'の' }, { t: '温', r: 'ぬく' }, { t: 'もり' }, { t: 'が' }, { t: 'ある' }, { t: '部屋', r: 'へや' }, { t: 'に' }, { t: '住', r: 'す' }, { t: 'みたい。' },
        ],
        en: 'I want to live in a room with open space and the warmth of wood.',
      },
      {
        seg: [
          { t: '奥', r: 'おく' }, { t: 'に' }, { t: '洗面所', r: 'せんめんじょ' }, { t: '、' }, { t: '手前', r: 'てまえ' }, { t: 'に' }, { t: '物置', r: 'ものおき' }, { t: 'が' }, { t: 'あれば' }, { t: '便利', r: 'べんり' }, { t: 'だ。' },
        ],
        en: 'It would be convenient with a washroom at the back and a storeroom near the front.',
      },
      {
        seg: [
          { t: '屋根', r: 'やね' }, { t: 'が' }, { t: '頑丈', r: 'がんじょう' }, { t: 'で、' }, { t: '新築', r: 'しんちく' }, { t: 'なら' }, { t: 'なお' }, { t: 'いい。' },
        ],
        en: 'Even better if the roof is sturdy and the house is newly built.',
      },
      {
        seg: [
          { t: '夜中', r: 'よなか' }, { t: '、' }, { t: 'へんな' }, { t: '物音', r: 'ものおと' }, { t: 'が' }, { t: 'して' }, { t: 'ぞっと' }, { t: 'した' }, { t: 'こと' }, { t: 'が' }, { t: 'ある。' },
        ],
        en: 'One night I heard a strange noise and felt a chill.',
      },
      {
        seg: [
          { t: 'それ' }, { t: 'から' }, { t: '防犯', r: 'ぼうはん' }, { t: 'を' }, { t: '意識', r: 'いしき' }, { t: 'し、' }, { t: '警備', r: 'けいび' }, { t: '会社', r: 'かいしゃ' }, { t: 'に' }, { t: '相談', r: 'そうだん' }, { t: 'した。' },
        ],
        en: 'Since then I have been conscious of security and consulted a security company.',
      },
      {
        seg: [
          { t: '設備', r: 'せつび' }, { t: 'の' }, { t: '点検', r: 'てんけん' }, { t: 'の' }, { t: '日', r: 'ひ' }, { t: 'は、' }, { t: 'エレベーター' }, { t: 'が' }, { t: '停止', r: 'ていし' }, { t: 'する。' },
        ],
        en: 'On equipment inspection days, the elevator stops running.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 2,
    section: 2,
    title: 'お金と付き合う',
    targetWords: [
      '収入', 'ごく', 'せいぜい', '出費', '赤字', '大金', '税金', '納める', '含む', '公共料金', '払い込む', '引き落とし', '手数料', '出し入れ', '高くつく', '残高', 'せっせと', '大まかな', '差し引く', '努める', '立て替える', '援助', '返済', '安定',
    ],
    sentences: [
      {
        seg: [
          { t: '毎月', r: 'まいつき' }, { t: 'の' }, { t: '収入', r: 'しゅうにゅう' }, { t: 'と' }, { t: '出費', r: 'しゅっぴ' }, { t: 'を、' }, { t: 'ノート' }, { t: 'に' }, { t: '大', r: 'おお' }, { t: 'まかに' }, { t: '書', r: 'か' }, { t: 'いている。' },
        ],
        en: 'I write down my monthly income and expenses roughly in a notebook.',
      },
      {
        seg: [
          { t: 'ごく' }, { t: '普通', r: 'ふつう' }, { t: 'の' }, { t: '生活', r: 'せいかつ' }, { t: 'だ' }, { t: 'が、' }, { t: 'ときどき' }, { t: '赤字', r: 'あかじ' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'It is a very ordinary life, but sometimes I end up in the red.',
      },
      {
        seg: [
          { t: '家賃', r: 'やちん' }, { t: 'や' }, { t: '公共料金', r: 'こうきょうりょうきん' }, { t: 'は' }, { t: '口座', r: 'こうざ' }, { t: 'から' }, { t: 'の' }, { t: '引', r: 'ひ' }, { t: 'き' }, { t: '落', r: 'お' }, { t: 'とし' }, { t: 'だ。' },
        ],
        en: 'Rent and utility bills are taken by direct debit from my account.',
      },
      {
        seg: [
          { t: '税金', r: 'ぜいきん' }, { t: 'を' }, { t: '納', r: 'おさ' }, { t: 'める' }, { t: '時期', r: 'じき' }, { t: 'は、' }, { t: '残高', r: 'ざんだか' }, { t: 'を' }, { t: '何度', r: 'なんど' }, { t: 'も' }, { t: '確', r: 'たし' }, { t: 'かめる。' },
        ],
        en: 'When it is time to pay taxes, I check my balance again and again.',
      },
      {
        seg: [
          { t: 'ATM' }, { t: 'の' }, { t: '出', r: 'だ' }, { t: 'し' }, { t: '入', r: 'い' }, { t: 'れ' }, { t: 'で' }, { t: '手数料', r: 'てすうりょう' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'られる' }, { t: 'の' }, { t: 'は' }, { t: 'くやしい。' },
        ],
        en: 'It is annoying to be charged a fee for ATM withdrawals and deposits.',
      },
      {
        seg: [
          { t: '少額', r: 'しょうがく' }, { t: 'でも' }, { t: '積', r: 'つ' }, { t: 'もれば' }, { t: '高', r: 'たか' }, { t: 'くつく' }, { t: 'から、' }, { t: 'せいぜい' }, { t: '月', r: 'つき' }, { t: 'に' }, { t: '一', r: 'いち' }, { t: '度', r: 'ど' }, { t: 'に' }, { t: 'している。' },
        ],
        en: 'Small amounts add up and become costly, so I limit it to once a month at most.',
      },
      {
        seg: [
          { t: '友人', r: 'ゆうじん' }, { t: 'の' }, { t: '分', r: 'ぶん' }, { t: 'を' }, { t: '立', r: 'た' }, { t: 'て' }, { t: '替', r: 'か' }, { t: 'えた' }, { t: 'とき' }, { t: 'は、' }, { t: 'あとで' }, { t: '差', r: 'さ' }, { t: 'し' }, { t: '引', r: 'ひ' }, { t: 'いて' }, { t: '返', r: 'かえ' }, { t: 'して' }, { t: 'もらう。' },
        ],
        en: 'When I pay for a friend, I have them subtract it and pay me back later.',
      },
      {
        seg: [
          { t: '大金', r: 'たいきん' }, { t: 'を' }, { t: '動', r: 'うご' }, { t: 'かす' }, { t: '話', r: 'はなし' }, { t: 'に' }, { t: 'は、' }, { t: 'リスク' }, { t: 'が' }, { t: '含', r: 'ふく' }, { t: 'まれている。' },
        ],
        en: 'Talk of moving large sums always contains risk.',
      },
      {
        seg: [
          { t: '学生', r: 'がくせい' }, { t: 'の' }, { t: 'ころ' }, { t: 'は' }, { t: '親', r: 'おや' }, { t: 'の' }, { t: '援助', r: 'えんじょ' }, { t: 'を' }, { t: '受', r: 'う' }, { t: 'け、' }, { t: 'いま' }, { t: 'は' }, { t: '返済', r: 'へんさい' }, { t: 'を' }, { t: '続', r: 'つづ' }, { t: 'けている。' },
        ],
        en: 'As a student I received help from my parents; now I keep making repayments.',
      },
      {
        seg: [
          { t: 'せっせと' }, { t: '働', r: 'はたら' }, { t: 'き、' }, { t: '生活', r: 'せいかつ' }, { t: 'を' }, { t: '安定', r: 'あんてい' }, { t: 'させる' }, { t: 'よう' }, { t: '努', r: 'つと' }, { t: 'めている。' },
        ],
        en: 'I work diligently and strive to make my life stable.',
      },
      {
        seg: [
          { t: '払', r: 'はら' }, { t: 'い' }, { t: '込', r: 'こ' }, { t: 'み' }, { t: 'を' }, { t: '忘', r: 'わす' }, { t: 'れない' }, { t: 'よう、' }, { t: 'カレンダー' }, { t: 'に' }, { t: '印', r: 'しるし' }, { t: 'を' }, { t: 'つけた。' },
        ],
        en: 'I marked the calendar so I would not forget the payment.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 2,
    section: 3,
    title: '食べる楽しみ',
    targetWords: [
      '好き嫌い', '好物', '飽きる', '物足りない', 'ボリューム', '一口', 'かじる', 'ひとたび', 'うまい', 'いける', '渋い', 'くどい', 'ファミレス', 'フルコース', 'オーダー', '催促', '会計', 'バイキング', 'トレイ', '器', '重ねる', 'ずらり', '主食', '生', 'なま物', '特製', '粗末な',
    ],
    sentences: [
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'は' }, { t: '好', r: 'す' }, { t: 'き' }, { t: '嫌', r: 'きら' }, { t: 'い' }, { t: 'が' }, { t: '少', r: 'すく' }, { t: 'なく、' }, { t: '好物', r: 'こうぶつ' }, { t: 'も' }, { t: '多', r: 'おお' }, { t: 'い。' },
        ],
        en: 'I am not a fussy eater, and I have many favorite foods.',
      },
      {
        seg: [
          { t: 'ひとたび' }, { t: 'おいしい' }, { t: '店', r: 'みせ' }, { t: 'を' }, { t: '知', r: 'し' }, { t: 'る' }, { t: 'と、' }, { t: '飽', r: 'あ' }, { t: 'きる' }, { t: 'まで' }, { t: '通', r: 'かよ' }, { t: 'ってしまう。' },
        ],
        en: 'Once I learn of a good restaurant, I keep going until I tire of it.',
      },
      {
        seg: [
          { t: 'ファミレス' }, { t: 'の' }, { t: 'ハンバーグ' }, { t: 'は' }, { t: 'ボリューム' }, { t: 'が' }, { t: 'あって、' }, { t: 'なかなか' }, { t: 'いける。' },
        ],
        en: 'The hamburg steak at family restaurants has real volume and is quite good.',
      },
      {
        seg: [
          { t: 'ただ、' }, { t: 'ソース' }, { t: 'が' }, { t: 'くどい' }, { t: '日', r: 'ひ' }, { t: 'も' }, { t: 'あり、' }, { t: 'その' }, { t: '時', r: 'とき' }, { t: 'は' }, { t: '物足', r: 'ものた' }, { t: 'りない。' },
        ],
        en: 'That said, some days the sauce is too rich, and then it feels unsatisfying.',
      },
      {
        seg: [
          { t: '一口', r: 'ひとくち' }, { t: 'かじって' }, { t: 'から、' }, { t: 'これ' }, { t: 'は' }, { t: 'うまい' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'った。' },
        ],
        en: 'After one bite, I thought this is delicious.',
      },
      {
        seg: [
          { t: '先週', r: 'せんしゅう' }, { t: '、' }, { t: 'ホテル' }, { t: 'の' }, { t: 'バイキング' }, { t: 'で' }, { t: 'フルコース' }, { t: 'を' }, { t: '味', r: 'あじ' }, { t: 'わった。' },
        ],
        en: 'Last week I enjoyed a full course at a hotel buffet.',
      },
      {
        seg: [
          { t: 'トレイ' }, { t: 'に' }, { t: '器', r: 'うつわ' }, { t: 'を' }, { t: '重', r: 'かさ' }, { t: 'ね、' }, { t: '料理', r: 'りょうり' }, { t: 'が' }, { t: 'ずらり' }, { t: 'と' }, { t: '並', r: 'なら' }, { t: 'ぶ' }, { t: '前', r: 'まえ' }, { t: 'を' }, { t: '歩', r: 'ある' }, { t: 'いた。' },
        ],
        en: 'I stacked dishes on my tray and walked along the food laid out in a row.',
      },
      {
        seg: [
          { t: '特製', r: 'とくせい' }, { t: 'の' }, { t: 'ソース' }, { t: 'が' }, { t: 'かかった' }, { t: '魚', r: 'さかな' }, { t: 'は、' }, { t: '生', r: 'なま' }, { t: 'に' }, { t: '近', r: 'ちか' }, { t: 'い' }, { t: '焼', r: 'や' }, { t: 'き' }, { t: '加減', r: 'かげん' }, { t: 'だった。' },
        ],
        en: 'The fish with the special sauce was cooked almost rare.',
      },
      {
        seg: [
          { t: 'なま' }, { t: '物', r: 'もの' }, { t: 'が' }, { t: '苦手', r: 'にがて' }, { t: 'な' }, { t: '人', r: 'ひと' }, { t: 'に' }, { t: 'は' }, { t: '主食', r: 'しゅしょく' }, { t: 'を' }, { t: '勧', r: 'すす' }, { t: 'めた。' },
        ],
        en: 'For those who dislike raw food, I recommended the staple dishes.',
      },
      {
        seg: [
          { t: '注文', r: 'ちゅうもん' }, { t: 'を' }, { t: 'オーダー' }, { t: 'して' }, { t: 'から' }, { t: '遅', r: 'おそ' }, { t: 'かった' }, { t: 'ので、' }, { t: 'そっと' }, { t: '催促', r: 'さいそく' }, { t: 'した。' },
        ],
        en: 'Since it was slow after we ordered, I quietly asked them to hurry.',
      },
      {
        seg: [
          { t: '会計', r: 'かいけい' }, { t: 'の' }, { t: 'とき', r: '・' }, { t: '、' }, { t: '粗末', r: 'そまつ' }, { t: 'な' }, { t: '扱', r: 'あつか' }, { t: 'い' }, { t: 'は' }, { t: '一', r: 'いち' }, { t: 'つ' }, { t: 'も' }, { t: 'なかった。' },
        ],
        en: 'At the till, there was not a single instance of shabby treatment.',
      },
      {
        seg: [
          { t: '渋', r: 'しぶ' }, { t: 'い' }, { t: 'お' }, { t: '茶', r: 'ちゃ' }, { t: 'を' }, { t: '飲', r: 'の' }, { t: 'んで、' }, { t: '食事', r: 'しょくじ' }, { t: 'を' }, { t: '終', r: 'お' }, { t: 'えた。' },
        ],
        en: 'I finished the meal with a cup of bitter tea.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 2,
    section: 4,
    title: '買い物のこつ',
    targetWords: [
      '購入', '買い得', '手頃な', '値引き', 'おまけ', '返品', '返金', '価格', '高価な', '金額', '価値', '品質', '消費税', 'ネットオークション', '名物', '取り寄せる', '扱う', '売り出す', 'チラシ', '切り取る', 'パック', '包装', '試食', '試着', 'わりあい', 'ダブる', 'よす', 'わりと', '実物', '粒', 'スペース',
    ],
    sentences: [
      {
        seg: [
          { t: '新', r: 'あたら' }, { t: 'しい' }, { t: 'パソコン' }, { t: 'を' }, { t: '購入', r: 'こうにゅう' }, { t: 'する' }, { t: 'ため、' }, { t: '三', r: 'さん' }, { t: '軒', r: 'げん' }, { t: 'の' }, { t: '店', r: 'みせ' }, { t: 'の' }, { t: '価格', r: 'かかく' }, { t: 'を' }, { t: '比', r: 'くら' }, { t: 'べた。' },
        ],
        en: 'To buy a new computer, I compared prices at three shops.',
      },
      {
        seg: [
          { t: '高価', r: 'こうか' }, { t: 'な' }, { t: 'モデル' }, { t: 'も' }, { t: 'ある' }, { t: 'が、' }, { t: '手頃', r: 'てごろ' }, { t: 'な' }, { t: '金額', r: 'きんがく' }, { t: 'の' }, { t: 'もの' }, { t: 'を' }, { t: '探', r: 'さが' }, { t: 'した。' },
        ],
        en: 'There were expensive models, but I looked for one at a reasonable price.',
      },
      {
        seg: [
          { t: '品質', r: 'ひんしつ' }, { t: 'と' }, { t: '価値', r: 'かち' }, { t: 'が' }, { t: 'つり' }, { t: '合', r: 'あ' }, { t: 'っている' }, { t: 'か' }, { t: 'どうか' }, { t: 'が' }, { t: '大事', r: 'だいじ' }, { t: 'だ。' },
        ],
        en: 'What matters is whether the quality and the value match.',
      },
      {
        seg: [
          { t: 'チラシ' }, { t: 'の' }, { t: 'クーポン' }, { t: 'を' }, { t: '切', r: 'き' }, { t: 'り' }, { t: '取', r: 'と' }, { t: 'り、' }, { t: '値引', r: 'ねび' }, { t: 'き' }, { t: 'を' }, { t: '受', r: 'う' }, { t: 'けた。' },
        ],
        en: 'I cut out the coupon from the flyer and got a discount.',
      },
      {
        seg: [
          { t: 'お' }, { t: '買', r: 'か' }, { t: 'い' }, { t: '得', r: 'どく' }, { t: 'の' }, { t: '日', r: 'ひ' }, { t: 'に' }, { t: 'は、' }, { t: 'おまけ' }, { t: 'まで' }, { t: 'つけて' }, { t: 'くれた。' },
        ],
        en: 'On the bargain day, they even threw in a free extra.',
      },
      {
        seg: [
          { t: '消費税', r: 'しょうひぜい' }, { t: 'を' }, { t: '入', r: 'い' }, { t: 'れて' }, { t: 'も、' }, { t: 'わりあいに' }, { t: '安', r: 'やす' }, { t: 'かった。' },
        ],
        en: 'Even including consumption tax, it was relatively cheap.',
      },
      {
        seg: [
          { t: '店', r: 'みせ' }, { t: 'に' }, { t: '実物', r: 'じつぶつ' }, { t: 'が' }, { t: 'なく、' }, { t: 'ネットオークション' }, { t: 'で' }, { t: '似', r: 'に' }, { t: 'た' }, { t: '品', r: 'しな' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'つけた。' },
        ],
        en: 'The shop had no physical stock, so I found a similar item on an online auction.',
      },
      {
        seg: [
          { t: '地方', r: 'ちほう' }, { t: 'の' }, { t: '名物', r: 'めいぶつ' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'り' }, { t: '寄', r: 'よ' }, { t: 'せる' }, { t: 'こと' }, { t: 'も' }, { t: 'ある。' },
        ],
        en: 'Sometimes I order regional specialties from afar.',
      },
      {
        seg: [
          { t: 'その' }, { t: '店', r: 'みせ' }, { t: 'は' }, { t: '海外', r: 'かいがい' }, { t: 'の' }, { t: '商品', r: 'しょうひん' }, { t: 'も' }, { t: '扱', r: 'あつか' }, { t: 'っていて、' }, { t: '売', r: 'う' }, { t: 'り' }, { t: '出', r: 'だ' }, { t: 'す' }, { t: 'たび' }, { t: 'に' }, { t: '人', r: 'ひと' }, { t: 'が' }, { t: '並', r: 'なら' }, { t: 'ぶ。' },
        ],
        en: 'That shop also handles overseas goods, and people queue every time it launches something.',
      },
      {
        seg: [
          { t: 'ふるい' }, { t: '服', r: 'ふく' }, { t: 'を' }, { t: '買', r: 'か' }, { t: 'い' }, { t: '換', r: 'か' }, { t: 'える' }, { t: '前', r: 'まえ' }, { t: 'に、' }, { t: 'かならず' }, { t: '試着', r: 'しちゃく' }, { t: 'する。' },
        ],
        en: 'Before replacing old clothes, I always try them on.',
      },
      {
        seg: [
          { t: '食品', r: 'しょくひん' }, { t: 'なら' }, { t: '試食', r: 'ししょく' }, { t: 'を' }, { t: 'して、' }, { t: '粒', r: 'つぶ' }, { t: 'の' }, { t: '大', r: 'おお' }, { t: 'きさ' }, { t: 'まで' }, { t: '確', r: 'たし' }, { t: 'かめる。' },
        ],
        en: 'With food, I sample it and check even the size of the grains.',
      },
      {
        seg: [
          { t: '包装', r: 'ほうそう' }, { t: 'を' }, { t: 'パック' }, { t: 'し' }, { t: '直', r: 'なお' }, { t: 'して' }, { t: 'もらう' }, { t: 'と、' }, { t: 'スペース' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'らない。' },
        ],
        en: 'If they repack it for me, it takes up less space.',
      },
      {
        seg: [
          { t: '同', r: 'おな' }, { t: 'じ' }, { t: '物', r: 'もの' }, { t: 'を' }, { t: 'ダブって' }, { t: '買', r: 'か' }, { t: 'う' }, { t: 'の' }, { t: 'は' }, { t: 'よそう' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'い、' }, { t: 'わりと' }, { t: '慎重', r: 'しんちょう' }, { t: 'に' }, { t: '選', r: 'えら' }, { t: 'ぶ。' },
        ],
        en: 'I decided to stop buying duplicates, so I choose fairly carefully.',
      },
      {
        seg: [
          { t: 'サイズ' }, { t: 'が' }, { t: '違', r: 'ちが' }, { t: 'えば' }, { t: '返品', r: 'へんぴん' }, { t: 'し、' }, { t: '返金', r: 'へんきん' }, { t: 'して' }, { t: 'もらえる。' },
        ],
        en: 'If the size is wrong, I can return it and get a refund.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 2,
    section: 5,
    title: '時のながれ',
    targetWords: [
      '現在', '過去', '年月', '月日', '日時', '年代', '年間', '年中', '本年', '日中', '夜間', 'ただ今', '先ほど', '近々', '後日', 'やがて', 'いずれ', '今後', 'すでに', 'あらかじめ', '従来', 'あくる', '一時', '一生', '永遠に', '今日',
    ],
    sentences: [
      {
        seg: [
          { t: '現在', r: 'げんざい' }, { t: 'の' }, { t: '自分', r: 'じぶん' }, { t: 'は、' }, { t: '過去', r: 'かこ' }, { t: 'の' }, { t: '選択', r: 'せんたく' }, { t: 'の' }, { t: '上', r: 'うえ' }, { t: 'に' }, { t: 'ある。' },
        ],
        en: 'Who I am now rests on the choices of the past.',
      },
      {
        seg: [
          { t: '長', r: 'なが' }, { t: 'い' }, { t: '年月', r: 'ねんげつ' }, { t: 'が' }, { t: '過', r: 'す' }, { t: 'ぎ、' }, { t: '月日', r: 'つきひ' }, { t: 'の' }, { t: '早', r: 'はや' }, { t: 'さ' }, { t: 'に' }, { t: '驚', r: 'おどろ' }, { t: 'く。' },
        ],
        en: 'Long years have passed, and I am struck by how fast the days go.',
      },
      {
        seg: [
          { t: '本年', r: 'ほんねん' }, { t: 'の' }, { t: '目標', r: 'もくひょう' }, { t: 'は、' }, { t: '今日', r: 'きょう' }, { t: 'まで' }, { t: 'に' }, { t: 'すでに' }, { t: '三', r: 'みっ' }, { t: 'つ' }, { t: '決', r: 'き' }, { t: 'めてある。' },
        ],
        en: 'As of today, I have already decided on three goals for this year.',
      },
      {
        seg: [
          { t: '会議', r: 'かいぎ' }, { t: 'の' }, { t: '日時', r: 'にちじ' }, { t: 'は、' }, { t: 'あらかじめ' }, { t: 'メール' }, { t: 'で' }, { t: '知', r: 'し' }, { t: 'らせて' }, { t: 'ある。' },
        ],
        en: 'The date and time of the meeting were announced by email in advance.',
      },
      {
        seg: [
          { t: 'ただ今', r: 'ただいま' }, { t: '、' }, { t: '担当者', r: 'たんとうしゃ' }, { t: 'は' }, { t: '席', r: 'せき' }, { t: 'を' }, { t: '外', r: 'はず' }, { t: 'しております。' },
        ],
        en: 'The person in charge is away from their desk at the moment.',
      },
      {
        seg: [
          { t: '先', r: 'さき' }, { t: 'ほど' }, { t: 'の' }, { t: '電話', r: 'でんわ' }, { t: 'の' }, { t: '件', r: 'けん' }, { t: 'は、' }, { t: '後日', r: 'ごじつ' }, { t: 'あらためて' }, { t: '連絡', r: 'れんらく' }, { t: 'する。' },
        ],
        en: 'I will contact you again at a later date about the call just now.',
      },
      {
        seg: [
          { t: '近々', r: 'ちかぢか' }, { t: '、' }, { t: 'この' }, { t: '年代', r: 'ねんだい' }, { t: 'の' }, { t: '資料', r: 'しりょう' }, { t: 'を' }, { t: '公開', r: 'こうかい' }, { t: 'する' }, { t: '予定', r: 'よてい' }, { t: 'だ。' },
        ],
        en: 'We plan to release materials from this era before long.',
      },
      {
        seg: [
          { t: '従来', r: 'じゅうらい' }, { t: 'の' }, { t: '方法', r: 'ほうほう' }, { t: 'を' }, { t: '変', r: 'か' }, { t: 'えれば、' }, { t: 'やがて' }, { t: '結果', r: 'けっか' }, { t: 'も' }, { t: '変', r: 'か' }, { t: 'わる' }, { t: 'だろう。' },
        ],
        en: 'If we change the conventional method, the results will eventually change too.',
      },
      {
        seg: [
          { t: '日中', r: 'にっちゅう' }, { t: 'は' }, { t: '暑', r: 'あつ' }, { t: 'く、' }, { t: '夜間', r: 'やかん' }, { t: 'に' }, { t: 'なる' }, { t: 'と' }, { t: '風', r: 'かぜ' }, { t: 'が' }, { t: '出', r: 'で' }, { t: 'る。' },
        ],
        en: 'It is hot during the day, and a breeze picks up at night.',
      },
      {
        seg: [
          { t: 'この' }, { t: '工事', r: 'こうじ' }, { t: 'は' }, { t: '一時', r: 'いちじ' }, { t: '中断', r: 'ちゅうだん' }, { t: 'する' }, { t: 'が、' }, { t: '今後', r: 'こんご' }, { t: 'また' }, { t: '始', r: 'はじ' }, { t: 'まる。' },
        ],
        en: 'This construction will pause temporarily but will start again in future.',
      },
      {
        seg: [
          { t: '年間', r: 'ねんかん' }, { t: 'を' }, { t: '通', r: 'とお' }, { t: 'して、' }, { t: 'この' }, { t: '店', r: 'みせ' }, { t: 'は' }, { t: '年中', r: 'ねんじゅう' }, { t: '開', r: 'あ' }, { t: 'いている。' },
        ],
        en: 'Throughout the year, this shop is open all year round.',
      },
      {
        seg: [
          { t: 'あくる' }, { t: '日', r: 'ひ' }, { t: '、' }, { t: 'いずれ' }, { t: '必要', r: 'ひつよう' }, { t: 'に' }, { t: 'なる' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'って' }, { t: '準備', r: 'じゅんび' }, { t: 'を' }, { t: 'した。' },
        ],
        en: 'The next day, thinking it would be needed sooner or later, I made preparations.',
      },
      {
        seg: [
          { t: '一生', r: 'いっしょう' }, { t: '忘', r: 'わす' }, { t: 'れない、' }, { t: '永遠', r: 'えいえん' }, { t: 'に' }, { t: '残', r: 'のこ' }, { t: 'る' }, { t: '一日', r: 'いちにち' }, { t: 'だった。' },
        ],
        en: 'It was a day I will never forget, one that will remain forever.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 3,
    section: 1,
    title: '朝のはじまり',
    targetWords: [
      '夜明け', '起床', 'もたれる', 'フレッシュな', '乳製品', '洗い物', '欠かす', '配達', '見出し', '合間', 'てきぱき', '問', '周辺', '周囲', 'あと', 'すれ違う', 'はう', '替える', '整える',
    ],
    sentences: [
      {
        seg: [
          { t: '夜明', r: 'よあ' }, { t: 'け' }, { t: '前', r: 'まえ' }, { t: 'に' }, { t: '目', r: 'め' }, { t: 'が' }, { t: '覚', r: 'さ' }, { t: 'め、' }, { t: 'そのまま' }, { t: '起床', r: 'きしょう' }, { t: 'する' }, { t: '日', r: 'ひ' }, { t: 'が' }, { t: '増', r: 'ふ' }, { t: 'えた。' },
        ],
        en: 'I have more days now when I wake before dawn and simply get up.',
      },
      {
        seg: [
          { t: '壁', r: 'かべ' }, { t: 'に' }, { t: 'もたれて' }, { t: '外', r: 'そと' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'ると、' }, { t: '周辺', r: 'しゅうへん' }, { t: 'は' }, { t: 'まだ' }, { t: '暗', r: 'くら' }, { t: 'い。' },
        ],
        en: 'Leaning against the wall and looking outside, the area around is still dark.',
      },
      {
        seg: [
          { t: 'フレッシュな' }, { t: '空気', r: 'くうき' }, { t: 'を' }, { t: '入', r: 'い' }, { t: 'れて、' }, { t: 'ベッド' }, { t: 'を' }, { t: '整', r: 'ととの' }, { t: 'える。' },
        ],
        en: 'I let in fresh air and make the bed.',
      },
      {
        seg: [
          { t: '朝食', r: 'ちょうしょく' }, { t: 'に' }, { t: '乳製品', r: 'にゅうせいひん' }, { t: 'を' }, { t: '欠', r: 'か' }, { t: 'かさない' }, { t: 'よう' }, { t: 'に' }, { t: 'している。' },
        ],
        en: 'I make sure never to skip dairy at breakfast.',
      },
      {
        seg: [
          { t: '配達', r: 'はいたつ' }, { t: 'された' }, { t: '新聞', r: 'しんぶん' }, { t: 'の' }, { t: '見出', r: 'みだ' }, { t: 'し' }, { t: 'だけ' }, { t: 'を、' }, { t: 'てきぱき' }, { t: 'と' }, { t: '追', r: 'お' }, { t: 'う。' },
        ],
        en: 'I briskly scan just the headlines of the delivered newspaper.',
      },
      {
        seg: [
          { t: '朝', r: 'あさ' }, { t: 'は' }, { t: 'ろくに' }, { t: '本', r: 'ほん' }, { t: 'を' }, { t: '読', r: 'よ' }, { t: 'む' }, { t: '時間', r: 'じかん' }, { t: 'が' }, { t: 'なく、' }, { t: '一切', r: 'いっさい' }, { t: 'テレビ' }, { t: 'を' }, { t: 'つけない。' },
        ],
        en: 'In the morning I have hardly any time to read, and I never turn on the TV.',
      },
      {
        seg: [
          { t: '洗', r: 'あら' }, { t: 'い' }, { t: '物', r: 'もの' }, { t: 'を' }, { t: '片', r: 'かた' }, { t: 'づける' }, { t: '合間', r: 'あいま' }, { t: 'に、' }, { t: 'シャツ' }, { t: 'を' }, { t: '替', r: 'か' }, { t: 'える。' },
        ],
        en: 'In the gaps while clearing the washing up, I change my shirt.',
      },
      {
        seg: [
          { t: '子', r: 'こ' }, { t: 'ども' }, { t: 'が' }, { t: 'まだ' }, { t: 'はって' }, { t: '動', r: 'うご' }, { t: 'く' }, { t: 'ころ' }, { t: 'は、' }, { t: '周囲', r: 'しゅうい' }, { t: 'に' }, { t: '気', r: 'き' }, { t: 'を' }, { t: '配', r: 'くば' }, { t: 'った。' },
        ],
        en: 'When my child was still crawling about, I paid attention to the surroundings.',
      },
      {
        seg: [
          { t: '駅', r: 'えき' }, { t: 'まで' }, { t: 'の' }, { t: '道', r: 'みち' }, { t: 'で' }, { t: '近所', r: 'きんじょ' }, { t: 'の' }, { t: '人', r: 'ひと' }, { t: 'と' }, { t: 'すれ' }, { t: '違', r: 'ちが' }, { t: 'い、' }, { t: 'あいさつ' }, { t: 'を' }, { t: '交', r: 'か' }, { t: 'わす。' },
        ],
        en: 'On the way to the station I pass neighbors and exchange greetings.',
      },
      {
        seg: [
          { t: 'その' }, { t: 'あと' }, { t: 'の' }, { t: '電車', r: 'でんしゃ' }, { t: 'で、' }, { t: 'その' }, { t: '日', r: 'ひ' }, { t: 'の' }, { t: '問', r: 'とい' }, { t: 'を' }, { t: '考', r: 'かんが' }, { t: 'える。' },
        ],
        en: 'Afterwards on the train, I think over the question of the day.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 3,
    section: 2,
    title: '一日のリズム',
    targetWords: [
      'めりはり', '何度も', 'ほぼ', '寄り道', '食物', '換気', 'いったん', '物干し', '食卓', '後回し', '削る', 'かなえる', '調節', 'ゆったり', '売り買い', '思い浮かべる', '独り言', '風呂場', 'かぐ', '寝つき', '用心', 'メッセージ',
    ],
    sentences: [
      {
        seg: [
          { t: '一日', r: 'いちにち' }, { t: 'に' }, { t: 'めりはり' }, { t: 'を' }, { t: 'つける' }, { t: 'ため、' }, { t: 'ほぼ' }, { t: '同', r: 'おな' }, { t: 'じ' }, { t: '時間', r: 'じかん' }, { t: 'に' }, { t: '動', r: 'うご' }, { t: 'く。' },
        ],
        en: 'To give the day some rhythm, I move at almost the same times each day.',
      },
      {
        seg: [
          { t: '帰', r: 'かえ' }, { t: 'り' }, { t: 'に' }, { t: '寄', r: 'よ' }, { t: 'り' }, { t: '道', r: 'みち' }, { t: 'を' }, { t: 'する' }, { t: 'か' }, { t: '迷', r: 'まよ' }, { t: 'い、' }, { t: 'いったん' }, { t: '家', r: 'いえ' }, { t: 'に' }, { t: '戻', r: 'もど' }, { t: 'る。' },
        ],
        en: 'I hesitate over stopping off on the way home, and for now go straight back.',
      },
      {
        seg: [
          { t: 'まず' }, { t: '窓', r: 'まど' }, { t: 'を' }, { t: '開', r: 'あ' }, { t: 'けて' }, { t: '換気', r: 'かんき' }, { t: 'し、' }, { t: '物干', r: 'ものほ' }, { t: 'し' }, { t: 'の' }, { t: '洗濯物', r: 'せんたくもの' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'り' }, { t: '込', r: 'こ' }, { t: 'む。' },
        ],
        en: 'First I open the window to air the room and bring in the laundry from the pole.',
      },
      {
        seg: [
          { t: '食卓', r: 'しょくたく' }, { t: 'に' }, { t: '食物', r: 'しょくもつ' }, { t: 'を' }, { t: '並', r: 'なら' }, { t: 'べ、' }, { t: '温度', r: 'おんど' }, { t: 'を' }, { t: '調節', r: 'ちょうせつ' }, { t: 'する。' },
        ],
        en: 'I set the food on the dining table and adjust the temperature.',
      },
      {
        seg: [
          { t: '急', r: 'いそ' }, { t: 'ぐ' }, { t: '用事', r: 'ようじ' }, { t: 'が' }, { t: 'なければ、' }, { t: 'ゆったり' }, { t: 'と' }, { t: '食', r: 'た' }, { t: 'べる。' },
        ],
        en: 'If there is nothing urgent, I eat at a leisurely pace.',
      },
      {
        seg: [
          { t: '面倒', r: 'めんどう' }, { t: 'な' }, { t: '用事', r: 'ようじ' }, { t: 'を' }, { t: '後回', r: 'あとまわ' }, { t: 'し' }, { t: 'に' }, { t: 'する' }, { t: 'と、' }, { t: 'あとで' }, { t: '時間', r: 'じかん' }, { t: 'を' }, { t: '削', r: 'けず' }, { t: 'る' }, { t: 'こと' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'Putting off troublesome tasks means cutting into my time later.',
      },
      {
        seg: [
          { t: '風呂場', r: 'ふろば' }, { t: 'で' }, { t: 'せっけん' }, { t: 'の' }, { t: 'においを' }, { t: 'かぐ' }, { t: 'と、' }, { t: 'その' }, { t: '日', r: 'ひ' }, { t: 'の' }, { t: '疲', r: 'つか' }, { t: 'れ' }, { t: 'が' }, { t: '取', r: 'と' }, { t: 'れる。' },
        ],
        en: 'Smelling the soap in the bathroom takes away the day’s tiredness.',
      },
      {
        seg: [
          { t: '明日', r: 'あした' }, { t: 'の' }, { t: '予定', r: 'よてい' }, { t: 'を' }, { t: '思', r: 'おも' }, { t: 'い' }, { t: '浮', r: 'う' }, { t: 'かべ、' }, { t: 'つい' }, { t: '独', r: 'ひと' }, { t: 'り' }, { t: '言', r: 'ごと' }, { t: 'を' }, { t: '言', r: 'い' }, { t: 'う。' },
        ],
        en: 'Picturing tomorrow’s plans, I catch myself talking to myself.',
      },
      {
        seg: [
          { t: '夢', r: 'ゆめ' }, { t: 'を' }, { t: 'かなえる' }, { t: 'に' }, { t: 'は' }, { t: '健康', r: 'けんこう' }, { t: 'が' }, { t: '先', r: 'さき' }, { t: 'だ' }, { t: 'と、' }, { t: '用心', r: 'ようじん' }, { t: 'して' }, { t: 'はやく' }, { t: '寝', r: 'ね' }, { t: 'る。' },
        ],
        en: 'Health comes first if I am to realize my dreams, so I am careful and sleep early.',
      },
      {
        seg: [
          { t: '寝', r: 'ね' }, { t: 'つき' }, { t: 'が' }, { t: 'よく、' }, { t: 'メッセージ' }, { t: 'の' }, { t: '確認', r: 'かくにん' }, { t: 'も' }, { t: 'せず' }, { t: 'に' }, { t: '眠', r: 'ねむ' }, { t: 'って' }, { t: 'しまう。' },
        ],
        en: 'I fall asleep easily and drift off without even checking my messages.',
      },
      {
        seg: [
          { t: '株', r: 'かぶ' }, { t: 'の' }, { t: '売', r: 'う' }, { t: 'り' }, { t: '買', r: 'か' }, { t: 'い' }, { t: 'を' }, { t: 'する' }, { t: '友人', r: 'ゆうじん' }, { t: 'は、' }, { t: '何度', r: 'なんど' }, { t: 'も' }, { t: '画面', r: 'がめん' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'る' }, { t: 'そうだ。' },
        ],
        en: 'A friend who buys and sells shares apparently checks the screen many times.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 3,
    section: 3,
    title: '台所しごと',
    targetWords: [
      '炊事', '献立', 'リクエスト', '流し', 'ちぎる', '冷ます', '煮える', '味付け', '薄める', '甘み', '工夫', '添える', '挟む', '加減', '固まる', 'なめる', '臭い', '冷める', '余分な', '容器', '賞味期限', '手作り', 'もてなす',
    ],
    sentences: [
      {
        seg: [
          { t: '週末', r: 'しゅうまつ' }, { t: 'の' }, { t: '炊事', r: 'すいじ' }, { t: 'は' }, { t: '私', r: 'わたし' }, { t: 'の' }, { t: '担当', r: 'たんとう' }, { t: 'で、' }, { t: '献立', r: 'こんだて' }, { t: 'から' }, { t: '考', r: 'かんが' }, { t: 'える。' },
        ],
        en: 'Weekend cooking is my job, and I start by planning the menu.',
      },
      {
        seg: [
          { t: '家族', r: 'かぞく' }, { t: 'の' }, { t: 'リクエスト' }, { t: 'を' }, { t: '聞', r: 'き' }, { t: 'いて、' }, { t: '工夫', r: 'くふう' }, { t: 'を' }, { t: '重', r: 'かさ' }, { t: 'ねる。' },
        ],
        en: 'I listen to the family’s requests and keep finding ways to improve.',
      },
      {
        seg: [
          { t: '流', r: 'なが' }, { t: 'し' }, { t: 'で' }, { t: '野菜', r: 'やさい' }, { t: 'を' }, { t: '洗', r: 'あら' }, { t: 'い、' }, { t: 'レタス' }, { t: 'を' }, { t: 'ちぎる。' },
        ],
        en: 'I wash the vegetables at the sink and tear the lettuce.',
      },
      {
        seg: [
          { t: 'なべ' }, { t: 'の' }, { t: '豆', r: 'まめ' }, { t: 'が' }, { t: '煮', r: 'に' }, { t: 'えた' }, { t: 'ら、' }, { t: 'いったん' }, { t: '冷', r: 'さ' }, { t: 'ます。' },
        ],
        en: 'Once the beans in the pot are cooked, I let them cool for a while.',
      },
      {
        seg: [
          { t: '味付', r: 'あじつ' }, { t: 'け' }, { t: 'は' }, { t: '薄', r: 'うす' }, { t: 'めに' }, { t: 'して、' }, { t: 'あとで' }, { t: '加減', r: 'かげん' }, { t: 'する。' },
        ],
        en: 'I season it lightly and adjust later.',
      },
      {
        seg: [
          { t: '甘', r: 'あま' }, { t: 'み' }, { t: 'が' }, { t: '足', r: 'た' }, { t: 'りなければ、' }, { t: 'はちみつ' }, { t: 'を' }, { t: '少', r: 'すこ' }, { t: 'し' }, { t: '添', r: 'そ' }, { t: 'える。' },
        ],
        en: 'If it lacks sweetness, I add a little honey.',
      },
      {
        seg: [
          { t: 'パン' }, { t: 'に' }, { t: 'ハム' }, { t: 'を' }, { t: '挟', r: 'はさ' }, { t: 'み、' }, { t: '余分', r: 'よぶん' }, { t: 'な' }, { t: 'あぶら' }, { t: 'を' }, { t: 'ふき' }, { t: '取', r: 'と' }, { t: 'る。' },
        ],
        en: 'I put ham in the bread and wipe off the excess oil.',
      },
      {
        seg: [
          { t: 'スープ' }, { t: 'が' }, { t: '固', r: 'かた' }, { t: 'まらない' }, { t: 'よう' }, { t: 'に、' }, { t: 'ときどき' }, { t: 'かき' }, { t: '混', r: 'ま' }, { t: 'ぜる。' },
        ],
        en: 'I stir now and then so the soup does not set.',
      },
      {
        seg: [
          { t: '味見', r: 'あじみ' }, { t: 'に' }, { t: 'スプーン' }, { t: 'を' }, { t: 'なめて、' }, { t: '臭', r: 'にお' }, { t: 'い' }, { t: 'も' }, { t: '確', r: 'たし' }, { t: 'かめる。' },
        ],
        en: 'I lick the spoon to taste it and check the smell too.',
      },
      {
        seg: [
          { t: '冷', r: 'さ' }, { t: 'めない' }, { t: 'うち' }, { t: 'に' }, { t: '容器', r: 'ようき' }, { t: 'へ' }, { t: '移', r: 'うつ' }, { t: 'し、' }, { t: '賞味期限', r: 'しょうみきげん' }, { t: 'を' }, { t: '書', r: 'か' }, { t: 'いておく。' },
        ],
        en: 'Before it cools I move it into a container and note the best-before date.',
      },
      {
        seg: [
          { t: '手作', r: 'てづく' }, { t: 'り' }, { t: 'の' }, { t: '料理', r: 'りょうり' }, { t: 'で' }, { t: '客', r: 'きゃく' }, { t: 'を' }, { t: 'もてなす' }, { t: 'の' }, { t: 'は、' }, { t: 'やはり' }, { t: 'うれしい。' },
        ],
        en: 'Entertaining guests with home-made food is a real pleasure.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 3,
    section: 4,
    title: '家事のくふう',
    targetWords: [
      'もれる', 'ごちゃごちゃ', '元', '自動的な', 'さっと', '清掃', '取り除く', '素材', '分類', 'すすぐ', 'ネット', '吸収', '泥', '知恵', '可燃ごみ', '資源ごみ', '粗大ごみ', '古新聞', '分別', 'ごみ袋', '生臭い', '大小', 'しゃぶる', 'おむつ', '双子', '衣類', '入れ替える', '狂う',
    ],
    sentences: [
      {
        seg: [
          { t: '水', r: 'みず' }, { t: 'が' }, { t: 'もれている' }, { t: 'の' }, { t: 'に' }, { t: '気', r: 'き' }, { t: 'づき、' }, { t: '元', r: 'もと' }, { t: 'の' }, { t: '栓', r: 'せん' }, { t: 'を' }, { t: '閉', r: 'し' }, { t: 'めた。' },
        ],
        en: 'Noticing water leaking, I shut off the main tap.',
      },
      {
        seg: [
          { t: '部屋', r: 'へや' }, { t: 'が' }, { t: 'ごちゃごちゃ' }, { t: 'に' }, { t: 'なる' }, { t: '前', r: 'まえ' }, { t: 'に、' }, { t: 'さっと' }, { t: '清掃', r: 'せいそう' }, { t: 'する。' },
        ],
        en: 'Before the room gets cluttered, I clean quickly.',
      },
      {
        seg: [
          { t: '自動的', r: 'じどうてき' }, { t: 'に' }, { t: '動', r: 'うご' }, { t: 'く' }, { t: '掃除機', r: 'そうじき' }, { t: 'が、' }, { t: 'ほこり' }, { t: 'を' }, { t: '吸収', r: 'きゅうしゅう' }, { t: 'して' }, { t: 'くれる。' },
        ],
        en: 'The robot vacuum runs automatically and absorbs the dust.',
      },
      {
        seg: [
          { t: '泥', r: 'どろ' }, { t: 'の' }, { t: 'ついた' }, { t: '衣類', r: 'いるい' }, { t: 'は、' }, { t: 'ネット' }, { t: 'に' }, { t: '入', r: 'い' }, { t: 'れて' }, { t: 'よく' }, { t: 'すすぐ。' },
        ],
        en: 'Muddy clothes go in a laundry net and get rinsed well.',
      },
      {
        seg: [
          { t: '素材', r: 'そざい' }, { t: 'の' }, { t: '表示', r: 'ひょうじ' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'て、' }, { t: '大小', r: 'だいしょう' }, { t: 'に' }, { t: '分類', r: 'ぶんるい' }, { t: 'する。' },
        ],
        en: 'I check the fabric label and sort items by size.',
      },
      {
        seg: [
          { t: '汚', r: 'よご' }, { t: 'れ' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'り' }, { t: '除', r: 'のぞ' }, { t: 'く' }, { t: '知恵', r: 'ちえ' }, { t: 'は、' }, { t: '母', r: 'はは' }, { t: 'から' }, { t: '教', r: 'おそ' }, { t: 'わった。' },
        ],
        en: 'The know-how for removing stains I learned from my mother.',
      },
      {
        seg: [
          { t: '生臭', r: 'なまぐさ' }, { t: 'い' }, { t: 'ごみ' }, { t: 'は' }, { t: 'ごみ' }, { t: '袋', r: 'ぶくろ' }, { t: 'を' }, { t: '二重', r: 'にじゅう' }, { t: 'に' }, { t: 'する。' },
        ],
        en: 'For fishy-smelling rubbish I double up the bin bags.',
      },
      {
        seg: [
          { t: '可燃', r: 'かねん' }, { t: 'ごみ' }, { t: '、' }, { t: '資源', r: 'しげん' }, { t: 'ごみ' }, { t: '、' }, { t: '粗大', r: 'そだい' }, { t: 'ごみ' }, { t: 'を' }, { t: '分別', r: 'ぶんべつ' }, { t: 'する。' },
        ],
        en: 'I separate burnable rubbish, recyclables and bulky waste.',
      },
      {
        seg: [
          { t: '古新聞', r: 'ふるしんぶん' }, { t: 'は' }, { t: 'まとめて、' }, { t: '月', r: 'つき' }, { t: 'に' }, { t: '一', r: 'いち' }, { t: '度', r: 'ど' }, { t: '出', r: 'だ' }, { t: 'す。' },
        ],
        en: 'I bundle the old newspapers and put them out once a month.',
      },
      {
        seg: [
          { t: '双子', r: 'ふたご' }, { t: 'の' }, { t: '世話', r: 'せわ' }, { t: 'で' }, { t: 'おむつ' }, { t: 'を' }, { t: '何度', r: 'なんど' }, { t: 'も' }, { t: '入', r: 'い' }, { t: 'れ' }, { t: '替', r: 'か' }, { t: 'える。' },
        ],
        en: 'Caring for twins, I change nappies over and over.',
      },
      {
        seg: [
          { t: '赤', r: 'あか' }, { t: 'ちゃん' }, { t: 'は' }, { t: 'なんでも' }, { t: 'しゃぶる' }, { t: 'ので、' }, { t: '目', r: 'め' }, { t: 'が' }, { t: '離', r: 'はな' }, { t: 'せない。' },
        ],
        en: 'Babies suck on anything, so I cannot take my eyes off them.',
      },
      {
        seg: [
          { t: '予定', r: 'よてい' }, { t: 'が' }, { t: '狂', r: 'くる' }, { t: 'う' }, { t: '日', r: 'ひ' }, { t: 'も' }, { t: 'ある' }, { t: 'が、' }, { t: 'それ' }, { t: 'も' }, { t: '生活', r: 'せいかつ' }, { t: 'だ。' },
        ],
        en: 'Some days the plan falls apart, but that too is life.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 3,
    section: 5,
    title: '引っ越しの日',
    targetWords: [
      '処分', '不用品', 'はがす', '束', 'しばる', '段ボール', 'ガムテープ', '押し込む', 'リスト', '引っ掛かる', '持ち上げる', '担ぐ', 'くたびれる', 'すき間', '中身', 'さっさと', '吊るす', 'まさに', '居心地', '一変', 'アンテナ', 'いっそ',
    ],
    sentences: [
      {
        seg: [
          { t: '引', r: 'ひ' }, { t: 'っ' }, { t: '越', r: 'こ' }, { t: 'し' }, { t: 'の' }, { t: '前', r: 'まえ' }, { t: 'に、' }, { t: '不用品', r: 'ふようひん' }, { t: 'を' }, { t: '処分', r: 'しょぶん' }, { t: 'する。' },
        ],
        en: 'Before moving, I dispose of things I no longer need.',
      },
      {
        seg: [
          { t: '本', r: 'ほん' }, { t: 'を' }, { t: '束', r: 'たば' }, { t: 'に' }, { t: 'して' }, { t: 'ひも' }, { t: 'で' }, { t: 'しばり、' }, { t: '古', r: 'ふる' }, { t: 'い' }, { t: 'シール' }, { t: 'を' }, { t: 'はがす。' },
        ],
        en: 'I tie the books into bundles with string and peel off the old stickers.',
      },
      {
        seg: [
          { t: '段', r: 'だん' }, { t: 'ボール' }, { t: 'に' }, { t: 'ガムテープ' }, { t: 'を' }, { t: '貼', r: 'は' }, { t: 'り、' }, { t: 'リスト' }, { t: 'を' }, { t: '作', r: 'つく' }, { t: 'る。' },
        ],
        en: 'I tape up the cardboard boxes and make a list.',
      },
      {
        seg: [
          { t: 'すき' }, { t: '間', r: 'ま' }, { t: 'に' }, { t: '小物', r: 'こもの' }, { t: 'を' }, { t: '押', r: 'お' }, { t: 'し' }, { t: '込', r: 'こ' }, { t: 'み、' }, { t: '中身', r: 'なかみ' }, { t: 'を' }, { t: '書', r: 'か' }, { t: 'いておく。' },
        ],
        en: 'I push small items into the gaps and write what is inside.',
      },
      {
        seg: [
          { t: '重', r: 'おも' }, { t: 'い' }, { t: '箱', r: 'はこ' }, { t: 'を' }, { t: '持', r: 'も' }, { t: 'ち' }, { t: '上', r: 'あ' }, { t: 'げ、' }, { t: '肩', r: 'かた' }, { t: 'に' }, { t: '担', r: 'かつ' }, { t: 'いで' }, { t: '運', r: 'はこ' }, { t: 'ぶ。' },
        ],
        en: 'I lift the heavy boxes and carry them on my shoulder.',
      },
      {
        seg: [
          { t: '角', r: 'かど' }, { t: 'に' }, { t: '引', r: 'ひ' }, { t: 'っ' }, { t: '掛', r: 'か' }, { t: 'かって、' }, { t: 'さっさと' }, { t: 'は' }, { t: '進', r: 'すす' }, { t: 'まない。' },
        ],
        en: 'They catch on corners, so it does not go quickly.',
      },
      {
        seg: [
          { t: 'まさに' }, { t: 'くたびれる' }, { t: '作業', r: 'さぎょう' }, { t: 'だ' }, { t: 'が、' }, { t: '終', r: 'お' }, { t: 'われば' }, { t: '気持', r: 'きも' }, { t: 'ちがいい。' },
        ],
        en: 'It is truly exhausting work, but it feels good when it is done.',
      },
      {
        seg: [
          { t: '新', r: 'あたら' }, { t: 'しい' }, { t: '部屋', r: 'へや' }, { t: 'で' }, { t: 'カーテン' }, { t: 'を' }, { t: '吊', r: 'つ' }, { t: 'るし、' }, { t: 'アンテナ' }, { t: 'を' }, { t: 'つな', r: '・' }, { t: 'ぐ。' },
        ],
        en: 'In the new room I hang the curtains and connect the aerial.',
      },
      {
        seg: [
          { t: 'ながめ' }, { t: 'が' }, { t: '変', r: 'か' }, { t: 'わって、' }, { t: 'きぶん' }, { t: 'が' }, { t: '一変', r: 'いっぺん' }, { t: 'した。' },
        ],
        en: 'The view changed, and my mood was transformed.',
      },
      {
        seg: [
          { t: '居心地', r: 'いごこち' }, { t: 'が' }, { t: 'よく、' }, { t: 'いっそ' }, { t: 'ここ' }, { t: 'に' }, { t: '長', r: 'なが' }, { t: 'く' }, { t: '住', r: 'す' }, { t: 'みたい' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'う。' },
        ],
        en: 'It is comfortable here — I would rather just live here a long time.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 4,
    section: 1,
    title: '私の街',
    targetWords: [
      '街', '都市', '下町', '土地', '活気', '人通り', '絶える', '坂', '辺り', '付近', '住宅', '地区', 'エリア', '中間', '境', '抽選', '避難', '訓練', '見回る', '築く', '見当', '落書き', '強化',
    ],
    sentences: [
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'の' }, { t: '住', r: 'す' }, { t: 'む' }, { t: '街', r: 'まち' }, { t: 'は、' }, { t: '大', r: 'おお' }, { t: 'きな' }, { t: '都市', r: 'とし' }, { t: 'の' }, { t: '中間', r: 'ちゅうかん' }, { t: 'に' }, { t: 'ある。' },
        ],
        en: 'The town I live in lies midway between large cities.',
      },
      {
        seg: [
          { t: '駅', r: 'えき' }, { t: 'の' }, { t: '付近', r: 'ふきん' }, { t: 'は' }, { t: '人通', r: 'ひとどお' }, { t: 'り' }, { t: 'が' }, { t: '絶', r: 'た' }, { t: 'えず、' }, { t: 'いつも' }, { t: '活気', r: 'かっき' }, { t: 'が' }, { t: 'ある。' },
        ],
        en: 'Near the station the flow of people never stops, and it is always lively.',
      },
      {
        seg: [
          { t: 'ゆるい' }, { t: '坂', r: 'さか' }, { t: 'を' }, { t: '上', r: 'のぼ' }, { t: 'る' }, { t: 'と、' }, { t: 'その' }, { t: '辺', r: 'あた' }, { t: 'り' }, { t: 'から' }, { t: '下町', r: 'したまち' }, { t: 'の' }, { t: '景色', r: 'けしき' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'Going up the gentle slope, from around there it becomes an old-town view.',
      },
      {
        seg: [
          { t: '住宅', r: 'じゅうたく' }, { t: '地区', r: 'ちく' }, { t: 'と' }, { t: '商業', r: 'しょうぎょう' }, { t: 'エリア' }, { t: 'の' }, { t: '境', r: 'さかい' }, { t: 'は、' }, { t: '道', r: 'みち' }, { t: 'が' }, { t: '斜', r: 'なな' }, { t: 'め' }, { t: 'に' }, { t: '走', r: 'はし' }, { t: 'っている。' },
        ],
        en: 'At the boundary between the residential district and the commercial area, the road runs diagonally.',
      },
      {
        seg: [
          { t: 'この' }, { t: '土地', r: 'とち' }, { t: 'は' }, { t: '人気', r: 'にんき' }, { t: 'が' }, { t: 'あり、' }, { t: '入居', r: 'にゅうきょ' }, { t: 'は' }, { t: '抽選', r: 'ちゅうせん' }, { t: 'に' }, { t: 'なる' }, { t: 'こと' }, { t: 'も' }, { t: 'ある。' },
        ],
        en: 'This area is popular, and moving in is sometimes decided by lottery.',
      },
      {
        seg: [
          { t: '年', r: 'ねん' }, { t: 'に' }, { t: '一', r: 'いち' }, { t: '度', r: 'ど' }, { t: '、' }, { t: '避難', r: 'ひなん' }, { t: '訓練', r: 'くんれん' }, { t: 'が' }, { t: '行', r: 'おこな' }, { t: 'われる。' },
        ],
        en: 'Once a year an evacuation drill is held.',
      },
      {
        seg: [
          { t: '夜', r: 'よる' }, { t: 'は' }, { t: '自治会', r: 'じちかい' }, { t: 'の' }, { t: '人', r: 'ひと' }, { t: 'が' }, { t: '見回', r: 'みまわ' }, { t: 'り、' }, { t: '防犯', r: 'ぼうはん' }, { t: 'を' }, { t: '強化', r: 'きょうか' }, { t: 'している。' },
        ],
        en: 'At night the neighborhood association patrols, strengthening security.',
      },
      {
        seg: [
          { t: '壁', r: 'かべ' }, { t: 'の' }, { t: '落書', r: 'らくが' }, { t: 'き' }, { t: 'を' }, { t: '消', r: 'け' }, { t: 'す' }, { t: '活動', r: 'かつどう' }, { t: 'も' }, { t: '続', r: 'つづ' }, { t: 'いている。' },
        ],
        en: 'The activity of removing graffiti from walls also continues.',
      },
      {
        seg: [
          { t: 'こうして' }, { t: '長', r: 'なが' }, { t: 'い' }, { t: '年月', r: 'ねんげつ' }, { t: 'を' }, { t: 'かけて、' }, { t: '安全', r: 'あんぜん' }, { t: 'な' }, { t: '街', r: 'まち' }, { t: 'を' }, { t: '築', r: 'きず' }, { t: 'いてきた。' },
        ],
        en: 'In this way, over many years, we have built a safe town.',
      },
      {
        seg: [
          { t: '十', r: 'じゅう' }, { t: '年後', r: 'ねんご' }, { t: 'の' }, { t: '姿', r: 'すがた' }, { t: 'は、' }, { t: 'まだ' }, { t: '見当', r: 'けんとう' }, { t: 'が' }, { t: 'つかない。' },
        ],
        en: 'What it will look like in ten years, I still cannot guess.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 4,
    section: 2,
    title: '市役所にて',
    targetWords: [
      '自治体', '応える', '住民', '身分証明書', '生年月日', '署名', '修正', '年金', '施設', 'ロッカー', '建築', 'ニューアル', '近づける', '福祉', '年度', '交替', '収集', '配布', '処理', '需要', '提供', '用途', '知事'
    ],
    sentences: [
      {
        seg: [
          { t: '自治体', r: 'じちたい' }, { t: 'の' }, { t: '窓口', r: 'まどぐち' }, { t: 'で、' }, { t: '住民', r: 'じゅうみん' }, { t: 'として' }, { t: 'の' }, { t: '手続', r: 'てつづ' }, { t: 'き' }, { t: 'を' }, { t: 'した。' },
        ],
        en: 'At the local government counter, I completed the procedures as a resident.',
      },
      {
        seg: [
          { t: '身分証明書', r: 'みぶんしょうめいしょ' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'せ、' }, { t: '生年月日', r: 'せいねんがっぴ' }, { t: 'を' }, { t: '確認', r: 'かくにん' }, { t: 'して' }, { t: 'もらう。' },
        ],
        en: 'I showed my ID and had my date of birth confirmed.',
      },
      {
        seg: [
          { t: '書類', r: 'しょるい' }, { t: 'に' }, { t: '署名', r: 'しょめい' }, { t: 'し、' }, { t: '間違', r: 'まちが' }, { t: 'い' }, { t: 'を' }, { t: 'その' }, { t: '場', r: 'ば' }, { t: 'で' }, { t: '修正', r: 'しゅうせい' }, { t: 'した。' },
        ],
        en: 'I signed the document and corrected a mistake on the spot.',
      },
      {
        seg: [
          { t: '年金', r: 'ねんきん' }, { t: 'や' }, { t: '福祉', r: 'ふくし' }, { t: 'の' }, { t: '相談', r: 'そうだん' }, { t: 'に' }, { t: 'も、' }, { t: 'ていねいに' }, { t: '応', r: 'こた' }, { t: 'えて' }, { t: 'くれる。' },
        ],
        en: 'They also respond carefully to questions about pensions and welfare.',
      },
      {
        seg: [
          { t: '県', r: 'けん' }, { t: 'の' }, { t: '知事', r: 'ちじ' }, { t: 'が' }, { t: '視察', r: 'しさつ' }, { t: 'に' }, { t: '来', r: 'き' }, { t: 'た' }, { t: '日', r: 'ひ' }, { t: 'は、' }, { t: '窓口', r: 'まどぐち' }, { t: 'が' }, { t: 'いつも' }, { t: 'より' }, { t: '静', r: 'しず' }, { t: 'かだった。' },
        ],
        en: 'On the day the prefectural governor came to inspect, the counter was quieter than usual.',
      },
      {
        seg: [
          { t: 'この' }, { t: '施設', r: 'しせつ' }, { t: 'は' }, { t: '去年', r: 'きょねん' }, { t: 'リニューアル' }, { t: 'され、' }, { t: 'ロッカー' }, { t: 'も' }, { t: '新', r: 'あたら' }, { t: 'しく' }, { t: 'なった。' },
        ],
        en: 'This facility was renovated last year, and the lockers are new too.',
      },
      {
        seg: [
          { t: '建築', r: 'けんちく' }, { t: 'の' }, { t: '際', r: 'さい' }, { t: '、' }, { t: '駅', r: 'えき' }, { t: 'に' }, { t: '近', r: 'ちか' }, { t: 'づける' }, { t: '案', r: 'あん' }, { t: 'が' }, { t: '選', r: 'えら' }, { t: 'ばれた。' },
        ],
        en: 'When it was built, the plan to place it nearer the station was chosen.',
      },
      {
        seg: [
          { t: '年度', r: 'ねんど' }, { t: 'の' }, { t: '初', r: 'はじ' }, { t: 'め' }, { t: 'に' }, { t: '担当者', r: 'たんとうしゃ' }, { t: 'が' }, { t: '交替', r: 'こうたい' }, { t: 'する。' },
        ],
        en: 'At the start of the fiscal year, the person in charge changes over.',
      },
      {
        seg: [
          { t: 'ごみ' }, { t: 'の' }, { t: '収集', r: 'しゅうしゅう' }, { t: '日程', r: 'にってい' }, { t: 'は、' }, { t: 'チラシ' }, { t: 'で' }, { t: '配布', r: 'はいふ' }, { t: 'される。' },
        ],
        en: 'The rubbish collection schedule is distributed on a flyer.',
      },
      {
        seg: [
          { t: '申請', r: 'しんせい' }, { t: 'の' }, { t: '処理', r: 'しょり' }, { t: 'は' }, { t: '早', r: 'はや' }, { t: 'く、' }, { t: '用途', r: 'ようと' }, { t: 'に' }, { t: '応', r: 'おう' }, { t: 'じた' }, { t: '書式', r: 'しょしき' }, { t: 'が' }, { t: '提供', r: 'ていきょう' }, { t: 'される。' },
        ],
        en: 'Applications are processed quickly, and forms suited to each purpose are provided.',
      },
      {
        seg: [
          { t: '需要', r: 'じゅよう' }, { t: 'が' }, { t: '多', r: 'おお' }, { t: 'い' }, { t: '時期', r: 'じき' }, { t: 'は、' }, { t: 'やはり' }, { t: '混', r: 'こ' }, { t: 'む。' },
        ],
        en: 'In periods of high demand it does get crowded.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 4,
    section: 3,
    title: 'ふるさとへ',
    targetWords: [
      '故郷', '地元', '離れる', 'つかむ', '帰省', 'アクセス', '改善', '行事', 'はるか', '誇り', '載る', '宣伝', '作成', '見慣れる', '近郊', '描く', '若者', 'Uターン', '行き来', '担う',
    ],
    sentences: [
      {
        seg: [
          { t: '故郷', r: 'こきょう' }, { t: 'を' }, { t: '離', r: 'はな' }, { t: 'れて' }, { t: '十', r: 'じゅう' }, { t: '年', r: 'ねん' }, { t: '、' }, { t: 'いま' }, { t: 'でも' }, { t: '地元', r: 'じもと' }, { t: 'の' }, { t: '話', r: 'はなし' }, { t: 'に' }, { t: 'なる' }, { t: 'と' }, { t: '声', r: 'こえ' }, { t: 'が' }, { t: '弾', r: 'はず' }, { t: 'む。' },
        ],
        en: 'Ten years since leaving my hometown, my voice still lifts when it comes up.',
      },
      {
        seg: [
          { t: '盆', r: 'ぼん' }, { t: 'と' }, { t: '正月', r: 'しょうがつ' }, { t: 'に' }, { t: 'は' }, { t: '必', r: 'かなら' }, { t: 'ず' }, { t: '帰省', r: 'きせい' }, { t: 'する。' },
        ],
        en: 'I always go home for Obon and New Year.',
      },
      {
        seg: [
          { t: 'アクセス' }, { t: 'が' }, { t: '改善', r: 'かいぜん' }, { t: 'され、' }, { t: '近郊', r: 'きんこう' }, { t: 'まで' }, { t: 'の' }, { t: '行', r: 'ゆ' }, { t: 'き' }, { t: '来', r: 'き' }, { t: 'が' }, { t: '楽', r: 'らく' }, { t: 'に' }, { t: 'なった。' },
        ],
        en: 'Access has improved, and travel to the surrounding area has become easy.',
      },
      {
        seg: [
          { t: '夏', r: 'なつ' }, { t: 'の' }, { t: '行事', r: 'ぎょうじ' }, { t: 'は' }, { t: '地域', r: 'ちいき' }, { t: 'の' }, { t: '誇', r: 'ほこ' }, { t: 'り' }, { t: 'で、' }, { t: 'はるかな' }, { t: '昔', r: 'むかし' }, { t: 'から' }, { t: '続', r: 'つづ' }, { t: 'く。' },
        ],
        en: 'The summer festival is the pride of the region and continues from the distant past.',
      },
      {
        seg: [
          { t: '雑誌', r: 'ざっし' }, { t: 'に' }, { t: '載', r: 'の' }, { t: 'った' }, { t: 'とき' }, { t: 'は、' }, { t: '宣伝', r: 'せんでん' }, { t: '用', r: 'よう' }, { t: 'の' }, { t: 'ポスター' }, { t: 'も' }, { t: '作成', r: 'さくせい' }, { t: 'した。' },
        ],
        en: 'When it appeared in a magazine, we also made posters for publicity.',
      },
      {
        seg: [
          { t: '見慣', r: 'みな' }, { t: 'れた' }, { t: '風景', r: 'ふうけい' }, { t: 'を' }, { t: '絵', r: 'え' }, { t: 'に' }, { t: '描', r: 'えが' }, { t: 'く' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: '増', r: 'ふ' }, { t: 'えた。' },
        ],
        en: 'More people now paint the familiar scenery.',
      },
      {
        seg: [
          { t: 'チャンス' }, { t: 'を' }, { t: 'つかんで' }, { t: '都会', r: 'とかい' }, { t: 'へ' }, { t: '出', r: 'で' }, { t: 'た' }, { t: '若者', r: 'わかもの' }, { t: 'が、' }, { t: 'Uターン' }, { t: 'して' }, { t: '戻', r: 'もど' }, { t: 'って' }, { t: 'くる。' },
        ],
        en: 'Young people who seized a chance and went to the city return home again.',
      },
      {
        seg: [
          { t: '次', r: 'つぎ' }, { t: 'の' }, { t: '世代', r: 'せだい' }, { t: 'が' }, { t: 'この' }, { t: '土地', r: 'とち' }, { t: 'を' }, { t: '担', r: 'にな' }, { t: 'って' }, { t: 'いく' }, { t: 'だろう。' },
        ],
        en: 'The next generation will carry this place forward.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 4,
    section: 4,
    title: '移動する',
    targetWords: [
      '行き先', '方面', '行き帰り', '横断', '通行', '歩行者', '絶えず', '手段', '公共', '運賃', 'つかまる', 'アナウンス', '見合わせる', '乱れる', '再開', 'ICカード', '免許', '左右', '直線', 'なだらかな', '間隔', 'スムーズな', '指す', 'のろのろ', 'ぐるぐる', 'パンク', '慎重な', '気を抜く',
    ],
    sentences: [
      {
        seg: [
          { t: '毎朝', r: 'まいあさ' }, { t: '、' }, { t: '行', r: 'ゆ' }, { t: 'き' }, { t: '先', r: 'さき' }, { t: 'を' }, { t: '確', r: 'たし' }, { t: 'かめて' }, { t: 'から' }, { t: '家', r: 'いえ' }, { t: 'を' }, { t: '出', r: 'で' }, { t: 'る。' },
        ],
        en: 'Every morning I check my destination before leaving home.',
      },
      {
        seg: [
          { t: '東', r: 'ひがし' }, { t: '方面', r: 'ほうめん' }, { t: 'の' }, { t: '電車', r: 'でんしゃ' }, { t: 'は、' }, { t: '行', r: 'ゆ' }, { t: 'き' }, { t: '帰', r: 'かえ' }, { t: 'り' }, { t: 'とも' }, { t: 'に' }, { t: '混', r: 'こ' }, { t: 'む。' },
        ],
        en: 'Trains heading east are crowded both ways.',
      },
      {
        seg: [
          { t: '公共', r: 'こうきょう' }, { t: 'の' }, { t: '交通', r: 'こうつう' }, { t: '手段', r: 'しゅだん' }, { t: 'は' }, { t: '運賃', r: 'うんちん' }, { t: 'が' }, { t: '安', r: 'やす' }, { t: 'く、' }, { t: 'ICカード' }, { t: 'で' }, { t: '乗', r: 'の' }, { t: 'れる。' },
        ],
        en: 'Public transport is cheap and you can ride with an IC card.',
      },
      {
        seg: [
          { t: '車内', r: 'しゃない' }, { t: 'で' }, { t: 'は' }, { t: 'つり' }, { t: '革', r: 'かわ' }, { t: 'に' }, { t: 'つかまり、' }, { t: 'アナウンス' }, { t: 'を' }, { t: '聞', r: 'き' }, { t: 'く。' },
        ],
        en: 'Inside the carriage I hold a strap and listen to the announcements.',
      },
      {
        seg: [
          { t: '事故', r: 'じこ' }, { t: 'で' }, { t: 'ダイヤ' }, { t: 'が' }, { t: '乱', r: 'みだ' }, { t: 'れ、' }, { t: '運転', r: 'うんてん' }, { t: 'を' }, { t: '見合', r: 'みあ' }, { t: 'わせる' }, { t: '日', r: 'ひ' }, { t: 'も' }, { t: 'ある。' },
        ],
        en: 'Some days an accident disrupts the timetable and services are suspended.',
      },
      {
        seg: [
          { t: '再開', r: 'さいかい' }, { t: 'まで' }, { t: '絶', r: 'た' }, { t: 'えず' }, { t: 'アナウンス' }, { t: 'が' }, { t: '流', r: 'なが' }, { t: 'れた。' },
        ],
        en: 'Announcements played continuously until service resumed.',
      },
      {
        seg: [
          { t: '歩行者', r: 'ほこうしゃ' }, { t: 'は' }, { t: '横断', r: 'おうだん' }, { t: '歩道', r: 'ほどう' }, { t: 'を' }, { t: '通行', r: 'つうこう' }, { t: 'し、' }, { t: '左右', r: 'さゆう' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'る。' },
        ],
        en: 'Pedestrians cross at the crossing and look both ways.',
      },
      {
        seg: [
          { t: '免許', r: 'めんきょ' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'って' }, { t: 'から' }, { t: 'は、' }, { t: '慎重', r: 'しんちょう' }, { t: 'に' }, { t: '運転', r: 'うんてん' }, { t: 'する' }, { t: 'よう' }, { t: 'に' }, { t: 'している。' },
        ],
        en: 'Since getting my licence, I try to drive carefully.',
      },
      {
        seg: [
          { t: '直線', r: 'ちょくせん' }, { t: 'は' }, { t: 'スムーズ' }, { t: 'だ' }, { t: 'が、' }, { t: 'なだらかな' }, { t: '坂', r: 'さか' }, { t: 'で' }, { t: 'は' }, { t: 'のろのろ' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'The straight stretch is smooth, but on the gentle slope it slows to a crawl.',
      },
      {
        seg: [
          { t: '車間', r: 'しゃかん' }, { t: 'の' }, { t: '間隔', r: 'かんかく' }, { t: 'を' }, { t: 'あけ、' }, { t: 'ナビ' }, { t: 'が' }, { t: '指', r: 'さ' }, { t: 'す' }, { t: '方向', r: 'ほうこう' }, { t: 'へ' }, { t: '進', r: 'すす' }, { t: 'む。' },
        ],
        en: 'I leave space between cars and go the way the navigation points.',
      },
      {
        seg: [
          { t: '同', r: 'おな' }, { t: 'じ' }, { t: '道', r: 'みち' }, { t: 'を' }, { t: 'ぐるぐる' }, { t: '回', r: 'まわ' }, { t: 'った' }, { t: 'あげく、' }, { t: 'タイヤ' }, { t: 'が' }, { t: 'パンク' }, { t: 'した。' },
        ],
        en: 'After going round and round the same road, the tyre went flat.',
      },
      {
        seg: [
          { t: 'どんな' }, { t: 'とき' }, { t: 'も' }, { t: '気', r: 'き' }, { t: 'を' }, { t: '抜', r: 'ぬ' }, { t: 'いて' }, { t: 'は' }, { t: 'いけない。' },
        ],
        en: 'You must never let your guard down.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 4,
    section: 5,
    title: 'この土地の仕事',
    targetWords: [
      '生産', '供給', '栽培', '農家', '作物', '漁業', '栄える', '急増', '情緒', '向上', '構成', '重視', '提案', '検討', '不可欠な', '妨げる', '生える', '著しい', '参考', 'リスク', '現地',
    ],
    sentences: [
      {
        seg: [
          { t: 'この' }, { t: '地方', r: 'ちほう' }, { t: 'は' }, { t: '農業', r: 'のうぎょう' }, { t: 'と' }, { t: '漁業', r: 'ぎょぎょう' }, { t: 'で' }, { t: '栄', r: 'さか' }, { t: 'えて' }, { t: 'きた。' },
        ],
        en: 'This region has prospered on farming and fishing.',
      },
      {
        seg: [
          { t: '農家', r: 'のうか' }, { t: 'が' }, { t: '栽培', r: 'さいばい' }, { t: 'する' }, { t: '作物', r: 'さくもつ' }, { t: 'は、' }, { t: '都市', r: 'とし' }, { t: 'へ' }, { t: '供給', r: 'きょうきゅう' }, { t: 'される。' },
        ],
        en: 'The crops farmers grow are supplied to the cities.',
      },
      {
        seg: [
          { t: '生産', r: 'せいさん' }, { t: 'を' }, { t: '向上', r: 'こうじょう' }, { t: 'させる' }, { t: 'ため、' }, { t: '新', r: 'あたら' }, { t: 'しい' }, { t: '技術', r: 'ぎじゅつ' }, { t: 'が' }, { t: '普及', r: 'ふきゅう' }, { t: 'した。' },
        ],
        en: 'To raise production, new technology has spread.',
      },
      {
        seg: [
          { t: '若', r: 'わか' }, { t: 'い' }, { t: '就農者', r: 'しゅうのうしゃ' }, { t: 'が' }, { t: '急増', r: 'きゅうぞう' }, { t: 'した' }, { t: '年', r: 'とし' }, { t: 'も' }, { t: 'ある。' },
        ],
        en: 'There were years when young farmers increased sharply.',
      },
      {
        seg: [
          { t: '計画', r: 'けいかく' }, { t: 'を' }, { t: '構成', r: 'こうせい' }, { t: 'する' }, { t: '際', r: 'さい' }, { t: '、' }, { t: '現地', r: 'げんち' }, { t: 'の' }, { t: '声', r: 'こえ' }, { t: 'を' }, { t: '重視', r: 'じゅうし' }, { t: 'した。' },
        ],
        en: 'In putting the plan together, we placed weight on local voices.',
      },
      {
        seg: [
          { t: '提案', r: 'ていあん' }, { t: 'を' }, { t: '検討', r: 'けんとう' }, { t: 'し、' }, { t: 'リスク' }, { t: 'も' }, { t: '参考', r: 'さんこう' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'We examined the proposals and took the risks into account as well.',
      },
      {
        seg: [
          { t: '雑草', r: 'ざっそう' }, { t: 'が' }, { t: '生', r: 'は' }, { t: 'えて' }, { t: '成長', r: 'せいちょう' }, { t: 'を' }, { t: '妨', r: 'さまた' }, { t: 'げる' }, { t: 'こと' }, { t: 'も' }, { t: 'ある。' },
        ],
        en: 'Weeds sometimes grow and hinder growth.',
      },
      {
        seg: [
          { t: '気候', r: 'きこう' }, { t: 'の' }, { t: '影響', r: 'えいきょう' }, { t: 'は' }, { t: '著', r: 'いちじる' }, { t: 'しく、' }, { t: '対策', r: 'たいさく' }, { t: 'は' }, { t: '不可欠', r: 'ふかけつ' }, { t: 'だ。' },
        ],
        en: 'The effect of the climate is marked, and countermeasures are indispensable.',
      },
      {
        seg: [
          { t: '海辺', r: 'うみべ' }, { t: 'の' }, { t: '情緒', r: 'じょうちょ' }, { t: 'を' }, { t: '残', r: 'のこ' }, { t: 'した' }, { t: 'まま、' }, { t: 'この' }, { t: '土地', r: 'とち' }, { t: 'は' }, { t: '変', r: 'か' }, { t: 'わって' }, { t: 'いく。' },
        ],
        en: 'Keeping the atmosphere of the seaside, this place goes on changing.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 5,
    section: 1,
    title: '学校に通う',
    targetWords: [
      '教わる', '願書', '推薦', '狙う', '意志', '開始', '通常', '担任', '受け持つ', '委員', 'なじむ', '充実', '高等', 'ステップ', '過程', '取り上げる', '欠ける', '優勝な', '修了', 'ふさわしい', '認識', '語学学校',
    ],
    sentences: [
      {
        seg: [
          { t: '高等', r: 'こうとう' }, { t: '学校', r: 'がっこう' }, { t: 'を' }, { t: '出', r: 'で' }, { t: 'て、' }, { t: '語学', r: 'ごがく' }, { t: '学校', r: 'がっこう' }, { t: 'に' }, { t: '通', r: 'かよ' }, { t: 'う' }, { t: 'こと' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'After finishing high school, I decided to attend a language school.',
      },
      {
        seg: [
          { t: '願書', r: 'がんしょ' }, { t: 'を' }, { t: '出', r: 'だ' }, { t: 'す' }, { t: '前', r: 'まえ' }, { t: 'に、' }, { t: '先生', r: 'せんせい' }, { t: 'に' }, { t: '推薦', r: 'すいせん' }, { t: 'を' }, { t: 'お願', r: 'おねが' }, { t: 'いした。' },
        ],
        en: 'Before submitting the application, I asked my teacher for a recommendation.',
      },
      {
        seg: [
          { t: '合格', r: 'ごうかく' }, { t: 'を' }, { t: '狙', r: 'ねら' }, { t: 'う' }, { t: '強', r: 'つよ' }, { t: 'い' }, { t: '意志', r: 'いし' }, { t: 'が' }, { t: 'あった。' },
        ],
        en: 'I had a strong will to pass.',
      },
      {
        seg: [
          { t: '授業', r: 'じゅぎょう' }, { t: 'が' }, { t: '開始', r: 'かいし' }, { t: 'され、' }, { t: '通常', r: 'つうじょう' }, { t: 'の' }, { t: '生活', r: 'せいかつ' }, { t: 'が' }, { t: '始', r: 'はじ' }, { t: 'まった。' },
        ],
        en: 'Classes began, and ordinary life started.',
      },
      {
        seg: [
          { t: '担任', r: 'たんにん' }, { t: 'の' }, { t: '先生', r: 'せんせい' }, { t: 'が' }, { t: 'クラス' }, { t: 'を' }, { t: '受', r: 'う' }, { t: 'け' }, { t: '持', r: 'も' }, { t: 'ち、' }, { t: '多', r: 'おお' }, { t: 'く' }, { t: 'を' }, { t: '教', r: 'おそ' }, { t: 'わった。' },
        ],
        en: 'The homeroom teacher took charge of our class, and I learned a great deal.',
      },
      {
        seg: [
          { t: '委員', r: 'いいん' }, { t: 'を' }, { t: '引', r: 'ひ' }, { t: 'き' }, { t: '受', r: 'う' }, { t: 'けた' }, { t: 'こと' }, { t: 'で、' }, { t: 'クラス' }, { t: 'に' }, { t: 'なじむ' }, { t: 'の' }, { t: 'が' }, { t: '早', r: 'はや' }, { t: 'かった。' },
        ],
        en: 'Taking on a committee role helped me fit into the class quickly.',
      },
      {
        seg: [
          { t: '毎日', r: 'まいにち' }, { t: 'が' }, { t: '充実', r: 'じゅうじつ' }, { t: 'し、' }, { t: 'つぎ' }, { t: 'の' }, { t: 'ステップ' }, { t: 'が' }, { t: '見', r: 'み' }, { t: 'えて' }, { t: 'きた。' },
        ],
        en: 'Each day felt full, and the next step came into view.',
      },
      {
        seg: [
          { t: '学', r: 'まな' }, { t: 'ぶ' }, { t: '過程', r: 'かてい' }, { t: 'で' }, { t: '自分', r: 'じぶん' }, { t: 'に' }, { t: '欠', r: 'か' }, { t: 'けている' }, { t: 'もの' }, { t: 'を' }, { t: '認識', r: 'にんしき' }, { t: 'した。' },
        ],
        en: 'In the process of learning, I recognized what I was lacking.',
      },
      {
        seg: [
          { t: '授業', r: 'じゅぎょう' }, { t: 'で' }, { t: '取', r: 'と' }, { t: 'り' }, { t: '上', r: 'あ' }, { t: 'げられた' }, { t: '話題', r: 'わだい' }, { t: 'は、' }, { t: 'いま' }, { t: 'の' }, { t: '私', r: 'わたし' }, { t: 'に' }, { t: 'ふさわしい' }, { t: 'もの' }, { t: 'だった。' },
        ],
        en: 'The topics raised in class were fitting for who I was then.',
      },
      {
        seg: [
          { t: '課程', r: 'かてい' }, { t: 'を' }, { t: '修了', r: 'しゅうりょう' }, { t: 'した' }, { t: '日', r: 'ひ' }, { t: '、' }, { t: '優勝', r: 'ゆうしょう' }, { t: 'した' }, { t: 'とき' }, { t: 'の' }, { t: 'ような' }, { t: '気分', r: 'きぶん' }, { t: 'だった。' },
        ],
        en: 'The day I completed the course, I felt as if I had won a championship.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 5,
    section: 2,
    title: '学び方',
    targetWords: [
      '学ぶ', '学習', '学力', '教養', '参考書', '書き込む', '書き取る', '記号', '図', '下線', '法則', '志す', '徹夜', '上達', 'こつこつ', '地道な', '根気', '効率的な', '旺盛な', '基礎', '基本', '除く', '現状', 'おろそかな', '可能', '実現', '混同', '複数', '活用',
    ],
    sentences: [
      {
        seg: [
          { t: '語学', r: 'ごがく' }, { t: 'を' }, { t: '学', r: 'まな' }, { t: 'ぶ' }, { t: 'に' }, { t: 'は、' }, { t: '基礎', r: 'きそ' }, { t: 'と' }, { t: '基本', r: 'きほん' }, { t: 'を' }, { t: 'おろそかに' }, { t: 'しない' }, { t: 'こと' }, { t: 'だ。' },
        ],
        en: 'To learn a language, do not neglect the fundamentals and the basics.',
      },
      {
        seg: [
          { t: '参考書', r: 'さんこうしょ' }, { t: 'に' }, { t: '下線', r: 'かせん' }, { t: 'を' }, { t: '引', r: 'ひ' }, { t: 'き、' }, { t: '記号', r: 'きごう' }, { t: 'や' }, { t: '図', r: 'ず' }, { t: 'を' }, { t: '書', r: 'か' }, { t: 'き' }, { t: '込', r: 'こ' }, { t: 'む。' },
        ],
        en: 'I underline in the reference book and write in symbols and diagrams.',
      },
      {
        seg: [
          { t: '聞', r: 'き' }, { t: 'こえた' }, { t: '文', r: 'ぶん' }, { t: 'を' }, { t: '書', r: 'か' }, { t: 'き' }, { t: '取', r: 'と' }, { t: 'る' }, { t: '練習', r: 'れんしゅう' }, { t: 'を、' }, { t: 'こつこつ' }, { t: 'と' }, { t: '続', r: 'つづ' }, { t: 'ける。' },
        ],
        en: 'I steadily keep up the practice of writing down what I hear.',
      },
      {
        seg: [
          { t: '文法', r: 'ぶんぽう' }, { t: 'の' }, { t: '法則', r: 'ほうそく' }, { t: 'を' }, { t: '複数', r: 'ふくすう' }, { t: '混同', r: 'こんどう' }, { t: 'して、' }, { t: 'よく' }, { t: '間違', r: 'まちが' }, { t: 'えた。' },
        ],
        en: 'I confused several grammar rules and often got them wrong.',
      },
      {
        seg: [
          { t: '効率的', r: 'こうりつてき' }, { t: 'に' }, { t: '学習', r: 'がくしゅう' }, { t: 'する' }, { t: 'ため、' }, { t: '現状', r: 'げんじょう' }, { t: 'を' }, { t: '分', r: 'わ' }, { t: 'けて' }, { t: '考', r: 'かんが' }, { t: 'えた。' },
        ],
        en: 'To study efficiently, I broke down my current situation and thought it through.',
      },
      {
        seg: [
          { t: '地道', r: 'じみち' }, { t: 'な' }, { t: '作業', r: 'さぎょう' }, { t: 'に' }, { t: 'は' }, { t: '根気', r: 'こんき' }, { t: 'が' }, { t: 'いる' }, { t: 'が、' }, { t: '学力', r: 'がくりょく' }, { t: 'は' }, { t: '確実', r: 'かくじつ' }, { t: 'に' }, { t: '上達', r: 'じょうたつ' }, { t: 'する。' },
        ],
        en: 'Steady work takes perseverance, but ability improves for certain.',
      },
      {
        seg: [
          { t: '教養', r: 'きょうよう' }, { t: 'を' }, { t: '身', r: 'み' }, { t: 'に' }, { t: 'つけたい' }, { t: 'という' }, { t: '旺盛', r: 'おうせい' }, { t: 'な' }, { t: '気持', r: 'きも' }, { t: 'ち' }, { t: 'が' }, { t: 'あった。' },
        ],
        en: 'I had a vigorous desire to acquire a broad education.',
      },
      {
        seg: [
          { t: '徹夜', r: 'てつや' }, { t: 'は' }, { t: '体', r: 'からだ' }, { t: 'に' }, { t: '悪', r: 'わる' }, { t: 'い' }, { t: 'ので、' }, { t: 'いま' }, { t: 'は' }, { t: '除', r: 'のぞ' }, { t: 'いている。' },
        ],
        en: 'All-nighters are bad for the body, so I have cut them out now.',
      },
      {
        seg: [
          { t: '通訳', r: 'つうやく' }, { t: 'を' }, { t: '志', r: 'こころざ' }, { t: 'し、' }, { t: 'この' }, { t: '力', r: 'ちから' }, { t: 'を' }, { t: '活用', r: 'かつよう' }, { t: 'したい。' },
        ],
        en: 'I aspire to be an interpreter and want to put this ability to use.',
      },
      {
        seg: [
          { t: '可能', r: 'かのう' }, { t: 'な' }, { t: '限', r: 'かぎ' }, { t: 'り' }, { t: '努力', r: 'どりょく' }, { t: 'して、' }, { t: 'その' }, { t: '夢', r: 'ゆめ' }, { t: 'を' }, { t: '実現', r: 'じつげん' }, { t: 'させる。' },
        ],
        en: 'I will make every possible effort and realize that dream.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 5,
    section: 3,
    title: '試験の日',
    targetWords: [
      '挑戦', '範囲', 'パターン', 'あらゆる', '課題', '段落', '箇所', '用紙', '応用', '選択', '当てはまる', '述べる', '言い換える', '考え込む', '限る', '紛らわしい', 'さっぱり', '勘', '本番', '迫る', '必死な', 'いっせいに', '終了', '回収', '採点', '確実な',
    ],
    sentences: [
      {
        seg: [
          { t: '試験', r: 'しけん' }, { t: 'に' }, { t: '挑戦', r: 'ちょうせん' }, { t: 'する' }, { t: 'と' }, { t: '決', r: 'き' }, { t: 'め、' }, { t: '出題', r: 'しゅつだい' }, { t: '範囲', r: 'はんい' }, { t: 'を' }, { t: '調', r: 'しら' }, { t: 'べた。' },
        ],
        en: 'Having decided to take on the exam, I looked up the scope of the questions.',
      },
      {
        seg: [
          { t: '過去', r: 'かこ' }, { t: 'の' }, { t: 'パターン' }, { t: 'を' }, { t: '分析', r: 'ぶんせき' }, { t: 'し、' }, { t: 'あらゆる' }, { t: '課題', r: 'かだい' }, { t: 'に' }, { t: '目', r: 'め' }, { t: 'を' }, { t: '通', r: 'とお' }, { t: 'した。' },
        ],
        en: 'I analysed past patterns and looked through every kind of task.',
      },
      {
        seg: [
          { t: '長', r: 'なが' }, { t: 'い' }, { t: '文章', r: 'ぶんしょう' }, { t: 'は' }, { t: '段落', r: 'だんらく' }, { t: 'ごと' }, { t: 'に' }, { t: '区切', r: 'くぎ' }, { t: 'り、' }, { t: '大事', r: 'だいじ' }, { t: 'な' }, { t: '箇所', r: 'かしょ' }, { t: 'に' }, { t: '印', r: 'しるし' }, { t: 'を' }, { t: 'つける。' },
        ],
        en: 'I break long texts into paragraphs and mark the important spots.',
      },
      {
        seg: [
          { t: '答', r: 'こた' }, { t: 'え' }, { t: 'を' }, { t: '用紙', r: 'ようし' }, { t: 'に' }, { t: '書', r: 'か' }, { t: 'く' }, { t: 'とき' }, { t: 'は、' }, { t: '当', r: 'あ' }, { t: 'てはまる' }, { t: 'ものを' }, { t: '選択', r: 'せんたく' }, { t: 'する。' },
        ],
        en: 'When writing answers on the sheet, I select the one that applies.',
      },
      {
        seg: [
          { t: '自分', r: 'じぶん' }, { t: 'の' }, { t: '考', r: 'かんが' }, { t: 'え' }, { t: 'を' }, { t: '述', r: 'の' }, { t: 'べ、' }, { t: '別', r: 'べつ' }, { t: 'の' }, { t: '言葉', r: 'ことば' }, { t: 'で' }, { t: '言', r: 'い' }, { t: 'い' }, { t: '換', r: 'か' }, { t: 'える' }, { t: '練習', r: 'れんしゅう' }, { t: 'も' }, { t: 'した。' },
        ],
        en: 'I also practised stating my own view and rephrasing it in other words.',
      },
      {
        seg: [
          { t: '紛', r: 'まぎ' }, { t: 'らわしい' }, { t: '選択肢', r: 'せんたくし' }, { t: 'に' }, { t: '考', r: 'かんが' }, { t: 'え' }, { t: '込', r: 'こ' }, { t: 'み、' }, { t: 'さっぱり' }, { t: '分', r: 'わ' }, { t: 'からない' }, { t: 'こと' }, { t: 'も' }, { t: 'ある。' },
        ],
        en: 'I get stuck on confusing options and sometimes have no idea at all.',
      },
      {
        seg: [
          { t: 'そんな' }, { t: 'とき' }, { t: 'は' }, { t: '勘', r: 'かん' }, { t: 'に' }, { t: '限', r: 'かぎ' }, { t: 'らず、' }, { t: '基本', r: 'きほん' }, { t: 'を' }, { t: '応用', r: 'おうよう' }, { t: 'して' }, { t: '考', r: 'かんが' }, { t: 'える。' },
        ],
        en: 'At such times I do not rely on guesswork but apply the basics.',
      },
      {
        seg: [
          { t: '本番', r: 'ほんばん' }, { t: 'が' }, { t: '迫', r: 'せま' }, { t: 'る' }, { t: 'と、' }, { t: 'だれ' }, { t: 'も' }, { t: 'が' }, { t: '必死', r: 'ひっし' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'As the real thing approaches, everyone becomes desperate.',
      },
      {
        seg: [
          { t: '「はじめ」' }, { t: 'の' }, { t: '合図', r: 'あいず' }, { t: 'で、' }, { t: 'いっせいに' }, { t: 'ページ' }, { t: 'を' }, { t: 'めくった。' },
        ],
        en: 'At the signal to begin, we all turned the page at once.',
      },
      {
        seg: [
          { t: '終了', r: 'しゅうりょう' }, { t: 'の' }, { t: '合図', r: 'あいず' }, { t: 'の' }, { t: 'あと、' }, { t: '用紙', r: 'ようし' }, { t: 'が' }, { t: '回収', r: 'かいしゅう' }, { t: 'された。' },
        ],
        en: 'After the signal to stop, the papers were collected.',
      },
      {
        seg: [
          { t: '採点', r: 'さいてん' }, { t: 'の' }, { t: '結果', r: 'けっか' }, { t: 'が' }, { t: '出', r: 'で' }, { t: 'る' }, { t: 'まで、' }, { t: '確実', r: 'かくじつ' }, { t: 'な' }, { t: 'こと' }, { t: 'は' }, { t: '言', r: 'い' }, { t: 'えない。' },
        ],
        en: 'Until the marking results come out, nothing can be said for certain.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 5,
    section: 4,
    title: '大学での研究',
    targetWords: [
      '受講', '書き留める', '目標', '心構え', '学問', '分野', '取り組む', '意欲', '思いつく', '発明', '継続', 'ほんの', '受け入れる', 'キャンパス', '休講', '講師', '学会', 'わずか', '論理的な', '論じる', '引用', '訳す', '編集', '要旨', '明確な', '挙げる', '用いる', '手書き', '一気に', '完成', '分析'
    ],
    sentences: [
      {
        seg: [
          { t: '大学', r: 'だいがく' }, { t: 'で' }, { t: 'は' }, { t: '好', r: 'す' }, { t: 'きな' }, { t: '分野', r: 'ぶんや' }, { t: 'の' }, { t: '講義', r: 'こうぎ' }, { t: 'を' }, { t: '受講', r: 'じゅこう' }, { t: 'できる。' },
        ],
        en: 'At university you can take lectures in the field you like.',
      },
      {
        seg: [
          { t: '講師', r: 'こうし' }, { t: 'の' }, { t: '話', r: 'はなし' }, { t: 'を' }, { t: '書', r: 'か' }, { t: 'き' }, { t: '留', r: 'と' }, { t: 'め、' }, { t: 'あとで' }, { t: '要旨', r: 'ようし' }, { t: 'を' }, { t: 'まとめる。' },
        ],
        en: 'I note down what the lecturer says and summarize the gist afterwards.',
      },
      {
        seg: [
          { t: '明確', r: 'めいかく' }, { t: 'な' }, { t: '目標', r: 'もくひょう' }, { t: 'と' }, { t: '心構', r: 'こころがま' }, { t: 'え' }, { t: 'が' }, { t: 'あれば、' }, { t: '学問', r: 'がくもん' }, { t: 'は' }, { t: '楽', r: 'たの' }, { t: 'しい。' },
        ],
        en: 'With clear goals and the right mindset, academic study is enjoyable.',
      },
      {
        seg: [
          { t: '研究', r: 'けんきゅう' }, { t: 'に' }, { t: '取', r: 'と' }, { t: 'り' }, { t: '組', r: 'く' }, { t: 'む' }, { t: '意欲', r: 'いよく' }, { t: 'は、' }, { t: 'ほんの' }, { t: '小', r: 'ちい' }, { t: 'さな' }, { t: '疑問', r: 'ぎもん' }, { t: 'から' }, { t: '生', r: 'う' }, { t: 'まれる。' },
        ],
        en: 'The drive to tackle research is born from just a small question.',
      },
      {
        seg: [
          { t: '思', r: 'おも' }, { t: 'いついた' }, { t: 'こと' }, { t: 'を' }, { t: '論理的', r: 'ろんりてき' }, { t: 'に' }, { t: '論', r: 'ろん' }, { t: 'じ、' }, { t: 'データ' }, { t: 'を' }, { t: '分析', r: 'ぶんせき' }, { t: 'して' }, { t: '例', r: 'れい' }, { t: 'を' }, { t: '挙', r: 'あ' }, { t: 'げる。' },
        ],
        en: 'I argue what occurs to me logically, analyse the data and give examples.',
      },
      {
        seg: [
          { t: '他人', r: 'たにん' }, { t: 'の' }, { t: '文', r: 'ぶん' }, { t: 'を' }, { t: '引用', r: 'いんよう' }, { t: 'する' }, { t: 'とき' }, { t: 'は、' }, { t: 'かならず' }, { t: '出典', r: 'しゅってん' }, { t: 'を' }, { t: '用', r: 'もち' }, { t: 'いる。' },
        ],
        en: 'When quoting others, I always cite the source.',
      },
      {
        seg: [
          { t: '英語', r: 'えいご' }, { t: 'の' }, { t: '論文', r: 'ろんぶん' }, { t: 'を' }, { t: '訳', r: 'やく' }, { t: 'し、' }, { t: '編集', r: 'へんしゅう' }, { t: 'して' }, { t: '資料', r: 'しりょう' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'I translated English papers and edited them into materials.',
      },
      {
        seg: [
          { t: '休講', r: 'きゅうこう' }, { t: 'の' }, { t: '日', r: 'ひ' }, { t: 'は、' }, { t: 'キャンパス' }, { t: 'が' }, { t: 'わずか' }, { t: 'に' }, { t: '静', r: 'しず' }, { t: 'か' }, { t: 'だ。' },
        ],
        en: 'On days when lectures are cancelled, the campus is a little quieter.',
      },
      {
        seg: [
          { t: '学会', r: 'がっかい' }, { t: 'の' }, { t: '発表', r: 'はっぴょう' }, { t: 'を' }, { t: '受', r: 'う' }, { t: 'け' }, { t: '入', r: 'い' }, { t: 'れて' }, { t: 'もらい、' }, { t: '研究', r: 'けんきゅう' }, { t: 'を' }, { t: '継続', r: 'けいぞく' }, { t: 'した。' },
        ],
        en: 'My conference presentation was accepted, and I continued the research.',
      },
      {
        seg: [
          { t: '手書', r: 'てが' }, { t: 'き' }, { t: 'の' }, { t: 'メモ' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'ながら、' }, { t: '一気', r: 'いっき' }, { t: 'に' }, { t: '論文', r: 'ろんぶん' }, { t: 'を' }, { t: '完成', r: 'かんせい' }, { t: 'させた。' },
        ],
        en: 'Looking at my handwritten notes, I finished the paper in one go.',
      },
      {
        seg: [
          { t: '新', r: 'あたら' }, { t: 'しい' }, { t: '方法', r: 'ほうほう' }, { t: 'を' }, { t: '発明', r: 'はつめい' }, { t: 'する' }, { t: 'こと' }, { t: 'も、' }, { t: 'いつか' }, { t: 'は' }, { t: 'できる' }, { t: 'だろう。' },
        ],
        en: 'Someday I may even be able to invent a new method.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 5,
    section: 5,
    title: 'パソコンの前で',
    targetWords: [
      '起動', '本体', 'キーボード', 'ディスプレイ', '接続', '検索', '転送', '文書', '設定', '余白', 'フォント', 'カーソル', '改行', '区切る', '貼り付ける', '強調', '拡大', '消去', '上書き保存', '順序', '印刷', 'プリンター', 'インク',
    ],
    sentences: [
      {
        seg: [
          { t: '朝', r: 'あさ' }, { t: '、' }, { t: 'パソコン' }, { t: 'の' }, { t: '本体', r: 'ほんたい' }, { t: 'の' }, { t: 'ボタン' }, { t: 'を' }, { t: '押', r: 'お' }, { t: 'して' }, { t: '起動', r: 'きどう' }, { t: 'する。' },
        ],
        en: 'In the morning I press the button on the computer and start it up.',
      },
      {
        seg: [
          { t: 'ディスプレイ' }, { t: 'が' }, { t: '明', r: 'あか' }, { t: 'るく' }, { t: 'なり、' }, { t: 'キーボード' }, { t: 'に' }, { t: '手', r: 'て' }, { t: 'を' }, { t: '置', r: 'お' }, { t: 'く。' },
        ],
        en: 'The display brightens and I put my hands on the keyboard.',
      },
      {
        seg: [
          { t: 'ネット' }, { t: 'に' }, { t: '接続', r: 'せつぞく' }, { t: 'して、' }, { t: 'キーワード' }, { t: 'を' }, { t: '検索', r: 'けんさく' }, { t: 'する。' },
        ],
        en: 'I connect to the internet and search for keywords.',
      },
      {
        seg: [
          { t: '必要', r: 'ひつよう' }, { t: 'な' }, { t: '文書', r: 'ぶんしょ' }, { t: 'を' }, { t: '同僚', r: 'どうりょう' }, { t: 'に' }, { t: '転送', r: 'てんそう' }, { t: 'した。' },
        ],
        en: 'I forwarded the necessary documents to a colleague.',
      },
      {
        seg: [
          { t: '余白', r: 'よはく' }, { t: 'と' }, { t: 'フォント' }, { t: 'を' }, { t: '設定', r: 'せってい' }, { t: 'し、' }, { t: '読', r: 'よ' }, { t: 'みやすく' }, { t: '整', r: 'ととの' }, { t: 'える。' },
        ],
        en: 'I set the margins and font and make it easy to read.',
      },
      {
        seg: [
          { t: 'カーソル' }, { t: 'を' }, { t: '動', r: 'うご' }, { t: 'かし、' }, { t: 'ここ' }, { t: 'で' }, { t: '改行', r: 'かいぎょう' }, { t: 'して' }, { t: '文', r: 'ぶん' }, { t: 'を' }, { t: '区切', r: 'くぎ' }, { t: 'る。' },
        ],
        en: 'I move the cursor, break the line here and divide the sentence.',
      },
      {
        seg: [
          { t: 'コピー' }, { t: 'した' }, { t: '表', r: 'ひょう' }, { t: 'を' }, { t: '貼', r: 'は' }, { t: 'り' }, { t: '付', r: 'つ' }, { t: 'け、' }, { t: '大事', r: 'だいじ' }, { t: 'な' }, { t: '数字', r: 'すうじ' }, { t: 'を' }, { t: '強調', r: 'きょうちょう' }, { t: 'した。' },
        ],
        en: 'I pasted the copied table and emphasized the important figures.',
      },
      {
        seg: [
          { t: '小', r: 'ちい' }, { t: 'さな' }, { t: '字', r: 'じ' }, { t: 'は' }, { t: '拡大', r: 'かくだい' }, { t: 'し、' }, { t: 'いらない' }, { t: '行', r: 'ぎょう' }, { t: 'は' }, { t: '消去', r: 'しょうきょ' }, { t: 'する。' },
        ],
        en: 'I enlarge small text and delete unnecessary lines.',
      },
      {
        seg: [
          { t: 'こまめに' }, { t: '上書', r: 'うわが' }, { t: 'き' }, { t: '保存', r: 'ほぞん' }, { t: 'して、' }, { t: '順序', r: 'じゅんじょ' }, { t: 'を' }, { t: '確', r: 'たし' }, { t: 'かめる。' },
        ],
        en: 'I save over the file frequently and check the order.',
      },
      {
        seg: [
          { t: 'プリンター' }, { t: 'の' }, { t: 'インク' }, { t: 'が' }, { t: '切', r: 'き' }, { t: 'れて、' }, { t: '印刷', r: 'いんさつ' }, { t: 'が' }, { t: '止', r: 'と' }, { t: 'まって' }, { t: 'しまった。' },
        ],
        en: 'The printer ran out of ink and the printing stopped.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 6,
    section: 1,
    title: '就職活動',
    targetWords: [
      '求人', '志望', 'エントリー', '携わる', '生かす', '貴社', '御中', '動機', '熱意', '学歴', '不問', '制限', '特技', '協調', '肝心な', '精一杯', '対応', '合同', '望ましい', '好ましい', '公平', 'せめて', '受け取る', '内定', '辞退', '契約', '入社', '心得る', '社会人', '自覚', 'いよいよ',
    ],
    sentences: [
      {
        seg: [
          { t: '求人', r: 'きゅうじん' }, { t: 'サイト' }, { t: 'で' }, { t: '志望', r: 'しぼう' }, { t: 'する' }, { t: '会社', r: 'かいしゃ' }, { t: 'を' }, { t: '探', r: 'さが' }, { t: 'し、' }, { t: 'エントリー' }, { t: 'した。' },
        ],
        en: 'I searched job sites for companies I wanted and submitted entries.',
      },
      {
        seg: [
          { t: '学歴', r: 'がくれき' }, { t: '不問', r: 'ふもん' }, { t: '、' }, { t: '年齢', r: 'ねんれい' }, { t: 'の' }, { t: '制限', r: 'せいげん' }, { t: 'なし' }, { t: 'と' }, { t: 'ある' }, { t: 'の' }, { t: 'は' }, { t: '好', r: 'この' }, { t: 'ましい。' },
        ],
        en: 'It is agreeable when it says no educational requirement and no age limit.',
      },
      {
        seg: [
          { t: '封筒', r: 'ふうとう' }, { t: 'に' }, { t: '「' }, { t: '御中', r: 'おんちゅう' }, { t: '」' }, { t: 'と' }, { t: '書', r: 'か' }, { t: 'き、' }, { t: '貴社', r: 'きしゃ' }, { t: 'あて' }, { t: 'に' }, { t: '送', r: 'おく' }, { t: 'った。' },
        ],
        en: 'I wrote "onchu" on the envelope and sent it to the company.',
      },
      {
        seg: [
          { t: '志望', r: 'しぼう' }, { t: '動機', r: 'どうき' }, { t: 'に' }, { t: 'は、' }, { t: '熱意', r: 'ねつい' }, { t: 'を' }, { t: '込', r: 'こ' }, { t: 'めて' }, { t: '書', r: 'か' }, { t: 'いた。' },
        ],
        en: 'I wrote my reason for applying with real enthusiasm.',
      },
      {
        seg: [
          { t: '特技', r: 'とくぎ' }, { t: 'と、' }, { t: 'これ' }, { t: 'まで' }, { t: 'の' }, { t: '経験', r: 'けいけん' }, { t: 'を' }, { t: '生', r: 'い' }, { t: 'かせる' }, { t: '点', r: 'てん' }, { t: 'を' }, { t: 'アピール' }, { t: 'した。' },
        ],
        en: 'I highlighted my special skills and how I could use my experience.',
      },
      {
        seg: [
          { t: '肝心', r: 'かんじん' }, { t: 'な' }, { t: 'の' }, { t: 'は、' }, { t: '人', r: 'ひと' }, { t: 'と' }, { t: '協調', r: 'きょうちょう' }, { t: 'できる' }, { t: 'か' }, { t: 'どうか' }, { t: 'だ' }, { t: 'そうだ。' },
        ],
        en: 'What matters, apparently, is whether you can cooperate with others.',
      },
      {
        seg: [
          { t: '合同', r: 'ごうどう' }, { t: '説明会', r: 'せつめいかい' }, { t: 'で' }, { t: 'は、' }, { t: '公平', r: 'こうへい' }, { t: 'に' }, { t: '質問', r: 'しつもん' }, { t: 'に' }, { t: '対応', r: 'たいおう' }, { t: 'して' }, { t: 'くれた。' },
        ],
        en: 'At the joint information session they answered questions fairly.',
      },
      {
        seg: [
          { t: '面接', r: 'めんせつ' }, { t: 'で' }, { t: 'は' }, { t: '精一杯', r: 'せいいっぱい' }, { t: '話', r: 'はな' }, { t: 'し、' }, { t: 'せめて' }, { t: '後悔', r: 'こうかい' }, { t: 'は' }, { t: 'しないように' }, { t: 'した。' },
        ],
        en: 'In the interview I spoke my utmost, so that at least I would have no regrets.',
      },
      {
        seg: [
          { t: '医療', r: 'いりょう' }, { t: 'に' }, { t: '携', r: 'たずさ' }, { t: 'わる' }, { t: '仕事', r: 'しごと' }, { t: 'が' }, { t: '望', r: 'のぞ' }, { t: 'ましい' }, { t: 'と' }, { t: '考', r: 'かんが' }, { t: 'えて' }, { t: 'いた。' },
        ],
        en: 'I had thought work involving healthcare would be desirable.',
      },
      {
        seg: [
          { t: '内定', r: 'ないてい' }, { t: 'の' }, { t: '通知', r: 'つうち' }, { t: 'を' }, { t: '受', r: 'う' }, { t: 'け' }, { t: '取', r: 'と' }, { t: 'り、' }, { t: 'ほか' }, { t: 'は' }, { t: '辞退', r: 'じたい' }, { t: 'した。' },
        ],
        en: 'I received a job offer and declined the others.',
      },
      {
        seg: [
          { t: '契約', r: 'けいやく' }, { t: 'を' }, { t: '交', r: 'か' }, { t: 'わし、' }, { t: 'いよいよ' }, { t: '入社', r: 'にゅうしゃ' }, { t: 'の' }, { t: '日', r: 'ひ' }, { t: 'が' }, { t: '来', r: 'き' }, { t: 'た。' },
        ],
        en: 'I signed the contract, and at last the day of joining the company came.',
      },
      {
        seg: [
          { t: '社会人', r: 'しゃかいじん' }, { t: 'として' }, { t: 'の' }, { t: '責任', r: 'せきにん' }, { t: 'を' }, { t: '自覚', r: 'じかく' }, { t: 'し、' }, { t: '心得', r: 'こころえ' }, { t: 'て' }, { t: 'おく' }, { t: 'つもり', r: '・' }, { t: 'だ。' },
        ],
        en: 'I intend to be aware of my responsibilities as a working adult and keep them in mind.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 6,
    section: 2,
    title: '会社という組織',
    targetWords: [
      '大企業', '大手', '代表', '民間', '組織', '従業員', '新入社員', '派遣社員', 'オーナー', '重役', 'オフィス', '支給', '出世', '昇進', '転勤', '赴任', '有給休暇', '人事', '人材', '人手', 'モニター', '業績', '資本', '方針', '我々', '製品', '売れ行き', '売り上げ', 'コスト', '果たす', '得る', '認める',
    ],
    sentences: [
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'の' }, { t: '会社', r: 'かいしゃ' }, { t: 'は' }, { t: '大手', r: 'おおて' }, { t: 'の' }, { t: '民間', r: 'みんかん' }, { t: '企業', r: 'きぎょう' }, { t: 'で、' }, { t: '従業員', r: 'じゅうぎょういん' }, { t: 'も' }, { t: '多', r: 'おお' }, { t: 'い。' },
        ],
        en: 'My company is a major private firm with many employees.',
      },
      {
        seg: [
          { t: '新入社員', r: 'しんにゅうしゃいん' }, { t: 'も' }, { t: '派遣社員', r: 'はけんしゃいん' }, { t: 'も、' }, { t: '同', r: 'おな' }, { t: 'じ' }, { t: 'オフィス' }, { t: 'で' }, { t: '働', r: 'はたら' }, { t: 'く。' },
        ],
        en: 'New hires and temporary staff all work in the same office.',
      },
      {
        seg: [
          { t: '大企業', r: 'だいきぎょう' }, { t: 'の' }, { t: '組織', r: 'そしき' }, { t: 'は' }, { t: '複雑', r: 'ふくざつ' }, { t: 'で、' }, { t: '人事', r: 'じんじ' }, { t: 'の' }, { t: '方針', r: 'ほうしん' }, { t: 'も' }, { t: 'よく' }, { t: '変', r: 'か' }, { t: 'わる。' },
        ],
        en: 'The organization of a large company is complex, and HR policy changes often.',
      },
      {
        seg: [
          { t: '重役', r: 'じゅうやく' }, { t: 'や' }, { t: 'オーナー' }, { t: 'が' }, { t: '会社', r: 'かいしゃ' }, { t: 'を' }, { t: '代表', r: 'だいひょう' }, { t: 'して' }, { t: '挨拶', r: 'あいさつ' }, { t: 'した。' },
        ],
        en: 'The executives and the owner gave a greeting on behalf of the company.',
      },
      {
        seg: [
          { t: '我々', r: 'われわれ' }, { t: 'の' }, { t: '部署', r: 'ぶしょ' }, { t: 'は' }, { t: '人手', r: 'ひとで' }, { t: 'が' }, { t: '足', r: 'た' }, { t: 'りず、' }, { t: '人材', r: 'じんざい' }, { t: 'を' }, { t: '募集', r: 'ぼしゅう' }, { t: 'している。' },
        ],
        en: 'Our department is short-handed and is recruiting.',
      },
      {
        seg: [
          { t: '製品', r: 'せいひん' }, { t: 'の' }, { t: '売', r: 'う' }, { t: 'れ' }, { t: '行', r: 'ゆ' }, { t: 'き' }, { t: 'を' }, { t: 'モニター' }, { t: 'で' }, { t: '確認', r: 'かくにん' }, { t: 'する。' },
        ],
        en: 'I check how the products are selling on the monitor.',
      },
      {
        seg: [
          { t: '今期', r: 'こんき' }, { t: 'の' }, { t: '売', r: 'う' }, { t: 'り' }, { t: '上', r: 'あ' }, { t: 'げ' }, { t: 'は' }, { t: '伸', r: 'の' }, { t: 'び、' }, { t: '業績', r: 'ぎょうせき' }, { t: 'も' }, { t: '良', r: 'よ' }, { t: 'かった。' },
        ],
        en: 'This term’s sales rose and performance was good.',
      },
      {
        seg: [
          { t: 'コスト' }, { t: 'を' }, { t: '下', r: 'さ' }, { t: 'げる' }, { t: '役割', r: 'やくわり' }, { t: 'を' }, { t: '果', r: 'は' }, { t: 'たし、' }, { t: '評価', r: 'ひょうか' }, { t: 'を' }, { t: '得', r: 'え' }, { t: 'た。' },
        ],
        en: 'I fulfilled my role of cutting costs and earned recognition.',
      },
      {
        seg: [
          { t: '努力', r: 'どりょく' }, { t: 'が' }, { t: '認', r: 'みと' }, { t: 'められて' }, { t: '昇進', r: 'しょうしん' }, { t: 'し、' }, { t: '出世', r: 'しゅっせ' }, { t: 'した' }, { t: '同期', r: 'どうき' }, { t: 'も' }, { t: 'いる。' },
        ],
        en: 'Some of my intake had their efforts recognized, were promoted and got ahead.',
      },
      {
        seg: [
          { t: '転勤', r: 'てんきん' }, { t: 'を' }, { t: '命', r: 'めい' }, { t: 'じられ、' }, { t: '大阪', r: 'おおさか' }, { t: 'に' }, { t: '赴任', r: 'ふにん' }, { t: 'する' }, { t: 'こと' }, { t: 'に' }, { t: 'なった。' },
        ],
        en: 'I was ordered to transfer and will be posted to Osaka.',
      },
      {
        seg: [
          { t: '有給休暇', r: 'ゆうきゅうきゅうか' }, { t: 'は' }, { t: '支給', r: 'しきゅう' }, { t: 'されている' }, { t: 'が、' }, { t: 'なかなか' }, { t: '取', r: 'と' }, { t: 'れない。' },
        ],
        en: 'Paid leave is granted, but it is hard to take.',
      },
      {
        seg: [
          { t: '資本', r: 'しほん' }, { t: 'の' }, { t: '大', r: 'おお' }, { t: 'きさ' }, { t: 'より、' }, { t: '働', r: 'はたら' }, { t: 'く' }, { t: '人', r: 'ひと' }, { t: 'の' }, { t: '気持', r: 'きも' }, { t: 'ち' }, { t: 'が' }, { t: '大切', r: 'たいせつ' }, { t: 'だ' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'う。' },
        ],
        en: 'More than the size of the capital, I think the feelings of the workers matter.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 6,
    section: 3,
    title: '仕事の進め方',
    targetWords: [
      'ビジネス', '就く', '生きがい', 'やりがい', '抱く', '打ち合わせ', 'アポイント', '応対', '改めて', 'じかに', 'プロジェクト', '意図', '新たな', '組む', '取り引き', '依頼', '任せる', '引き受ける', 'こなす', '成果', '達成', '作業', '保留', 'やり直す', '件', '急用', '至急', '手順', '移動', '大工', 'ガードマン',
    ],
    sentences: [
      {
        seg: [
          { t: 'この' }, { t: 'ビジネス' }, { t: 'に' }, { t: '就', r: 'つ' }, { t: 'いて' }, { t: 'から、' }, { t: '毎日', r: 'まいにち' }, { t: 'に' }, { t: 'やりがい' }, { t: 'を' }, { t: '感', r: 'かん' }, { t: 'じる。' },
        ],
        en: 'Since taking this job, I feel a sense of reward each day.',
      },
      {
        seg: [
          { t: '仕事', r: 'しごと' }, { t: 'に' }, { t: '生', r: 'い' }, { t: 'きがい' }, { t: 'を' }, { t: '抱', r: 'いだ' }, { t: 'く' }, { t: '人', r: 'ひと' }, { t: 'は' }, { t: '強', r: 'つよ' }, { t: 'い。' },
        ],
        en: 'People who find purpose in their work are strong.',
      },
      {
        seg: [
          { t: '朝', r: 'あさ' }, { t: 'の' }, { t: '打', r: 'う' }, { t: 'ち' }, { t: '合', r: 'あ' }, { t: 'わせ' }, { t: 'で、' }, { t: 'その' }, { t: '日', r: 'ひ' }, { t: 'の' }, { t: '手順', r: 'てじゅん' }, { t: 'を' }, { t: '確認', r: 'かくにん' }, { t: 'する。' },
        ],
        en: 'In the morning meeting we confirm the day’s procedure.',
      },
      {
        seg: [
          { t: '取', r: 'と' }, { t: 'り' }, { t: '引', r: 'ひ' }, { t: 'き' }, { t: '先', r: 'さき' }, { t: 'に' }, { t: 'アポイント' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'り、' }, { t: '新', r: 'あら' }, { t: 'たな' }, { t: 'プロジェクト' }, { t: 'を' }, { t: '組', r: 'く' }, { t: 'む。' },
        ],
        en: 'I make an appointment with a client and set up a new project.',
      },
      {
        seg: [
          { t: '電話', r: 'でんわ' }, { t: 'の' }, { t: '応対', r: 'おうたい' }, { t: 'で' }, { t: 'は、' }, { t: '伝言', r: 'でんごん' }, { t: 'を' }, { t: '正確', r: 'せいかく' }, { t: 'に' }, { t: '残', r: 'のこ' }, { t: 'す。' },
        ],
        en: 'When answering the phone, I leave messages accurately.',
      },
      {
        seg: [
          { t: '急用', r: 'きゅうよう' }, { t: 'なら' }, { t: '至急', r: 'しきゅう' }, { t: '連絡', r: 'れんらく' }, { t: 'し、' }, { t: 'その' }, { t: '件', r: 'けん' }, { t: 'は' }, { t: 'じかに' }, { t: '話', r: 'はな' }, { t: 'す。' },
        ],
        en: 'If it is urgent I contact them immediately and discuss that matter in person.',
      },
      {
        seg: [
          { t: '依頼', r: 'いらい' }, { t: 'を' }, { t: '引', r: 'ひ' }, { t: 'き' }, { t: '受', r: 'う' }, { t: 'け、' }, { t: '後輩', r: 'こうはい' }, { t: 'に' }, { t: 'も' }, { t: '一部', r: 'いちぶ' }, { t: 'を' }, { t: '任', r: 'まか' }, { t: 'せた。' },
        ],
        en: 'I took on the request and entrusted part of it to a junior colleague.',
      },
      {
        seg: [
          { t: '意図', r: 'いと' }, { t: 'を' }, { t: '改', r: 'あらた' }, { t: 'めて' }, { t: '説明', r: 'せつめい' }, { t: 'する' }, { t: 'と、' }, { t: '作業', r: 'さぎょう' }, { t: 'を' }, { t: 'うまく' }, { t: 'こなして' }, { t: 'くれた。' },
        ],
        en: 'When I explained the intent again, they handled the work well.',
      },
      {
        seg: [
          { t: '目標', r: 'もくひょう' }, { t: 'を' }, { t: '達成', r: 'たっせい' }, { t: 'し、' }, { t: '成果', r: 'せいか' }, { t: 'を' }, { t: '報告', r: 'ほうこく' }, { t: 'した。' },
        ],
        en: 'We achieved the target and reported the results.',
      },
      {
        seg: [
          { t: '判断', r: 'はんだん' }, { t: 'を' }, { t: '保留', r: 'ほりゅう' }, { t: 'した' }, { t: '案件', r: 'あんけん' }, { t: 'は、' }, { t: 'あとで' }, { t: 'やり' }, { t: '直', r: 'なお' }, { t: 'す' }, { t: 'こと' }, { t: 'に' }, { t: 'なった。' },
        ],
        en: 'The matter we put on hold ended up being redone later.',
      },
      {
        seg: [
          { t: '現場', r: 'げんば' }, { t: 'へ' }, { t: '移動', r: 'いどう' }, { t: 'する' }, { t: 'と、' }, { t: '大工', r: 'だいく' }, { t: 'や' }, { t: 'ガードマン' }, { t: 'が' }, { t: 'すでに' }, { t: '働', r: 'はたら' }, { t: 'いていた。' },
        ],
        en: 'When I moved to the site, the carpenters and security guards were already at work.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 6,
    section: 4,
    title: '上下のつきあい',
    targetWords: [
      '地位', '目上', '敬意', '敬う', '的確な', '忠告', 'サポート', 'いばる', '押し付ける', 'ご無沙汰', '恐縮', '信頼', '従う', 'うなずく', '反論', 'わびる', 'やる気', 'お世辞', 'ごまをする', '上等な', '苦痛', '夫人', 'ベテラン', '平社員',
    ],
    sentences: [
      {
        seg: [
          { t: '会社', r: 'かいしゃ' }, { t: 'で' }, { t: 'は' }, { t: '地位', r: 'ちい' }, { t: 'に' }, { t: 'かかわらず、' }, { t: '目上', r: 'めうえ' }, { t: 'の' }, { t: '人', r: 'ひと' }, { t: 'を' }, { t: '敬', r: 'うやま' }, { t: 'う。' },
        ],
        en: 'At the company, regardless of rank, we respect our seniors.',
      },
      {
        seg: [
          { t: '敬意', r: 'けいい' }, { t: 'を' }, { t: '持', r: 'も' }, { t: 'って' }, { t: '接', r: 'せっ' }, { t: 'すれば、' }, { t: '信頼', r: 'しんらい' }, { t: 'は' }, { t: '自然', r: 'しぜん' }, { t: 'に' }, { t: '生', r: 'う' }, { t: 'まれる。' },
        ],
        en: 'If you deal with people respectfully, trust arises naturally.',
      },
      {
        seg: [
          { t: 'ベテラン', r: '・' }, { t: 'の' }, { t: '先輩', r: 'せんぱい' }, { t: 'は、' }, { t: 'いつも' }, { t: '的確', r: 'てきかく' }, { t: 'な' }, { t: '忠告', r: 'ちゅうこく' }, { t: 'を' }, { t: 'くれる。' },
        ],
        en: 'The veteran senior always gives precise advice.',
      },
      {
        seg: [
          { t: '困', r: 'こま' }, { t: 'った' }, { t: 'とき' }, { t: 'に' }, { t: 'サポート' }, { t: 'して' }, { t: 'もらい、' }, { t: '感謝', r: 'かんしゃ' }, { t: 'して' }, { t: 'いる。' },
        ],
        en: 'They supported me when I was in trouble, and I am grateful.',
      },
      {
        seg: [
          { t: 'いばって' }, { t: '仕事', r: 'しごと' }, { t: 'を' }, { t: '押', r: 'お' }, { t: 'し' }, { t: '付', r: 'つ' }, { t: 'ける' }, { t: '人', r: 'ひと' }, { t: 'は、' }, { t: 'やる' }, { t: '気', r: 'き' }, { t: 'を' }, { t: 'うばう。' },
        ],
        en: 'People who throw their weight around and force work on others sap motivation.',
      },
      {
        seg: [
          { t: '平社員', r: 'ひらしゃいん' }, { t: 'でも、' }, { t: '反論', r: 'はんろん' }, { t: 'す' }, { t: 'べき' }, { t: 'とき' }, { t: 'は' }, { t: '意見', r: 'いけん' }, { t: 'を' }, { t: '言', r: 'い' }, { t: 'う。' },
        ],
        en: 'Even a rank-and-file employee should speak up when they ought to object.',
      },
      {
        seg: [
          { t: '指示', r: 'しじ' }, { t: 'に' }, { t: '従', r: 'したが' }, { t: 'い' }, { t: 'ながら' }, { t: 'も、' }, { t: 'ただ' }, { t: 'うなずく' }, { t: 'だけ' }, { t: 'で' }, { t: 'は' }, { t: 'いけない。' },
        ],
        en: 'While following instructions, you must not merely nod along.',
      },
      {
        seg: [
          { t: '失敗', r: 'しっぱい' }, { t: 'した' }, { t: 'とき' }, { t: 'は、' }, { t: 'すぐ' }, { t: 'に' }, { t: 'わびる' }, { t: 'の' }, { t: 'が' }, { t: '上等', r: 'じょうとう' }, { t: 'な' }, { t: '態度', r: 'たいど' }, { t: 'だ。' },
        ],
        en: 'When you fail, apologizing at once is the proper attitude.',
      },
      {
        seg: [
          { t: 'お' }, { t: '世辞', r: 'せじ' }, { t: 'を' }, { t: '言', r: 'い' }, { t: 'ったり' }, { t: 'ごまをすったり' }, { t: 'する' }, { t: 'の' }, { t: 'は、' }, { t: 'かえって' }, { t: '苦痛', r: 'くつう' }, { t: 'だ。' },
        ],
        en: 'Flattering people or currying favor is, if anything, painful.',
      },
      {
        seg: [
          { t: '久', r: 'ひさ' }, { t: 'しぶり' }, { t: 'に' }, { t: '会', r: 'あ' }, { t: 'った' }, { t: '部長', r: 'ぶちょう' }, { t: '夫人', r: 'ふじん' }, { t: 'に、' }, { t: 'ご' }, { t: '無沙汰', r: 'ぶさた' }, { t: 'を' }, { t: 'わびた。' },
        ],
        en: 'Meeting the manager’s wife after a long time, I apologized for being out of touch.',
      },
      {
        seg: [
          { t: '恐縮', r: 'きょうしゅく' }, { t: 'です' }, { t: 'が、' }, { t: 'と' }, { t: '前置', r: 'まえお' }, { t: 'き' }, { t: 'して' }, { t: 'お' }, { t: '願', r: 'ねが' }, { t: 'い' }, { t: 'を' }, { t: 'した。' },
        ],
        en: 'I prefaced my request with "I am much obliged, but…".',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 6,
    section: 5,
    title: '辞める、変える',
    targetWords: [
      '退職', '転職', '首になる', 'リストラ', '独立', '着々', 'フリー', '不平', '満足', '辛抱', 'ぐっと', '負う', '溶け込む', 'やむを得ず', '立ち上げる', '試みる', '専念', '悔やむ', '見送る', '逃す', '重なる', '引き止める', '特殊', '身の回り', '状況',
    ],
    sentences: [
      {
        seg: [
          { t: '先月', r: 'せんげつ' }, { t: '、' }, { t: 'ついに' }, { t: '退職', r: 'たいしょく' }, { t: 'を' }, { t: '決', r: 'き' }, { t: 'めた。' },
        ],
        en: 'Last month I finally decided to leave my job.',
      },
      {
        seg: [
          { t: '不平', r: 'ふへい' }, { t: 'を' }, { t: '言', r: 'い' }, { t: 'わず' }, { t: 'に' }, { t: '辛抱', r: 'しんぼう' }, { t: 'して' }, { t: 'きた' }, { t: 'が、' }, { t: '状況', r: 'じょうきょう' }, { t: 'は' }, { t: '変', r: 'か' }, { t: 'わらなかった。' },
        ],
        en: 'I endured without complaining, but the situation did not change.',
      },
      {
        seg: [
          { t: 'リストラ' }, { t: 'で' }, { t: '首', r: 'くび' }, { t: 'に' }, { t: 'なる' }, { t: '同僚', r: 'どうりょう' }, { t: 'も' }, { t: 'いて、' }, { t: '見送', r: 'みおく' }, { t: 'る' }, { t: 'の' }, { t: 'は' }, { t: 'つらかった。' },
        ],
        en: 'Some colleagues were laid off, and seeing them go was hard.',
      },
      {
        seg: [
          { t: 'やむを' }, { t: '得', r: 'え' }, { t: 'ず' }, { t: '転職', r: 'てんしょく' }, { t: 'を' }, { t: '試', r: 'こころ' }, { t: 'みる' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: '多', r: 'おお' }, { t: 'かった。' },
        ],
        en: 'Many had no choice but to try changing jobs.',
      },
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'は' }, { t: 'フリー' }, { t: 'に' }, { t: 'なり、' }, { t: '自分', r: 'じぶん' }, { t: 'の' }, { t: '会社', r: 'かいしゃ' }, { t: 'を' }, { t: '立', r: 'た' }, { t: 'ち' }, { t: '上', r: 'あ' }, { t: 'げる' }, { t: 'こと' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'I went freelance and decided to start my own company.',
      },
      {
        seg: [
          { t: '独立', r: 'どくりつ' }, { t: 'の' }, { t: '準備', r: 'じゅんび' }, { t: 'を' }, { t: '着々', r: 'ちゃくちゃく' }, { t: 'と' }, { t: '進', r: 'すす' }, { t: 'め、' }, { t: 'ひとつ' }, { t: 'の' }, { t: '分野', r: 'ぶんや' }, { t: 'に' }, { t: '専念', r: 'せんねん' }, { t: 'する。' },
        ],
        en: 'I steadily prepared to go independent and focus on a single field.',
      },
      {
        seg: [
          { t: '上司', r: 'じょうし' }, { t: 'は' }, { t: '引', r: 'ひ' }, { t: 'き' }, { t: '止', r: 'と' }, { t: 'めて' }, { t: 'くれた' }, { t: 'が、' }, { t: '気持', r: 'きも' }, { t: 'ち' }, { t: 'は' }, { t: 'ぐっと' }, { t: '固', r: 'かた' }, { t: 'まって' }, { t: 'いた。' },
        ],
        en: 'My boss tried to stop me, but my mind was firmly made up.',
      },
      {
        seg: [
          { t: '責任', r: 'せきにん' }, { t: 'を' }, { t: '負', r: 'お' }, { t: 'う' }, { t: '特殊', r: 'とくしゅ' }, { t: 'な' }, { t: '立場', r: 'たちば' }, { t: 'に' }, { t: 'なった' }, { t: 'が、' }, { t: '満足', r: 'まんぞく' }, { t: 'している。' },
        ],
        en: 'I am now in a special position bearing responsibility, but I am satisfied.',
      },
      {
        seg: [
          { t: '好機', r: 'こうき' }, { t: 'を' }, { t: '逃', r: 'のが' }, { t: 'した' }, { t: 'こと' }, { t: 'を' }, { t: '悔', r: 'く' }, { t: 'やむ' }, { t: 'より、' }, { t: 'いま' }, { t: 'を' }, { t: '大切', r: 'たいせつ' }, { t: 'に' }, { t: 'したい。' },
        ],
        en: 'Rather than regret missed chances, I want to value the present.',
      },
      {
        seg: [
          { t: '新', r: 'あたら' }, { t: 'しい' }, { t: '環境', r: 'かんきょう' }, { t: 'に' }, { t: '溶', r: 'と' }, { t: 'け' }, { t: '込', r: 'こ' }, { t: 'み、' }, { t: '身', r: 'み' }, { t: 'の' }, { t: '回', r: 'まわ' }, { t: 'り' }, { t: 'を' }, { t: '整', r: 'ととの' }, { t: 'えた。' },
        ],
        en: 'I settled into the new environment and put my surroundings in order.',
      },
      {
        seg: [
          { t: '予定', r: 'よてい' }, { t: 'が' }, { t: '重', r: 'かさ' }, { t: 'なる' }, { t: '日', r: 'ひ' }, { t: 'も' }, { t: 'ある' }, { t: 'が、' }, { t: 'いまは' }, { t: '楽', r: 'たの' }, { t: 'しい。' },
        ],
        en: 'Some days my schedule doubles up, but right now it is enjoyable.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 7,
    section: 1,
    title: '試合の日',
    targetWords: [
      '競技', '競う', '戦う', '勝負', '勝敗', '勝利', '破る', 'やっつける', '敗れる', '攻める', '逆転', '開会', '中断', '延長', '勇ましい', '勢い', 'さすが', '敵', 'グラウンド', '順位', 'トレーナー', '指導', '取り入れる', 'ハードな', '通用', '技', '今に',
    ],
    sentences: [
      {
        seg: [
          { t: '地区', r: 'ちく' }, { t: 'の' }, { t: '競技', r: 'きょうぎ' }, { t: '大会', r: 'たいかい' }, { t: 'が、' }, { t: 'グラウンド' }, { t: 'で' }, { t: '開会', r: 'かいかい' }, { t: 'した。' },
        ],
        en: 'The district competition opened on the sports ground.',
      },
      {
        seg: [
          { t: '二', r: 'ふた' }, { t: 'つ' }, { t: 'の' }, { t: 'チーム' }, { t: 'が' }, { t: '順位', r: 'じゅんい' }, { t: 'を' }, { t: '競', r: 'きそ' }, { t: 'い、' }, { t: '激', r: 'はげ' }, { t: 'しく' }, { t: '戦', r: 'たたか' }, { t: 'った。' },
        ],
        en: 'Two teams competed for rank and fought fiercely.',
      },
      {
        seg: [
          { t: '前半', r: 'ぜんはん' }, { t: 'から' }, { t: '勢', r: 'いきお' }, { t: 'い' }, { t: 'よく' }, { t: '攻', r: 'せ' }, { t: 'め、' }, { t: '勇', r: 'いさ' }, { t: 'ましい' }, { t: '姿', r: 'すがた' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'せた。' },
        ],
        en: 'They attacked with momentum from the first half and looked valiant.',
      },
      {
        seg: [
          { t: '雨', r: 'あめ' }, { t: 'で' }, { t: '一時', r: 'いちじ' }, { t: '中断', r: 'ちゅうだん' }, { t: 'した' }, { t: 'が、' }, { t: '観客', r: 'かんきゃく' }, { t: 'は' }, { t: '待', r: 'ま' }, { t: 'ち' }, { t: '続', r: 'つづ' }, { t: 'けた。' },
        ],
        en: 'It was briefly suspended by rain, but the spectators kept waiting.',
      },
      {
        seg: [
          { t: '後半', r: 'こうはん' }, { t: '、' }, { t: '相手', r: 'あいて' }, { t: 'を' }, { t: 'やっつける' }, { t: '技', r: 'わざ' }, { t: 'が' }, { t: '決', r: 'き' }, { t: 'まり、' }, { t: '逆転', r: 'ぎゃくてん' }, { t: 'した。' },
        ],
        en: 'In the second half a decisive move beat the opponent and turned the game around.',
      },
      {
        seg: [
          { t: '延長', r: 'えんちょう' }, { t: 'の' }, { t: 'すえ' }, { t: 'に' }, { t: '勝負', r: 'しょうぶ' }, { t: 'が' }, { t: 'つき、' }, { t: '勝敗', r: 'しょうはい' }, { t: 'が' }, { t: '決', r: 'き' }, { t: 'まった。' },
        ],
        en: 'After extra time the contest was settled and the result decided.',
      },
      {
        seg: [
          { t: '敵', r: 'てき' }, { t: 'は' }, { t: '強', r: 'つよ' }, { t: 'かった' }, { t: 'が、' }, { t: 'ついに' }, { t: '記録', r: 'きろく' }, { t: 'を' }, { t: '破', r: 'やぶ' }, { t: 'って' }, { t: '勝利', r: 'しょうり' }, { t: 'した。' },
        ],
        en: 'The opponents were strong, but at last we broke the record and won.',
      },
      {
        seg: [
          { t: '敗', r: 'やぶ' }, { t: 'れた' }, { t: 'チーム' }, { t: 'も、' }, { t: 'さすが' }, { t: 'に' }, { t: '立派', r: 'りっぱ' }, { t: 'だった。' },
        ],
        en: 'The defeated team was, as expected, admirable too.',
      },
      {
        seg: [
          { t: 'トレーナー' }, { t: 'が' }, { t: '新', r: 'あたら' }, { t: 'しい' }, { t: '練習', r: 'れんしゅう' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'り' }, { t: '入', r: 'い' }, { t: 'れ、' }, { t: 'ハード' }, { t: 'に' }, { t: '指導', r: 'しどう' }, { t: 'した。' },
        ],
        en: 'The trainer introduced new drills and coached hard.',
      },
      {
        seg: [
          { t: 'この' }, { t: '方法', r: 'ほうほう' }, { t: 'が' }, { t: '全国', r: 'ぜんこく' }, { t: 'で' }, { t: 'も' }, { t: '通用', r: 'つうよう' }, { t: 'する' }, { t: 'か、' }, { t: '今', r: 'いま' }, { t: 'に' }, { t: '分', r: 'わ' }, { t: 'かる' }, { t: 'だろう。' },
        ],
        en: 'Whether this method works nationally will become clear before long.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 7,
    section: 2,
    title: '着るものの話',
    targetWords: [
      '格好', '持ち物', '身につける', 'センス', 'ダサい', 'いまひとつ', 'スタイル', '足元', 'ウエスト', '見た目', '人目', '色彩', '華やかな', '鮮やかな', '統一', 'フリーサイズ', 'ぶかぶか', '生地', '綿', 'オーダーメイド', 'サングラス', '取れる', '浴衣',
    ],
    sentences: [
      {
        seg: [
          { t: '出', r: 'で' }, { t: 'かける' }, { t: '前', r: 'まえ' }, { t: 'に、' }, { t: '鏡', r: 'かがみ' }, { t: 'で' }, { t: '格好', r: 'かっこう' }, { t: 'と' }, { t: '持', r: 'も' }, { t: 'ち' }, { t: '物', r: 'もの' }, { t: 'を' }, { t: '確', r: 'たし' }, { t: 'かめる。' },
        ],
        en: 'Before going out, I check my outfit and belongings in the mirror.',
      },
      {
        seg: [
          { t: '見', r: 'み' }, { t: 'た' }, { t: '目', r: 'め' }, { t: 'より、' }, { t: '身', r: 'み' }, { t: 'に' }, { t: 'つける' }, { t: 'もの' }, { t: 'の' }, { t: 'センス' }, { t: 'が' }, { t: '大事', r: 'だいじ' }, { t: 'だ' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'う。' },
        ],
        en: 'More than looks, I think the taste of what you wear matters.',
      },
      {
        seg: [
          { t: '派手', r: 'はで' }, { t: 'すぎる' }, { t: 'と' }, { t: 'ダサい' }, { t: 'し、' }, { t: '地味', r: 'じみ' }, { t: 'すぎる' }, { t: 'と' }, { t: 'いまひとつ' }, { t: 'だ。' },
        ],
        en: 'Too flashy is naff, too plain is not quite right.',
      },
      {
        seg: [
          { t: '色彩', r: 'しきさい' }, { t: 'を' }, { t: '統一', r: 'とういつ' }, { t: 'する' }, { t: 'と、' }, { t: 'スタイル' }, { t: 'が' }, { t: 'きれい' }, { t: 'に' }, { t: '見', r: 'み' }, { t: 'える。' },
        ],
        en: 'Unifying the colors makes the silhouette look good.',
      },
      {
        seg: [
          { t: '鮮', r: 'あざ' }, { t: 'やかな' }, { t: '赤', r: 'あか' }, { t: 'は' }, { t: '華', r: 'はな' }, { t: 'やかで、' }, { t: '人目', r: 'ひとめ' }, { t: 'を' }, { t: '引', r: 'ひ' }, { t: 'く。' },
        ],
        en: 'Vivid red is gorgeous and catches the eye.',
      },
      {
        seg: [
          { t: 'ウエスト' }, { t: 'が' }, { t: 'ぶかぶか' }, { t: 'だった' }, { t: 'ので、' }, { t: 'フリーサイズ' }, { t: 'は' }, { t: 'やめた。' },
        ],
        en: 'The waist was baggy, so I gave up on the one-size item.',
      },
      {
        seg: [
          { t: '綿', r: 'めん' }, { t: 'の' }, { t: '生地', r: 'きじ' }, { t: 'は' }, { t: '肌', r: 'はだ' }, { t: 'に' }, { t: 'やさしく、' }, { t: 'なつ' }, { t: 'に' }, { t: 'ちょうど' }, { t: 'いい。' },
        ],
        en: 'Cotton fabric is kind to the skin and just right for summer.',
      },
      {
        seg: [
          { t: '足元', r: 'あしもと' }, { t: 'を' }, { t: '決', r: 'き' }, { t: 'めれば、' }, { t: 'ぜんたい' }, { t: 'が' }, { t: 'しまる。' },
        ],
        en: 'Get the footwear right and the whole look comes together.',
      },
      {
        seg: [
          { t: 'ボタン' }, { t: 'が' }, { t: '取', r: 'と' }, { t: 'れて' }, { t: 'いた' }, { t: 'ので、' }, { t: 'その' }, { t: '日', r: 'ひ' }, { t: 'は' }, { t: '別', r: 'べつ' }, { t: 'の' }, { t: '服', r: 'ふく' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'A button had come off, so that day I wore something else.',
      },
      {
        seg: [
          { t: '夏祭', r: 'なつまつ' }, { t: 'り' }, { t: 'に' }, { t: 'は' }, { t: '浴衣', r: 'ゆかた' }, { t: 'を' }, { t: '着', r: 'き' }, { t: 'て、' }, { t: 'サングラス' }, { t: 'は' }, { t: 'はずした。' },
        ],
        en: 'For the summer festival I wore a yukata and took off my sunglasses.',
      },
      {
        seg: [
          { t: 'いつか' }, { t: 'オーダーメイド' }, { t: 'の' }, { t: '一着', r: 'いっちゃく' }, { t: 'を' }, { t: '作', r: 'つく' }, { t: 'って' }, { t: 'みたい。' },
        ],
        en: 'Someday I want to have a made-to-order piece made.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 7,
    section: 3,
    title: '舞台を見る',
    targetWords: [
      'イベント', 'アイドル', 'ステージ', '興奮', '続々', '演劇', '劇場', '役者', '主役', 'セリフ', 'オーケストラ', 'リズム', '鑑賞', '芸術家', '監督', 'あらすじ', 'ありふれた', 'ばかばかしい', '退屈', '人物', '場面', '展開', 'テンポ', '評判', '評価', '感想', '賞',
    ],
    sentences: [
      {
        seg: [
          { t: '週末', r: 'しゅうまつ' }, { t: '、' }, { t: '友', r: 'とも' }, { t: 'だち' }, { t: 'と' }, { t: 'イベント' }, { t: 'に' }, { t: '出', r: 'で' }, { t: 'かけた。' },
        ],
        en: 'At the weekend I went out to an event with a friend.',
      },
      {
        seg: [
          { t: 'アイドル' }, { t: 'が' }, { t: 'ステージ' }, { t: 'に' }, { t: '続々', r: 'ぞくぞく' }, { t: 'と' }, { t: '現', r: 'あらわ' }, { t: 'れ、' }, { t: 'みんな' }, { t: '興奮', r: 'こうふん' }, { t: 'した。' },
        ],
        en: 'Idols appeared on stage one after another and everyone got excited.',
      },
      {
        seg: [
          { t: '翌週', r: 'よくしゅう' }, { t: 'は' }, { t: '劇場', r: 'げきじょう' }, { t: 'で' }, { t: '演劇', r: 'えんげき' }, { t: 'を' }, { t: '鑑賞', r: 'かんしょう' }, { t: 'した。' },
        ],
        en: 'The next week I saw a play at the theater.',
      },
      {
        seg: [
          { t: '主役', r: 'しゅやく' }, { t: 'の' }, { t: '役者', r: 'やくしゃ' }, { t: 'は、' }, { t: 'セリフ' }, { t: 'も' }, { t: '演技', r: 'えんぎ' }, { t: 'も' }, { t: '見事', r: 'みごと' }, { t: 'だった。' },
        ],
        en: 'The lead actor was superb in both lines and acting.',
      },
      {
        seg: [
          { t: 'オーケストラ' }, { t: 'の' }, { t: 'リズム' }, { t: 'が' }, { t: '場面', r: 'ばめん' }, { t: 'を' }, { t: '支', r: 'ささ' }, { t: 'え、' }, { t: 'テンポ' }, { t: 'も' }, { t: 'よかった。' },
        ],
        en: 'The orchestra’s rhythm supported the scenes, and the tempo was good.',
      },
      {
        seg: [
          { t: '登場', r: 'とうじょう' }, { t: '人物', r: 'じんぶつ' }, { t: 'は' }, { t: '多', r: 'おお' }, { t: 'い' }, { t: 'が、' }, { t: 'あらすじ' }, { t: 'は' }, { t: 'わかりやすい。' },
        ],
        en: 'There are many characters, but the plot is easy to follow.',
      },
      {
        seg: [
          { t: 'ありふれた' }, { t: '展開', r: 'てんかい' }, { t: 'なら' }, { t: '退屈', r: 'たいくつ' }, { t: 'だ' }, { t: 'が、' }, { t: 'この' }, { t: '作品', r: 'さくひん' }, { t: 'は' }, { t: '違', r: 'ちが' }, { t: 'った。' },
        ],
        en: 'A commonplace development would be dull, but this work was different.',
      },
      {
        seg: [
          { t: '監督', r: 'かんとく' }, { t: 'は' }, { t: '若', r: 'わか' }, { t: 'い' }, { t: '芸術家', r: 'げいじゅつか' }, { t: 'で、' }, { t: '賞', r: 'しょう' }, { t: 'も' }, { t: '取', r: 'と' }, { t: 'っている。' },
        ],
        en: 'The director is a young artist who has won awards.',
      },
      {
        seg: [
          { t: 'ばかばかしい' }, { t: 'と' }, { t: '言', r: 'い' }, { t: 'う' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: 'いた' }, { t: 'が、' }, { t: '評判', r: 'ひょうばん' }, { t: 'は' }, { t: 'よかった。' },
        ],
        en: 'Some called it silly, but the reception was good.',
      },
      {
        seg: [
          { t: '帰', r: 'かえ' }, { t: 'り' }, { t: '道', r: 'みち' }, { t: '、' }, { t: 'おたがい' }, { t: 'の' }, { t: '感想', r: 'かんそう' }, { t: 'を' }, { t: '話', r: 'はな' }, { t: 'し、' }, { t: '高', r: 'たか' }, { t: 'く' }, { t: '評価', r: 'ひょうか' }, { t: 'した。' },
        ],
        en: 'On the way home we shared impressions and rated it highly.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 7,
    section: 4,
    title: '本の世界',
    targetWords: [
      '書物', '絵本', '作品', '著者', '書き手', 'ペンネーム', '主人公', 'ロマン', '伝記', '人生', '神話', '中世', '文明', '忠実な', '奇妙な', '背景', '実際', '文句', '果たして', '発想', '由来', '空想', '連想', '解釈', '発行', '生み出す', '読書家',
    ],
    sentences: [
      {
        seg: [
          { t: '子', r: 'こ' }, { t: 'ども' }, { t: 'の' }, { t: 'ころ' }, { t: 'は' }, { t: '絵本', r: 'えほん' }, { t: '、' }, { t: 'いま' }, { t: 'は' }, { t: '厚', r: 'あつ' }, { t: 'い' }, { t: '書物', r: 'しょもつ' }, { t: 'を' }, { t: '読', r: 'よ' }, { t: 'む。' },
        ],
        en: 'As a child it was picture books; now I read thick volumes.',
      },
      {
        seg: [
          { t: 'ある' }, { t: '著者', r: 'ちょしゃ' }, { t: 'の' }, { t: '作品', r: 'さくひん' }, { t: 'に' }, { t: '出会', r: 'であ' }, { t: 'い、' }, { t: '読書家', r: 'どくしょか' }, { t: 'に' }, { t: 'なった。' },
        ],
        en: 'I came across one author’s work and became a keen reader.',
      },
      {
        seg: [
          { t: 'その' }, { t: '書', r: 'か' }, { t: 'き' }, { t: '手', r: 'て' }, { t: 'は' }, { t: 'ペンネーム' }, { t: 'を' }, { t: '使', r: 'つか' }, { t: 'い、' }, { t: '人生', r: 'じんせい' }, { t: 'を' }, { t: '描', r: 'えが' }, { t: 'いて' }, { t: 'いる。' },
        ],
        en: 'That writer uses a pen name and depicts human life.',
      },
      {
        seg: [
          { t: '主人公', r: 'しゅじんこう' }, { t: 'の' }, { t: '伝記', r: 'でんき' }, { t: 'の' }, { t: 'ような' }, { t: '物語', r: 'ものがたり' }, { t: 'に、' }, { t: 'ロマン' }, { t: 'を' }, { t: '感', r: 'かん' }, { t: 'じた。' },
        ],
        en: 'I felt a romance in the story, which read like the hero’s biography.',
      },
      {
        seg: [
          { t: '中世', r: 'ちゅうせい' }, { t: 'の' }, { t: '文明', r: 'ぶんめい' }, { t: 'や' }, { t: '神話', r: 'しんわ' }, { t: 'が' }, { t: '背景', r: 'はいけい' }, { t: 'に' }, { t: 'ある。' },
        ],
        en: 'Medieval civilization and myth lie in the background.',
      },
      {
        seg: [
          { t: '史実', r: 'しじつ' }, { t: 'に' }, { t: '忠実', r: 'ちゅうじつ' }, { t: 'で' }, { t: 'あり' }, { t: 'ながら、' }, { t: '奇妙', r: 'きみょう' }, { t: 'な' }, { t: '発想', r: 'はっそう' }, { t: 'も' }, { t: '生', r: 'う' }, { t: 'み' }, { t: '出', r: 'だ' }, { t: 'している。' },
        ],
        en: 'While faithful to historical fact, it also produces strange ideas.',
      },
      {
        seg: [
          { t: '言葉', r: 'ことば' }, { t: 'の' }, { t: '由来', r: 'ゆらい' }, { t: 'を' }, { t: '調', r: 'しら' }, { t: 'べる' }, { t: 'と、' }, { t: 'いろいろ' }, { t: '連想', r: 'れんそう' }, { t: 'が' }, { t: '広', r: 'ひろ' }, { t: 'がる。' },
        ],
        en: 'Looking up the origin of a word sets off all sorts of associations.',
      },
      {
        seg: [
          { t: '実際', r: 'じっさい' }, { t: 'に' }, { t: 'は' }, { t: 'ない' }, { t: '世界', r: 'せかい' }, { t: 'を' }, { t: '空想', r: 'くうそう' }, { t: 'する' }, { t: 'の' }, { t: 'が' }, { t: '楽', r: 'たの' }, { t: 'しい。' },
        ],
        en: 'Imagining a world that does not really exist is enjoyable.',
      },
      {
        seg: [
          { t: '果', r: 'は' }, { t: 'たして' }, { t: 'この' }, { t: '解釈', r: 'かいしゃく' }, { t: 'で' }, { t: 'いい' }, { t: 'の' }, { t: 'か、' }, { t: '文句', r: 'もんく' }, { t: 'を' }, { t: '言', r: 'い' }, { t: 'う' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: 'いる' }, { t: 'だろう。' },
        ],
        en: 'Whether this interpretation is right, some will surely complain.',
      },
      {
        seg: [
          { t: 'この' }, { t: '本', r: 'ほん' }, { t: 'は' }, { t: '去年', r: 'きょねん' }, { t: '発行', r: 'はっこう' }, { t: 'され、' }, { t: 'いま' }, { t: 'も' }, { t: '売', r: 'う' }, { t: 'れて' }, { t: 'いる。' },
        ],
        en: 'This book was published last year and still sells well.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 7,
    section: 5,
    title: '好きなこと',
    targetWords: [
      '習い事', 'こだわる', 'こだわり', '凝る', '熱中', 'コレクション', '多彩な', '素人', '初心者', '本格的な', '名人', '共通', 'ブーム', 'アウトドア', '編み物', '手品', '占い', '手話', '伝統', '作法', '撮影', 'レンズ', '宝くじ', '当たる', 'コツ', '瞬間', '組み合わせる', '身近',
    ],
    sentences: [
      {
        seg: [
          { t: '大人', r: 'おとな' }, { t: 'に' }, { t: 'なって' }, { t: 'から' }, { t: '習', r: 'なら' }, { t: 'い' }, { t: '事', r: 'ごと' }, { t: 'を' }, { t: '始', r: 'はじ' }, { t: 'める' }, { t: '人', r: 'ひと' }, { t: 'が' }, { t: '増', r: 'ふ' }, { t: 'えた。' },
        ],
        en: 'More people now take up lessons as adults.',
      },
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'の' }, { t: '趣味', r: 'しゅみ' }, { t: 'は' }, { t: '多彩', r: 'たさい' }, { t: 'で、' }, { t: '身近', r: 'みぢか' }, { t: 'な' }, { t: 'もの' }, { t: 'ばかり' }, { t: 'だ。' },
        ],
        en: 'My hobbies are varied, and all of them are close at hand.',
      },
      {
        seg: [
          { t: 'カメラ' }, { t: 'に' }, { t: '凝', r: 'こ' }, { t: 'って、' }, { t: 'レンズ' }, { t: 'に' }, { t: 'まで' }, { t: 'こだわる' }, { t: 'ように' }, { t: 'なった。' },
        ],
        en: 'I got absorbed in cameras and even became particular about lenses.',
      },
      {
        seg: [
          { t: '撮影', r: 'さつえい' }, { t: 'の' }, { t: 'コツ' }, { t: 'は、' }, { t: '光', r: 'ひかり' }, { t: 'と' }, { t: '瞬間', r: 'しゅんかん' }, { t: 'を' }, { t: '組', r: 'く' }, { t: 'み' }, { t: '合', r: 'あ' }, { t: 'わせる' }, { t: 'こと' }, { t: 'だ。' },
        ],
        en: 'The knack of photography is combining light and the right moment.',
      },
      {
        seg: [
          { t: '素人', r: 'しろうと' }, { t: 'から' }, { t: '始', r: 'はじ' }, { t: 'め、' }, { t: 'いま' }, { t: 'は' }, { t: '本格的', r: 'ほんかくてき' }, { t: 'に' }, { t: '熱中', r: 'ねっちゅう' }, { t: 'して' }, { t: 'いる。' },
        ],
        en: 'I started as an amateur and am now seriously absorbed in it.',
      },
      {
        seg: [
          { t: '初心者', r: 'しょしんしゃ' }, { t: 'に' }, { t: 'は' }, { t: '編', r: 'あ' }, { t: 'み' }, { t: '物', r: 'もの' }, { t: 'や' }, { t: '手品', r: 'てじな' }, { t: 'も' }, { t: 'おすすめ' }, { t: 'だ。' },
        ],
        en: 'For beginners, knitting or magic tricks are also good.',
      },
      {
        seg: [
          { t: '友人', r: 'ゆうじん' }, { t: 'は' }, { t: '占', r: 'うらな' }, { t: 'い' }, { t: 'と' }, { t: '手話', r: 'しゅわ' }, { t: 'を' }, { t: '習', r: 'なら' }, { t: 'い、' }, { t: 'コレクション' }, { t: 'も' }, { t: '続', r: 'つづ' }, { t: 'けている。' },
        ],
        en: 'A friend studies fortune-telling and sign language and keeps up a collection.',
      },
      {
        seg: [
          { t: '茶道', r: 'さどう' }, { t: 'の' }, { t: '作法', r: 'さほう' }, { t: 'に' }, { t: 'は、' }, { t: '長', r: 'なが' }, { t: 'い' }, { t: '伝統', r: 'でんとう' }, { t: 'が' }, { t: 'ある。' },
        ],
        en: 'The etiquette of the tea ceremony carries a long tradition.',
      },
      {
        seg: [
          { t: 'アウトドア' }, { t: 'が' }, { t: 'ブーム' }, { t: 'に' }, { t: 'なり、' }, { t: '共通', r: 'きょうつう' }, { t: 'の' }, { t: '話題', r: 'わだい' }, { t: 'が' }, { t: '増', r: 'ふ' }, { t: 'えた。' },
        ],
        en: 'The outdoors became a boom, and shared topics increased.',
      },
      {
        seg: [
          { t: '宝', r: 'たから' }, { t: 'くじ' }, { t: 'が' }, { t: '当', r: 'あ' }, { t: 'たったら、' }, { t: 'と' }, { t: '話', r: 'はな' }, { t: 'す' }, { t: '名人', r: 'めいじん' }, { t: 'も' }, { t: 'いて、' }, { t: 'おかしかった。' },
        ],
        en: 'Even a master was talking about what if the lottery came in, which was funny.',
      },
      {
        seg: [
          { t: 'そんな' }, { t: 'こだわり' }, { t: 'が、' }, { t: '毎日', r: 'まいにち' }, { t: 'を' }, { t: '楽', r: 'たの' }, { t: 'しく' }, { t: 'して' }, { t: 'くれる。' },
        ],
        en: 'Such little obsessions make everyday life enjoyable.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 8,
    section: 1,
    title: '四季のうつり変わり',
    targetWords: [
      '気候', 'シーズン', '四季', 'ふくらむ', '梅雨', '初夏', '温帯', '属する', '確率', '夕立', 'にわかな', '覆う', 'びしょびしょな', 'あいにく', '吹雪', '凍える', '冷え込む', '陽気', '日和', '日差し', 'いっそう', '一段と', '急速な', 'ぐんぐん', 'いくぶん', 'めっきり', 'あまりに', '差', '本来',
    ],
    sentences: [
      {
        seg: [
          { t: '日本', r: 'にほん' }, { t: 'は' }, { t: '温帯', r: 'おんたい' }, { t: 'に' }, { t: '属', r: 'ぞく' }, { t: 'し、' }, { t: '四季', r: 'しき' }, { t: 'の' }, { t: '気候', r: 'きこう' }, { t: 'が' }, { t: 'はっきり' }, { t: 'している。' },
        ],
        en: 'Japan lies in the temperate zone and has clearly marked seasons.',
      },
      {
        seg: [
          { t: '春', r: 'はる' }, { t: '、' }, { t: 'つぼみ' }, { t: 'が' }, { t: 'ふくらむ' }, { t: 'と、' }, { t: 'いよいよ' }, { t: 'その' }, { t: 'シーズン' }, { t: 'だ。' },
        ],
        en: 'In spring, when the buds swell, the season has truly come.',
      },
      {
        seg: [
          { t: '初夏', r: 'しょか' }, { t: 'の' }, { t: 'あと' }, { t: 'に' }, { t: '梅雨', r: 'つゆ' }, { t: 'が' }, { t: '来', r: 'き' }, { t: 'て、' }, { t: '雲', r: 'くも' }, { t: 'が' }, { t: '空', r: 'そら' }, { t: 'を' }, { t: '覆', r: 'おお' }, { t: 'う。' },
        ],
        en: 'After early summer the rainy season arrives and clouds cover the sky.',
      },
      {
        seg: [
          { t: '降', r: 'ふ' }, { t: 'る' }, { t: '確率', r: 'かくりつ' }, { t: 'が' }, { t: '高', r: 'たか' }, { t: 'い' }, { t: '日', r: 'ひ' }, { t: 'は、' }, { t: 'あいにく' }, { t: 'の' }, { t: '天気', r: 'てんき' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'On days with a high chance of rain, the weather is unfortunate.',
      },
      {
        seg: [
          { t: 'にわかな' }, { t: '夕立', r: 'ゆうだち' }, { t: 'に' }, { t: '降', r: 'ふ' }, { t: 'られ、' }, { t: 'びしょびしょ' }, { t: 'に' }, { t: 'なった。' },
        ],
        en: 'I was caught in a sudden evening shower and got soaked.',
      },
      {
        seg: [
          { t: '冬', r: 'ふゆ' }, { t: 'は' }, { t: '吹雪', r: 'ふぶき' }, { t: 'の' }, { t: '日', r: 'ひ' }, { t: 'も' }, { t: 'あり、' }, { t: '手', r: 'て' }, { t: 'が' }, { t: '凍', r: 'こご' }, { t: 'える' }, { t: 'ほど' }, { t: '冷', r: 'ひ' }, { t: 'え' }, { t: '込', r: 'こ' }, { t: 'む。' },
        ],
        en: 'In winter there are blizzard days, and it gets cold enough to freeze your hands.',
      },
      {
        seg: [
          { t: '本来', r: 'ほんらい' }, { t: 'なら' }, { t: '暖', r: 'あたた' }, { t: 'かい' }, { t: '季節', r: 'きせつ' }, { t: 'な' }, { t: 'のに、' }, { t: 'あまりに' }, { t: 'も' }, { t: '寒', r: 'さむ' }, { t: 'い。' },
        ],
        en: 'It ought to be a warm season, yet it is far too cold.',
      },
      {
        seg: [
          { t: '晴', r: 'は' }, { t: 'れた' }, { t: '日和', r: 'ひより' }, { t: 'に' }, { t: 'は' }, { t: '日差', r: 'ひざ' }, { t: 'し' }, { t: 'が' }, { t: '強', r: 'つよ' }, { t: 'く、' }, { t: '陽気', r: 'ようき' }, { t: 'な' }, { t: '気分', r: 'きぶん' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'On a fine day the sunlight is strong and one feels cheerful.',
      },
      {
        seg: [
          { t: '気温', r: 'きおん' }, { t: 'は' }, { t: '急速', r: 'きゅうそく' }, { t: 'に、' }, { t: 'ぐんぐん' }, { t: 'と' }, { t: '上', r: 'あ' }, { t: 'がって' }, { t: 'いく。' },
        ],
        en: 'The temperature rises rapidly, climbing steadily.',
      },
      {
        seg: [
          { t: '朝', r: 'あさ' }, { t: 'と' }, { t: '昼', r: 'ひる' }, { t: 'の' }, { t: '差', r: 'さ' }, { t: 'が' }, { t: '一段', r: 'いちだん' }, { t: 'と' }, { t: '大', r: 'おお' }, { t: 'きく、' }, { t: 'いくぶん' }, { t: '疲', r: 'つか' }, { t: 'れる。' },
        ],
        en: 'The gap between morning and midday is greater still, which is somewhat tiring.',
      },
      {
        seg: [
          { t: '秋', r: 'あき' }, { t: 'に' }, { t: 'なる' }, { t: 'と、' }, { t: 'めっきり' }, { t: '日', r: 'ひ' }, { t: 'が' }, { t: '短', r: 'みじか' }, { t: 'く' }, { t: 'なり、' }, { t: 'いっそう' }, { t: '風', r: 'かぜ' }, { t: 'が' }, { t: '冷', r: 'つめ' }, { t: 'たい。' },
        ],
        en: 'Come autumn the days grow noticeably shorter and the wind is colder still.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 8,
    section: 2,
    title: '嵐が来る',
    targetWords: [
      '接近', '備える', '砂', 'あふれる', '降水量', '観測', '大気', '荒れる', '傾く', 'またぐ', '応答', '静まる', 'もたらす', '及ぼす', '及ぶ', '去る', 'ひとまず', '直後', '行動', '万一', '傾向', '達する', '災害',
    ],
    sentences: [
      {
        seg: [
          { t: '台風', r: 'たいふう' }, { t: 'が' }, { t: '接近', r: 'せっきん' }, { t: 'する' }, { t: 'と' }, { t: '聞', r: 'き' }, { t: 'き、' }, { t: '万一', r: 'まんいち' }, { t: 'に' }, { t: '備', r: 'そな' }, { t: 'えた。' },
        ],
        en: 'Hearing that a typhoon was approaching, I prepared for the worst.',
      },
      {
        seg: [
          { t: '大気', r: 'たいき' }, { t: 'が' }, { t: '荒', r: 'あ' }, { t: 'れ、' }, { t: '降水量', r: 'こうすいりょう' }, { t: 'は' }, { t: '記録', r: 'きろく' }, { t: 'に' }, { t: '達', r: 'たっ' }, { t: 'した' }, { t: 'と' }, { t: '観測', r: 'かんそく' }, { t: 'された。' },
        ],
        en: 'The atmosphere turned stormy, and rainfall was observed to reach record levels.',
      },
      {
        seg: [
          { t: '川', r: 'かわ' }, { t: 'が' }, { t: 'あふれ、' }, { t: '砂', r: 'すな' }, { t: 'や' }, { t: '土', r: 'つち' }, { t: 'が' }, { t: '道', r: 'みち' }, { t: 'を' }, { t: 'ふさいだ。' },
        ],
        en: 'The river overflowed, and sand and earth blocked the road.',
      },
      {
        seg: [
          { t: '看板', r: 'かんばん' }, { t: 'が' }, { t: '傾', r: 'かたむ' }, { t: 'き、' }, { t: '線路', r: 'せんろ' }, { t: 'を' }, { t: 'またぐ' }, { t: '橋', r: 'はし' }, { t: 'も' }, { t: '危', r: 'あぶ' }, { t: 'なかった。' },
        ],
        en: 'A signboard tilted, and even the bridge spanning the tracks was unsafe.',
      },
      {
        seg: [
          { t: '無線', r: 'むせん' }, { t: 'の' }, { t: '応答', r: 'おうとう' }, { t: 'が' }, { t: 'なく、' }, { t: '被害', r: 'ひがい' }, { t: 'が' }, { t: '広', r: 'ひろ' }, { t: 'い' }, { t: '範囲', r: 'はんい' }, { t: 'に' }, { t: '及', r: 'およ' }, { t: 'んだ。' },
        ],
        en: 'There was no radio response, and the damage extended over a wide area.',
      },
      {
        seg: [
          { t: 'この' }, { t: '災害', r: 'さいがい' }, { t: 'が' }, { t: '生活', r: 'せいかつ' }, { t: 'に' }, { t: '影響', r: 'えいきょう' }, { t: 'を' }, { t: '及', r: 'およ' }, { t: 'ぼす' }, { t: 'こと' }, { t: 'は' }, { t: '明', r: 'あき' }, { t: 'らか' }, { t: 'だ。' },
        ],
        en: 'It is clear this disaster will affect daily life.',
      },
      {
        seg: [
          { t: '風', r: 'かぜ' }, { t: 'が' }, { t: '静', r: 'しず' }, { t: 'まり、' }, { t: 'ひとまず' }, { t: '安心', r: 'あんしん' }, { t: 'した。' },
        ],
        en: 'The wind died down, and for the moment I felt relieved.',
      },
      {
        seg: [
          { t: '台風', r: 'たいふう' }, { t: 'が' }, { t: '去', r: 'さ' }, { t: 'った' }, { t: '直後', r: 'ちょくご' }, { t: '、' }, { t: 'みんな' }, { t: 'が' }, { t: '行動', r: 'こうどう' }, { t: 'を' }, { t: '開始', r: 'かいし' }, { t: 'した。' },
        ],
        en: 'Right after the typhoon passed, everyone began to act.',
      },
      {
        seg: [
          { t: '近年', r: 'きんねん' }, { t: '、' }, { t: 'こうした' }, { t: '傾向', r: 'けいこう' }, { t: 'が' }, { t: '強', r: 'つよ' }, { t: 'まって' }, { t: 'いる' }, { t: 'という。' },
        ],
        en: 'In recent years this tendency is said to be strengthening.',
      },
      {
        seg: [
          { t: '自然', r: 'しぜん' }, { t: 'が' }, { t: 'もたらす' }, { t: '力', r: 'ちから' }, { t: 'を、' }, { t: 'あらためて' }, { t: '思', r: 'おも' }, { t: 'い' }, { t: '知', r: 'し' }, { t: 'った。' },
        ],
        en: 'I was reminded once again of the power nature brings.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 8,
    section: 3,
    title: '自然のなかで',
    targetWords: [
      '大地', '広大な', '砂漠', '谷', '滝', '岸', '海辺', '透明な', '底', '生き物', '生物', '植物', '芽', '人間', '天然', '日光', '昇る', '日陰', '夕焼け', '飛び回る', '鳴く', 'しんと',
    ],
    sentences: [
      {
        seg: [
          { t: '広大', r: 'こうだい' }, { t: 'な' }, { t: '大地', r: 'だいち' }, { t: 'を' }, { t: '旅', r: 'たび' }, { t: 'し、' }, { t: '砂漠', r: 'さばく' }, { t: 'や' }, { t: '谷', r: 'たに' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'た。' },
        ],
        en: 'I traveled the vast land and saw deserts and valleys.',
      },
      {
        seg: [
          { t: '滝', r: 'たき' }, { t: 'の' }, { t: '水', r: 'みず' }, { t: 'は' }, { t: '透明', r: 'とうめい' }, { t: 'で、' }, { t: '底', r: 'そこ' }, { t: 'まで' }, { t: '見', r: 'み' }, { t: 'えた。' },
        ],
        en: 'The waterfall’s water was clear, and I could see to the bottom.',
      },
      {
        seg: [
          { t: '岸', r: 'きし' }, { t: 'や' }, { t: '海辺', r: 'うみべ' }, { t: 'に' }, { t: 'は、' }, { t: '小', r: 'ちい' }, { t: 'さな' }, { t: '生', r: 'い' }, { t: 'き' }, { t: '物', r: 'もの' }, { t: 'が' }, { t: '多', r: 'おお' }, { t: 'い。' },
        ],
        en: 'On the shore and by the sea there are many small creatures.',
      },
      {
        seg: [
          { t: '天然', r: 'てんねん' }, { t: 'の' }, { t: '森', r: 'もり' }, { t: 'で' }, { t: 'は、' }, { t: '植物', r: 'しょくぶつ' }, { t: 'の' }, { t: '芽', r: 'め' }, { t: 'が' }, { t: '日光', r: 'にっこう' }, { t: 'を' }, { t: '求', r: 'もと' }, { t: 'めて' }, { t: '伸', r: 'の' }, { t: 'びる。' },
        ],
        en: 'In the natural forest, plant shoots stretch toward the sunlight.',
      },
      {
        seg: [
          { t: '日陰', r: 'ひかげ' }, { t: 'に' }, { t: '入', r: 'はい' }, { t: 'る' }, { t: 'と、' }, { t: 'ひんやり' }, { t: 'して' }, { t: '気持', r: 'きも' }, { t: 'ちがいい。' },
        ],
        en: 'Stepping into the shade is pleasantly cool.',
      },
      {
        seg: [
          { t: '鳥', r: 'とり' }, { t: 'が' }, { t: '飛', r: 'と' }, { t: 'び' }, { t: '回', r: 'まわ' }, { t: 'り、' }, { t: 'どこ' }, { t: 'か' }, { t: 'で' }, { t: '虫', r: 'むし' }, { t: 'が' }, { t: '鳴', r: 'な' }, { t: 'いている。' },
        ],
        en: 'Birds fly about and somewhere insects are chirping.',
      },
      {
        seg: [
          { t: '夕方', r: 'ゆうがた' }, { t: '、' }, { t: '太陽', r: 'たいよう' }, { t: 'が' }, { t: '沈', r: 'しず' }, { t: 'み、' }, { t: 'みごとな' }, { t: '夕焼', r: 'ゆうや' }, { t: 'け' }, { t: 'に' }, { t: 'なった。' },
        ],
        en: 'In the evening the sun set and there was a splendid sunset.',
      },
      {
        seg: [
          { t: '朝', r: 'あさ' }, { t: 'は' }, { t: 'また' }, { t: '東', r: 'ひがし' }, { t: 'から' }, { t: '昇', r: 'のぼ' }, { t: 'り、' }, { t: 'あたり' }, { t: 'は' }, { t: 'しんと' }, { t: 'している。' },
        ],
        en: 'In the morning it rises again from the east, and everything is hushed.',
      },
      {
        seg: [
          { t: '人間', r: 'にんげん' }, { t: 'も' }, { t: 'この' }, { t: '生物', r: 'せいぶつ' }, { t: 'の' }, { t: '一', r: 'ひと' }, { t: 'つ' }, { t: 'だ' }, { t: 'と' }, { t: '感', r: 'かん' }, { t: 'じる。' },
        ],
        en: 'I feel that human beings too are one of these living things.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 8,
    section: 4,
    title: '休みの日',
    targetWords: [
      '休息', 'ゆっくり', 'ごろごろ', 'だらだら', 'のびのび', 'くつろぐ', 'こもる', 'ぐうぐう', 'どっと',
      '切り替える', 'あれこれ', '芝生', '転がる', 'うなる', 'ボート', 'こぐ', '展覧会', 'ばったり',
      'はらはら', '墓', '突っ込む', '見渡す', '眺める', '眺め', 'かすかな', 'おぶう', '最適な', '余裕',
    ],
    sentences: [
      {
        seg: [
          { t: '久', r: 'ひさ' }, { t: 'しぶりの' }, { t: '休', r: 'やす' }, { t: 'み' }, { t: 'に、' },
          { t: 'ようやく' }, { t: '休息', r: 'きゅうそく' }, { t: 'を' }, { t: 'とる' }, { t: '余裕', r: 'よゆう' },
          { t: 'が' }, { t: 'できた。' },
        ],
        en: 'On a holiday for the first time in a while, I finally had the leeway to take a rest.',
      },
      {
        seg: [
          { t: '午前中', r: 'ごぜんちゅう' }, { t: 'は' }, { t: '家', r: 'いえ' }, { t: 'に' }, { t: 'こもって、' },
          { t: 'ふとん' }, { t: 'の' }, { t: '中', r: 'なか' }, { t: 'で' }, { t: 'ごろごろ' },
          { t: 'していた。' },
        ],
        en: 'In the morning I shut myself in at home and lazed around in bed.',
      },
      {
        seg: [
          { t: '弟', r: 'おとうと' }, { t: 'は' }, { t: 'となり' }, { t: 'で' }, { t: 'ぐうぐう' },
          { t: 'と' }, { t: 'いびき' }, { t: 'を' }, { t: 'かいて' }, { t: '眠', r: 'ねむ' },
          { t: 'っている。' },
        ],
        en: 'My little brother was snoring away asleep next to me.',
      },
      {
        seg: [
          { t: 'だらだら' }, { t: '過', r: 'す' }, { t: 'ごす' }, { t: 'の' }, { t: 'も' },
          { t: '悪', r: 'わる' }, { t: 'くない' }, { t: 'が、' }, { t: '気持', r: 'きも' }, { t: 'ち' },
          { t: 'を' }, { t: '切', r: 'き' }, { t: 'り' }, { t: '替', r: 'か' }, { t: 'えて' },
          { t: '外', r: 'そと' }, { t: 'へ' }, { t: '出', r: 'で' }, { t: 'た。' },
        ],
        en: 'Spending the day sluggishly is not bad, but I switched gears and went out.',
      },
      {
        seg: [
          { t: '公園', r: 'こうえん' }, { t: 'の' }, { t: '芝生', r: 'しばふ' }, { t: 'に' }, { t: '寝', r: 'ね' },
          { t: '転', r: 'ころ' }, { t: 'がる' }, { t: 'と、' }, { t: '体', r: 'からだ' }, { t: 'が' },
          { t: 'のびのび' }, { t: 'する。' },
        ],
        en: 'Lying down and rolling on the lawn in the park, my body felt free.',
      },
      {
        seg: [
          { t: '木', r: 'き' }, { t: 'かげ' }, { t: 'で' }, { t: 'ゆっくり' }, { t: 'くつろぐ' },
          { t: 'の' }, { t: 'が、' }, { t: 'この' }, { t: '季節', r: 'きせつ' }, { t: 'の' },
          { t: '楽', r: 'たの' }, { t: 'しみ' }, { t: 'だ。' },
        ],
        en: 'Relaxing slowly in the shade of a tree is the pleasure of this season.',
      },
      {
        seg: [
          { t: '池', r: 'いけ' }, { t: 'で' }, { t: 'ボート' }, { t: 'を' }, { t: 'こぐ' },
          { t: '人', r: 'ひと' }, { t: 'たち' }, { t: 'を、' }, { t: 'ぼんやり' }, { t: '眺', r: 'なが' },
          { t: 'めて' }, { t: 'いた。' },
        ],
        en: 'I gazed absently at the people rowing boats on the pond.',
      },
      {
        seg: [
          { t: 'ここ' }, { t: 'から' }, { t: 'は' }, { t: '街', r: 'まち' }, { t: 'が' },
          { t: '見渡', r: 'みわた' }, { t: 'せて、' }, { t: '眺', r: 'なが' }, { t: 'め' }, { t: 'が' },
          { t: 'とても' }, { t: 'よい。' },
        ],
        en: 'From here you can look out over the town, and the view is very good.',
      },
      {
        seg: [
          { t: '遠', r: 'とお' }, { t: 'く' }, { t: 'で' }, { t: '風', r: 'かぜ' }, { t: 'が' },
          { t: 'うなり、' }, { t: 'かすかな' }, { t: '音楽', r: 'おんがく' }, { t: 'が' }, { t: '聞', r: 'き' },
          { t: 'こえて' }, { t: 'きた。' },
        ],
        en: 'Far off the wind groaned, and faint music reached me.',
      },
      {
        seg: [
          { t: '午後', r: 'ごご' }, { t: 'は' }, { t: '展覧会', r: 'てんらんかい' }, { t: 'へ' }, { t: '行', r: 'い' },
          { t: 'き、' }, { t: '出口', r: 'でぐち' }, { t: 'で' }, { t: '友人', r: 'ゆうじん' }, { t: 'に' },
          { t: 'ばったり' }, { t: '会', r: 'あ' }, { t: 'った。' },
        ],
        en: 'In the afternoon I went to an exhibition and ran into a friend at the exit.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'は' }, { t: '子', r: 'こ' }, { t: 'ども' }, { t: 'を' },
          { t: 'おぶって、' }, { t: '荷物', r: 'にもつ' }, { t: 'を' }, { t: 'かばん' }, { t: 'に' },
          { t: '突', r: 'つ' }, { t: 'っ' }, { t: '込', r: 'こ' }, { t: 'んで' }, { t: 'いた。' },
        ],
        en: 'He was carrying his child on his back and cramming his things into a bag.',
      },
      {
        seg: [
          { t: '人', r: 'ひと' }, { t: 'が' }, { t: 'どっと' }, { t: '出', r: 'で' }, { t: 'て' },
          { t: 'きて、' }, { t: 'はぐれ' }, { t: 'ない' }, { t: 'か' }, { t: 'はらはら' },
          { t: 'した。' },
        ],
        en: 'People came out all at once, and I was on edge about getting separated.',
      },
      {
        seg: [
          { t: '帰', r: 'かえ' }, { t: 'り' }, { t: 'に' }, { t: '墓', r: 'はか' }, { t: 'に' },
          { t: '寄', r: 'よ' }, { t: 'り、' }, { t: 'あれこれ' }, { t: '報告', r: 'ほうこく' }, { t: 'した。' },
        ],
        en: 'On the way back I stopped by the grave and reported this and that.',
      },
      {
        seg: [
          { t: '休', r: 'やす' }, { t: 'み' }, { t: 'を' }, { t: 'どう' }, { t: '使', r: 'つか' },
          { t: 'う' }, { t: 'か' }, { t: 'は、' }, { t: 'その' }, { t: '日', r: 'ひ' },
          { t: 'の' }, { t: '気分', r: 'きぶん' }, { t: 'に' }, { t: '最適', r: 'さいてき' }, { t: 'な' },
          { t: '形', r: 'かたち' }, { t: 'で' }, { t: 'よい。' },
        ],
        en: 'How to spend a day off can simply take whatever form best suits that day’s mood.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 8,
    section: 5,
    title: '旅に出る',
    targetWords: [
      '旅', 'レジャー', '訪れる', '体験', '冒険', '見聞き', '巡る', 'プラン', '思い立つ', '豪華な',
      '手配', '前もって', '便', '空席', '超過', '飛ぶ', '思いがけず', '引き返す', '間もなく', '宿泊',
      '大幅な', '旅先', '各地', '名所', '市場', '免税店', '風景', '海水浴', 'もぐる', '跡', '位置',
      'めいめい', 'しばしば', '出来事',
    ],
    sentences: [
      {
        seg: [
          { t: 'ある' }, { t: '朝', r: 'あさ' }, { t: '思', r: 'おも' }, { t: 'い' }, { t: '立', r: 'た' },
          { t: 'って、' }, { t: '久', r: 'ひさ' }, { t: 'しぶりに' }, { t: '旅', r: 'たび' }, { t: 'に' },
          { t: '出', r: 'で' }, { t: 'る' }, { t: 'こと' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'One morning I decided on the spur of the moment to take a trip for the first time in a while.',
      },
      {
        seg: [
          { t: '豪華', r: 'ごうか' }, { t: 'な' }, { t: 'レジャー' }, { t: 'で' }, { t: 'なく' },
          { t: 'ても、' }, { t: '見聞', r: 'みき' }, { t: 'き' }, { t: 'を' }, { t: '広', r: 'ひろ' },
          { t: 'げる' }, { t: '体験', r: 'たいけん' }, { t: 'が' }, { t: 'ほしかった。' },
        ],
        en: 'Even if it was not a luxurious holiday, I wanted an experience that would broaden what I saw and heard.',
      },
      {
        seg: [
          { t: '前', r: 'まえ' }, { t: 'もって' }, { t: 'プラン' }, { t: 'を' }, { t: '立', r: 'た' },
          { t: 'て、' }, { t: '宿泊', r: 'しゅくはく' }, { t: 'と' }, { t: '便', r: 'びん' }, { t: 'を' },
          { t: '手配', r: 'てはい' }, { t: 'した。' },
        ],
        en: 'I made a plan in advance and arranged lodging and a flight.',
      },
      {
        seg: [
          { t: '空席', r: 'くうせき' }, { t: 'が' }, { t: 'わずか' }, { t: 'で、' }, { t: '荷物', r: 'にもつ' },
          { t: 'が' }, { t: '重量', r: 'じゅうりょう' }, { t: 'を' }, { t: '超過', r: 'ちょうか' }, { t: 'しない' },
          { t: 'か' }, { t: '心配', r: 'しんぱい' }, { t: 'した。' },
        ],
        en: 'There were few vacant seats, and I worried whether my luggage would exceed the weight limit.',
      },
      {
        seg: [
          { t: '飛行機', r: 'ひこうき' }, { t: 'が' }, { t: '飛', r: 'と' }, { t: 'び' }, { t: '立', r: 'た' },
          { t: 'つ' }, { t: 'と、' }, { t: '間', r: 'ま' }, { t: 'もなく' }, { t: '雲', r: 'くも' },
          { t: 'の' }, { t: '上', r: 'うえ' }, { t: 'に' }, { t: '出', r: 'で' }, { t: 'た。' },
        ],
        en: 'When the plane took off, before long we were above the clouds.',
      },
      {
        seg: [
          { t: '旅先', r: 'たびさき' }, { t: 'で' }, { t: 'は' }, { t: '各地', r: 'かくち' }, { t: 'を' },
          { t: '巡', r: 'めぐ' }, { t: 'り、' }, { t: '名所', r: 'めいしょ' }, { t: 'を' }, { t: 'いくつ' },
          { t: 'も' }, { t: '訪', r: 'おとず' }, { t: 'れた。' },
        ],
        en: 'At my destination I went around various places and visited many famous spots.',
      },
      {
        seg: [
          { t: '朝', r: 'あさ' }, { t: 'の' }, { t: '市場', r: 'いちば' }, { t: 'は' }, { t: 'にぎやか' },
          { t: 'で、' }, { t: 'めいめい' }, { t: 'が' }, { t: '大', r: 'おお' }, { t: 'きな' },
          { t: '袋', r: 'ふくろ' }, { t: 'を' }, { t: '抱', r: 'かか' }, { t: 'えて' }, { t: 'いた。' },
        ],
        en: 'The morning market was lively, and each person was carrying a big bag.',
      },
      {
        seg: [
          { t: '免税店', r: 'めんぜいてん' }, { t: 'で' }, { t: 'は' }, { t: '大幅', r: 'おおはば' }, { t: 'な' },
          { t: '割引', r: 'わりびき' }, { t: 'が' }, { t: 'あり、' }, { t: 'つい' }, { t: '買', r: 'か' },
          { t: 'い' }, { t: 'すぎた。' },
        ],
        en: 'At the duty-free shop there were significant discounts, and I ended up buying too much.',
      },
      {
        seg: [
          { t: '海', r: 'うみ' }, { t: 'で' }, { t: 'は' }, { t: '海水浴', r: 'かいすいよく' }, { t: 'を' },
          { t: '楽', r: 'たの' }, { t: 'しみ、' }, { t: '深', r: 'ふか' }, { t: 'く' }, { t: 'もぐって' },
          { t: '魚', r: 'さかな' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'た。' },
        ],
        en: 'At the sea I enjoyed swimming and dived deep to look at the fish.',
      },
      {
        seg: [
          { t: '古', r: 'ふる' }, { t: 'い' }, { t: '町', r: 'まち' }, { t: 'の' }, { t: '跡', r: 'あと' },
          { t: 'が' }, { t: '残', r: 'のこ' }, { t: 'る' }, { t: '場所', r: 'ばしょ' }, { t: 'は、' },
          { t: '地図', r: 'ちず' }, { t: 'で' }, { t: '位置', r: 'いち' }, { t: 'を' }, { t: '確', r: 'たし' },
          { t: 'かめた。' },
        ],
        en: 'For the place where the ruins of an old town remain, I checked its position on the map.',
      },
      {
        seg: [
          { t: '道', r: 'みち' }, { t: 'に' }, { t: '迷', r: 'まよ' }, { t: 'って' }, { t: '引', r: 'ひ' },
          { t: 'き' }, { t: '返', r: 'かえ' }, { t: 'す' }, { t: 'こと' }, { t: 'も' },
          { t: 'しばしば' }, { t: 'あった。' },
        ],
        en: 'I often lost my way and had to turn back.',
      },
      {
        seg: [
          { t: '思', r: 'おも' }, { t: 'いがけず' }, { t: '出会', r: 'であ' }, { t: 'った' }, { t: '人', r: 'ひと' },
          { t: 'や' }, { t: '風景', r: 'ふうけい' }, { t: 'が、' }, { t: 'いちばん' }, { t: 'の' },
          { t: '冒険', r: 'ぼうけん' }, { t: 'だった。' },
        ],
        en: 'The people and scenery I met unexpectedly were the greatest adventure.',
      },
      {
        seg: [
          { t: '小', r: 'ちい' }, { t: 'さな' }, { t: '出来事', r: 'できごと' }, { t: 'の' }, { t: '一', r: 'ひと' },
          { t: 'つ' }, { t: '一', r: 'ひと' }, { t: 'つ' }, { t: 'が、' }, { t: 'いま' },
          { t: 'も' }, { t: 'よく' }, { t: '心', r: 'こころ' }, { t: 'に' }, { t: '残', r: 'のこ' },
          { t: 'って' }, { t: 'いる。' },
        ],
        en: 'Each small occurrence still remains vivid in my heart.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 9,
    section: 1,
    title: '体をはかる',
    targetWords: [
      '測定', '定期的な', '血圧', '体力', '心身', '健やかな', 'かたよる', '小柄な', '寿命', '一般に',
      '手首', 'かかと', 'つま先', '血管', 'さらさら', '筋肉', '障がい', '乗り越える', '傷跡', 'いびき',
      '体が持つ',
    ],
    sentences: [
      {
        seg: [
          { t: '年', r: 'ねん' }, { t: 'に' }, { t: '一度', r: 'いちど、' }, { t: '定期的', r: 'ていきてき' }, { t: 'な' },
          { t: '健康診断', r: 'けんこうしんだん' }, { t: 'で' }, { t: '体', r: 'からだ' }, { t: 'を' }, { t: '測定', r: 'そくてい' },
          { t: 'する。' },
        ],
        en: 'Once a year I have my body measured at a regular health check-up.',
      },
      {
        seg: [
          { t: '血圧', r: 'けつあつ' }, { t: 'を' }, { t: 'はかる' }, { t: 'とき' }, { t: 'は、' },
          { t: '手首', r: 'てくび' }, { t: 'に' }, { t: '軽', r: 'かる' }, { t: 'く' }, { t: '力', r: 'ちから' },
          { t: 'を' }, { t: '入', r: 'い' }, { t: 'れる。' },
        ],
        en: 'When measuring blood pressure, I put a little force into my wrist.',
      },
      {
        seg: [
          { t: '一般', r: 'いっぱん' }, { t: 'に、' }, { t: '食事', r: 'しょくじ' }, { t: 'が' }, { t: 'かたよる' },
          { t: 'と' }, { t: '体力', r: 'たいりょく' }, { t: 'は' }, { t: '落', r: 'お' }, { t: 'ちて' },
          { t: 'いく。' },
        ],
        en: 'Generally, when meals become unbalanced, physical strength declines.',
      },
      {
        seg: [
          { t: '小柄', r: 'こがら' }, { t: 'な' }, { t: '祖母', r: 'そぼ' }, { t: 'は、' }, { t: 'いま' },
          { t: 'でも' }, { t: '健', r: 'すこ' }, { t: 'やか' }, { t: 'で' }, { t: '寿命', r: 'じゅみょう' },
          { t: 'を' }, { t: '気', r: 'き' }, { t: 'に' }, { t: 'しない。' },
        ],
        en: 'My petite grandmother is still healthy and pays no mind to her lifespan.',
      },
      {
        seg: [
          { t: '毎朝', r: 'まいあさ、' }, { t: 'かかと' }, { t: 'から' }, { t: 'つま先', r: 'つまさき' }, { t: 'まで' },
          { t: 'ゆっくり' }, { t: '伸', r: 'の' }, { t: 'ばす。' },
        ],
        en: 'Every morning I stretch slowly from heel to tiptoe.',
      },
      {
        seg: [
          { t: '血管', r: 'けっかん' }, { t: 'の' }, { t: '中', r: 'なか' }, { t: 'を' }, { t: '血', r: 'ち' },
          { t: 'が' }, { t: 'さらさら' }, { t: '流', r: 'なが' }, { t: 'れる' }, { t: '感', r: 'かん' },
          { t: 'じ' }, { t: 'が' }, { t: 'する。' },
        ],
        en: 'It feels as though the blood flows smoothly through my blood vessels.',
      },
      {
        seg: [
          { t: '筋肉', r: 'きんにく' }, { t: 'を' }, { t: '使', r: 'つか' }, { t: 'えば、' }, { t: '心身', r: 'しんしん' },
          { t: 'とも' }, { t: 'に' }, { t: '軽', r: 'かる' }, { t: 'く' }, { t: 'なる。' },
        ],
        en: 'If I use my muscles, both mind and body feel lighter.',
      },
      {
        seg: [
          { t: '父', r: 'ちち' }, { t: 'は' }, { t: '障', r: 'しょう' }, { t: 'がい' }, { t: 'を' },
          { t: '乗', r: 'の' }, { t: 'り' }, { t: '越', r: 'こ' }, { t: 'えて、' }, { t: 'いま' },
          { t: 'も' }, { t: '仕事', r: 'しごと' }, { t: 'を' }, { t: '続', r: 'つづ' }, { t: 'けて' },
          { t: 'いる。' },
        ],
        en: 'My father overcame his disability and still continues to work.',
      },
      {
        seg: [
          { t: '腕', r: 'うで' }, { t: 'の' }, { t: '傷跡', r: 'きずあと' }, { t: 'は、' }, { t: 'その' },
          { t: 'ころ' }, { t: 'の' }, { t: '記憶', r: 'きおく' }, { t: 'を' }, { t: '思', r: 'おも' },
          { t: 'い' }, { t: '出', r: 'だ' }, { t: 'させる。' },
        ],
        en: 'The scar on my arm brings back memories of that time.',
      },
      {
        seg: [
          { t: '夜', r: 'よる' }, { t: 'の' }, { t: 'いびき' }, { t: 'が' }, { t: 'ひどい' },
          { t: '日', r: 'ひ' }, { t: 'は、' }, { t: '体', r: 'からだ' }, { t: 'が' }, { t: '持', r: 'も' },
          { t: 'たない' }, { t: '気', r: 'き' }, { t: 'が' }, { t: 'する。' },
        ],
        en: 'On days when my snoring is bad, I feel my body will not hold up.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 9,
    section: 2,
    title: '病気になる前に',
    targetWords: [
      '休養', '疲労', '不調', '体調', 'やや', '寝心地', '大した', '念のため', '通院', 'レントゲン',
      'さらに', 'おとろえる', 'きたえる', '適度な', '予防', '補給', '不足', 'サプリメント', '取り戻す',
      'ワクチン', '加入', '医師', 'くれぐれも',
    ],
    sentences: [
      {
        seg: [
          { t: '先週', r: 'せんしゅう' }, { t: 'から' }, { t: '体調', r: 'たいちょう' }, { t: 'が' }, { t: 'やや' },
          { t: '不調', r: 'ふちょう' }, { t: 'で、' }, { t: '疲労', r: 'ひろう' }, { t: 'が' }, { t: '抜', r: 'ぬ' },
          { t: 'けない。' },
        ],
        en: 'Since last week my physical condition has been somewhat poor, and the fatigue will not leave me.',
      },
      {
        seg: [
          { t: '寝心地', r: 'ねごこち' }, { t: 'の' }, { t: 'よい' }, { t: 'ふとん' }, { t: 'に' },
          { t: '変', r: 'か' }, { t: 'えて、' }, { t: 'まず' }, { t: '休養', r: 'きゅうよう' }, { t: 'を' },
          { t: 'とった。' },
        ],
        en: 'I changed to a comfortable futon and first of all took some rest.',
      },
      {
        seg: [
          { t: '大', r: 'たい' }, { t: 'した' }, { t: 'こと' }, { t: 'は' }, { t: 'ない' },
          { t: 'と' }, { t: '思', r: 'おも' }, { t: 'った' }, { t: 'が、' }, { t: '念', r: 'ねん' },
          { t: 'の' }, { t: 'ため' }, { t: '通院', r: 'つういん' }, { t: 'する' }, { t: 'こと' },
          { t: 'に' }, { t: 'した。' },
        ],
        en: 'I thought it was nothing serious, but just to be sure I decided to go to the hospital.',
      },
      {
        seg: [
          { t: '医師', r: 'いし' }, { t: 'は' }, { t: 'レントゲン' }, { t: 'を' }, { t: '見', r: 'み' },
          { t: 'て、' }, { t: 'さらに' }, { t: '血液', r: 'けつえき' }, { t: 'の' }, { t: '検査', r: 'けんさ' },
          { t: 'も' }, { t: 'すすめた。' },
        ],
        en: 'The doctor looked at the X-ray and furthermore recommended a blood test.',
      },
      {
        seg: [
          { t: '体力', r: 'たいりょく' }, { t: 'が' }, { t: 'おとろえる' }, { t: '前', r: 'まえ' }, { t: 'に、' },
          { t: '適度', r: 'てきど' }, { t: 'な' }, { t: '運動', r: 'うんどう' }, { t: 'で' }, { t: 'きたえる' },
          { t: 'の' }, { t: 'が' }, { t: 'よい。' },
        ],
        en: 'Before your strength declines, it is good to train with moderate exercise.',
      },
      {
        seg: [
          { t: '水分', r: 'すいぶん' }, { t: 'を' }, { t: '補給', r: 'ほきゅう' }, { t: 'し、' }, { t: '不足', r: 'ふそく' },
          { t: 'しがち' }, { t: 'な' }, { t: '栄養', r: 'えいよう' }, { t: 'は' }, { t: 'サプリメント' },
          { t: 'で' }, { t: '補', r: 'おぎな' }, { t: 'う。' },
        ],
        en: 'I replenish fluids and make up for nutrients I tend to lack with supplements.',
      },
      {
        seg: [
          { t: '毎年', r: 'まいとし' }, { t: 'ワクチン' }, { t: 'を' }, { t: '受', r: 'う' }, { t: 'ける' },
          { t: 'の' }, { t: 'は、' }, { t: '予防', r: 'よぼう' }, { t: 'の' }, { t: 'ため' },
          { t: 'だ。' },
        ],
        en: 'Getting a vaccine every year is for prevention.',
      },
      {
        seg: [
          { t: '保険', r: 'ほけん' }, { t: 'に' }, { t: '加入', r: 'かにゅう' }, { t: 'して' }, { t: 'おけば、' },
          { t: 'いざ' }, { t: 'という' }, { t: 'とき' }, { t: '安心', r: 'あんしん' }, { t: 'だ。' },
        ],
        en: 'If you enroll in insurance, you can feel secure when the time comes.',
      },
      {
        seg: [
          { t: '体力', r: 'たいりょく' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'り' }, { t: '戻', r: 'もど' },
          { t: 'す' }, { t: 'まで、' }, { t: 'くれぐれも' }, { t: '無理', r: 'むり' }, { t: 'を' },
          { t: 'しない' }, { t: 'よう' }, { t: 'に。' },
        ],
        en: 'Until you regain your strength, please by all means do not overdo it.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 9,
    section: 3,
    title: '症状を伝える',
    targetWords: [
      '具体的な', '程度', 'ぼうっと', 'ふらふら', '意識', 'しゃがむ', '視野', '呼吸', '詰まる', '耐える',
      '便秘', '～気味', '寒気', 'ねじる', 'しっしん', 'はれる', 'しきりに', '異常', '伴う', '単なる',
      '伝染', '反応',
    ],
    sentences: [
      {
        seg: [
          { t: '朝', r: 'あさ' }, { t: 'から' }, { t: '頭', r: 'あたま' }, { t: 'が' }, { t: 'ぼうっと' },
          { t: 'して、' }, { t: '立', r: 'た' }, { t: 'つ' }, { t: 'と' }, { t: 'ふらふら' },
          { t: 'した。' },
        ],
        en: 'Since morning my head had been foggy, and when I stood I felt unsteady.',
      },
      {
        seg: [
          { t: '視野', r: 'しや' }, { t: 'が' }, { t: 'せまく' }, { t: 'なり、' }, { t: 'その場', r: 'ば' },
          { t: 'に' }, { t: 'しゃがむ' }, { t: 'しか' }, { t: 'なかった。' },
        ],
        en: 'My field of vision narrowed and I had no choice but to crouch on the spot.',
      },
      {
        seg: [
          { t: '意識', r: 'いしき' }, { t: 'は' }, { t: 'あった' }, { t: 'が、' }, { t: '呼吸', r: 'こきゅう' },
          { t: 'が' }, { t: '苦', r: 'くる' }, { t: 'しく、' }, { t: '鼻', r: 'はな' }, { t: 'も' },
          { t: '詰', r: 'つ' }, { t: 'まって' }, { t: 'いた。' },
        ],
        en: 'I was conscious, but breathing was painful and my nose was blocked too.',
      },
      {
        seg: [
          { t: '寒気', r: 'さむけ' }, { t: 'が' }, { t: 'して、' }, { t: 'かぜ' }, { t: '気味', r: 'ぎみ' },
          { t: 'か' }, { t: 'も' }, { t: 'しれない' }, { t: 'と' }, { t: '思', r: 'おも' },
          { t: 'った。' },
        ],
        en: 'I felt chills and thought I might be coming down with a cold.',
      },
      {
        seg: [
          { t: '医師', r: 'いし' }, { t: 'に' }, { t: 'は、' }, { t: '具体的', r: 'ぐたいてき' }, { t: 'な' },
          { t: '症状', r: 'しょうじょう' }, { t: 'と' }, { t: 'その' }, { t: '程度', r: 'ていど' }, { t: 'を' },
          { t: '伝', r: 'つた' }, { t: 'えた。' },
        ],
        en: 'To the doctor I described the specific symptoms and their degree.',
      },
      {
        seg: [
          { t: '先週', r: 'せんしゅう' }, { t: '足首', r: 'あしくび' }, { t: 'を' }, { t: 'ねじって' }, { t: 'から、' },
          { t: 'その' }, { t: 'あたり' }, { t: 'が' }, { t: '赤', r: 'あか' }, { t: 'く' },
          { t: 'はれて' }, { t: 'いる。' },
        ],
        en: 'Since I twisted my ankle last week, that area has been red and swollen.',
      },
      {
        seg: [
          { t: '腕', r: 'うで' }, { t: 'に' }, { t: 'しっしん' }, { t: 'が' }, { t: '出', r: 'で' },
          { t: 'て、' }, { t: 'しきりに' }, { t: 'かゆく' }, { t: 'なる。' },
        ],
        en: 'A rash appeared on my arm and it itches constantly.',
      },
      {
        seg: [
          { t: '便秘', r: 'べんぴ' }, { t: 'が' }, { t: '続', r: 'つづ' }, { t: 'く' }, { t: 'の' },
          { t: 'は' }, { t: '単', r: 'たん' }, { t: 'なる' }, { t: '食事', r: 'しょくじ' }, { t: 'の' },
          { t: '問題', r: 'もんだい' }, { t: 'か' }, { t: 'も' }, { t: 'しれない。' },
        ],
        en: 'Continuing constipation may be merely a matter of diet.',
      },
      {
        seg: [
          { t: '熱', r: 'ねつ' }, { t: 'を' }, { t: '伴', r: 'ともな' }, { t: 'う' }, { t: '場合', r: 'ばあい' },
          { t: 'は、' }, { t: '伝染', r: 'でんせん' }, { t: 'する' }, { t: '病気', r: 'びょうき' }, { t: 'の' },
          { t: 'こと' }, { t: 'も' }, { t: 'ある。' },
        ],
        en: 'When it is accompanied by fever, it can be a contagious illness.',
      },
      {
        seg: [
          { t: '薬', r: 'くすり' }, { t: 'に' }, { t: '体', r: 'からだ' }, { t: 'が' }, { t: 'どう' },
          { t: '反応', r: 'はんのう' }, { t: 'する' }, { t: 'か、' }, { t: '異常', r: 'いじょう' }, { t: 'が' },
          { t: 'ない' }, { t: 'か' }, { t: '見', r: 'み' }, { t: 'て' }, { t: 'いる。' },
        ],
        en: 'I am watching how my body reacts to the medicine and whether anything is abnormal.',
      },
      {
        seg: [
          { t: '痛', r: 'いた' }, { t: 'み' }, { t: 'に' }, { t: '耐', r: 'た' }, { t: 'える' },
          { t: 'より、' }, { t: '早', r: 'はや' }, { t: 'く' }, { t: '相談', r: 'そうだん' }, { t: 'した' },
          { t: 'ほう' }, { t: 'が' }, { t: 'よい。' },
        ],
        en: 'Rather than enduring the pain, it is better to consult someone early.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 9,
    section: 4,
    title: '治療とリハビリ',
    targetWords: [
      '病む', '負傷', '重体', '熱中症', '細菌', 'つまずく', '医療', '高度', '実績', '負担', '適用',
      '手当て', '尽くす', '薬品', '作用', '目安', '副作用', '余計', '余計な', 'もむ', '告げる',
      '覚悟', '看病', '配慮', '遺伝', '克服', 'リハビリ',
    ],
    sentences: [
      {
        seg: [
          { t: '夏', r: 'なつ' }, { t: 'の' }, { t: '工事現場', r: 'こうじげんば' }, { t: 'で、' }, { t: '父', r: 'ちち' },
          { t: 'が' }, { t: '熱中症', r: 'ねっちゅうしょう' }, { t: 'で' }, { t: '倒', r: 'たお' }, { t: 'れた。' },
        ],
        en: 'At a summer construction site, my father collapsed from heat stroke.',
      },
      {
        seg: [
          { t: '足場', r: 'あしば' }, { t: 'で' }, { t: 'つまずいて' }, { t: '負傷', r: 'ふしょう' }, { t: 'し、' },
          { t: '一時', r: 'いちじ' }, { t: 'は' }, { t: '重体', r: 'じゅうたい' }, { t: 'だ' }, { t: 'と' },
          { t: '告', r: 'つ' }, { t: 'げられた。' },
        ],
        en: 'He stumbled on the scaffolding and was injured; at one point we were told he was in critical condition.',
      },
      {
        seg: [
          { t: '高度', r: 'こうど' }, { t: 'な' }, { t: '医療', r: 'いりょう' }, { t: 'と' }, { t: '実績', r: 'じっせき' },
          { t: 'の' }, { t: 'ある' }, { t: '病院', r: 'びょういん' }, { t: 'で、' }, { t: 'すぐ' },
          { t: 'に' }, { t: '手当', r: 'てあ' }, { t: 'て' }, { t: 'を' }, { t: '受', r: 'う' },
          { t: 'けた。' },
        ],
        en: 'He received treatment at once at a hospital with advanced medical care and a strong track record.',
      },
      {
        seg: [
          { t: '細菌', r: 'さいきん' }, { t: 'による' }, { t: '感染', r: 'かんせん' }, { t: 'を' }, { t: '防', r: 'ふせ' },
          { t: 'ぐ' }, { t: 'ため、' }, { t: '強', r: 'つよ' }, { t: 'い' }, { t: '薬品', r: 'やくひん' },
          { t: 'が' }, { t: '使', r: 'つか' }, { t: 'われた。' },
        ],
        en: 'Strong drugs were used to prevent bacterial infection.',
      },
      {
        seg: [
          { t: '薬', r: 'くすり' }, { t: 'の' }, { t: '作用', r: 'さよう' }, { t: 'は' }, { t: '早', r: 'はや' },
          { t: 'かった' }, { t: 'が、' }, { t: '副作用', r: 'ふくさよう' }, { t: 'も' }, { t: '説明', r: 'せつめい' },
          { t: 'された。' },
        ],
        en: 'The medicine acted quickly, but the side effects were explained as well.',
      },
      {
        seg: [
          { t: '保険', r: 'ほけん' }, { t: 'が' }, { t: '適用', r: 'てきよう' }, { t: 'され、' }, { t: '費用', r: 'ひよう' },
          { t: 'の' }, { t: '負担', r: 'ふたん' }, { t: 'は' }, { t: '目安', r: 'めやす' }, { t: 'より' },
          { t: '軽', r: 'かる' }, { t: 'かった。' },
        ],
        en: 'Insurance applied, and the cost burden was lighter than the estimate.',
      },
      {
        seg: [
          { t: '医師', r: 'いし' }, { t: 'は' }, { t: '手', r: 'て' }, { t: 'を' }, { t: '尽', r: 'つ' },
          { t: 'くし、' }, { t: '看護師', r: 'かんごし' }, { t: 'も' }, { t: 'こまやか' }, { t: 'に' },
          { t: '配慮', r: 'はいりょ' }, { t: 'して' }, { t: 'くれた。' },
        ],
        en: 'The doctors did everything they could, and the nurses were thoughtfully considerate.',
      },
      {
        seg: [
          { t: '母', r: 'はは' }, { t: 'は' }, { t: '覚悟', r: 'かくご' }, { t: 'を' }, { t: '決', r: 'き' },
          { t: 'めて、' }, { t: '毎日', r: 'まいにち' }, { t: '看病', r: 'かんびょう' }, { t: 'に' }, { t: '通', r: 'かよ' },
          { t: 'った。' },
        ],
        en: 'My mother steeled herself and went every day to nurse him.',
      },
      {
        seg: [
          { t: 'かたく' }, { t: 'なった' }, { t: '足', r: 'あし' }, { t: 'を' }, { t: 'もむ' },
          { t: 'の' }, { t: 'も、' }, { t: 'リハビリ' }, { t: 'の' }, { t: '一部', r: 'いちぶ' },
          { t: 'だ' }, { t: 'そう' }, { t: 'だ。' },
        ],
        en: 'Massaging his stiffened legs is apparently part of the rehabilitation too.',
      },
      {
        seg: [
          { t: '余計', r: 'よけい' }, { t: 'な' }, { t: '心配', r: 'しんぱい' }, { t: 'は' }, { t: 'しない' },
          { t: 'と' }, { t: '決', r: 'き' }, { t: 'めた' }, { t: 'が、' }, { t: '遺伝', r: 'いでん' },
          { t: 'の' }, { t: 'こと' }, { t: 'は' }, { t: '気', r: 'き' }, { t: 'に' },
          { t: 'なる。' },
        ],
        en: 'I decided not to worry unnecessarily, but heredity is on my mind.',
      },
      {
        seg: [
          { t: '長', r: 'なが' }, { t: 'く' }, { t: '病', r: 'や' }, { t: 'んで' }, { t: 'も、' },
          { t: 'いつか' }, { t: '克服', r: 'こくふく' }, { t: 'できる' }, { t: 'と' }, { t: '信', r: 'しん' },
          { t: 'じて' }, { t: 'いる。' },
        ],
        en: 'Even if he is ill for a long time, I believe he can overcome it someday.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 9,
    section: 5,
    title: '肌と体をととのえる',
    targetWords: [
      '肌', '手入れ', 'ケア', '維持', '機能', 'かえって', '刺激', 'かさかさ', '低下', 'くっきり',
      'つや', '脂肪', '肥満', '減量', '急激な', '一向に', '疑わしい', '姿勢', 'かかる', '依存',
      '映す',
    ],
    sentences: [
      {
        seg: [
          { t: '冬', r: 'ふゆ' }, { t: 'に' }, { t: 'なる' }, { t: 'と' }, { t: '肌', r: 'はだ' },
          { t: 'が' }, { t: 'かさかさ' }, { t: 'して、' }, { t: '手入', r: 'てい' }, { t: 'れ' },
          { t: 'が' }, { t: '欠', r: 'か' }, { t: 'かせない。' },
        ],
        en: 'When winter comes my skin gets dry and rough, and care becomes essential.',
      },
      {
        seg: [
          { t: '強', r: 'つよ' }, { t: 'い' }, { t: '刺激', r: 'しげき' }, { t: 'の' }, { t: 'ある' },
          { t: 'もの' }, { t: 'は、' }, { t: 'かえって' }, { t: 'よくない' }, { t: 'らしい。' },
        ],
        en: 'Things with strong stimulation are apparently bad for it, on the contrary.',
      },
      {
        seg: [
          { t: '肌', r: 'はだ' }, { t: '本来', r: 'ほんらい' }, { t: 'の' }, { t: '機能', r: 'きのう' }, { t: 'を' },
          { t: '維持', r: 'いじ' }, { t: 'する' }, { t: 'ケア' }, { t: 'が' }, { t: '大切', r: 'たいせつ' },
          { t: 'だ' }, { t: 'と' }, { t: '言', r: 'い' }, { t: 'われた。' },
        ],
        en: 'I was told that care which maintains the skin’s original function is important.',
      },
      {
        seg: [
          { t: '鏡', r: 'かがみ' }, { t: 'に' }, { t: '映', r: 'うつ' }, { t: 'る' }, { t: '顔', r: 'かお' },
          { t: 'を' }, { t: '見', r: 'み' }, { t: 'ると、' }, { t: 'つや' }, { t: 'が' },
          { t: '低下', r: 'ていか' }, { t: 'した' }, { t: '気', r: 'き' }, { t: 'が' }, { t: 'する。' },
        ],
        en: 'Looking at my face reflected in the mirror, I feel its luster has declined.',
      },
      {
        seg: [
          { t: '急激', r: 'きゅうげき' }, { t: 'な' }, { t: '減量', r: 'げんりょう' }, { t: 'は' }, { t: '体', r: 'からだ' },
          { t: 'に' }, { t: '悪', r: 'わる' }, { t: 'く、' }, { t: '脂肪', r: 'しぼう' }, { t: 'だけ' },
          { t: 'が' }, { t: '減', r: 'へ' }, { t: 'る' }, { t: 'わけ' }, { t: 'でも' },
          { t: 'ない。' },
        ],
        en: 'Rapid weight loss is bad for the body, and it is not only fat that decreases.',
      },
      {
        seg: [
          { t: '肥満', r: 'ひまん' }, { t: 'を' }, { t: '気', r: 'き' }, { t: 'に' }, { t: 'して' },
          { t: '薬', r: 'くすり' }, { t: 'に' }, { t: '依存', r: 'いぞん' }, { t: 'する' }, { t: 'の' },
          { t: 'は、' }, { t: '疑', r: 'うたが' }, { t: 'わしい' }, { t: '方法', r: 'ほうほう' }, { t: 'だ。' },
        ],
        en: 'Depending on pills out of concern about obesity is a questionable method.',
      },
      {
        seg: [
          { t: '姿勢', r: 'しせい' }, { t: 'を' }, { t: 'よく' }, { t: 'する' }, { t: 'だけ' },
          { t: 'で、' }, { t: '顔', r: 'かお' }, { t: 'の' }, { t: '線', r: 'せん' }, { t: 'が' },
          { t: 'くっきり' }, { t: 'する。' },
        ],
        en: 'Just improving your posture makes the lines of your face distinct.',
      },
      {
        seg: [
          { t: '一向', r: 'いっこう' }, { t: 'に' }, { t: '変', r: 'か' }, { t: 'わら' }, { t: 'ない' },
          { t: 'とき' }, { t: 'は、' }, { t: '一度', r: 'いちど' }, { t: '医者', r: 'いしゃ' }, { t: 'に' },
          { t: 'かかる' }, { t: 'こと' }, { t: 'に' }, { t: 'して' }, { t: 'いる。' },
        ],
        en: 'When nothing changes at all, I make a point of seeing a doctor once.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 10,
    section: 1,
    title: '近所のもめごと',
    targetWords: [
      '騒音', '続出', '思わず', '一方', '対立', '拒否', '訴える', '裁判', '関わる', 'はねる', '犯罪',
      '暴れる', '乱暴', '暴力', 'おどかす', '進入', 'のぞく', '見知らぬ', '近寄る', '縮まる', '無理やり',
      '捜査', '確定', '明らかな', '一致', '自ら', '居場所', '持ち主', 'あくまで', '実に', '困難',
      '改める', 'ようやく',
    ],
    sentences: [
      {
        seg: [
          { t: '夜中', r: 'よなか' }, { t: 'の' }, { t: '騒音', r: 'そうおん' }, { t: 'に、' }, { t: '苦情', r: 'くじょう' },
          { t: 'が' }, { t: '続出', r: 'ぞくしゅつ' }, { t: 'した。' },
        ],
        en: 'Complaints about the late-night noise came one after another.',
      },
      {
        seg: [
          { t: '思', r: 'おも' }, { t: 'わず' }, { t: '窓', r: 'まど' }, { t: 'から' }, { t: 'のぞく' },
          { t: 'と、' }, { t: '見知', r: 'みし' }, { t: 'らぬ' }, { t: '車', r: 'くるま' }, { t: 'が' },
          { t: '進入', r: 'しんにゅう' }, { t: 'して' }, { t: 'きた。' },
        ],
        en: 'When I involuntarily peeked out of the window, an unfamiliar car had driven in.',
      },
      {
        seg: [
          { t: '水', r: 'みず' }, { t: 'を' }, { t: 'はねて' }, { t: '走', r: 'はし' }, { t: 'り' },
          { t: '去', r: 'さ' }, { t: 'る' }, { t: 'の' }, { t: 'を、' }, { t: '近所', r: 'きんじょ' },
          { t: 'の' }, { t: '人', r: 'ひと' }, { t: 'が' }, { t: '目', r: 'め' }, { t: 'に' },
          { t: 'した。' },
        ],
        en: 'A neighbour saw it splash water and drive off.',
      },
      {
        seg: [
          { t: '持', r: 'も' }, { t: 'ち' }, { t: '主', r: 'ぬし' }, { t: 'は' }, { t: '話', r: 'はな' },
          { t: 'し' }, { t: '合', r: 'あ' }, { t: 'い' }, { t: 'を' }, { t: '拒否', r: 'きょひ' },
          { t: 'し、' }, { t: '一方', r: 'いっぽう' }, { t: 'で' }, { t: '乱暴', r: 'らんぼう' }, { t: 'な' },
          { t: '態度', r: 'たいど' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'った。' },
        ],
        en: 'The owner refused to talk, and on the other hand took a rough attitude.',
      },
      {
        seg: [
          { t: '暴', r: 'あば' }, { t: 'れる' }, { t: 'わけ' }, { t: 'で' }, { t: 'は' },
          { t: 'ない' }, { t: 'が、' }, { t: '大声', r: 'おおごえ' }, { t: 'で' }, { t: 'おどかす' },
          { t: 'の' }, { t: 'は' }, { t: '暴力', r: 'ぼうりょく' }, { t: 'に' }, { t: '近', r: 'ちか' },
          { t: 'い。' },
        ],
        en: 'He does not exactly rage, but shouting to frighten people is close to violence.',
      },
      {
        seg: [
          { t: '無理', r: 'むり' }, { t: 'やり' }, { t: '近寄', r: 'ちかよ' }, { t: 'る' }, { t: 'の' },
          { t: 'は' }, { t: '危', r: 'あぶ' }, { t: 'ない' }, { t: 'と' }, { t: '言', r: 'い' },
          { t: 'われ、' }, { t: '距離', r: 'きょり' }, { t: 'は' }, { t: '縮', r: 'ちぢ' }, { t: 'まらなかった。' },
        ],
        en: 'We were told it was dangerous to approach forcibly, so the distance never narrowed.',
      },
      {
        seg: [
          { t: '住民', r: 'じゅうみん' }, { t: 'と' }, { t: '対立', r: 'たいりつ' }, { t: 'した' }, { t: 'まま、' },
          { t: 'ついに' }, { t: '裁判', r: 'さいばん' }, { t: 'に' }, { t: '訴', r: 'うった' }, { t: 'える' },
          { t: '人', r: 'ひと' }, { t: 'も' }, { t: '出', r: 'で' }, { t: 'た。' },
        ],
        en: 'Still in conflict with the residents, someone finally went so far as to sue.',
      },
      {
        seg: [
          { t: '犯罪', r: 'はんざい' }, { t: 'に' }, { t: '関', r: 'かか' }, { t: 'わる' }, { t: '話', r: 'はなし' },
          { t: 'で' }, { t: 'は' }, { t: 'ない' }, { t: 'と、' }, { t: '警察', r: 'けいさつ' },
          { t: 'の' }, { t: '捜査', r: 'そうさ' }, { t: 'で' }, { t: '明', r: 'あき' }, { t: 'らか' },
          { t: 'に' }, { t: 'なった。' },
        ],
        en: 'The police investigation made clear that it was not a matter involving crime.',
      },
      {
        seg: [
          { t: '証言', r: 'しょうげん' }, { t: 'が' }, { t: '一致', r: 'いっち' }, { t: 'し、' }, { t: '事実', r: 'じじつ' },
          { t: 'は' }, { t: 'ようやく' }, { t: '確定', r: 'かくてい' }, { t: 'した。' },
        ],
        en: 'The testimony matched, and the facts were at last confirmed.',
      },
      {
        seg: [
          { t: '本人', r: 'ほんにん' }, { t: 'が' }, { t: '自', r: 'みずか' }, { t: 'ら' }, { t: '居場所', r: 'いばしょ' },
          { t: 'を' }, { t: '告', r: 'つ' }, { t: 'げ、' }, { t: '態度', r: 'たいど' }, { t: 'を' },
          { t: '改', r: 'あらた' }, { t: 'めた。' },
        ],
        en: 'The man himself revealed his whereabouts and changed his attitude.',
      },
      {
        seg: [
          { t: 'あくまで' }, { t: '話', r: 'はな' }, { t: 'し' }, { t: '合', r: 'あ' }, { t: 'い' },
          { t: 'で' }, { t: '解決', r: 'かいけつ' }, { t: 'する' }, { t: 'の' }, { t: 'は、' },
          { t: '実', r: 'じつ' }, { t: 'に' }, { t: '困難', r: 'こんなん' }, { t: 'な' }, { t: 'こと' },
          { t: 'だった。' },
        ],
        en: 'Resolving it purely through discussion was truly a difficult thing.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 10,
    section: 2,
    title: '事故のニュース',
    targetWords: [
      '発生', '相次ぐ', '飛び出す', '一瞬', 'あり得ない', '荒っぽい', '少年', '取り締まり', '防止',
      '事情', '有無', '目撃', '判断', '見逃す', '行方', '未だに', '不明', '過失', '誤る', 'もめる',
      '予期', '流す', '爆発', '抜く', '火災', '消防車', '少なくとも', '救助',
    ],
    sentences: [
      {
        seg: [
          { t: '先月', r: 'せんげつ' }, { t: 'から、' }, { t: 'この' }, { t: '交差点', r: 'こうさてん' }, { t: 'で' },
          { t: '事故', r: 'じこ' }, { t: 'が' }, { t: '相次', r: 'あいつ' }, { t: 'いで' }, { t: '発生', r: 'はっせい' },
          { t: 'して' }, { t: 'いる。' },
        ],
        en: 'Since last month, accidents have been occurring one after another at this intersection.',
      },
      {
        seg: [
          { t: '子', r: 'こ' }, { t: 'ども' }, { t: 'が' }, { t: '急', r: 'きゅう' }, { t: 'に' },
          { t: '飛', r: 'と' }, { t: 'び' }, { t: '出', r: 'だ' }, { t: 'し、' }, { t: '一瞬', r: 'いっしゅん' },
          { t: 'の' }, { t: '判断', r: 'はんだん' }, { t: 'が' }, { t: '遅', r: 'おく' }, { t: 'れた。' },
        ],
        en: 'A child suddenly ran out, and the split-second judgment came too late.',
      },
      {
        seg: [
          { t: '荒', r: 'あら' }, { t: 'っぽい' }, { t: '運転', r: 'うんてん' }, { t: 'を' }, { t: 'する' },
          { t: '少年', r: 'しょうねん' }, { t: 'を、' }, { t: '何度', r: 'なんど' }, { t: 'か' }, { t: '目撃', r: 'もくげき' },
          { t: 'した。' },
        ],
        en: 'I witnessed a boy driving recklessly several times.',
      },
      {
        seg: [
          { t: '信号', r: 'しんごう' }, { t: 'を' }, { t: '見逃', r: 'みのが' }, { t: 'す' }, { t: 'の' },
          { t: 'は' }, { t: 'あり' }, { t: '得', r: 'え' }, { t: 'ない' }, { t: 'と' },
          { t: '言', r: 'い' }, { t: 'う' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: 'いる。' },
        ],
        en: 'Some people say overlooking a traffic light is unthinkable.',
      },
      {
        seg: [
          { t: '取', r: 'と' }, { t: 'り' }, { t: '締', r: 'し' }, { t: 'まり' }, { t: 'を' },
          { t: '強', r: 'つよ' }, { t: 'め、' }, { t: '事故', r: 'じこ' }, { t: 'の' }, { t: '防止', r: 'ぼうし' },
          { t: 'に' }, { t: '努', r: 'つと' }, { t: 'めて' }, { t: 'いる。' },
        ],
        en: 'They are strengthening enforcement and working to prevent accidents.',
      },
      {
        seg: [
          { t: '過失', r: 'かしつ' }, { t: 'の' }, { t: '有無', r: 'うむ' }, { t: 'を' }, { t: 'めぐって、' },
          { t: '双方', r: 'そうほう' }, { t: 'の' }, { t: '事情', r: 'じじょう' }, { t: 'が' }, { t: 'もめて' },
          { t: 'いる。' },
        ],
        en: 'Over whether there was negligence, the circumstances of both sides are in dispute.',
      },
      {
        seg: [
          { t: '判断', r: 'はんだん' }, { t: 'を' }, { t: '誤', r: 'あやま' }, { t: 'れば、' }, { t: '責任', r: 'せきにん' },
          { t: 'の' }, { t: '話', r: 'はなし' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'If the judgment is mistaken, it becomes a question of responsibility.',
      },
      {
        seg: [
          { t: '近', r: 'ちか' }, { t: 'く' }, { t: 'の' }, { t: '工場', r: 'こうじょう' }, { t: 'で' },
          { t: '火災', r: 'かさい' }, { t: 'が' }, { t: '起', r: 'お' }, { t: 'き、' }, { t: '爆発', r: 'ばくはつ' },
          { t: 'の' }, { t: '音', r: 'おと' }, { t: 'も' }, { t: '聞', r: 'き' }, { t: 'こえた。' },
        ],
        en: 'A fire broke out at a nearby factory, and the sound of an explosion was heard too.',
      },
      {
        seg: [
          { t: '消防車', r: 'しょうぼうしゃ' }, { t: 'が' }, { t: '何台', r: 'なんだい' }, { t: 'も' }, { t: '来', r: 'き' },
          { t: 'て、' }, { t: '救助', r: 'きゅうじょ' }, { t: 'に' }, { t: 'あたった。' },
        ],
        en: 'Many fire trucks came and set about the rescue.',
      },
      {
        seg: [
          { t: '少', r: 'すく' }, { t: 'なくとも' }, { t: '一人', r: 'ひとり' }, { t: 'の' }, { t: '行方', r: 'ゆくえ' },
          { t: 'が、' }, { t: '未', r: 'いま' }, { t: 'だに' }, { t: '不明', r: 'ふめい' }, { t: 'の' },
          { t: 'まま' }, { t: 'だ。' },
        ],
        en: 'At least one person’s whereabouts still remain unknown.',
      },
      {
        seg: [
          { t: '予期', r: 'よき' }, { t: 'しない' }, { t: '事故', r: 'じこ' }, { t: 'の' }, { t: '映像', r: 'えいぞう' },
          { t: 'が、' }, { t: 'くり返', r: 'かえ' }, { t: 'し' }, { t: '流', r: 'なが' }, { t: 'されて' },
          { t: 'いる。' },
        ],
        en: 'Footage of the unexpected accident is being broadcast repeatedly.',
      },
      {
        seg: [
          { t: 'ガス' }, { t: 'の' }, { t: '元栓', r: 'もとせん' }, { t: 'を' }, { t: '抜', r: 'ぬ' },
          { t: 'く' }, { t: 'よう、' }, { t: 'くり返', r: 'かえ' }, { t: 'し' }, { t: '呼', r: 'よ' },
          { t: 'びかけて' }, { t: 'いる。' },
        ],
        en: 'They are repeatedly calling on people to shut off the gas at the main.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 10,
    section: 3,
    title: '選挙の季節',
    targetWords: [
      '政策', '治める', '政党', '掲げる', '外交', 'コメント', '発言', '国会', '議論', '延びる',
      '大臣', '議員', '選挙', '演説', '支持', '各々', '莫大な', '不正', '思想', '改正', '実施',
      '要素', '成立', '事実', '隠す', '抱える', '支配', '非難', '要求', 'デモ', 'およそ', '関連',
    ],
    sentences: [
      {
        seg: [
          { t: '選挙', r: 'せんきょ' }, { t: 'が' }, { t: '近', r: 'ちか' }, { t: 'づき、' }, { t: '駅前', r: 'えきまえ' },
          { t: 'で' }, { t: '演説', r: 'えんぜつ' }, { t: 'を' }, { t: '聞', r: 'き' }, { t: 'く' },
          { t: '機会', r: 'きかい' }, { t: 'が' }, { t: '増', r: 'ふ' }, { t: 'えた。' },
        ],
        en: 'As the election drew near, chances to hear speeches in front of the station increased.',
      },
      {
        seg: [
          { t: '各政党', r: 'かくせいとう' }, { t: 'が' }, { t: 'それぞれ' }, { t: 'の' }, { t: '政策', r: 'せいさく' },
          { t: 'を' }, { t: '掲', r: 'かか' }, { t: 'げて' }, { t: 'いる。' },
        ],
        en: 'Each political party is putting forward its own policies.',
      },
      {
        seg: [
          { t: 'ある' }, { t: '議員', r: 'ぎいん' }, { t: 'の' }, { t: '発言', r: 'はつげん' }, { t: 'に、' },
          { t: '大臣', r: 'だいじん' }, { t: 'が' }, { t: 'すぐ' }, { t: 'コメント' }, { t: 'を' },
          { t: '出', r: 'だ' }, { t: 'した。' },
        ],
        en: 'A minister immediately issued a comment on one legislator’s remark.',
      },
      {
        seg: [
          { t: '国会', r: 'こっかい' }, { t: 'で' }, { t: 'の' }, { t: '議論', r: 'ぎろん' }, { t: 'は' },
          { t: '延', r: 'の' }, { t: 'び、' }, { t: '法', r: 'ほう' }, { t: 'の' }, { t: '改正', r: 'かいせい' },
          { t: 'は' }, { t: 'まだ' }, { t: '成立', r: 'せいりつ' }, { t: 'して' }, { t: 'いない。' },
        ],
        en: 'Debate in the Diet dragged on, and the revision of the law has not yet passed.',
      },
      {
        seg: [
          { t: '外交', r: 'がいこう' }, { t: 'の' }, { t: '方針', r: 'ほうしん' }, { t: 'は、' }, { t: '支持', r: 'しじ' },
          { t: 'を' }, { t: '集', r: 'あつ' }, { t: 'める' }, { t: '大', r: 'おお' }, { t: 'きな' },
          { t: '要素', r: 'ようそ' }, { t: 'だ。' },
        ],
        en: 'Diplomatic policy is a major factor in gathering support.',
      },
      {
        seg: [
          { t: '莫大', r: 'ばくだい' }, { t: 'な' }, { t: '費用', r: 'ひよう' }, { t: 'が' }, { t: 'かかる' },
          { t: 'と' }, { t: '聞', r: 'き' }, { t: 'き、' }, { t: '有権者', r: 'ゆうけんしゃ' }, { t: 'は' },
          { t: '説明', r: 'せつめい' }, { t: 'を' }, { t: '要求', r: 'ようきゅう' }, { t: 'した。' },
        ],
        en: 'Hearing that enormous costs were involved, voters demanded an explanation.',
      },
      {
        seg: [
          { t: '不正', r: 'ふせい' }, { t: 'を' }, { t: '隠', r: 'かく' }, { t: 'した' }, { t: 'の' },
          { t: 'で' }, { t: 'は' }, { t: 'ない' }, { t: 'か' }, { t: 'と、' },
          { t: 'きびしい' }, { t: '非難', r: 'ひなん' }, { t: 'の' }, { t: '声', r: 'こえ' }, { t: 'が' },
          { t: '上', r: 'あ' }, { t: 'がった。' },
        ],
        en: 'Harsh voices of blame arose, suggesting that wrongdoing had been concealed.',
      },
      {
        seg: [
          { t: 'およそ' }, { t: '千人', r: 'せんにん' }, { t: 'が' }, { t: '集', r: 'あつ' }, { t: 'まり、' },
          { t: 'デモ' }, { t: 'が' }, { t: '行', r: 'おこな' }, { t: 'われた。' },
        ],
        en: 'About a thousand people gathered and a demonstration was held.',
      },
      {
        seg: [
          { t: '人', r: 'ひと' }, { t: 'は' }, { t: '各々', r: 'おのおの' }, { t: 'の' }, { t: '思想', r: 'しそう' },
          { t: 'を' }, { t: '持', r: 'も' }, { t: 'ち、' }, { t: '事実', r: 'じじつ' }, { t: 'の' },
          { t: '見方', r: 'みかた' }, { t: 'も' }, { t: '違', r: 'ちが' }, { t: 'う。' },
        ],
        en: 'People each hold their own ideology, and their view of the facts differs too.',
      },
      {
        seg: [
          { t: '国', r: 'くに' }, { t: 'を' }, { t: '治', r: 'おさ' }, { t: 'める' }, { t: '側', r: 'がわ' },
          { t: 'が' }, { t: 'すべて' }, { t: 'を' }, { t: '支配', r: 'しはい' }, { t: 'する' },
          { t: 'わけ' }, { t: 'で' }, { t: 'は' }, { t: 'ない。' },
        ],
        en: 'Those who govern the country do not control everything.',
      },
      {
        seg: [
          { t: '選挙', r: 'せんきょ' }, { t: 'に' }, { t: '関連', r: 'かんれん' }, { t: 'した' }, { t: '課題', r: 'かだい' },
          { t: 'を' }, { t: '多', r: 'おお' }, { t: 'く' }, { t: '抱', r: 'かか' }, { t: 'えた' },
          { t: 'まま、' }, { t: '実施', r: 'じっし' }, { t: 'の' }, { t: '日', r: 'ひ' }, { t: 'を' },
          { t: '迎', r: 'むか' }, { t: 'えた。' },
        ],
        en: 'Still facing many issues connected with the election, the day of voting arrived.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 10,
    section: 4,
    title: '社会とメディア',
    targetWords: [
      '反映', '貢献', '寄付', '平等', '復興', '義務', '制度', '景気', 'インフレ', '加速', '上回る',
      '予測', '見解', '増す', '水準', '深刻な', '呼びかける', '世間', '驚かす', 'ニーズ', '了承',
      '個人情報', 'プライバシー', '定着', '両立', 'システム', '煙', '公', 'マスコミ', 'メディア', '取材',
      '報道', '中継', '訂正', 'ただちに', 'コマーシャル',
    ],
    sentences: [
      {
        seg: [
          { t: '景気', r: 'けいき' }, { t: 'の' }, { t: '予測', r: 'よそく' }, { t: 'は' }, { t: '外', r: 'はず' },
          { t: 'れ、' }, { t: 'インフレ' }, { t: 'が' }, { t: '加速', r: 'かそく' }, { t: 'した。' },
        ],
        en: 'The economic forecast was wrong, and inflation accelerated.',
      },
      {
        seg: [
          { t: '物価', r: 'ぶっか' }, { t: 'は' }, { t: '去年', r: 'きょねん' }, { t: 'を' }, { t: '上回', r: 'うわまわ' },
          { t: 'り、' }, { t: '生活', r: 'せいかつ' }, { t: 'の' }, { t: '水準', r: 'すいじゅん' }, { t: 'を' },
          { t: '保', r: 'たも' }, { t: 'つ' }, { t: 'の' }, { t: 'が' }, { t: '深刻', r: 'しんこく' },
          { t: 'な' }, { t: '問題', r: 'もんだい' }, { t: 'に' }, { t: 'なった。' },
        ],
        en: 'Prices exceeded last year’s, and maintaining living standards became a serious problem.',
      },
      {
        seg: [
          { t: 'マスコミ' }, { t: 'が' }, { t: 'この' }, { t: '話題', r: 'わだい' }, { t: 'を' },
          { t: '大', r: 'おお' }, { t: 'きく' }, { t: '報道', r: 'ほうどう' }, { t: 'し、' }, { t: '世間', r: 'せけん' },
          { t: 'の' }, { t: '関心', r: 'かんしん' }, { t: 'が' }, { t: '増', r: 'ま' }, { t: 'した。' },
        ],
        en: 'The mass media reported this topic prominently, and public interest increased.',
      },
      {
        seg: [
          { t: '現場', r: 'げんば' }, { t: 'から' }, { t: 'の' }, { t: '中継', r: 'ちゅうけい' }, { t: 'で' },
          { t: 'は、' }, { t: '工場', r: 'こうじょう' }, { t: 'の' }, { t: '煙', r: 'けむり' }, { t: 'が' },
          { t: '映', r: 'うつ' }, { t: 'って' }, { t: 'いた。' },
        ],
        en: 'In the live relay from the scene, smoke from the factory was visible.',
      },
      {
        seg: [
          { t: '記者', r: 'きしゃ' }, { t: 'が' }, { t: '取材', r: 'しゅざい' }, { t: 'に' }, { t: '訪', r: 'おとず' },
          { t: 'れ、' }, { t: '個人情報', r: 'こじんじょうほう' }, { t: 'の' }, { t: '扱', r: 'あつか' }, { t: 'い' },
          { t: 'に' }, { t: 'ついて' }, { t: '了承', r: 'りょうしょう' }, { t: 'を' }, { t: '求', r: 'もと' },
          { t: 'めた。' },
        ],
        en: 'A reporter came to gather information and asked for consent regarding the handling of personal information.',
      },
      {
        seg: [
          { t: 'プライバシー' }, { t: 'を' }, { t: '守', r: 'まも' }, { t: 'る' }, { t: '制度', r: 'せいど' },
          { t: 'と' }, { t: 'システム' }, { t: 'が、' }, { t: 'ようやく' }, { t: '定着', r: 'ていちゃく' },
          { t: 'して' }, { t: 'きた。' },
        ],
        en: 'A framework and system protecting privacy have finally taken root.',
      },
      {
        seg: [
          { t: '専門家', r: 'せんもんか' }, { t: 'の' }, { t: '見解', r: 'けんかい' }, { t: 'は' }, { t: '分', r: 'わ' },
          { t: 'かれた' }, { t: 'まま' }, { t: 'だ。' },
        ],
        en: 'The views of the experts remain divided.',
      },
      {
        seg: [
          { t: '誤', r: 'あやま' }, { t: 'り' }, { t: 'が' }, { t: '分', r: 'わ' }, { t: 'かれば、' },
          { t: 'ただちに' }, { t: '訂正', r: 'ていせい' }, { t: 'を' }, { t: '出', r: 'だ' }, { t: 'す' },
          { t: 'の' }, { t: 'が' }, { t: 'メディア' }, { t: 'の' }, { t: '義務', r: 'ぎむ' },
          { t: 'だ。' },
        ],
        en: 'If an error is found, issuing a correction immediately is the media’s duty.',
      },
      {
        seg: [
          { t: 'コマーシャル' }, { t: 'は' }, { t: '人', r: 'ひと' }, { t: 'の' }, { t: 'ニーズ' },
          { t: 'を' }, { t: '反映', r: 'はんえい' }, { t: 'する' }, { t: 'と' }, { t: '言', r: 'い' },
          { t: 'われる。' },
        ],
        en: 'Commercials are said to reflect people’s needs.',
      },
      {
        seg: [
          { t: '災害', r: 'さいがい' }, { t: 'の' }, { t: 'あと、' }, { t: '復興', r: 'ふっこう' }, { t: 'へ' },
          { t: 'の' }, { t: '寄付', r: 'きふ' }, { t: 'を' }, { t: '広', r: 'ひろ' }, { t: 'く' },
          { t: '呼', r: 'よ' }, { t: 'びかけた。' },
        ],
        en: 'After the disaster, they widely appealed for donations toward reconstruction.',
      },
      {
        seg: [
          { t: '公', r: 'おおやけ' }, { t: 'の' }, { t: '場', r: 'ば' }, { t: 'で' }, { t: 'は、' },
          { t: 'だれ' }, { t: 'も' }, { t: 'が' }, { t: '平等', r: 'びょうどう' }, { t: 'に' },
          { t: '扱', r: 'あつか' }, { t: 'われる' }, { t: 'べき' }, { t: 'だ。' },
        ],
        en: 'In public settings, everyone should be treated equally.',
      },
      {
        seg: [
          { t: '仕事', r: 'しごと' }, { t: 'と' }, { t: '家庭', r: 'かてい' }, { t: 'を' }, { t: '両立', r: 'りょうりつ' },
          { t: 'させる' }, { t: '人', r: 'ひと' }, { t: 'が' }, { t: '増', r: 'ふ' }, { t: 'え、' },
          { t: '世間', r: 'せけん' }, { t: 'を' }, { t: '驚', r: 'おどろ' }, { t: 'かせた。' },
        ],
        en: 'The number of people balancing work and family increased, surprising society.',
      },
      {
        seg: [
          { t: '小', r: 'ちい' }, { t: 'さな' }, { t: '貢献', r: 'こうけん' }, { t: 'の' }, { t: '積', r: 'つ' },
          { t: 'み' }, { t: '重', r: 'かさ' }, { t: 'ね' }, { t: 'が、' }, { t: 'やがて' },
          { t: '大', r: 'おお' }, { t: 'きな' }, { t: '力', r: 'ちから' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'The accumulation of small contributions eventually becomes a great force.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 10,
    section: 5,
    title: '世界と環境',
    targetWords: [
      '国旗', '様々な', '国籍', '先進国', '呼称', '宗教', '異文化', '否定', '移民', '見方', '権利',
      '支援', '飢える', '占める', 'かつて', '主張', '交渉', '比較', '危機', 'テロ', '悲劇', '現に',
      '少子化', '主に', '環境', '温暖化', '開発', '調査', 'エネルギー', '無限', '節電', 'エコ',
      '省エネ', '汚染', '面積', '守る',
    ],
    sentences: [
      {
        seg: [
          { t: '会場', r: 'かいじょう' }, { t: 'に' }, { t: 'は' }, { t: '様々', r: 'さまざま' }, { t: 'な' },
          { t: '国旗', r: 'こっき' }, { t: 'が' }, { t: '並', r: 'なら' }, { t: 'び、' }, { t: '国籍', r: 'こくせき' },
          { t: 'も' }, { t: '宗教', r: 'しゅうきょう' }, { t: 'も' }, { t: '異', r: 'こと' }, { t: 'なる' },
          { t: '人', r: 'ひと' }, { t: 'が' }, { t: '集', r: 'あつ' }, { t: 'まった。' },
        ],
        en: 'Various national flags lined the venue, and people of different nationalities and religions gathered.',
      },
      {
        seg: [
          { t: '異文化', r: 'いぶんか' }, { t: 'を' }, { t: '否定', r: 'ひてい' }, { t: 'せず、' }, { t: '別', r: 'べつ' },
          { t: 'の' }, { t: '見方', r: 'みかた' }, { t: 'を' }, { t: '知', r: 'し' }, { t: 'る' },
          { t: 'こと' }, { t: 'から' }, { t: '始', r: 'はじ' }, { t: 'まる。' },
        ],
        en: 'It begins with not denying other cultures and learning a different perspective.',
      },
      {
        seg: [
          { t: '先進国', r: 'せんしんこく' }, { t: 'が' }, { t: '占', r: 'し' }, { t: 'める' }, { t: '責任', r: 'せきにん' },
          { t: 'は' }, { t: '大', r: 'おお' }, { t: 'きい' }, { t: 'と、' }, { t: 'かつて' },
          { t: 'から' }, { t: '主張', r: 'しゅちょう' }, { t: 'されて' }, { t: 'きた。' },
        ],
        en: 'It has long been argued that the responsibility borne by developed countries is great.',
      },
      {
        seg: [
          { t: '飢', r: 'う' }, { t: 'える' }, { t: '人', r: 'ひと' }, { t: 'へ' }, { t: 'の' },
          { t: '支援', r: 'しえん' }, { t: 'を' }, { t: 'めぐり、' }, { t: '各国', r: 'かっこく' }, { t: 'の' },
          { t: '交渉', r: 'こうしょう' }, { t: 'が' }, { t: '続', r: 'つづ' }, { t: 'く。' },
        ],
        en: 'Negotiations among nations continue over support for those who are starving.',
      },
      {
        seg: [
          { t: '移民', r: 'いみん' }, { t: 'の' }, { t: '権利', r: 'けんり' }, { t: 'を' }, { t: 'どう' },
          { t: '守', r: 'まも' }, { t: 'る' }, { t: 'か' }, { t: 'は、' }, { t: '現', r: 'げん' },
          { t: 'に' }, { t: '大', r: 'おお' }, { t: 'きな' }, { t: '課題', r: 'かだい' }, { t: 'だ。' },
        ],
        en: 'How to protect the rights of immigrants is in fact a major issue.',
      },
      {
        seg: [
          { t: 'テロ' }, { t: 'や' }, { t: '戦争', r: 'せんそう' }, { t: 'の' }, { t: '悲劇', r: 'ひげき' },
          { t: 'は、' }, { t: 'いま' }, { t: 'も' }, { t: '世界', r: 'せかい' }, { t: 'の' },
          { t: '危機', r: 'きき' }, { t: 'で' }, { t: 'ある。' },
        ],
        en: 'The tragedy of terrorism and war is still a crisis for the world.',
      },
      {
        seg: [
          { t: '日本', r: 'にほん' }, { t: 'で' }, { t: 'は' }, { t: '主', r: 'おも' }, { t: 'に' },
          { t: '少子化', r: 'しょうしか' }, { t: 'が' }, { t: '進', r: 'すす' }, { t: 'み、' }, { t: '社会', r: 'しゃかい' },
          { t: 'の' }, { t: '形', r: 'かたち' }, { t: 'が' }, { t: '変', r: 'か' }, { t: 'わって' },
          { t: 'いく。' },
        ],
        en: 'In Japan the declining birth rate is mainly advancing, and the shape of society is changing.',
      },
      {
        seg: [
          { t: '環境', r: 'かんきょう' }, { t: 'の' }, { t: '調査', r: 'ちょうさ' }, { t: 'で' }, { t: 'は、' },
          { t: '温暖化', r: 'おんだんか' }, { t: 'と' }, { t: '汚染', r: 'おせん' }, { t: 'の' }, { t: '関係', r: 'かんけい' },
          { t: 'が' }, { t: '比較', r: 'ひかく' }, { t: 'された。' },
        ],
        en: 'In the environmental survey, the relationship between global warming and pollution was compared.',
      },
      {
        seg: [
          { t: '森', r: 'もり' }, { t: 'の' }, { t: '面積', r: 'めんせき' }, { t: 'が' }, { t: '減', r: 'へ' },
          { t: 'る' }, { t: '一方', r: 'いっぽう' }, { t: 'で、' }, { t: '開発', r: 'かいはつ' }, { t: 'は' },
          { t: '止', r: 'と' }, { t: 'まらない。' },
        ],
        en: 'While the area of forest decreases, development does not stop.',
      },
      {
        seg: [
          { t: 'エネルギー' }, { t: 'は' }, { t: '無限', r: 'むげん' }, { t: 'で' }, { t: 'は' },
          { t: 'なく、' }, { t: '節電', r: 'せつでん' }, { t: 'や' }, { t: '省', r: 'しょう' }, { t: 'エネ' },
          { t: 'が' }, { t: '欠', r: 'か' }, { t: 'かせない。' },
        ],
        en: 'Energy is not limitless, and saving electricity and energy is essential.',
      },
      {
        seg: [
          { t: 'エコ' }, { t: 'という' }, { t: '呼称', r: 'こしょう' }, { t: 'だけ' }, { t: 'が' },
          { t: '広', r: 'ひろ' }, { t: 'まる' }, { t: 'の' }, { t: 'で' }, { t: 'は、' },
          { t: '意味', r: 'いみ' }, { t: 'が' }, { t: 'ない。' },
        ],
        en: 'It is meaningless if only the label “eco” spreads.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 11,
    section: 1,
    title: '人がら',
    targetWords: [
      '人柄', '性質', '向く', '温厚な', '社交的な', '活発な', '頑固', '素朴な', '無邪気', '謙虚な',
      '無口', '人見知り', 'おく病', '大胆な', 'なれなれしい', '厚かましい', '欲張り', 'ねばり強い',
      '大ざっぱな', 'だらしない', 'ルーズな', '短気', 'ひきょう', 'プライド', '典型的な', '要領', '乗り',
      '物事', '反面',
    ],
    sentences: [
      {
        seg: [
          { t: 'あの' }, { t: '人', r: 'ひと' }, { t: 'の' }, { t: '人柄', r: 'ひとがら' }, { t: 'は、' },
          { t: '温厚', r: 'おんこう' }, { t: 'で' }, { t: '謙虚', r: 'けんきょ' }, { t: 'だ。' },
        ],
        en: 'That person’s character is mild-mannered and humble.',
      },
      {
        seg: [
          { t: '社交的', r: 'しゃこうてき' }, { t: 'で' }, { t: '活発', r: 'かっぱつ' }, { t: 'な' }, { t: '一方', r: 'いっぽう、' },
          { t: '家', r: 'いえ' }, { t: 'で' }, { t: 'は' }, { t: '無口', r: 'むくち' }, { t: 'に' },
          { t: 'なる' }, { t: 'らしい。' },
        ],
        en: 'While sociable and lively, at home he apparently becomes quiet.',
      },
      {
        seg: [
          { t: '弟', r: 'おとうと' }, { t: 'は' }, { t: '人見知', r: 'ひとみし' }, { t: 'り' }, { t: 'で、' },
          { t: '少', r: 'すこ' }, { t: 'し' }, { t: 'おく病', r: 'びょう' }, { t: 'な' }, { t: '性質', r: 'せいしつ' },
          { t: 'だ。' },
        ],
        en: 'My younger brother is shy with strangers and somewhat timid by nature.',
      },
      {
        seg: [
          { t: '反面', r: 'はんめん、' }, { t: '決', r: 'き' }, { t: 'めた' }, { t: 'こと' }, { t: 'に' },
          { t: 'は' }, { t: 'ねばり強', r: 'づよ' }, { t: 'く' }, { t: '取', r: 'と' }, { t: 'り' },
          { t: '組', r: 'く' }, { t: 'む。' },
        ],
        en: 'On the other hand, he tackles what he has decided on tenaciously.',
      },
      {
        seg: [
          { t: '大胆', r: 'だいたん' }, { t: 'に' }, { t: '見', r: 'み' }, { t: 'える' }, { t: '人', r: 'ひと' },
          { t: 'が、' }, { t: '実', r: 'じつ' }, { t: 'は' }, { t: '慎重', r: 'しんちょう' }, { t: 'だ' },
          { t: 'という' }, { t: 'の' }, { t: 'も' }, { t: 'よく' }, { t: 'ある。' },
        ],
        en: 'It is common for someone who looks bold to actually be cautious.',
      },
      {
        seg: [
          { t: 'なれなれしい' }, { t: '態度', r: 'たいど' }, { t: 'や' }, { t: '厚', r: 'あつ' }, { t: 'かましい' },
          { t: '頼', r: 'たの' }, { t: 'み方', r: 'かた' }, { t: 'は、' }, { t: '印象', r: 'いんしょう' }, { t: 'を' },
          { t: '悪', r: 'わる' }, { t: 'く' }, { t: 'する。' },
        ],
        en: 'An overly familiar manner or a shameless way of asking makes a bad impression.',
      },
      {
        seg: [
          { t: '欲張', r: 'よくば' }, { t: 'り' }, { t: 'で' }, { t: '短気', r: 'たんき' }, { t: 'な' },
          { t: '人', r: 'ひと' }, { t: 'は、' }, { t: '物事', r: 'ものごと' }, { t: 'の' }, { t: '要領', r: 'ようりょう' },
          { t: 'を' }, { t: 'つかみ' }, { t: 'にくい。' },
        ],
        en: 'A greedy, short-tempered person finds it hard to grasp the gist of things.',
      },
      {
        seg: [
          { t: '大', r: 'おお' }, { t: 'ざっぱ' }, { t: 'で' }, { t: 'ルーズ' }, { t: 'な' },
          { t: 'ところ' }, { t: 'は、' }, { t: 'だらしない' }, { t: 'と' }, { t: '言', r: 'い' },
          { t: 'われて' }, { t: 'しまう。' },
        ],
        en: 'Being rough and lax gets you called slovenly.',
      },
      {
        seg: [
          { t: '責任', r: 'せきにん' }, { t: 'から' }, { t: '逃', r: 'に' }, { t: 'げる' }, { t: 'の' },
          { t: 'は' }, { t: 'ひきょう' }, { t: 'だ' }, { t: 'と、' }, { t: '父', r: 'ちち' },
          { t: 'は' }, { t: '頑固', r: 'がんこ' }, { t: 'に' }, { t: '言', r: 'い' }, { t: 'い' },
          { t: '続', r: 'つづ' }, { t: 'けた。' },
        ],
        en: 'My father stubbornly kept saying that running from responsibility is cowardly.',
      },
      {
        seg: [
          { t: '素朴', r: 'そぼく' }, { t: 'で' }, { t: '無邪気', r: 'むじゃき' }, { t: 'な' }, { t: '笑顔', r: 'えがお' },
          { t: 'は、' }, { t: 'だれ' }, { t: 'に' }, { t: 'でも' }, { t: '好', r: 'す' },
          { t: 'かれる。' },
        ],
        en: 'A simple, innocent smile is liked by everyone.',
      },
      {
        seg: [
          { t: 'プライド' }, { t: 'を' }, { t: '持', r: 'も' }, { t: 'つ' }, { t: 'の' },
          { t: 'は' }, { t: '悪', r: 'わる' }, { t: 'く' }, { t: 'ない' }, { t: 'が、' },
          { t: 'それ' }, { t: 'が' }, { t: '典型的', r: 'てんけいてき' }, { t: 'な' }, { t: '弱点', r: 'じゃくてん' },
          { t: 'に' }, { t: 'も' }, { t: 'なる。' },
        ],
        en: 'Having pride is not bad, but it also becomes a typical weakness.',
      },
      {
        seg: [
          { t: 'その' }, { t: '場', r: 'ば' }, { t: 'の' }, { t: '乗', r: 'の' }, { t: 'り' },
          { t: 'に' }, { t: '向', r: 'む' }, { t: 'く' }, { t: '人', r: 'ひと' }, { t: 'も' },
          { t: 'いれば、' }, { t: '静', r: 'しず' }, { t: 'か' }, { t: 'な' }, { t: '場', r: 'ば' },
          { t: 'に' }, { t: '向', r: 'む' }, { t: 'く' }, { t: '人', r: 'ひと' }, { t: 'も' },
          { t: 'いる。' },
        ],
        en: 'Some people suit the mood of a lively place, and others suit a quiet one.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 11,
    section: 2,
    title: '心地よい時間',
    targetWords: [
      '快適な', '快い', '心地よい', 'すがすがしい', 'リフレッシュ', '穏やかな', '心強い', '恋しい', '前向き',
      'めでたい', 'ラッキーな', '幸福', '張り切る', 'わくわく', 'そわそわ', 'うっとり', 'すっと', '気分転換',
    ],
    sentences: [
      {
        seg: [
          { t: '朝', r: 'あさ' }, { t: 'の' }, { t: '空気', r: 'くうき' }, { t: 'は' }, { t: 'すがすがしく、' },
          { t: '窓', r: 'まど' }, { t: 'を' }, { t: '開', r: 'あ' }, { t: 'ける' }, { t: 'と' },
          { t: '快', r: 'こころよ' }, { t: 'い' }, { t: '風', r: 'かぜ' }, { t: 'が' }, { t: '入', r: 'はい' },
          { t: 'る。' },
        ],
        en: 'The morning air is refreshing, and when I open the window a pleasant breeze comes in.',
      },
      {
        seg: [
          { t: '穏', r: 'おだ' }, { t: 'やか' }, { t: 'な' }, { t: '天気', r: 'てんき' }, { t: 'の' },
          { t: '日', r: 'ひ' }, { t: 'は、' }, { t: '散歩', r: 'さんぽ' }, { t: 'が' }, { t: 'いちばん' },
          { t: 'の' }, { t: '気分転換', r: 'きぶんてんかん' }, { t: 'だ。' },
        ],
        en: 'On calm days, a walk is the best change of mood.',
      },
      {
        seg: [
          { t: '公園', r: 'こうえん' }, { t: 'の' }, { t: 'ベンチ' }, { t: 'は' }, { t: '快適', r: 'かいてき' },
          { t: 'で、' }, { t: '心地', r: 'ここち' }, { t: 'よい' }, { t: '時間', r: 'じかん' }, { t: 'を' },
          { t: '過', r: 'す' }, { t: 'ごせる。' },
        ],
        en: 'The park bench is comfortable, and I can spend a pleasant time there.',
      },
      {
        seg: [
          { t: '花', r: 'はな' }, { t: 'の' }, { t: '香', r: 'かお' }, { t: 'り' }, { t: 'に' },
          { t: 'うっとり' }, { t: 'して、' }, { t: '気持', r: 'きも' }, { t: 'ち' }, { t: 'が' },
          { t: 'すっと' }, { t: '軽', r: 'かる' }, { t: 'く' }, { t: 'なった。' },
        ],
        en: 'Entranced by the scent of the flowers, my mood lifted with relief.',
      },
      {
        seg: [
          { t: '友', r: 'とも' }, { t: 'から' }, { t: 'の' }, { t: '手紙', r: 'てがみ' }, { t: 'は' },
          { t: '心強', r: 'こころづよ' }, { t: 'く、' }, { t: '前向', r: 'まえむ' }, { t: 'き' }, { t: 'な' },
          { t: '気持', r: 'きも' }, { t: 'ち' }, { t: 'に' }, { t: 'して' }, { t: 'くれる。' },
        ],
        en: 'A letter from a friend is reassuring and puts me in a positive frame of mind.',
      },
      {
        seg: [
          { t: '遠', r: 'とお' }, { t: 'く' }, { t: 'に' }, { t: 'いる' }, { t: 'と、' },
          { t: '故郷', r: 'こきょう' }, { t: 'の' }, { t: '味', r: 'あじ' }, { t: 'が' }, { t: '恋', r: 'こい' },
          { t: 'しく' }, { t: 'なる。' },
        ],
        en: 'When far away, I long for the tastes of home.',
      },
      {
        seg: [
          { t: 'あす' }, { t: 'の' }, { t: '旅行', r: 'りょこう' }, { t: 'を' }, { t: '思', r: 'おも' },
          { t: 'う' }, { t: 'と' }, { t: 'わくわく' }, { t: 'して、' }, { t: '夜', r: 'よる' },
          { t: 'から' }, { t: 'そわそわ' }, { t: 'して' }, { t: 'しまう。' },
        ],
        en: 'Thinking of tomorrow’s trip I get excited and end up restless from the evening.',
      },
      {
        seg: [
          { t: 'めでたい' }, { t: '知', r: 'し' }, { t: 'らせ' }, { t: 'が' }, { t: '届', r: 'とど' },
          { t: 'き、' }, { t: 'みんな' }, { t: 'が' }, { t: '張', r: 'は' }, { t: 'り' },
          { t: '切', r: 'き' }, { t: 'って' }, { t: '準備', r: 'じゅんび' }, { t: 'を' }, { t: '始', r: 'はじ' },
          { t: 'めた。' },
        ],
        en: 'Happy news arrived, and everyone enthusiastically began preparations.',
      },
      {
        seg: [
          { t: 'ラッキー' }, { t: 'な' }, { t: '一日', r: 'いちにち' }, { t: 'だった' }, { t: 'と' },
          { t: '言', r: 'い' }, { t: 'える' }, { t: 'の' }, { t: 'が、' }, { t: '小', r: 'ちい' },
          { t: 'さな' }, { t: '幸福', r: 'こうふく' }, { t: 'だ。' },
        ],
        en: 'Being able to say it was a lucky day is a small happiness.',
      },
      {
        seg: [
          { t: '週末', r: 'しゅうまつ' }, { t: 'に' }, { t: 'しっかり' }, { t: 'リフレッシュ' }, { t: 'すれば、' },
          { t: 'また' }, { t: '働', r: 'はたら' }, { t: 'ける。' },
        ],
        en: 'If I refresh myself properly at the weekend, I can work again.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 11,
    section: 3,
    title: 'つらい気持ち',
    targetWords: [
      'ゆううつ', 'みじめな', 'つらい', '心細い', '弱気', '落ち込む', '失望', '絶望', '傷つく',
      'わずらわしい', 'うんざり', '戸惑う', 'ためらう', '申し訳ない', 'すまない', '仕方ない', 'しまった',
      '恐れる', '情けない', '恥', '別に', '構わない',
    ],
    sentences: [
      {
        seg: [
          { t: '雨', r: 'あめ' }, { t: 'が' }, { t: '続', r: 'つづ' }, { t: 'く' }, { t: 'と、' },
          { t: 'なんとなく' }, { t: 'ゆううつ' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'When the rain continues, I somehow become gloomy.',
      },
      {
        seg: [
          { t: '一人', r: 'ひとり' }, { t: 'の' }, { t: '部屋', r: 'へや' }, { t: 'は' }, { t: '心細', r: 'こころぼそ' },
          { t: 'く、' }, { t: 'つらい' }, { t: '夜', r: 'よる' }, { t: 'も' }, { t: 'ある。' },
        ],
        en: 'A room alone feels lonely, and some nights are hard.',
      },
      {
        seg: [
          { t: '小', r: 'ちい' }, { t: 'さな' }, { t: '失敗', r: 'しっぱい' }, { t: 'で' }, { t: '落', r: 'お' },
          { t: 'ち' }, { t: '込', r: 'こ' }, { t: 'み、' }, { t: '自分', r: 'じぶん' }, { t: 'が' },
          { t: '情', r: 'なさ' }, { t: 'けなく' }, { t: '思', r: 'おも' }, { t: 'えた。' },
        ],
        en: 'I felt down over a small failure and thought myself pathetic.',
      },
      {
        seg: [
          { t: 'しまった' }, { t: 'と' }, { t: '気', r: 'き' }, { t: 'づいた' }, { t: 'とき' },
          { t: 'に' }, { t: 'は、' }, { t: 'もう' }, { t: '仕方', r: 'しかた' }, { t: 'なかった。' },
        ],
        en: 'By the time I realised I had messed up, nothing could be done.',
      },
      {
        seg: [
          { t: '相手', r: 'あいて' }, { t: 'を' }, { t: '傷', r: 'きず' }, { t: 'つけて' }, { t: 'しまい、' },
          { t: '申', r: 'もう' }, { t: 'し' }, { t: '訳', r: 'わけ' }, { t: 'ない' }, { t: '気持', r: 'きも' },
          { t: 'ち' }, { t: 'で' }, { t: 'いっぱい' }, { t: 'だ。' },
        ],
        en: 'I ended up hurting the other person and am full of a feeling of being sorry.',
      },
      {
        seg: [
          { t: 'すまない' }, { t: 'と' }, { t: '言', r: 'い' }, { t: 'う' }, { t: 'の' },
          { t: 'を' }, { t: 'ためらい、' }, { t: 'かえって' }, { t: '戸惑', r: 'とまど' }, { t: 'わせた。' },
        ],
        en: 'I hesitated to say sorry and ended up confusing them instead.',
      },
      {
        seg: [
          { t: '細', r: 'こま' }, { t: 'かい' }, { t: '手続', r: 'てつづ' }, { t: 'き' }, { t: 'が' },
          { t: 'わずらわしく、' }, { t: 'いいかげん' }, { t: 'うんざり' }, { t: 'して' }, { t: 'きた。' },
        ],
        en: 'The detailed procedures are troublesome, and I have become quite fed up.',
      },
      {
        seg: [
          { t: '期待', r: 'きたい' }, { t: 'が' }, { t: '大', r: 'おお' }, { t: 'きい' }, { t: 'ほど、' },
          { t: '失望', r: 'しつぼう' }, { t: 'も' }, { t: '大', r: 'おお' }, { t: 'きい。' },
        ],
        en: 'The greater the expectation, the greater the disappointment.',
      },
      {
        seg: [
          { t: '絶望', r: 'ぜつぼう' }, { t: 'する' }, { t: 'ほど' }, { t: 'で' }, { t: 'は' },
          { t: 'ない' }, { t: 'と、' }, { t: '弱気', r: 'よわき' }, { t: 'に' }, { t: 'なる' },
          { t: '自分', r: 'じぶん' }, { t: 'を' }, { t: 'はげました。' },
        ],
        en: 'Telling myself it was not so bad as to despair, I encouraged my faint-hearted self.',
      },
      {
        seg: [
          { t: '失敗', r: 'しっぱい' }, { t: 'を' }, { t: '恐', r: 'おそ' }, { t: 'れる' }, { t: 'の' },
          { t: 'は、' }, { t: '恥', r: 'はじ' }, { t: 'を' }, { t: 'かきたく' }, { t: 'ない' },
          { t: 'から' }, { t: 'だ。' },
        ],
        en: 'Fearing failure is because one does not want to feel shame.',
      },
      {
        seg: [
          { t: '別', r: 'べつ' }, { t: 'に' }, { t: '気', r: 'き' }, { t: 'に' }, { t: 'して' },
          { t: 'いない、' }, { t: 'と' }, { t: '言', r: 'い' }, { t: 'われて' }, { t: '少', r: 'すこ' },
          { t: 'し' }, { t: '楽', r: 'らく' }, { t: 'に' }, { t: 'なった。' },
        ],
        en: 'Being told “I don’t especially mind” made me feel a little easier.',
      },
      {
        seg: [
          { t: 'だれ' }, { t: 'が' }, { t: 'どう' }, { t: '思', r: 'おも' }, { t: 'おう' },
          { t: 'と' }, { t: '構', r: 'かま' }, { t: 'わない' }, { t: 'と' }, { t: '思', r: 'おも' },
          { t: 'えた' }, { t: 'とき、' }, { t: 'みじめ' }, { t: 'さ' }, { t: 'が' },
          { t: '消', r: 'き' }, { t: 'えた。' },
        ],
        en: 'When I could think that it did not matter what anyone thought, the misery vanished.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 11,
    section: 4,
    title: 'よい印象',
    targetWords: [
      'はきはき', '清潔な', '客観的な', '冷静な', 'もっともな', '謙そん', '若々しい', 'ユニークな', '唯一',
      '洗練', '品', '広々と', 'ふわふわ', '断然', '結構な', '見事な', '貴重な', '質素', '同様な',
    ],
    sentences: [
      {
        seg: [
          { t: '彼女', r: 'かのじょ' }, { t: 'は' }, { t: 'はきはき' }, { t: 'と' }, { t: '話', r: 'はな' },
          { t: 'し、' }, { t: 'いつも' }, { t: '冷静', r: 'れいせい' }, { t: 'で' }, { t: '客観的', r: 'きゃっかんてき' },
          { t: 'だ。' },
        ],
        en: 'She speaks briskly and is always calm and objective.',
      },
      {
        seg: [
          { t: 'その' }, { t: '指摘', r: 'してき' }, { t: 'は' }, { t: 'もっとも' }, { t: 'な' },
          { t: 'もの' }, { t: 'で、' }, { t: 'だれ' }, { t: 'も' }, { t: '反対', r: 'はんたい' },
          { t: 'しなかった。' },
        ],
        en: 'That observation was quite reasonable, and no one objected.',
      },
      {
        seg: [
          { t: '謙', r: 'けん' }, { t: 'そん' }, { t: 'し' }, { t: 'ながら' }, { t: 'も、' },
          { t: '品', r: 'ひん' }, { t: 'の' }, { t: 'ある' }, { t: 'ふるまい' }, { t: 'が' },
          { t: '印象', r: 'いんしょう' }, { t: 'に' }, { t: '残', r: 'のこ' }, { t: 'る。' },
        ],
        en: 'While modest, her graceful conduct leaves an impression.',
      },
      {
        seg: [
          { t: '部屋', r: 'へや' }, { t: 'は' }, { t: '清潔', r: 'せいけつ' }, { t: 'で、' }, { t: '広々', r: 'ひろびろ' },
          { t: 'と' }, { t: 'して' }, { t: 'いる。' },
        ],
        en: 'The room is clean and spacious.',
      },
      {
        seg: [
          { t: '質素', r: 'しっそ' }, { t: 'な' }, { t: '家具', r: 'かぐ' }, { t: 'だ' }, { t: 'が、' },
          { t: 'どれ' }, { t: 'も' }, { t: '洗練', r: 'せんれん' }, { t: 'されて' }, { t: 'いる。' },
        ],
        en: 'The furniture is simple, but every piece is refined.',
      },
      {
        seg: [
          { t: 'ふわふわ' }, { t: 'の' }, { t: 'クッション' }, { t: 'は、' }, { t: '断然', r: 'だんぜん' },
          { t: 'すわり' }, { t: '心地', r: 'ごこち' }, { t: 'が' }, { t: 'よい。' },
        ],
        en: 'The fluffy cushion is definitely the most comfortable to sit on.',
      },
      {
        seg: [
          { t: '祖母', r: 'そぼ' }, { t: 'は' }, { t: '年', r: 'とし' }, { t: 'より' }, { t: '若々', r: 'わかわか' },
          { t: 'しく、' }, { t: '見事', r: 'みごと' }, { t: 'な' }, { t: '庭', r: 'にわ' }, { t: 'を' },
          { t: '育', r: 'そだ' }, { t: 'てて' }, { t: 'いる。' },
        ],
        en: 'My grandmother looks youthful for her age and tends a splendid garden.',
      },
      {
        seg: [
          { t: 'ユニーク' }, { t: 'な' }, { t: '発想', r: 'はっそう' }, { t: 'は、' }, { t: 'この' },
          { t: '町', r: 'まち' }, { t: 'で' }, { t: '唯一', r: 'ゆいいつ' }, { t: 'の' }, { t: 'もの' },
          { t: 'だ。' },
        ],
        en: 'The unique idea is the only one of its kind in this town.',
      },
      {
        seg: [
          { t: '同様', r: 'どうよう' }, { t: 'な' }, { t: '例', r: 'れい' }, { t: 'は' }, { t: '少', r: 'すく' },
          { t: 'なく、' }, { t: 'だから' }, { t: 'こそ' }, { t: '貴重', r: 'きちょう' }, { t: 'だ。' },
        ],
        en: 'Similar examples are few, and that is precisely why it is valuable.',
      },
      {
        seg: [
          { t: '結構', r: 'けっこう' }, { t: 'な' }, { t: 'もの' }, { t: 'を' }, { t: 'いただき、' },
          { t: 'ありがたく' }, { t: '思', r: 'おも' }, { t: 'った。' },
        ],
        en: 'I received something fine and felt grateful.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 11,
    section: 5,
    title: 'よくない印象',
    targetWords: [
      '憎らしい', '強引な', 'うっとうしい', 'やっかい', 'とんでもない', '安易な', '無難な', '平凡な',
      'みっともない', '見苦しい', 'みにくい', 'ぼろぼろな', 'あわれな', '乏しい', '中途半端', 'まごまご',
      '矛盾', 'にやにや', 'でこぼこ', 'それなり',
    ],
    sentences: [
      {
        seg: [
          { t: '強引', r: 'ごういん' }, { t: 'な' }, { t: '進', r: 'すす' }, { t: 'め方', r: 'かた' }, { t: 'は、' },
          { t: '見', r: 'み' }, { t: 'ていて' }, { t: 'うっとうしい。' },
        ],
        en: 'A pushy way of proceeding is annoying to watch.',
      },
      {
        seg: [
          { t: '言', r: 'い' }, { t: 'う' }, { t: 'こと' }, { t: 'に' }, { t: '矛盾', r: 'むじゅん' },
          { t: 'が' }, { t: 'あり、' }, { t: '説明', r: 'せつめい' }, { t: 'も' }, { t: '中途半端', r: 'ちゅうとはんぱ' },
          { t: 'だった。' },
        ],
        en: 'There were contradictions in what he said, and the explanation was half-hearted too.',
      },
      {
        seg: [
          { t: '人前', r: 'ひとまえ' }, { t: 'で' }, { t: '争', r: 'あらそ' }, { t: 'う' }, { t: 'の' },
          { t: 'は' }, { t: 'みっともなく、' }, { t: '見苦', r: 'みぐる' }, { t: 'しい。' },
        ],
        en: 'Quarrelling in front of others is disgraceful and unsightly.',
      },
      {
        seg: [
          { t: 'にやにや' }, { t: 'し' }, { t: 'ながら' }, { t: '話', r: 'はな' }, { t: 'す' },
          { t: '態度', r: 'たいど' }, { t: 'が、' }, { t: 'なんとも' }, { t: '憎', r: 'にく' }, { t: 'らしい。' },
        ],
        en: 'His manner of talking while smirking is truly detestable.',
      },
      {
        seg: [
          { t: '安易', r: 'あんい' }, { t: 'な' }, { t: '答', r: 'こた' }, { t: 'え' }, { t: 'ばかり' },
          { t: 'で、' }, { t: '内容', r: 'ないよう' }, { t: 'が' }, { t: '乏', r: 'とぼ' }, { t: 'しい。' },
        ],
        en: 'There are only easy answers, and the content is scarce.',
      },
      {
        seg: [
          { t: '無難', r: 'ぶなん' }, { t: 'だ' }, { t: 'が' }, { t: '平凡', r: 'へいぼん' }, { t: 'な' },
          { t: '案', r: 'あん' }, { t: 'で、' }, { t: 'だれ' }, { t: 'の' }, { t: '心', r: 'こころ' },
          { t: 'に' }, { t: 'も' }, { t: '残', r: 'のこ' }, { t: 'らない。' },
        ],
        en: 'It is a safe but ordinary proposal that stays in no one’s heart.',
      },
      {
        seg: [
          { t: '道', r: 'みち' }, { t: 'が' }, { t: 'でこぼこ' }, { t: 'で、' }, { t: '靴', r: 'くつ' },
          { t: 'は' }, { t: 'もう' }, { t: 'ぼろぼろ' }, { t: 'だ。' },
        ],
        en: 'The road is bumpy and my shoes are already worn out.',
      },
      {
        seg: [
          { t: 'とんでもない' }, { t: '手違', r: 'てちが' }, { t: 'い' }, { t: 'が' }, { t: '起', r: 'お' },
          { t: 'き、' }, { t: '現場', r: 'げんば' }, { t: 'で' }, { t: 'まごまご' }, { t: 'して' },
          { t: 'しまった。' },
        ],
        en: 'An outrageous mistake occurred and I fumbled about at the scene.',
      },
      {
        seg: [
          { t: 'やっかい' }, { t: 'な' }, { t: '仕事', r: 'しごと' }, { t: 'でも、' }, { t: 'それなり' },
          { t: 'に' }, { t: '学', r: 'まな' }, { t: 'ぶ' }, { t: 'もの' }, { t: 'は' },
          { t: 'ある。' },
        ],
        en: 'Even troublesome work has something to learn from, in its own way.',
      },
      {
        seg: [
          { t: 'あわれ' }, { t: 'な' }, { t: '姿', r: 'すがた' }, { t: 'を' }, { t: 'みにくい' },
          { t: 'と' }, { t: '笑', r: 'わら' }, { t: 'う' }, { t: '人', r: 'ひと' }, { t: 'に' },
          { t: 'は' }, { t: 'なりたく' }, { t: 'ない。' },
        ],
        en: 'I do not want to become someone who laughs at a pitiful sight as ugly.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 12,
    section: 1,
    title: '気持ちを表すことば',
    targetWords: [
      '気が早い', '気が重い', '気が合う', '気が利く', '気がつく', '気が強い', '気が小さい', '気を遣う',
      '気が進まない', '気にかかる', '気にくわない', '心が通う', '心が狭い', '心が動く', '心を配る',
      '心を引かれる', '心を許す', '胸が痛む', '胸が一杯になる', '胸をはずませる',
    ],
    sentences: [
      {
        seg: [
          { t: '来月', r: 'らいげつ' }, { t: 'の' }, { t: '話', r: 'はなし' }, { t: 'を' }, { t: 'もう' },
          { t: '始', r: 'はじ' }, { t: 'める' }, { t: 'なんて、' }, { t: '兄', r: 'あに' }, { t: 'は' },
          { t: '気', r: 'き' }, { t: 'が' }, { t: '早', r: 'はや' }, { t: 'い。' },
        ],
        en: 'Already starting to talk about next month — my brother is too hasty.',
      },
      {
        seg: [
          { t: '会議', r: 'かいぎ' }, { t: 'の' }, { t: 'こと' }, { t: 'を' }, { t: '思', r: 'おも' },
          { t: 'う' }, { t: 'と' }, { t: '気', r: 'き' }, { t: 'が' }, { t: '重', r: 'おも' },
          { t: 'く、' }, { t: 'なんとなく' }, { t: '気', r: 'き' }, { t: 'が' }, { t: '進', r: 'すす' },
          { t: 'まない。' },
        ],
        en: 'Thinking about the meeting makes me heavy-hearted, and I somehow do not feel like it.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'と' }, { t: 'は' }, { t: '昔', r: 'むかし' }, { t: 'から' },
          { t: '気', r: 'き' }, { t: 'が' }, { t: '合', r: 'あ' }, { t: 'い、' }, { t: '心', r: 'こころ' },
          { t: 'を' }, { t: '許', r: 'ゆる' }, { t: 'せる' }, { t: '数少', r: 'かずすく' }, { t: 'ない' },
          { t: '友', r: 'とも' }, { t: 'だ。' },
        ],
        en: 'He and I have got along since long ago, and he is one of the few friends I can open my heart to.',
      },
      {
        seg: [
          { t: '気', r: 'き' }, { t: 'が' }, { t: '利', r: 'き' }, { t: 'く' }, { t: '人', r: 'ひと' },
          { t: 'は、' }, { t: 'まわり' }, { t: 'に' }, { t: 'よく' }, { t: '心', r: 'こころ' },
          { t: 'を' }, { t: '配', r: 'くば' }, { t: 'って' }, { t: 'いる。' },
        ],
        en: 'A thoughtful person pays careful attention to those around them.',
      },
      {
        seg: [
          { t: '姉', r: 'あね' }, { t: 'は' }, { t: '気', r: 'き' }, { t: 'が' }, { t: '強', r: 'つよ' },
          { t: 'い' }, { t: 'が、' }, { t: '実', r: 'じつ' }, { t: 'は' }, { t: '気', r: 'き' },
          { t: 'が' }, { t: '小', r: 'ちい' }, { t: 'さい' }, { t: 'ところ' }, { t: 'も' },
          { t: 'ある。' },
        ],
        en: 'My older sister is strong-willed, but in fact she has a timid side too.',
      },
      {
        seg: [
          { t: '人', r: 'ひと' }, { t: 'に' }, { t: '気', r: 'き' }, { t: 'を' }, { t: '遣', r: 'つか' },
          { t: 'い' }, { t: 'すぎて' }, { t: '疲', r: 'つか' }, { t: 'れる' }, { t: 'こと' },
          { t: 'に、' }, { t: '最近', r: 'さいきん' }, { t: '気', r: 'き' }, { t: 'が' }, { t: 'ついた。' },
        ],
        en: 'I recently noticed that I tire myself out being too considerate of others.',
      },
      {
        seg: [
          { t: '言', r: 'い' }, { t: 'い方', r: 'かた' }, { t: 'が' }, { t: '気', r: 'き' }, { t: 'に' },
          { t: 'くわない' }, { t: 'と' }, { t: 'いう' }, { t: 'だけ' }, { t: 'で' },
          { t: '怒', r: 'おこ' }, { t: 'る' }, { t: 'の' }, { t: 'は、' }, { t: '心', r: 'こころ' },
          { t: 'が' }, { t: '狭', r: 'せま' }, { t: 'い。' },
        ],
        en: 'Getting angry merely because you dislike how something was said is narrow-minded.',
      },
      {
        seg: [
          { t: '友', r: 'とも' }, { t: 'の' }, { t: '話', r: 'はなし' }, { t: 'を' }, { t: '聞', r: 'き' },
          { t: 'いて' }, { t: '心', r: 'こころ' }, { t: 'が' }, { t: '動', r: 'うご' }, { t: 'き、' },
          { t: '胸', r: 'むね' }, { t: 'が' }, { t: '痛', r: 'いた' }, { t: 'んだ。' },
        ],
        en: 'Listening to my friend’s story moved me and made my heart ache.',
      },
      {
        seg: [
          { t: 'その' }, { t: '絵', r: 'え' }, { t: 'に' }, { t: 'は' }, { t: 'なぜ' },
          { t: 'か' }, { t: '心', r: 'こころ' }, { t: 'を' }, { t: '引', r: 'ひ' }, { t: 'かれ、' },
          { t: '長', r: 'なが' }, { t: 'く' }, { t: '立', r: 'た' }, { t: 'ち' }, { t: '止', r: 'ど' },
          { t: 'まった。' },
        ],
        en: 'For some reason I was drawn to that painting and stood there a long time.',
      },
      {
        seg: [
          { t: '久', r: 'ひさ' }, { t: 'しぶりの' }, { t: '再会', r: 'さいかい' }, { t: 'に' }, { t: '胸', r: 'むね' },
          { t: 'を' }, { t: 'はずませ、' }, { t: '会', r: 'あ' }, { t: 'った' }, { t: '瞬間', r: 'しゅんかん' },
          { t: 'は' }, { t: '胸', r: 'むね' }, { t: 'が' }, { t: '一杯', r: 'いっぱい' }, { t: 'に' },
          { t: 'なった。' },
        ],
        en: 'My heart raced at the long-awaited reunion, and the moment we met I was overwhelmed.',
      },
      {
        seg: [
          { t: '言', r: 'い' }, { t: 'えなかった' }, { t: '一言', r: 'ひとこと' }, { t: 'が、' }, { t: 'いま' },
          { t: 'も' }, { t: '気', r: 'き' }, { t: 'に' }, { t: 'かかって' }, { t: 'いる。' },
        ],
        en: 'The one thing I could not say is still on my mind.',
      },
      {
        seg: [
          { t: 'たがいに' }, { t: '心', r: 'こころ' }, { t: 'が' }, { t: '通', r: 'かよ' }, { t: 'えば、' },
          { t: '多', r: 'おお' }, { t: 'く' }, { t: 'の' }, { t: '言葉', r: 'ことば' }, { t: 'は' },
          { t: 'いらない。' },
        ],
        en: 'If hearts understand each other, many words are unnecessary.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 12,
    section: 2,
    title: '顔とからだの慣用句',
    targetWords: [
      '頭が痛い', '頭が固い', '頭にくる', '頭が下がる', '顔が広い', '顔を出す', '目がない', '目が離せない',
      '目が回る', '目に浮かぶ', '目にする', '目に付く', '目を疑う', '目を向ける', '目を通す', '耳が痛い',
      '耳が遠い', '耳にする', '耳を傾ける', '耳を疑う', '口がうまい', '口が堅い', '口が軽い', '口が重い',
      '口が滑る', '口が悪い', '口にする', '口に合う', '口を出す',
    ],
    sentences: [
      {
        seg: [
          { t: '予算', r: 'よさん' }, { t: 'の' }, { t: 'こと' }, { t: 'で' }, { t: '頭', r: 'あたま' },
          { t: 'が' }, { t: '痛', r: 'いた' }, { t: 'く、' }, { t: '朝', r: 'あさ' }, { t: 'から' },
          { t: '目', r: 'め' }, { t: 'が' }, { t: '回', r: 'まわ' }, { t: 'る' }, { t: '忙', r: 'いそが' },
          { t: 'しさ' }, { t: 'だ。' },
        ],
        en: 'The budget gives me a headache, and I have been dizzyingly busy since morning.',
      },
      {
        seg: [
          { t: '部長', r: 'ぶちょう' }, { t: 'は' }, { t: '頭', r: 'あたま' }, { t: 'が' }, { t: '固', r: 'かた' },
          { t: 'い' }, { t: 'ところ' }, { t: 'が' }, { t: 'ある' }, { t: 'が、' },
          { t: 'その' }, { t: '努力', r: 'どりょく' }, { t: 'に' }, { t: 'は' }, { t: '頭', r: 'あたま' },
          { t: 'が' }, { t: '下', r: 'さ' }, { t: 'がる。' },
        ],
        en: 'The manager has an inflexible side, but his effort earns my respect.',
      },
      {
        seg: [
          { t: '資料', r: 'しりょう' }, { t: 'に' }, { t: '目', r: 'め' }, { t: 'を' }, { t: '通', r: 'とお' },
          { t: 'す' }, { t: 'と、' }, { t: '誤', r: 'あやま' }, { t: 'り' }, { t: 'が' },
          { t: 'いくつ' }, { t: 'も' }, { t: '目', r: 'め' }, { t: 'に' }, { t: '付', r: 'つ' },
          { t: 'いた。' },
        ],
        en: 'Looking over the documents, several errors caught my eye.',
      },
      {
        seg: [
          { t: '数字', r: 'すうじ' }, { t: 'を' }, { t: '目', r: 'め' }, { t: 'に' }, { t: 'した' },
          { t: 'とき、' }, { t: '思', r: 'おも' }, { t: 'わず' }, { t: '目', r: 'め' }, { t: 'を' },
          { t: '疑', r: 'うたが' }, { t: 'った。' },
        ],
        en: 'When I saw the figures, I could not help doubting my eyes.',
      },
      {
        seg: [
          { t: '先輩', r: 'せんぱい' }, { t: 'は' }, { t: '顔', r: 'かお' }, { t: 'が' }, { t: '広', r: 'ひろ' },
          { t: 'く、' }, { t: 'どの' }, { t: '部署', r: 'ぶしょ' }, { t: 'に' }, { t: 'も' },
          { t: 'よく' }, { t: '顔', r: 'かお' }, { t: 'を' }, { t: '出', r: 'だ' }, { t: 'す。' },
        ],
        en: 'My senior is well-connected and often shows up in every department.',
      },
      {
        seg: [
          { t: '注意', r: 'ちゅうい' }, { t: 'を' }, { t: '受', r: 'う' }, { t: 'けて' }, { t: '耳', r: 'みみ' },
          { t: 'が' }, { t: '痛', r: 'いた' }, { t: 'かった' }, { t: 'が、' }, { t: 'まっすぐ' },
          { t: '耳', r: 'みみ' }, { t: 'を' }, { t: '傾', r: 'かたむ' }, { t: 'けた。' },
        ],
        en: 'The reprimand hit close to home, but I listened attentively.',
      },
      {
        seg: [
          { t: '祖父', r: 'そふ' }, { t: 'は' }, { t: '耳', r: 'みみ' }, { t: 'が' }, { t: '遠', r: 'とお' },
          { t: 'く、' }, { t: 'うわさ' }, { t: 'を' }, { t: '耳', r: 'みみ' }, { t: 'に' },
          { t: 'する' }, { t: 'こと' }, { t: 'も' }, { t: 'ない。' },
        ],
        en: 'My grandfather is hard of hearing and never hears the rumours.',
      },
      {
        seg: [
          { t: 'その' }, { t: '知', r: 'し' }, { t: 'らせ' }, { t: 'を' }, { t: '聞', r: 'き' },
          { t: 'いた' }, { t: 'とき' }, { t: 'は、' }, { t: '耳', r: 'みみ' }, { t: 'を' },
          { t: '疑', r: 'うたが' }, { t: 'った。' },
        ],
        en: 'When I heard that news, I could not believe my ears.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'は' }, { t: '口', r: 'くち' }, { t: 'が' }, { t: 'うまい' },
          { t: 'が' }, { t: '口', r: 'くち' }, { t: 'が' }, { t: '軽', r: 'かる' }, { t: 'く、' },
          { t: 'つい' }, { t: '口', r: 'くち' }, { t: 'が' }, { t: '滑', r: 'すべ' }, { t: 'る。' },
        ],
        en: 'He is smooth-talking but loose-lipped, and things slip out.',
      },
      {
        seg: [
          { t: 'その' }, { t: '点', r: 'てん、' }, { t: '彼女', r: 'かのじょ' }, { t: 'は' }, { t: '口', r: 'くち' },
          { t: 'が' }, { t: '堅', r: 'かた' }, { t: 'い。' }, { t: '口', r: 'くち' }, { t: 'が' },
          { t: '重', r: 'おも' }, { t: 'い' }, { t: 'だけ' }, { t: 'で' }, { t: 'は' },
          { t: 'ない。' },
        ],
        en: 'In that respect she is tight-lipped — and not merely taciturn.',
      },
      {
        seg: [
          { t: '口', r: 'くち' }, { t: 'が' }, { t: '悪', r: 'わる' }, { t: 'い' }, { t: '人', r: 'ひと' },
          { t: 'ほど、' }, { t: '人', r: 'ひと' }, { t: 'の' }, { t: 'こと' }, { t: 'に' },
          { t: '口', r: 'くち' }, { t: 'を' }, { t: '出', r: 'だ' }, { t: 'したがる。' },
        ],
        en: 'The more foul-mouthed a person is, the more they want to interfere in others’ affairs.',
      },
      {
        seg: [
          { t: '母', r: 'はは' }, { t: 'の' }, { t: '料理', r: 'りょうり' }, { t: 'は' }, { t: 'いつも' },
          { t: '口', r: 'くち' }, { t: 'に' }, { t: '合', r: 'あ' }, { t: 'い、' }, { t: '甘', r: 'あま' },
          { t: 'い' }, { t: 'もの' }, { t: 'に' }, { t: 'は' }, { t: '目', r: 'め' },
          { t: 'が' }, { t: 'ない。' },
        ],
        en: 'My mother’s cooking always suits my taste, and I have a weakness for sweet things.',
      },
      {
        seg: [
          { t: '新人', r: 'しんじん' }, { t: 'の' }, { t: '成長', r: 'せいちょう' }, { t: 'は' }, { t: '目', r: 'め' },
          { t: 'が' }, { t: '離', r: 'はな' }, { t: 'せず、' }, { t: 'その' }, { t: '姿', r: 'すがた' },
          { t: 'が' }, { t: '目', r: 'め' }, { t: 'に' }, { t: '浮', r: 'う' }, { t: 'かぶ。' },
        ],
        en: 'I cannot take my eyes off the newcomer’s growth, and I can picture them clearly.',
      },
      {
        seg: [
          { t: '一度', r: 'いちど' }, { t: '口', r: 'くち' }, { t: 'に' }, { t: 'した' }, { t: '約束', r: 'やくそく' },
          { t: 'に' }, { t: 'は、' }, { t: 'まっすぐ' }, { t: '目', r: 'め' }, { t: 'を' },
          { t: '向', r: 'む' }, { t: 'ける' }, { t: 'べき' }, { t: 'だ。' },
        ],
        en: 'One should face squarely a promise once spoken.',
      },
      {
        seg: [
          { t: '返事', r: 'へんじ' }, { t: 'が' }, { t: '遅', r: 'おそ' }, { t: 'い' }, { t: 'と' },
          { t: '頭', r: 'あたま' }, { t: 'に' }, { t: 'くる' }, { t: '人', r: 'ひと' }, { t: 'も' },
          { t: 'いる。' },
        ],
        en: 'Some people get angry when replies are slow.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 12,
    section: 3,
    title: '手と足の慣用句',
    targetWords: [
      '手がふさがる', '手が空く', '手がかかる', '手が離せない', '手に入れる', '手にする', '手につかない',
      '手をつける', '手を貸す', '手を休める', '手を抜く', '腕がいい', '腕を磨く', '腕が上がる', '肩を落とす',
      '腹が立つ', '腹を抱える', '足が出る', '足を伸ばす', '足を運ぶ', '足を引っ張る',
    ],
    sentences: [
      {
        seg: [
          { t: 'いま' }, { t: 'は' }, { t: '手', r: 'て' }, { t: 'が' }, { t: 'ふさがって' },
          { t: 'いて、' }, { t: 'どうしても' }, { t: '手', r: 'て' }, { t: 'が' }, { t: '離', r: 'はな' },
          { t: 'せない。' },
        ],
        en: 'My hands are full right now and I really cannot get away.',
      },
      {
        seg: [
          { t: '手', r: 'て' }, { t: 'が' }, { t: '空', r: 'あ' }, { t: 'いたら、' }, { t: '少', r: 'すこ' },
          { t: 'し' }, { t: '手', r: 'て' }, { t: 'を' }, { t: '貸', r: 'か' }, { t: 'して' },
          { t: 'ほしい。' },
        ],
        en: 'When you are free, I would like you to lend a hand.',
      },
      {
        seg: [
          { t: 'この' }, { t: '作業', r: 'さぎょう' }, { t: 'は' }, { t: '手', r: 'て' }, { t: 'が' },
          { t: 'かかる' }, { t: 'ので、' }, { t: 'まだ' }, { t: '手', r: 'て' }, { t: 'を' },
          { t: 'つけて' }, { t: 'いない。' },
        ],
        en: 'This task takes a lot of effort, so I have not started on it yet.',
      },
      {
        seg: [
          { t: '気', r: 'き' }, { t: 'に' }, { t: 'なる' }, { t: 'こと' }, { t: 'が' },
          { t: 'あって、' }, { t: '仕事', r: 'しごと' }, { t: 'が' }, { t: '手', r: 'て' }, { t: 'に' },
          { t: 'つかない。' },
        ],
        en: 'Something is on my mind and I cannot concentrate on work.',
      },
      {
        seg: [
          { t: 'ときどき' }, { t: '手', r: 'て' }, { t: 'を' }, { t: '休', r: 'やす' }, { t: 'めて、' },
          { t: 'お茶', r: 'ちゃ' }, { t: 'を' }, { t: '飲', r: 'の' }, { t: 'む。' },
        ],
        en: 'Now and then I take a break from work and drink tea.',
      },
      {
        seg: [
          { t: '手', r: 'て' }, { t: 'を' }, { t: '抜', r: 'ぬ' }, { t: 'かず' }, { t: 'に' },
          { t: '続', r: 'つづ' }, { t: 'けた' }, { t: 'ので、' }, { t: 'だんだん' }, { t: '腕', r: 'うで' },
          { t: 'が' }, { t: '上', r: 'あ' }, { t: 'がって' }, { t: 'きた。' },
        ],
        en: 'Because I kept at it without cutting corners, my skills gradually improved.',
      },
      {
        seg: [
          { t: '腕', r: 'うで' }, { t: 'の' }, { t: 'いい' }, { t: '職人', r: 'しょくにん' }, { t: 'は、' },
          { t: 'いま' }, { t: 'も' }, { t: '腕', r: 'うで' }, { t: 'を' }, { t: '磨', r: 'みが' },
          { t: 'き' }, { t: '続', r: 'つづ' }, { t: 'けて' }, { t: 'いる。' },
        ],
        en: 'A skilled craftsman is still sharpening his skills even now.',
      },
      {
        seg: [
          { t: 'ほしかった' }, { t: '道具', r: 'どうぐ' }, { t: 'を' }, { t: 'ようやく' }, { t: '手', r: 'て' },
          { t: 'に' }, { t: '入', r: 'い' }, { t: 'れ、' }, { t: '手', r: 'て' }, { t: 'に' },
          { t: 'した' }, { t: 'とき' }, { t: 'は' }, { t: 'うれしかった。' },
        ],
        en: 'I finally obtained the tool I wanted, and was happy when I held it.',
      },
      {
        seg: [
          { t: '約束', r: 'やくそく' }, { t: 'を' }, { t: '破', r: 'やぶ' }, { t: 'られて' }, { t: '腹', r: 'はら' },
          { t: 'が' }, { t: '立', r: 'た' }, { t: 'った' }, { t: 'が、' }, { t: '彼', r: 'かれ' },
          { t: 'の' }, { t: '話', r: 'はなし' }, { t: 'に' }, { t: 'は' }, { t: '腹', r: 'はら' },
          { t: 'を' }, { t: '抱', r: 'かか' }, { t: 'えて' }, { t: '笑', r: 'わら' }, { t: 'った。' },
        ],
        en: 'I got angry at the broken promise, but his story had me holding my sides laughing.',
      },
      {
        seg: [
          { t: '結果', r: 'けっか' }, { t: 'を' }, { t: '聞', r: 'き' }, { t: 'いて' }, { t: '肩', r: 'かた' },
          { t: 'を' }, { t: '落', r: 'お' }, { t: 'とした' }, { t: '人', r: 'ひと' }, { t: 'も' },
          { t: 'いた。' },
        ],
        en: 'Some people hung their heads on hearing the result.',
      },
      {
        seg: [
          { t: '予算', r: 'よさん' }, { t: 'より' }, { t: '足', r: 'あし' }, { t: 'が' }, { t: '出', r: 'で' },
          { t: 'た' }, { t: 'ので、' }, { t: '何度', r: 'なんど' }, { t: 'も' }, { t: '店', r: 'みせ' },
          { t: 'に' }, { t: '足', r: 'あし' }, { t: 'を' }, { t: '運', r: 'はこ' }, { t: 'んだ。' },
        ],
        en: 'We went over budget, so I made the trip to the shop many times.',
      },
      {
        seg: [
          { t: '帰', r: 'かえ' }, { t: 'り' }, { t: 'に' }, { t: '少', r: 'すこ' }, { t: 'し' },
          { t: '足', r: 'あし' }, { t: 'を' }, { t: '伸', r: 'の' }, { t: 'ばして、' }, { t: '海', r: 'うみ' },
          { t: 'を' }, { t: '見', r: 'み' }, { t: 'て' }, { t: 'きた。' },
        ],
        en: 'On the way back I went a little further and saw the sea.',
      },
      {
        seg: [
          { t: '仲間', r: 'なかま' }, { t: 'の' }, { t: '足', r: 'あし' }, { t: 'を' }, { t: '引', r: 'ひ' },
          { t: 'っ' }, { t: '張', r: 'ぱ' }, { t: 'らない' }, { t: 'よう、' }, { t: '自分', r: 'じぶん' },
          { t: 'の' }, { t: '分', r: 'ぶん' }, { t: 'を' }, { t: 'きちんと' }, { t: 'やる。' },
        ],
        en: 'So as not to hold my colleagues back, I do my own part properly.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 12,
    section: 4,
    title: '副詞をつかう',
    targetWords: [
      '何かと', '何だかんだ', 'なぜか', '何だか', '何しろ', '何とも', 'どうか', 'どうにか', 'どうしても',
      'どうせ', 'どうやら', 'とにかく', 'とても', 'より', 'いかに', 'いかにも',
    ],
    sentences: [
      {
        seg: [
          { t: '引', r: 'ひ' }, { t: 'っ' }, { t: '越', r: 'こ' }, { t: 'し' }, { t: 'の' },
          { t: '前', r: 'まえ' }, { t: 'は、' }, { t: '何', r: 'なに' }, { t: 'かと' }, { t: '用事', r: 'ようじ' },
          { t: 'が' }, { t: '多', r: 'おお' }, { t: 'い。' },
        ],
        en: 'Before moving there are all sorts of errands.',
      },
      {
        seg: [
          { t: '何', r: 'なん' }, { t: 'だかんだ' }, { t: '言', r: 'い' }, { t: 'い' }, { t: 'ながら、' },
          { t: 'みんな' }, { t: '手伝', r: 'てつだ' }, { t: 'って' }, { t: 'くれた。' },
        ],
        en: 'Saying this and that, everyone still helped out.',
      },
      {
        seg: [
          { t: 'なぜ' }, { t: 'か' }, { t: 'その' }, { t: '日', r: 'ひ' }, { t: 'は、' },
          { t: '何', r: 'なん' }, { t: 'だか' }, { t: '落', r: 'お' }, { t: 'ち' }, { t: '着', r: 'つ' },
          { t: 'かなかった。' },
        ],
        en: 'For some reason that day I somehow felt unsettled.',
      },
      {
        seg: [
          { t: '何', r: 'なに' }, { t: 'しろ' }, { t: '荷物', r: 'にもつ' }, { t: 'が' }, { t: '多', r: 'おお' },
          { t: 'く、' }, { t: 'とても' }, { t: '一日', r: 'いちにち' }, { t: 'で' }, { t: 'は' },
          { t: '終', r: 'お' }, { t: 'わらない。' },
        ],
        en: 'At any rate there was so much luggage that it could not possibly be finished in a day.',
      },
      {
        seg: [
          { t: 'どうにか' }, { t: '間', r: 'ま' }, { t: 'に' }, { t: '合', r: 'あ' }, { t: 'わせよう' },
          { t: 'と、' }, { t: 'とにかく' }, { t: '手', r: 'て' }, { t: 'を' }, { t: '動', r: 'うご' },
          { t: 'かした。' },
        ],
        en: 'Trying somehow to make it in time, I simply kept my hands moving.',
      },
      {
        seg: [
          { t: 'どうしても' }, { t: '捨', r: 'す' }, { t: 'てられない' }, { t: 'もの' }, { t: 'が' },
          { t: 'あり、' }, { t: 'どうせ' }, { t: 'また' }, { t: '使', r: 'つか' }, { t: 'う' },
          { t: 'と' }, { t: '思', r: 'おも' }, { t: 'って' }, { t: 'しまう。' },
        ],
        en: 'There are things I absolutely cannot throw away, and I end up thinking I will use them again anyway.',
      },
      {
        seg: [
          { t: 'どうやら' }, { t: '予定', r: 'よてい' }, { t: 'より' }, { t: '早', r: 'はや' }, { t: 'く' },
          { t: '終', r: 'お' }, { t: 'わり' }, { t: 'そう' }, { t: 'だ。' },
        ],
        en: 'It seems it will finish earlier than planned.',
      },
      {
        seg: [
          { t: '新', r: 'あたら' }, { t: 'しい' }, { t: '部屋', r: 'へや' }, { t: 'は、' }, { t: '前', r: 'まえ' },
          { t: 'の' }, { t: '部屋', r: 'へや' }, { t: 'より' }, { t: '明', r: 'あか' }, { t: 'るい。' },
        ],
        en: 'The new room is brighter than the previous one.',
      },
      {
        seg: [
          { t: 'いかに' }, { t: '住', r: 'す' }, { t: 'みやすく' }, { t: 'する' }, { t: 'か' },
          { t: 'を、' }, { t: 'いま' }, { t: '考', r: 'かんが' }, { t: 'えて' }, { t: 'いる。' },
        ],
        en: 'I am now thinking about how to make it comfortable to live in.',
      },
      {
        seg: [
          { t: '窓', r: 'まど' }, { t: 'から' }, { t: 'の' }, { t: '眺', r: 'なが' }, { t: 'め' },
          { t: 'は、' }, { t: 'いかにも' }, { t: 'この' }, { t: '町', r: 'まち' }, { t: 'らしい。' },
        ],
        en: 'The view from the window is indeed characteristic of this town.',
      },
      {
        seg: [
          { t: '何', r: 'なん' }, { t: 'とも' }, { t: '言', r: 'い' }, { t: 'えない' }, { t: 'ほど、' },
          { t: '静', r: 'しず' }, { t: 'か' }, { t: 'な' }, { t: '夜', r: 'よる' }, { t: 'だった。' },
        ],
        en: 'It was a night so quiet that words could not describe it.',
      },
      {
        seg: [
          { t: 'どうか' }, { t: 'この' }, { t: '暮', r: 'く' }, { t: 'らし' }, { t: 'が' },
          { t: '長', r: 'なが' }, { t: 'く' }, { t: '続', r: 'つづ' }, { t: 'き' }, { t: 'ます' },
          { t: 'よう' }, { t: 'に。' },
        ],
        en: 'I do hope this life continues for a long time.',
      },
    ],
  },
  {
    level: 'N2',
    chapter: 12,
    section: 5,
    title: '文をつなぐことば',
    targetWords: [
      'それで', 'そこで', 'すると', 'なぜなら', 'というのも', 'つまり', 'いわゆる', 'その上', 'そればかりか',
      'しかも', 'また', 'しかし', 'ところが', 'それでも', 'にもかかわらず', 'そうはいっても', 'それにしては',
      '一方', 'ただ', 'ただし', 'なお', 'または', 'それとも', 'ところで', 'さて', 'それでは',
    ],
    sentences: [
      {
        seg: [
          { t: '先週', r: 'せんしゅう' }, { t: 'は' }, { t: 'ずっと' }, { t: '雨', r: 'あめ' }, { t: 'だった。' },
          { t: 'それで' }, { t: '外出', r: 'がいしゅつ' }, { t: 'を' }, { t: 'やめた。' },
        ],
        en: 'It rained all last week. So I gave up going out.',
      },
      {
        seg: [
          { t: '家', r: 'いえ' }, { t: 'に' }, { t: 'いる' }, { t: '時間', r: 'じかん' }, { t: 'が' },
          { t: '増', r: 'ふ' }, { t: 'えた。' }, { t: 'そこで' }, { t: '本', r: 'ほん' }, { t: 'を' },
          { t: '読', r: 'よ' }, { t: 'む' }, { t: 'こと' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'My time at home increased. Therefore I decided to read books.',
      },
      {
        seg: [
          { t: '一冊', r: 'いっさつ' }, { t: '読', r: 'よ' }, { t: 'み' }, { t: '終', r: 'お' }, { t: 'えた。' },
          { t: 'すると' }, { t: '次', r: 'つぎ' }, { t: 'が' }, { t: '読', r: 'よ' }, { t: 'みたく' },
          { t: 'なった。' },
        ],
        en: 'I finished one book. Then I wanted to read the next.',
      },
      {
        seg: [
          { t: 'この' }, { t: '作家', r: 'さっか' }, { t: 'が' }, { t: '好', r: 'す' }, { t: 'き' },
          { t: 'だ。' }, { t: 'なぜなら' }, { t: '文章', r: 'ぶんしょう' }, { t: 'が' }, { t: '静', r: 'しず' },
          { t: 'か' }, { t: 'だ' }, { t: 'から' }, { t: 'だ。' },
        ],
        en: 'I like this author. The reason is that the writing is quiet.',
      },
      {
        seg: [
          { t: '急', r: 'いそ' }, { t: 'いで' }, { t: '読', r: 'よ' }, { t: 'ま' }, { t: 'ない。' },
          { t: 'というのも、' }, { t: '味', r: 'あじ' }, { t: 'わい' }, { t: 'たい' }, { t: 'から' },
          { t: 'だ。' },
        ],
        en: 'I do not read in a hurry, because I want to savour it.',
      },
      {
        seg: [
          { t: 'つまり、' }, { t: '量', r: 'りょう' }, { t: 'より' }, { t: '質', r: 'しつ' }, { t: 'だ' },
          { t: 'という' }, { t: 'こと' }, { t: 'だ。' },
        ],
        en: 'In other words, it is quality rather than quantity.',
      },
      {
        seg: [
          { t: 'これ' }, { t: 'が' }, { t: 'いわゆる' }, { t: '「積', r: 'つ' }, { t: 'ん' },
          { t: '読', r: 'どく」' }, { t: 'に' }, { t: 'なら' }, { t: 'ない' }, { t: 'よう、' },
          { t: '気', r: 'き' }, { t: 'を' }, { t: 'つけて' }, { t: 'いる。' },
        ],
        en: 'I am careful that this does not become what is called “books piled up unread”.',
      },
      {
        seg: [
          { t: '本', r: 'ほん' }, { t: 'は' }, { t: '安', r: 'やす' }, { t: 'く' }, { t: 'ない。' },
          { t: 'その上、' }, { t: '置', r: 'お' }, { t: 'く' }, { t: '場所', r: 'ばしょ' }, { t: 'も' },
          { t: 'いる。' },
        ],
        en: 'Books are not cheap. On top of that, they need space.',
      },
      {
        seg: [
          { t: 'そればかりか、' }, { t: '一度', r: 'いちど' }, { t: '買', r: 'か' }, { t: 'う' }, { t: 'と' },
          { t: '手放', r: 'てばな' }, { t: 'せない。' }, { t: 'しかも' }, { t: '増', r: 'ふ' }, { t: 'え' },
          { t: '続', r: 'つづ' }, { t: 'ける。' },
        ],
        en: 'Not only that, once bought I cannot let them go. Moreover they keep increasing.',
      },
      {
        seg: [
          { t: '図書館', r: 'としょかん' }, { t: 'も' }, { t: 'よく' }, { t: '使', r: 'つか' }, { t: 'う。' },
          { t: 'また、' }, { t: '友人', r: 'ゆうじん' }, { t: 'と' }, { t: '貸', r: 'か' }, { t: 'し' },
          { t: '借', r: 'が' }, { t: 'り' }, { t: 'も' }, { t: 'する。' },
        ],
        en: 'I also use the library. Also, I lend and borrow with friends.',
      },
      {
        seg: [
          { t: '電子', r: 'でんし' }, { t: '書籍', r: 'しょせき' }, { t: 'は' }, { t: '便利', r: 'べんり' }, { t: 'だ。' },
          { t: 'しかし、' }, { t: '紙', r: 'かみ' }, { t: 'の' }, { t: '手', r: 'て' }, { t: 'ざわり' },
          { t: 'も' }, { t: '捨', r: 'す' }, { t: 'てがたい。' },
        ],
        en: 'E-books are convenient. However, the feel of paper is hard to give up.',
      },
      {
        seg: [
          { t: '両方', r: 'りょうほう' }, { t: '使', r: 'つか' }, { t: 'えば' }, { t: 'よい' }, { t: 'と' },
          { t: '思', r: 'おも' }, { t: 'った。' }, { t: 'ところが、' }, { t: '結局', r: 'けっきょく' }, { t: '紙', r: 'かみ' },
          { t: 'ばかり' }, { t: '選', r: 'えら' }, { t: 'んで' }, { t: 'いる。' },
        ],
        en: 'I thought I could use both. However, in the end I choose only paper.',
      },
      {
        seg: [
          { t: '目', r: 'め' }, { t: 'は' }, { t: '疲', r: 'つか' }, { t: 'れる。' }, { t: 'それでも' },
          { t: '読', r: 'よ' }, { t: 'む' }, { t: 'の' }, { t: 'を' }, { t: 'やめられない。' },
        ],
        en: 'My eyes get tired. Even so I cannot stop reading.',
      },
      {
        seg: [
          { t: '時間', r: 'じかん' }, { t: 'が' }, { t: 'ない' }, { t: 'にもかかわらず、' }, { t: '毎晩', r: 'まいばん' },
          { t: '少', r: 'すこ' }, { t: 'し' }, { t: 'ずつ' }, { t: '開', r: 'ひら' }, { t: 'く。' },
        ],
        en: 'Despite having no time, I open a book a little each night.',
      },
      {
        seg: [
          { t: 'そうはいっても、' }, { t: '眠', r: 'ねむ' }, { t: 'い' }, { t: '日', r: 'ひ' }, { t: 'は' },
          { t: '進', r: 'すす' }, { t: 'まない。' },
        ],
        en: 'That said, on sleepy days I make no progress.',
      },
      {
        seg: [
          { t: '毎日', r: 'まいにち' }, { t: '読', r: 'よ' }, { t: 'んで' }, { t: 'いる。' }, { t: 'それにしては、' },
          { t: '冊数', r: 'さつすう' }, { t: 'が' }, { t: '少', r: 'すく' }, { t: 'ない。' },
        ],
        en: 'I read every day. Considering that, the number of volumes is small.',
      },
      {
        seg: [
          { t: '速', r: 'はや' }, { t: 'く' }, { t: '読', r: 'よ' }, { t: 'む' }, { t: '人', r: 'ひと' },
          { t: 'が' }, { t: 'いる' }, { t: '一方', r: 'いっぽう、' }, { t: 'ゆっくり' }, { t: '読', r: 'よ' },
          { t: 'む' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: 'いる。' },
        ],
        en: 'While some people read fast, others read slowly.',
      },
      {
        seg: [
          { t: 'どちら' }, { t: 'でも' }, { t: 'よい。' }, { t: 'ただ、' }, { t: '自分', r: 'じぶん' },
          { t: 'の' }, { t: '速', r: 'はや' }, { t: 'さ' }, { t: 'を' }, { t: '知', r: 'し' },
          { t: 'る' }, { t: 'こと' }, { t: 'だ。' },
        ],
        en: 'Either is fine. Only, you should know your own pace.',
      },
      {
        seg: [
          { t: '借', r: 'か' }, { t: 'りて' }, { t: 'も' }, { t: 'よい。' }, { t: 'ただし、' },
          { t: '期限', r: 'きげん' }, { t: 'は' }, { t: '守', r: 'まも' }, { t: 'る' }, { t: 'こと。' },
        ],
        en: 'You may borrow. However, you must keep to the deadline.',
      },
      {
        seg: [
          { t: 'なお、' }, { t: '返却', r: 'へんきゃく' }, { t: 'は' }, { t: '窓口', r: 'まどぐち' }, { t: 'で' },
          { t: 'も' }, { t: 'できる。' },
        ],
        en: 'Furthermore, returns can also be made at the counter.',
      },
      {
        seg: [
          { t: '紙', r: 'かみ' }, { t: 'または' }, { t: '電子', r: 'でんし、' }, { t: 'どちら' }, { t: 'を' },
          { t: '選', r: 'えら' }, { t: 'ぶ' }, { t: 'か。' }, { t: 'それとも' }, { t: '両方', r: 'りょうほう' },
          { t: 'か。' },
        ],
        en: 'Paper or electronic — which will you choose? Or both?',
      },
      {
        seg: [
          { t: 'ところで、' }, { t: '次', r: 'つぎ' }, { t: 'は' }, { t: '何', r: 'なに' }, { t: 'を' },
          { t: '読', r: 'よ' }, { t: 'もう' }, { t: 'か。' },
        ],
        en: 'By the way, what shall I read next?',
      },
      {
        seg: [
          { t: 'さて、' }, { t: 'そろそろ' }, { t: '決', r: 'き' }, { t: 'めよう。' }, { t: 'それでは、' },
          { t: 'この' }, { t: '一冊', r: 'いっさつ' }, { t: 'から' }, { t: '始', r: 'はじ' }, { t: 'める。' },
        ],
        en: 'Well then, let me decide soon. In that case, I will start with this one.',
      },
    ],
  },
]
