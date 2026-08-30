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
          { t: 'らわず、' }, { t: '一', r: 'いち' }, { t: '晩', r: 'ばん' },
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
          { t: '説得', r: 'せっとく' }, { t: 'に' }, { t: '三', r: 'み' },
          { t: '日', r: 'っか' }, { t: 'かかったが、' },
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
          { t: '大学', r: 'だいがく' }, { t: 'の' }, { t: '友人', r: 'ゆうじん' }, { t: 'と' }, { t: '出会', r: 'であ' }, { t: 'って' }, { t: 'から、' }, { t: 'もう' }, { t: '十' }, { t: '年', r: 'ねん' }, { t: 'が' }, { t: '過', r: 'す' }, { t: 'ぎた。' },
        ],
        en: 'More than ten years have passed since I met my friend from university.',
      },
      {
        seg: [
          { t: '久', r: 'ひさ' }, { t: 'しく' }, { t: '会', r: 'あ' }, { t: 'わない' }, { t: '時期', r: 'じき' }, { t: 'も' }, { t: 'あったが、' }, { t: '私' }, { t: 'たちの' }, { t: '仲', r: 'なか' }, { t: 'は' }, { t: '変', r: 'か' }, { t: 'わらない。' },
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
          { t: '仕事', r: 'しごと' }, { t: 'で' }, { t: '失敗', r: 'しっぱい' }, { t: 'した' }, { t: '夜', r: 'よる' }, { t: '、' }, { t: '私' }, { t: 'は' }, { t: '彼', r: 'かれ' }, { t: 'に' }, { t: '悩', r: 'なや' }, { t: 'みを' }, { t: '打', r: 'う' }, { t: 'ち' }, { t: '明', r: 'あ' }, { t: 'けた。' },
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
          { t: 'そして' }, { t: 'あえて' }, { t: '明', r: 'あか' }, { t: 'るい' }, { t: '声', r: 'こえ' }, { t: 'で' }, { t: '私' }, { t: 'を' }, { t: 'なぐさめ、' }, { t: '励', r: 'はげ' }, { t: 'まして' }, { t: 'くれた。' },
        ],
        en: 'And then he deliberately used a bright voice to comfort and encourage me.',
      },
      {
        seg: [
          { t: 'その' }, { t: '何気', r: 'なにげ' }, { t: 'ない' }, { t: '思', r: 'おも' }, { t: 'いやり' }, { t: 'に、' }, { t: '私' }, { t: 'は' }, { t: '恵', r: 'めぐ' }, { t: 'まれて' }, { t: 'いると' }, { t: '感', r: 'かん' }, { t: 'じた。' },
        ],
        en: 'In that casual consideration, I felt how fortunate I was.',
      },
      {
        seg: [
          { t: '来月', r: 'らいげつ' }, { t: '、' }, { t: '私' }, { t: 'が' }, { t: '幹事', r: 'かんじ' }, { t: 'に' }, { t: 'なって' }, { t: '同級生', r: 'どうきゅうせい' }, { t: 'を' }, { t: '呼', r: 'よ' }, { t: 'び' }, { t: '出', r: 'だ' }, { t: 'す' }, { t: '予定', r: 'よてい' }, { t: 'だ。' },
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
          { t: '引', r: 'ひ' }, { t: 'っ' }, { t: '越', r: 'こ' }, { t: 'した' }, { t: '日', r: 'ひ' }, { t: '、' }, { t: '私' }, { t: 'は' }, { t: '大家', r: 'おおや' }, { t: 'さん' }, { t: 'と' }, { t: '初対面', r: 'しょたいめん' }, { t: 'の' }, { t: '挨拶', r: 'あいさつ' }, { t: 'を' }, { t: 'した。' },
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
          { t: '心当', r: 'こころあ' }, { t: 'たり' }, { t: 'の' }, { t: 'ない' }, { t: '名前', r: 'なまえ' }, { t: 'が' }, { t: '記憶', r: 'きおく' }, { t: 'と' }, { t: '結', r: 'むす' }, { t: 'びついた' }, { t: 'とき、' }, { t: '二' }, { t: '人', r: 'り' }, { t: 'で' }, { t: '笑', r: 'わら' }, { t: 'った。' },
        ],
        en: 'When a name I could not place connected with my memory, the two of us laughed.',
      },
      {
        seg: [
          { t: '十' }, { t: '年', r: 'ねん' }, { t: 'ぶり' }, { t: 'の' }, { t: '再会', r: 'さいかい' }, { t: 'だった。' },
        ],
        en: 'It was a reunion after ten years.',
      },
      {
        seg: [
          { t: 'メール' }, { t: 'や' }, { t: 'ネットワーク' }, { t: 'で' }, { t: 'の' }, { t: 'コミュニケーション' }, { t: 'も' }, { t: 'いい' }, { t: 'が、' }, { t: '直接', r: 'ちょくせつ' }, { t: '' }, { t: '会' }, { t: 'うのに' }, { t: 'はかなわない。' },
        ],
        en: 'Communication by email or online networks is fine, but nothing beats meeting in person.',
      },
      {
        seg: [
          { t: '今度', r: 'こんど' }, { t: '、' }, { t: '家' }, { t: 'に' }, { t: '招', r: 'まね' }, { t: 'いて、' }, { t: '仕事', r: 'しごと' }, { t: 'の' }, { t: 'ぐち' }, { t: 'でも' }, { t: '大', r: 'おお' }, { t: 'いに' }, { t: '話', r: 'はな' }, { t: 'そう' }, { t: 'と' }, { t: '約束', r: 'やくそく' }, { t: 'した。' },
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
          { t: '駅', r: 'えき' }, { t: 'の' }, { t: '本屋', r: 'ほんや' }, { t: 'で、' }, { t: '私' }, { t: 'は' }, { t: 'はじめて' }, { t: '彼女', r: 'かのじょ' }, { t: 'の' }, { t: '視線', r: 'しせん' }, { t: 'に' }, { t: '気', r: 'き' }, { t: 'づいた。' },
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
          { t: '本', r: 'ほん' }, { t: 'を' }, { t: '借', r: 'か' }, { t: 'りる' }, { t: 'という' }, { t: '口実', r: 'こうじつ' }, { t: 'で、' }, { t: '私' }, { t: 'は' }, { t: '彼女', r: 'かのじょ' }, { t: 'に' }, { t: '話', r: 'はな' }, { t: 'しかけた。' },
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
          { t: 'それから' }, { t: '私' }, { t: 'たち' }, { t: 'は' }, { t: '恋人', r: 'こいびと' }, { t: '' }, { t: '同士', r: 'どうし' }, { t: 'に' }, { t: 'なり、' }, { t: '互', r: 'たが' }, { t: 'いの' }, { t: '時間', r: 'じかん' }, { t: 'を' }, { t: '大切', r: 'たいせつ' }, { t: 'に' }, { t: 'した。' },
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
          { t: '去年', r: 'きょねん' }, { t: 'の' }, { t: '冬', r: 'ふゆ' }, { t: '、' }, { t: '私' }, { t: 'は' }, { t: '決意', r: 'けつい' }, { t: 'して' }, { t: 'プロポーズ' }, { t: 'した。' },
        ],
        en: 'Last winter, I made up my mind and proposed.',
      },
      {
        seg: [
          { t: '小', r: 'ちい' }, { t: 'さな' }, { t: '声', r: 'こえ' }, { t: 'で' }, { t: 'ささやいた' }, { t: '愛', r: 'あい' }, { t: 'の' }, { t: '言葉', r: 'ことば' }, { t: 'を、' }, { t: '一生' }, { t: '守', r: 'まも' }, { t: 'る' }, { t: 'と' }, { t: '誓', r: 'ちか' }, { t: 'った。' },
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
          { t: 'ただの' }, { t: '誤解', r: 'ごかい' }, { t: 'だと' }, { t: '思', r: 'おも' }, { t: 'って' }, { t: 'いたが、' }, { t: '勘違', r: 'かんちが' }, { t: 'い' }, { t: 'して' }, { t: 'いた' }, { t: 'のは' }, { t: '私' }, { t: 'の' }, { t: '方', r: 'ほう' }, { t: 'だった。' },
        ],
        en: 'I thought it was a simple misunderstanding, but I was the one who had it wrong.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'は' }, { t: '私' }, { t: 'を' }, { t: 'ばかにする' }, { t: 'ように' }, { t: 'いやみ' }, { t: 'を' }, { t: '言', r: 'い' }, { t: 'い、' }, { t: '私' }, { t: 'の' }, { t: '仕事', r: 'しごと' }, { t: 'を' }, { t: 'けなした。' },
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
          { t: 'だが' }, { t: '十', r: 'じゅう' }, { t: '' }, { t: '年', r: 'ねん' }, { t: 'の' }, { t: '友情', r: 'ゆうじょう' }, { t: 'を' }, { t: '台無', r: 'だいな' }, { t: 'し' }, { t: 'に' }, { t: 'する' }, { t: 'の' }, { t: 'は、' }, { t: 'あまりに' }, { t: 'もったいない。' },
        ],
        en: 'But ruining a ten-year friendship would be far too great a waste.',
      },
      {
        seg: [
          { t: '今さら' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'いながら' }, { t: 'も、' }, { t: '私' }, { t: 'は' }, { t: '彼', r: 'かれ' }, { t: 'に' }, { t: '連絡', r: 'れんらく' }, { t: 'する' }, { t: 'こと' }, { t: 'に' }, { t: 'した。' },
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
          { t: '東京', r: 'とうきょう' }, { t: 'で' }, { t: 'の' }, { t: '一人住', r: 'ひとりず' }, { t: 'まい' }, { t: 'も' }, { t: '三' }, { t: '年目', r: 'ねんめ' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'This is my third year living alone in Tokyo.',
      },
      {
        seg: [
          { t: '賃貸', r: 'ちんたい' }, { t: 'の' }, { t: '契約', r: 'けいやく' }, { t: 'を' }, { t: '更新', r: 'こうしん' }, { t: 'する' }, { t: 'とき、' }, { t: '敷金', r: 'しききん' }, { t: 'の' }, { t: '' }, { t: '決', r: 'き' }, { t: 'まり' }, { t: 'を' }, { t: 'よく' }, { t: '読', r: 'よ' }, { t: 'んだ。' },
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
          { t: '広', r: 'ひろ' }, { t: 'い' }, { t: '空間', r: 'くうかん' }, { t: 'と' }, { t: '木', r: 'き' }, { t: 'の' }, { t: '温', r: 'ぬく' }, { t: 'もり' }, { t: 'が' }, { t: 'ある' }, { t: '部屋' }, { t: 'に' }, { t: '住', r: 'す' }, { t: 'みたい。' },
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
          { t: 'それ' }, { t: 'から' }, { t: '防犯', r: 'ぼうはん' }, { t: 'を' }, { t: '意識', r: 'いしき' }, { t: 'し、' }, { t: '警備', r: 'けいび' }, { t: '会社' }, { t: 'に' }, { t: '相談', r: 'そうだん' }, { t: 'した。' },
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
      '收入', 'ごく', 'せいぜい', '出費', '赤字', '大金', '税金', '納める', '含む', '公共料金', '払い込む', '引き落とし', '手数料', '出し入れ', '高くつく', '残高', 'せっせと', '大まかな', '差し引く', '努める', '立て替える', '援助', '返済', '安定',
    ],
    sentences: [
      {
        seg: [
          { t: '毎月', r: 'まいつき' }, { t: 'の' }, { t: '收入', r: 'しゅうにゅう' }, { t: 'と' }, { t: '出費', r: 'しゅっぴ' }, { t: 'を、' }, { t: 'ノート' }, { t: 'に' }, { t: '大', r: 'おお' }, { t: 'まかに' }, { t: '書', r: 'か' }, { t: 'いている。' },
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
          { t: '少額', r: 'しょうがく' }, { t: 'でも' }, { t: '積', r: 'つ' }, { t: 'もれば' }, { t: '高', r: 'たか' }, { t: 'くつく' }, { t: 'から、' }, { t: 'せいぜい' }, { t: '月', r: 'つき' }, { t: 'に' }, { t: '一' }, { t: '度', r: 'ど' }, { t: 'に' }, { t: 'している。' },
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
          { t: '新', r: 'あたら' }, { t: 'しい' }, { t: 'パソコン' }, { t: 'を' }, { t: '購入', r: 'こうにゅう' }, { t: 'する' }, { t: 'ため、' }, { t: '三' }, { t: '店', r: 'てん' }, { t: 'の' }, { t: '価格', r: 'かかく' }, { t: 'を' }, { t: '比', r: 'くら' }, { t: 'べた。' },
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
          { t: '本年', r: 'ほんねん' }, { t: 'の' }, { t: '目標', r: 'もくひょう' }, { t: 'は、' }, { t: '今日', r: 'きょう' }, { t: 'まで' }, { t: 'に' }, { t: 'すでに' }, { t: '三' }, { t: 'つ' }, { t: '決', r: 'き' }, { t: 'めてある。' },
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
          { t: 'この' }, { t: '工事', r: 'こうじ' }, { t: 'は' }, { t: '一時', r: 'いちじ' }, { t: '' }, { t: '中断', r: 'ちゅうだん' }, { t: 'する' }, { t: 'が、' }, { t: '今後', r: 'こんご' }, { t: 'また' }, { t: '始', r: 'はじ' }, { t: 'まる。' },
        ],
        en: 'This construction will pause temporarily but will start again in future.',
      },
      {
        seg: [
          { t: '年間', r: 'ねんかん' }, { t: 'を' }, { t: '通', r: 'とお' }, { t: 'して、' }, { t: 'この' }, { t: '店', r: 'みせ' }, { t: 'は' }, { t: '年中', r: 'ねんじゅう' }, { t: '' }, { t: '開', r: 'あ' }, { t: 'いている。' },
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
          { t: '一生', r: 'いっしょう' }, { t: '' }, { t: '忘', r: 'わす' }, { t: 'れない、' }, { t: '永遠' }, { t: 'に' }, { t: '残', r: 'のこ' }, { t: 'る' }, { t: '一日', r: 'いちにち' }, { t: 'だった。' },
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
          { t: '夜明', r: 'よあ' }, { t: 'け' }, { t: '' }, { t: '前', r: 'まえ' }, { t: 'に' }, { t: '目', r: 'め' }, { t: 'が' }, { t: '覚', r: 'さ' }, { t: 'め、' }, { t: 'そのまま' }, { t: '起床', r: 'きしょう' }, { t: 'する' }, { t: '日', r: 'ひ' }, { t: 'が' }, { t: '増', r: 'ふ' }, { t: 'えた。' },
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
          { t: '古新聞', r: 'ふるしんぶん' }, { t: 'は' }, { t: 'まとめて、' }, { t: '月', r: 'つき' }, { t: 'に' }, { t: '一' }, { t: '度', r: 'ど' }, { t: '' }, { t: '出', r: 'だ' }, { t: 'す。' },
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
          { t: '住宅', r: 'じゅうたく' }, { t: '' }, { t: '地区', r: 'ちく' }, { t: 'と' }, { t: '商業', r: 'しょうぎょう' }, { t: 'エリア' }, { t: 'の' }, { t: '境', r: 'さかい' }, { t: 'は、' }, { t: '道', r: 'みち' }, { t: 'が' }, { t: '斜', r: 'なな' }, { t: 'め' }, { t: 'に' }, { t: '走', r: 'はし' }, { t: 'っている。' },
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
          { t: '年', r: 'ねん' }, { t: 'に' }, { t: '一' }, { t: '度', r: 'ど' }, { t: '、' }, { t: '避難', r: 'ひなん' }, { t: '' }, { t: '訓練', r: 'くんれん' }, { t: 'が' }, { t: '行', r: 'おこな' }, { t: 'われる。' },
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
          { t: '十', r: 'じゅう' }, { t: '' }, { t: '年後', r: 'ねんご' }, { t: 'の' }, { t: '姿', r: 'すがた' }, { t: 'は、' }, { t: 'まだ' }, { t: '見当', r: 'けんとう' }, { t: 'が' }, { t: 'つかない。' },
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
          { t: 'ごみ' }, { t: 'の' }, { t: '収集', r: 'しゅうしゅう' }, { t: '' }, { t: '日程', r: 'にってい' }, { t: 'は、' }, { t: 'チラシ' }, { t: 'で' }, { t: '配布', r: 'はいふ' }, { t: 'される。' },
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
          { t: '故郷', r: 'こきょう' }, { t: 'を' }, { t: '離', r: 'はな' }, { t: 'れて' }, { t: '十', r: 'じゅう' }, { t: '' }, { t: '年', r: 'ねん' }, { t: '、' }, { t: 'いま' }, { t: 'でも' }, { t: '地元', r: 'じもと' }, { t: 'の' }, { t: '話', r: 'はなし' }, { t: 'に' }, { t: 'なる' }, { t: 'と' }, { t: '声', r: 'こえ' }, { t: 'が' }, { t: '弾', r: 'はず' }, { t: 'む。' },
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
          { t: '雑誌', r: 'ざっし' }, { t: 'に' }, { t: '載', r: 'の' }, { t: 'った' }, { t: 'とき' }, { t: 'は、' }, { t: '宣伝', r: 'せんでん' }, { t: '' }, { t: '用', r: 'よう' }, { t: 'の' }, { t: 'ポスター' }, { t: 'も' }, { t: '作成', r: 'さくせい' }, { t: 'した。' },
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
          { t: '東', r: 'ひがし' }, { t: '' }, { t: '方面', r: 'ほうめん' }, { t: 'の' }, { t: '電車', r: 'でんしゃ' }, { t: 'は、' }, { t: '行', r: 'ゆ' }, { t: 'き' }, { t: '帰', r: 'かえ' }, { t: 'り' }, { t: 'とも' }, { t: 'に' }, { t: '混', r: 'こ' }, { t: 'む。' },
        ],
        en: 'Trains heading east are crowded both ways.',
      },
      {
        seg: [
          { t: '公共', r: 'こうきょう' }, { t: 'の' }, { t: '交通', r: 'こうつう' }, { t: '' }, { t: '手段', r: 'しゅだん' }, { t: 'は' }, { t: '運賃', r: 'うんちん' }, { t: 'が' }, { t: '安', r: 'やす' }, { t: 'く、' }, { t: 'ICカード' }, { t: 'で' }, { t: '乗', r: 'の' }, { t: 'れる。' },
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
          { t: '歩行者', r: 'ほこうしゃ' }, { t: 'は' }, { t: '横断', r: 'おうだん' }, { t: '' }, { t: '歩道', r: 'ほどう' }, { t: 'を' }, { t: '通行', r: 'つうこう' }, { t: 'し、' }, { t: '左右', r: 'さゆう' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'る。' },
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
          { t: '同', r: 'おな' }, { t: 'じ' }, { t: '道', r: 'みち' }, { t: 'を' }, { t: 'ぐるぐる' }, { t: '' }, { t: '回', r: 'まわ' }, { t: 'った' }, { t: 'あげく、' }, { t: 'タイヤ' }, { t: 'が' }, { t: 'パンク' }, { t: 'した。' },
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
          { t: '高等', r: 'こうとう' }, { t: '' }, { t: '学校', r: 'がっこう' }, { t: 'を' }, { t: '出', r: 'で' }, { t: 'て、' }, { t: '語学', r: 'ごがく' }, { t: '' }, { t: '学校', r: 'がっこう' }, { t: 'に' }, { t: '通', r: 'かよ' }, { t: 'う' }, { t: 'こと' }, { t: 'に' }, { t: 'した。' },
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
          { t: '文法', r: 'ぶんぽう' }, { t: 'の' }, { t: '法則', r: 'ほうそく' }, { t: 'を' }, { t: '複数', r: 'ふくすう' }, { t: '' }, { t: '混同', r: 'こんどう' }, { t: 'して、' }, { t: 'よく' }, { t: '間違', r: 'まちが' }, { t: 'えた。' },
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
          { t: '試験', r: 'しけん' }, { t: 'に' }, { t: '挑戦', r: 'ちょうせん' }, { t: 'する' }, { t: 'と' }, { t: '決', r: 'き' }, { t: 'め、' }, { t: '出題', r: 'しゅつだい' }, { t: '' }, { t: '範囲', r: 'はんい' }, { t: 'を' }, { t: '調', r: 'しら' }, { t: 'べた。' },
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
          { t: '手書', r: 'てが' }, { t: 'き' }, { t: 'の' }, { t: 'メモ' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'ながら、' }, { t: '一' }, { t: '気', r: 'き' }, { t: 'に' }, { t: '論文', r: 'ろんぶん' }, { t: 'を' }, { t: '完成', r: 'かんせい' }, { t: 'させた。' },
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
          { t: '学歴', r: 'がくれき' }, { t: '' }, { t: '不問', r: 'ふもん' }, { t: '、' }, { t: '年齢', r: 'ねんれい' }, { t: 'の' }, { t: '制限', r: 'せいげん' }, { t: 'なし' }, { t: 'と' }, { t: 'ある' }, { t: 'の' }, { t: 'は' }, { t: '好', r: 'この' }, { t: 'ましい。' },
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
          { t: '志望', r: 'しぼう' }, { t: '' }, { t: '動機', r: 'どうき' }, { t: 'に' }, { t: 'は、' }, { t: '熱意', r: 'ねつい' }, { t: 'を' }, { t: '込', r: 'こ' }, { t: 'めて' }, { t: '書', r: 'か' }, { t: 'いた。' },
        ],
        en: 'I wrote my reason for applying with real enthusiasm.',
      },
      {
        seg: [
          { t: '特技', r: 'とくぎ' }, { t: 'と、' }, { t: 'これ' }, { t: 'まで' }, { t: 'の' }, { t: '経験', r: 'けいけん' }, { t: 'を' }, { t: '生', r: 'い' }, { t: 'かせる' }, { t: '点' }, { t: 'を' }, { t: 'アピール' }, { t: 'した。' },
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
          { t: '合同', r: 'ごうどう' }, { t: '' }, { t: '説明会', r: 'せつめいかい' }, { t: 'で' }, { t: 'は、' }, { t: '公平', r: 'こうへい' }, { t: 'に' }, { t: '質問', r: 'しつもん' }, { t: 'に' }, { t: '対応', r: 'たいおう' }, { t: 'して' }, { t: 'くれた。' },
        ],
        en: 'At the joint information session they answered questions fairly.',
      },
      {
        seg: [
          { t: '面接', r: 'めんせつ' }, { t: 'で' }, { t: 'は' }, { t: '精一杯', r: 'せいいっぱい' }, { t: '' }, { t: '話', r: 'はな' }, { t: 'し、' }, { t: 'せめて' }, { t: '後悔', r: 'こうかい' }, { t: 'は' }, { t: 'しないように' }, { t: 'した。' },
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
          { t: '私', r: 'わたし' }, { t: 'の' }, { t: '会社', r: 'かいしゃ' }, { t: 'は' }, { t: '大手', r: 'おおて' }, { t: 'の' }, { t: '民間', r: 'みんかん' }, { t: '' }, { t: '企業', r: 'きぎょう' }, { t: 'で、' }, { t: '従業員', r: 'じゅうぎょういん' }, { t: 'も' }, { t: '多', r: 'おお' }, { t: 'い。' },
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
          { t: '仕事', r: 'しごと' }, { t: 'に' }, { t: '生', r: 'い' }, { t: 'きがい' }, { t: 'を' }, { t: '抱', r: 'いだ' }, { t: 'く' }, { t: '人' }, { t: 'は' }, { t: '強', r: 'つよ' }, { t: 'い。' },
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
          { t: '急用', r: 'きゅうよう' }, { t: 'なら' }, { t: '至急', r: 'しきゅう' }, { t: '' }, { t: '連絡', r: 'れんらく' }, { t: 'し、' }, { t: 'その' }, { t: '件', r: 'けん' }, { t: 'は' }, { t: 'じかに' }, { t: '話', r: 'はな' }, { t: 'す。' },
        ],
        en: 'If it is urgent I contact them immediately and discuss that matter in person.',
      },
      {
        seg: [
          { t: '依頼', r: 'いらい' }, { t: 'を' }, { t: '引', r: 'ひ' }, { t: 'き' }, { t: '受', r: 'う' }, { t: 'け、' }, { t: '後輩', r: 'こうはい' }, { t: 'に' }, { t: 'も' }, { t: '一' }, { t: '部', r: 'ぶ' }, { t: 'を' }, { t: '任', r: 'まか' }, { t: 'せた。' },
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
          { t: '久', r: 'ひさ' }, { t: 'しぶり' }, { t: 'に' }, { t: '会', r: 'あ' }, { t: 'った' }, { t: '部長', r: 'ぶちょう' }, { t: '' }, { t: '夫人', r: 'ふじん' }, { t: 'に、' }, { t: 'ご' }, { t: '無沙汰', r: 'ぶさた' }, { t: 'を' }, { t: 'わびた。' },
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
]
