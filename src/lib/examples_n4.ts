export const EXAMPLE_MAP_N4: Record<string, { jp: string; en: string; seg: { t: string; r?: string }[] }> = {
  // Chapter 1 - Section 1: Time
  'たった今': {
    jp: 'たった今、駅に着きました。',
    en: 'I just arrived at the station.',
    seg: [
      { t: 'たった' },
      { t: '今', r: 'いま' },
      { t: '、' },
      { t: '駅', r: 'えき' },
      { t: 'に' },
      { t: '着', r: 'つ' },
      { t: 'きました。' },
    ]
  },
  '今にも': {
    jp: '今にも雨が降りそうです。',
    en: 'It looks like it\'s about to rain.',
    seg: [
      { t: '今', r: 'いま' },
      { t: 'にも' },
      { t: '雨', r: 'あめ' },
      { t: 'が' },
      { t: '降', r: 'ふ' },
      { t: 'りそうです。' },
    ]
  },
  'もうすぐ': {
    jp: 'もうすぐ春が来ます。',
    en: 'Spring is coming soon.',
    seg: [
      { t: 'もうすぐ' },
      { t: '春', r: 'はる' },
      { t: 'が' },
      { t: '来', r: 'き' },
      { t: 'ます。' },
    ]
  },
  'さっき': {
    jp: 'さっき昼ごはんを食べました。',
    en: 'I ate lunch a little while ago.',
    seg: [
      { t: 'さっき' },
      { t: '昼', r: 'ひる' },
      { t: 'ごはんを' },
      { t: '食', r: 'た' },
      { t: 'べました。' },
    ]
  },
  'このごろ': {
    jp: 'このごろ忙しいです。',
    en: 'I\'ve been busy lately.',
    seg: [
      { t: 'このごろ' },
      { t: '忙', r: 'いそが' },
      { t: 'しいです。' },
    ]
  },
  '最近': {
    jp: '最近、よく運動しています。',
    en: 'I\'ve been exercising a lot recently.',
    seg: [
      { t: '最近', r: 'さいきん' },
      { t: '、よく' },
      { t: '運動', r: 'うんどう' },
      { t: 'しています。' },
    ]
  },
  'この間': {
    jp: 'この間、映画を見ました。',
    en: 'I saw a movie the other day.',
    seg: [
      { t: 'この' },
      { t: '間', r: 'あいだ' },
      { t: '、' },
      { t: '映画', r: 'えいが' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'ました。' },
    ]
  },
  '今度': {
    jp: '今度、一緒に食事しましょう。',
    en: 'Let\'s eat together next time.',
    seg: [
      { t: '今度', r: 'こんど' },
      { t: '、' },
      { t: '一緒', r: 'いっしょ' },
      { t: 'に' },
      { t: '食事', r: 'しょくじ' },
      { t: 'しましょう。' },
    ]
  },
  'いつでも': {
    jp: 'いつでも電話してください。',
    en: 'Please call me anytime.',
    seg: [
      { t: 'いつでも' },
      { t: '電話', r: 'でんわ' },
      { t: 'してください。' },
    ]
  },
  'いつか': {
    jp: 'いつか日本に行きたいです。',
    en: 'I want to go to Japan someday.',
    seg: [
      { t: 'いつか' },
      { t: '日本', r: 'にほん' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'きたいです。' },
    ]
  },
  'しょうらい': {
    jp: '将来は医者になりたいです。',
    en: 'I want to become a doctor in the future.',
    seg: [
      { t: '将来', r: 'しょうらい' },
      { t: 'は' },
      { t: '医者', r: 'いしゃ' },
      { t: 'になりたいです。' },
    ]
  },
  'むかし': {
    jp: 'むかし、ここに学校がありました。',
    en: 'There used to be a school here long ago.',
    seg: [
      { t: 'むかし、ここに' },
      { t: '学校', r: 'がっこう' },
      { t: 'がありました。' },
    ]
  },
  'ある日': {
    jp: 'ある日、不思議なことが起きました。',
    en: 'One day, something strange happened.',
    seg: [
      { t: 'ある' },
      { t: '日', r: 'ひ' },
      { t: '、' },
      { t: '不思議', r: 'ふしぎ' },
      { t: 'なことが' },
      { t: '起', r: 'お' },
      { t: 'きました。' },
    ]
  },
  '昼間': {
    jp: '昼間は図書館で勉強しています。',
    en: 'I study at the library during the day.',
    seg: [
      { t: '昼間', r: 'ひるま' },
      { t: 'は' },
      { t: '図書館', r: 'としょかん' },
      { t: 'で' },
      { t: '勉強', r: 'べんきょう' },
      { t: 'しています。' },
    ]
  },
  '夕方': {
    jp: '夕方、散歩しませんか。',
    en: 'Would you like to take a walk in the evening?',
    seg: [
      { t: '夕方', r: 'ゆうがた' },
      { t: '、' },
      { t: '散歩', r: 'さんぽ' },
      { t: 'しませんか。' },
    ]
  },
  '夜中': {
    jp: '夜中に犬が鳴いていました。',
    en: 'The dog was barking in the middle of the night.',
    seg: [
      { t: '夜中', r: 'よなか' },
      { t: 'に' },
      { t: '犬', r: 'いぬ' },
      { t: 'が' },
      { t: '鳴', r: 'な' },
      { t: 'いていました。' },
    ]
  },
  '明日': {
    jp: '明日は早く起きます。',
    en: 'I will wake up early tomorrow.',
    seg: [
      { t: '明日', r: 'あした' },
      { t: 'は' },
      { t: '早', r: 'はや' },
      { t: 'く' },
      { t: '起', r: 'お' },
      { t: 'きます。' },
    ]
  },
  'おととい': {
    jp: 'おとといから熱があります。',
    en: 'I\'ve had a fever since the day before yesterday.',
    seg: [
      { t: 'おとといから' },
      { t: '熱', r: 'ねつ' },
      { t: 'があります。' },
    ]
  },
  'ゆうべ': {
    jp: 'ゆうべよく眠れませんでした。',
    en: 'I couldn\'t sleep well last night.',
    seg: [
      { t: 'ゆうべよく' },
      { t: '眠', r: 'ねむ' },
      { t: 'れませんでした。' },
    ]
  },
  '今夜': {
    jp: '今夜はパーティーがあります。',
    en: 'There is a party tonight.',
    seg: [
      { t: '今夜', r: 'こんや' },
      { t: 'はパーティーがあります。' },
    ]
  },
  '今週': {
    jp: '今週は忙しいです。',
    en: 'I am busy this week.',
    seg: [
      { t: '今週', r: 'こんしゅう' },
      { t: 'は' },
      { t: '忙', r: 'いそが' },
      { t: 'しいです。' },
    ]
  },
  '今月': {
    jp: '今月は給料日です。',
    en: 'This month is payday.',
    seg: [
      { t: '今月', r: 'こんげつ' },
      { t: 'は' },
      { t: '給料日', r: 'きゅうりょうび' },
      { t: 'です。' },
    ]
  },
  '再来週': {
    jp: '再来週、試験があります。',
    en: 'There is an exam the week after next.',
    seg: [
      { t: '再来週', r: 'さらいしゅう' },
      { t: '、' },
      { t: '試験', r: 'しけん' },
      { t: 'があります。' },
    ]
  },
  '再来月': {
    jp: '再来月、旅行に行く予定です。',
    en: 'I plan to travel the month after next.',
    seg: [
      { t: '再来月', r: 'さらいげつ' },
      { t: '、' },
      { t: '旅行', r: 'りょこう' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'く' },
      { t: '予定', r: 'よてい' },
      { t: 'です。' },
    ]
  },
  '再来年': {
    jp: '再来年、大学を卒業します。',
    en: 'I will graduate from university in two years.',
    seg: [
      { t: '再来年', r: 'さらいねん' },
      { t: '、' },
      { t: '大学', r: 'だいがく' },
      { t: 'を' },
      { t: '卒業', r: 'そつぎょう' },
      { t: 'します。' },
    ]
  },
  'おととし': {
    jp: 'おととし、引っ越しました。',
    en: 'I moved the year before last.',
    seg: [
      { t: 'おととし、' },
      { t: '引', r: 'ひ' },
      { t: 'っ' },
      { t: '越', r: 'こ' },
      { t: 'しました。' },
    ]
  },
  '毎週': {
    jp: '毎週日曜日にジョギングします。',
    en: 'I jog every Sunday.',
    seg: [
      { t: '毎週', r: 'まいしゅう' },
      { t: '日曜日', r: 'にちようび' },
      { t: 'にジョギングします。' },
    ]
  },
  '毎月': {
    jp: '毎月本を三冊読みます。',
    en: 'I read three books every month.',
    seg: [
      { t: '毎月', r: 'まいつき' },
      { t: '本', r: 'ほん' },
      { t: 'を' },
      { t: '三冊', r: 'さんさつ' },
      { t: '読', r: 'よ' },
      { t: 'みます。' },
    ]
  },
  '毎年': {
    jp: '毎年、花見をします。',
    en: 'We go cherry blossom viewing every year.',
    seg: [
      { t: '毎年', r: 'まいとし' },
      { t: '、' },
      { t: '花見', r: 'はなみ' },
      { t: 'をします。' },
    ]
  },
  '平日': {
    jp: '平日は電車で通勤しています。',
    en: 'I commute by train on weekdays.',
    seg: [
      { t: '平日', r: 'へいじつ' },
      { t: 'は' },
      { t: '電車', r: 'でんしゃ' },
      { t: 'で' },
      { t: '通勤', r: 'つうきん' },
      { t: 'しています。' },
    ]
  },
  '最初': {
    jp: '最初から説明してください。',
    en: 'Please explain from the beginning.',
    seg: [
      { t: '最初', r: 'さいしょ' },
      { t: 'から' },
      { t: '説明', r: 'せつめい' },
      { t: 'してください。' },
    ]
  },
  '最中': {
    jp: '会議の最中に電話が鳴りました。',
    en: 'The phone rang in the middle of the meeting.',
    seg: [
      { t: '会議', r: 'かいぎ' },
      { t: 'の' },
      { t: '最中', r: 'さいちゅう' },
      { t: 'に' },
      { t: '電話', r: 'でんわ' },
      { t: 'が' },
      { t: '鳴', r: 'な' },
      { t: 'りました。' },
    ]
  },
  '最後': {
    jp: '最後まで頑張りました。',
    en: 'I did my best until the end.',
    seg: [
      { t: '最後', r: 'さいご' },
      { t: 'まで' },
      { t: '頑張', r: 'がんば' },
      { t: 'りました。' },
    ]
  },
  '先に': {
    jp: '先に行ってください。',
    en: 'Please go ahead.',
    seg: [
      { t: '先', r: 'さき' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'ってください。' },
    ]
  },

  // Chapter 1 - Section 2: Family
  '夫': {
    jp: '夫は会社員です。',
    en: 'My husband is a company employee.',
    seg: [
      { t: '夫', r: 'おっと' },
      { t: 'は' },
      { t: '会社員', r: 'かいしゃいん' },
      { t: 'です。' },
    ]
  },
  'つま': {
    jp: '妻は今、料理をしています。',
    en: 'My wife is cooking now.',
    seg: [
      { t: '妻', r: 'つま' },
      { t: 'は' },
      { t: '今', r: 'いま' },
      { t: '、' },
      { t: '料理', r: 'りょうり' },
      { t: 'をしています。' },
    ]
  },
  '両親': {
    jp: '両親は田舎に住んでいます。',
    en: 'My parents live in the countryside.',
    seg: [
      { t: '両親', r: 'りょうしん' },
      { t: 'は' },
      { t: '田舎', r: 'いなか' },
      { t: 'に' },
      { t: '住', r: 'す' },
      { t: 'んでいます。' },
    ]
  },
  'むすこ': {
    jp: '息子は今年、小学校に入ります。',
    en: 'My son starts elementary school this year.',
    seg: [
      { t: '息子', r: 'むすこ' },
      { t: 'は' },
      { t: '今年', r: 'ことし' },
      { t: '、' },
      { t: '小学校', r: 'しょうがっこう' },
      { t: 'に' },
      { t: '入', r: 'はい' },
      { t: 'ります。' },
    ]
  },
  'むすめ': {
    jp: '娘はピアノが上手です。',
    en: 'My daughter is good at piano.',
    seg: [
      { t: '娘', r: 'むすめ' },
      { t: 'はピアノが' },
      { t: '上手', r: 'じょうず' },
      { t: 'です。' },
    ]
  },
  'お子さん': {
    jp: 'お子さんはいくつですか。',
    en: 'How old is your child?',
    seg: [
      { t: 'お' },
      { t: '子', r: 'こ' },
      { t: 'さんはいくつですか。' },
    ]
  },
  '祖父': {
    jp: '祖父は八十歳です。',
    en: 'My grandfather is 80 years old.',
    seg: [
      { t: '祖父', r: 'そふ' },
      { t: 'は' },
      { t: '八十歳', r: 'はちじゅっさい' },
      { t: 'です。' },
    ]
  },
  '祖母': {
    jp: '祖母の料理はおいしいです。',
    en: 'My grandmother\'s cooking is delicious.',
    seg: [
      { t: '祖母', r: 'そぼ' },
      { t: 'の' },
      { t: '料理', r: 'りょうり' },
      { t: 'はおいしいです。' },
    ]
  },
  'まご': {
    jp: '孫が生まれました。',
    en: 'My grandchild was born.',
    seg: [
      { t: '孫', r: 'まご' },
      { t: 'が' },
      { t: '生', r: 'う' },
      { t: 'まれました。' },
    ]
  },
  'おじ': {
    jp: 'おじは大阪に住んでいます。',
    en: 'My uncle lives in Osaka.',
    seg: [
      { t: 'おじは' },
      { t: '大阪', r: 'おおさか' },
      { t: 'に' },
      { t: '住', r: 'す' },
      { t: 'んでいます。' },
    ]
  },
  'おば': {
    jp: 'おばからプレゼントをもらいました。',
    en: 'I received a gift from my aunt.',
    seg: [
      { t: 'おばからプレゼントをもらいました。' },
    ]
  },
  '親せき': {
    jp: '親戚が集まりました。',
    en: 'My relatives gathered together.',
    seg: [
      { t: '親戚', r: 'しんせき' },
      { t: 'が' },
      { t: '集', r: 'あつ' },
      { t: 'まりました。' },
    ]
  },
  'ペット': {
    jp: 'ペットを飼っていますか。',
    en: 'Do you have any pets?',
    seg: [
      { t: 'ペットを' },
      { t: '飼', r: 'か' },
      { t: 'っていますか。' },
    ]
  },
  '似る': {
    jp: '彼は父親に似ています。',
    en: 'He looks like his father.',
    seg: [
      { t: '彼', r: 'かれ' },
      { t: 'は' },
      { t: '父親', r: 'ちちおや' },
      { t: 'に' },
      { t: '似', r: 'に' },
      { t: 'ています。' },
    ]
  },
  'かける': {
    jp: 'いすに腰をかけてください。',
    en: 'Please sit down in the chair.',
    seg: [
      { t: 'いすに' },
      { t: '腰', r: 'こし' },
      { t: 'をかけてください。' },
    ]
  },
  'しかる': {
    jp: '先生に叱られました。',
    en: 'I was scolded by the teacher.',
    seg: [
      { t: '先生', r: 'せんせい' },
      { t: 'に' },
      { t: '叱', r: 'しか' },
      { t: 'られました。' },
    ]
  },
  'ほめる': {
    jp: '母に料理をほめられました。',
    en: 'My mother praised my cooking.',
    seg: [
      { t: '母', r: 'はは' },
      { t: 'に' },
      { t: '料理', r: 'りょうり' },
      { t: 'をほめられました。' },
    ]
  },
  '飼う': {
    jp: '猫を飼っています。',
    en: 'I keep a cat.',
    seg: [
      { t: '猫', r: 'ねこ' },
      { t: 'を' },
      { t: '飼', r: 'か' },
      { t: 'っています。' },
    ]
  },

  // Chapter 1 - Section 3: Home
  'アパート': {
    jp: '駅の近くのアパートに住んでいます。',
    en: 'I live in an apartment near the station.',
    seg: [
      { t: '駅', r: 'えき' },
      { t: 'の' },
      { t: '近', r: 'ちか' },
      { t: 'くのアパートに' },
      { t: '住', r: 'す' },
      { t: 'んでいます。' },
    ]
  },
  'マンション': {
    jp: '新しいマンションに引っ越しました。',
    en: 'I moved to a new apartment building.',
    seg: [
      { t: '新', r: 'あたら' },
      { t: 'しいマンションに' },
      { t: '引っ越', r: 'ひっこ' },
      { t: 'しました。' },
    ]
  },
  '家賃': {
    jp: '家賃は月に六万円です。',
    en: 'The rent is 60,000 yen per month.',
    seg: [
      { t: '家賃', r: 'やちん' },
      { t: 'は' },
      { t: '月', r: 'つき' },
      { t: 'に' },
      { t: '六万円', r: 'ろくまんえん' },
      { t: 'です。' },
    ]
  },
  '管理人': {
    jp: '管理人さんに鍵を渡しました。',
    en: 'I gave the key to the building manager.',
    seg: [
      { t: '管理人', r: 'かんりにん' },
      { t: 'さんに' },
      { t: '鍵', r: 'かぎ' },
      { t: 'を' },
      { t: '渡', r: 'わた' },
      { t: 'しました。' },
    ]
  },
  '住所': {
    jp: '住所を教えてください。',
    en: 'Please tell me your address.',
    seg: [
      { t: '住所', r: 'じゅうしょ' },
      { t: 'を' },
      { t: '教', r: 'おし' },
      { t: 'えてください。' },
    ]
  },
  '建てる': {
    jp: '新しい家を建てました。',
    en: 'We built a new house.',
    seg: [
      { t: '新', r: 'あたら' },
      { t: 'しい' },
      { t: '家', r: 'いえ' },
      { t: 'を' },
      { t: '建', r: 'た' },
      { t: 'てました。' },
    ]
  },
  '建つ': {
    jp: '駅の前にビルが建ちました。',
    en: 'A building was constructed in front of the station.',
    seg: [
      { t: '駅', r: 'えき' },
      { t: 'の' },
      { t: '前', r: 'まえ' },
      { t: 'にビルが' },
      { t: '建', r: 'た' },
      { t: 'ちました。' },
    ]
  },
  '立てる': {
    jp: '旗を立てました。',
    en: 'I put up a flag.',
    seg: [
      { t: '旗', r: 'はた' },
      { t: 'を' },
      { t: '立', r: 'た' },
      { t: 'てました。' },
    ]
  },
  '立つ': {
    jp: 'バス停に人が立っています。',
    en: 'People are standing at the bus stop.',
    seg: [
      { t: 'バス' },
      { t: '停', r: 'てい' },
      { t: 'に' },
      { t: '人', r: 'ひと' },
      { t: 'が' },
      { t: '立', r: 'た' },
      { t: 'っています。' },
    ]
  },
  'ひっこし': {
    jp: '来月、引っ越しします。',
    en: 'I\'m moving next month.',
    seg: [
      { t: '来月', r: 'らいげつ' },
      { t: '、' },
      { t: '引っ越', r: 'ひっこ' },
      { t: 'しします。' },
    ]
  },
  'うつす': {
    jp: '荷物を別の部屋に移しました。',
    en: 'I moved the luggage to another room.',
    seg: [
      { t: '荷物', r: 'にもつ' },
      { t: 'を' },
      { t: '別', r: 'べつ' },
      { t: 'の' },
      { t: '部屋', r: 'へや' },
      { t: 'に' },
      { t: '移', r: 'うつ' },
      { t: 'しました。' },
    ]
  },
  'うつる': {
    jp: '新しい家に移りました。',
    en: 'I moved to a new house.',
    seg: [
      { t: '新', r: 'あたら' },
      { t: 'しい' },
      { t: '家', r: 'いえ' },
      { t: 'に' },
      { t: '移', r: 'うつ' },
      { t: 'りました。' },
    ]
  },
  '自宅': {
    jp: '自宅で仕事をしています。',
    en: 'I work from home.',
    seg: [
      { t: '自宅', r: 'じたく' },
      { t: 'で' },
      { t: '仕事', r: 'しごと' },
      { t: 'をしています。' },
    ]
  },
  'お宅': {
    jp: 'お宅はどちらですか。',
    en: 'Where is your home?',
    seg: [
      { t: 'お' },
      { t: '宅', r: 'たく' },
      { t: 'はどちらですか。' },
    ]
  },
  '訪問': {
    jp: '先生のお宅を訪問しました。',
    en: 'I visited my teacher\'s home.',
    seg: [
      { t: '先生', r: 'せんせい' },
      { t: 'のお' },
      { t: '宅', r: 'たく' },
      { t: 'を' },
      { t: '訪問', r: 'ほうもん' },
      { t: 'しました。' },
    ]
  },
  '招待': {
    jp: 'パーティーに招待されました。',
    en: 'I was invited to a party.',
    seg: [
      { t: 'パーティーに' },
      { t: '招待', r: 'しょうたい' },
      { t: 'されました。' },
    ]
  },
  '近所': {
    jp: '近所に新しいお店ができました。',
    en: 'A new shop opened in the neighborhood.',
    seg: [
      { t: '近所', r: 'きんじょ' },
      { t: 'に' },
      { t: '新', r: 'あたら' },
      { t: 'しいお' },
      { t: '店', r: 'みせ' },
      { t: 'ができました。' },
    ]
  },
  '周り': {
    jp: '家の周りに花を植えました。',
    en: 'I planted flowers around the house.',
    seg: [
      { t: '家', r: 'いえ' },
      { t: 'の' },
      { t: '周', r: 'まわ' },
      { t: 'りに' },
      { t: '花', r: 'はな' },
      { t: 'を' },
      { t: '植', r: 'う' },
      { t: 'えました。' },
    ]
  },
  'げんかん': {
    jp: '玄関に靴を並べました。',
    en: 'I lined up the shoes at the entrance.',
    seg: [
      { t: '玄関', r: 'げんかん' },
      { t: 'に' },
      { t: '靴', r: 'くつ' },
      { t: 'を' },
      { t: '並', r: 'なら' },
      { t: 'べました。' },
    ]
  },
  '入り口': {
    jp: '入り口で待っています。',
    en: 'I\'m waiting at the entrance.',
    seg: [
      { t: '入', r: 'い' },
      { t: 'り' },
      { t: '口', r: 'ぐち' },
      { t: 'で' },
      { t: '待', r: 'ま' },
      { t: 'っています。' },
    ]
  },
  'かかる': {
    jp: '壁に絵がかかっています。',
    en: 'A picture is hanging on the wall.',
    seg: [
      { t: '壁', r: 'かべ' },
      { t: 'に' },
      { t: '絵', r: 'え' },
      { t: 'がかかっています。' },
    ]
  },
  'かべ': {
    jp: '壁が白くてきれいです。',
    en: 'The walls are white and clean.',
    seg: [
      { t: '壁', r: 'かべ' },
      { t: 'が' },
      { t: '白', r: 'しろ' },
      { t: 'くてきれいです。' },
    ]
  },
  'ろう下': {
    jp: '廊下を静かに歩いてください。',
    en: 'Please walk quietly in the hallway.',
    seg: [
      { t: '廊下', r: 'ろうか' },
      { t: 'を' },
      { t: '静', r: 'しず' },
      { t: 'かに' },
      { t: '歩', r: 'ある' },
      { t: 'いてください。' },
    ]
  },
  '台所': {
    jp: '台所でご飯を作っています。',
    en: 'I\'m making rice in the kitchen.',
    seg: [
      { t: '台所', r: 'だいどころ' },
      { t: 'でご' },
      { t: '飯', r: 'はん' },
      { t: 'を' },
      { t: '作', r: 'つく' },
      { t: 'っています。' },
    ]
  },
  '水道': {
    jp: '水道の水を飲んでいます。',
    en: 'I drink tap water.',
    seg: [
      { t: '水道', r: 'すいどう' },
      { t: 'の' },
      { t: '水', r: 'みず' },
      { t: 'を' },
      { t: '飲', r: 'の' },
      { t: 'んでいます。' },
    ]
  },
  'ガス': {
    jp: 'ガスを消してください。',
    en: 'Please turn off the gas.',
    seg: [
      { t: 'ガスを' },
      { t: '消', r: 'け' },
      { t: 'してください。' },
    ]
  },

  // Chapter 1 - Section 4: Room
  '和室': {
    jp: '和室でお茶を飲みました。',
    en: 'I drank tea in the Japanese-style room.',
    seg: [
      { t: '和室', r: 'わしつ' },
      { t: 'でお' },
      { t: '茶', r: 'ちゃ' },
      { t: 'を' },
      { t: '飲', r: 'の' },
      { t: 'みました。' },
    ]
  },
  'たたみ': {
    jp: '畳の部屋が好きです。',
    en: 'I like rooms with tatami floors.',
    seg: [
      { t: '畳', r: 'たたみ' },
      { t: 'の' },
      { t: '部屋', r: 'へや' },
      { t: 'が' },
      { t: '好', r: 'す' },
      { t: 'きです。' },
    ]
  },
  '押し入れ': {
    jp: '押し入れに布団をしまいました。',
    en: 'I put the futon away in the closet.',
    seg: [
      { t: '押', r: 'お' },
      { t: 'し' },
      { t: '入', r: 'い' },
      { t: 'れに' },
      { t: '布団', r: 'ふとん' },
      { t: 'をしまいました。' },
    ]
  },
  'ふとん': {
    jp: '布団を干しました。',
    en: 'I aired out the futon.',
    seg: [
      { t: '布団', r: 'ふとん' },
      { t: 'を' },
      { t: '干', r: 'ほ' },
      { t: 'しました。' },
    ]
  },
  'ガラス': {
    jp: 'ガラスのコップが割れました。',
    en: 'The glass cup broke.',
    seg: [
      { t: 'ガラスのコップが' },
      { t: '割', r: 'わ' },
      { t: 'れました。' },
    ]
  },
  'カーテン': {
    jp: 'カーテンを開けました。',
    en: 'I opened the curtains.',
    seg: [
      { t: 'カーテンを' },
      { t: '開', r: 'あ' },
      { t: 'けました。' },
    ]
  },
  'すみ': {
    jp: '部屋のすみに荷物があります。',
    en: 'There are bags in the corner of the room.',
    seg: [
      { t: '部屋', r: 'へや' },
      { t: 'のすみに' },
      { t: '荷物', r: 'にもつ' },
      { t: 'があります。' },
    ]
  },
  '家具': {
    jp: '新しい家具を買いました。',
    en: 'I bought new furniture.',
    seg: [
      { t: '新', r: 'あたら' },
      { t: 'しい' },
      { t: '家具', r: 'かぐ' },
      { t: 'を' },
      { t: '買', r: 'か' },
      { t: 'いました。' },
    ]
  },
  'たな': {
    jp: '棚に本を並べました。',
    en: 'I lined up books on the shelf.',
    seg: [
      { t: '棚', r: 'たな' },
      { t: 'に' },
      { t: '本', r: 'ほん' },
      { t: 'を' },
      { t: '並', r: 'なら' },
      { t: 'べました。' },
    ]
  },
  '組み立てる': {
    jp: '家具を組み立てました。',
    en: 'I assembled the furniture.',
    seg: [
      { t: '家具', r: 'かぐ' },
      { t: 'を' },
      { t: '組', r: 'く' },
      { t: 'み' },
      { t: '立', r: 'た' },
      { t: 'てました。' },
    ]
  },
  '引き出し': {
    jp: '引き出しの中に鍵があります。',
    en: 'The key is in the drawer.',
    seg: [
      { t: '引', r: 'ひ' },
      { t: 'き' },
      { t: '出', r: 'だ' },
      { t: 'しの' },
      { t: '中', r: 'なか' },
      { t: 'に' },
      { t: '鍵', r: 'かぎ' },
      { t: 'があります。' },
    ]
  },
  '片づける': {
    jp: '部屋を片づけました。',
    en: 'I tidied up the room.',
    seg: [
      { t: '部屋', r: 'へや' },
      { t: 'を' },
      { t: '片', r: 'かた' },
      { t: 'づけました。' },
    ]
  },
  '片づく': {
    jp: 'ようやく部屋が片づきました。',
    en: 'The room finally got tidied up.',
    seg: [
      { t: 'ようやく' },
      { t: '部屋', r: 'へや' },
      { t: 'が' },
      { t: '片', r: 'かた' },
      { t: 'づきました。' },
    ]
  },
  '整理': {
    jp: '書類を整理しています。',
    en: 'I am organizing documents.',
    seg: [
      { t: '書類', r: 'しょるい' },
      { t: 'を' },
      { t: '整理', r: 'せいり' },
      { t: 'しています。' },
    ]
  },
  '動かす': {
    jp: 'テーブルを動かしました。',
    en: 'I moved the table.',
    seg: [
      { t: 'テーブルを' },
      { t: '動', r: 'うご' },
      { t: 'かしました。' },
    ]
  },
  '動く': {
    jp: 'この椅子はよく動きます。',
    en: 'This chair moves easily.',
    seg: [
      { t: 'この' },
      { t: '椅子', r: 'いす' },
      { t: 'はよく' },
      { t: '動', r: 'うご' },
      { t: 'きます。' },
    ]
  },
  '花びん': {
    jp: '花びんに花を入れました。',
    en: 'I put flowers in the vase.',
    seg: [
      { t: '花', r: 'はな' },
      { t: 'びんに' },
      { t: '花', r: 'はな' },
      { t: 'を' },
      { t: '入', r: 'い' },
      { t: 'れました。' },
    ]
  },
  'カレンダー': {
    jp: 'カレンダーに予定を書きました。',
    en: 'I wrote my plans on the calendar.',
    seg: [
      { t: 'カレンダーに' },
      { t: '予定', r: 'よてい' },
      { t: 'を' },
      { t: '書', r: 'か' },
      { t: 'きました。' },
    ]
  },
  'ポスター': {
    jp: '壁にポスターをはりました。',
    en: 'I put a poster on the wall.',
    seg: [
      { t: '壁', r: 'かべ' },
      { t: 'にポスターをはりました。' },
    ]
  },
  'かざる': {
    jp: '部屋を花でかざりました。',
    en: 'I decorated the room with flowers.',
    seg: [
      { t: '部屋', r: 'へや' },
      { t: 'を' },
      { t: '花', r: 'はな' },
      { t: 'でかざりました。' },
    ]
  },
  'はる': {
    jp: '壁に写真をはりました。',
    en: 'I put up a photo on the wall.',
    seg: [
      { t: '壁', r: 'かべ' },
      { t: 'に' },
      { t: '写真', r: 'しゃしん' },
      { t: 'をはりました。' },
    ]
  },
  '暖房': {
    jp: '暖房をつけてください。',
    en: 'Please turn on the heater.',
    seg: [
      { t: '暖房', r: 'だんぼう' },
      { t: 'をつけてください。' },
    ]
  },
  '上げる': {
    jp: '音量を上げてください。',
    en: 'Please turn up the volume.',
    seg: [
      { t: '音量', r: 'おんりょう' },
      { t: 'を' },
      { t: '上', r: 'あ' },
      { t: 'げてください。' },
    ]
  },
  '電源': {
    jp: '電源を切ってください。',
    en: 'Please turn off the power.',
    seg: [
      { t: '電源', r: 'でんげん' },
      { t: 'を' },
      { t: '切', r: 'き' },
      { t: 'ってください。' },
    ]
  },
  'つける': {
    jp: 'エアコンをつけました。',
    en: 'I turned on the air conditioner.',
    seg: [
      { t: 'エアコンをつけました。' },
    ]
  },
  'つく': {
    jp: '電気がつきました。',
    en: 'The light came on.',
    seg: [
      { t: '電気', r: 'でんき' },
      { t: 'がつきました。' },
    ]
  },
  '消す': {
    jp: '電気を消してください。',
    en: 'Please turn off the light.',
    seg: [
      { t: '電気', r: 'でんき' },
      { t: 'を' },
      { t: '消', r: 'け' },
      { t: 'してください。' },
    ]
  },
  '消える': {
    jp: 'ろうそくの火が消えました。',
    en: 'The candle flame went out.',
    seg: [
      { t: 'ろうそくの' },
      { t: '火', r: 'ひ' },
      { t: 'が' },
      { t: '消', r: 'き' },
      { t: 'えました。' },
    ]
  },

  // Chapter 1 - Section 5: Morning to night
  '起きる': {
    jp: '毎朝六時に起きます。',
    en: 'I wake up at 6 every morning.',
    seg: [
      { t: '毎朝', r: 'まいあさ' },
      { t: '六時', r: 'ろくじ' },
      { t: 'に' },
      { t: '起', r: 'お' },
      { t: 'きます。' },
    ]
  },
  '起こす': {
    jp: '明日の朝、起こしてください。',
    en: 'Please wake me up tomorrow morning.',
    seg: [
      { t: '明日', r: 'あした' },
      { t: 'の' },
      { t: '朝', r: 'あさ' },
      { t: '、' },
      { t: '起', r: 'お' },
      { t: 'こしてください。' },
    ]
  },
  '早起き': {
    jp: '早起きは体にいいです。',
    en: 'Getting up early is good for your health.',
    seg: [
      { t: '早起', r: 'はやお' },
      { t: 'きは' },
      { t: '体', r: 'からだ' },
      { t: 'にいいです。' },
    ]
  },
  'ねぼう': {
    jp: '今朝は寝坊しました。',
    en: 'I overslept this morning.',
    seg: [
      { t: '今朝', r: 'けさ' },
      { t: 'は' },
      { t: '寝坊', r: 'ねぼう' },
      { t: 'しました。' },
    ]
  },
  'みがく': {
    jp: '歯をみがいてから寝ます。',
    en: 'I brush my teeth before sleeping.',
    seg: [
      { t: '歯', r: 'は' },
      { t: 'をみがいてから' },
      { t: '寝', r: 'ね' },
      { t: 'ます。' },
    ]
  },
  'ケータイ': {
    jp: 'ケータイを忘れました。',
    en: 'I forgot my mobile phone.',
    seg: [
      { t: 'ケータイを' },
      { t: '忘', r: 'わす' },
      { t: 'れました。' },
    ]
  },
  '鳴る': {
    jp: '目覚まし時計が鳴りました。',
    en: 'The alarm clock rang.',
    seg: [
      { t: '目覚まし時計', r: 'めざましどけい' },
      { t: 'が' },
      { t: '鳴', r: 'な' },
      { t: 'りました。' },
    ]
  },
  'ごみ': {
    jp: 'ごみを出してください。',
    en: 'Please take out the trash.',
    seg: [
      { t: 'ごみを' },
      { t: '出', r: 'だ' },
      { t: 'してください。' },
    ]
  },
  'びん': {
    jp: 'びんのごみは月曜日に出します。',
    en: 'I put out bottle garbage on Mondays.',
    seg: [
      { t: 'びんのごみは' },
      { t: '月曜日', r: 'げつようび' },
      { t: 'に' },
      { t: '出', r: 'だ' },
      { t: 'します。' },
    ]
  },
  'カン': {
    jp: '缶のごみを捨てました。',
    en: 'I threw away the can garbage.',
    seg: [
      { t: '缶', r: 'かん' },
      { t: 'のごみを' },
      { t: '捨', r: 'す' },
      { t: 'てました。' },
    ]
  },
  'ペットボトル': {
    jp: 'ペットボトルはリサイクルします。',
    en: 'I recycle plastic bottles.',
    seg: [
      { t: 'ペットボトルはリサイクルします。' },
    ]
  },
  'リサイクル': {
    jp: '紙をリサイクルしています。',
    en: 'I recycle paper.',
    seg: [
      { t: '紙', r: 'かみ' },
      { t: 'をリサイクルしています。' },
    ]
  },
  '出す': {
    jp: 'ごみを出しました。',
    en: 'I put out the garbage.',
    seg: [
      { t: 'ごみを' },
      { t: '出', r: 'だ' },
      { t: 'しました。' },
    ]
  },
  '出る': {
    jp: '朝八時に家を出ます。',
    en: 'I leave home at 8 in the morning.',
    seg: [
      { t: '朝', r: 'あさ' },
      { t: '八時', r: 'はちじ' },
      { t: 'に' },
      { t: '家', r: 'いえ' },
      { t: 'を' },
      { t: '出', r: 'で' },
      { t: 'ます。' },
    ]
  },
  'もえる': {
    jp: 'もえるごみは火曜日に出します。',
    en: 'I put out burnable trash on Tuesdays.',
    seg: [
      { t: 'もえるごみは' },
      { t: '火曜日', r: 'かようび' },
      { t: 'に' },
      { t: '出', r: 'だ' },
      { t: 'します。' },
    ]
  },
  'せっけん': {
    jp: '手をせっけんで洗いました。',
    en: 'I washed my hands with soap.',
    seg: [
      { t: '手', r: 'て' },
      { t: 'をせっけんで' },
      { t: '洗', r: 'あら' },
      { t: 'いました。' },
    ]
  },
  'シャンプー': {
    jp: 'シャンプーを買ってきました。',
    en: 'I bought shampoo.',
    seg: [
      { t: 'シャンプーを' },
      { t: '買', r: 'か' },
      { t: 'ってきました。' },
    ]
  },
  'せんたく機': {
    jp: 'せんたく機が壊れました。',
    en: 'The washing machine broke.',
    seg: [
      { t: 'せんたく' },
      { t: '機', r: 'き' },
      { t: 'が' },
      { t: '壊', r: 'こわ' },
      { t: 'れました。' },
    ]
  },
  'せんたく物': {
    jp: 'せんたく物を干しました。',
    en: 'I hung out the laundry.',
    seg: [
      { t: 'せんたく' },
      { t: '物', r: 'もの' },
      { t: 'を' },
      { t: '干', r: 'ほ' },
      { t: 'しました。' },
    ]
  },
  'クリーニング': {
    jp: 'スーツをクリーニングに出しました。',
    en: 'I sent my suit to the dry cleaners.',
    seg: [
      { t: 'スーツをクリーニングに' },
      { t: '出', r: 'だ' },
      { t: 'しました。' },
    ]
  },
  'タオル': {
    jp: 'タオルで手をふきました。',
    en: 'I dried my hands with a towel.',
    seg: [
      { t: 'タオルで' },
      { t: '手', r: 'て' },
      { t: 'をふきました。' },
    ]
  },
  'かわかす': {
    jp: '髪をドライヤーでかわかしました。',
    en: 'I dried my hair with a hair dryer.',
    seg: [
      { t: '髪', r: 'かみ' },
      { t: 'をドライヤーでかわかしました。' },
    ]
  },
  'かわく': {
    jp: '洗濯物がかわきました。',
    en: 'The laundry dried.',
    seg: [
      { t: '洗濯物', r: 'せんたくもの' },
      { t: 'がかわきました。' },
    ]
  },
  'えさ': {
    jp: '猫にえさをあげました。',
    en: 'I gave food to the cat.',
    seg: [
      { t: '猫', r: 'ねこ' },
      { t: 'にえさをあげました。' },
    ]
  },
  '世話': {
    jp: '子どもの世話をしています。',
    en: 'I\'m taking care of the children.',
    seg: [
      { t: '子', r: 'こ' },
      { t: 'どもの' },
      { t: '世話', r: 'せわ' },
      { t: 'をしています。' },
    ]
  },
  'るす': {
    jp: '留守にしていました。',
    en: 'I was away from home.',
    seg: [
      { t: '留守', r: 'るす' },
      { t: 'にしていました。' },
    ]
  },
  '宅配便': {
    jp: '宅配便が届きました。',
    en: 'The delivery arrived.',
    seg: [
      { t: '宅配便', r: 'たくはいびん' },
      { t: 'が' },
      { t: '届', r: 'とど' },
      { t: 'きました。' },
    ]
  },
  'とどく': {
    jp: '荷物が届きました。',
    en: 'The package arrived.',
    seg: [
      { t: '荷物', r: 'にもつ' },
      { t: 'が' },
      { t: '届', r: 'とど' },
      { t: 'きました。' },
    ]
  },
  'とどける': {
    jp: '荷物を届けました。',
    en: 'I delivered the package.',
    seg: [
      { t: '荷物', r: 'にもつ' },
      { t: 'を' },
      { t: '届', r: 'とど' },
      { t: 'けました。' },
    ]
  },
  '日記': {
    jp: '毎日日記を書いています。',
    en: 'I write in my diary every day.',
    seg: [
      { t: '毎日', r: 'まいにち' },
      { t: '日記', r: 'にっき' },
      { t: 'を' },
      { t: '書', r: 'か' },
      { t: 'いています。' },
    ]
  },
  'ねむる': {
    jp: '赤ちゃんがねむっています。',
    en: 'The baby is sleeping.',
    seg: [
      { t: '赤', r: 'あか' },
      { t: 'ちゃんがねむっています。' },
    ]
  },
  '生活': {
    jp: '日本での生活に慣れました。',
    en: 'I got used to life in Japan.',
    seg: [
      { t: '日本', r: 'にほん' },
      { t: 'での' },
      { t: '生活', r: 'せいかつ' },
      { t: 'に' },
      { t: '慣', r: 'な' },
      { t: 'れました。' },
    ]
  },
  '暮らす': {
    jp: '東京で暮らしています。',
    en: 'I live in Tokyo.',
    seg: [
      { t: '東京', r: 'とうきょう' },
      { t: 'で' },
      { t: '暮', r: 'く' },
      { t: 'らしています。' },
    ]
  },
  '習慣': {
    jp: '毎朝コーヒーを飲む習慣があります。',
    en: 'I have a habit of drinking coffee every morning.',
    seg: [
      { t: '毎朝', r: 'まいあさ' },
      { t: 'コーヒーを' },
      { t: '飲', r: 'の' },
      { t: 'む' },
      { t: '習慣', r: 'しゅうかん' },
      { t: 'があります。' },
    ]
  },

  // Chapter 2 - Section 1: School
  '小学校': {
    jp: '小学校の同級生に会いました。',
    en: 'I met a classmate from elementary school.',
    seg: [
      { t: '小学校', r: 'しょうがっこう' },
      { t: 'の' },
      { t: '同級生', r: 'どうきゅうせい' },
      { t: 'に' },
      { t: '会', r: 'あ' },
      { t: 'いました。' },
    ]
  },
  '中学校': {
    jp: '中学校では英語を勉強しました。',
    en: 'I studied English in junior high school.',
    seg: [
      { t: '中学校', r: 'ちゅうがっこう' },
      { t: 'では' },
      { t: '英語', r: 'えいご' },
      { t: 'を' },
      { t: '勉強', r: 'べんきょう' },
      { t: 'しました。' },
    ]
  },
  '高校': {
    jp: '高校は電車で通っています。',
    en: 'I commute to high school by train.',
    seg: [
      { t: '高校', r: 'こうこう' },
      { t: 'は' },
      { t: '電車', r: 'でんしゃ' },
      { t: 'で' },
      { t: '通', r: 'かよ' },
      { t: 'っています。' },
    ]
  },
  'ようち園': {
    jp: '幼稚園に通い始めました。',
    en: 'I started attending kindergarten.',
    seg: [
      { t: '幼稚園', r: 'ようちえん' },
      { t: 'に' },
      { t: '通', r: 'かよ' },
      { t: 'い' },
      { t: '始', r: 'はじ' },
      { t: 'めました。' },
    ]
  },
  '専門学校': {
    jp: '調理の専門学校に入りました。',
    en: 'I enrolled in a culinary school.',
    seg: [
      { t: '調理', r: 'ちょうり' },
      { t: 'の' },
      { t: '専門学校', r: 'せんもんがっこう' },
      { t: 'に' },
      { t: '入', r: 'はい' },
      { t: 'りました。' },
    ]
  },
  '入学': {
    jp: '来春、大学に入学します。',
    en: 'I will enter university next spring.',
    seg: [
      { t: '来春', r: 'らいしゅん' },
      { t: '、' },
      { t: '大学', r: 'だいがく' },
      { t: 'に' },
      { t: '入学', r: 'にゅうがく' },
      { t: 'します。' },
    ]
  },
  '卒業': {
    jp: '去年、大学を卒業しました。',
    en: 'I graduated from university last year.',
    seg: [
      { t: '去年', r: 'きょねん' },
      { t: '、' },
      { t: '大学', r: 'だいがく' },
      { t: 'を' },
      { t: '卒業', r: 'そつぎょう' },
      { t: 'しました。' },
    ]
  },
  '教育': {
    jp: '子どもの教育は大切です。',
    en: 'Children\'s education is important.',
    seg: [
      { t: '子', r: 'こ' },
      { t: 'どもの' },
      { t: '教育', r: 'きょういく' },
      { t: 'は' },
      { t: '大切', r: 'たいせつ' },
      { t: 'です。' },
    ]
  },
  '生徒': {
    jp: 'クラスに生徒が三十人います。',
    en: 'There are 30 students in the class.',
    seg: [
      { t: 'クラスに' },
      { t: '生徒', r: 'せいと' },
      { t: 'が' },
      { t: '三十人', r: 'さんじゅうにん' },
      { t: 'います。' },
    ]
  },
  '授業': {
    jp: '授業中は携帯を使わないでください。',
    en: 'Please don\'t use your phone during class.',
    seg: [
      { t: '授業中', r: 'じゅぎょうちゅう' },
      { t: 'は' },
      { t: '携帯', r: 'けいたい' },
      { t: 'を' },
      { t: '使', r: 'つか' },
      { t: 'わないでください。' },
    ]
  },
  '始まる': {
    jp: '授業は九時に始まります。',
    en: 'Class starts at 9 o\'clock.',
    seg: [
      { t: '授業', r: 'じゅぎょう' },
      { t: 'は' },
      { t: '九時', r: 'くじ' },
      { t: 'に' },
      { t: '始', r: 'はじ' },
      { t: 'まります。' },
    ]
  },
  '始める': {
    jp: '勉強を始めました。',
    en: 'I started studying.',
    seg: [
      { t: '勉強', r: 'べんきょう' },
      { t: 'を' },
      { t: '始', r: 'はじ' },
      { t: 'めました。' },
    ]
  },
  '質問': {
    jp: '質問があれば言ってください。',
    en: 'Please let me know if you have any questions.',
    seg: [
      { t: '質問', r: 'しつもん' },
      { t: 'があれば' },
      { t: '言', r: 'い' },
      { t: 'ってください。' },
    ]
  },
  '答える': {
    jp: '先生の質問に答えました。',
    en: 'I answered the teacher\'s question.',
    seg: [
      { t: '先生', r: 'せんせい' },
      { t: 'の' },
      { t: '質問', r: 'しつもん' },
      { t: 'に' },
      { t: '答', r: 'こた' },
      { t: 'えました。' },
    ]
  },
  '数学': {
    jp: '数学のテストは難しかったです。',
    en: 'The math test was difficult.',
    seg: [
      { t: '数学', r: 'すうがく' },
      { t: 'のテストは' },
      { t: '難', r: 'むずか' },
      { t: 'しかったです。' },
    ]
  },
  '歴史': {
    jp: '歴史の授業が好きです。',
    en: 'I like history class.',
    seg: [
      { t: '歴史', r: 'れきし' },
      { t: 'の' },
      { t: '授業', r: 'じゅぎょう' },
      { t: 'が' },
      { t: '好', r: 'す' },
      { t: 'きです。' },
    ]
  },
  '地理': {
    jp: '地理で日本の川を学びました。',
    en: 'I learned about rivers in Japan in geography.',
    seg: [
      { t: '地理', r: 'ちり' },
      { t: 'で' },
      { t: '日本', r: 'にほん' },
      { t: 'の' },
      { t: '川', r: 'かわ' },
      { t: 'を' },
      { t: '学', r: 'まな' },
      { t: 'びました。' },
    ]
  },
  'テキスト': {
    jp: 'テキストを持ってきましたか。',
    en: 'Did you bring your textbook?',
    seg: [
      { t: 'テキストを' },
      { t: '持', r: 'も' },
      { t: 'ってきましたか。' },
    ]
  },
  '開く': {
    jp: '教科書を開いてください。',
    en: 'Please open your textbook.',
    seg: [
      { t: '教科書', r: 'きょうかしょ' },
      { t: 'を' },
      { t: '開', r: 'ひら' },
      { t: 'いてください。' },
    ]
  },
  'プリント': {
    jp: 'プリントを配りました。',
    en: 'I handed out the printouts.',
    seg: [
      { t: 'プリントを' },
      { t: '配', r: 'くば' },
      { t: 'りました。' },
    ]
  },
  'おもて': {
    jp: '紙のおもてに名前を書いてください。',
    en: 'Please write your name on the front of the paper.',
    seg: [
      { t: '紙', r: 'かみ' },
      { t: 'のおもてに' },
      { t: '名前', r: 'なまえ' },
      { t: 'を' },
      { t: '書', r: 'か' },
      { t: 'いてください。' },
    ]
  },
  'テスト': {
    jp: '明日テストがあります。',
    en: 'There is a test tomorrow.',
    seg: [
      { t: '明日', r: 'あした' },
      { t: 'テストがあります。' },
    ]
  },
  '通う': {
    jp: '自転車で学校に通っています。',
    en: 'I commute to school by bicycle.',
    seg: [
      { t: '自転車', r: 'じてんしゃ' },
      { t: 'で' },
      { t: '学校', r: 'がっこう' },
      { t: 'に' },
      { t: '通', r: 'かよ' },
      { t: 'っています。' },
    ]
  },
  'せいせき': {
    jp: '成績が上がりました。',
    en: 'My grades improved.',
    seg: [
      { t: '成績', r: 'せいせき' },
      { t: 'が' },
      { t: '上', r: 'あ' },
      { t: 'がりました。' },
    ]
  },
  '点': {
    jp: 'テストで満点を取りました。',
    en: 'I got a perfect score on the test.',
    seg: [
      { t: 'テストで' },
      { t: '満点', r: 'まんてん' },
      { t: 'を' },
      { t: '取', r: 'と' },
      { t: 'りました。' },
    ]
  },
  'まる': {
    jp: '答えにまるをつけてください。',
    en: 'Please circle the answer.',
    seg: [
      { t: '答', r: 'こた' },
      { t: 'えにまるをつけてください。' },
    ]
  },
  '作文': {
    jp: '作文を書いて提出しました。',
    en: 'I wrote a composition and submitted it.',
    seg: [
      { t: '作文', r: 'さくぶん' },
      { t: 'を' },
      { t: '書', r: 'か' },
      { t: 'いて' },
      { t: '提出', r: 'ていしゅつ' },
      { t: 'しました。' },
    ]
  },
  '(勉強が）できる': {
    jp: '彼はよく勉強ができます。',
    en: 'He is good at studying.',
    seg: [
      { t: '彼', r: 'かれ' },
      { t: 'はよく' },
      { t: '勉強', r: 'べんきょう' },
      { t: 'ができます。' },
    ]
  },
  '易しい': {
    jp: 'この問題は易しいです。',
    en: 'This problem is easy.',
    seg: [
      { t: 'この' },
      { t: '問題', r: 'もんだい' },
      { t: 'は' },
      { t: '易', r: 'やさ' },
      { t: 'しいです。' },
    ]
  },
  'かんたんな': {
    jp: '簡単な問題から始めました。',
    en: 'I started with easy questions.',
    seg: [
      { t: '簡単', r: 'かんたん' },
      { t: 'な' },
      { t: '問題', r: 'もんだい' },
      { t: 'から' },
      { t: '始', r: 'はじ' },
      { t: 'めました。' },
    ]
  },
  'まちがえる': {
    jp: '漢字をまちがえました。',
    en: 'I made a mistake writing the kanji.',
    seg: [
      { t: '漢字', r: 'かんじ' },
      { t: 'をまちがえました。' },
    ]
  },
  'チェック': {
    jp: '答えをチェックしてください。',
    en: 'Please check the answers.',
    seg: [
      { t: '答', r: 'こた' },
      { t: 'えをチェックしてください。' },
    ]
  },
  '熱心な': {
    jp: '彼女は勉強に熱心です。',
    en: 'She is enthusiastic about studying.',
    seg: [
      { t: '彼女', r: 'かのじょ' },
      { t: 'は' },
      { t: '勉強', r: 'べんきょう' },
      { t: 'に' },
      { t: '熱心', r: 'ねっしん' },
      { t: 'です。' },
    ]
  },
  'やさしい': {
    jp: '先生はやさしいです。',
    en: 'The teacher is kind.',
    seg: [
      { t: '先生', r: 'せんせい' },
      { t: 'はやさしいです。' },
    ]
  },
  'きびしい': {
    jp: '父はきびしいです。',
    en: 'My father is strict.',
    seg: [
      { t: '父', r: 'ちち' },
      { t: 'はきびしいです。' },
    ]
  },
  'まじめな': {
    jp: '彼はまじめな学生です。',
    en: 'He is a serious student.',
    seg: [
      { t: '彼', r: 'かれ' },
      { t: 'はまじめな' },
      { t: '学生', r: 'がくせい' },
      { t: 'です。' },
    ]
  },
  'えらい': {
    jp: 'よく頑張ったね、えらいよ。',
    en: 'You worked hard, that\'s great.',
    seg: [
      { t: 'よく' },
      { t: '頑張', r: 'がんば' },
      { t: 'ったね、えらいよ。' },
    ]
  },
  'せつび': {
    jp: '学校の設備が新しくなりました。',
    en: 'The school facilities became new.',
    seg: [
      { t: '学校', r: 'がっこう' },
      { t: 'の' },
      { t: '設備', r: 'せつび' },
      { t: 'が' },
      { t: '新', r: 'あたら' },
      { t: 'しくなりました。' },
    ]
  },
  'ベル': {
    jp: 'ベルが鳴ったら授業が終わりです。',
    en: 'When the bell rings, class is over.',
    seg: [
      { t: 'ベルが' },
      { t: '鳴', r: 'な' },
      { t: 'ったら' },
      { t: '授業', r: 'じゅぎょう' },
      { t: 'が' },
      { t: '終', r: 'お' },
      { t: 'わりです。' },
    ]
  },

  // Chapter 2 - Section 2: University
  '大学生': {
    jp: '大学生になりました。',
    en: 'I became a university student.',
    seg: [
      { t: '大学生', r: 'だいがくせい' },
      { t: 'になりました。' },
    ]
  },
  '受ける': {
    jp: '入学試験を受けました。',
    en: 'I took the entrance exam.',
    seg: [
      { t: '入学試験', r: 'にゅうがくしけん' },
      { t: 'を' },
      { t: '受', r: 'う' },
      { t: 'けました。' },
    ]
  },
  '受かる': {
    jp: '試験に受かりました。',
    en: 'I passed the exam.',
    seg: [
      { t: '試験', r: 'しけん' },
      { t: 'に' },
      { t: '受', r: 'う' },
      { t: 'かりました。' },
    ]
  },
  '留学': {
    jp: 'アメリカに留学したいです。',
    en: 'I want to study abroad in America.',
    seg: [
      { t: 'アメリカに' },
      { t: '留学', r: 'りゅうがく' },
      { t: 'したいです。' },
    ]
  },
  '目的': {
    jp: '旅行の目的は観光です。',
    en: 'The purpose of the trip is sightseeing.',
    seg: [
      { t: '旅行', r: 'りょこう' },
      { t: 'の' },
      { t: '目的', r: 'もくてき' },
      { t: 'は' },
      { t: '観光', r: 'かんこう' },
      { t: 'です。' },
    ]
  },
  'ゆめ': {
    jp: '夢は医者になることです。',
    en: 'My dream is to become a doctor.',
    seg: [
      { t: '夢', r: 'ゆめ' },
      { t: 'は' },
      { t: '医者', r: 'いしゃ' },
      { t: 'になることです。' },
    ]
  },
  '学部': {
    jp: '経済学部に入りました。',
    en: 'I entered the economics department.',
    seg: [
      { t: '経済学部', r: 'けいざいがくぶ' },
      { t: 'に' },
      { t: '入', r: 'はい' },
      { t: 'りました。' },
    ]
  },
  '専門': {
    jp: '専門は日本語です。',
    en: 'My major is Japanese.',
    seg: [
      { t: '専門', r: 'せんもん' },
      { t: 'は' },
      { t: '日本語', r: 'にほんご' },
      { t: 'です。' },
    ]
  },
  '科学': {
    jp: '科学の実験をしました。',
    en: 'I conducted a science experiment.',
    seg: [
      { t: '科学', r: 'かがく' },
      { t: 'の' },
      { t: '実験', r: 'じっけん' },
      { t: 'をしました。' },
    ]
  },
  '医学': {
    jp: '医学を勉強しています。',
    en: 'I am studying medicine.',
    seg: [
      { t: '医学', r: 'いがく' },
      { t: 'を' },
      { t: '勉強', r: 'べんきょう' },
      { t: 'しています。' },
    ]
  },
  '文学': {
    jp: '文学の授業が好きです。',
    en: 'I like literature class.',
    seg: [
      { t: '文学', r: 'ぶんがく' },
      { t: 'の' },
      { t: '授業', r: 'じゅぎょう' },
      { t: 'が' },
      { t: '好', r: 'す' },
      { t: 'きです。' },
    ]
  },
  'ほうりつ': {
    jp: '法律を勉強しています。',
    en: 'I am studying law.',
    seg: [
      { t: '法律', r: 'ほうりつ' },
      { t: 'を' },
      { t: '勉強', r: 'べんきょう' },
      { t: 'しています。' },
    ]
  },
  'こうぎ': {
    jp: '講義に出席しました。',
    en: 'I attended the lecture.',
    seg: [
      { t: '講義', r: 'こうぎ' },
      { t: 'に' },
      { t: '出席', r: 'しゅっせき' },
      { t: 'しました。' },
    ]
  },
  '出席': {
    jp: '授業に毎日出席しています。',
    en: 'I attend class every day.',
    seg: [
      { t: '授業', r: 'じゅぎょう' },
      { t: 'に' },
      { t: '毎日', r: 'まいにち' },
      { t: '出席', r: 'しゅっせき' },
      { t: 'しています。' },
    ]
  },
  '欠席': {
    jp: '風邪で学校を欠席しました。',
    en: 'I was absent from school because of a cold.',
    seg: [
      { t: '風邪', r: 'かぜ' },
      { t: 'で' },
      { t: '学校', r: 'がっこう' },
      { t: 'を' },
      { t: '欠席', r: 'けっせき' },
      { t: 'しました。' },
    ]
  },
  'レポート': {
    jp: 'レポートを書いています。',
    en: 'I am writing a report.',
    seg: [
      { t: 'レポートを' },
      { t: '書', r: 'か' },
      { t: 'いています。' },
    ]
  },
  '論文': {
    jp: '卒業論文を書いています。',
    en: 'I am writing my graduation thesis.',
    seg: [
      { t: '卒業論文', r: 'そつぎょうろんぶん' },
      { t: 'を' },
      { t: '書', r: 'か' },
      { t: 'いています。' },
    ]
  },
  'しめ切り': {
    jp: 'レポートのしめ切りは金曜日です。',
    en: 'The report deadline is Friday.',
    seg: [
      { t: 'レポートのしめ' },
      { t: '切', r: 'き' },
      { t: 'りは' },
      { t: '金曜日', r: 'きんようび' },
      { t: 'です。' },
    ]
  },
  '研究': {
    jp: '新しい薬の研究をしています。',
    en: 'I am researching a new medicine.',
    seg: [
      { t: '新', r: 'あたら' },
      { t: 'しい' },
      { t: '薬', r: 'くすり' },
      { t: 'の' },
      { t: '研究', r: 'けんきゅう' },
      { t: 'をしています。' },
    ]
  },
  '実験': {
    jp: '実験室で実験しました。',
    en: 'I conducted an experiment in the lab.',
    seg: [
      { t: '実験室', r: 'じっけんしつ' },
      { t: 'で' },
      { t: '実験', r: 'じっけん' },
      { t: 'しました。' },
    ]
  },
  'まとめる': {
    jp: 'データをまとめました。',
    en: 'I compiled the data.',
    seg: [
      { t: 'データをまとめました。' },
    ]
  },
  'ボランティア': {
    jp: 'ボランティアに参加しました。',
    en: 'I participated in volunteer work.',
    seg: [
      { t: 'ボランティアに' },
      { t: '参加', r: 'さんか' },
      { t: 'しました。' },
    ]
  },
  'ふくざつな': {
    jp: 'この問題は複雑です。',
    en: 'This problem is complicated.',
    seg: [
      { t: 'この' },
      { t: '問題', r: 'もんだい' },
      { t: 'は' },
      { t: '複雑', r: 'ふくざつ' },
      { t: 'です。' },
    ]
  },
  'ひつよう＜な＞': {
    jp: '練習が必要です。',
    en: 'Practice is necessary.',
    seg: [
      { t: '練習', r: 'れんしゅう' },
      { t: 'が' },
      { t: '必要', r: 'ひつよう' },
      { t: 'です。' },
    ]
  },

  // Chapter 2 - Section 3: Studying
  '考える': {
    jp: 'よく考えてから答えてください。',
    en: 'Please think carefully before answering.',
    seg: [
      { t: 'よく' },
      { t: '考', r: 'かんが' },
      { t: 'えてから' },
      { t: '答', r: 'こた' },
      { t: 'えてください。' },
    ]
  },
  '辞典': {
    jp: '辞典で言葉を調べました。',
    en: 'I looked up words in the dictionary.',
    seg: [
      { t: '辞典', r: 'じてん' },
      { t: 'で' },
      { t: '言葉', r: 'ことば' },
      { t: 'を' },
      { t: '調', r: 'しら' },
      { t: 'べました。' },
    ]
  },
  '調べる': {
    jp: 'インターネットで調べました。',
    en: 'I looked it up on the internet.',
    seg: [
      { t: 'インターネットで' },
      { t: '調', r: 'しら' },
      { t: 'べました。' },
    ]
  },
  'たしかめる': {
    jp: '答えをたしかめました。',
    en: 'I confirmed the answer.',
    seg: [
      { t: '答', r: 'こた' },
      { t: 'えをたしかめました。' },
    ]
  },
  '予習': {
    jp: '次の授業の予習をしました。',
    en: 'I prepared for the next class.',
    seg: [
      { t: '次', r: 'つぎ' },
      { t: 'の' },
      { t: '授業', r: 'じゅぎょう' },
      { t: 'の' },
      { t: '予習', r: 'よしゅう' },
      { t: 'をしました。' },
    ]
  },
  '復習': {
    jp: '毎晩復習をしています。',
    en: 'I review every evening.',
    seg: [
      { t: '毎晩', r: 'まいばん' },
      { t: '復習', r: 'ふくしゅう' },
      { t: 'をしています。' },
    ]
  },
  '思い出す': {
    jp: '先生の名前を思い出しました。',
    en: 'I remembered the teacher\'s name.',
    seg: [
      { t: '先生', r: 'せんせい' },
      { t: 'の' },
      { t: '名前', r: 'なまえ' },
      { t: 'を' },
      { t: '思', r: 'おも' },
      { t: 'い' },
      { t: '出', r: 'だ' },
      { t: 'しました。' },
    ]
  },
  'じゅく': {
    jp: '塾で数学を習っています。',
    en: 'I\'m learning math at cram school.',
    seg: [
      { t: '塾', r: 'じゅく' },
      { t: 'で' },
      { t: '数学', r: 'すうがく' },
      { t: 'を' },
      { t: '習', r: 'なら' },
      { t: 'っています。' },
    ]
  },
  'やる': {
    jp: '宿題をやりました。',
    en: 'I did my homework.',
    seg: [
      { t: '宿題', r: 'しゅくだい' },
      { t: 'をやりました。' },
    ]
  },
  'がんばる': {
    jp: '試験に向けてがんばっています。',
    en: 'I\'m working hard for the exam.',
    seg: [
      { t: '試験', r: 'しけん' },
      { t: 'に' },
      { t: '向', r: 'む' },
      { t: 'けてがんばっています。' },
    ]
  },
  '字': {
    jp: '字をきれいに書いてください。',
    en: 'Please write neatly.',
    seg: [
      { t: '字', r: 'じ' },
      { t: 'をきれいに' },
      { t: '書', r: 'か' },
      { t: 'いてください。' },
    ]
  },
  'ふりがな': {
    jp: '漢字にふりがなをつけました。',
    en: 'I added furigana to the kanji.',
    seg: [
      { t: '漢字', r: 'かんじ' },
      { t: 'にふりがなをつけました。' },
    ]
  },
  'メモ': {
    jp: '大事なことをメモしました。',
    en: 'I noted down the important things.',
    seg: [
      { t: '大事', r: 'だいじ' },
      { t: 'なことをメモしました。' },
    ]
  },
  '文法': {
    jp: '文法の説明を読みました。',
    en: 'I read the grammar explanation.',
    seg: [
      { t: '文法', r: 'ぶんぽう' },
      { t: 'の' },
      { t: '説明', r: 'せつめい' },
      { t: 'を' },
      { t: '読', r: 'よ' },
      { t: 'みました。' },
    ]
  },
  '説明': {
    jp: '使い方を説明してください。',
    en: 'Please explain how to use it.',
    seg: [
      { t: '使', r: 'つか' },
      { t: 'い' },
      { t: '方', r: 'かた' },
      { t: 'を' },
      { t: '説明', r: 'せつめい' },
      { t: 'してください。' },
    ]
  },
  '発音': {
    jp: '発音を練習しています。',
    en: 'I am practicing pronunciation.',
    seg: [
      { t: '発音', r: 'はつおん' },
      { t: 'を' },
      { t: '練習', r: 'れんしゅう' },
      { t: 'しています。' },
    ]
  },
  '会話': {
    jp: '日本語の会話を練習しています。',
    en: 'I am practicing Japanese conversation.',
    seg: [
      { t: '日本語', r: 'にほんご' },
      { t: 'の' },
      { t: '会話', r: 'かいわ' },
      { t: 'を' },
      { t: '練習', r: 'れんしゅう' },
      { t: 'しています。' },
    ]
  },
  '足す': {
    jp: '三と四を足すと七です。',
    en: '3 plus 4 equals 7.',
    seg: [
      { t: '三', r: 'さん' },
      { t: 'と' },
      { t: '四', r: 'し' },
      { t: 'を' },
      { t: '足', r: 'た' },
      { t: 'すと' },
      { t: '七', r: 'なな' },
      { t: 'です。' },
    ]
  },
  '役に立ちつ': {
    jp: 'この辞書はとても役に立ちます。',
    en: 'This dictionary is very useful.',
    seg: [
      { t: 'この' },
      { t: '辞書', r: 'じしょ' },
      { t: 'はとても' },
      { t: '役', r: 'やく' },
      { t: 'に' },
      { t: '立', r: 'た' },
      { t: 'ちます。' },
    ]
  },
  '勉強中': {
    jp: '今、勉強中です。',
    en: 'I\'m studying right now.',
    seg: [
      { t: '今', r: 'いま' },
      { t: '、' },
      { t: '勉強中', r: 'べんきょうちゅう' },
      { t: 'です。' },
    ]
  },

  // Chapter 2 - Section 4: Work 1
  'つとめる': {
    jp: '銀行に勤めています。',
    en: 'I work at a bank.',
    seg: [
      { t: '銀行', r: 'ぎんこう' },
      { t: 'に' },
      { t: '勤', r: 'つと' },
      { t: 'めています。' },
    ]
  },
  '給料': {
    jp: '給料が上がりました。',
    en: 'My salary went up.',
    seg: [
      { t: '給料', r: 'きゅうりょう' },
      { t: 'が' },
      { t: '上', r: 'あ' },
      { t: 'がりました。' },
    ]
  },
  'ボーナス': {
    jp: '今年のボーナスは多かったです。',
    en: 'This year\'s bonus was large.',
    seg: [
      { t: '今年', r: 'ことし' },
      { t: 'のボーナスは' },
      { t: '多', r: 'おお' },
      { t: 'かったです。' },
    ]
  },
  '貯金': {
    jp: '毎月貯金しています。',
    en: 'I save money every month.',
    seg: [
      { t: '毎月', r: 'まいつき' },
      { t: '貯金', r: 'ちょきん' },
      { t: 'しています。' },
    ]
  },
  '受付': {
    jp: '受付で名前を書きました。',
    en: 'I wrote my name at the reception.',
    seg: [
      { t: '受付', r: 'うけつけ' },
      { t: 'で' },
      { t: '名前', r: 'なまえ' },
      { t: 'を' },
      { t: '書', r: 'か' },
      { t: 'きました。' },
    ]
  },
  '名刺': {
    jp: '名刺を渡しました。',
    en: 'I handed over my business card.',
    seg: [
      { t: '名刺', r: 'めいし' },
      { t: 'を' },
      { t: '渡', r: 'わた' },
      { t: 'しました。' },
    ]
  },
  '営業': {
    jp: '営業部に配属されました。',
    en: 'I was assigned to the sales department.',
    seg: [
      { t: '営業部', r: 'えいぎょうぶ' },
      { t: 'に' },
      { t: '配属', r: 'はいぞく' },
      { t: 'されました。' },
    ]
  },
  'あいさつ': {
    jp: '朝、上司にあいさつしました。',
    en: 'I greeted my boss in the morning.',
    seg: [
      { t: '朝', r: 'あさ' },
      { t: '、' },
      { t: '上司', r: 'じょうし' },
      { t: 'にあいさつしました。' },
    ]
  },
  '会議': {
    jp: '午後に会議があります。',
    en: 'There is a meeting in the afternoon.',
    seg: [
      { t: '午後', r: 'ごご' },
      { t: 'に' },
      { t: '会議', r: 'かいぎ' },
      { t: 'があります。' },
    ]
  },
  'ミーティング': {
    jp: 'ミーティングは一時間でした。',
    en: 'The meeting was one hour.',
    seg: [
      { t: 'ミーティングは' },
      { t: '一時間', r: 'いちじかん' },
      { t: 'でした。' },
    ]
  },
  '意見': {
    jp: '自分の意見を言いました。',
    en: 'I stated my opinion.',
    seg: [
      { t: '自分', r: 'じぶん' },
      { t: 'の' },
      { t: '意見', r: 'いけん' },
      { t: 'を' },
      { t: '言', r: 'い' },
      { t: 'いました。' },
    ]
  },
  'アイディア': {
    jp: 'いいアイディアがあります。',
    en: 'I have a good idea.',
    seg: [
      { t: 'いいアイディアがあります。' },
    ]
  },
  'スケジュール': {
    jp: 'スケジュールを確認しました。',
    en: 'I checked the schedule.',
    seg: [
      { t: 'スケジュールを' },
      { t: '確認', r: 'かくにん' },
      { t: 'しました。' },
    ]
  },
  '出張': {
    jp: '来週、大阪に出張します。',
    en: 'I\'m going on a business trip to Osaka next week.',
    seg: [
      { t: '来週', r: 'らいしゅう' },
      { t: '、' },
      { t: '大阪', r: 'おおさか' },
      { t: 'に' },
      { t: '出張', r: 'しゅっちょう' },
      { t: 'します。' },
    ]
  },
  'もどる': {
    jp: '三時に事務所に戻ります。',
    en: 'I will return to the office at 3 o\'clock.',
    seg: [
      { t: '三時', r: 'さんじ' },
      { t: 'に' },
      { t: '事務所', r: 'じむしょ' },
      { t: 'に' },
      { t: '戻', r: 'もど' },
      { t: 'ります。' },
    ]
  },
  'もどす': {
    jp: '本を棚に戻しました。',
    en: 'I returned the book to the shelf.',
    seg: [
      { t: '本', r: 'ほん' },
      { t: 'を' },
      { t: '棚', r: 'たな' },
      { t: 'に' },
      { t: '戻', r: 'もど' },
      { t: 'しました。' },
    ]
  },
  '本社': {
    jp: '本社は東京にあります。',
    en: 'The head office is in Tokyo.',
    seg: [
      { t: '本社', r: 'ほんしゃ' },
      { t: 'は' },
      { t: '東京', r: 'とうきょう' },
      { t: 'にあります。' },
    ]
  },
  '社長': {
    jp: '社長にメールを送りました。',
    en: 'I sent an email to the company president.',
    seg: [
      { t: '社長', r: 'しゃちょう' },
      { t: 'にメールを' },
      { t: '送', r: 'おく' },
      { t: 'りました。' },
    ]
  },
  'ルール': {
    jp: 'ルールを守ってください。',
    en: 'Please follow the rules.',
    seg: [
      { t: 'ルールを' },
      { t: '守', r: 'まも' },
      { t: 'ってください。' },
    ]
  },
  '規則': {
    jp: '会社の規則に従っています。',
    en: 'I follow the company rules.',
    seg: [
      { t: '会社', r: 'かいしゃ' },
      { t: 'の' },
      { t: '規則', r: 'きそく' },
      { t: 'に' },
      { t: '従', r: 'したが' },
      { t: 'っています。' },
    ]
  },
  '決まる': {
    jp: '会議の日程が決まりました。',
    en: 'The meeting schedule has been decided.',
    seg: [
      { t: '会議', r: 'かいぎ' },
      { t: 'の' },
      { t: '日程', r: 'にってい' },
      { t: 'が' },
      { t: '決', r: 'き' },
      { t: 'まりました。' },
    ]
  },
  '決める': {
    jp: '場所を決めましょう。',
    en: 'Let\'s decide on the location.',
    seg: [
      { t: '場所', r: 'ばしょ' },
      { t: 'を' },
      { t: '決', r: 'き' },
      { t: 'めましょう。' },
    ]
  },
  'きょか': {
    jp: '許可をもらいました。',
    en: 'I got permission.',
    seg: [
      { t: '許可', r: 'きょか' },
      { t: 'をもらいました。' },
    ]
  },
  '押す': {
    jp: 'ボタンを押してください。',
    en: 'Please press the button.',
    seg: [
      { t: 'ボタンを' },
      { t: '押', r: 'お' },
      { t: 'してください。' },
    ]
  },
  'ちこく': {
    jp: '遅刻しないようにします。',
    en: 'I will try not to be late.',
    seg: [
      { t: '遅刻', r: 'ちこく' },
      { t: 'しないようにします。' },
    ]
  },

  // Chapter 2 - Section 5: Work 2
  '技術': {
    jp: '技術を身につけました。',
    en: 'I acquired the skill.',
    seg: [
      { t: '技術', r: 'ぎじゅつ' },
      { t: 'を' },
      { t: '身', r: 'み' },
      { t: 'につけました。' },
    ]
  },
  'パソコン': {
    jp: 'パソコンで書類を作りました。',
    en: 'I created documents on the computer.',
    seg: [
      { t: 'パソコンで' },
      { t: '書類', r: 'しょるい' },
      { t: 'を' },
      { t: '作', r: 'つく' },
      { t: 'りました。' },
    ]
  },
  'ソフト': {
    jp: '新しいソフトをインストールしました。',
    en: 'I installed new software.',
    seg: [
      { t: '新', r: 'あたら' },
      { t: 'しいソフトをインストールしました。' },
    ]
  },
  '書類': {
    jp: '書類にサインしました。',
    en: 'I signed the documents.',
    seg: [
      { t: '書類', r: 'しょるい' },
      { t: 'にサインしました。' },
    ]
  },
  'ファイル': {
    jp: 'ファイルを保存しました。',
    en: 'I saved the file.',
    seg: [
      { t: 'ファイルを' },
      { t: '保存', r: 'ほぞん' },
      { t: 'しました。' },
    ]
  },
  '入カ': {
    jp: 'データを入力しました。',
    en: 'I entered the data.',
    seg: [
      { t: 'データを' },
      { t: '入力', r: 'にゅうりょく' },
      { t: 'しました。' },
    ]
  },
  'ほんやく': {
    jp: '英語を日本語に翻訳しました。',
    en: 'I translated English into Japanese.',
    seg: [
      { t: '英語', r: 'えいご' },
      { t: 'を' },
      { t: '日本語', r: 'にほんご' },
      { t: 'に' },
      { t: '翻訳', r: 'ほんやく' },
      { t: 'しました。' },
    ]
  },
  '通訳': {
    jp: '会議で通訳をしました。',
    en: 'I did interpretation at the meeting.',
    seg: [
      { t: '会議', r: 'かいぎ' },
      { t: 'で' },
      { t: '通訳', r: 'つうやく' },
      { t: 'をしました。' },
    ]
  },
  '方法': {
    jp: '解決方法を考えました。',
    en: 'I thought of a solution.',
    seg: [
      { t: '解決', r: 'かいけつ' },
      { t: '方法', r: 'ほうほう' },
      { t: 'を' },
      { t: '考', r: 'かんが' },
      { t: 'えました。' },
    ]
  },
  'しかた': {
    jp: '使い方を教えてください。',
    en: 'Please teach me how to use it.',
    seg: [
      { t: '使', r: 'つか' },
      { t: 'い' },
      { t: '方', r: 'かた' },
      { t: 'を' },
      { t: '教', r: 'おし' },
      { t: 'えてください。' },
    ]
  },
  '慣れる': {
    jp: '新しい仕事に慣れました。',
    en: 'I got used to my new job.',
    seg: [
      { t: '新', r: 'あたら' },
      { t: 'しい' },
      { t: '仕事', r: 'しごと' },
      { t: 'に' },
      { t: '慣', r: 'な' },
      { t: 'れました。' },
    ]
  },
  'いく': {
    jp: '仕事がうまくいっています。',
    en: 'My work is going well.',
    seg: [
      { t: '仕事', r: 'しごと' },
      { t: 'がうまくいっています。' },
    ]
  },
  '成功': {
    jp: '計画が成功しました。',
    en: 'The plan succeeded.',
    seg: [
      { t: '計画', r: 'けいかく' },
      { t: 'が' },
      { t: '成功', r: 'せいこう' },
      { t: 'しました。' },
    ]
  },
  'たのむ': {
    jp: '友達に手伝いをたのみました。',
    en: 'I asked my friend for help.',
    seg: [
      { t: '友達', r: 'ともだち' },
      { t: 'に' },
      { t: '手伝', r: 'てつだ' },
      { t: 'いをたのみました。' },
    ]
  },
  '手伝う': {
    jp: '引っ越しを手伝いました。',
    en: 'I helped with the move.',
    seg: [
      { t: '引っ越', r: 'ひっこ' },
      { t: 'しを' },
      { t: '手伝', r: 'てつだ' },
      { t: 'いました。' },
    ]
  },
  '残業': {
    jp: '今日は残業しました。',
    en: 'I worked overtime today.',
    seg: [
      { t: '今日', r: 'きょう' },
      { t: 'は' },
      { t: '残業', r: 'ざんぎょう' },
      { t: 'しました。' },
    ]
  },
  'むり＜な＞': {
    jp: '無理をしないでください。',
    en: 'Please don\'t push yourself too hard.',
    seg: [
      { t: '無理', r: 'むり' },
      { t: 'をしないでください。' },
    ]
  },
  '急ぐ': {
    jp: '遅れているので急ぎましょう。',
    en: 'We\'re running late, so let\'s hurry.',
    seg: [
      { t: '遅', r: 'おく' },
      { t: 'れているので' },
      { t: '急', r: 'いそ' },
      { t: 'ぎましょう。' },
    ]
  },
  '昼休み': {
    jp: '昼休みに友達とランチしました。',
    en: 'I had lunch with a friend during the lunch break.',
    seg: [
      { t: '昼休', r: 'ひるやす' },
      { t: 'みに' },
      { t: '友達', r: 'ともだち' },
      { t: 'とランチしました。' },
    ]
  },
  '休けい': {
    jp: '少し休憩しましょう。',
    en: 'Let\'s take a short break.',
    seg: [
      { t: '少', r: 'すこ' },
      { t: 'し' },
      { t: '休憩', r: 'きゅうけい' },
      { t: 'しましょう。' },
    ]
  },
  '忘年会': {
    jp: '忘年会に参加しました。',
    en: 'I attended the year-end party.',
    seg: [
      { t: '忘年会', r: 'ぼうねんかい' },
      { t: 'に' },
      { t: '参加', r: 'さんか' },
      { t: 'しました。' },
    ]
  },
  '公務員': {
    jp: '兄は公務員です。',
    en: 'My older brother is a government employee.',
    seg: [
      { t: '兄', r: 'あに' },
      { t: 'は' },
      { t: '公務員', r: 'こうむいん' },
      { t: 'です。' },
    ]
  },
  '弁護士': {
    jp: '弁護士に相談しました。',
    en: 'I consulted with a lawyer.',
    seg: [
      { t: '弁護士', r: 'べんごし' },
      { t: 'に' },
      { t: '相談', r: 'そうだん' },
      { t: 'しました。' },
    ]
  },
  '工場': {
    jp: '工場で働いています。',
    en: 'I work at a factory.',
    seg: [
      { t: '工場', r: 'こうじょう' },
      { t: 'で' },
      { t: '働', r: 'はたら' },
      { t: 'いています。' },
    ]
  },
  '事務所': {
    jp: '事務所に電話しました。',
    en: 'I called the office.',
    seg: [
      { t: '事務所', r: 'じむしょ' },
      { t: 'に' },
      { t: '電話', r: 'でんわ' },
      { t: 'しました。' },
    ]
  },

  // Chapter 3 - Section 1: Travel
  'ガイドブック': {
    jp: 'ガイドブックで観光地を調べました。',
    en: 'I looked up tourist spots in the guidebook.',
    seg: [
      { t: 'ガイドブックで' },
      { t: '観光地', r: 'かんこうち' },
      { t: 'を' },
      { t: '調', r: 'しら' },
      { t: 'べました。' },
    ]
  },
  '時こく表': {
    jp: '時刻表で電車の時間を確認しました。',
    en: 'I checked the train time in the timetable.',
    seg: [
      { t: '時刻表', r: 'じこくひょう' },
      { t: 'で' },
      { t: '電車', r: 'でんしゃ' },
      { t: 'の' },
      { t: '時間', r: 'じかん' },
      { t: 'を' },
      { t: '確認', r: 'かくにん' },
      { t: 'しました。' },
    ]
  },
  '計画': {
    jp: '旅行の計画を立てました。',
    en: 'I made a travel plan.',
    seg: [
      { t: '旅行', r: 'りょこう' },
      { t: 'の' },
      { t: '計画', r: 'けいかく' },
      { t: 'を' },
      { t: '立', r: 'た' },
      { t: 'てました。' },
    ]
  },
  '遠く': {
    jp: '遠くまで旅行したいです。',
    en: 'I want to travel far away.',
    seg: [
      { t: '遠', r: 'とお' },
      { t: 'くまで' },
      { t: '旅行', r: 'りょこう' },
      { t: 'したいです。' },
    ]
  },
  '海外': {
    jp: '海外旅行が好きです。',
    en: 'I like traveling abroad.',
    seg: [
      { t: '海外旅行', r: 'かいがいりょこう' },
      { t: 'が' },
      { t: '好', r: 'す' },
      { t: 'きです。' },
    ]
  },
  '国内': {
    jp: '国内旅行をしました。',
    en: 'I took a domestic trip.',
    seg: [
      { t: '国内旅行', r: 'こくないりょこう' },
      { t: 'をしました。' },
    ]
  },
  '景色': {
    jp: '山の景色がきれいでした。',
    en: 'The mountain scenery was beautiful.',
    seg: [
      { t: '山', r: 'やま' },
      { t: 'の' },
      { t: '景色', r: 'けしき' },
      { t: 'がきれいでした。' },
    ]
  },
  '祭り': {
    jp: '夏祭りに行きました。',
    en: 'I went to a summer festival.',
    seg: [
      { t: '夏祭', r: 'なつまつ' },
      { t: 'りに' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '花火': {
    jp: '花火大会を見ました。',
    en: 'I watched the fireworks display.',
    seg: [
      { t: '花火大会', r: 'はなびたいかい' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'ました。' },
    ]
  },
  '連休': {
    jp: '連休に旅行しました。',
    en: 'I traveled during the long weekend.',
    seg: [
      { t: '連休', r: 'れんきゅう' },
      { t: 'に' },
      { t: '旅行', r: 'りょこう' },
      { t: 'しました。' },
    ]
  },
  '正月': {
    jp: '正月は家族で過ごしました。',
    en: 'I spent New Year with my family.',
    seg: [
      { t: '正月', r: 'しょうがつ' },
      { t: 'は' },
      { t: '家族', r: 'かぞく' },
      { t: 'で' },
      { t: '過', r: 'す' },
      { t: 'ごしました。' },
    ]
  },
  '旅行社': {
    jp: '旅行社でツアーを申し込みました。',
    en: 'I booked a tour at the travel agency.',
    seg: [
      { t: '旅行社', r: 'りょこうしゃ' },
      { t: 'でツアーを' },
      { t: '申', r: 'もう' },
      { t: 'し' },
      { t: '込', r: 'こ' },
      { t: 'みました。' },
    ]
  },
  '申し込む': {
    jp: 'コースに申し込みました。',
    en: 'I applied for the course.',
    seg: [
      { t: 'コースに' },
      { t: '申', r: 'もう' },
      { t: 'し' },
      { t: '込', r: 'こ' },
      { t: 'みました。' },
    ]
  },
  'シングル': {
    jp: 'シングルルームを予約しました。',
    en: 'I reserved a single room.',
    seg: [
      { t: 'シングルルームを' },
      { t: '予約', r: 'よやく' },
      { t: 'しました。' },
    ]
  },
  '予約': {
    jp: 'レストランを予約しました。',
    en: 'I made a reservation at the restaurant.',
    seg: [
      { t: 'レストランを' },
      { t: '予約', r: 'よやく' },
      { t: 'しました。' },
    ]
  },
  'したく': {
    jp: '旅行の支度をしています。',
    en: 'I am preparing for the trip.',
    seg: [
      { t: '旅行', r: 'りょこう' },
      { t: 'の' },
      { t: '支度', r: 'したく' },
      { t: 'をしています。' },
    ]
  },
  '空港': {
    jp: '空港に早めに到着しました。',
    en: 'I arrived at the airport early.',
    seg: [
      { t: '空港', r: 'くうこう' },
      { t: 'に' },
      { t: '早', r: 'はや' },
      { t: 'めに' },
      { t: '到着', r: 'とうちゃく' },
      { t: 'しました。' },
    ]
  },
  '両替': {
    jp: '円をドルに両替しました。',
    en: 'I exchanged yen for dollars.',
    seg: [
      { t: '円', r: 'えん' },
      { t: 'をドルに' },
      { t: '両替', r: 'りょうがえ' },
      { t: 'しました。' },
    ]
  },
  '出発': {
    jp: '朝八時に出発しました。',
    en: 'I departed at 8 in the morning.',
    seg: [
      { t: '朝', r: 'あさ' },
      { t: '八時', r: 'はちじ' },
      { t: 'に' },
      { t: '出発', r: 'しゅっぱつ' },
      { t: 'しました。' },
    ]
  },
  '到着': {
    jp: '目的地に到着しました。',
    en: 'I arrived at the destination.',
    seg: [
      { t: '目的地', r: 'もくてきち' },
      { t: 'に' },
      { t: '到着', r: 'とうちゃく' },
      { t: 'しました。' },
    ]
  },
  '帰国': {
    jp: '来月、帰国します。',
    en: 'I will return to my home country next month.',
    seg: [
      { t: '来月', r: 'らいげつ' },
      { t: '、' },
      { t: '帰国', r: 'きこく' },
      { t: 'します。' },
    ]
  },
  '旅館': {
    jp: '旅館に泊まりました。',
    en: 'I stayed at a Japanese inn.',
    seg: [
      { t: '旅館', r: 'りょかん' },
      { t: 'に' },
      { t: '泊', r: 'と' },
      { t: 'まりました。' },
    ]
  },
  'フロント': {
    jp: 'フロントでチェックインしました。',
    en: 'I checked in at the front desk.',
    seg: [
      { t: 'フロントでチェックインしました。' },
    ]
  },
  '泊まる': {
    jp: 'ホテルに泊まりました。',
    en: 'I stayed at a hotel.',
    seg: [
      { t: 'ホテルに' },
      { t: '泊', r: 'と' },
      { t: 'まりました。' },
    ]
  },
  'すごす': {
    jp: '休みをゆっくりすごしました。',
    en: 'I spent my holiday slowly and relaxedly.',
    seg: [
      { t: '休', r: 'やす' },
      { t: 'みをゆっくりすごしました。' },
    ]
  },
  '経験': {
    jp: '良い経験になりました。',
    en: 'It was a good experience.',
    seg: [
      { t: '良', r: 'よ' },
      { t: 'い' },
      { t: '経験', r: 'けいけん' },
      { t: 'になりました。' },
    ]
  },
  '見物': {
    jp: '神社を見物しました。',
    en: 'I went to see the shrine.',
    seg: [
      { t: '神社', r: 'じんじゃ' },
      { t: 'を' },
      { t: '見物', r: 'けんぶつ' },
      { t: 'しました。' },
    ]
  },
  'はがき': {
    jp: '旅行先からはがきを送りました。',
    en: 'I sent a postcard from my travel destination.',
    seg: [
      { t: '旅行先', r: 'りょこうさき' },
      { t: 'からはがきを' },
      { t: '送', r: 'おく' },
      { t: 'りました。' },
    ]
  },

  // Chapter 3 - Section 2: Food/eating
  '和食': {
    jp: '和食が好きです。',
    en: 'I like Japanese food.',
    seg: [
      { t: '和食', r: 'わしょく' },
      { t: 'が' },
      { t: '好', r: 'す' },
      { t: 'きです。' },
    ]
  },
  '洋食': {
    jp: '今日は洋食にしましょう。',
    en: 'Let\'s have Western food today.',
    seg: [
      { t: '今日', r: 'きょう' },
      { t: 'は' },
      { t: '洋食', r: 'ようしょく' },
      { t: 'にしましょう。' },
    ]
  },
  'ステーキ': {
    jp: 'ステーキを食べました。',
    en: 'I ate steak.',
    seg: [
      { t: 'ステーキを' },
      { t: '食', r: 'た' },
      { t: 'べました。' },
    ]
  },
  'ハンバーグ': {
    jp: 'ハンバーグが大好きです。',
    en: 'I love hamburger steak.',
    seg: [
      { t: 'ハンバーグが' },
      { t: '大好', r: 'だいす' },
      { t: 'きです。' },
    ]
  },
  'サラダ': {
    jp: 'サラダを作りました。',
    en: 'I made a salad.',
    seg: [
      { t: 'サラダを' },
      { t: '作', r: 'つく' },
      { t: 'りました。' },
    ]
  },
  'ケーキ': {
    jp: '誕生日にケーキを食べました。',
    en: 'I ate cake on my birthday.',
    seg: [
      { t: '誕生日', r: 'たんじょうび' },
      { t: 'にケーキを' },
      { t: '食', r: 'た' },
      { t: 'べました。' },
    ]
  },
  'メニュー': {
    jp: 'メニューを見てください。',
    en: 'Please look at the menu.',
    seg: [
      { t: 'メニューを' },
      { t: '見', r: 'み' },
      { t: 'てください。' },
    ]
  },
  '食べ放題': {
    jp: '食べ放題のレストランに行きました。',
    en: 'I went to an all-you-can-eat restaurant.',
    seg: [
      { t: '食', r: 'た' },
      { t: 'べ' },
      { t: '放題', r: 'ほうだい' },
      { t: 'のレストランに' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '注文': {
    jp: '料理を注文しました。',
    en: 'I ordered the food.',
    seg: [
      { t: '料理', r: 'りょうり' },
      { t: 'を' },
      { t: '注文', r: 'ちゅうもん' },
      { t: 'しました。' },
    ]
  },
  'ごちそう': {
    jp: 'ごちそうをいただきました。',
    en: 'I was treated to a feast.',
    seg: [
      { t: 'ごちそうをいただきました。' },
    ]
  },
  'アルコール': {
    jp: 'アルコールは飲みません。',
    en: 'I don\'t drink alcohol.',
    seg: [
      { t: 'アルコールは' },
      { t: '飲', r: 'の' },
      { t: 'みません。' },
    ]
  },
  'かんぱい': {
    jp: '乾杯しましょう。',
    en: 'Let\'s make a toast.',
    seg: [
      { t: '乾杯', r: 'かんぱい' },
      { t: 'しましょう。' },
    ]
  },
  '酔う': {
    jp: 'ビールを飲んで酔いました。',
    en: 'I got drunk from drinking beer.',
    seg: [
      { t: 'ビールを' },
      { t: '飲', r: 'の' },
      { t: 'んで' },
      { t: '酔', r: 'よ' },
      { t: 'いました。' },
    ]
  },
  'しょうゆ': {
    jp: '醤油を少し入れました。',
    en: 'I added a little soy sauce.',
    seg: [
      { t: '醤油', r: 'しょうゆ' },
      { t: 'を' },
      { t: '少', r: 'すこ' },
      { t: 'し' },
      { t: '入', r: 'い' },
      { t: 'れました。' },
    ]
  },
  'ソース': {
    jp: 'ソースをかけました。',
    en: 'I poured sauce on it.',
    seg: [
      { t: 'ソースをかけました。' },
    ]
  },
  '味': {
    jp: 'この料理は味がいいです。',
    en: 'This dish tastes good.',
    seg: [
      { t: 'この' },
      { t: '料理', r: 'りょうり' },
      { t: 'は' },
      { t: '味', r: 'あじ' },
      { t: 'がいいです。' },
    ]
  },
  'うすい': {
    jp: 'スープの味がうすいです。',
    en: 'The soup is bland.',
    seg: [
      { t: 'スープの' },
      { t: '味', r: 'あじ' },
      { t: 'がうすいです。' },
    ]
  },
  'こい': {
    jp: 'コーヒーが濃いです。',
    en: 'The coffee is strong.',
    seg: [
      { t: 'コーヒーが' },
      { t: '濃', r: 'こ' },
      { t: 'いです。' },
    ]
  },
  'にがい': {
    jp: 'この薬はにがいです。',
    en: 'This medicine is bitter.',
    seg: [
      { t: 'この' },
      { t: '薬', r: 'くすり' },
      { t: 'はにがいです。' },
    ]
  },
  'におい': {
    jp: 'いいにおいがします。',
    en: 'It smells good.',
    seg: [
      { t: 'いいにおいがします。' },
    ]
  },
  'かむ': {
    jp: 'よくかんで食べてください。',
    en: 'Please chew well when you eat.',
    seg: [
      { t: 'よくかんで' },
      { t: '食', r: 'た' },
      { t: 'べてください。' },
    ]
  },
  '量': {
    jp: '量が多すぎます。',
    en: 'There is too much.',
    seg: [
      { t: '量', r: 'りょう' },
      { t: 'が' },
      { t: '多', r: 'おお' },
      { t: 'すぎます。' },
    ]
  },
  '残す': {
    jp: '食べ物を残さないでください。',
    en: 'Please don\'t leave any food.',
    seg: [
      { t: '食', r: 'た' },
      { t: 'べ' },
      { t: '物', r: 'もの' },
      { t: 'を' },
      { t: '残', r: 'のこ' },
      { t: 'さないでください。' },
    ]
  },
  '残る': {
    jp: 'ご飯が少し残っています。',
    en: 'There is a little rice left over.',
    seg: [
      { t: 'ご' },
      { t: '飯', r: 'はん' },
      { t: 'が' },
      { t: '少', r: 'すこ' },
      { t: 'し' },
      { t: '残', r: 'のこ' },
      { t: 'っています。' },
    ]
  },
  'チャレンジ': {
    jp: '新しい料理にチャレンジしました。',
    en: 'I challenged myself with a new dish.',
    seg: [
      { t: '新', r: 'あたら' },
      { t: 'しい' },
      { t: '料理', r: 'りょうり' },
      { t: 'にチャレンジしました。' },
    ]
  },

  // Chapter 3 - Section 3: Cooking
  '材料': {
    jp: '料理の材料を買いました。',
    en: 'I bought the ingredients for the dish.',
    seg: [
      { t: '料理', r: 'りょうり' },
      { t: 'の' },
      { t: '材料', r: 'ざいりょう' },
      { t: 'を' },
      { t: '買', r: 'か' },
      { t: 'いました。' },
    ]
  },
  '半分': {
    jp: '半分に切ってください。',
    en: 'Please cut it in half.',
    seg: [
      { t: '半分', r: 'はんぶん' },
      { t: 'に' },
      { t: '切', r: 'き' },
      { t: 'ってください。' },
    ]
  },
  'はかる': {
    jp: '小麦粉を百グラムはかりました。',
    en: 'I measured 100 grams of flour.',
    seg: [
      { t: '小麦粉', r: 'こむぎこ' },
      { t: 'を' },
      { t: '百', r: 'ひゃく' },
      { t: 'グラムはかりました。' },
    ]
  },
  'まぜる': {
    jp: '卵と砂糖をまぜました。',
    en: 'I mixed eggs and sugar.',
    seg: [
      { t: '卵', r: 'たまご' },
      { t: 'と' },
      { t: '砂糖', r: 'さとう' },
      { t: 'をまぜました。' },
    ]
  },
  '道具': {
    jp: '料理道具を洗いました。',
    en: 'I washed the cooking utensils.',
    seg: [
      { t: '料理道具', r: 'りょうりどうぐ' },
      { t: 'を' },
      { t: '洗', r: 'あら' },
      { t: 'いました。' },
    ]
  },
  'なべ': {
    jp: 'なべにお湯を沸かしました。',
    en: 'I boiled water in the pot.',
    seg: [
      { t: 'なべにお' },
      { t: '湯', r: 'ゆ' },
      { t: 'を' },
      { t: '沸', r: 'わ' },
      { t: 'かしました。' },
    ]
  },
  'ふた': {
    jp: 'なべのふたを閉めました。',
    en: 'I closed the lid of the pot.',
    seg: [
      { t: 'なべのふたを' },
      { t: '閉', r: 'し' },
      { t: 'めました。' },
    ]
  },
  '皿': {
    jp: '皿に料理を盛りました。',
    en: 'I served the food on a plate.',
    seg: [
      { t: '皿', r: 'さら' },
      { t: 'に' },
      { t: '料理', r: 'りょうり' },
      { t: 'を' },
      { t: '盛', r: 'も' },
      { t: 'りました。' },
    ]
  },
  'ちゃわん': {
    jp: 'ちゃわんにご飯を入れました。',
    en: 'I put rice in the bowl.',
    seg: [
      { t: 'ちゃわんにご' },
      { t: '飯', r: 'はん' },
      { t: 'を' },
      { t: '入', r: 'い' },
      { t: 'れました。' },
    ]
  },
  '用意': {
    jp: '夕食の用意をしました。',
    en: 'I prepared dinner.',
    seg: [
      { t: '夕食', r: 'ゆうしょく' },
      { t: 'の' },
      { t: '用意', r: 'ようい' },
      { t: 'をしました。' },
    ]
  },
  '並ぶ': {
    jp: '皿が棚に並んでいます。',
    en: 'Plates are lined up on the shelf.',
    seg: [
      { t: '皿', r: 'さら' },
      { t: 'が' },
      { t: '棚', r: 'たな' },
      { t: 'に' },
      { t: '並', r: 'なら' },
      { t: 'んでいます。' },
    ]
  },
  '並べる': {
    jp: 'テーブルに皿を並べました。',
    en: 'I arranged plates on the table.',
    seg: [
      { t: 'テーブルに' },
      { t: '皿', r: 'さら' },
      { t: 'を' },
      { t: '並', r: 'なら' },
      { t: 'べました。' },
    ]
  },
  '火': {
    jp: '火を弱くしてください。',
    en: 'Please lower the heat.',
    seg: [
      { t: '火', r: 'ひ' },
      { t: 'を' },
      { t: '弱', r: 'よわ' },
      { t: 'くしてください。' },
    ]
  },
  '役く': {
    jp: '野菜を焼きました。',
    en: 'I grilled the vegetables.',
    seg: [
      { t: '野菜', r: 'やさい' },
      { t: 'を' },
      { t: '焼', r: 'や' },
      { t: 'きました。' },
    ]
  },
  '焼ける': {
    jp: 'パンが焼けました。',
    en: 'The bread is done baking.',
    seg: [
      { t: 'パンが' },
      { t: '焼', r: 'や' },
      { t: 'けました。' },
    ]
  },
  'やかん': {
    jp: 'やかんでお湯を沸かしました。',
    en: 'I boiled water in the kettle.',
    seg: [
      { t: 'やかんでお' },
      { t: '湯', r: 'ゆ' },
      { t: 'を' },
      { t: '沸', r: 'わ' },
      { t: 'かしました。' },
    ]
  },
  'わかす': {
    jp: 'お湯をわかしています。',
    en: 'I am boiling water.',
    seg: [
      { t: 'お' },
      { t: '湯', r: 'ゆ' },
      { t: 'をわかしています。' },
    ]
  },
  '温める': {
    jp: '電子レンジで温めました。',
    en: 'I warmed it up in the microwave.',
    seg: [
      { t: '電子', r: 'でんし' },
      { t: 'レンジで' },
      { t: '温', r: 'あたた' },
      { t: 'めました。' },
    ]
  },
  '冷やす': {
    jp: 'スープを冷やしました。',
    en: 'I chilled the soup.',
    seg: [
      { t: 'スープを' },
      { t: '冷', r: 'ひ' },
      { t: 'やしました。' },
    ]
  },
  '入れる': {
    jp: 'バッグに荷物を入れました。',
    en: 'I put things in the bag.',
    seg: [
      { t: 'バッグに' },
      { t: '荷物', r: 'にもつ' },
      { t: 'を' },
      { t: '入', r: 'い' },
      { t: 'れました。' },
    ]
  },
  'くさる': {
    jp: '食べ物がくさりました。',
    en: 'The food spoiled.',
    seg: [
      { t: '食', r: 'た' },
      { t: 'べ' },
      { t: '物', r: 'もの' },
      { t: 'がくさりました。' },
    ]
  },
  'すてる': {
    jp: 'ごみを捨てました。',
    en: 'I threw away the garbage.',
    seg: [
      { t: 'ごみを' },
      { t: '捨', r: 'す' },
      { t: 'てました。' },
    ]
  },
  '米': {
    jp: '米を炊きました。',
    en: 'I cooked rice.',
    seg: [
      { t: '米', r: 'こめ' },
      { t: 'を' },
      { t: '炊', r: 'た' },
      { t: 'きました。' },
    ]
  },
  'べんとう': {
    jp: '弁当を作りました。',
    en: 'I made a boxed lunch.',
    seg: [
      { t: '弁当', r: 'べんとう' },
      { t: 'を' },
      { t: '作', r: 'つく' },
      { t: 'りました。' },
    ]
  },
  'おかず': {
    jp: 'おかずを三品作りました。',
    en: 'I made three side dishes.',
    seg: [
      { t: 'おかずを' },
      { t: '三品', r: 'さんしな' },
      { t: '作', r: 'つく' },
      { t: 'りました。' },
    ]
  },
  'インスタント食品': {
    jp: 'インスタント食品を食べました。',
    en: 'I ate instant food.',
    seg: [
      { t: 'インスタント' },
      { t: '食品', r: 'しょくひん' },
      { t: 'を' },
      { t: '食', r: 'た' },
      { t: 'べました。' },
    ]
  },
  'かんづめ': {
    jp: '缶詰を開けました。',
    en: 'I opened the canned food.',
    seg: [
      { t: '缶詰', r: 'かんづめ' },
      { t: 'を' },
      { t: '開', r: 'あ' },
      { t: 'けました。' },
    ]
  },
  '家事': {
    jp: '家事を分担しています。',
    en: 'We share the household chores.',
    seg: [
      { t: '家事', r: 'かじ' },
      { t: 'を' },
      { t: '分担', r: 'ぶんたん' },
      { t: 'しています。' },
    ]
  },

  // Chapter 3 - Section 4: Shopping
  'ねだん': {
    jp: 'このシャツのねだんはいくらですか。',
    en: 'How much is this shirt?',
    seg: [
      { t: 'このシャツのねだんはいくらですか。' },
    ]
  },
  '上がる': {
    jp: '物価が上がりました。',
    en: 'Prices went up.',
    seg: [
      { t: '物価', r: 'ぶっか' },
      { t: 'が' },
      { t: '上', r: 'あ' },
      { t: 'がりました。' },
    ]
  },
  'バーゲン': {
    jp: 'バーゲンでコートを買いました。',
    en: 'I bought a coat at the sale.',
    seg: [
      { t: 'バーゲンでコートを' },
      { t: '買', r: 'か' },
      { t: 'いました。' },
    ]
  },
  '割引': {
    jp: '十パーセント割引になりました。',
    en: 'It became 10% off.',
    seg: [
      { t: '十', r: 'じゅう' },
      { t: 'パーセント' },
      { t: '割引', r: 'わりびき' },
      { t: 'になりました。' },
    ]
  },
  '無料': {
    jp: '入場は無料です。',
    en: 'Admission is free.',
    seg: [
      { t: '入場', r: 'にゅうじょう' },
      { t: 'は' },
      { t: '無料', r: 'むりょう' },
      { t: 'です。' },
    ]
  },
  '有料': {
    jp: '駐車場は有料です。',
    en: 'The parking lot is paid.',
    seg: [
      { t: '駐車場', r: 'ちゅうしゃじょう' },
      { t: 'は' },
      { t: '有料', r: 'ゆうりょう' },
      { t: 'です。' },
    ]
  },
  'さいふ': {
    jp: 'さいふをなくしました。',
    en: 'I lost my wallet.',
    seg: [
      { t: 'さいふをなくしました。' },
    ]
  },
  'レジ': {
    jp: 'レジで支払いをしました。',
    en: 'I paid at the checkout.',
    seg: [
      { t: 'レジで' },
      { t: '支払', r: 'しはら' },
      { t: 'いをしました。' },
    ]
  },
  '計算': {
    jp: '計算が合いません。',
    en: 'The calculation doesn\'t add up.',
    seg: [
      { t: '計算', r: 'けいさん' },
      { t: 'が' },
      { t: '合', r: 'あ' },
      { t: 'いません。' },
    ]
  },
  '店員': {
    jp: '店員さんに聞きました。',
    en: 'I asked the store clerk.',
    seg: [
      { t: '店員', r: 'てんいん' },
      { t: 'さんに' },
      { t: '聞', r: 'き' },
      { t: 'きました。' },
    ]
  },
  '数える': {
    jp: 'お金を数えました。',
    en: 'I counted the money.',
    seg: [
      { t: 'お' },
      { t: '金', r: 'かね' },
      { t: 'を' },
      { t: '数', r: 'かぞ' },
      { t: 'えました。' },
    ]
  },
  '払う': {
    jp: '現金で払いました。',
    en: 'I paid in cash.',
    seg: [
      { t: '現金', r: 'げんきん' },
      { t: 'で' },
      { t: '払', r: 'はら' },
      { t: 'いました。' },
    ]
  },
  'サイン': {
    jp: 'クレジットカードにサインしました。',
    en: 'I signed for the credit card.',
    seg: [
      { t: 'クレジットカードにサインしました。' },
    ]
  },
  '足りる': {
    jp: 'お金が足りません。',
    en: 'There is not enough money.',
    seg: [
      { t: 'お' },
      { t: '金', r: 'かね' },
      { t: 'が' },
      { t: '足', r: 'た' },
      { t: 'りません。' },
    ]
  },
  'つり': {
    jp: 'おつりをもらいました。',
    en: 'I received the change.',
    seg: [
      { t: 'おつりをもらいました。' },
    ]
  },
  'レシート': {
    jp: 'レシートをください。',
    en: 'Please give me a receipt.',
    seg: [
      { t: 'レシートをください。' },
    ]
  },
  'りょうしゅう書': {
    jp: '領収書を書いてもらいました。',
    en: 'I had them write me a receipt.',
    seg: [
      { t: '領収書', r: 'りょうしゅうしょ' },
      { t: 'を' },
      { t: '書', r: 'か' },
      { t: 'いてもらいました。' },
    ]
  },
  'ふくろ': {
    jp: '袋に入れてください。',
    en: 'Please put it in a bag.',
    seg: [
      { t: '袋', r: 'ふくろ' },
      { t: 'に' },
      { t: '入', r: 'い' },
      { t: 'れてください。' },
    ]
  },
  '取りかえる': {
    jp: '壊れた商品を取りかえました。',
    en: 'I exchanged the broken item.',
    seg: [
      { t: '壊', r: 'こわ' },
      { t: 'れた' },
      { t: '商品', r: 'しょうひん' },
      { t: 'を' },
      { t: '取', r: 'と' },
      { t: 'りかえました。' },
    ]
  },
  'さがす': {
    jp: '鍵をさがしています。',
    en: 'I am looking for my key.',
    seg: [
      { t: '鍵', r: 'かぎ' },
      { t: 'をさがしています。' },
    ]
  },
  'えらぶ': {
    jp: '好きな色をえらんでください。',
    en: 'Please choose your favorite color.',
    seg: [
      { t: '好', r: 'す' },
      { t: 'きな' },
      { t: '色', r: 'いろ' },
      { t: 'をえらんでください。' },
    ]
  },
  '包む': {
    jp: 'プレゼントを包みました。',
    en: 'I wrapped the present.',
    seg: [
      { t: 'プレゼントを' },
      { t: '包', r: 'つつ' },
      { t: 'みました。' },
    ]
  },
  '下ろす': {
    jp: 'ATMからお金を下ろしました。',
    en: 'I withdrew money from the ATM.',
    seg: [
      { t: 'ATMからお' },
      { t: '金', r: 'かね' },
      { t: 'を' },
      { t: '下', r: 'お' },
      { t: 'ろしました。' },
    ]
  },
  '売れる': {
    jp: 'このケーキはよく売れています。',
    en: 'This cake sells well.',
    seg: [
      { t: 'このケーキはよく' },
      { t: '売', r: 'う' },
      { t: 'れています。' },
    ]
  },
  '食料品': {
    jp: 'スーパーで食料品を買いました。',
    en: 'I bought groceries at the supermarket.',
    seg: [
      { t: 'スーパーで' },
      { t: '食料品', r: 'しょくりょうひん' },
      { t: 'を' },
      { t: '買', r: 'か' },
      { t: 'いました。' },
    ]
  },
  'おもちゃ': {
    jp: '子どもにおもちゃを買いました。',
    en: 'I bought a toy for my child.',
    seg: [
      { t: '子', r: 'こ' },
      { t: 'どもにおもちゃを' },
      { t: '買', r: 'か' },
      { t: 'いました。' },
    ]
  },
  'パンフレット': {
    jp: 'パンフレットをもらいました。',
    en: 'I received a pamphlet.',
    seg: [
      { t: 'パンフレットをもらいました。' },
    ]
  },
  '日本製': {
    jp: 'これは日本製です。',
    en: 'This is made in Japan.',
    seg: [
      { t: 'これは' },
      { t: '日本製', r: 'にほんせい' },
      { t: 'です。' },
    ]
  },
  '本物': {
    jp: 'これは本物の革ですか。',
    en: 'Is this genuine leather?',
    seg: [
      { t: 'これは' },
      { t: '本物', r: 'ほんもの' },
      { t: 'の' },
      { t: '革', r: 'かわ' },
      { t: 'ですか。' },
    ]
  },

  // Chapter 3 - Section 5: Places
  '場所': {
    jp: '待ち合わせの場所はどこですか。',
    en: 'Where is the meeting place?',
    seg: [
      { t: '待', r: 'ま' },
      { t: 'ち' },
      { t: '合', r: 'あ' },
      { t: 'わせの' },
      { t: '場所', r: 'ばしょ' },
      { t: 'はどこですか。' },
    ]
  },
  '駅前': {
    jp: '駅前に新しいカフェができました。',
    en: 'A new cafe opened in front of the station.',
    seg: [
      { t: '駅前', r: 'えきまえ' },
      { t: 'に' },
      { t: '新', r: 'あたら' },
      { t: 'しいカフェができました。' },
    ]
  },
  '交番': {
    jp: '交番で道を教えてもらいました。',
    en: 'I was told the way at the police box.',
    seg: [
      { t: '交番', r: 'こうばん' },
      { t: 'で' },
      { t: '道', r: 'みち' },
      { t: 'を' },
      { t: '教', r: 'おし' },
      { t: 'えてもらいました。' },
    ]
  },
  '市役所': {
    jp: '市役所に書類を出しに行きました。',
    en: 'I went to submit documents to city hall.',
    seg: [
      { t: '市役所', r: 'しやくしょ' },
      { t: 'に' },
      { t: '書類', r: 'しょるい' },
      { t: 'を' },
      { t: '出', r: 'だ' },
      { t: 'しに' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  'バス停': {
    jp: 'バス停でバスを待っています。',
    en: 'I\'m waiting for the bus at the bus stop.',
    seg: [
      { t: 'バス' },
      { t: '停', r: 'てい' },
      { t: 'でバスを' },
      { t: '待', r: 'ま' },
      { t: 'っています。' },
    ]
  },
  '広場': {
    jp: '広場でイベントがあります。',
    en: 'There is an event at the plaza.',
    seg: [
      { t: '広場', r: 'ひろば' },
      { t: 'でイベントがあります。' },
    ]
  },
  '城': {
    jp: '有名な城を見学しました。',
    en: 'I visited a famous castle.',
    seg: [
      { t: '有名', r: 'ゆうめい' },
      { t: 'な' },
      { t: '城', r: 'しろ' },
      { t: 'を' },
      { t: '見学', r: 'けんがく' },
      { t: 'しました。' },
    ]
  },
  '神社': {
    jp: '神社にお参りしました。',
    en: 'I prayed at the shrine.',
    seg: [
      { t: '神社', r: 'じんじゃ' },
      { t: 'にお' },
      { t: '参', r: 'まい' },
      { t: 'りしました。' },
    ]
  },
  '協会': {
    jp: '協会のメンバーになりました。',
    en: 'I became a member of the association.',
    seg: [
      { t: '協会', r: 'きょうかい' },
      { t: 'のメンバーになりました。' },
    ]
  },
  '港': {
    jp: '港から船が出ました。',
    en: 'A ship departed from the port.',
    seg: [
      { t: '港', r: 'みなと' },
      { t: 'から' },
      { t: '船', r: 'ふね' },
      { t: 'が' },
      { t: '出', r: 'で' },
      { t: 'ました。' },
    ]
  },
  '動物園': {
    jp: '動物園でパンダを見ました。',
    en: 'I saw a panda at the zoo.',
    seg: [
      { t: '動物園', r: 'どうぶつえん' },
      { t: 'でパンダを' },
      { t: '見', r: 'み' },
      { t: 'ました。' },
    ]
  },
  '美術館': {
    jp: '美術館で絵を見ました。',
    en: 'I saw paintings at the art museum.',
    seg: [
      { t: '美術館', r: 'びじゅつかん' },
      { t: 'で' },
      { t: '絵', r: 'え' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'ました。' },
    ]
  },
  '遊園地': {
    jp: '遊園地に行って楽しみました。',
    en: 'I went to the amusement park and had fun.',
    seg: [
      { t: '遊園地', r: 'ゆうえんち' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'って' },
      { t: '楽', r: 'たの' },
      { t: 'しみました。' },
    ]
  },
  'スキー場': {
    jp: 'スキー場で転びました。',
    en: 'I fell at the ski resort.',
    seg: [
      { t: 'スキー' },
      { t: '場', r: 'じょう' },
      { t: 'で' },
      { t: '転', r: 'ころ' },
      { t: 'びました。' },
    ]
  },
  '温泉': {
    jp: '温泉に入ってリラックスしました。',
    en: 'I relaxed in the hot spring.',
    seg: [
      { t: '温泉', r: 'おんせん' },
      { t: 'に' },
      { t: '入', r: 'はい' },
      { t: 'ってリラックスしました。' },
    ]
  },
  '駐車場': {
    jp: '駐車場に車を止めました。',
    en: 'I parked my car in the parking lot.',
    seg: [
      { t: '駐車場', r: 'ちゅうしゃじょう' },
      { t: 'に' },
      { t: '車', r: 'くるま' },
      { t: 'を' },
      { t: '止', r: 'と' },
      { t: 'めました。' },
    ]
  },
  '屋上': {
    jp: '屋上から景色を見ました。',
    en: 'I viewed the scenery from the rooftop.',
    seg: [
      { t: '屋上', r: 'おくじょう' },
      { t: 'から' },
      { t: '景色', r: 'けしき' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'ました。' },
    ]
  },
  '地下': {
    jp: '地下に駐車場があります。',
    en: 'There is a parking lot underground.',
    seg: [
      { t: '地下', r: 'ちか' },
      { t: 'に' },
      { t: '駐車場', r: 'ちゅうしゃじょう' },
      { t: 'があります。' },
    ]
  },
  'いなか': {
    jp: '田舎に帰省しました。',
    en: 'I returned to my hometown in the countryside.',
    seg: [
      { t: '田舎', r: 'いなか' },
      { t: 'に' },
      { t: '帰省', r: 'きせい' },
      { t: 'しました。' },
    ]
  },
  '郊外': {
    jp: '郊外に引っ越しました。',
    en: 'I moved to the suburbs.',
    seg: [
      { t: '郊外', r: 'こうがい' },
      { t: 'に' },
      { t: '引っ越', r: 'ひっこ' },
      { t: 'しました。' },
    ]
  },
  '方言': {
    jp: '関西の方言が面白いです。',
    en: 'The Kansai dialect is interesting.',
    seg: [
      { t: '関西', r: 'かんさい' },
      { t: 'の' },
      { t: '方言', r: 'ほうげん' },
      { t: 'が' },
      { t: '面白', r: 'おもしろ' },
      { t: 'いです。' },
    ]
  },
  '禁煙': {
    jp: 'ここは禁煙です。',
    en: 'No smoking here.',
    seg: [
      { t: 'ここは' },
      { t: '禁煙', r: 'きんえん' },
      { t: 'です。' },
    ]
  },
  '立入禁止': {
    jp: 'あそこは立入禁止です。',
    en: 'Entry is prohibited there.',
    seg: [
      { t: 'あそこは' },
      { t: '立入禁止', r: 'たちいりきんし' },
      { t: 'です。' },
    ]
  },
  '通り': {
    jp: 'この通りはにぎやかです。',
    en: 'This street is lively.',
    seg: [
      { t: 'この' },
      { t: '通', r: 'とお' },
      { t: 'りはにぎやかです。' },
    ]
  },
  '右側': {
    jp: '右側を歩いてください。',
    en: 'Please walk on the right side.',
    seg: [
      { t: '右側', r: 'みぎがわ' },
      { t: 'を' },
      { t: '歩', r: 'ある' },
      { t: 'いてください。' },
    ]
  },
  '間': {
    jp: '学校と駅の間にあります。',
    en: 'It\'s between the school and the station.',
    seg: [
      { t: '学校', r: 'がっこう' },
      { t: 'と' },
      { t: '駅', r: 'えき' },
      { t: 'の' },
      { t: '間', r: 'あいだ' },
      { t: 'にあります。' },
    ]
  },
  '真ん中': {
    jp: 'テーブルの真ん中に置いてください。',
    en: 'Please place it in the middle of the table.',
    seg: [
      { t: 'テーブルの' },
      { t: '真', r: 'ま' },
      { t: 'ん' },
      { t: '中', r: 'なか' },
      { t: 'に' },
      { t: '置', r: 'お' },
      { t: 'いてください。' },
    ]
  },
  '向こう': {
    jp: '川の向こうに山が見えます。',
    en: 'I can see mountains across the river.',
    seg: [
      { t: '川', r: 'かわ' },
      { t: 'の' },
      { t: '向', r: 'む' },
      { t: 'こうに' },
      { t: '山', r: 'やま' },
      { t: 'が' },
      { t: '見', r: 'み' },
      { t: 'えます。' },
    ]
  },
  'たずねる': {
    jp: '道を警官にたずねました。',
    en: 'I asked a police officer for directions.',
    seg: [
      { t: '道', r: 'みち' },
      { t: 'を' },
      { t: '警官', r: 'けいかん' },
      { t: 'にたずねました。' },
    ]
  },
  '寄る': {
    jp: '帰りにコンビニに寄りました。',
    en: 'I stopped by a convenience store on the way home.',
    seg: [
      { t: '帰', r: 'かえ' },
      { t: 'りにコンビニに' },
      { t: '寄', r: 'よ' },
      { t: 'りました。' },
    ]
  },
  'できる': {
    jp: '駅の前に新しいビルができました。',
    en: 'A new building was built in front of the station.',
    seg: [
      { t: '駅', r: 'えき' },
      { t: 'の' },
      { t: '前', r: 'まえ' },
      { t: 'に' },
      { t: '新', r: 'あたら' },
      { t: 'しいビルができました。' },
    ]
  },

  // Chapter 4 - Section 1: Weather
  '天気予報': {
    jp: '天気予報を確認しました。',
    en: 'I checked the weather forecast.',
    seg: [
      { t: '天気予報', r: 'てんきよほう' },
      { t: 'を' },
      { t: '確認', r: 'かくにん' },
      { t: 'しました。' },
    ]
  },
  '青空': {
    jp: '今日は青空が広がっています。',
    en: 'The blue sky spreads out today.',
    seg: [
      { t: '今日', r: 'きょう' },
      { t: 'は' },
      { t: '青空', r: 'あおぞら' },
      { t: 'が' },
      { t: '広', r: 'ひろ' },
      { t: 'がっています。' },
    ]
  },
  '晴れる': {
    jp: '明日は晴れるでしょう。',
    en: 'It will probably be sunny tomorrow.',
    seg: [
      { t: '明日', r: 'あした' },
      { t: 'は' },
      { t: '晴', r: 'は' },
      { t: 'れるでしょう。' },
    ]
  },
  'くもり': {
    jp: '今日はくもりです。',
    en: 'It is cloudy today.',
    seg: [
      { t: '今日', r: 'きょう' },
      { t: 'はくもりです。' },
    ]
  },
  '風': {
    jp: '風が強く吹いています。',
    en: 'The wind is blowing strongly.',
    seg: [
      { t: '風', r: 'かぜ' },
      { t: 'が' },
      { t: '強', r: 'つよ' },
      { t: 'く' },
      { t: '吹', r: 'ふ' },
      { t: 'いています。' },
    ]
  },
  '吹く': {
    jp: '冷たい風が吹いています。',
    en: 'A cold wind is blowing.',
    seg: [
      { t: '冷', r: 'つめ' },
      { t: 'たい' },
      { t: '風', r: 'かぜ' },
      { t: 'が' },
      { t: '吹', r: 'ふ' },
      { t: 'いています。' },
    ]
  },
  'やむ': {
    jp: '雨がやみました。',
    en: 'The rain stopped.',
    seg: [
      { t: '雨', r: 'あめ' },
      { t: 'がやみました。' },
    ]
  },
  '台風': {
    jp: '台風が近づいています。',
    en: 'A typhoon is approaching.',
    seg: [
      { t: '台風', r: 'たいふう' },
      { t: 'が' },
      { t: '近', r: 'ちか' },
      { t: 'づいています。' },
    ]
  },
  'かみなり': {
    jp: 'かみなりが鳴っています。',
    en: 'Thunder is rumbling.',
    seg: [
      { t: 'かみなりが' },
      { t: '鳴', r: 'な' },
      { t: 'っています。' },
    ]
  },
  'レインコート': {
    jp: 'レインコートを着ました。',
    en: 'I put on a raincoat.',
    seg: [
      { t: 'レインコートを' },
      { t: '着', r: 'き' },
      { t: 'ました。' },
    ]
  },
  'さす': {
    jp: '傘をさして出かけました。',
    en: 'I went out holding an umbrella.',
    seg: [
      { t: '傘', r: 'かさ' },
      { t: 'をさして' },
      { t: '出', r: 'で' },
      { t: 'かけました。' },
    ]
  },
  'ぬれる': {
    jp: '雨でぬれました。',
    en: 'I got wet from the rain.',
    seg: [
      { t: '雨', r: 'あめ' },
      { t: 'でぬれました。' },
    ]
  },
  '波': {
    jp: '海の波が高いです。',
    en: 'The ocean waves are high.',
    seg: [
      { t: '海', r: 'うみ' },
      { t: 'の' },
      { t: '波', r: 'なみ' },
      { t: 'が' },
      { t: '高', r: 'たか' },
      { t: 'いです。' },
    ]
  },
  '気温': {
    jp: '今日の気温は三十度です。',
    en: 'Today\'s temperature is 30 degrees.',
    seg: [
      { t: '今日', r: 'きょう' },
      { t: 'の' },
      { t: '気温', r: 'きおん' },
      { t: 'は' },
      { t: '三十度', r: 'さんじゅうど' },
      { t: 'です。' },
    ]
  },
  '冷える': {
    jp: '夜になると冷えます。',
    en: 'It gets cold when night comes.',
    seg: [
      { t: '夜', r: 'よる' },
      { t: 'になると' },
      { t: '冷', r: 'ひ' },
      { t: 'えます。' },
    ]
  },
  '比べる': {
    jp: '去年と比べて暖かいです。',
    en: 'It\'s warmer compared to last year.',
    seg: [
      { t: '去年', r: 'きょねん' },
      { t: 'と' },
      { t: '比', r: 'くら' },
      { t: 'べて' },
      { t: '暖', r: 'あたた' },
      { t: 'かいです。' },
    ]
  },

  // Chapter 4 - Section 2: Nature
  '地震': {
    jp: '昨夜、地震がありました。',
    en: 'There was an earthquake last night.',
    seg: [
      { t: '昨夜', r: 'さくや' },
      { t: '、' },
      { t: '地震', r: 'じしん' },
      { t: 'がありました。' },
    ]
  },
  '津波': {
    jp: '津波の警報が出ました。',
    en: 'A tsunami warning was issued.',
    seg: [
      { t: '津波', r: 'つなみ' },
      { t: 'の' },
      { t: '警報', r: 'けいほう' },
      { t: 'が' },
      { t: '出', r: 'で' },
      { t: 'ました。' },
    ]
  },
  '太陽': {
    jp: '太陽がまぶしいです。',
    en: 'The sun is bright.',
    seg: [
      { t: '太陽', r: 'たいよう' },
      { t: 'がまぶしいです。' },
    ]
  },
  '空': {
    jp: '空が青くてきれいです。',
    en: 'The sky is blue and beautiful.',
    seg: [
      { t: '空', r: 'そら' },
      { t: 'が' },
      { t: '青', r: 'あお' },
      { t: 'くてきれいです。' },
    ]
  },
  '月': {
    jp: '今夜は月がきれいです。',
    en: 'The moon is beautiful tonight.',
    seg: [
      { t: '今夜', r: 'こんや' },
      { t: 'は' },
      { t: '月', r: 'つき' },
      { t: 'がきれいです。' },
    ]
  },
  '星': {
    jp: '星がたくさん見えます。',
    en: 'Many stars are visible.',
    seg: [
      { t: '星', r: 'ほし' },
      { t: 'がたくさん' },
      { t: '見', r: 'み' },
      { t: 'えます。' },
    ]
  },
  '光る': {
    jp: '星が光っています。',
    en: 'Stars are shining.',
    seg: [
      { t: '星', r: 'ほし' },
      { t: 'が' },
      { t: '光', r: 'ひか' },
      { t: 'っています。' },
    ]
  },
  '宇宙': {
    jp: '宇宙に興味があります。',
    en: 'I am interested in space.',
    seg: [
      { t: '宇宙', r: 'うちゅう' },
      { t: 'に' },
      { t: '興味', r: 'きょうみ' },
      { t: 'があります。' },
    ]
  },
  '空気': {
    jp: '山の空気は新鮮です。',
    en: 'The mountain air is fresh.',
    seg: [
      { t: '山', r: 'やま' },
      { t: 'の' },
      { t: '空気', r: 'くうき' },
      { t: 'は' },
      { t: '新鮮', r: 'しんせん' },
      { t: 'です。' },
    ]
  },
  '島': {
    jp: '沖縄の島に行きました。',
    en: 'I went to an island in Okinawa.',
    seg: [
      { t: '沖縄', r: 'おきなわ' },
      { t: 'の' },
      { t: '島', r: 'しま' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '海岸': {
    jp: '海岸を散歩しました。',
    en: 'I took a walk along the coast.',
    seg: [
      { t: '海岸', r: 'かいがん' },
      { t: 'を' },
      { t: '散歩', r: 'さんぽ' },
      { t: 'しました。' },
    ]
  },
  '林': {
    jp: '林の中を歩きました。',
    en: 'I walked through the forest.',
    seg: [
      { t: '林', r: 'はやし' },
      { t: 'の' },
      { t: '中', r: 'なか' },
      { t: 'を' },
      { t: '歩', r: 'ある' },
      { t: 'きました。' },
    ]
  },
  '湖': {
    jp: '湖で釣りをしました。',
    en: 'I went fishing at the lake.',
    seg: [
      { t: '湖', r: 'みずうみ' },
      { t: 'で' },
      { t: '釣', r: 'つ' },
      { t: 'りをしました。' },
    ]
  },
  '池': {
    jp: '公園の池に鳥がいます。',
    en: 'There are birds in the park pond.',
    seg: [
      { t: '公園', r: 'こうえん' },
      { t: 'の' },
      { t: '池', r: 'いけ' },
      { t: 'に' },
      { t: '鳥', r: 'とり' },
      { t: 'がいます。' },
    ]
  },
  '虫': {
    jp: '夏は虫が多いです。',
    en: 'There are many insects in summer.',
    seg: [
      { t: '夏', r: 'なつ' },
      { t: 'は' },
      { t: '虫', r: 'むし' },
      { t: 'が' },
      { t: '多', r: 'おお' },
      { t: 'いです。' },
    ]
  },
  '鳥': {
    jp: '窓の外で鳥が鳴いています。',
    en: 'A bird is singing outside the window.',
    seg: [
      { t: '窓', r: 'まど' },
      { t: 'の' },
      { t: '外', r: 'そと' },
      { t: 'で' },
      { t: '鳥', r: 'とり' },
      { t: 'が' },
      { t: '鳴', r: 'な' },
      { t: 'いています。' },
    ]
  },
  '季節': {
    jp: '日本には四つの季節があります。',
    en: 'Japan has four seasons.',
    seg: [
      { t: '日本', r: 'にほん' },
      { t: 'には' },
      { t: '四', r: 'よっ' },
      { t: 'つの' },
      { t: '季節', r: 'きせつ' },
      { t: 'があります。' },
    ]
  },
  '紅葉': {
    jp: '紅葉がきれいな季節です。',
    en: 'It is the season when the autumn leaves are beautiful.',
    seg: [
      { t: '紅葉', r: 'こうよう' },
      { t: 'がきれいな' },
      { t: '季節', r: 'きせつ' },
      { t: 'です。' },
    ]
  },
  '花見': {
    jp: '公園で花見をしました。',
    en: 'I went cherry blossom viewing at the park.',
    seg: [
      { t: '公園', r: 'こうえん' },
      { t: 'で' },
      { t: '花見', r: 'はなみ' },
      { t: 'をしました。' },
    ]
  },
  '咲く': {
    jp: '桜が咲いています。',
    en: 'The cherry blossoms are in bloom.',
    seg: [
      { t: '桜', r: 'さくら' },
      { t: 'が' },
      { t: '咲', r: 'さ' },
      { t: 'いています。' },
    ]
  },
  '葉': {
    jp: '木の葉が赤くなりました。',
    en: 'The leaves on the trees turned red.',
    seg: [
      { t: '木', r: 'き' },
      { t: 'の' },
      { t: '葉', r: 'は' },
      { t: 'が' },
      { t: '赤', r: 'あか' },
      { t: 'くなりました。' },
    ]
  },
  '技': {
    jp: '枝が風で折れました。',
    en: 'The branch broke in the wind.',
    seg: [
      { t: '枝', r: 'えだ' },
      { t: 'が' },
      { t: '風', r: 'かぜ' },
      { t: 'で' },
      { t: '折', r: 'お' },
      { t: 'れました。' },
    ]
  },
  '折れる': {
    jp: '木の枝が折れました。',
    en: 'The tree branch broke.',
    seg: [
      { t: '木', r: 'き' },
      { t: 'の' },
      { t: '枝', r: 'えだ' },
      { t: 'が' },
      { t: '折', r: 'お' },
      { t: 'れました。' },
    ]
  },
  '折る': {
    jp: '紙を折ってください。',
    en: 'Please fold the paper.',
    seg: [
      { t: '紙', r: 'かみ' },
      { t: 'を' },
      { t: '折', r: 'お' },
      { t: 'ってください。' },
    ]
  },
  '植える': {
    jp: '庭に花を植えました。',
    en: 'I planted flowers in the garden.',
    seg: [
      { t: '庭', r: 'にわ' },
      { t: 'に' },
      { t: '花', r: 'はな' },
      { t: 'を' },
      { t: '植', r: 'う' },
      { t: 'えました。' },
    ]
  },

  // Chapter 4 - Section 3: Transport
  '新幹線': {
    jp: '新幹線で東京に行きました。',
    en: 'I went to Tokyo by bullet train.',
    seg: [
      { t: '新幹線', r: 'しんかんせん' },
      { t: 'で' },
      { t: '東京', r: 'とうきょう' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '急行': {
    jp: '急行に乗りました。',
    en: 'I took the express train.',
    seg: [
      { t: '急行', r: 'きゅうこう' },
      { t: 'に' },
      { t: '乗', r: 'の' },
      { t: 'りました。' },
    ]
  },
  '夜行バス': {
    jp: '夜行バスで大阪に行きました。',
    en: 'I went to Osaka by overnight bus.',
    seg: [
      { t: '夜行', r: 'やこう' },
      { t: 'バスで' },
      { t: '大阪', r: 'おおさか' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '自動車': {
    jp: '自動車で旅行しました。',
    en: 'I traveled by car.',
    seg: [
      { t: '自動車', r: 'じどうしゃ' },
      { t: 'で' },
      { t: '旅行', r: 'りょこう' },
      { t: 'しました。' },
    ]
  },
  'オートバイ': {
    jp: 'オートバイで通勤しています。',
    en: 'I commute by motorcycle.',
    seg: [
      { t: 'オートバイで' },
      { t: '通勤', r: 'つうきん' },
      { t: 'しています。' },
    ]
  },
  '船': {
    jp: '船で島に渡りました。',
    en: 'I crossed to the island by boat.',
    seg: [
      { t: '船', r: 'ふね' },
      { t: 'で' },
      { t: '島', r: 'しま' },
      { t: 'に' },
      { t: '渡', r: 'わた' },
      { t: 'りました。' },
    ]
  },
  '交通': {
    jp: '交通の便がいいです。',
    en: 'The transportation is convenient.',
    seg: [
      { t: '交通', r: 'こうつう' },
      { t: 'の' },
      { t: '便', r: 'べん' },
      { t: 'がいいです。' },
    ]
  },
  '利用': {
    jp: 'バスを利用しています。',
    en: 'I use the bus.',
    seg: [
      { t: 'バスを' },
      { t: '利用', r: 'りよう' },
      { t: 'しています。' },
    ]
  },
  '降りる': {
    jp: '次の駅で降ります。',
    en: 'I will get off at the next station.',
    seg: [
      { t: '次', r: 'つぎ' },
      { t: 'の' },
      { t: '駅', r: 'えき' },
      { t: 'で' },
      { t: '降', r: 'お' },
      { t: 'ります。' },
    ]
  },
  '乗りかえる': {
    jp: '山手線に乗りかえました。',
    en: 'I transferred to the Yamanote Line.',
    seg: [
      { t: '山手線', r: 'やまのてせん' },
      { t: 'に' },
      { t: '乗', r: 'の' },
      { t: 'りかえました。' },
    ]
  },
  'ラッシュ': {
    jp: 'ラッシュの時間は電車が混みます。',
    en: 'The train is crowded during rush hour.',
    seg: [
      { t: 'ラッシュの' },
      { t: '時間', r: 'じかん' },
      { t: 'は' },
      { t: '電車', r: 'でんしゃ' },
      { t: 'が' },
      { t: '混', r: 'こ' },
      { t: 'みます。' },
    ]
  },
  'こむ': {
    jp: 'バスがこんでいます。',
    en: 'The bus is crowded.',
    seg: [
      { t: 'バスがこんでいます。' },
    ]
  },
  'すく': {
    jp: '早朝は電車がすいています。',
    en: 'The train is uncrowded in the early morning.',
    seg: [
      { t: '早朝', r: 'そうちょう' },
      { t: 'は' },
      { t: '電車', r: 'でんしゃ' },
      { t: 'がすいています。' },
    ]
  },
  '通る': {
    jp: 'この道をまっすぐ通ってください。',
    en: 'Please go straight down this road.',
    seg: [
      { t: 'この' },
      { t: '道', r: 'みち' },
      { t: 'をまっすぐ' },
      { t: '通', r: 'とお' },
      { t: 'ってください。' },
    ]
  },
  'すぎる': {
    jp: '駅をすぎてしまいました。',
    en: 'I went past the station.',
    seg: [
      { t: '駅', r: 'えき' },
      { t: 'をすぎてしまいました。' },
    ]
  },
  '開ける': {
    jp: 'ドアを開けました。',
    en: 'I opened the door.',
    seg: [
      { t: 'ドアを' },
      { t: '開', r: 'あ' },
      { t: 'けました。' },
    ]
  },
  '閉まる': {
    jp: 'ドアが閉まりました。',
    en: 'The door closed.',
    seg: [
      { t: 'ドアが' },
      { t: '閉', r: 'し' },
      { t: 'まりました。' },
    ]
  },
  '閉める': {
    jp: '窓を閉めてください。',
    en: 'Please close the window.',
    seg: [
      { t: '窓', r: 'まど' },
      { t: 'を' },
      { t: '閉', r: 'し' },
      { t: 'めてください。' },
    ]
  },
  '運転手': {
    jp: '運転手さんに道を聞きました。',
    en: 'I asked the driver for directions.',
    seg: [
      { t: '運転手', r: 'うんてんしゅ' },
      { t: 'さんに' },
      { t: '道', r: 'みち' },
      { t: 'を' },
      { t: '聞', r: 'き' },
      { t: 'きました。' },
    ]
  },
  'お客さん': {
    jp: 'お客さんがたくさん来ました。',
    en: 'Many customers came.',
    seg: [
      { t: 'お' },
      { t: '客', r: 'きゃく' },
      { t: 'さんがたくさん' },
      { t: '来', r: 'き' },
      { t: 'ました。' },
    ]
  },
  '席': {
    jp: '席が空いています。',
    en: 'There is an empty seat.',
    seg: [
      { t: '席', r: 'せき' },
      { t: 'が' },
      { t: '空', r: 'あ' },
      { t: 'いています。' },
    ]
  },
  'おとな': {
    jp: 'おとなの切符を二枚ください。',
    en: 'Please give me two adult tickets.',
    seg: [
      { t: 'おとなの' },
      { t: '切符', r: 'きっぷ' },
      { t: 'を' },
      { t: '二枚', r: 'にまい' },
      { t: 'ください。' },
    ]
  },
  'お年より': {
    jp: 'お年よりに席を譲りました。',
    en: 'I gave up my seat for an elderly person.',
    seg: [
      { t: 'お' },
      { t: '年', r: 'とし' },
      { t: 'よりに' },
      { t: '席', r: 'せき' },
      { t: 'を' },
      { t: '譲', r: 'ゆず' },
      { t: 'りました。' },
    ]
  },

  // Chapter 4 - Section 4: Driving
  '進む': {
    jp: 'まっすぐ進んでください。',
    en: 'Please go straight ahead.',
    seg: [
      { t: 'まっすぐ' },
      { t: '進', r: 'すす' },
      { t: 'んでください。' },
    ]
  },
  '向かう': {
    jp: '空港に向かっています。',
    en: 'I am heading to the airport.',
    seg: [
      { t: '空港', r: 'くうこう' },
      { t: 'に' },
      { t: '向', r: 'む' },
      { t: 'かっています。' },
    ]
  },
  '止める': {
    jp: '車を駐車場に止めました。',
    en: 'I parked the car in the parking lot.',
    seg: [
      { t: '車', r: 'くるま' },
      { t: 'を' },
      { t: '駐車場', r: 'ちゅうしゃじょう' },
      { t: 'に' },
      { t: '止', r: 'と' },
      { t: 'めました。' },
    ]
  },
  '止まる': {
    jp: '赤信号で止まりました。',
    en: 'I stopped at the red light.',
    seg: [
      { t: '赤信号', r: 'あかしんごう' },
      { t: 'で' },
      { t: '止', r: 'と' },
      { t: 'まりました。' },
    ]
  },
  '運ぶ': {
    jp: '荷物を運びました。',
    en: 'I carried the luggage.',
    seg: [
      { t: '荷物', r: 'にもつ' },
      { t: 'を' },
      { t: '運', r: 'はこ' },
      { t: 'びました。' },
    ]
  },
  'そうさ': {
    jp: '機械の操作を学びました。',
    en: 'I learned how to operate the machine.',
    seg: [
      { t: '機械', r: 'きかい' },
      { t: 'の' },
      { t: '操作', r: 'そうさ' },
      { t: 'を' },
      { t: '学', r: 'まな' },
      { t: 'びました。' },
    ]
  },
  '回す': {
    jp: 'ハンドルを回しました。',
    en: 'I turned the steering wheel.',
    seg: [
      { t: 'ハンドルを' },
      { t: '回', r: 'まわ' },
      { t: 'しました。' },
    ]
  },
  '事故': {
    jp: '道路で事故がありました。',
    en: 'There was an accident on the road.',
    seg: [
      { t: '道路', r: 'どうろ' },
      { t: 'で' },
      { t: '事故', r: 'じこ' },
      { t: 'がありました。' },
    ]
  },
  'あう': {
    jp: '事故にあいました。',
    en: 'I was involved in an accident.',
    seg: [
      { t: '事故', r: 'じこ' },
      { t: 'にあいました。' },
    ]
  },
  'ぶつかる': {
    jp: '車が電柱にぶつかりました。',
    en: 'The car hit a utility pole.',
    seg: [
      { t: '車', r: 'くるま' },
      { t: 'が' },
      { t: '電柱', r: 'でんちゅう' },
      { t: 'にぶつかりました。' },
    ]
  },
  'すべる': {
    jp: '雪道ですべりました。',
    en: 'I slipped on the snowy road.',
    seg: [
      { t: '雪道', r: 'ゆきみち' },
      { t: 'ですべりました。' },
    ]
  },
  '安全＜な＞': {
    jp: '安全な運転を心がけています。',
    en: 'I try to drive safely.',
    seg: [
      { t: '安全', r: 'あんぜん' },
      { t: 'な' },
      { t: '運転', r: 'うんてん' },
      { t: 'を' },
      { t: '心', r: 'こころ' },
      { t: 'がけています。' },
    ]
  },
  '危険＜な＞': {
    jp: 'この道は危険です。',
    en: 'This road is dangerous.',
    seg: [
      { t: 'この' },
      { t: '道', r: 'みち' },
      { t: 'は' },
      { t: '危険', r: 'きけん' },
      { t: 'です。' },
    ]
  },
  '注意': {
    jp: '足元に注意してください。',
    en: 'Please be careful of your footing.',
    seg: [
      { t: '足元', r: 'あしもと' },
      { t: 'に' },
      { t: '注意', r: 'ちゅうい' },
      { t: 'してください。' },
    ]
  },
  '赤ちゃん': {
    jp: '赤ちゃんが生まれました。',
    en: 'A baby was born.',
    seg: [
      { t: '赤', r: 'あか' },
      { t: 'ちゃんが' },
      { t: '生', r: 'う' },
      { t: 'まれました。' },
    ]
  },
  '故障': {
    jp: '車が故障しました。',
    en: 'The car broke down.',
    seg: [
      { t: '車', r: 'くるま' },
      { t: 'が' },
      { t: '故障', r: 'こしょう' },
      { t: 'しました。' },
    ]
  },
  'とちゅう': {
    jp: '途中で雨が降ってきました。',
    en: 'It started raining on the way.',
    seg: [
      { t: '途中', r: 'とちゅう' },
      { t: 'で' },
      { t: '雨', r: 'あめ' },
      { t: 'が' },
      { t: '降', r: 'ふ' },
      { t: 'ってきました。' },
    ]
  },
  '行き': {
    jp: '行きは電車で来ました。',
    en: 'I came by train on the way here.',
    seg: [
      { t: '行', r: 'い' },
      { t: 'きは' },
      { t: '電車', r: 'でんしゃ' },
      { t: 'で' },
      { t: '来', r: 'き' },
      { t: 'ました。' },
    ]
  },
  '帰り': {
    jp: '帰りはバスに乗ります。',
    en: 'I will take the bus on the way back.',
    seg: [
      { t: '帰', r: 'かえ' },
      { t: 'りはバスに' },
      { t: '乗', r: 'の' },
      { t: 'ります。' },
    ]
  },
  'ガソリン': {
    jp: 'ガソリンを入れました。',
    en: 'I filled up with gasoline.',
    seg: [
      { t: 'ガソリンを' },
      { t: '入', r: 'い' },
      { t: 'れました。' },
    ]
  },
  'エンジン': {
    jp: 'エンジンがかかりません。',
    en: 'The engine won\'t start.',
    seg: [
      { t: 'エンジンがかかりません。' },
    ]
  },
  '信号': {
    jp: '信号を渡ってください。',
    en: 'Please cross at the traffic light.',
    seg: [
      { t: '信号', r: 'しんごう' },
      { t: 'を' },
      { t: '渡', r: 'わた' },
      { t: 'ってください。' },
    ]
  },
  'やじるし': {
    jp: 'やじるしの方向に進んでください。',
    en: 'Please proceed in the direction of the arrow.',
    seg: [
      { t: 'やじるしの' },
      { t: '方向', r: 'ほうこう' },
      { t: 'に' },
      { t: '進', r: 'すす' },
      { t: 'んでください。' },
    ]
  },
  'キロ': {
    jp: '時速百キロで走っています。',
    en: 'I\'m driving at 100 kilometers per hour.',
    seg: [
      { t: '時速', r: 'じそく' },
      { t: '百', r: 'ひゃく' },
      { t: 'キロで' },
      { t: '走', r: 'はし' },
      { t: 'っています。' },
    ]
  },

  // Chapter 4 - Section 5: World
  '人口': {
    jp: '東京の人口はとても多いです。',
    en: 'The population of Tokyo is very large.',
    seg: [
      { t: '東京', r: 'とうきょう' },
      { t: 'の' },
      { t: '人口', r: 'じんこう' },
      { t: 'はとても' },
      { t: '多', r: 'おお' },
      { t: 'いです。' },
    ]
  },
  '億': {
    jp: '日本の人口は一億人です。',
    en: 'The population of Japan is 100 million.',
    seg: [
      { t: '日本', r: 'にほん' },
      { t: 'の' },
      { t: '人口', r: 'じんこう' },
      { t: 'は' },
      { t: '一億人', r: 'いちおくにん' },
      { t: 'です。' },
    ]
  },
  '経済': {
    jp: '経済の勉強をしています。',
    en: 'I am studying economics.',
    seg: [
      { t: '経済', r: 'けいざい' },
      { t: 'の' },
      { t: '勉強', r: 'べんきょう' },
      { t: 'をしています。' },
    ]
  },
  '貿易': {
    jp: '日本は貿易が盛んです。',
    en: 'Japan is active in trade.',
    seg: [
      { t: '日本', r: 'にほん' },
      { t: 'は' },
      { t: '貿易', r: 'ぼうえき' },
      { t: 'が' },
      { t: '盛', r: 'さか' },
      { t: 'んです。' },
    ]
  },
  'ゆしゅつ': {
    jp: '車を輸出しています。',
    en: 'We export cars.',
    seg: [
      { t: '車', r: 'くるま' },
      { t: 'を' },
      { t: '輸出', r: 'ゆしゅつ' },
      { t: 'しています。' },
    ]
  },
  'ゆにゅう': {
    jp: '石油を輸入しています。',
    en: 'We import oil.',
    seg: [
      { t: '石油', r: 'せきゆ' },
      { t: 'を' },
      { t: '輸入', r: 'ゆにゅう' },
      { t: 'しています。' },
    ]
  },
  '原料': {
    jp: 'この製品の原料は何ですか。',
    en: 'What is the raw material of this product?',
    seg: [
      { t: 'この' },
      { t: '製品', r: 'せいひん' },
      { t: 'の' },
      { t: '原料', r: 'げんりょう' },
      { t: 'は' },
      { t: '何', r: 'なん' },
      { t: 'ですか。' },
    ]
  },
  '石油': {
    jp: '石油の価格が上がりました。',
    en: 'The price of oil went up.',
    seg: [
      { t: '石油', r: 'せきゆ' },
      { t: 'の' },
      { t: '価格', r: 'かかく' },
      { t: 'が' },
      { t: '上', r: 'あ' },
      { t: 'がりました。' },
    ]
  },
  '物価': {
    jp: '最近、物価が高くなっています。',
    en: 'Prices have been rising lately.',
    seg: [
      { t: '最近', r: 'さいきん' },
      { t: '、' },
      { t: '物価', r: 'ぶっか' },
      { t: 'が' },
      { t: '高', r: 'たか' },
      { t: 'くなっています。' },
    ]
  },
  '政治': {
    jp: '政治に興味があります。',
    en: 'I am interested in politics.',
    seg: [
      { t: '政治', r: 'せいじ' },
      { t: 'に' },
      { t: '興味', r: 'きょうみ' },
      { t: 'があります。' },
    ]
  },
  '首相': {
    jp: '首相が外国を訪問しました。',
    en: 'The prime minister visited a foreign country.',
    seg: [
      { t: '首相', r: 'しゅしょう' },
      { t: 'が' },
      { t: '外国', r: 'がいこく' },
      { t: 'を' },
      { t: '訪問', r: 'ほうもん' },
      { t: 'しました。' },
    ]
  },
  '大統領': {
    jp: '大統領が演説をしました。',
    en: 'The president gave a speech.',
    seg: [
      { t: '大統領', r: 'だいとうりょう' },
      { t: 'が' },
      { t: '演説', r: 'えんぜつ' },
      { t: 'をしました。' },
    ]
  },
  '平和＜な＞': {
    jp: '平和な世界が大切です。',
    en: 'A peaceful world is important.',
    seg: [
      { t: '平和', r: 'へいわ' },
      { t: 'な' },
      { t: '世界', r: 'せかい' },
      { t: 'が' },
      { t: '大切', r: 'たいせつ' },
      { t: 'です。' },
    ]
  },
  '戦争': {
    jp: '戦争が終わりました。',
    en: 'The war ended.',
    seg: [
      { t: '戦争', r: 'せんそう' },
      { t: 'が' },
      { t: '終', r: 'お' },
      { t: 'わりました。' },
    ]
  },
  '文化': {
    jp: '日本の文化を学んでいます。',
    en: 'I am learning about Japanese culture.',
    seg: [
      { t: '日本', r: 'にほん' },
      { t: 'の' },
      { t: '文化', r: 'ぶんか' },
      { t: 'を' },
      { t: '学', r: 'まな' },
      { t: 'んでいます。' },
    ]
  },
  '世界遺産': {
    jp: '世界遺産を見に行きました。',
    en: 'I went to see a World Heritage Site.',
    seg: [
      { t: '世界遺産', r: 'せかいいさん' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '世紀': {
    jp: '二十一世紀が始まりました。',
    en: 'The 21st century began.',
    seg: [
      { t: '二十一世紀', r: 'にじゅういっせいき' },
      { t: 'が' },
      { t: '始', r: 'はじ' },
      { t: 'まりました。' },
    ]
  },
  '時代': {
    jp: '江戸時代の歴史を勉強しました。',
    en: 'I studied the history of the Edo period.',
    seg: [
      { t: '江戸時代', r: 'えどじだい' },
      { t: 'の' },
      { t: '歴史', r: 'れきし' },
      { t: 'を' },
      { t: '勉強', r: 'べんきょう' },
      { t: 'しました。' },
    ]
  },
  '国際': {
    jp: '国際交流に参加しました。',
    en: 'I participated in international exchange.',
    seg: [
      { t: '国際交流', r: 'こくさいこうりゅう' },
      { t: 'に' },
      { t: '参加', r: 'さんか' },
      { t: 'しました。' },
    ]
  },
  '世界中': {
    jp: '世界中の人に会いたいです。',
    en: 'I want to meet people from all over the world.',
    seg: [
      { t: '世界中', r: 'せかいじゅう' },
      { t: 'の' },
      { t: '人', r: 'ひと' },
      { t: 'に' },
      { t: '会', r: 'あ' },
      { t: 'いたいです。' },
    ]
  },

  // Chapter 5 - Section 1: Communication
  'メールアドレス': {
    jp: 'メールアドレスを教えてください。',
    en: 'Please tell me your email address.',
    seg: [
      { t: 'メールアドレスを' },
      { t: '教', r: 'おし' },
      { t: 'えてください。' },
    ]
  },
  '返事': {
    jp: 'メールに返事を出しました。',
    en: 'I replied to the email.',
    seg: [
      { t: 'メールに' },
      { t: '返事', r: 'へんじ' },
      { t: 'を' },
      { t: '出', r: 'だ' },
      { t: 'しました。' },
    ]
  },
  '知り合う': {
    jp: 'パーティーで知り合いました。',
    en: 'We met at a party.',
    seg: [
      { t: 'パーティーで' },
      { t: '知', r: 'し' },
      { t: 'り' },
      { t: '合', r: 'あ' },
      { t: 'いました。' },
    ]
  },
  '紹介': {
    jp: '友達を紹介してもらいました。',
    en: 'I was introduced to a friend.',
    seg: [
      { t: '友達', r: 'ともだち' },
      { t: 'を' },
      { t: '紹介', r: 'しょうかい' },
      { t: 'してもらいました。' },
    ]
  },
  '合い': {
    jp: '待ち合いの時間は何時ですか。',
    en: 'What time is the meeting time?',
    seg: [
      { t: '待', r: 'ま' },
      { t: 'ち' },
      { t: '合', r: 'あ' },
      { t: 'いの' },
      { t: '時間', r: 'じかん' },
      { t: 'は' },
      { t: '何時', r: 'なんじ' },
      { t: 'ですか。' },
    ]
  },
  '相談': {
    jp: '先生に相談しました。',
    en: 'I consulted with my teacher.',
    seg: [
      { t: '先生', r: 'せんせい' },
      { t: 'に' },
      { t: '相談', r: 'そうだん' },
      { t: 'しました。' },
    ]
  },
  'さんせい': {
    jp: '彼の意見に賛成です。',
    en: 'I agree with his opinion.',
    seg: [
      { t: '彼', r: 'かれ' },
      { t: 'の' },
      { t: '意見', r: 'いけん' },
      { t: 'に' },
      { t: '賛成', r: 'さんせい' },
      { t: 'です。' },
    ]
  },
  '反対': {
    jp: 'その計画に反対しました。',
    en: 'I opposed that plan.',
    seg: [
      { t: 'その' },
      { t: '計画', r: 'けいかく' },
      { t: 'に' },
      { t: '反対', r: 'はんたい' },
      { t: 'しました。' },
    ]
  },
  '訪ねる': {
    jp: '友達の家を訪ねました。',
    en: 'I visited my friend\'s house.',
    seg: [
      { t: '友達', r: 'ともだち' },
      { t: 'の' },
      { t: '家', r: 'いえ' },
      { t: 'を' },
      { t: '訪', r: 'たず' },
      { t: 'ねました。' },
    ]
  },
  '案内': {
    jp: '駅まで案内してください。',
    en: 'Please guide me to the station.',
    seg: [
      { t: '駅', r: 'えき' },
      { t: 'まで' },
      { t: '案内', r: 'あんない' },
      { t: 'してください。' },
    ]
  },
  'あげる': {
    jp: '友達にプレゼントをあげました。',
    en: 'I gave a present to my friend.',
    seg: [
      { t: '友達', r: 'ともだち' },
      { t: 'にプレゼントをあげました。' },
    ]
  },
  'くれる': {
    jp: '母がケーキをくれました。',
    en: 'My mother gave me cake.',
    seg: [
      { t: '母', r: 'はは' },
      { t: 'がケーキをくれました。' },
    ]
  },
  'もらう': {
    jp: '誕生日にプレゼントをもらいました。',
    en: 'I received a present on my birthday.',
    seg: [
      { t: '誕生日', r: 'たんじょうび' },
      { t: 'にプレゼントをもらいました。' },
    ]
  },
  '贈る': {
    jp: '花束を贈りました。',
    en: 'I gave a bouquet of flowers.',
    seg: [
      { t: '花束', r: 'はなたば' },
      { t: 'を' },
      { t: '贈', r: 'おく' },
      { t: 'りました。' },
    ]
  },
  '贈り物': {
    jp: '素敵な贈り物をありがとうございます。',
    en: 'Thank you for the wonderful gift.',
    seg: [
      { t: '素敵', r: 'すてき' },
      { t: 'な' },
      { t: '贈', r: 'おく' },
      { t: 'り' },
      { t: '物', r: 'もの' },
      { t: 'をありがとうございます。' },
    ]
  },
  '[お」祝い': {
    jp: '結婚のお祝いをしました。',
    en: 'I celebrated the wedding.',
    seg: [
      { t: '結婚', r: 'けっこん' },
      { t: 'のお' },
      { t: '祝', r: 'いわ' },
      { t: 'いをしました。' },
    ]
  },
  'わたす': {
    jp: '鍵を彼女にわたしました。',
    en: 'I handed the key to her.',
    seg: [
      { t: '鍵', r: 'かぎ' },
      { t: 'を' },
      { t: '彼女', r: 'かのじょ' },
      { t: 'にわたしました。' },
    ]
  },
  'よろこぶ': {
    jp: 'プレゼントをもらってよろこびました。',
    en: 'I was happy to receive the present.',
    seg: [
      { t: 'プレゼントをもらってよろこびました。' },
    ]
  },
  'おかげ': {
    jp: 'あなたのおかげで助かりました。',
    en: 'Thanks to you, I was saved.',
    seg: [
      { t: 'あなたのおかげで' },
      { t: '助', r: 'たす' },
      { t: 'かりました。' },
    ]
  },
  'かんしゃ': {
    jp: '感謝の気持ちを伝えました。',
    en: 'I conveyed my feelings of gratitude.',
    seg: [
      { t: '感謝', r: 'かんしゃ' },
      { t: 'の' },
      { t: '気持', r: 'きも' },
      { t: 'ちを' },
      { t: '伝', r: 'つた' },
      { t: 'えました。' },
    ]
  },
  'お礼': {
    jp: 'お礼のメールを送りました。',
    en: 'I sent a thank-you email.',
    seg: [
      { t: 'お' },
      { t: '礼', r: 'れい' },
      { t: 'のメールを' },
      { t: '送', r: 'おく' },
      { t: 'りました。' },
    ]
  },
  'あやまる': {
    jp: '遅刻したのであやまりました。',
    en: 'I apologized for being late.',
    seg: [
      { t: '遅刻', r: 'ちこく' },
      { t: 'したのであやまりました。' },
    ]
  },
  'えんりょ': {
    jp: '遠慮なく食べてください。',
    en: 'Please eat without holding back.',
    seg: [
      { t: '遠慮', r: 'えんりょ' },
      { t: 'なく' },
      { t: '食', r: 'た' },
      { t: 'べてください。' },
    ]
  },
  '気づく': {
    jp: '財布がないことに気づきました。',
    en: 'I noticed that my wallet was missing.',
    seg: [
      { t: '財布', r: 'さいふ' },
      { t: 'がないことに' },
      { t: '気', r: 'き' },
      { t: 'づきました。' },
    ]
  },
  '親友': {
    jp: '親友に悩みを相談しました。',
    en: 'I consulted my best friend about my worries.',
    seg: [
      { t: '親友', r: 'しんゆう' },
      { t: 'に' },
      { t: '悩', r: 'なや' },
      { t: 'みを' },
      { t: '相談', r: 'そうだん' },
      { t: 'しました。' },
    ]
  },
  'せんぱい': {
    jp: '先輩にアドバイスをもらいました。',
    en: 'I received advice from my senior.',
    seg: [
      { t: '先輩', r: 'せんぱい' },
      { t: 'にアドバイスをもらいました。' },
    ]
  },
  '彼ら': {
    jp: '彼らはみんな親切です。',
    en: 'They are all kind.',
    seg: [
      { t: '彼', r: 'かれ' },
      { t: 'らはみんな' },
      { t: '親切', r: 'しんせつ' },
      { t: 'です。' },
    ]
  },
  'みんな': {
    jp: 'みんなで決めましょう。',
    en: 'Let\'s decide together.',
    seg: [
      { t: 'みんなで' },
      { t: '決', r: 'き' },
      { t: 'めましょう。' },
    ]
  },
  '人気': {
    jp: 'このお店は人気があります。',
    en: 'This shop is popular.',
    seg: [
      { t: 'このお' },
      { t: '店', r: 'みせ' },
      { t: 'は' },
      { t: '人気', r: 'にんき' },
      { t: 'があります。' },
    ]
  },

  // Chapter 5 - Section 2: Romance
  'デート': {
    jp: '昨日、デートをしました。',
    en: 'I went on a date yesterday.',
    seg: [
      { t: '昨日', r: 'きのう' },
      { t: '、デートをしました。' },
    ]
  },
  '付き合う': {
    jp: '彼女と付き合っています。',
    en: 'I\'m dating her.',
    seg: [
      { t: '彼女', r: 'かのじょ' },
      { t: 'と' },
      { t: '付', r: 'つ' },
      { t: 'き' },
      { t: '合', r: 'あ' },
      { t: 'っています。' },
    ]
  },
  '連れて行く': {
    jp: '子どもを公園に連れて行きました。',
    en: 'I took the child to the park.',
    seg: [
      { t: '子', r: 'こ' },
      { t: 'どもを' },
      { t: '公園', r: 'こうえん' },
      { t: 'に' },
      { t: '連', r: 'つ' },
      { t: 'れて' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '連れて来る': {
    jp: '友達を連れて来てもいいですか。',
    en: 'May I bring my friend along?',
    seg: [
      { t: '友達', r: 'ともだち' },
      { t: 'を' },
      { t: '連', r: 'つ' },
      { t: 'れて' },
      { t: '来', r: 'き' },
      { t: 'てもいいですか。' },
    ]
  },
  '見合い': {
    jp: '見合いの話があります。',
    en: 'There is talk of an arranged marriage meeting.',
    seg: [
      { t: '見合', r: 'みあ' },
      { t: 'いの' },
      { t: '話', r: 'はなし' },
      { t: 'があります。' },
    ]
  },
  '婚約': {
    jp: '婚約しました。',
    en: 'We got engaged.',
    seg: [
      { t: '婚約', r: 'こんやく' },
      { t: 'しました。' },
    ]
  },
  '結婚': {
    jp: '来年、結婚する予定です。',
    en: 'I plan to get married next year.',
    seg: [
      { t: '来年', r: 'らいねん' },
      { t: '、' },
      { t: '結婚', r: 'けっこん' },
      { t: 'する' },
      { t: '予定', r: 'よてい' },
      { t: 'です。' },
    ]
  },
  '知らせる': {
    jp: '結果を知らせてください。',
    en: 'Please let me know the result.',
    seg: [
      { t: '結果', r: 'けっか' },
      { t: 'を' },
      { t: '知', r: 'し' },
      { t: 'らせてください。' },
    ]
  },
  '合図': {
    jp: '合図を送りました。',
    en: 'I sent a signal.',
    seg: [
      { t: '合図', r: 'あいず' },
      { t: 'を' },
      { t: '送', r: 'おく' },
      { t: 'りました。' },
    ]
  },
  'けんか': {
    jp: '友達とけんかをしました。',
    en: 'I had a fight with my friend.',
    seg: [
      { t: '友達', r: 'ともだち' },
      { t: 'とけんかをしました。' },
    ]
  },
  'うそ': {
    jp: 'うそをついてはいけません。',
    en: 'You must not tell lies.',
    seg: [
      { t: 'うそをついてはいけません。' },
    ]
  },
  '別れる': {
    jp: '彼女と別れました。',
    en: 'I broke up with my girlfriend.',
    seg: [
      { t: '彼女', r: 'かのじょ' },
      { t: 'と' },
      { t: '別', r: 'わか' },
      { t: 'れました。' },
    ]
  },
  'じゃま＜な/する＞': {
    jp: 'じゃまをしないでください。',
    en: 'Please don\'t get in the way.',
    seg: [
      { t: 'じゃまをしないでください。' },
    ]
  },
  '彼': {
    jp: '彼はとても優しいです。',
    en: 'He is very kind.',
    seg: [
      { t: '彼', r: 'かれ' },
      { t: 'はとても' },
      { t: '優', r: 'やさ' },
      { t: 'しいです。' },
    ]
  },
  '彼女': {
    jp: '彼女は料理が上手です。',
    en: 'She is good at cooking.',
    seg: [
      { t: '彼女', r: 'かのじょ' },
      { t: 'は' },
      { t: '料理', r: 'りょうり' },
      { t: 'が' },
      { t: '上手', r: 'じょうず' },
      { t: 'です。' },
    ]
  },
  'きみ': {
    jp: 'きみはどう思いますか。',
    en: 'What do you think?',
    seg: [
      { t: 'きみはどう' },
      { t: '思', r: 'おも' },
      { t: 'いますか。' },
    ]
  },
  'ぼく': {
    jp: 'ぼくはサッカーが好きです。',
    en: 'I like soccer.',
    seg: [
      { t: 'ぼくはサッカーが' },
      { t: '好', r: 'す' },
      { t: 'きです。' },
    ]
  },
  '独身': {
    jp: '独身のころが懐かしいです。',
    en: 'I miss the days when I was single.',
    seg: [
      { t: '独身', r: 'どくしん' },
      { t: 'のころが' },
      { t: '懐', r: 'なつ' },
      { t: 'かしいです。' },
    ]
  },
  '関係': {
    jp: '二人の関係は良いです。',
    en: 'The relationship between the two is good.',
    seg: [
      { t: '二人', r: 'ふたり' },
      { t: 'の' },
      { t: '関係', r: 'かんけい' },
      { t: 'は' },
      { t: '良', r: 'よ' },
      { t: 'いです。' },
    ]
  },
  '大事な': {
    jp: '大事なものを大切にしています。',
    en: 'I treasure the things that are important to me.',
    seg: [
      { t: '大事', r: 'だいじ' },
      { t: 'なものを' },
      { t: '大切', r: 'たいせつ' },
      { t: 'にしています。' },
    ]
  },
  '特別な': {
    jp: '今日は特別な日です。',
    en: 'Today is a special day.',
    seg: [
      { t: '今日', r: 'きょう' },
      { t: 'は' },
      { t: '特別', r: 'とくべつ' },
      { t: 'な' },
      { t: '日', r: 'ひ' },
      { t: 'です。' },
    ]
  },

  // Chapter 5 - Section 3: Problems
  '困る': {
    jp: 'お金がなくて困っています。',
    en: 'I\'m in trouble because I don\'t have money.',
    seg: [
      { t: 'お' },
      { t: '金', r: 'かね' },
      { t: 'がなくて' },
      { t: '困', r: 'こま' },
      { t: 'っています。' },
    ]
  },
  'わすれ物': {
    jp: '電車に忘れ物をしました。',
    en: 'I left something on the train.',
    seg: [
      { t: '電車', r: 'でんしゃ' },
      { t: 'に' },
      { t: '忘', r: 'わす' },
      { t: 'れ' },
      { t: '物', r: 'もの' },
      { t: 'をしました。' },
    ]
  },
  'なくなる': {
    jp: '財布がなくなりました。',
    en: 'My wallet disappeared.',
    seg: [
      { t: '財布', r: 'さいふ' },
      { t: 'がなくなりました。' },
    ]
  },
  'なくす': {
    jp: '鍵をなくしました。',
    en: 'I lost my key.',
    seg: [
      { t: '鍵', r: 'かぎ' },
      { t: 'をなくしました。' },
    ]
  },
  '落とす': {
    jp: 'スマホを落としました。',
    en: 'I dropped my smartphone.',
    seg: [
      { t: 'スマホを' },
      { t: '落', r: 'お' },
      { t: 'としました。' },
    ]
  },
  '落ちる': {
    jp: '机からコップが落ちました。',
    en: 'The cup fell off the desk.',
    seg: [
      { t: '机', r: 'つくえ' },
      { t: 'からコップが' },
      { t: '落', r: 'お' },
      { t: 'ちました。' },
    ]
  },
  'こわれる': {
    jp: '自転車がこわれました。',
    en: 'My bicycle broke.',
    seg: [
      { t: '自転車', r: 'じてんしゃ' },
      { t: 'がこわれました。' },
    ]
  },
  '真す': {
    jp: '窓ガラスが割れました。',
    en: 'The window glass broke.',
    seg: [
      { t: '窓', r: 'まど' },
      { t: 'ガラスが' },
      { t: '割', r: 'わ' },
      { t: 'れました。' },
    ]
  },
  'やぶれる': {
    jp: '袋がやぶれました。',
    en: 'The bag tore.',
    seg: [
      { t: '袋', r: 'ふくろ' },
      { t: 'がやぶれました。' },
    ]
  },
  'やぶる': {
    jp: '紙をやぶりました。',
    en: 'I tore the paper.',
    seg: [
      { t: '紙', r: 'かみ' },
      { t: 'をやぶりました。' },
    ]
  },
  '汚す': {
    jp: '服を汚しました。',
    en: 'I dirtied my clothes.',
    seg: [
      { t: '服', r: 'ふく' },
      { t: 'を' },
      { t: '汚', r: 'よご' },
      { t: 'しました。' },
    ]
  },
  '汚れる': {
    jp: '手が汚れました。',
    en: 'My hands got dirty.',
    seg: [
      { t: '手', r: 'て' },
      { t: 'が' },
      { t: '汚', r: 'よご' },
      { t: 'れました。' },
    ]
  },
  'わる': {
    jp: '皿を割ってしまいました。',
    en: 'I accidentally broke the plate.',
    seg: [
      { t: '皿', r: 'さら' },
      { t: 'を' },
      { t: '割', r: 'わ' },
      { t: 'ってしまいました。' },
    ]
  },
  'われる': {
    jp: 'コップが割れました。',
    en: 'The cup broke.',
    seg: [
      { t: 'コップが' },
      { t: '割', r: 'わ' },
      { t: 'れました。' },
    ]
  },
  '音': {
    jp: '大きな音がしました。',
    en: 'A loud sound occurred.',
    seg: [
      { t: '大', r: 'おお' },
      { t: 'きな' },
      { t: '音', r: 'おと' },
      { t: 'がしました。' },
    ]
  },
  'さわぐ': {
    jp: '夜中にさわがないでください。',
    en: 'Please don\'t make noise in the middle of the night.',
    seg: [
      { t: '夜中', r: 'よなか' },
      { t: 'にさわがないでください。' },
    ]
  },
  'うるさい': {
    jp: '外がうるさいです。',
    en: 'It\'s noisy outside.',
    seg: [
      { t: '外', r: 'そと' },
      { t: 'がうるさいです。' },
    ]
  },
  'どろぼう': {
    jp: '泥棒に入られました。',
    en: 'My house was broken into by a thief.',
    seg: [
      { t: '泥棒', r: 'どろぼう' },
      { t: 'に' },
      { t: '入', r: 'はい' },
      { t: 'られました。' },
    ]
  },
  'ぬすむ': {
    jp: 'かばんをぬすまれました。',
    en: 'My bag was stolen.',
    seg: [
      { t: 'かばんをぬすまれました。' },
    ]
  },
  'つかまえる': {
    jp: '警察が泥棒をつかまえました。',
    en: 'The police caught the thief.',
    seg: [
      { t: '警察', r: 'けいさつ' },
      { t: 'が' },
      { t: '泥棒', r: 'どろぼう' },
      { t: 'をつかまえました。' },
    ]
  },
  'いじめる': {
    jp: '友達をいじめてはいけません。',
    en: 'You must not bully your friends.',
    seg: [
      { t: '友達', r: 'ともだち' },
      { t: 'をいじめてはいけません。' },
    ]
  },
  'さわる': {
    jp: '作品にさわらないでください。',
    en: 'Please don\'t touch the artwork.',
    seg: [
      { t: '作品', r: 'さくひん' },
      { t: 'にさわらないでください。' },
    ]
  },
  'ふむ': {
    jp: '足をふまれました。',
    en: 'My foot was stepped on.',
    seg: [
      { t: '足', r: 'あし' },
      { t: 'をふまれました。' },
    ]
  },
  '理由': {
    jp: '遅刻の理由を教えてください。',
    en: 'Please tell me the reason for being late.',
    seg: [
      { t: '遅刻', r: 'ちこく' },
      { t: 'の' },
      { t: '理由', r: 'りゆう' },
      { t: 'を' },
      { t: '教', r: 'おし' },
      { t: 'えてください。' },
    ]
  },
  '原因': {
    jp: '事故の原因を調べています。',
    en: 'I\'m investigating the cause of the accident.',
    seg: [
      { t: '事故', r: 'じこ' },
      { t: 'の' },
      { t: '原因', r: 'げんいん' },
      { t: 'を' },
      { t: '調', r: 'しら' },
      { t: 'べています。' },
    ]
  },
  '110番': {
    jp: '泥棒を見たので110番しました。',
    en: 'I saw a thief, so I called 110.',
    seg: [
      { t: '泥棒', r: 'どろぼう' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'たので110番しました。' },
    ]
  },
  '非常口': {
    jp: '非常口はあちらです。',
    en: 'The emergency exit is that way.',
    seg: [
      { t: '非常口', r: 'ひじょうぐち' },
      { t: 'はあちらです。' },
    ]
  },
  'にげる': {
    jp: '火事が起きたのでにげました。',
    en: 'A fire broke out so I fled.',
    seg: [
      { t: '火事', r: 'かじ' },
      { t: 'が' },
      { t: '起', r: 'お' },
      { t: 'きたのでにげました。' },
    ]
  },
  'いやな': {
    jp: 'いやな気持ちになりました。',
    en: 'I had a bad feeling.',
    seg: [
      { t: 'いやな' },
      { t: '気持', r: 'きも' },
      { t: 'ちになりました。' },
    ]
  },
  'だめな': {
    jp: 'それはだめです。',
    en: 'That is no good.',
    seg: [
      { t: 'それはだめです。' },
    ]
  },
  'いけない': {
    jp: '嘘をついてはいけません。',
    en: 'You must not lie.',
    seg: [
      { t: '嘘', r: 'うそ' },
      { t: 'をついてはいけません。' },
    ]
  },

  // Chapter 5 - Section 4: Hobbies
  '山登り': {
    jp: '週末に山登りをしました。',
    en: 'I went mountain climbing on the weekend.',
    seg: [
      { t: '週末', r: 'しゅうまつ' },
      { t: 'に' },
      { t: '山登', r: 'やまのぼ' },
      { t: 'りをしました。' },
    ]
  },
  'キャンプ': {
    jp: '夏にキャンプをしました。',
    en: 'I went camping in summer.',
    seg: [
      { t: '夏', r: 'なつ' },
      { t: 'にキャンプをしました。' },
    ]
  },
  'まんが': {
    jp: '毎日まんがを読んでいます。',
    en: 'I read manga every day.',
    seg: [
      { t: '毎日', r: 'まいにち' },
      { t: 'まんがを' },
      { t: '読', r: 'よ' },
      { t: 'んでいます。' },
    ]
  },
  'アニメ': {
    jp: 'アニメを見るのが好きです。',
    en: 'I like watching anime.',
    seg: [
      { t: 'アニメを' },
      { t: '見', r: 'み' },
      { t: 'るのが' },
      { t: '好', r: 'す' },
      { t: 'きです。' },
    ]
  },
  'イラスト': {
    jp: 'イラストを描くのが趣味です。',
    en: 'Drawing illustrations is my hobby.',
    seg: [
      { t: 'イラストを' },
      { t: '描', r: 'か' },
      { t: 'くのが' },
      { t: '趣味', r: 'しゅみ' },
      { t: 'です。' },
    ]
  },
  'ゲーム': {
    jp: '友達とゲームをしました。',
    en: 'I played games with my friend.',
    seg: [
      { t: '友達', r: 'ともだち' },
      { t: 'とゲームをしました。' },
    ]
  },
  '茶道': {
    jp: '茶道を習っています。',
    en: 'I am learning the tea ceremony.',
    seg: [
      { t: '茶道', r: 'さどう' },
      { t: 'を' },
      { t: '習', r: 'なら' },
      { t: 'っています。' },
    ]
  },
  'かぶき': {
    jp: '歌舞伎を見に行きました。',
    en: 'I went to see kabuki.',
    seg: [
      { t: '歌舞伎', r: 'かぶき' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  'おどり': {
    jp: '日本のおどりを習っています。',
    en: 'I am learning Japanese dance.',
    seg: [
      { t: '日本', r: 'にほん' },
      { t: 'のおどりを' },
      { t: '習', r: 'なら' },
      { t: 'っています。' },
    ]
  },
  'ドラマ': {
    jp: '昨日ドラマを見ました。',
    en: 'I watched a drama yesterday.',
    seg: [
      { t: '昨日', r: 'きのう' },
      { t: 'ドラマを' },
      { t: '見', r: 'み' },
      { t: 'ました。' },
    ]
  },
  '俳優': {
    jp: 'お気に入りの俳優がいます。',
    en: 'I have a favorite actor.',
    seg: [
      { t: 'お' },
      { t: '気', r: 'き' },
      { t: 'に' },
      { t: '入', r: 'い' },
      { t: 'りの' },
      { t: '俳優', r: 'はいゆう' },
      { t: 'がいます。' },
    ]
  },
  '曲': {
    jp: '好きな曲をダウンロードしました。',
    en: 'I downloaded my favorite song.',
    seg: [
      { t: '好', r: 'す' },
      { t: 'きな' },
      { t: '曲', r: 'きょく' },
      { t: 'をダウンロードしました。' },
    ]
  },
  'クラシック': {
    jp: 'クラシック音楽が好きです。',
    en: 'I like classical music.',
    seg: [
      { t: 'クラシック' },
      { t: '音楽', r: 'おんがく' },
      { t: 'が' },
      { t: '好', r: 'す' },
      { t: 'きです。' },
    ]
  },
  'コンサート': {
    jp: 'コンサートに行きました。',
    en: 'I went to a concert.',
    seg: [
      { t: 'コンサートに' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '小説': {
    jp: '日本語の小説を読んでいます。',
    en: 'I am reading a Japanese novel.',
    seg: [
      { t: '日本語', r: 'にほんご' },
      { t: 'の' },
      { t: '小説', r: 'しょうせつ' },
      { t: 'を' },
      { t: '読', r: 'よ' },
      { t: 'んでいます。' },
    ]
  },
  '料理教室': {
    jp: '料理教室に通っています。',
    en: 'I attend a cooking class.',
    seg: [
      { t: '料理教室', r: 'りょうりきょうしつ' },
      { t: 'に' },
      { t: '通', r: 'かよ' },
      { t: 'っています。' },
    ]
  },
  'コンテスト': {
    jp: '写真コンテストに参加しました。',
    en: 'I participated in a photo contest.',
    seg: [
      { t: '写真', r: 'しゃしん' },
      { t: 'コンテストに' },
      { t: '参加', r: 'さんか' },
      { t: 'しました。' },
    ]
  },
  '楽しむ': {
    jp: '音楽を楽しんでいます。',
    en: 'I am enjoying music.',
    seg: [
      { t: '音楽', r: 'おんがく' },
      { t: 'を' },
      { t: '楽', r: 'たの' },
      { t: 'しんでいます。' },
    ]
  },
  '楽しみ＜な＞': {
    jp: '旅行が楽しみです。',
    en: 'I am looking forward to the trip.',
    seg: [
      { t: '旅行', r: 'りょこう' },
      { t: 'が' },
      { t: '楽', r: 'たの' },
      { t: 'しみです。' },
    ]
  },
  'きょうみ': {
    jp: '歴史に興味があります。',
    en: 'I have an interest in history.',
    seg: [
      { t: '歴史', r: 'れきし' },
      { t: 'に' },
      { t: '興味', r: 'きょうみ' },
      { t: 'があります。' },
    ]
  },
  '録画': {
    jp: 'ドラマを録画しました。',
    en: 'I recorded the drama.',
    seg: [
      { t: 'ドラマを' },
      { t: '録画', r: 'ろくが' },
      { t: 'しました。' },
    ]
  },
  '集める': {
    jp: '切手を集めています。',
    en: 'I collect stamps.',
    seg: [
      { t: '切手', r: 'きって' },
      { t: 'を' },
      { t: '集', r: 'あつ' },
      { t: 'めています。' },
    ]
  },

  // Chapter 5 - Section 5: Sports
  '運動': {
    jp: '毎朝運動しています。',
    en: 'I exercise every morning.',
    seg: [
      { t: '毎朝', r: 'まいあさ' },
      { t: '運動', r: 'うんどう' },
      { t: 'しています。' },
    ]
  },
  '走る': {
    jp: '公園を走りました。',
    en: 'I ran in the park.',
    seg: [
      { t: '公園', r: 'こうえん' },
      { t: 'を' },
      { t: '走', r: 'はし' },
      { t: 'りました。' },
    ]
  },
  '歩く': {
    jp: '毎日一万歩歩いています。',
    en: 'I walk 10,000 steps every day.',
    seg: [
      { t: '毎日', r: 'まいにち' },
      { t: '一万歩', r: 'いちまんほ' },
      { t: '歩', r: 'ある' },
      { t: 'いています。' },
    ]
  },
  'ジョギング': {
    jp: '朝ジョギングをしています。',
    en: 'I go jogging in the morning.',
    seg: [
      { t: '朝', r: 'あさ' },
      { t: 'ジョギングをしています。' },
    ]
  },
  '伸ばす': {
    jp: '背中を伸ばしてください。',
    en: 'Please straighten your back.',
    seg: [
      { t: '背中', r: 'せなか' },
      { t: 'を' },
      { t: '伸', r: 'の' },
      { t: 'ばしてください。' },
    ]
  },
  '試合': {
    jp: 'サッカーの試合を見ました。',
    en: 'I watched a soccer match.',
    seg: [
      { t: 'サッカーの' },
      { t: '試合', r: 'しあい' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'ました。' },
    ]
  },
  '大会': {
    jp: 'マラソン大会に出ました。',
    en: 'I participated in a marathon competition.',
    seg: [
      { t: 'マラソン' },
      { t: '大会', r: 'たいかい' },
      { t: 'に' },
      { t: '出', r: 'で' },
      { t: 'ました。' },
    ]
  },
  'ワールドカップ': {
    jp: 'ワールドカップを応援しました。',
    en: 'I cheered for the World Cup.',
    seg: [
      { t: 'ワールドカップを' },
      { t: '応援', r: 'おうえん' },
      { t: 'しました。' },
    ]
  },
  '行う': {
    jp: '式典を行いました。',
    en: 'We held a ceremony.',
    seg: [
      { t: '式典', r: 'しきてん' },
      { t: 'を' },
      { t: '行', r: 'おこな' },
      { t: 'いました。' },
    ]
  },
  '中止': {
    jp: '試合が雨で中止になりました。',
    en: 'The game was cancelled due to rain.',
    seg: [
      { t: '試合', r: 'しあい' },
      { t: 'が' },
      { t: '雨', r: 'あめ' },
      { t: 'で' },
      { t: '中止', r: 'ちゅうし' },
      { t: 'になりました。' },
    ]
  },
  '選手': {
    jp: '有名な選手のサインをもらいました。',
    en: 'I got an autograph from a famous player.',
    seg: [
      { t: '有名', r: 'ゆうめい' },
      { t: 'な' },
      { t: '選手', r: 'せんしゅ' },
      { t: 'のサインをもらいました。' },
    ]
  },
  'チーム': {
    jp: '日本チームが勝ちました。',
    en: 'The Japanese team won.',
    seg: [
      { t: '日本', r: 'にほん' },
      { t: 'チームが' },
      { t: '勝', r: 'か' },
      { t: 'ちました。' },
    ]
  },
  '勝つ': {
    jp: '試合に勝ちました。',
    en: 'I won the match.',
    seg: [
      { t: '試合', r: 'しあい' },
      { t: 'に' },
      { t: '勝', r: 'か' },
      { t: 'ちました。' },
    ]
  },
  '優勝': {
    jp: '大会で優勝しました。',
    en: 'I won the championship.',
    seg: [
      { t: '大会', r: 'たいかい' },
      { t: 'で' },
      { t: '優勝', r: 'ゆうしょう' },
      { t: 'しました。' },
    ]
  },
  '負ける': {
    jp: '試合で負けてしまいました。',
    en: 'I lost the match.',
    seg: [
      { t: '試合', r: 'しあい' },
      { t: 'で' },
      { t: '負', r: 'ま' },
      { t: 'けてしまいました。' },
    ]
  },
  '応援': {
    jp: '選手を応援しました。',
    en: 'I cheered for the players.',
    seg: [
      { t: '選手', r: 'せんしゅ' },
      { t: 'を' },
      { t: '応援', r: 'おうえん' },
      { t: 'しました。' },
    ]
  },
  'コース': {
    jp: 'マラソンのコースを走りました。',
    en: 'I ran the marathon course.',
    seg: [
      { t: 'マラソンのコースを' },
      { t: '走', r: 'はし' },
      { t: 'りました。' },
    ]
  },
  '会場': {
    jp: '会場に早めに到着しました。',
    en: 'I arrived at the venue early.',
    seg: [
      { t: '会場', r: 'かいじょう' },
      { t: 'に' },
      { t: '早', r: 'はや' },
      { t: 'めに' },
      { t: '到着', r: 'とうちゃく' },
      { t: 'しました。' },
    ]
  },
  'スタート': {
    jp: '試合がスタートしました。',
    en: 'The game started.',
    seg: [
      { t: '試合', r: 'しあい' },
      { t: 'がスタートしました。' },
    ]
  },
  '失敗': {
    jp: '失敗してしまいました。',
    en: 'I failed.',
    seg: [
      { t: '失敗', r: 'しっぱい' },
      { t: 'してしまいました。' },
    ]
  },
  '柔道': {
    jp: '柔道を習っています。',
    en: 'I am learning judo.',
    seg: [
      { t: '柔道', r: 'じゅうどう' },
      { t: 'を' },
      { t: '習', r: 'なら' },
      { t: 'っています。' },
    ]
  },
  '水泳': {
    jp: '水泳が得意です。',
    en: 'I am good at swimming.',
    seg: [
      { t: '水泳', r: 'すいえい' },
      { t: 'が' },
      { t: '得意', r: 'とくい' },
      { t: 'です。' },
    ]
  },
  '野球': {
    jp: '野球の試合を観に行きました。',
    en: 'I went to watch a baseball game.',
    seg: [
      { t: '野球', r: 'やきゅう' },
      { t: 'の' },
      { t: '試合', r: 'しあい' },
      { t: 'を' },
      { t: '観', r: 'み' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '投げる': {
    jp: 'ボールを投げました。',
    en: 'I threw the ball.',
    seg: [
      { t: 'ボールを' },
      { t: '投', r: 'な' },
      { t: 'げました。' },
    ]
  },
  'スポーツクラブ': {
    jp: 'スポーツクラブに入りました。',
    en: 'I joined a sports club.',
    seg: [
      { t: 'スポーツクラブに' },
      { t: '入', r: 'はい' },
      { t: 'りました。' },
    ]
  },

  // Chapter 6 - Section 1: Body/Health
  '髪': {
    jp: '髪を切りました。',
    en: 'I got my hair cut.',
    seg: [
      { t: '髪', r: 'かみ' },
      { t: 'を' },
      { t: '切', r: 'き' },
      { t: 'りました。' },
    ]
  },
  'おでこ': {
    jp: 'おでこが熱いです。',
    en: 'My forehead is hot.',
    seg: [
      { t: 'おでこが' },
      { t: '熱', r: 'あつ' },
      { t: 'いです。' },
    ]
  },
  'あだ': {
    jp: '肌がきれいです。',
    en: 'My skin is beautiful.',
    seg: [
      { t: '肌', r: 'はだ' },
      { t: 'がきれいです。' },
    ]
  },
  'ひげ': {
    jp: '毎朝ひげをそります。',
    en: 'I shave every morning.',
    seg: [
      { t: '毎朝', r: 'まいあさ' },
      { t: 'ひげをそります。' },
    ]
  },
  'くちびる': {
    jp: 'くちびるが乾いています。',
    en: 'My lips are dry.',
    seg: [
      { t: 'くちびるが' },
      { t: '乾', r: 'かわ' },
      { t: 'いています。' },
    ]
  },
  '首': {
    jp: '首が痛いです。',
    en: 'My neck hurts.',
    seg: [
      { t: '首', r: 'くび' },
      { t: 'が' },
      { t: '痛', r: 'いた' },
      { t: 'いです。' },
    ]
  },
  'のど': {
    jp: 'のどが痛いです。',
    en: 'My throat hurts.',
    seg: [
      { t: 'のどが' },
      { t: '痛', r: 'いた' },
      { t: 'いです。' },
    ]
  },
  '肩': {
    jp: '肩が凝っています。',
    en: 'My shoulders are stiff.',
    seg: [
      { t: '肩', r: 'かた' },
      { t: 'が' },
      { t: '凝', r: 'こ' },
      { t: 'っています。' },
    ]
  },
  'うで': {
    jp: 'うでを伸ばしてください。',
    en: 'Please extend your arms.',
    seg: [
      { t: 'うでを' },
      { t: '伸', r: 'の' },
      { t: 'ばしてください。' },
    ]
  },
  'ひじ': {
    jp: 'ひじをぶつけました。',
    en: 'I bumped my elbow.',
    seg: [
      { t: 'ひじをぶつけました。' },
    ]
  },
  '背中': {
    jp: '背中が痛いです。',
    en: 'My back hurts.',
    seg: [
      { t: '背中', r: 'せなか' },
      { t: 'が' },
      { t: '痛', r: 'いた' },
      { t: 'いです。' },
    ]
  },
  '胃': {
    jp: '胃が痛いです。',
    en: 'My stomach hurts.',
    seg: [
      { t: '胃', r: 'い' },
      { t: 'が' },
      { t: '痛', r: 'いた' },
      { t: 'いです。' },
    ]
  },
  'こし': {
    jp: '腰を痛めました。',
    en: 'I hurt my lower back.',
    seg: [
      { t: '腰', r: 'こし' },
      { t: 'を' },
      { t: '痛', r: 'いた' },
      { t: 'めました。' },
    ]
  },
  'ひざ': {
    jp: 'ひざが痛くて走れません。',
    en: 'My knee hurts so I can\'t run.',
    seg: [
      { t: 'ひざが' },
      { t: '痛', r: 'いた' },
      { t: 'くて' },
      { t: '走', r: 'はし' },
      { t: 'れません。' },
    ]
  },
  'しり': {
    jp: 'いすに座るとしりが痛い。',
    en: 'My bottom hurts when I sit on the chair.',
    seg: [
      { t: 'いすに' },
      { t: '座', r: 'すわ' },
      { t: 'るとしりが' },
      { t: '痛', r: 'いた' },
      { t: 'い。' },
    ]
  },
  '指': {
    jp: '指を切りました。',
    en: 'I cut my finger.',
    seg: [
      { t: '指', r: 'ゆび' },
      { t: 'を' },
      { t: '切', r: 'き' },
      { t: 'りました。' },
    ]
  },
  'つめ': {
    jp: 'つめを切りました。',
    en: 'I cut my nails.',
    seg: [
      { t: 'つめを' },
      { t: '切', r: 'き' },
      { t: 'りました。' },
    ]
  },
  '骨': {
    jp: '転んで骨を折りました。',
    en: 'I fell and broke a bone.',
    seg: [
      { t: '転', r: 'ころ' },
      { t: 'んで' },
      { t: '骨', r: 'ほね' },
      { t: 'を' },
      { t: '折', r: 'お' },
      { t: 'りました。' },
    ]
  },
  '血': {
    jp: '血が出ています。',
    en: 'Blood is coming out.',
    seg: [
      { t: '血', r: 'ち' },
      { t: 'が' },
      { t: '出', r: 'で' },
      { t: 'ています。' },
    ]
  },
  '力': {
    jp: '力が入りません。',
    en: 'I have no strength.',
    seg: [
      { t: '力', r: 'ちから' },
      { t: 'が' },
      { t: '入', r: 'はい' },
      { t: 'りません。' },
    ]
  },
  '身長': {
    jp: '身長は百七十センチです。',
    en: 'My height is 170 centimeters.',
    seg: [
      { t: '身長', r: 'しんちょう' },
      { t: 'は' },
      { t: '百七十', r: 'ひゃくななじゅう' },
      { t: 'センチです。' },
    ]
  },
  '体重': {
    jp: '体重が少し増えました。',
    en: 'My weight increased a little.',
    seg: [
      { t: '体重', r: 'たいじゅう' },
      { t: 'が' },
      { t: '少', r: 'すこ' },
      { t: 'し' },
      { t: '増', r: 'ふ' },
      { t: 'えました。' },
    ]
  },
  '女性': {
    jp: '女性に道を聞きました。',
    en: 'I asked a woman for directions.',
    seg: [
      { t: '女性', r: 'じょせい' },
      { t: 'に' },
      { t: '道', r: 'みち' },
      { t: 'を' },
      { t: '聞', r: 'き' },
      { t: 'きました。' },
    ]
  },
  '男性': {
    jp: '男性用のトイレはどこですか。',
    en: 'Where is the men\'s restroom?',
    seg: [
      { t: '男性用', r: 'だんせいよう' },
      { t: 'のトイレはどこですか。' },
    ]
  },
  'けんこう＜な＞': {
    jp: '健康のために運動しています。',
    en: 'I exercise for my health.',
    seg: [
      { t: '健康', r: 'けんこう' },
      { t: 'のために' },
      { t: '運動', r: 'うんどう' },
      { t: 'しています。' },
    ]
  },
  'じょうぶな': {
    jp: 'この材料はじょうぶです。',
    en: 'This material is sturdy.',
    seg: [
      { t: 'この' },
      { t: '材料', r: 'ざいりょう' },
      { t: 'はじょうぶです。' },
    ]
  },
  'ビタミン': {
    jp: 'ビタミンを毎日飲んでいます。',
    en: 'I take vitamins every day.',
    seg: [
      { t: 'ビタミンを' },
      { t: '毎日', r: 'まいにち' },
      { t: '飲', r: 'の' },
      { t: 'んでいます。' },
    ]
  },
  '太る': {
    jp: '最近少し太りました。',
    en: 'I gained a little weight recently.',
    seg: [
      { t: '最近', r: 'さいきん' },
      { t: '少', r: 'すこ' },
      { t: 'し' },
      { t: '太', r: 'ふと' },
      { t: 'りました。' },
    ]
  },
  'やせる': {
    jp: 'ダイエットでやせました。',
    en: 'I lost weight by dieting.',
    seg: [
      { t: 'ダイエットでやせました。' },
    ]
  },
  'ダイエット': {
    jp: 'ダイエットをしています。',
    en: 'I am dieting.',
    seg: [
      { t: 'ダイエットをしています。' },
    ]
  },
  'やめる': {
    jp: 'タバコをやめました。',
    en: 'I quit smoking.',
    seg: [
      { t: 'タバコをやめました。' },
    ]
  },
  '気をつける': {
    jp: '健康に気をつけています。',
    en: 'I take care of my health.',
    seg: [
      { t: '健康', r: 'けんこう' },
      { t: 'に' },
      { t: '気', r: 'き' },
      { t: 'をつけています。' },
    ]
  },

  // Chapter 6 - Section 2: Illness/Injury
  'インフルエンザ': {
    jp: 'インフルエンザにかかりました。',
    en: 'I caught the flu.',
    seg: [
      { t: 'インフルエンザにかかりました。' },
    ]
  },
  'かぜをひく': {
    jp: '風邪をひいてしまいました。',
    en: 'I caught a cold.',
    seg: [
      { t: '風邪', r: 'かぜ' },
      { t: 'をひいてしまいました。' },
    ]
  },
  '熱': {
    jp: '熱が三十八度あります。',
    en: 'I have a fever of 38 degrees.',
    seg: [
      { t: '熱', r: 'ねつ' },
      { t: 'が' },
      { t: '三十八度', r: 'さんじゅうはちど' },
      { t: 'あります。' },
    ]
  },
  '体温計': {
    jp: '体温計で熱を測りました。',
    en: 'I measured my temperature with a thermometer.',
    seg: [
      { t: '体温計', r: 'たいおんけい' },
      { t: 'で' },
      { t: '熱', r: 'ねつ' },
      { t: 'を' },
      { t: '測', r: 'はか' },
      { t: 'りました。' },
    ]
  },
  'やけど': {
    jp: '料理中にやけどしました。',
    en: 'I got a burn while cooking.',
    seg: [
      { t: '料理中', r: 'りょうりちゅう' },
      { t: 'にやけどしました。' },
    ]
  },
  'けが': {
    jp: '転んでけがをしました。',
    en: 'I fell and got injured.',
    seg: [
      { t: '転', r: 'ころ' },
      { t: 'んでけがをしました。' },
    ]
  },
  'きず': {
    jp: '手にきずができました。',
    en: 'I got a wound on my hand.',
    seg: [
      { t: '手', r: 'て' },
      { t: 'にきずができました。' },
    ]
  },
  '調子': {
    jp: '体の調子が悪いです。',
    en: 'I\'m not feeling well.',
    seg: [
      { t: '体', r: 'からだ' },
      { t: 'の' },
      { t: '調子', r: 'ちょうし' },
      { t: 'が' },
      { t: '悪', r: 'わる' },
      { t: 'いです。' },
    ]
  },
  'おかしい': {
    jp: '機械の音がおかしいです。',
    en: 'The machine is making a strange sound.',
    seg: [
      { t: '機械', r: 'きかい' },
      { t: 'の' },
      { t: '音', r: 'おと' },
      { t: 'がおかしいです。' },
    ]
  },
  '具合': {
    jp: '具合が悪くて早退しました。',
    en: 'I felt ill and left early.',
    seg: [
      { t: '具合', r: 'ぐあい' },
      { t: 'が' },
      { t: '悪', r: 'わる' },
      { t: 'くて' },
      { t: '早退', r: 'そうたい' },
      { t: 'しました。' },
    ]
  },
  '気持ちが悪い': {
    jp: '気持ちが悪いので休みます。',
    en: 'I feel sick, so I will rest.',
    seg: [
      { t: '気持', r: 'きも' },
      { t: 'ちが' },
      { t: '悪', r: 'わる' },
      { t: 'いので' },
      { t: '休', r: 'やす' },
      { t: 'みます。' },
    ]
  },
  '倒れる': {
    jp: '熱で倒れました。',
    en: 'I collapsed from a fever.',
    seg: [
      { t: '熱', r: 'ねつ' },
      { t: 'で' },
      { t: '倒', r: 'たお' },
      { t: 'れました。' },
    ]
  },
  '診る': {
    jp: '医者に診てもらいました。',
    en: 'I had a doctor examine me.',
    seg: [
      { t: '医者', r: 'いしゃ' },
      { t: 'に' },
      { t: '診', r: 'み' },
      { t: 'てもらいました。' },
    ]
  },
  'なる': {
    jp: '医者になりたいです。',
    en: 'I want to become a doctor.',
    seg: [
      { t: '医者', r: 'いしゃ' },
      { t: 'になりたいです。' },
    ]
  },
  'ぬる': {
    jp: '傷口に薬をぬりました。',
    en: 'I applied medicine to the wound.',
    seg: [
      { t: '傷口', r: 'きずぐち' },
      { t: 'に' },
      { t: '薬', r: 'くすり' },
      { t: 'をぬりました。' },
    ]
  },
  '治す': {
    jp: '風邪を早く治したいです。',
    en: 'I want to cure my cold quickly.',
    seg: [
      { t: '風邪', r: 'かぜ' },
      { t: 'を' },
      { t: '早', r: 'はや' },
      { t: 'く' },
      { t: '治', r: 'なお' },
      { t: 'したいです。' },
    ]
  },
  '治る': {
    jp: 'けがが治りました。',
    en: 'My injury healed.',
    seg: [
      { t: 'けがが' },
      { t: '治', r: 'なお' },
      { t: 'りました。' },
    ]
  },
  '入院': {
    jp: '一週間入院しました。',
    en: 'I was hospitalized for a week.',
    seg: [
      { t: '一週間', r: 'いっしゅうかん' },
      { t: '入院', r: 'にゅういん' },
      { t: 'しました。' },
    ]
  },
  '退院': {
    jp: '今日退院しました。',
    en: 'I was discharged from the hospital today.',
    seg: [
      { t: '今日', r: 'きょう' },
      { t: '退院', r: 'たいいん' },
      { t: 'しました。' },
    ]
  },
  '見まい': {
    jp: '入院中の友達を見まいに行きました。',
    en: 'I went to visit my hospitalized friend.',
    seg: [
      { t: '入院中', r: 'にゅういんちゅう' },
      { t: 'の' },
      { t: '友達', r: 'ともだち' },
      { t: 'を見まいに' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '生きる': {
    jp: '毎日楽しく生きています。',
    en: 'I live happily every day.',
    seg: [
      { t: '毎日', r: 'まいにち' },
      { t: '楽', r: 'たの' },
      { t: 'しく' },
      { t: '生', r: 'い' },
      { t: 'きています。' },
    ]
  },
  '亡くなる': {
    jp: '祖父が亡くなりました。',
    en: 'My grandfather passed away.',
    seg: [
      { t: '祖父', r: 'そふ' },
      { t: 'が' },
      { t: '亡', r: 'な' },
      { t: 'くなりました。' },
    ]
  },
  '救急車': {
    jp: '救急車を呼びました。',
    en: 'I called an ambulance.',
    seg: [
      { t: '救急車', r: 'きゅうきゅうしゃ' },
      { t: 'を' },
      { t: '呼', r: 'よ' },
      { t: 'びました。' },
    ]
  },
  '歯医者': {
    jp: '歯医者に行きました。',
    en: 'I went to the dentist.',
    seg: [
      { t: '歯医者', r: 'はいしゃ' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  '看護師': {
    jp: '看護師さんに注射をしてもらいました。',
    en: 'The nurse gave me an injection.',
    seg: [
      { t: '看護師', r: 'かんごし' },
      { t: 'さんに' },
      { t: '注射', r: 'ちゅうしゃ' },
      { t: 'をしてもらいました。' },
    ]
  },

  // Chapter 6 - Section 3: Fashion
  'スーツ': {
    jp: '面接のためにスーツを着ました。',
    en: 'I wore a suit for the interview.',
    seg: [
      { t: '面接', r: 'めんせつ' },
      { t: 'のためにスーツを' },
      { t: '着', r: 'き' },
      { t: 'ました。' },
    ]
  },
  '着物': {
    jp: '成人式に着物を着ました。',
    en: 'I wore a kimono at the coming-of-age ceremony.',
    seg: [
      { t: '成人式', r: 'せいじんしき' },
      { t: 'に' },
      { t: '着物', r: 'きもの' },
      { t: 'を' },
      { t: '着', r: 'き' },
      { t: 'ました。' },
    ]
  },
  'くつ下': {
    jp: '靴下を新しく買いました。',
    en: 'I bought new socks.',
    seg: [
      { t: '靴下', r: 'くつした' },
      { t: 'を' },
      { t: '新', r: 'あたら' },
      { t: 'しく' },
      { t: '買', r: 'か' },
      { t: 'いました。' },
    ]
  },
  '下着': {
    jp: '下着を洗いました。',
    en: 'I washed the underwear.',
    seg: [
      { t: '下着', r: 'したぎ' },
      { t: 'を' },
      { t: '洗', r: 'あら' },
      { t: 'いました。' },
    ]
  },
  '手ぶくろ': {
    jp: '冬は手袋をします。',
    en: 'I wear gloves in winter.',
    seg: [
      { t: '冬', r: 'ふゆ' },
      { t: 'は' },
      { t: '手袋', r: 'てぶくろ' },
      { t: 'をします。' },
    ]
  },
  '指輪': {
    jp: '彼女に指輪をあげました。',
    en: 'I gave her a ring.',
    seg: [
      { t: '彼女', r: 'かのじょ' },
      { t: 'に' },
      { t: '指輪', r: 'ゆびわ' },
      { t: 'をあげました。' },
    ]
  },
  'サンダル': {
    jp: '夏はサンダルをはきます。',
    en: 'I wear sandals in summer.',
    seg: [
      { t: '夏', r: 'なつ' },
      { t: 'はサンダルをはきます。' },
    ]
  },
  'リュック': {
    jp: 'リュックに荷物を入れました。',
    en: 'I put my things in the backpack.',
    seg: [
      { t: 'リュックに' },
      { t: '荷物', r: 'にもつ' },
      { t: 'を' },
      { t: '入', r: 'い' },
      { t: 'れました。' },
    ]
  },
  'アクセサリー': {
    jp: 'アクセサリーをつけました。',
    en: 'I put on accessories.',
    seg: [
      { t: 'アクセサリーをつけました。' },
    ]
  },
  'ポケット': {
    jp: 'ポケットに鍵を入れました。',
    en: 'I put the key in my pocket.',
    seg: [
      { t: 'ポケットに' },
      { t: '鍵', r: 'かぎ' },
      { t: 'を' },
      { t: '入', r: 'い' },
      { t: 'れました。' },
    ]
  },
  'ひも': {
    jp: 'くつのひもを結びました。',
    en: 'I tied my shoelaces.',
    seg: [
      { t: 'くつのひもを' },
      { t: '結', r: 'むす' },
      { t: 'びました。' },
    ]
  },
  '髪型': {
    jp: '髪型を変えました。',
    en: 'I changed my hairstyle.',
    seg: [
      { t: '髪型', r: 'かみがた' },
      { t: 'を' },
      { t: '変', r: 'か' },
      { t: 'えました。' },
    ]
  },
  '美容院': {
    jp: '美容院に行きました。',
    en: 'I went to the beauty salon.',
    seg: [
      { t: '美容院', r: 'びよういん' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'きました。' },
    ]
  },
  'カット': {
    jp: '髪をカットしてもらいました。',
    en: 'I had my hair cut.',
    seg: [
      { t: '髪', r: 'かみ' },
      { t: 'をカットしてもらいました。' },
    ]
  },
  'かがみ': {
    jp: 'かがみで服を確認しました。',
    en: 'I checked my clothes in the mirror.',
    seg: [
      { t: 'かがみで' },
      { t: '服', r: 'ふく' },
      { t: 'を' },
      { t: '確認', r: 'かくにん' },
      { t: 'しました。' },
    ]
  },
  'かっこいい': {
    jp: '彼のスーツはかっこいいです。',
    en: 'His suit looks cool.',
    seg: [
      { t: '彼', r: 'かれ' },
      { t: 'のスーツはかっこいいです。' },
    ]
  },
  'かわいい': {
    jp: 'この服はかわいいです。',
    en: 'These clothes are cute.',
    seg: [
      { t: 'この' },
      { t: '服', r: 'ふく' },
      { t: 'はかわいいです。' },
    ]
  },
  'ちょうどいい': {
    jp: 'このサイズはちょうどいいです。',
    en: 'This size is just right.',
    seg: [
      { t: 'このサイズはちょうどいいです。' },
    ]
  },

  // Chapter 6 - Section 4: State 1
  'ようす': {
    jp: '子どものようすが心配です。',
    en: 'I\'m worried about the child\'s condition.',
    seg: [
      { t: '子', r: 'こ' },
      { t: 'どものようすが' },
      { t: '心配', r: 'しんぱい' },
      { t: 'です。' },
    ]
  },
  '形': {
    jp: 'この形が気に入っています。',
    en: 'I like this shape.',
    seg: [
      { t: 'この' },
      { t: '形', r: 'かたち' },
      { t: 'が' },
      { t: '気', r: 'き' },
      { t: 'に' },
      { t: '入', r: 'い' },
      { t: 'っています。' },
    ]
  },
  '倍': {
    jp: '去年の倍の量があります。',
    en: 'There is twice as much as last year.',
    seg: [
      { t: '去年', r: 'きょねん' },
      { t: 'の' },
      { t: '倍', r: 'ばい' },
      { t: 'の' },
      { t: '量', r: 'りょう' },
      { t: 'があります。' },
    ]
  },
  '以上': {
    jp: '三十分以上かかります。',
    en: 'It takes 30 minutes or more.',
    seg: [
      { t: '三十分', r: 'さんじゅっぷん' },
      { t: '以上', r: 'いじょう' },
      { t: 'かかります。' },
    ]
  },
  '以下': {
    jp: '二十歳以下は入れません。',
    en: 'Those under 20 cannot enter.',
    seg: [
      { t: '二十歳', r: 'はたち' },
      { t: '以下', r: 'いか' },
      { t: 'は' },
      { t: '入', r: 'はい' },
      { t: 'れません。' },
    ]
  },
  '以内': {
    jp: '一キロ以内に店があります。',
    en: 'There is a shop within 1 kilometer.',
    seg: [
      { t: '一', r: 'いち' },
      { t: 'キロ' },
      { t: '以内', r: 'いない' },
      { t: 'に' },
      { t: '店', r: 'みせ' },
      { t: 'があります。' },
    ]
  },
  '以外': {
    jp: '野菜以外は食べません。',
    en: 'I don\'t eat anything other than vegetables.',
    seg: [
      { t: '野菜', r: 'やさい' },
      { t: '以外', r: 'いがい' },
      { t: 'は' },
      { t: '食', r: 'た' },
      { t: 'べません。' },
    ]
  },
  '両方': {
    jp: '両方の意見を聞きました。',
    en: 'I heard both opinions.',
    seg: [
      { t: '両方', r: 'りょうほう' },
      { t: 'の' },
      { t: '意見', r: 'いけん' },
      { t: 'を' },
      { t: '聞', r: 'き' },
      { t: 'きました。' },
    ]
  },
  'ひま＜な＞': {
    jp: '今日はひまです。',
    en: 'I\'m free today.',
    seg: [
      { t: '今日', r: 'きょう' },
      { t: 'はひまです。' },
    ]
  },
  'ふつう＜な＞': {
    jp: 'ふつうの生活をしています。',
    en: 'I lead an ordinary life.',
    seg: [
      { t: 'ふつうの' },
      { t: '生活', r: 'せいかつ' },
      { t: 'をしています。' },
    ]
  },
  '自由＜な＞': {
    jp: '放課後は自由な時間があります。',
    en: 'I have free time after school.',
    seg: [
      { t: '放課後', r: 'ほうかご' },
      { t: 'は' },
      { t: '自由', r: 'じゆう' },
      { t: 'な' },
      { t: '時間', r: 'じかん' },
      { t: 'があります。' },
    ]
  },
  'ていねいな': {
    jp: '丁寧に書いてください。',
    en: 'Please write neatly.',
    seg: [
      { t: '丁寧', r: 'ていねい' },
      { t: 'に' },
      { t: '書', r: 'か' },
      { t: 'いてください。' },
    ]
  },
  '大きな': {
    jp: '大きな荷物を持っています。',
    en: 'I\'m carrying a large piece of luggage.',
    seg: [
      { t: '大', r: 'おお' },
      { t: 'きな' },
      { t: '荷物', r: 'にもつ' },
      { t: 'を' },
      { t: '持', r: 'も' },
      { t: 'っています。' },
    ]
  },
  '小さな': {
    jp: '小さな子どもがいます。',
    en: 'There is a small child.',
    seg: [
      { t: '小', r: 'ちい' },
      { t: 'さな' },
      { t: '子', r: 'こ' },
      { t: 'どもがいます。' },
    ]
  },
  'ヘんな': {
    jp: '変な音がしています。',
    en: 'There\'s a strange sound.',
    seg: [
      { t: '変', r: 'へん' },
      { t: 'な' },
      { t: '音', r: 'おと' },
      { t: 'がしています。' },
    ]
  },
  'じゅうぶんな': {
    jp: '十分な休憩を取りました。',
    en: 'I took enough rest.',
    seg: [
      { t: '十分', r: 'じゅうぶん' },
      { t: 'な' },
      { t: '休憩', r: 'きゅうけい' },
      { t: 'を' },
      { t: '取', r: 'と' },
      { t: 'りました。' },
    ]
  },

  // Chapter 6 - Section 5: State 2
  '美し': {
    jp: '夕日が美しいです。',
    en: 'The sunset is beautiful.',
    seg: [
      { t: '夕日', r: 'ゆうひ' },
      { t: 'が' },
      { t: '美', r: 'うつく' },
      { t: 'しいです。' },
    ]
  },
  'きたない': {
    jp: '部屋がきたないです。',
    en: 'The room is dirty.',
    seg: [
      { t: '部屋', r: 'へや' },
      { t: 'がきたないです。' },
    ]
  },
  'うまい': {
    jp: 'この料理はうまいです。',
    en: 'This dish is delicious.',
    seg: [
      { t: 'この' },
      { t: '料理', r: 'りょうり' },
      { t: 'はうまいです。' },
    ]
  },
  'やわらかい': {
    jp: 'このパンはやわらかいです。',
    en: 'This bread is soft.',
    seg: [
      { t: 'このパンはやわらかいです。' },
    ]
  },
  'かたい': {
    jp: 'この肉はかたいです。',
    en: 'This meat is tough.',
    seg: [
      { t: 'この' },
      { t: '肉', r: 'にく' },
      { t: 'はかたいです。' },
    ]
  },
  'くわしい': {
    jp: '彼はこの地域に詳しいです。',
    en: 'He knows this area well.',
    seg: [
      { t: '彼', r: 'かれ' },
      { t: 'はこの' },
      { t: '地域', r: 'ちいき' },
      { t: 'に' },
      { t: '詳', r: 'くわ' },
      { t: 'しいです。' },
    ]
  },
  '細かい': {
    jp: '細かいことを確認しました。',
    en: 'I checked the fine details.',
    seg: [
      { t: '細', r: 'こま' },
      { t: 'かいことを' },
      { t: '確認', r: 'かくにん' },
      { t: 'しました。' },
    ]
  },
  '怖い': {
    jp: '暗い道が怖いです。',
    en: 'I\'m scared of dark roads.',
    seg: [
      { t: '暗', r: 'くら' },
      { t: 'い' },
      { t: '道', r: 'みち' },
      { t: 'が' },
      { t: '怖', r: 'こわ' },
      { t: 'いです。' },
    ]
  },
  'すごい': {
    jp: '彼の絵はすごいです。',
    en: 'His painting is amazing.',
    seg: [
      { t: '彼', r: 'かれ' },
      { t: 'の' },
      { t: '絵', r: 'え' },
      { t: 'はすごいです。' },
    ]
  },
  'すばらしい': {
    jp: 'すばらしい景色でした。',
    en: 'It was a wonderful view.',
    seg: [
      { t: 'すばらしい' },
      { t: '景色', r: 'けしき' },
      { t: 'でした。' },
    ]
  },
  '正しい': {
    jp: '正しい答えを選んでください。',
    en: 'Please choose the correct answer.',
    seg: [
      { t: '正', r: 'ただ' },
      { t: 'しい' },
      { t: '答', r: 'こた' },
      { t: 'えを' },
      { t: '選', r: 'えら' },
      { t: 'んでください。' },
    ]
  },
  'ひどい': {
    jp: 'ひどい天気です。',
    en: 'The weather is terrible.',
    seg: [
      { t: 'ひどい' },
      { t: '天気', r: 'てんき' },
      { t: 'です。' },
    ]
  },
  '太い': {
    jp: '太い木があります。',
    en: 'There is a thick tree.',
    seg: [
      { t: '太', r: 'ふと' },
      { t: 'い' },
      { t: '木', r: 'き' },
      { t: 'があります。' },
    ]
  },
  '細い': {
    jp: '細い道を通りました。',
    en: 'I passed through a narrow road.',
    seg: [
      { t: '細', r: 'ほそ' },
      { t: 'い' },
      { t: '道', r: 'みち' },
      { t: 'を' },
      { t: '通', r: 'とお' },
      { t: 'りました。' },
    ]
  },
  '厚い': {
    jp: '厚いコートを着ました。',
    en: 'I wore a thick coat.',
    seg: [
      { t: '厚', r: 'あつ' },
      { t: 'いコートを' },
      { t: '着', r: 'き' },
      { t: 'ました。' },
    ]
  },
  'あさい': {
    jp: 'この川は浅いです。',
    en: 'This river is shallow.',
    seg: [
      { t: 'この' },
      { t: '川', r: 'かわ' },
      { t: 'は' },
      { t: '浅', r: 'あさ' },
      { t: 'いです。' },
    ]
  },
  'ふかい': {
    jp: '海は深いです。',
    en: 'The sea is deep.',
    seg: [
      { t: '海', r: 'うみ' },
      { t: 'は' },
      { t: '深', r: 'ふか' },
      { t: 'いです。' },
    ]
  },
  '眠い': {
    jp: '眠くて仕事ができません。',
    en: 'I\'m too sleepy to work.',
    seg: [
      { t: '眠', r: 'ねむ' },
      { t: 'くて' },
      { t: '仕事', r: 'しごと' },
      { t: 'ができません。' },
    ]
  },
  'めずらしい': {
    jp: 'めずらしいものを見ました。',
    en: 'I saw something rare.',
    seg: [
      { t: 'めずらしいものを' },
      { t: '見', r: 'み' },
      { t: 'ました。' },
    ]
  },
  'ふえる': {
    jp: '外国人観光客が増えました。',
    en: 'The number of foreign tourists increased.',
    seg: [
      { t: '外国人', r: 'がいこくじん' },
      { t: '観光客', r: 'かんこうきゃく' },
      { t: 'が' },
      { t: '増', r: 'ふ' },
      { t: 'えました。' },
    ]
  },
  'ふやす': {
    jp: '練習時間を増やしました。',
    en: 'I increased practice time.',
    seg: [
      { t: '練習時間', r: 'れんしゅうじかん' },
      { t: 'を' },
      { t: '増', r: 'ふ' },
      { t: 'やしました。' },
    ]
  },
  'へる': {
    jp: '体重が少し減りました。',
    en: 'My weight decreased a little.',
    seg: [
      { t: '体重', r: 'たいじゅう' },
      { t: 'が' },
      { t: '少', r: 'すこ' },
      { t: 'し' },
      { t: '減', r: 'へ' },
      { t: 'りました。' },
    ]
  },
  'へらす': {
    jp: '食事の量を減らしました。',
    en: 'I reduced the amount I eat.',
    seg: [
      { t: '食事', r: 'しょくじ' },
      { t: 'の' },
      { t: '量', r: 'りょう' },
      { t: 'を' },
      { t: '減', r: 'へ' },
      { t: 'らしました。' },
    ]
  },
  'ちかう': {
    jp: '意見が違います。',
    en: 'Our opinions differ.',
    seg: [
      { t: '意見', r: 'いけん' },
      { t: 'が' },
      { t: '違', r: 'ちが' },
      { t: 'います。' },
    ]
  },
  '変える': {
    jp: '計画を変えました。',
    en: 'I changed the plan.',
    seg: [
      { t: '計画', r: 'けいかく' },
      { t: 'を' },
      { t: '変', r: 'か' },
      { t: 'えました。' },
    ]
  },
  '変わる': {
    jp: '天気が変わりました。',
    en: 'The weather changed.',
    seg: [
      { t: '天気', r: 'てんき' },
      { t: 'が' },
      { t: '変', r: 'か' },
      { t: 'わりました。' },
    ]
  },
  '見える': {
    jp: '窓から海が見えます。',
    en: 'I can see the sea from the window.',
    seg: [
      { t: '窓', r: 'まど' },
      { t: 'から' },
      { t: '海', r: 'うみ' },
      { t: 'が' },
      { t: '見', r: 'み' },
      { t: 'えます。' },
    ]
  },
  '聞こえる': {
    jp: '音楽が聞こえます。',
    en: 'I can hear music.',
    seg: [
      { t: '音楽', r: 'おんがく' },
      { t: 'が' },
      { t: '聞', r: 'き' },
      { t: 'こえます。' },
    ]
  },
  '空く': {
    jp: '席が空いています。',
    en: 'There is an empty seat.',
    seg: [
      { t: '席', r: 'せき' },
      { t: 'が' },
      { t: '空', r: 'あ' },
      { t: 'いています。' },
    ]
  },
  'はずれる': {
    jp: 'ボタンがはずれました。',
    en: 'The button came off.',
    seg: [
      { t: 'ボタンがはずれました。' },
    ]
  },
  '切れる': {
    jp: '糸が切れました。',
    en: 'The thread broke.',
    seg: [
      { t: '糸', r: 'いと' },
      { t: 'が' },
      { t: '切', r: 'き' },
      { t: 'れました。' },
    ]
  },

  // Chapter 7 - Section 1: News
  '新聞社': {
    jp: '新聞社に就職しました。',
    en: 'I got a job at a newspaper company.',
    seg: [
      { t: '新聞社', r: 'しんぶんしゃ' },
      { t: 'に' },
      { t: '就職', r: 'しゅうしょく' },
      { t: 'しました。' },
    ]
  },
  'テレビ局': {
    jp: 'テレビ局で働いています。',
    en: 'I work at a TV station.',
    seg: [
      { t: 'テレビ' },
      { t: '局', r: 'きょく' },
      { t: 'で' },
      { t: '働', r: 'はたら' },
      { t: 'いています。' },
    ]
  },
  '番組': {
    jp: '好きな番組を見ました。',
    en: 'I watched my favorite program.',
    seg: [
      { t: '好', r: 'す' },
      { t: 'きな' },
      { t: '番組', r: 'ばんぐみ' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'ました。' },
    ]
  },
  'ネットニュース': {
    jp: 'ネットニュースで情報を得ました。',
    en: 'I got information from online news.',
    seg: [
      { t: 'ネットニュースで' },
      { t: '情報', r: 'じょうほう' },
      { t: 'を' },
      { t: '得', r: 'え' },
      { t: 'ました。' },
    ]
  },
  '情報': {
    jp: '最新の情報を確認しました。',
    en: 'I checked the latest information.',
    seg: [
      { t: '最新', r: 'さいしん' },
      { t: 'の' },
      { t: '情報', r: 'じょうほう' },
      { t: 'を' },
      { t: '確認', r: 'かくにん' },
      { t: 'しました。' },
    ]
  },
  'データ': {
    jp: 'データを分析しました。',
    en: 'I analyzed the data.',
    seg: [
      { t: 'データを' },
      { t: '分析', r: 'ぶんせき' },
      { t: 'しました。' },
    ]
  },
  'キーワード': {
    jp: 'キーワードで検索しました。',
    en: 'I searched using a keyword.',
    seg: [
      { t: 'キーワードで' },
      { t: '検索', r: 'けんさく' },
      { t: 'しました。' },
    ]
  },
  '放送': {
    jp: 'ニュースが放送されました。',
    en: 'The news was broadcast.',
    seg: [
      { t: 'ニュースが' },
      { t: '放送', r: 'ほうそう' },
      { t: 'されました。' },
    ]
  },
  '伝える': {
    jp: '大事なことを伝えました。',
    en: 'I conveyed an important message.',
    seg: [
      { t: '大事', r: 'だいじ' },
      { t: 'なことを' },
      { t: '伝', r: 'つた' },
      { t: 'えました。' },
    ]
  },
  '火事': {
    jp: '近所で火事がありました。',
    en: 'There was a fire in the neighborhood.',
    seg: [
      { t: '近所', r: 'きんじょ' },
      { t: 'で' },
      { t: '火事', r: 'かじ' },
      { t: 'がありました。' },
    ]
  },
  '起こる': {
    jp: '事故が起こりました。',
    en: 'An accident occurred.',
    seg: [
      { t: '事故', r: 'じこ' },
      { t: 'が' },
      { t: '起', r: 'お' },
      { t: 'こりました。' },
    ]
  },
  '発見': {
    jp: '新しい星が発見されました。',
    en: 'A new star was discovered.',
    seg: [
      { t: '新', r: 'あたら' },
      { t: 'しい' },
      { t: '星', r: 'ほし' },
      { t: 'が' },
      { t: '発見', r: 'はっけん' },
      { t: 'されました。' },
    ]
  },
  '見つかる': {
    jp: '財布が見つかりました。',
    en: 'My wallet was found.',
    seg: [
      { t: '財布', r: 'さいふ' },
      { t: 'が' },
      { t: '見', r: 'み' },
      { t: 'つかりました。' },
    ]
  },
  '見つける': {
    jp: '鍵を見つけました。',
    en: 'I found the key.',
    seg: [
      { t: '鍵', r: 'かぎ' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'つけました。' },
    ]
  },
  '発表': {
    jp: '研究結果を発表しました。',
    en: 'I presented the research results.',
    seg: [
      { t: '研究結果', r: 'けんきゅうけっか' },
      { t: 'を' },
      { t: '発表', r: 'はっぴょう' },
      { t: 'しました。' },
    ]
  },
  'スピーチ': {
    jp: '卒業式でスピーチをしました。',
    en: 'I gave a speech at the graduation ceremony.',
    seg: [
      { t: '卒業式', r: 'そつぎょうしき' },
      { t: 'でスピーチをしました。' },
    ]
  },
  'つづく': {
    jp: '雨が三日間続きました。',
    en: 'The rain continued for three days.',
    seg: [
      { t: '雨', r: 'あめ' },
      { t: 'が' },
      { t: '三日間', r: 'みっかかん' },
      { t: '続', r: 'つづ' },
      { t: 'きました。' },
    ]
  },
  'つづける': {
    jp: '毎日練習を続けています。',
    en: 'I continue practicing every day.',
    seg: [
      { t: '毎日', r: 'まいにち' },
      { t: '練習', r: 'れんしゅう' },
      { t: 'を' },
      { t: '続', r: 'つづ' },
      { t: 'けています。' },
    ]
  },

  // Chapter 7 - Section 2: Promises
  '約束': {
    jp: '約束を守りました。',
    en: 'I kept my promise.',
    seg: [
      { t: '約束', r: 'やくそく' },
      { t: 'を' },
      { t: '守', r: 'まも' },
      { t: 'りました。' },
    ]
  },
  '守る': {
    jp: '規則を守ってください。',
    en: 'Please follow the rules.',
    seg: [
      { t: '規則', r: 'きそく' },
      { t: 'を' },
      { t: '守', r: 'まも' },
      { t: 'ってください。' },
    ]
  },
  '間に合う': {
    jp: '電車に間に合いました。',
    en: 'I made it in time for the train.',
    seg: [
      { t: '電車', r: 'でんしゃ' },
      { t: 'に' },
      { t: '間', r: 'ま' },
      { t: 'に' },
      { t: '合', r: 'あ' },
      { t: 'いました。' },
    ]
  },
  'おくれる': {
    jp: '会議に遅れてしまいました。',
    en: 'I was late for the meeting.',
    seg: [
      { t: '会議', r: 'かいぎ' },
      { t: 'に' },
      { t: '遅', r: 'おく' },
      { t: 'れてしまいました。' },
    ]
  },
  'キャンセル': {
    jp: '予約をキャンセルしました。',
    en: 'I cancelled the reservation.',
    seg: [
      { t: '予約', r: 'よやく' },
      { t: 'をキャンセルしました。' },
    ]
  },
  'わけ': {
    jp: '遅刻したわけを話しました。',
    en: 'I explained the reason for being late.',
    seg: [
      { t: '遅刻', r: 'ちこく' },
      { t: 'したわけを' },
      { t: '話', r: 'はな' },
      { t: 'しました。' },
    ]
  },
  'さそう': {
    jp: '友達を食事に誘いました。',
    en: 'I invited my friend to dinner.',
    seg: [
      { t: '友達', r: 'ともだち' },
      { t: 'を' },
      { t: '食事', r: 'しょくじ' },
      { t: 'に' },
      { t: '誘', r: 'さそ' },
      { t: 'いました。' },
    ]
  },
  'れんらく': {
    jp: '後で連絡します。',
    en: 'I will contact you later.',
    seg: [
      { t: '後', r: 'あと' },
      { t: 'で' },
      { t: '連絡', r: 'れんらく' },
      { t: 'します。' },
    ]
  },
  'ある': {
    jp: '明日、予定があります。',
    en: 'I have plans tomorrow.',
    seg: [
      { t: '明日', r: 'あした' },
      { t: '、' },
      { t: '予定', r: 'よてい' },
      { t: 'があります。' },
    ]
  },
  '食事': {
    jp: '一緒に食事しましょう。',
    en: 'Let\'s have a meal together.',
    seg: [
      { t: '一緒', r: 'いっしょ' },
      { t: 'に' },
      { t: '食事', r: 'しょくじ' },
      { t: 'しましょう。' },
    ]
  },
  '参加': {
    jp: 'イベントに参加しました。',
    en: 'I participated in the event.',
    seg: [
      { t: 'イベントに' },
      { t: '参加', r: 'さんか' },
      { t: 'しました。' },
    ]
  },
  '都合': {
    jp: '都合がよければ来てください。',
    en: 'Please come if it is convenient.',
    seg: [
      { t: '都合', r: 'つごう' },
      { t: 'がよければ' },
      { t: '来', r: 'き' },
      { t: 'てください。' },
    ]
  },
  '予定': {
    jp: '来週の予定を教えてください。',
    en: 'Please tell me your plans for next week.',
    seg: [
      { t: '来週', r: 'らいしゅう' },
      { t: 'の' },
      { t: '予定', r: 'よてい' },
      { t: 'を' },
      { t: '教', r: 'おし' },
      { t: 'えてください。' },
    ]
  },
  '相手': {
    jp: '相手の気持ちを考えてください。',
    en: 'Please consider the other person\'s feelings.',
    seg: [
      { t: '相手', r: 'あいて' },
      { t: 'の' },
      { t: '気持', r: 'きも' },
      { t: 'ちを' },
      { t: '考', r: 'かんが' },
      { t: 'えてください。' },
    ]
  },
  '機会': {
    jp: 'また機会があれば話しましょう。',
    en: 'Let\'s talk again when there\'s an opportunity.',
    seg: [
      { t: 'また' },
      { t: '機会', r: 'きかい' },
      { t: 'があれば' },
      { t: '話', r: 'はな' },
      { t: 'しましょう。' },
    ]
  },

  // Chapter 7 - Section 3: Feelings
  'うれしい': {
    jp: '合格してうれしいです。',
    en: 'I\'m happy that I passed.',
    seg: [
      { t: '合格', r: 'ごうかく' },
      { t: 'してうれしいです。' },
    ]
  },
  '笑い': {
    jp: '笑いが止まりませんでした。',
    en: 'I couldn\'t stop laughing.',
    seg: [
      { t: '笑', r: 'わら' },
      { t: 'いが' },
      { t: '止', r: 'と' },
      { t: 'まりませんでした。' },
    ]
  },
  'しあわせ＜な＞': {
    jp: '家族といると幸せです。',
    en: 'I\'m happy when I\'m with my family.',
    seg: [
      { t: '家族', r: 'かぞく' },
      { t: 'といると' },
      { t: '幸せ', r: 'しあわせ' },
      { t: 'です。' },
    ]
  },
  '楽な': {
    jp: '楽な気持ちになりました。',
    en: 'I felt at ease.',
    seg: [
      { t: '楽', r: 'らく' },
      { t: 'な' },
      { t: '気持', r: 'きも' },
      { t: 'ちになりました。' },
    ]
  },
  '安心＜な/する＞': {
    jp: '無事に届いて安心しました。',
    en: 'I was relieved that it arrived safely.',
    seg: [
      { t: '無事', r: 'ぶじ' },
      { t: 'に' },
      { t: '届', r: 'とど' },
      { t: 'いて' },
      { t: '安心', r: 'あんしん' },
      { t: 'しました。' },
    ]
  },
  '信じる': {
    jp: '自分の力を信じています。',
    en: 'I believe in my own abilities.',
    seg: [
      { t: '自分', r: 'じぶん' },
      { t: 'の' },
      { t: '力', r: 'ちから' },
      { t: 'を' },
      { t: '信', r: 'しん' },
      { t: 'じています。' },
    ]
  },
  '祈る': {
    jp: '成功を祈っています。',
    en: 'I am praying for success.',
    seg: [
      { t: '成功', r: 'せいこう' },
      { t: 'を' },
      { t: '祈', r: 'いの' },
      { t: 'っています。' },
    ]
  },
  'かなしい': {
    jp: 'ペットが死んでかなしいです。',
    en: 'I\'m sad that my pet died.',
    seg: [
      { t: 'ペットが' },
      { t: '死', r: 'し' },
      { t: 'んでかなしいです。' },
    ]
  },
  'さびしい': {
    jp: '一人で食事するのはさびしいです。',
    en: 'Eating alone is lonely.',
    seg: [
      { t: '一人', r: 'ひとり' },
      { t: 'で' },
      { t: '食事', r: 'しょくじ' },
      { t: 'するのはさびしいです。' },
    ]
  },
  '泣く': {
    jp: '映画を見て泣きました。',
    en: 'I cried watching the movie.',
    seg: [
      { t: '映画', r: 'えいが' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'て' },
      { t: '泣', r: 'な' },
      { t: 'きました。' },
    ]
  },
  'なみだ': {
    jp: '涙が出てきました。',
    en: 'Tears came out.',
    seg: [
      { t: '涙', r: 'なみだ' },
      { t: 'が' },
      { t: '出', r: 'で' },
      { t: 'てきました。' },
    ]
  },
  '心配＜な/する＞': {
    jp: '子どものことが心配です。',
    en: 'I am worried about my child.',
    seg: [
      { t: '子', r: 'こ' },
      { t: 'どものことが' },
      { t: '心配', r: 'しんぱい' },
      { t: 'です。' },
    ]
  },
  'つまらない': {
    jp: '授業がつまらないです。',
    en: 'The class is boring.',
    seg: [
      { t: '授業', r: 'じゅぎょう' },
      { t: 'がつまらないです。' },
    ]
  },
  'がっかり': {
    jp: '試験に落ちてがっかりしました。',
    en: 'I was disappointed that I failed the exam.',
    seg: [
      { t: '試験', r: 'しけん' },
      { t: 'に' },
      { t: '落', r: 'お' },
      { t: 'ちてがっかりしました。' },
    ]
  },
  'あきらめる': {
    jp: '諦めないでがんばってください。',
    en: 'Please don\'t give up and keep trying.',
    seg: [
      { t: '諦', r: 'あきら' },
      { t: 'めないでがんばってください。' },
    ]
  },
  'きんちょう': {
    jp: '発表の前に緊張しました。',
    en: 'I was nervous before the presentation.',
    seg: [
      { t: '発表', r: 'はっぴょう' },
      { t: 'の' },
      { t: '前', r: 'まえ' },
      { t: 'に' },
      { t: '緊張', r: 'きんちょう' },
      { t: 'しました。' },
    ]
  },
  'はずかしい': {
    jp: '人前で話すのがはずかしいです。',
    en: 'I\'m embarrassed to speak in front of people.',
    seg: [
      { t: '人前', r: 'ひとまえ' },
      { t: 'で' },
      { t: '話', r: 'はな' },
      { t: 'すのがはずかしいです。' },
    ]
  },
  'びっくり': {
    jp: '突然の知らせにびっくりしました。',
    en: 'I was surprised by the sudden news.',
    seg: [
      { t: '突然', r: 'とつぜん' },
      { t: 'の' },
      { t: '知', r: 'し' },
      { t: 'らせにびっくりしました。' },
    ]
  },
  'おどろく': {
    jp: '彼の才能に驚きました。',
    en: 'I was amazed by his talent.',
    seg: [
      { t: '彼', r: 'かれ' },
      { t: 'の' },
      { t: '才能', r: 'さいのう' },
      { t: 'に' },
      { t: '驚', r: 'おどろ' },
      { t: 'きました。' },
    ]
  },
  '怒る': {
    jp: '遅刻して先生に怒られました。',
    en: 'I was scolded by the teacher for being late.',
    seg: [
      { t: '遅刻', r: 'ちこく' },
      { t: 'して' },
      { t: '先生', r: 'せんせい' },
      { t: 'に' },
      { t: '怒', r: 'おこ' },
      { t: 'られました。' },
    ]
  },
  '気分': {
    jp: '今日は気分がいいです。',
    en: 'I\'m in a good mood today.',
    seg: [
      { t: '今日', r: 'きょう' },
      { t: 'は' },
      { t: '気分', r: 'きぶん' },
      { t: 'がいいです。' },
    ]
  },
  '気分が悪い': {
    jp: '気分が悪くて横になりました。',
    en: 'I felt sick and lay down.',
    seg: [
      { t: '気分', r: 'きぶん' },
      { t: 'が' },
      { t: '悪', r: 'わる' },
      { t: 'くて' },
      { t: '横', r: 'よこ' },
      { t: 'になりました。' },
    ]
  },
  '心': {
    jp: '心から感謝しています。',
    en: 'I am grateful from the bottom of my heart.',
    seg: [
      { t: '心', r: 'こころ' },
      { t: 'から' },
      { t: '感謝', r: 'かんしゃ' },
      { t: 'しています。' },
    ]
  },
  'ストレス': {
    jp: '仕事でストレスがたまっています。',
    en: 'I\'m building up stress from work.',
    seg: [
      { t: '仕事', r: 'しごと' },
      { t: 'でストレスがたまっています。' },
    ]
  },
  'ホームシック': {
    jp: 'ホームシックになりました。',
    en: 'I became homesick.',
    seg: [
      { t: 'ホームシックになりました。' },
    ]
  },

  // Chapter 7 - Section 4: Adverbs 1
  'かならず': {
    jp: '必ず時間を守ってください。',
    en: 'Please always be on time.',
    seg: [
      { t: '必', r: 'かなら' },
      { t: 'ず' },
      { t: '時間', r: 'じかん' },
      { t: 'を' },
      { t: '守', r: 'まも' },
      { t: 'ってください。' },
    ]
  },
  'きっと': {
    jp: 'きっとうまくいきます。',
    en: 'It will definitely go well.',
    seg: [
      { t: 'きっとうまくいきます。' },
    ]
  },
  'しっかり': {
    jp: 'しっかり勉強してください。',
    en: 'Please study hard.',
    seg: [
      { t: 'しっかり' },
      { t: '勉強', r: 'べんきょう' },
      { t: 'してください。' },
    ]
  },
  'きちんと': {
    jp: 'きちんと片づけました。',
    en: 'I tidied up properly.',
    seg: [
      { t: 'きちんと' },
      { t: '片', r: 'かた' },
      { t: 'づけました。' },
    ]
  },
  'ちゃんと': {
    jp: 'ちゃんと食べていますか。',
    en: 'Are you eating properly?',
    seg: [
      { t: 'ちゃんと' },
      { t: '食', r: 'た' },
      { t: 'べていますか。' },
    ]
  },
  'ぜったい': {
    jp: '絶対に諦めません。',
    en: 'I will absolutely not give up.',
    seg: [
      { t: '絶対', r: 'ぜったい' },
      { t: 'に' },
      { t: '諦', r: 'あきら' },
      { t: 'めません。' },
    ]
  },
  'ぜひ': {
    jp: 'ぜひ遊びに来てください。',
    en: 'Please definitely come to visit.',
    seg: [
      { t: 'ぜひ' },
      { t: '遊', r: 'あそ' },
      { t: 'びに' },
      { t: '来', r: 'き' },
      { t: 'てください。' },
    ]
  },
  'できるだけ': {
    jp: 'できるだけ早く来てください。',
    en: 'Please come as soon as possible.',
    seg: [
      { t: 'できるだけ' },
      { t: '早', r: 'はや' },
      { t: 'く' },
      { t: '来', r: 'き' },
      { t: 'てください。' },
    ]
  },
  'はっきり': {
    jp: 'はっきり話してください。',
    en: 'Please speak clearly.',
    seg: [
      { t: 'はっきり' },
      { t: '話', r: 'はな' },
      { t: 'してください。' },
    ]
  },
  'ずいぶん': {
    jp: 'ずいぶん上手になりました。',
    en: 'You\'ve gotten quite good.',
    seg: [
      { t: 'ずいぶん' },
      { t: '上手', r: 'じょうず' },
      { t: 'になりました。' },
    ]
  },
  'かなり': {
    jp: 'かなり疲れています。',
    en: 'I\'m quite tired.',
    seg: [
      { t: 'かなり' },
      { t: '疲', r: 'つか' },
      { t: 'れています。' },
    ]
  },
  'だいぶ': {
    jp: 'だいぶよくなりました。',
    en: 'It has gotten considerably better.',
    seg: [
      { t: 'だいぶよくなりました。' },
    ]
  },
  'もっと': {
    jp: 'もっと練習したいです。',
    en: 'I want to practice more.',
    seg: [
      { t: 'もっと' },
      { t: '練習', r: 'れんしゅう' },
      { t: 'したいです。' },
    ]
  },
  'だいたい': {
    jp: 'だいたい理解できました。',
    en: 'I understood most of it.',
    seg: [
      { t: 'だいたい' },
      { t: '理解', r: 'りかい' },
      { t: 'できました。' },
    ]
  },
  'たいてい': {
    jp: 'たいてい七時に起きます。',
    en: 'I usually wake up at 7.',
    seg: [
      { t: 'たいてい' },
      { t: '七時', r: 'しちじ' },
      { t: 'に' },
      { t: '起', r: 'お' },
      { t: 'きます。' },
    ]
  },
  'たまに': {
    jp: 'たまに映画を見ます。',
    en: 'I sometimes watch movies.',
    seg: [
      { t: 'たまに' },
      { t: '映画', r: 'えいが' },
      { t: 'を' },
      { t: '見', r: 'み' },
      { t: 'ます。' },
    ]
  },
  'ぜんぜん': {
    jp: '全然わかりません。',
    en: 'I don\'t understand at all.',
    seg: [
      { t: '全然', r: 'ぜんぜん' },
      { t: 'わかりません。' },
    ]
  },
  'けっして': {
    jp: '決してあきらめません。',
    en: 'I will never give up.',
    seg: [
      { t: '決', r: 'けっ' },
      { t: 'してあきらめません。' },
    ]
  },
  'ちっとも': {
    jp: 'ちっとも眠くないです。',
    en: 'I\'m not sleepy at all.',
    seg: [
      { t: 'ちっとも' },
      { t: '眠', r: 'ねむ' },
      { t: 'くないです。' },
    ]
  },
  'まだ': {
    jp: 'まだ終わっていません。',
    en: 'It\'s not finished yet.',
    seg: [
      { t: 'まだ' },
      { t: '終', r: 'お' },
      { t: 'わっていません。' },
    ]
  },
  'ほとんど': {
    jp: 'ほとんど食べました。',
    en: 'I ate almost all of it.',
    seg: [
      { t: 'ほとんど' },
      { t: '食', r: 'た' },
      { t: 'べました。' },
    ]
  },
  'なかなか': {
    jp: 'なかなか眠れません。',
    en: 'I can\'t sleep easily.',
    seg: [
      { t: 'なかなか' },
      { t: '眠', r: 'ねむ' },
      { t: 'れません。' },
    ]
  },

  // Chapter 7 - Section 5: Adverbs 2
  '急に': {
    jp: '急に雨が降ってきました。',
    en: 'It suddenly started raining.',
    seg: [
      { t: '急', r: 'きゅう' },
      { t: 'に' },
      { t: '雨', r: 'あめ' },
      { t: 'が' },
      { t: '降', r: 'ふ' },
      { t: 'ってきました。' },
    ]
  },
  'しばらく': {
    jp: 'しばらく待ってください。',
    en: 'Please wait for a while.',
    seg: [
      { t: 'しばらく' },
      { t: '待', r: 'ま' },
      { t: 'ってください。' },
    ]
  },
  'ずっと': {
    jp: 'ずっと待っていました。',
    en: 'I was waiting the whole time.',
    seg: [
      { t: 'ずっと' },
      { t: '待', r: 'ま' },
      { t: 'っていました。' },
    ]
  },
  'そのまま': {
    jp: 'そのままにしておいてください。',
    en: 'Please leave it as is.',
    seg: [
      { t: 'そのままにしておいてください。' },
    ]
  },
  'そろそろ': {
    jp: 'そろそろ出発しましょう。',
    en: 'Let\'s start going soon.',
    seg: [
      { t: 'そろそろ' },
      { t: '出発', r: 'しゅっぱつ' },
      { t: 'しましょう。' },
    ]
  },
  'とうとう': {
    jp: 'とうとう完成しました。',
    en: 'It was finally completed.',
    seg: [
      { t: 'とうとう' },
      { t: '完成', r: 'かんせい' },
      { t: 'しました。' },
    ]
  },
  'やっと': {
    jp: 'やっと終わりました。',
    en: 'It finally finished.',
    seg: [
      { t: 'やっと' },
      { t: '終', r: 'お' },
      { t: 'わりました。' },
    ]
  },
  'たしか': {
    jp: 'たしかここに置きました。',
    en: 'I\'m pretty sure I placed it here.',
    seg: [
      { t: 'たしかここに' },
      { t: '置', r: 'お' },
      { t: 'きました。' },
    ]
  },
  'どうも': {
    jp: 'どうもありがとうございます。',
    en: 'Thank you very much.',
    seg: [
      { t: 'どうもありがとうございます。' },
    ]
  },
  'たとえば': {
    jp: 'たとえば、りんごやみかんがあります。',
    en: 'For example, there are apples and oranges.',
    seg: [
      { t: 'たとえば、りんごやみかんがあります。' },
    ]
  },
  '直接': {
    jp: '直接話しましょう。',
    en: 'Let\'s speak directly.',
    seg: [
      { t: '直接', r: 'ちょくせつ' },
      { t: '話', r: 'はな' },
      { t: 'しましょう。' },
    ]
  },
  '特に': {
    jp: '特に問題はありません。',
    en: 'There are no particular problems.',
    seg: [
      { t: '特', r: 'とく' },
      { t: 'に' },
      { t: '問題', r: 'もんだい' },
      { t: 'はありません。' },
    ]
  },
  'どんどん': {
    jp: '日本語がどんどん上手になっています。',
    en: 'My Japanese is improving more and more.',
    seg: [
      { t: '日本語', r: 'にほんご' },
      { t: 'がどんどん' },
      { t: '上手', r: 'じょうず' },
      { t: 'になっています。' },
    ]
  },
  'なるほど': {
    jp: 'なるほど、そういうことですか。',
    en: 'I see, so that\'s how it is.',
    seg: [
      { t: 'なるほど、そういうことですか。' },
    ]
  },
  'はじめて': {
    jp: '初めて日本料理を作りました。',
    en: 'I made Japanese food for the first time.',
    seg: [
      { t: '初', r: 'はじ' },
      { t: 'めて' },
      { t: '日本料理', r: 'にほんりょうり' },
      { t: 'を' },
      { t: '作', r: 'つく' },
      { t: 'りました。' },
    ]
  },
  'はじめに': {
    jp: 'はじめに自己紹介をしました。',
    en: 'First, I introduced myself.',
    seg: [
      { t: 'はじめに' },
      { t: '自己紹介', r: 'じこしょうかい' },
      { t: 'をしました。' },
    ]
  },
  'もし': {
    jp: 'もし時間があれば来てください。',
    en: 'Please come if you have time.',
    seg: [
      { t: 'もし' },
      { t: '時間', r: 'じかん' },
      { t: 'があれば' },
      { t: '来', r: 'き' },
      { t: 'てください。' },
    ]
  },
  'もちろん': {
    jp: 'もちろん、行きます。',
    en: 'Of course, I will go.',
    seg: [
      { t: 'もちろん、' },
      { t: '行', r: 'い' },
      { t: 'きます。' },
    ]
  },
  'やはり': {
    jp: 'やはり日本語は難しいです。',
    en: 'Japanese is difficult after all.',
    seg: [
      { t: 'やはり' },
      { t: '日本語', r: 'にほんご' },
      { t: 'は' },
      { t: '難', r: 'むずか' },
      { t: 'しいです。' },
    ]
  },
  '実は': {
    jp: '実は、秘密があります。',
    en: 'Actually, I have a secret.',
    seg: [
      { t: '実', r: 'じつ' },
      { t: 'は、' },
      { t: '秘密', r: 'ひみつ' },
      { t: 'があります。' },
    ]
  },
  'いかが': {
    jp: 'お体の具合はいかがですか。',
    en: 'How is your health?',
    seg: [
      { t: 'お' },
      { t: '体', r: 'からだ' },
      { t: 'の' },
      { t: '具合', r: 'ぐあい' },
      { t: 'はいかがですか。' },
    ]
  },
  'いっしょうけんめい＜な＞': {
    jp: '一生懸命練習しました。',
    en: 'I practiced with all my might.',
    seg: [
      { t: '一生懸命', r: 'いっしょうけんめい' },
      { t: '練習', r: 'れんしゅう' },
      { t: 'しました。' },
    ]
  },
  'おおぜい': {
    jp: 'おおぜいの人が集まりました。',
    en: 'A large number of people gathered.',
    seg: [
      { t: 'おおぜいの' },
      { t: '人', r: 'ひと' },
      { t: 'が' },
      { t: '集', r: 'あつ' },
      { t: 'まりました。' },
    ]
  },

  // Chapter 7 - Section 6: Conjunctions
  'だから': {
    jp: '雨が降っています。だから傘を持ってください。',
    en: 'It\'s raining. So please bring an umbrella.',
    seg: [
      { t: '雨', r: 'あめ' },
      { t: 'が' },
      { t: '降', r: 'ふ' },
      { t: 'っています。だから' },
      { t: '傘', r: 'かさ' },
      { t: 'を' },
      { t: '持', r: 'も' },
      { t: 'ってください。' },
    ]
  },
  'それで': {
    jp: '熱があります。それで学校を休みました。',
    en: 'I have a fever. So I stayed home from school.',
    seg: [
      { t: '熱', r: 'ねつ' },
      { t: 'があります。それで' },
      { t: '学校', r: 'がっこう' },
      { t: 'を' },
      { t: '休', r: 'やす' },
      { t: 'みました。' },
    ]
  },
  'または': {
    jp: '電話またはメールで連絡してください。',
    en: 'Please contact me by phone or email.',
    seg: [
      { t: '電話', r: 'でんわ' },
      { t: 'またはメールで' },
      { t: '連絡', r: 'れんらく' },
      { t: 'してください。' },
    ]
  },
  'それに': {
    jp: '雨が降っています。それに風も強いです。',
    en: 'It\'s raining. On top of that, the wind is strong.',
    seg: [
      { t: '雨', r: 'あめ' },
      { t: 'が' },
      { t: '降', r: 'ふ' },
      { t: 'っています。それに' },
      { t: '風', r: 'かぜ' },
      { t: 'も' },
      { t: '強', r: 'つよ' },
      { t: 'いです。' },
    ]
  },
  'そのうえ': {
    jp: '宿題を忘れ、そのうえ遅刻もしました。',
    en: 'I forgot my homework, and on top of that, I was late.',
    seg: [
      { t: '宿題', r: 'しゅくだい' },
      { t: 'を' },
      { t: '忘', r: 'わす' },
      { t: 'れ、そのうえ' },
      { t: '遅刻', r: 'ちこく' },
      { t: 'もしました。' },
    ]
  },
  'すると': {
    jp: 'ドアを開けました。すると猫が入ってきました。',
    en: 'I opened the door. Then a cat came in.',
    seg: [
      { t: 'ドアを' },
      { t: '開', r: 'あ' },
      { t: 'けました。すると' },
      { t: '猫', r: 'ねこ' },
      { t: 'が' },
      { t: '入', r: 'はい' },
      { t: 'ってきました。' },
    ]
  },
  'けれども': {
    jp: '高いけれども、いい品物です。',
    en: 'It is expensive, but it is good quality.',
    seg: [
      { t: '高', r: 'たか' },
      { t: 'いけれども、いい' },
      { t: '品物', r: 'しなもの' },
      { t: 'です。' },
    ]
  },
  'それなら': {
    jp: '時間があるんですね。それなら一緒に行きましょう。',
    en: 'You have time then. In that case, let\'s go together.',
    seg: [
      { t: '時間', r: 'じかん' },
      { t: 'があるんですね。それなら' },
      { t: '一緒', r: 'いっしょ' },
      { t: 'に' },
      { t: '行', r: 'い' },
      { t: 'きましょう。' },
    ]
  },
  'ところで': {
    jp: 'ところで、昨日どこに行きましたか。',
    en: 'By the way, where did you go yesterday?',
    seg: [
      { t: 'ところで、' },
      { t: '昨日', r: 'きのう' },
      { t: 'どこに' },
      { t: '行', r: 'い' },
      { t: 'きましたか。' },
    ]
  },
}
