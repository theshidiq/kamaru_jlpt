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

// ────────────────────────────────────────────────
// N2 Grammar Questions
// ────────────────────────────────────────────────
export const GRAMMAR_QUESTIONS_N2: GrammarQuestion[] = [
  // ～にもかかわらず
  {
    id: 'n2g001',
    sentence: '雨が降っていた（　　）、試合は続けられた。',
    options: ['にもかかわらず', 'にしたがって', 'にともなって', 'につれて'],
    correctIndex: 0,
    explanation: 'にもかかわらず = despite, in spite of. Despite the rain, the game continued.',
    pattern: 'にもかかわらず',
  },
  {
    id: 'n2g002',
    sentence: '努力した（　　）、結果が出なかった。',
    options: ['にもかかわらず', 'にとって', 'に対して', 'に関して'],
    correctIndex: 0,
    explanation: 'にもかかわらず = despite ~. Despite the effort, there were no results.',
    pattern: 'にもかかわらず',
  },
  // ～に対して
  {
    id: 'n2g003',
    sentence: '先生の質問（　　）、学生たちは黙っていた。',
    options: ['に対して', 'について', 'にとって', 'によって'],
    correctIndex: 0,
    explanation: 'に対して = in response to, toward. The students were silent in response to the teacher\'s question.',
    pattern: 'に対して',
  },
  // ～をはじめ
  {
    id: 'n2g004',
    sentence: '東京（　　）、大阪や名古屋などの大都市で開催された。',
    options: ['をはじめ', 'に対して', 'に加えて', 'はともかく'],
    correctIndex: 0,
    explanation: 'をはじめ = starting with, as well as. Starting with Tokyo, held in major cities.',
    pattern: 'をはじめ',
  },
  // ～に加えて
  {
    id: 'n2g005',
    sentence: '英語（　　）、フランス語も話せる。',
    options: ['に加えて', 'をはじめ', 'に対して', 'に関して'],
    correctIndex: 0,
    explanation: 'に加えて = in addition to. In addition to English, can also speak French.',
    pattern: 'に加えて',
  },
  // ～ばかりか
  {
    id: 'n2g006',
    sentence: '彼は歌が上手な（　　）、ダンスもできる。',
    options: ['ばかりか', 'だけに', 'からこそ', 'ものの'],
    correctIndex: 0,
    explanation: 'ばかりか = not only ~ but also. Not only is he good at singing, he can also dance.',
    pattern: 'ばかりか',
  },
  // ～ものの
  {
    id: 'n2g007',
    sentence: '薬を飲んだ（　　）、なかなかよくならない。',
    options: ['ものの', 'から', 'ために', 'ので'],
    correctIndex: 0,
    explanation: 'ものの = although, but. Although I took medicine, I\'m not getting better.',
    pattern: 'ものの',
  },
  // ～ざるを得ない
  {
    id: 'n2g008',
    sentence: '上司に頼まれたので、引き受け（　　）。',
    options: ['ざるを得ない', 'てたまらない', 'てならない', 'てしかたがない'],
    correctIndex: 0,
    explanation: 'ざるを得ない = cannot help but do, have no choice but to. Had to accept since the boss asked.',
    pattern: 'ざるを得ない',
  },
  {
    id: 'n2g009',
    sentence: '証拠があるので、認め（　　）。',
    options: ['ざるを得ない', 'ないわけにはいかない', 'てならない', 'てたまらない'],
    correctIndex: 0,
    explanation: 'ざるを得ない = have no choice but to admit (since there\'s evidence).',
    pattern: 'ざるを得ない',
  },
  // ～てたまらない
  {
    id: 'n2g010',
    sentence: '辛いものを食べたので、のどが渇い（　　）。',
    options: ['てたまらない', 'てならない', 'てしかたがない', 'てしまった'],
    correctIndex: 0,
    explanation: 'てたまらない = unbearably ~, can\'t stand ~. I\'m unbearably thirsty from eating spicy food.',
    pattern: 'てたまらない',
  },
  // ～てならない
  {
    id: 'n2g011',
    sentence: '故郷の家族のことが気になっ（　　）。',
    options: ['てならない', 'てたまらない', 'てしかたがない', 'てほしい'],
    correctIndex: 0,
    explanation: 'てならない = cannot help feeling, naturally feels ~. I can\'t help worrying about my family back home.',
    pattern: 'てならない',
  },
  // ～上で
  {
    id: 'n2g012',
    sentence: 'よく考えた（　　）、決めてください。',
    options: ['上で', 'あとで', 'ことで', 'ために'],
    correctIndex: 0,
    explanation: '上で = after doing, having done. Please decide after thinking carefully.',
    pattern: '上で',
  },
  // ～に際して
  {
    id: 'n2g013',
    sentence: '入学（　　）、必要な書類を提出してください。',
    options: ['に際して', 'にとって', 'に対して', 'によって'],
    correctIndex: 0,
    explanation: 'に際して = on the occasion of, when. When enrolling, please submit the necessary documents.',
    pattern: 'に際して',
  },
  // ～にあたって
  {
    id: 'n2g014',
    sentence: 'プロジェクト開始（　　）、チームの目標を確認した。',
    options: ['にあたって', 'にとって', 'について', 'によって'],
    correctIndex: 0,
    explanation: 'にあたって = on the occasion of, when doing. When starting the project, confirmed team goals.',
    pattern: 'にあたって',
  },
  // ～を通じて
  {
    id: 'n2g015',
    sentence: 'インターネット（　　）、世界中の人と話せる。',
    options: ['を通じて', 'に対して', 'によって', 'に関して'],
    correctIndex: 0,
    explanation: 'を通じて = through, via. Can talk to people all over the world via the internet.',
    pattern: 'を通じて',
  },
  // ～にしたがって
  {
    id: 'n2g016',
    sentence: '技術が進む（　　）、生活が便利になった。',
    options: ['にしたがって', 'にもかかわらず', 'にとって', 'にとっては'],
    correctIndex: 0,
    explanation: 'にしたがって = as ~, following ~. As technology advances, life becomes more convenient.',
    pattern: 'にしたがって',
  },
  // ～に伴って
  {
    id: 'n2g017',
    sentence: '経済成長（　　）、環境問題も深刻になってきた。',
    options: ['に伴って', 'につれて', 'にしたがって', 'にもかかわらず'],
    correctIndex: 0,
    explanation: 'に伴って = along with, as a result of. Along with economic growth, environmental problems have become serious.',
    pattern: 'に伴って',
  },
  // ～次第
  {
    id: 'n2g018',
    sentence: '準備ができ（　　）、ご連絡します。',
    options: ['次第', 'たら', 'てから', 'ならば'],
    correctIndex: 0,
    explanation: '次第 = as soon as. As soon as preparations are ready, I will contact you.',
    pattern: '次第',
  },
  // ～のみならず
  {
    id: 'n2g019',
    sentence: '彼女は日本語の（　　）、中国語も話せる。',
    options: ['のみならず', 'だけでなく', 'ばかりか', 'に加えて'],
    correctIndex: 0,
    explanation: 'のみならず = not only ~ but also. She can speak not only Japanese but also Chinese.',
    pattern: 'のみならず',
  },
  // ～に限らず
  {
    id: 'n2g020',
    sentence: '子供（　　）、大人もこのゲームを楽しんでいる。',
    options: ['に限らず', 'だけでなく', 'のみならず', 'をはじめ'],
    correctIndex: 0,
    explanation: 'に限らず = not limited to. Not only children but also adults enjoy this game.',
    pattern: 'に限らず',
  },
  // ～わけがない
  {
    id: 'n2g021',
    sentence: 'そんな難しい問題、子供に解ける（　　）。',
    options: ['わけがない', 'わけにはいかない', 'ざるを得ない', 'てたまらない'],
    correctIndex: 0,
    explanation: 'わけがない = there\'s no way ~. There\'s no way a child can solve such a difficult problem.',
    pattern: 'わけがない',
  },
  // ～わけにはいかない
  {
    id: 'n2g022',
    sentence: '試験があるから、今日は遊んでいる（　　）。',
    options: ['わけにはいかない', 'わけがない', 'ざるを得ない', 'てならない'],
    correctIndex: 0,
    explanation: 'わけにはいかない = cannot (due to social/moral reasons). Can\'t play today because there\'s an exam.',
    pattern: 'わけにはいかない',
  },
  // ～ないわけにはいかない
  {
    id: 'n2g023',
    sentence: '彼に借りたお金を返さ（　　）。',
    options: ['ないわけにはいかない', 'ざるを得ない', 'てたまらない', 'てならない'],
    correctIndex: 0,
    explanation: 'ないわけにはいかない = have to, must. I have to return the money I borrowed from him.',
    pattern: 'ないわけにはいかない',
  },
  // ～とともに
  {
    id: 'n2g024',
    sentence: '春が来る（　　）、花が咲き始めた。',
    options: ['とともに', 'にしたがって', 'に伴って', 'につれて'],
    correctIndex: 0,
    explanation: 'とともに = along with, as, at the same time as. As spring came, flowers began to bloom.',
    pattern: 'とともに',
  },
  // ～につれて
  {
    id: 'n2g025',
    sentence: '年を取る（　　）、体力が落ちてきた。',
    options: ['につれて', 'にしたがって', 'に伴って', 'とともに'],
    correctIndex: 0,
    explanation: 'につれて = as ~, in proportion to. As one gets older, physical strength declines.',
    pattern: 'につれて',
  },
  // ～としても
  {
    id: 'n2g026',
    sentence: '雨が降った（　　）、試合は中止にならない。',
    options: ['としても', 'としたら', 'とすれば', 'ならば'],
    correctIndex: 0,
    explanation: 'としても = even if. Even if it rains, the game won\'t be cancelled.',
    pattern: 'としても',
  },
  // ～ところが
  {
    id: 'n2g027',
    sentence: '自信を持って試験を受けた。（　　）、結果は不合格だった。',
    options: ['ところが', 'したがって', 'そのため', 'そこで'],
    correctIndex: 0,
    explanation: 'ところが = however, but (unexpectedly). I took the exam confidently. However, I failed.',
    pattern: 'ところが',
  },
  // ～だけに
  {
    id: 'n2g028',
    sentence: 'プロの料理人（　　）、この料理はおいしい。',
    options: ['だけに', 'だから', 'にしては', 'にしても'],
    correctIndex: 0,
    explanation: 'だけに = just because, precisely because. Precisely because he\'s a professional chef, this dish is delicious.',
    pattern: 'だけに',
  },
  // ～からこそ
  {
    id: 'n2g029',
    sentence: '失敗を経験した（　　）、成功の大切さがわかる。',
    options: ['からこそ', 'から', 'ために', 'ので'],
    correctIndex: 0,
    explanation: 'からこそ = precisely because. Precisely because I experienced failure, I understand the importance of success.',
    pattern: 'からこそ',
  },
  // ～もかまわず
  {
    id: 'n2g030',
    sentence: '彼は周りの目（　　）、大声で歌い始めた。',
    options: ['もかまわず', 'にもかかわらず', 'に対して', 'をはじめ'],
    correctIndex: 0,
    explanation: 'もかまわず = without caring about. Without caring about others\' eyes, he started singing loudly.',
    pattern: 'もかまわず',
  },
  // ～にほかならない
  {
    id: 'n2g031',
    sentence: '成功の原因は、努力した（　　）。',
    options: ['にほかならない', 'からにほかならない', 'だけにほかならない', 'ほかならない'],
    correctIndex: 0,
    explanation: 'にほかならない = nothing other than, is precisely. The reason for success is nothing other than effort.',
    pattern: 'にほかならない',
  },
  // ～に反して
  {
    id: 'n2g032',
    sentence: '予想（　　）、試合は引き分けに終わった。',
    options: ['に反して', 'に対して', 'にもかかわらず', 'に加えて'],
    correctIndex: 0,
    explanation: 'に反して = contrary to. Contrary to expectations, the game ended in a draw.',
    pattern: 'に反して',
  },
  // ～をきっかけに
  {
    id: 'n2g033',
    sentence: '留学（　　）、日本語を本格的に勉強し始めた。',
    options: ['をきっかけに', 'を通じて', 'にあたって', 'に際して'],
    correctIndex: 0,
    explanation: 'をきっかけに = triggered by, prompted by. Prompted by studying abroad, I started studying Japanese seriously.',
    pattern: 'をきっかけに',
  },
  // ～わりに
  {
    id: 'n2g034',
    sentence: '値段が安い（　　）、品質はいい。',
    options: ['わりに', 'にしては', 'にもかかわらず', 'のに'],
    correctIndex: 0,
    explanation: 'わりに = for ~, considering. Considering the price is cheap, the quality is good.',
    pattern: 'わりに',
  },
  // ～にしては
  {
    id: 'n2g035',
    sentence: '初めて作った（　　）、上手にできた。',
    options: ['にしては', 'わりに', 'にもかかわらず', 'のに'],
    correctIndex: 0,
    explanation: 'にしては = for, considering that. For a first attempt, it turned out well.',
    pattern: 'にしては',
  },
  // ～ようがない
  {
    id: 'n2g036',
    sentence: '地図もなく、道を聞く人もいないので、探し（　　）。',
    options: ['ようがない', 'わけがない', 'ざるを得ない', 'にほかならない'],
    correctIndex: 0,
    explanation: 'ようがない = have no way to ~. No map, no one to ask, so there\'s no way to find it.',
    pattern: 'ようがない',
  },
  // ～かねない
  {
    id: 'n2g037',
    sentence: 'このままでは、失敗し（　　）。',
    options: ['かねない', 'かねる', 'てならない', 'てたまらない'],
    correctIndex: 0,
    explanation: 'かねない = might well ~, there\'s a risk of. At this rate, there\'s a risk of failure.',
    pattern: 'かねない',
  },
  // ～かねる
  {
    id: 'n2g038',
    sentence: 'その件については、お答えし（　　）。',
    options: ['かねます', 'かねない', 'てたまらない', 'てならない'],
    correctIndex: 0,
    explanation: 'かねる = be unable to, find it difficult to (polite). I\'m unable to answer regarding that matter.',
    pattern: 'かねる',
  },
  // ～に応じて
  {
    id: 'n2g039',
    sentence: '状況（　　）、計画を変更することもある。',
    options: ['に応じて', 'に対して', 'にしたがって', 'によって'],
    correctIndex: 0,
    explanation: 'に応じて = according to, in response to. Plans may change according to the situation.',
    pattern: 'に応じて',
  },
  // ～をもとに
  {
    id: 'n2g040',
    sentence: 'アンケートの結果（　　）、新しいサービスを開発した。',
    options: ['をもとに', 'を通じて', 'によって', 'に基づいて'],
    correctIndex: 0,
    explanation: 'をもとに = based on, using ~ as a basis. Developed a new service based on survey results.',
    pattern: 'をもとに',
  },
]
