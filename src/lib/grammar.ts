export interface GrammarQuestion {
  id: string
  sentence: string
  options: string[]
  correctIndex: number
  explanation: string
  pattern: string
}

export const GRAMMAR_QUESTIONS: GrammarQuestion[] = [
  // ～てしまう (regret / completion)
  {
    id: 'g001',
    sentence: '財布を（　　）しまいました。',
    options: ['なくして', 'なくす', 'なくした', 'なくし'],
    correctIndex: 0,
    explanation: 'てしまう uses て-form. なくす → なくして + しまう = なくしてしまう (accidentally lost).',
    pattern: 'てしまう',
  },
  {
    id: 'g002',
    sentence: '宿題をすっかり（　　）しまった。',
    options: ['忘れて', '忘れる', '忘れた', '忘れ'],
    correctIndex: 0,
    explanation: '忘れる → 忘れて + しまった = completely forgot (regretful completion).',
    pattern: 'てしまう',
  },
  // ～ておく (preparation / leaving something done)
  {
    id: 'g003',
    sentence: '会議の前に資料を（　　）おきました。',
    options: ['コピーして', 'コピーする', 'コピーした', 'コピーし'],
    correctIndex: 0,
    explanation: 'ておく = do something in advance/preparation. コピーして + おく.',
    pattern: 'ておく',
  },
  {
    id: 'g004',
    sentence: '冷蔵庫にビールを（　　）おいてください。',
    options: ['入れて', '入れる', '入れ', '入った'],
    correctIndex: 0,
    explanation: '入れて + おく = put (and leave it there) in advance.',
    pattern: 'ておく',
  },
  // ～てみる (try doing)
  {
    id: 'g005',
    sentence: 'この料理を食べた（　　）がありますか。',
    options: ['こと', 'もの', 'ため', 'ので'],
    correctIndex: 0,
    explanation: 'たことがある = have (ever) done something. 食べたことがある.',
    pattern: 'たことがある',
  },
  {
    id: 'g006',
    sentence: '新しいカフェに（　　）みましょう。',
    options: ['行って', '行く', '行き', '行った'],
    correctIndex: 0,
    explanation: 'てみる = try doing something. 行って + みる.',
    pattern: 'てみる',
  },
  // ～てほしい (want someone to do)
  {
    id: 'g007',
    sentence: 'もう少し（　　）ほしいです。',
    options: ['待って', '待つ', '待ち', '待った'],
    correctIndex: 0,
    explanation: 'てほしい = want (someone else) to do. 待って + ほしい.',
    pattern: 'てほしい',
  },
  // ～たら (conditional: when/if)
  {
    id: 'g008',
    sentence: '家に（　　）、電話してください。',
    options: ['帰ったら', '帰れば', '帰ると', '帰るなら'],
    correctIndex: 0,
    explanation: 'たら is natural for sequential events: when you get home, call me.',
    pattern: 'たら',
  },
  {
    id: 'g009',
    sentence: '雨が（　　）、試合は中止になります。',
    options: ['降ったら', '降れば', '降ると', '降るなら'],
    correctIndex: 2,
    explanation: 'と is used for natural/automatic results. Rain → automatic cancellation.',
    pattern: 'と',
  },
  // ～ば (conditional)
  {
    id: 'g010',
    sentence: 'もっと（　　）よかったのに。',
    options: ['練習すれば', '練習したら', '練習すると', '練習するなら'],
    correctIndex: 0,
    explanation: 'ば + よかった = should have done. Expresses regret about the past.',
    pattern: 'ば〜よかった',
  },
  // ～なら (conditional: given that)
  {
    id: 'g011',
    sentence: '日本に行く（　　）、京都に行ったほうがいいですよ。',
    options: ['なら', 'たら', 'と', 'ば'],
    correctIndex: 0,
    explanation: 'なら is used when the speaker gives advice based on what was mentioned.',
    pattern: 'なら',
  },
  // ～ために (purpose)
  {
    id: 'g012',
    sentence: '健康（　　）毎日運動しています。',
    options: ['のために', 'のように', 'のために', 'のばかり'],
    correctIndex: 0,
    explanation: 'ために after a noun expresses purpose or cause. 健康のために = for one\'s health.',
    pattern: 'ために',
  },
  {
    id: 'g013',
    sentence: '日本語が上手になる（　　）、毎日練習しています。',
    options: ['ために', 'ように', 'ので', 'から'],
    correctIndex: 1,
    explanation: 'ように is used with potential/non-volitional verbs. 上手になる (become) → ように.',
    pattern: 'ように',
  },
  // ～ようにする (make an effort)
  {
    id: 'g014',
    sentence: '毎朝早く起きる（　　）しています。',
    options: ['ように', 'ために', 'ことに', 'のに'],
    correctIndex: 0,
    explanation: 'ようにする = make effort to do. 早く起きるようにしている = making it a habit.',
    pattern: 'ようにする',
  },
  // ～らしい (inference from evidence)
  {
    id: 'g015',
    sentence: '彼は風邪を引いた（　　）。',
    options: ['らしい', 'そうだ', 'ようだ', 'はずだ'],
    correctIndex: 0,
    explanation: 'らしい = appears/seems (based on what I\'ve heard or observed indirectly).',
    pattern: 'らしい',
  },
  // ～そうだ (looks like / hearsay)
  {
    id: 'g016',
    sentence: 'この荷物は（　　）重そうです。',
    options: ['とても', 'きっと', 'もっと', 'たいへん'],
    correctIndex: 0,
    explanation: 'そうだ (appearance) goes with とても naturally here (looks very heavy).',
    pattern: 'そうだ（様態）',
  },
  {
    id: 'g017',
    sentence: '天気予報によると、明日は雨が降る（　　）。',
    options: ['そうです', 'らしいです', 'ようです', 'はずです'],
    correctIndex: 0,
    explanation: 'によると〜そうだ = hearsay. According to the forecast it will rain.',
    pattern: 'そうだ（伝聞）',
  },
  // ～はずだ (expectation)
  {
    id: 'g018',
    sentence: '彼女は3時に来る（　　）なのに、まだ来ません。',
    options: ['はず', 'つもり', 'こと', 'らしい'],
    correctIndex: 0,
    explanation: 'はずだ = should/supposed to. She was expected to come at 3.',
    pattern: 'はずだ',
  },
  // ～かもしれない (possibility)
  {
    id: 'g019',
    sentence: '明日は晴れる（　　）。',
    options: ['かもしれない', 'はずだ', 'でしょう', 'らしい'],
    correctIndex: 0,
    explanation: 'かもしれない = might be. Lower certainty than でしょう.',
    pattern: 'かもしれない',
  },
  // ～でしょう (probability)
  {
    id: 'g020',
    sentence: 'この問題は難しい（　　）。',
    options: ['でしょう', 'かもしれない', 'はずだ', 'らしい'],
    correctIndex: 0,
    explanation: 'でしょう = probably. Moderate certainty guess.',
    pattern: 'でしょう',
  },
  // ～させる (causative)
  {
    id: 'g021',
    sentence: '先生は学生に作文を書か（　　）。',
    options: ['せました', 'れました', 'せられました', 'られました'],
    correctIndex: 0,
    explanation: 'Causative: 書く → 書かせる. Teacher made students write a composition.',
    pattern: 'させる（使役）',
  },
  // ～される (passive)
  {
    id: 'g022',
    sentence: '財布を（　　）しまいました。',
    options: ['盗まれて', '盗んで', '盗ませて', '盗めて'],
    correctIndex: 0,
    explanation: 'Passive: 盗む → 盗まれる. My wallet was stolen (from me).',
    pattern: 'られる（受身）',
  },
  // ～ことができる (ability)
  {
    id: 'g023',
    sentence: '私は日本語で話す（　　）できます。',
    options: ['ことが', 'のが', 'ものが', 'ためが'],
    correctIndex: 0,
    explanation: 'ことができる = can / to be able to. 話すことができる = can speak.',
    pattern: 'ことができる',
  },
  // ～ことにする (decide to)
  {
    id: 'g024',
    sentence: '来月から毎日日記をつける（　　）しました。',
    options: ['ことに', 'ように', 'ために', 'のに'],
    correctIndex: 0,
    explanation: 'ことにする = decided to do (volitional). I decided to keep a diary.',
    pattern: 'ことにする',
  },
  // ～ことになる (it is decided)
  {
    id: 'g025',
    sentence: '来月、大阪に転勤する（　　）なりました。',
    options: ['ことに', 'ように', 'ために', 'のに'],
    correctIndex: 0,
    explanation: 'ことになる = it has been decided (often by circumstance, not one\'s own decision).',
    pattern: 'ことになる',
  },
  // ～まで / ～までに
  {
    id: 'g026',
    sentence: '月曜日（　　）レポートを提出してください。',
    options: ['までに', 'まで', 'までは', 'までで'],
    correctIndex: 0,
    explanation: 'までに = by (deadline). Submit the report by Monday.',
    pattern: 'までに',
  },
  {
    id: 'g027',
    sentence: '駅に着く（　　）、ずっと立っていました。',
    options: ['まで', 'までに', 'ために', 'ように'],
    correctIndex: 0,
    explanation: 'まで = until. I kept standing until I arrived at the station.',
    pattern: 'まで',
  },
  // ～のに (unexpected / complaint)
  {
    id: 'g028',
    sentence: 'こんなに勉強した（　　）、試験に落ちた。',
    options: ['のに', 'から', 'ので', 'ために'],
    correctIndex: 0,
    explanation: 'のに expresses disappointment or complaint: even though I studied so much...',
    pattern: 'のに',
  },
  // ～しか〜ない (only)
  {
    id: 'g029',
    sentence: '財布に100円（　　）ありません。',
    options: ['しか', 'だけ', 'ばかり', 'だって'],
    correctIndex: 0,
    explanation: 'しか〜ない = only (with negative). I only have 100 yen.',
    pattern: 'しか〜ない',
  },
  // ～だけ (just / only)
  {
    id: 'g030',
    sentence: 'もう少し（　　）待てば、バスが来ます。',
    options: ['だけ', 'しか', 'ばかり', 'まで'],
    correctIndex: 0,
    explanation: 'だけ = just, only. Just a little more waiting and the bus will come.',
    pattern: 'だけ',
  },
  // ～ながら (while doing)
  {
    id: 'g031',
    sentence: '音楽を聞き（　　）、勉強しています。',
    options: ['ながら', 'てから', 'ために', 'ようで'],
    correctIndex: 0,
    explanation: 'ながら = while doing (two actions simultaneously). 聞きながら = while listening.',
    pattern: 'ながら',
  },
  // ～たり〜たり (doing things like)
  {
    id: 'g032',
    sentence: '休みの日は映画を見（　　）、買い物をしたりします。',
    options: ['たり', 'て', 'てから', 'たら'],
    correctIndex: 0,
    explanation: 'たり〜たりする = do things like... (list of representative actions).',
    pattern: 'たり〜たり',
  },
  // ～てから (after doing)
  {
    id: 'g033',
    sentence: '手を洗っ（　　）、食事をしてください。',
    options: ['てから', 'ながら', 'ために', 'たら'],
    correctIndex: 0,
    explanation: 'てから = after doing. Wash your hands, then eat.',
    pattern: 'てから',
  },
  // ～ているところ (in the middle of)
  {
    id: 'g034',
    sentence: '今、食事をして（　　）です。',
    options: ['いるところ', 'あるところ', 'おくところ', 'みるところ'],
    correctIndex: 0,
    explanation: 'ているところ = in the middle of doing. I\'m right in the middle of eating.',
    pattern: 'ているところ',
  },
  // ～てあげる / てくれる / てもらう
  {
    id: 'g035',
    sentence: '友達が荷物を持っ（　　）くれました。',
    options: ['て', 'てを', 'をて', 'での'],
    correctIndex: 0,
    explanation: '〜てくれる = someone does something for me. 持ってくれた = carried (it) for me.',
    pattern: 'てくれる',
  },
  {
    id: 'g036',
    sentence: '母に料理を作っ（　　）もらいました。',
    options: ['て', 'てを', 'ため', 'でも'],
    correctIndex: 0,
    explanation: '〜てもらう = have someone do (for you). 作ってもらった = had mom cook for me.',
    pattern: 'てもらう',
  },
  // ～ようになる (come to / reach state)
  {
    id: 'g037',
    sentence: '練習して、泳げる（　　）なりました。',
    options: ['ように', 'ことに', 'ために', 'だけに'],
    correctIndex: 0,
    explanation: 'ようになる = come to be able to. I practiced and came to be able to swim.',
    pattern: 'ようになる',
  },
  // ～のだ / のです (explanation)
  {
    id: 'g038',
    sentence: 'どうして遅れたんですか。電車が止まった（　　）です。',
    options: ['ん', 'こと', 'もの', 'から'],
    correctIndex: 0,
    explanation: 'んです (のです) = explanation/reason. The train stopped (that\'s why).',
    pattern: 'のだ',
  },
  // ～ずに / ないで (without doing)
  {
    id: 'g039',
    sentence: '朝ご飯を食べ（　　）、学校に来てしまった。',
    options: ['ないで', 'なくて', 'ずに', 'ないで'],
    correctIndex: 0,
    explanation: 'ないで = without doing (same as ずに). Came to school without eating breakfast.',
    pattern: 'ないで',
  },
  // Particle — に vs で
  {
    id: 'g040',
    sentence: '田中さんは毎朝6時（　　）起きます。',
    options: ['に', 'で', 'を', 'が'],
    correctIndex: 0,
    explanation: 'に marks a specific point in time. 6時に = at 6 o\'clock.',
    pattern: '助詞（に・で）',
  },
]
