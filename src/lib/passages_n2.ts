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
]
