import type { SectionPassage } from '@/types/passage'

/**
 * Original reading passages for N3, one per section, weaving that section's
 * vocabulary into a short coherent narrative rather than a word list.
 *
 * Same shape and conventions as passages_n2.ts — see that file's header.
 */
export const PASSAGES_N3: SectionPassage[] = [
  {
    level: 'N3',
    chapter: 1,
    section: 1,
    title: '家族のかたち',
    targetWords: [
      '父親', '母親', '長女', '長男', '次女', '次男', '三女', '三男', '末っ子', '一人っ子', '姉妹',
      '一人娘', '親子', '夫婦', '夫妻', '親類', '先祖', '尊敬', 'おじ', 'おば', 'いとこ', 'おい',
      'めい', '連れる', '似る', 'そっくりな',
    ],
    sentences: [
      {
        seg: [
          { t: '私', r: 'わたし' }, { t: 'の' }, { t: '父親', r: 'ちちおや' }, { t: 'と' }, { t: '母親', r: 'ははおや' },
          { t: 'は、' }, { t: '仲', r: 'なか' }, { t: 'の' }, { t: 'よい' }, { t: '夫婦', r: 'ふうふ' },
          { t: 'だ。' },
        ],
        en: 'My father and mother are a close married couple.',
      },
      {
        seg: [
          { t: '兄', r: 'あに' }, { t: 'が' }, { t: '長男', r: 'ちょうなん' }, { t: 'で、' }, { t: '姉', r: 'あね' },
          { t: 'が' }, { t: '長女', r: 'ちょうじょ、' }, { t: '私', r: 'わたし' }, { t: 'は' }, { t: '次女', r: 'じじょ' },
          { t: 'に' }, { t: 'あたる。' },
        ],
        en: 'My older brother is the eldest son, my older sister the eldest daughter, and I am the second daughter.',
      },
      {
        seg: [
          { t: '下', r: 'した' }, { t: 'に' }, { t: '次男', r: 'じなん' }, { t: 'の' }, { t: '弟', r: 'おとうと' },
          { t: 'と' }, { t: '三女', r: 'さんじょ' }, { t: 'の' }, { t: '妹', r: 'いもうと' }, { t: 'が' },
          { t: 'いて、' }, { t: '末', r: 'すえ' }, { t: 'っ' }, { t: '子', r: 'こ' }, { t: 'は' },
          { t: 'その' }, { t: '妹', r: 'いもうと' }, { t: 'だ。' },
        ],
        en: 'Below us are my younger brother, the second son, and my sister, the third daughter, who is the youngest child.',
      },
      {
        seg: [
          { t: '三男', r: 'さんなん' }, { t: 'は' }, { t: 'いない' }, { t: 'ので、' }, { t: '男', r: 'おとこ' },
          { t: 'の' }, { t: '子', r: 'こ' }, { t: 'は' }, { t: '二人', r: 'ふたり' }, { t: 'だけ' },
          { t: 'だ。' },
        ],
        en: 'There is no third son, so there are only two boys.',
      },
      {
        seg: [
          { t: '友人', r: 'ゆうじん' }, { t: 'の' }, { t: '家', r: 'いえ' }, { t: 'は' }, { t: '一人', r: 'ひとり' },
          { t: 'っ' }, { t: '子', r: 'こ' }, { t: 'で、' }, { t: '母親', r: 'ははおや' }, { t: 'に' },
          { t: 'とって' }, { t: 'は' }, { t: '一人娘', r: 'ひとりむすめ' }, { t: 'で' }, { t: 'ある。' },
        ],
        en: 'My friend’s household has an only child, who for her mother is an only daughter.',
      },
      {
        seg: [
          { t: '姉妹', r: 'しまい' }, { t: 'で' }, { t: '出', r: 'で' }, { t: 'かける' }, { t: 'とき' },
          { t: 'は、' }, { t: 'よく' }, { t: '犬', r: 'いぬ' }, { t: 'を' }, { t: '連', r: 'つ' },
          { t: 'れて' }, { t: '行', r: 'い' }, { t: 'く。' },
        ],
        en: 'When we sisters go out, we often take the dog along.',
      },
      {
        seg: [
          { t: '親子', r: 'おやこ' }, { t: 'そろって' }, { t: '顔', r: 'かお' }, { t: 'が' }, { t: '似', r: 'に' },
          { t: 'て' }, { t: 'いる' }, { t: 'と' }, { t: '言', r: 'い' }, { t: 'われる。' },
        ],
        en: 'People say that as parent and child we look alike.',
      },
      {
        seg: [
          { t: 'いとこ' }, { t: 'の' }, { t: '顔', r: 'かお' }, { t: 'は、' }, { t: 'おじ' },
          { t: 'に' }, { t: 'そっくり' }, { t: 'だ。' },
        ],
        en: 'My cousin’s face is the spitting image of my uncle’s.',
      },
      {
        seg: [
          { t: 'おば' }, { t: 'の' }, { t: '家', r: 'いえ' }, { t: 'に' }, { t: 'は、' },
          { t: 'おい' }, { t: 'と' }, { t: 'めい' }, { t: 'が' }, { t: '遊', r: 'あそ' },
          { t: 'び' }, { t: 'に' }, { t: '来', r: 'く' }, { t: 'る。' },
        ],
        en: 'My nephew and niece come to play at my aunt’s house.',
      },
      {
        seg: [
          { t: '正月', r: 'しょうがつ' }, { t: 'に' }, { t: 'は' }, { t: '親類', r: 'しんるい' }, { t: 'が' },
          { t: '集', r: 'あつ' }, { t: 'まり、' }, { t: '先祖', r: 'せんぞ' }, { t: 'の' }, { t: '話', r: 'はなし' },
          { t: 'を' }, { t: '聞', r: 'き' }, { t: 'く。' },
        ],
        en: 'At New Year the relatives gather and we hear stories of our ancestors.',
      },
      {
        seg: [
          { t: '近所', r: 'きんじょ' }, { t: 'の' }, { t: 'ご' }, { t: '夫妻', r: 'ふさい' }, { t: 'は' },
          { t: '親切', r: 'しんせつ' }, { t: 'で、' }, { t: 'みんな' }, { t: 'が' }, { t: '尊敬', r: 'そんけい' },
          { t: 'して' }, { t: 'いる。' },
        ],
        en: 'The married couple next door are kind, and everyone respects them.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 1,
    section: 2,
    title: '友だちと知り合い',
    targetWords: [
      '親友', '仲間', '仲良し', '幼なじみ', '友情', '親しい', '知人', 'メンバー', 'つなぐ', 'つながる',
      '当時', '祝う', '遠慮', 'しょっちゅう', 'たびたび', 'たまに', 'たまたま', 'めったに', 'しばらく',
      '別々',
    ],
    sentences: [
      {
        seg: [
          { t: '小学校', r: 'しょうがっこう' }, { t: 'から' }, { t: 'の' }, { t: '幼', r: 'おさな' }, { t: 'なじみ' },
          { t: 'が、' }, { t: 'いま' }, { t: 'も' }, { t: '私', r: 'わたし' }, { t: 'の' },
          { t: '親友', r: 'しんゆう' }, { t: 'だ。' },
        ],
        en: 'A childhood friend from primary school is still my closest friend.',
      },
      {
        seg: [
          { t: '当時', r: 'とうじ' }, { t: 'の' }, { t: '仲間', r: 'なかま' }, { t: 'と' }, { t: 'は、' },
          { t: 'いま' }, { t: 'で' }, { t: 'も' }, { t: '仲良', r: 'なかよ' }, { t: 'し' },
          { t: 'で' }, { t: 'いる。' },
        ],
        en: 'I am still on good terms with my companions from those days.',
      },
      {
        seg: [
          { t: '同', r: 'おな' }, { t: 'じ' }, { t: 'チーム' }, { t: 'の' }, { t: 'メンバー' },
          { t: 'だった' }, { t: 'こと' }, { t: 'が、' }, { t: '友情', r: 'ゆうじょう' }, { t: 'の' },
          { t: '始', r: 'はじ' }, { t: 'まり' }, { t: 'だった。' },
        ],
        en: 'Being members of the same team was the beginning of our friendship.',
      },
      {
        seg: [
          { t: 'しばらく' }, { t: '会', r: 'あ' }, { t: 'わない' }, { t: '時期', r: 'じき' }, { t: 'も' },
          { t: 'あった' }, { t: 'が、' }, { t: '縁', r: 'えん' }, { t: 'は' }, { t: '切', r: 'き' },
          { t: 'れなかった。' },
        ],
        en: 'There was a period when we did not meet for a while, but the bond was never broken.',
      },
      {
        seg: [
          { t: 'いま' }, { t: 'は' }, { t: '別々', r: 'べつべつ' }, { t: 'の' }, { t: '町', r: 'まち' },
          { t: 'に' }, { t: '住', r: 'す' }, { t: 'み、' }, { t: '電話', r: 'でんわ' }, { t: 'で' },
          { t: 'つながって' }, { t: 'いる。' },
        ],
        en: 'Now we live in separate towns and stay connected by phone.',
      },
      {
        seg: [
          { t: '手', r: 'て' }, { t: 'を' }, { t: 'つなぐ' }, { t: 'よう' }, { t: 'に、' },
          { t: '言葉', r: 'ことば' }, { t: 'が' }, { t: '人', r: 'ひと' }, { t: 'と' }, { t: '人', r: 'ひと' },
          { t: 'を' }, { t: 'つなぐ。' },
        ],
        en: 'Just as we join hands, words connect one person to another.',
      },
      {
        seg: [
          { t: 'しょっちゅう' }, { t: '連絡', r: 'れんらく' }, { t: 'する' }, { t: 'わけ' }, { t: 'で' },
          { t: 'は' }, { t: 'なく、' }, { t: 'たまに' }, { t: '会', r: 'あ' }, { t: 'う' },
          { t: 'くらい' }, { t: 'だ。' },
        ],
        en: 'We do not contact each other constantly; we meet only occasionally.',
      },
      {
        seg: [
          { t: 'たびたび' }, { t: '誘', r: 'さそ' }, { t: 'って' }, { t: 'くれる' }, { t: '知人', r: 'ちじん' },
          { t: 'も' }, { t: 'いて、' }, { t: 'ありがたい。' },
        ],
        en: 'There is an acquaintance who invites me again and again, and I am grateful.',
      },
      {
        seg: [
          { t: 'めったに' }, { t: '会', r: 'あ' }, { t: 'えない' }, { t: '人', r: 'ひと' }, { t: 'と、' },
          { t: 'たまたま' }, { t: '駅', r: 'えき' }, { t: 'で' }, { t: '会', r: 'あ' }, { t: 'った。' },
        ],
        en: 'I happened to run into someone I can rarely meet, at the station.',
      },
      {
        seg: [
          { t: '親', r: 'した' }, { t: 'しい' }, { t: '相手', r: 'あいて' }, { t: 'に' }, { t: 'は' },
          { t: '遠慮', r: 'えんりょ' }, { t: 'が' }, { t: 'いらない。' },
        ],
        en: 'With someone close you need no reserve.',
      },
      {
        seg: [
          { t: '誕生日', r: 'たんじょうび' }, { t: 'を' }, { t: '祝', r: 'いわ' }, { t: 'う' }, { t: 'とき' },
          { t: 'は、' }, { t: 'みんな' }, { t: 'が' }, { t: '集', r: 'あつ' }, { t: 'まる。' },
        ],
        en: 'When we celebrate a birthday, everyone gathers.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 1,
    section: 3,
    title: '恋人',
    targetWords: [
      '彼女', '彼', '愛情', '出会い', '出会う', '付き合う', '交際', '記念', '記念日', 'けんか',
      '言い返す', '謝る', '仲直り', '連れて行く', '連れて来る', '秘密', '内緒', '好かれる', 'もてる',
      'ふる', '見合い', '恋愛', '存在',
    ],
    sentences: [
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'と' }, { t: '彼女', r: 'かのじょ' }, { t: 'の' }, { t: '出会', r: 'であ' },
          { t: 'い' }, { t: 'は、' }, { t: '友人', r: 'ゆうじん' }, { t: 'の' }, { t: '集', r: 'あつ' },
          { t: 'まり' }, { t: 'だった。' },
        ],
        en: 'His and her meeting was at a gathering of friends.',
      },
      {
        seg: [
          { t: 'そこ' }, { t: 'で' }, { t: '出会', r: 'であ' }, { t: 'って' }, { t: 'から、' },
          { t: '二人', r: 'ふたり' }, { t: 'は' }, { t: '付', r: 'つ' }, { t: 'き' }, { t: '合', r: 'あ' },
          { t: 'う' }, { t: 'よう' }, { t: 'に' }, { t: 'なった。' },
        ],
        en: 'After meeting there, the two began going out.',
      },
      {
        seg: [
          { t: '交際', r: 'こうさい' }, { t: 'を' }, { t: '始', r: 'はじ' }, { t: 'めた' }, { t: '日', r: 'ひ' },
          { t: 'を、' }, { t: '記念日', r: 'きねんび' }, { t: 'と' }, { t: 'して' }, { t: '記念', r: 'きねん' },
          { t: 'して' }, { t: 'いる。' },
        ],
        en: 'They mark the day they started dating as an anniversary.',
      },
      {
        seg: [
          { t: '小', r: 'ちい' }, { t: 'さな' }, { t: 'けんか' }, { t: 'を' }, { t: 'して、' },
          { t: 'つい' }, { t: '言', r: 'い' }, { t: 'い' }, { t: '返', r: 'かえ' }, { t: 'して' },
          { t: 'しまう' }, { t: 'こと' }, { t: 'も' }, { t: 'ある。' },
        ],
        en: 'They have small quarrels, and sometimes end up talking back.',
      },
      {
        seg: [
          { t: 'でも' }, { t: 'すぐ' }, { t: 'に' }, { t: '謝', r: 'あやま' }, { t: 'って、' },
          { t: '仲直', r: 'なかなお' }, { t: 'り' }, { t: 'する。' },
        ],
        en: 'But they apologise right away and make up.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'は' }, { t: '彼女', r: 'かのじょ' }, { t: 'を' }, { t: '家族', r: 'かぞく' },
          { t: 'に' }, { t: '会', r: 'あ' }, { t: 'わせ、' }, { t: '家', r: 'いえ' }, { t: 'に' },
          { t: '連', r: 'つ' }, { t: 'れて' }, { t: '行', r: 'い' }, { t: 'った。' },
        ],
        en: 'He introduced her to his family and took her to his home.',
      },
      {
        seg: [
          { t: '今度', r: 'こんど' }, { t: 'は' }, { t: '彼女', r: 'かのじょ' }, { t: 'が' }, { t: '彼', r: 'かれ' },
          { t: 'を' }, { t: '連', r: 'つ' }, { t: 'れて' }, { t: '来', r: 'く' }, { t: 'る' },
          { t: '番', r: 'ばん' }, { t: 'だ。' },
        ],
        en: 'Next it is her turn to bring him over.',
      },
      {
        seg: [
          { t: '二人', r: 'ふたり' }, { t: 'だけ' }, { t: 'の' }, { t: '秘密', r: 'ひみつ' }, { t: 'も' },
          { t: 'あり、' }, { t: '内緒', r: 'ないしょ' }, { t: 'の' }, { t: '話', r: 'はなし' }, { t: 'を' },
          { t: '楽', r: 'たの' }, { t: 'しむ。' },
        ],
        en: 'They have secrets just between them and enjoy confidential talk.',
      },
      {
        seg: [
          { t: '彼', r: 'かれ' }, { t: 'は' }, { t: 'だれ' }, { t: 'に' }, { t: 'でも' },
          { t: '好', r: 'す' }, { t: 'かれ、' }, { t: '昔', r: 'むかし' }, { t: 'から' }, { t: 'もてる' },
          { t: '人', r: 'ひと' }, { t: 'だ。' },
        ],
        en: 'He is liked by everyone and has always been popular.',
      },
      {
        seg: [
          { t: 'ふられた' }, { t: 'こと' }, { t: 'も' }, { t: 'ある' }, { t: 'そう' },
          { t: 'だ' }, { t: 'が、' }, { t: 'いま' }, { t: 'は' }, { t: '幸', r: 'しあわ' },
          { t: 'せ' }, { t: 'らしい。' },
        ],
        en: 'He says he has been turned down before, but now he seems happy.',
      },
      {
        seg: [
          { t: '見合', r: 'みあ' }, { t: 'い' }, { t: 'で' }, { t: '始', r: 'はじ' }, { t: 'まる' },
          { t: '恋愛', r: 'れんあい' }, { t: 'も' }, { t: 'あり、' }, { t: '形', r: 'かたち' }, { t: 'は' },
          { t: 'さまざま' }, { t: 'だ。' },
        ],
        en: 'Some romances begin with a matchmaking meeting; the forms are various.',
      },
      {
        seg: [
          { t: '大切', r: 'たいせつ' }, { t: 'な' }, { t: '存在', r: 'そんざい' }, { t: 'に' }, { t: '向', r: 'む' },
          { t: 'ける' }, { t: '愛情', r: 'あいじょう' }, { t: 'は、' }, { t: '静', r: 'しず' }, { t: 'か' },
          { t: 'な' }, { t: 'もの' }, { t: 'だ。' },
        ],
        en: 'The affection directed at someone who matters is a quiet thing.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 1,
    section: 4,
    title: '人とかかわる',
    targetWords: [
      '相手', '助ける', '助かる', '支える', '誘う', '待ち合わせる', '交換', '交流', '断る', '預ける',
      '預かる', 'かわいがる', '甘やかす', 'ついて来る', '抱く', '話しかける', '無視', '振り向く', 'いただく',
      'くださる', '差し上げる', 'やる', '与える', '味方', '悪口', '我々', 'まね',
    ],
    sentences: [
      {
        seg: [
          { t: '駅', r: 'えき' }, { t: 'で' }, { t: '待', r: 'ま' }, { t: 'ち' }, { t: '合', r: 'あ' },
          { t: 'わせて、' }, { t: '相手', r: 'あいて' }, { t: 'の' }, { t: '荷物', r: 'にもつ' }, { t: 'を' },
          { t: '持', r: 'も' }, { t: 'つ' }, { t: 'の' }, { t: 'を' }, { t: '助', r: 'たす' },
          { t: 'けた。' },
        ],
        en: 'We arranged to meet at the station, and I helped carry the other person’s luggage.',
      },
      {
        seg: [
          { t: '重', r: 'おも' }, { t: 'かった' }, { t: 'ので、' }, { t: 'とても' }, { t: '助', r: 'たす' },
          { t: 'かった' }, { t: 'と' }, { t: '言', r: 'い' }, { t: 'われた。' },
        ],
        en: 'It was heavy, so they said it was a great help.',
      },
      {
        seg: [
          { t: '困', r: 'こま' }, { t: 'って' }, { t: 'いる' }, { t: '人', r: 'ひと' }, { t: 'を' },
          { t: '支', r: 'ささ' }, { t: 'える' }, { t: 'の' }, { t: 'は、' }, { t: '我々', r: 'われわれ' },
          { t: 'に' }, { t: 'できる' }, { t: 'こと' }, { t: 'だ。' },
        ],
        en: 'Supporting someone in trouble is something we can do.',
      },
      {
        seg: [
          { t: '食事', r: 'しょくじ' }, { t: 'に' }, { t: '誘', r: 'さそ' }, { t: 'われた' }, { t: 'が、' },
          { t: '用事', r: 'ようじ' }, { t: 'が' }, { t: 'あって' }, { t: '断', r: 'ことわ' }, { t: 'った。' },
        ],
        en: 'I was invited to a meal but declined because I had an errand.',
      },
      {
        seg: [
          { t: '友人', r: 'ゆうじん' }, { t: 'に' }, { t: '犬', r: 'いぬ' }, { t: 'を' }, { t: '預', r: 'あず' },
          { t: 'け、' }, { t: 'かわり' }, { t: 'に' }, { t: '荷物', r: 'にもつ' }, { t: 'を' },
          { t: '預', r: 'あず' }, { t: 'かった。' },
        ],
        en: 'I left my dog in a friend’s care and in return looked after their luggage.',
      },
      {
        seg: [
          { t: 'その' }, { t: '犬', r: 'いぬ' }, { t: 'を' }, { t: 'みんな' }, { t: 'が' },
          { t: 'かわいがり、' }, { t: '少', r: 'すこ' }, { t: 'し' }, { t: '甘', r: 'あま' }, { t: 'やかして' },
          { t: 'しまう。' },
        ],
        en: 'Everyone dotes on that dog and spoils it a little.',
      },
      {
        seg: [
          { t: '散歩', r: 'さんぽ' }, { t: 'に' }, { t: '行', r: 'い' }, { t: 'く' }, { t: 'と、' },
          { t: 'いつも' }, { t: 'ついて' }, { t: '来', r: 'く' }, { t: 'る。' },
        ],
        en: 'When I go for a walk, it always comes along.',
      },
      {
        seg: [
          { t: '子', r: 'こ' }, { t: 'ども' }, { t: 'を' }, { t: '抱', r: 'だ' }, { t: 'いた' },
          { t: '母親', r: 'ははおや' }, { t: 'に、' }, { t: '店員', r: 'てんいん' }, { t: 'が' }, { t: '話', r: 'はな' },
          { t: 'しかけた。' },
        ],
        en: 'A shop assistant spoke to a mother holding her child.',
      },
      {
        seg: [
          { t: '声', r: 'こえ' }, { t: 'を' }, { t: 'かけられて' }, { t: '振', r: 'ふ' }, { t: 'り' },
          { t: '向', r: 'む' }, { t: 'く' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: 'いれば、' },
          { t: '無視', r: 'むし' }, { t: 'する' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: 'いる。' },
        ],
        en: 'Some people turn around when called, and others ignore it.',
      },
      {
        seg: [
          { t: '先生', r: 'せんせい' }, { t: 'から' }, { t: '本', r: 'ほん' }, { t: 'を' }, { t: 'いただき、' },
          { t: 'お礼', r: 'れい' }, { t: 'に' }, { t: '花', r: 'はな' }, { t: 'を' }, { t: '差', r: 'さ' },
          { t: 'し' }, { t: '上', r: 'あ' }, { t: 'げた。' },
        ],
        en: 'I received a book from my teacher and gave flowers in thanks.',
      },
      {
        seg: [
          { t: '先生', r: 'せんせい' }, { t: 'が' }, { t: 'くださった' }, { t: '言葉', r: 'ことば' }, { t: 'が、' },
          { t: '勇気', r: 'ゆうき' }, { t: 'を' }, { t: '与', r: 'あた' }, { t: 'えて' }, { t: 'くれた。' },
        ],
        en: 'The words my teacher gave me granted me courage.',
      },
      {
        seg: [
          { t: '犬', r: 'いぬ' }, { t: 'に' }, { t: 'えさ' }, { t: 'を' }, { t: 'やり' },
          { t: 'ながら、' }, { t: 'その' }, { t: '仕草', r: 'しぐさ' }, { t: 'を' }, { t: 'まね' },
          { t: 'して' }, { t: '笑', r: 'わら' }, { t: 'った。' },
        ],
        en: 'While giving the dog its food, I imitated its gestures and laughed.',
      },
      {
        seg: [
          { t: '人', r: 'ひと' }, { t: 'の' }, { t: '悪口', r: 'わるぐち' }, { t: 'を' }, { t: '言', r: 'い' },
          { t: 'う' }, { t: 'より、' }, { t: '味方', r: 'みかた' }, { t: 'で' }, { t: 'いたい。' },
        ],
        en: 'Rather than speaking ill of people, I want to be on their side.',
      },
      {
        seg: [
          { t: '手紙', r: 'てがみ' }, { t: 'の' }, { t: '交換', r: 'こうかん' }, { t: 'を' }, { t: '通', r: 'つう' },
          { t: 'じて、' }, { t: '学校', r: 'がっこう' }, { t: '同士', r: 'どうし' }, { t: 'の' }, { t: '交流', r: 'こうりゅう' },
          { t: 'が' }, { t: '続', r: 'つづ' }, { t: 'いて' }, { t: 'いる。' },
        ],
        en: 'Through exchanging letters, interaction between the schools continues.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 1,
    section: 5,
    title: 'どんな人',
    targetWords: [
      '名字', '性別', '年齢', '高齢', '老人', '幼児', '出身', '生まれ', '育ち', '行儀', 'マナー',
      '個人', 'アドレス', '本人', '独身', '主婦', 'フリーター', '無職',
    ],
    sentences: [
      {
        seg: [
          { t: '用紙', r: 'ようし' }, { t: 'に' }, { t: 'は' }, { t: '名字', r: 'みょうじ' }, { t: 'と' },
          { t: '性別', r: 'せいべつ、' }, { t: '年齢', r: 'ねんれい' }, { t: 'を' }, { t: '書', r: 'か' }, { t: 'く。' },
        ],
        en: 'On the form you write your surname, gender and age.',
      },
      {
        seg: [
          { t: '出身', r: 'しゅっしん' }, { t: 'は' }, { t: '北', r: 'きた' }, { t: 'の' }, { t: '町', r: 'まち' },
          { t: 'で、' }, { t: '生', r: 'う' }, { t: 'まれ' }, { t: 'も' }, { t: '育', r: 'そだ' },
          { t: 'ち' }, { t: 'も' }, { t: 'そこ' }, { t: 'だ。' },
        ],
        en: 'I am from a northern town; both my birth and upbringing were there.',
      },
      {
        seg: [
          { t: '高齢', r: 'こうれい' }, { t: 'の' }, { t: '老人', r: 'ろうじん' }, { t: 'に' }, { t: '席', r: 'せき' },
          { t: 'を' }, { t: 'ゆずる' }, { t: 'の' }, { t: 'は、' }, { t: 'マナー' },
          { t: 'の' }, { t: '一', r: 'ひと' }, { t: 'つ' }, { t: 'だ。' },
        ],
        en: 'Giving up your seat to an elderly person is one of the good manners.',
      },
      {
        seg: [
          { t: '幼児', r: 'ようじ' }, { t: 'の' }, { t: 'うち' }, { t: 'から、' }, { t: '行儀', r: 'ぎょうぎ' },
          { t: 'は' }, { t: '自然', r: 'しぜん' }, { t: 'に' }, { t: '身', r: 'み' }, { t: 'に' },
          { t: 'つく。' },
        ],
        en: 'From infancy, manners are naturally acquired.',
      },
      {
        seg: [
          { t: '個人', r: 'こじん' }, { t: 'の' }, { t: 'アドレス' }, { t: 'は、' }, { t: '本人', r: 'ほんにん' },
          { t: 'の' }, { t: '許可', r: 'きょか' }, { t: 'なく' }, { t: '教', r: 'おし' }, { t: 'えない。' },
        ],
        en: 'I do not share an individual’s address without the person’s own permission.',
      },
      {
        seg: [
          { t: '姉', r: 'あね' }, { t: 'は' }, { t: 'まだ' }, { t: '独身', r: 'どくしん' }, { t: 'で、' },
          { t: '兄', r: 'あに' }, { t: 'の' }, { t: '妻', r: 'つま' }, { t: 'は' }, { t: '主婦', r: 'しゅふ' },
          { t: 'を' }, { t: 'して' }, { t: 'いる。' },
        ],
        en: 'My sister is still single, and my brother’s wife is a homemaker.',
      },
      {
        seg: [
          { t: '友人', r: 'ゆうじん' }, { t: 'の' }, { t: '一人', r: 'ひとり' }, { t: 'は' }, { t: 'フリーター' },
          { t: 'で、' }, { t: 'もう' }, { t: '一人', r: 'ひとり' }, { t: 'は' }, { t: 'いま' },
          { t: '無職', r: 'むしょく' }, { t: 'だ。' },
        ],
        en: 'One friend lives on part-time work, and another is currently unemployed.',
      },
      {
        seg: [
          { t: 'どんな' }, { t: '立場', r: 'たちば' }, { t: 'でも、' }, { t: 'その' }, { t: '人', r: 'ひと' },
          { t: 'が' }, { t: 'どんな' }, { t: '人', r: 'ひと' }, { t: 'か' }, { t: 'が' },
          { t: '大切', r: 'たいせつ' }, { t: 'だ。' },
        ],
        en: 'Whatever one’s position, what matters is what kind of person they are.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 2,
    section: 1,
    title: '日づけと時間',
    targetWords: [
      '本日', '明日', '前日', '翌日', 'しあさって', '先おととい', '昨日', '昨年', '先日', '再来週',
      '先々週', '上旬', '中旬', '下旬', '深夜', '未来', '数日', '以降',
    ],
    sentences: [
      {
        seg: [
          { t: '本日', r: 'ほんじつ' }, { t: 'は' }, { t: '六月', r: 'ろくがつ' }, { t: 'の' }, { t: '上旬', r: 'じょうじゅん、' },
          { t: '会議', r: 'かいぎ' }, { t: 'の' }, { t: '予定', r: 'よてい' }, { t: 'を' }, { t: '決', r: 'き' },
          { t: 'める' }, { t: '日', r: 'ひ' }, { t: 'だ。' },
        ],
        en: 'Today is early June, the day for deciding the meeting schedule.',
      },
      {
        seg: [
          { t: '昨日', r: 'さくじつ' }, { t: '届', r: 'とど' }, { t: 'いた' }, { t: '資料', r: 'しりょう' }, { t: 'を' },
          { t: '読', r: 'よ' }, { t: 'み、' }, { t: '明日', r: 'あす' }, { t: 'まで' }, { t: 'に' },
          { t: '返事', r: 'へんじ' }, { t: 'を' }, { t: '出', r: 'だ' }, { t: 'す。' },
        ],
        en: 'I will read the documents that arrived yesterday and reply by tomorrow.',
      },
      {
        seg: [
          { t: '前日', r: 'ぜんじつ' }, { t: 'に' }, { t: '準備', r: 'じゅんび' }, { t: 'を' }, { t: '済', r: 'す' },
          { t: 'ませ、' }, { t: '翌日', r: 'よくじつ' }, { t: 'は' }, { t: '早', r: 'はや' }, { t: 'く' },
          { t: '出', r: 'で' }, { t: 'られる' }, { t: 'よう' }, { t: 'に' }, { t: 'する。' },
        ],
        en: 'I finish the preparation the day before so I can leave early the next day.',
      },
      {
        seg: [
          { t: 'しあさって' }, { t: 'は' }, { t: '中旬', r: 'ちゅうじゅん' }, { t: 'に' }, { t: '入', r: 'はい' },
          { t: 'り、' }, { t: '下旬', r: 'げじゅん' }, { t: 'に' }, { t: 'は' }, { t: '出張', r: 'しゅっちょう' },
          { t: 'が' }, { t: 'ある。' },
        ],
        en: 'Three days from now we enter mid-month, and at the end of the month there is a business trip.',
      },
      {
        seg: [
          { t: '先々週', r: 'せんせんしゅう' }, { t: 'も' }, { t: '先日', r: 'せんじつ' }, { t: 'も' }, { t: '忙', r: 'いそが' },
          { t: 'しく、' }, { t: '深夜', r: 'しんや' }, { t: 'まで' }, { t: '仕事', r: 'しごと' }, { t: 'が' },
          { t: '続', r: 'つづ' }, { t: 'いた。' },
        ],
        en: 'Both the week before last and the other day were busy, with work continuing late into the night.',
      },
      {
        seg: [
          { t: '再来週', r: 'さらいしゅう' }, { t: '以降', r: 'いこう' }, { t: 'は' }, { t: '少', r: 'すこ' }, { t: 'し' },
          { t: '落', r: 'お' }, { t: 'ち' }, { t: '着', r: 'つ' }, { t: 'く' }, { t: 'だろう。' },
        ],
        en: 'From the week after next onward things should settle down a little.',
      },
      {
        seg: [
          { t: '昨年', r: 'さくねん' }, { t: 'の' }, { t: 'いま' }, { t: 'ごろ' }, { t: 'を' },
          { t: '思', r: 'おも' }, { t: 'い' }, { t: '出', r: 'だ' }, { t: 'す' }, { t: 'と、' },
          { t: '数日', r: 'すうじつ' }, { t: 'で' }, { t: '状況', r: 'じょうきょう' }, { t: 'が' }, { t: '変', r: 'か' },
          { t: 'わった。' },
        ],
        en: 'Remembering this time last year, the situation changed in a few days.',
      },
      {
        seg: [
          { t: '先', r: 'さき' }, { t: 'おととい' }, { t: '立', r: 'た' }, { t: 'てた' }, { t: '計画', r: 'けいかく' },
          { t: 'が、' }, { t: '未来', r: 'みらい' }, { t: 'を' }, { t: '少', r: 'すこ' }, { t: 'し' },
          { t: '変', r: 'か' }, { t: 'える' }, { t: 'か' }, { t: 'も' }, { t: 'しれない。' },
        ],
        en: 'The plan I made three days ago may change the future a little.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 2,
    section: 2,
    title: '食べること',
    targetWords: [
      '朝食', 'モーニング', '昼食', 'ランチ', '夕食', 'ディナー', 'デザート', 'おやつ', 'おかず', '弁当',
      '自炊', '外食', 'グルメ', 'おごる', '食欲', '注文', '乾杯', 'かむ', '味わう', 'お代わり',
      '残す', '残り物', 'もったいない', '済ませる', '済む', '量', 'バランス',
    ],
    sentences: [
      {
        seg: [
          { t: '朝食', r: 'ちょうしょく' }, { t: 'は' }, { t: '家', r: 'いえ' }, { t: 'で' }, { t: '済', r: 'す' },
          { t: 'ませ、' }, { t: '昼食', r: 'ちゅうしょく' }, { t: 'は' }, { t: '弁当', r: 'べんとう' }, { t: 'を' },
          { t: '持', r: 'も' }, { t: 'って' }, { t: '行', r: 'い' }, { t: 'く。' },
        ],
        en: 'I have breakfast at home and take a boxed lunch for lunch.',
      },
      {
        seg: [
          { t: '近', r: 'ちか' }, { t: 'く' }, { t: 'の' }, { t: '店', r: 'みせ' }, { t: 'の' },
          { t: 'モーニング' }, { t: 'も' }, { t: '安', r: 'やす' }, { t: 'く、' }, { t: 'たまに' },
          { t: 'そこ' }, { t: 'で' }, { t: '済', r: 'す' }, { t: 'む。' },
        ],
        en: 'The morning set at a nearby shop is cheap too, and sometimes that suffices.',
      },
      {
        seg: [
          { t: '同僚', r: 'どうりょう' }, { t: 'と' }, { t: 'ランチ' }, { t: 'に' }, { t: '行', r: 'い' },
          { t: 'き、' }, { t: '日替', r: 'ひが' }, { t: 'わり' }, { t: 'を' }, { t: '注文', r: 'ちゅうもん' },
          { t: 'した。' },
        ],
        en: 'I went for lunch with a colleague and ordered the daily special.',
      },
      {
        seg: [
          { t: '夕食', r: 'ゆうしょく' }, { t: 'は' }, { t: '自炊', r: 'じすい' }, { t: 'が' }, { t: '多', r: 'おお' },
          { t: 'い' }, { t: 'が、' }, { t: '週末', r: 'しゅうまつ' }, { t: 'は' }, { t: '外食', r: 'がいしょく' },
          { t: 'も' }, { t: 'する。' },
        ],
        en: 'For dinner I mostly cook for myself, but at weekends I eat out too.',
      },
      {
        seg: [
          { t: '友人', r: 'ゆうじん' }, { t: 'は' }, { t: 'グルメ' }, { t: 'で、' }, { t: 'ディナー' },
          { t: 'の' }, { t: '店', r: 'みせ' }, { t: 'を' }, { t: 'よく' }, { t: '知', r: 'し' },
          { t: 'って' }, { t: 'いる。' },
        ],
        en: 'My friend is a foodie and knows dinner restaurants well.',
      },
      {
        seg: [
          { t: '先日', r: 'せんじつ' }, { t: 'は' }, { t: '彼', r: 'かれ' }, { t: 'が' }, { t: 'おごって' },
          { t: 'くれ、' }, { t: 'みんな' }, { t: 'で' }, { t: '乾杯', r: 'かんぱい' }, { t: 'した。' },
        ],
        en: 'The other day he treated us, and we all drank a toast.',
      },
      {
        seg: [
          { t: '食欲', r: 'しょくよく' }, { t: 'が' }, { t: 'ある' }, { t: '日', r: 'ひ' }, { t: 'は、' },
          { t: 'ご飯', r: 'はん' }, { t: 'を' }, { t: 'お' }, { t: '代', r: 'か' }, { t: 'わり' },
          { t: 'する。' },
        ],
        en: 'On days when I have an appetite, I have a second helping of rice.',
      },
      {
        seg: [
          { t: 'よく' }, { t: 'かんで' }, { t: '味', r: 'あじ' }, { t: 'わえば、' }, { t: '少', r: 'すく' },
          { t: 'ない' }, { t: '量', r: 'りょう' }, { t: 'でも' }, { t: '満足', r: 'まんぞく' }, { t: 'できる。' },
        ],
        en: 'If you chew well and savour it, even a small portion is satisfying.',
      },
      {
        seg: [
          { t: 'おかず' }, { t: 'を' }, { t: '残', r: 'のこ' }, { t: 'す' }, { t: 'の' },
          { t: 'は' }, { t: 'もったいない' }, { t: 'ので、' }, { t: '残', r: 'のこ' }, { t: 'り' },
          { t: '物', r: 'もの' }, { t: 'は' }, { t: '翌日', r: 'よくじつ' }, { t: 'に' }, { t: '食', r: 'た' },
          { t: 'べる。' },
        ],
        en: 'It is a shame to leave side dishes uneaten, so I eat the leftovers the next day.',
      },
      {
        seg: [
          { t: 'おやつ' }, { t: 'と' }, { t: 'デザート' }, { t: 'は' }, { t: '別', r: 'べつ' },
          { t: 'だ' }, { t: 'と、' }, { t: '妹', r: 'いもうと' }, { t: 'は' }, { t: '言', r: 'い' },
          { t: 'う。' },
        ],
        en: 'My sister says that an afternoon snack and dessert are different things.',
      },
      {
        seg: [
          { t: '栄養', r: 'えいよう' }, { t: 'の' }, { t: 'バランス' }, { t: 'を' }, { t: '考', r: 'かんが' },
          { t: 'える' }, { t: 'の' }, { t: 'が、' }, { t: 'いちばん' }, { t: '難', r: 'むずか' },
          { t: 'しい。' },
        ],
        en: 'Thinking about nutritional balance is the hardest part.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 2,
    section: 3,
    title: '台所の道具',
    targetWords: [
      'なべ', 'フライパン', '包丁', 'まな板', 'おたま', 'しゃもじ', '大さじ', '炊飯器', '流し台',
      '電子レンジ', 'ガスレンジ', '調味料', 'サラダ油', '食品', '切らす', 'くさる', 'アルミホイル', 'ラップ',
      'おしぼり',
    ],
    sentences: [
      {
        seg: [
          { t: 'まな板', r: 'まないた' }, { t: 'の' }, { t: '上', r: 'うえ' }, { t: 'で、' }, { t: '包丁', r: 'ほうちょう' },
          { t: 'を' }, { t: '使', r: 'つか' }, { t: 'って' }, { t: '野菜', r: 'やさい' }, { t: 'を' },
          { t: '切', r: 'き' }, { t: 'る。' },
        ],
        en: 'On the cutting board, I cut vegetables with a kitchen knife.',
      },
      {
        seg: [
          { t: 'フライパン' }, { t: 'に' }, { t: 'サラダ油', r: 'あぶら' }, { t: 'を' }, { t: '大', r: 'おお' },
          { t: 'さじ' }, { t: '一杯', r: 'いっぱい' }, { t: '入', r: 'い' }, { t: 'れ、' }, { t: 'ガスレンジ' },
          { t: 'に' }, { t: 'かける。' },
        ],
        en: 'I put a tablespoon of cooking oil in the frying pan and set it on the gas stove.',
      },
      {
        seg: [
          { t: 'なべ' }, { t: 'の' }, { t: '中', r: 'なか' }, { t: 'を' }, { t: 'おたま' },
          { t: 'で' }, { t: 'まぜ、' }, { t: '味', r: 'あじ' }, { t: 'を' }, { t: 'ととのえる。' },
        ],
        en: 'I stir the inside of the pot with a ladle and adjust the taste.',
      },
      {
        seg: [
          { t: '炊飯器', r: 'すいはんき' }, { t: 'の' }, { t: 'ご飯', r: 'はん' }, { t: 'を、' }, { t: 'しゃもじ' },
          { t: 'で' }, { t: '軽', r: 'かる' }, { t: 'く' }, { t: 'まぜる。' },
        ],
        en: 'I lightly mix the rice in the rice cooker with a rice paddle.',
      },
      {
        seg: [
          { t: '残', r: 'のこ' }, { t: 'った' }, { t: '分', r: 'ぶん' }, { t: 'は' }, { t: 'ラップ' },
          { t: 'を' }, { t: 'かけ、' }, { t: '電子', r: 'でんし' }, { t: 'レンジ' }, { t: 'で' },
          { t: '温', r: 'あたた' }, { t: 'め' }, { t: '直', r: 'なお' }, { t: 'す。' },
        ],
        en: 'I cover what is left with plastic wrap and reheat it in the microwave.',
      },
      {
        seg: [
          { t: '魚', r: 'さかな' }, { t: 'は' }, { t: 'アルミホイル' }, { t: 'に' }, { t: '包', r: 'つつ' },
          { t: 'んで' }, { t: '焼', r: 'や' }, { t: 'く' }, { t: 'と' }, { t: 'よい。' },
        ],
        en: 'It is good to wrap fish in aluminium foil and grill it.',
      },
      {
        seg: [
          { t: '調味料', r: 'ちょうみりょう' }, { t: 'を' }, { t: '切', r: 'き' }, { t: 'らして' }, { t: 'しまい、' },
          { t: '買', r: 'か' }, { t: 'い' }, { t: 'に' }, { t: '行', r: 'い' }, { t: 'った。' },
        ],
        en: 'I ran out of seasoning and went to buy some.',
      },
      {
        seg: [
          { t: '食品', r: 'しょくひん' }, { t: 'は' }, { t: 'くさる' }, { t: '前', r: 'まえ' }, { t: 'に' },
          { t: '使', r: 'つか' }, { t: 'い' }, { t: '切', r: 'き' }, { t: 'りたい。' },
        ],
        en: 'I want to use up food before it goes bad.',
      },
      {
        seg: [
          { t: '流し台', r: 'ながしだい' }, { t: 'を' }, { t: 'きれい' }, { t: 'に' }, { t: 'して、' },
          { t: 'おしぼり' }, { t: 'を' }, { t: '用意', r: 'ようい' }, { t: 'する。' },
        ],
        en: 'I clean the sink and prepare wet towels.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 2,
    section: 4,
    title: '作り方',
    targetWords: [
      '刻む', '割る', 'むく', '加える', '少々', '揚げる', '煮る', 'ゆでる', '蒸す', 'くるむ',
      'にぎる', '熱する', 'こげる', '取り出す', '塗る', '温める', '冷やす', 'ぬるい', '水分', '沸かす',
      '注ぐ', '味見', '手間', '手軽な', 'でき上がり', '分ける', 'つまむ', '塩辛い', 'すっぱい', '冷凍',
    ],
    sentences: [
      {
        seg: [
          { t: '玉', r: 'たま' }, { t: 'ねぎ' }, { t: 'の' }, { t: '皮', r: 'かわ' }, { t: 'を' },
          { t: 'むき、' }, { t: '細', r: 'こま' }, { t: 'かく' }, { t: '刻', r: 'きざ' }, { t: 'む。' },
        ],
        en: 'I peel the onion and chop it finely.',
      },
      {
        seg: [
          { t: '卵', r: 'たまご' }, { t: 'を' }, { t: '割', r: 'わ' }, { t: 'って' }, { t: '加', r: 'くわ' },
          { t: 'え、' }, { t: '塩', r: 'しお' }, { t: 'を' }, { t: '少々', r: 'しょうしょう' }, { t: 'ふる。' },
        ],
        en: 'I crack in an egg, add it, and sprinkle a little salt.',
      },
      {
        seg: [
          { t: '湯', r: 'ゆ' }, { t: 'を' }, { t: '沸', r: 'わ' }, { t: 'かして' }, { t: '野菜', r: 'やさい' },
          { t: 'を' }, { t: 'ゆで、' }, { t: '別', r: 'べつ' }, { t: 'の' }, { t: 'なべ' },
          { t: 'で' }, { t: '肉', r: 'にく' }, { t: 'を' }, { t: '煮', r: 'に' }, { t: 'る。' },
        ],
        en: 'I boil water and boil the vegetables, and simmer the meat in another pot.',
      },
      {
        seg: [
          { t: '油', r: 'あぶら' }, { t: 'を' }, { t: 'よく' }, { t: '熱', r: 'ねっ' }, { t: 'して' },
          { t: 'から' }, { t: '揚', r: 'あ' }, { t: 'げる' }, { t: 'と、' }, { t: 'こげ' },
          { t: 'にくい。' },
        ],
        en: 'If you heat the oil well before deep-frying, it is less likely to burn.',
      },
      {
        seg: [
          { t: '蒸', r: 'む' }, { t: 'した' }, { t: 'ご飯', r: 'はん' }, { t: 'を' }, { t: 'にぎり、' },
          { t: 'のり' }, { t: 'で' }, { t: 'くるむ。' },
        ],
        en: 'I shape the steamed rice with my hands and wrap it in seaweed.',
      },
      {
        seg: [
          { t: 'パン' }, { t: 'に' }, { t: 'バター' }, { t: 'を' }, { t: '塗', r: 'ぬ' },
          { t: 'り、' }, { t: 'スープ' }, { t: 'を' }, { t: '器', r: 'うつわ' }, { t: 'に' },
          { t: '注', r: 'そそ' }, { t: 'ぐ。' },
        ],
        en: 'I spread butter on the bread and pour the soup into a bowl.',
      },
      {
        seg: [
          { t: 'でき' }, { t: '上', r: 'あ' }, { t: 'がり' }, { t: 'の' }, { t: '前', r: 'まえ' },
          { t: 'に' }, { t: '味見', r: 'あじみ' }, { t: 'を' }, { t: 'して、' }, { t: '塩辛', r: 'しおから' },
          { t: 'すぎない' }, { t: 'か' }, { t: '確', r: 'たし' }, { t: 'かめる。' },
        ],
        en: 'Before it is finished I taste it and check that it is not too salty.',
      },
      {
        seg: [
          { t: 'すっぱい' }, { t: '味', r: 'あじ' }, { t: 'が' }, { t: '足', r: 'た' }, { t: 'りない' },
          { t: 'とき' }, { t: 'は、' }, { t: 'レモン' }, { t: 'を' }, { t: 'つまんで' },
          { t: '加', r: 'くわ' }, { t: 'える。' },
        ],
        en: 'When the sour taste is lacking, I pick up a lemon and add some.',
      },
      {
        seg: [
          { t: '熱', r: 'あつ' }, { t: 'い' }, { t: 'もの' }, { t: 'は' }, { t: '少', r: 'すこ' },
          { t: 'し' }, { t: '冷', r: 'ひ' }, { t: 'やし、' }, { t: 'ぬるい' }, { t: 'もの' },
          { t: 'は' }, { t: '温', r: 'あたた' }, { t: 'め' }, { t: '直', r: 'なお' }, { t: 'す。' },
        ],
        en: 'I cool hot things a little and reheat lukewarm ones.',
      },
      {
        seg: [
          { t: 'なべ' }, { t: 'から' }, { t: '取', r: 'と' }, { t: 'り' }, { t: '出', r: 'だ' },
          { t: 'して' }, { t: '皿', r: 'さら' }, { t: 'に' }, { t: '分', r: 'わ' }, { t: 'け、' },
          { t: '水分', r: 'すいぶん' }, { t: 'を' }, { t: 'きる。' },
        ],
        en: 'I take it out of the pot, divide it onto plates, and drain the moisture.',
      },
      {
        seg: [
          { t: '手間', r: 'てま' }, { t: 'の' }, { t: 'かかる' }, { t: '料理', r: 'りょうり' }, { t: 'も' },
          { t: 'ある' }, { t: 'が、' }, { t: '手軽', r: 'てがる' }, { t: 'な' }, { t: 'もの' },
          { t: 'は' }, { t: '冷凍', r: 'れいとう' }, { t: 'して' }, { t: 'おく。' },
        ],
        en: 'Some dishes take time and effort, but simple ones I freeze in advance.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 2,
    section: 5,
    title: '家事',
    targetWords: [
      'ちらかる', '片付ける', '清潔な', '掃く', 'ほうき', 'ちりとり', '掃除機', 'ふく', 'ぞうきん',
      'バケツ', 'しぼる', 'こぼす', '洗剤', 'かび', 'ほこり', 'みがく', 'ブラシ', 'あわ', '臭う',
      '洗濯物', '汚れ', '干す', '乾燥', 'たたむ', 'アイロン', '敷く', '育児', '起こす', '糸', '針',
      '生ごみ', '空き缶', '出す',
    ],
    sentences: [
      {
        seg: [
          { t: '部屋', r: 'へや' }, { t: 'が' }, { t: 'ちらかって' }, { t: 'いた' }, { t: 'ので、' },
          { t: 'まず' }, { t: '片付', r: 'かたづ' }, { t: 'ける' }, { t: 'こと' }, { t: 'に' },
          { t: 'した。' },
        ],
        en: 'The room was messy, so first I decided to tidy up.',
      },
      {
        seg: [
          { t: 'ほうき' }, { t: 'で' }, { t: '掃', r: 'は' }, { t: 'き、' }, { t: 'ちりとり' },
          { t: 'で' }, { t: 'ごみ' }, { t: 'を' }, { t: '集', r: 'あつ' }, { t: 'め、' },
          { t: '最後', r: 'さいご' }, { t: 'に' }, { t: '掃除機', r: 'そうじき' }, { t: 'を' }, { t: 'かける。' },
        ],
        en: 'I sweep with a broom, collect the rubbish with a dustpan, and finally vacuum.',
      },
      {
        seg: [
          { t: 'バケツ' }, { t: 'の' }, { t: '水', r: 'みず' }, { t: 'で' }, { t: 'ぞうきん' },
          { t: 'を' }, { t: 'しぼり、' }, { t: '棚', r: 'たな' }, { t: 'の' }, { t: 'ほこり' },
          { t: 'を' }, { t: 'ふく。' },
        ],
        en: 'I wring out a cloth in the bucket water and wipe the dust from the shelf.',
      },
      {
        seg: [
          { t: '洗剤', r: 'せんざい' }, { t: 'の' }, { t: 'あわ' }, { t: 'で' }, { t: 'ブラシ' },
          { t: 'を' }, { t: '使', r: 'つか' }, { t: 'い、' }, { t: 'かび' }, { t: 'を' },
          { t: 'みがき' }, { t: '落', r: 'お' }, { t: 'とす。' },
        ],
        en: 'Using a brush with detergent lather, I scrub off the mould.',
      },
      {
        seg: [
          { t: '水', r: 'みず' }, { t: 'を' }, { t: 'こぼして' }, { t: 'しまった' }, { t: 'が、' },
          { t: 'すぐ' }, { t: 'ふけば' }, { t: '汚', r: 'よご' }, { t: 'れ' }, { t: 'は' },
          { t: '残', r: 'のこ' }, { t: 'らない。' },
        ],
        en: 'I spilled water, but if you wipe it right away no stain remains.',
      },
      {
        seg: [
          { t: '臭', r: 'にお' }, { t: 'い' }, { t: 'が' }, { t: '気', r: 'き' }, { t: 'に' },
          { t: 'なる' }, { t: '生', r: 'なま' }, { t: 'ごみ' }, { t: 'と' }, { t: '空', r: 'あ' },
          { t: 'き' }, { t: '缶', r: 'かん' }, { t: 'は、' }, { t: '朝', r: 'あさ' }, { t: 'に' },
          { t: '出', r: 'だ' }, { t: 'す。' },
        ],
        en: 'Food waste and empty cans, whose smell bothers me, I take out in the morning.',
      },
      {
        seg: [
          { t: '洗濯物', r: 'せんたくもの' }, { t: 'を' }, { t: '干', r: 'ほ' }, { t: 'し、' }, { t: '乾燥', r: 'かんそう' },
          { t: 'したら' }, { t: 'たたむ。' },
        ],
        en: 'I hang out the laundry and fold it once it has dried.',
      },
      {
        seg: [
          { t: 'しわ' }, { t: 'が' }, { t: 'ついた' }, { t: 'シャツ' }, { t: 'に' },
          { t: 'は、' }, { t: 'アイロン' }, { t: 'を' }, { t: 'かける。' },
        ],
        en: 'For a shirt that has creased, I iron it.',
      },
      {
        seg: [
          { t: 'ボタン' }, { t: 'が' }, { t: '取', r: 'と' }, { t: 'れた' }, { t: 'ので、' },
          { t: '糸', r: 'いと' }, { t: 'と' }, { t: '針', r: 'はり' }, { t: 'で' }, { t: '直', r: 'なお' },
          { t: 'した。' },
        ],
        en: 'A button came off, so I fixed it with thread and a needle.',
      },
      {
        seg: [
          { t: 'ふとん' }, { t: 'を' }, { t: '敷', r: 'し' }, { t: 'き、' }, { t: '清潔', r: 'せいけつ' },
          { t: 'な' }, { t: 'シーツ' }, { t: 'に' }, { t: '替', r: 'か' }, { t: 'える。' },
        ],
        en: 'I lay out the futon and change to clean sheets.',
      },
      {
        seg: [
          { t: '育児', r: 'いくじ' }, { t: 'を' }, { t: 'し' }, { t: 'ながら' }, { t: 'の' },
          { t: '家事', r: 'かじ' }, { t: 'は' }, { t: '大変', r: 'たいへん' }, { t: 'で、' }, { t: '子', r: 'こ' },
          { t: 'ども' }, { t: 'を' }, { t: '起', r: 'お' }, { t: 'こす' }, { t: '時間', r: 'じかん' },
          { t: 'も' }, { t: '決', r: 'き' }, { t: 'まって' }, { t: 'いる。' },
        ],
        en: 'Housework while raising children is hard, and even the time to wake them is fixed.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 3,
    section: 1,
    title: '住まい',
    targetWords: [
      '住まい', 'リビング', '居間', '家電', 'エアコン', 'クーラー', '暖める', '天井', '床', 'カーペット',
      'ざぶとん', 'ソファー', 'クッション', 'どかす', 'コンセント', 'スイッチ', 'ドライヤー', '蛇口',
      'ひねる', '実家', '家賃', '物置', '日当たり', '内側',
    ],
    sentences: [
      {
        seg: [
          { t: 'いま' }, { t: 'の' }, { t: '住', r: 'す' }, { t: 'まい' }, { t: 'は' },
          { t: '駅', r: 'えき' }, { t: 'に' }, { t: '近', r: 'ちか' }, { t: 'く、' }, { t: '家賃', r: 'やちん' },
          { t: 'の' }, { t: 'わり' }, { t: 'に' }, { t: '日当', r: 'ひあ' }, { t: 'たり' },
          { t: 'が' }, { t: 'よい。' },
        ],
        en: 'My current home is near the station and, for the rent, gets good sunlight.',
      },
      {
        seg: [
          { t: 'リビング' }, { t: 'に' }, { t: 'は' }, { t: 'ソファー' }, { t: 'と' },
          { t: 'クッション、' }, { t: '居間', r: 'いま' }, { t: 'に' }, { t: 'は' }, { t: 'ざぶとん' },
          { t: 'を' }, { t: '置', r: 'お' }, { t: 'いて' }, { t: 'いる。' },
        ],
        en: 'In the living room there is a sofa and cushions, and in the Japanese-style room floor cushions.',
      },
      {
        seg: [
          { t: '床', r: 'ゆか' }, { t: 'に' }, { t: 'カーペット' }, { t: 'を' }, { t: '敷', r: 'し' },
          { t: 'く' }, { t: 'と、' }, { t: '部屋', r: 'へや' }, { t: 'が' }, { t: '暖', r: 'あたた' },
          { t: 'まり' }, { t: 'やすい。' },
        ],
        en: 'Laying a carpet on the floor makes the room warm up easily.',
      },
      {
        seg: [
          { t: '夏', r: 'なつ' }, { t: 'は' }, { t: 'クーラー、' }, { t: '冬', r: 'ふゆ' }, { t: 'は' },
          { t: 'エアコン' }, { t: 'を' }, { t: '使', r: 'つか' }, { t: 'い、' }, { t: 'スイッチ' },
          { t: '一', r: 'ひと' }, { t: 'つ' }, { t: 'で' }, { t: '切', r: 'き' }, { t: 'り' },
          { t: '替', r: 'か' }, { t: 'える。' },
        ],
        en: 'In summer the cooler and in winter the air conditioner — I switch between them with one switch.',
      },
      {
        seg: [
          { t: 'コンセント' }, { t: 'が' }, { t: '天井', r: 'てんじょう' }, { t: 'の' }, { t: '近', r: 'ちか' },
          { t: 'く' }, { t: 'に' }, { t: 'あり、' }, { t: 'ドライヤー' }, { t: 'の' },
          { t: 'コード' }, { t: 'が' }, { t: '届', r: 'とど' }, { t: 'かない。' },
        ],
        en: 'The socket is near the ceiling and the hair dryer’s cord will not reach.',
      },
      {
        seg: [
          { t: '家電', r: 'かでん' }, { t: 'を' }, { t: 'どかして、' }, { t: '内側', r: 'うちがわ' }, { t: 'の' },
          { t: 'ほこり' }, { t: 'を' }, { t: '取', r: 'と' }, { t: 'った。' },
        ],
        en: 'I moved the appliances out of the way and removed the dust from inside.',
      },
      {
        seg: [
          { t: '蛇口', r: 'じゃぐち' }, { t: 'を' }, { t: 'ひねる' }, { t: 'と、' }, { t: '水', r: 'みず' },
          { t: 'の' }, { t: '音', r: 'おと' }, { t: 'だけ' }, { t: 'が' }, { t: '響', r: 'ひび' },
          { t: 'く。' },
        ],
        en: 'When I turn the tap, only the sound of water echoes.',
      },
      {
        seg: [
          { t: '使', r: 'つか' }, { t: 'わない' }, { t: 'もの' }, { t: 'は' }, { t: '物置', r: 'ものおき' },
          { t: 'に' }, { t: 'しまい、' }, { t: '実家', r: 'じっか' }, { t: 'から' }, { t: '送', r: 'おく' },
          { t: 'られた' }, { t: '箱', r: 'はこ' }, { t: 'も' }, { t: 'そこ' }, { t: 'に' },
          { t: 'ある。' },
        ],
        en: 'I store what I do not use in the shed, and the boxes sent from my parents’ home are there too.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 3,
    section: 2,
    title: 'お金と銀行',
    targetWords: [
      '札', 'コイン', '小銭', '生活費', '食費', '光熱費', '交際費', '公共料金', 'こづかい', '節約',
      'ぜいたく', '割り勘', 'レンタル', '支払う', '支払い', '勘定', '口座', 'キャッシュカード', '暗証番号',
      '預金', 'ためる', 'たまる', '引き出す', '振り込む', '送金', '通帳記入',
    ],
    sentences: [
      {
        seg: [
          { t: '毎月', r: 'まいつき' }, { t: 'の' }, { t: '生活費', r: 'せいかつひ' }, { t: 'を、' }, { t: '食費', r: 'しょくひ' },
          { t: 'と' }, { t: '光熱費', r: 'こうねつひ' }, { t: 'に' }, { t: '分', r: 'わ' }, { t: 'けて' },
          { t: '考', r: 'かんが' }, { t: 'える。' },
        ],
        en: 'I think of each month’s living expenses divided into food and utility costs.',
      },
      {
        seg: [
          { t: '公共料金', r: 'こうきょうりょうきん' }, { t: 'は' }, { t: '口座', r: 'こうざ' }, { t: 'から' }, { t: '自動', r: 'じどう' },
          { t: 'で' }, { t: '支払', r: 'しはら' }, { t: 'われる。' },
        ],
        en: 'The utility charges are paid automatically from my account.',
      },
      {
        seg: [
          { t: '交際費', r: 'こうさいひ' }, { t: 'を' }, { t: '節約', r: 'せつやく' }, { t: 'する' }, { t: 'ため、' },
          { t: '友人', r: 'ゆうじん' }, { t: 'と' }, { t: 'は' }, { t: '割', r: 'わ' }, { t: 'り' },
          { t: '勘', r: 'かん' }, { t: 'に' }, { t: 'する。' },
        ],
        en: 'To economise on entertainment expenses, I split the bill with friends.',
      },
      {
        seg: [
          { t: 'ぜいたく' }, { t: 'を' }, { t: 'せず、' }, { t: '少', r: 'すこ' }, { t: 'し' },
          { t: 'ずつ' }, { t: '預金', r: 'よきん' }, { t: 'を' }, { t: 'ためる。' },
        ],
        en: 'Without extravagance, I save up my deposits little by little.',
      },
      {
        seg: [
          { t: '小銭', r: 'こぜに' }, { t: 'や' }, { t: 'コイン' }, { t: 'が' }, { t: 'たまったら、' },
          { t: 'まとめて' }, { t: '銀行', r: 'ぎんこう' }, { t: 'へ' }, { t: '持', r: 'も' }, { t: 'って' },
          { t: '行', r: 'い' }, { t: 'く。' },
        ],
        en: 'When small change and coins accumulate, I take them to the bank together.',
      },
      {
        seg: [
          { t: 'キャッシュカード' }, { t: 'と' }, { t: '暗証番号', r: 'あんしょうばんごう' }, { t: 'で、' }, { t: 'お' },
          { t: '札', r: 'さつ' }, { t: 'を' }, { t: '引', r: 'ひ' }, { t: 'き' }, { t: '出', r: 'だ' },
          { t: 'す。' },
        ],
        en: 'With my cash card and PIN, I withdraw banknotes.',
      },
      {
        seg: [
          { t: '家賃', r: 'やちん' }, { t: 'は' }, { t: '毎月', r: 'まいつき' }, { t: '振', r: 'ふ' }, { t: 'り' },
          { t: '込', r: 'こ' }, { t: 'み、' }, { t: '実家', r: 'じっか' }, { t: 'へ' }, { t: 'の' },
          { t: '送金', r: 'そうきん' }, { t: 'も' }, { t: '忘', r: 'わす' }, { t: 'れない。' },
        ],
        en: 'I transfer the rent every month and do not forget the remittance to my parents’ home either.',
      },
      {
        seg: [
          { t: '通帳', r: 'つうちょう' }, { t: '記入', r: 'きにゅう' }, { t: 'を' }, { t: 'すれば、' }, { t: '支払', r: 'しはら' },
          { t: 'い' }, { t: 'の' }, { t: '記録', r: 'きろく' }, { t: 'が' }, { t: 'すぐ' },
          { t: '分', r: 'わ' }, { t: 'かる。' },
        ],
        en: 'If I update my bankbook, the record of payments is immediately clear.',
      },
      {
        seg: [
          { t: '店', r: 'みせ' }, { t: 'で' }, { t: '勘定', r: 'かんじょう' }, { t: 'を' }, { t: '頼', r: 'たの' },
          { t: 'み、' }, { t: 'レンタル' }, { t: '代', r: 'だい' }, { t: 'も' }, { t: '一緒', r: 'いっしょ' },
          { t: 'に' }, { t: '払', r: 'はら' }, { t: 'った。' },
        ],
        en: 'I asked for the bill at the shop and paid the rental fee together with it.',
      },
      {
        seg: [
          { t: 'こづかい' }, { t: 'の' }, { t: '中', r: 'なか' }, { t: 'で' }, { t: 'やりくり' },
          { t: 'する' }, { t: 'の' }, { t: 'が、' }, { t: 'いちばん' }, { t: 'の' },
          { t: '練習', r: 'れんしゅう' }, { t: 'だ。' },
        ],
        en: 'Managing within one’s pocket money is the best practice of all.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 3,
    section: 3,
    title: '買い物',
    targetWords: [
      '品物', '現金', 'クレジットカード', '一回払い', '合計', '代金', '税込', '請求書', '領収書',
      '売り切れ', '品切れ', '日替わり', '割引', '半額', '特売日', 'たった', '得', '損', 'おまけ',
      'むだ', 'むだづかい', '寄る', 'ついでに', 'レジ袋', '定休日',
    ],
    sentences: [
      {
        seg: [
          { t: '今日', r: 'きょう' }, { t: 'は' }, { t: '特売日', r: 'とくばいび' }, { t: 'な' }, { t: 'ので、' },
          { t: '帰', r: 'かえ' }, { t: 'り' }, { t: 'に' }, { t: 'スーパー' }, { t: 'に' },
          { t: '寄', r: 'よ' }, { t: 'った。' },
        ],
        en: 'Today is a bargain day, so I stopped by the supermarket on the way home.',
      },
      {
        seg: [
          { t: 'ついでに' }, { t: '隣', r: 'となり' }, { t: 'の' }, { t: '店', r: 'みせ' }, { t: 'も' },
          { t: '見', r: 'み' }, { t: 'た' }, { t: 'が、' }, { t: '定休日', r: 'ていきゅうび' }, { t: 'だった。' },
        ],
        en: 'While I was at it I looked at the shop next door, but it was their regular closing day.',
      },
      {
        seg: [
          { t: '目当', r: 'めあ' }, { t: 'て' }, { t: 'の' }, { t: '品物', r: 'しなもの' }, { t: 'は' },
          { t: '売', r: 'う' }, { t: 'り' }, { t: '切', r: 'き' }, { t: 'れ' }, { t: 'で、' },
          { t: '別', r: 'べつ' }, { t: 'の' }, { t: '色', r: 'いろ' }, { t: 'も' }, { t: '品切', r: 'しなぎ' },
          { t: 'れ' }, { t: 'だった。' },
        ],
        en: 'The item I was after was sold out, and another colour was out of stock too.',
      },
      {
        seg: [
          { t: '日替', r: 'ひが' }, { t: 'わり' }, { t: 'の' }, { t: '弁当', r: 'べんとう' }, { t: 'が' },
          { t: '半額', r: 'はんがく' }, { t: 'に' }, { t: 'なり、' }, { t: 'たった' }, { t: '三百円', r: 'さんびゃくえん' },
          { t: 'だった。' },
        ],
        en: 'The daily special bento was half price — only three hundred yen.',
      },
      {
        seg: [
          { t: '割引', r: 'わりびき' }, { t: 'の' }, { t: 'おかげ' }, { t: 'で' }, { t: '合計', r: 'ごうけい' },
          { t: 'は' }, { t: '安', r: 'やす' }, { t: 'く、' }, { t: 'とても' }, { t: '得', r: 'とく' },
          { t: 'を' }, { t: 'した' }, { t: '気分', r: 'きぶん' }, { t: 'だ。' },
        ],
        en: 'Thanks to the discount the total was cheap, and I felt I had got a real bargain.',
      },
      {
        seg: [
          { t: '代金', r: 'だいきん' }, { t: 'は' }, { t: '現金', r: 'げんきん' }, { t: 'で' }, { t: '払', r: 'はら' },
          { t: 'わず、' }, { t: 'クレジットカード' }, { t: 'の' }, { t: '一回払', r: 'いっかいばら' }, { t: 'い' },
          { t: 'に' }, { t: 'した。' },
        ],
        en: 'I did not pay the price in cash but used a credit card in a single payment.',
      },
      {
        seg: [
          { t: '税込', r: 'ぜいこみ' }, { t: 'の' }, { t: '金額', r: 'きんがく' }, { t: 'を' }, { t: '確', r: 'たし' },
          { t: 'かめ、' }, { t: '領収書', r: 'りょうしゅうしょ' }, { t: 'を' }, { t: 'もらう。' },
        ],
        en: 'I check the tax-included amount and receive a receipt.',
      },
      {
        seg: [
          { t: '請求書', r: 'せいきゅうしょ' }, { t: 'は' }, { t: 'あとで' }, { t: '届', r: 'とど' }, { t: 'く' },
          { t: 'ので、' }, { t: 'なくさない' }, { t: 'よう' }, { t: 'に' }, { t: 'する。' },
        ],
        en: 'The invoice arrives later, so I make sure not to lose it.',
      },
      {
        seg: [
          { t: '小', r: 'ちい' }, { t: 'さな' }, { t: 'おまけ' }, { t: 'が' }, { t: 'ついて' },
          { t: 'きて、' }, { t: '子', r: 'こ' }, { t: 'ども' }, { t: 'が' }, { t: '喜', r: 'よろこ' },
          { t: 'んだ。' },
        ],
        en: 'A small free extra came with it, and the children were delighted.',
      },
      {
        seg: [
          { t: 'レジ袋', r: 'ぶくろ' }, { t: 'を' }, { t: '断', r: 'ことわ' }, { t: 'る' }, { t: 'の' },
          { t: 'は、' }, { t: 'むだ' }, { t: 'を' }, { t: '減', r: 'へ' }, { t: 'らす' },
          { t: '一歩', r: 'いっぽ' }, { t: 'だ。' },
        ],
        en: 'Declining a plastic bag is a step toward reducing waste.',
      },
      {
        seg: [
          { t: '安', r: 'やす' }, { t: 'い' }, { t: 'から' }, { t: 'と' }, { t: '買', r: 'か' },
          { t: 'いすぎる' }, { t: 'と、' }, { t: 'かえって' }, { t: 'むだづかい' }, { t: 'に' },
          { t: 'なり' }, { t: '損', r: 'そん' }, { t: 'を' }, { t: 'する。' },
        ],
        en: 'Buying too much just because it is cheap becomes wasteful spending and a loss instead.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 3,
    section: 4,
    title: '朝から夜まで',
    targetWords: [
      '覚ます', '覚める', '明ける', '支度', '合わせる', 'しまう', 'そる', 'とかす', 'そろえる', '昼寝',
      '腰かける', '暮れる', 'おしゃべり', 'リラックス', 'ふだん', 'ふだん着', '相変わらず', 'たいてい',
      '夜ふかし', '電源', '充電', 'セット', 'なでる', 'ぐっすり', '運',
    ],
    sentences: [
      {
        seg: [
          { t: '夜', r: 'よる' }, { t: 'が' }, { t: '明', r: 'あ' }, { t: 'ける' }, { t: 'ころ、' },
          { t: '目', r: 'め' }, { t: 'が' }, { t: '覚', r: 'さ' }, { t: 'めて' }, { t: '目', r: 'め' },
          { t: 'を' }, { t: '覚', r: 'さ' }, { t: 'ます。' },
        ],
        en: 'Around daybreak I wake up and rouse myself.',
      },
      {
        seg: [
          { t: 'たいてい' }, { t: 'は' }, { t: '六時', r: 'ろくじ' }, { t: 'に' }, { t: 'セット' },
          { t: 'した' }, { t: '目覚', r: 'めざ' }, { t: 'まし' }, { t: 'で' }, { t: '起', r: 'お' },
          { t: 'きる。' },
        ],
        en: 'Usually I get up with the alarm set for six.',
      },
      {
        seg: [
          { t: 'ひげ' }, { t: 'を' }, { t: 'そり、' }, { t: '髪', r: 'かみ' }, { t: 'を' },
          { t: 'とかして、' }, { t: '出', r: 'で' }, { t: 'かける' }, { t: '支度', r: 'したく' }, { t: 'を' },
          { t: 'する。' },
        ],
        en: 'I shave, comb my hair, and get ready to go out.',
      },
      {
        seg: [
          { t: '服', r: 'ふく' }, { t: 'を' }, { t: '合', r: 'あ' }, { t: 'わせ、' }, { t: 'ふだん' },
          { t: 'は' }, { t: 'ふだん着', r: 'ぎ' }, { t: 'で' }, { t: '過', r: 'す' }, { t: 'ごす。' },
        ],
        en: 'I match my clothes; usually I spend the day in casual wear.',
      },
      {
        seg: [
          { t: '使', r: 'つか' }, { t: 'った' }, { t: 'もの' }, { t: 'を' }, { t: 'しまい、' },
          { t: '靴', r: 'くつ' }, { t: 'を' }, { t: 'そろえて' }, { t: '出', r: 'で' }, { t: 'る。' },
        ],
        en: 'I put away what I used and line up my shoes before leaving.',
      },
      {
        seg: [
          { t: '昼', r: 'ひる' }, { t: 'は' }, { t: '短', r: 'みじか' }, { t: 'い' }, { t: '昼寝', r: 'ひるね' },
          { t: 'を' }, { t: 'し、' }, { t: 'ソファー' }, { t: 'に' }, { t: '腰', r: 'こし' },
          { t: 'かけて' }, { t: 'リラックス' }, { t: 'する。' },
        ],
        en: 'At midday I take a short nap and relax sitting on the sofa.',
      },
      {
        seg: [
          { t: '日', r: 'ひ' }, { t: 'が' }, { t: '暮', r: 'く' }, { t: 'れる' }, { t: 'と、' },
          { t: '家族', r: 'かぞく' }, { t: 'と' }, { t: 'おしゃべり' }, { t: 'を' }, { t: 'する' },
          { t: '時間', r: 'じかん' }, { t: 'に' }, { t: 'なる。' },
        ],
        en: 'When the sun sets, it becomes time to chat with the family.',
      },
      {
        seg: [
          { t: '猫', r: 'ねこ' }, { t: 'を' }, { t: 'なでて' }, { t: 'いる' }, { t: 'うち' },
          { t: 'に、' }, { t: '相変', r: 'あいか' }, { t: 'わらず' }, { t: '夜', r: 'よ' }, { t: 'ふかし' },
          { t: 'を' }, { t: 'して' }, { t: 'しまう。' },
        ],
        en: 'While stroking the cat, as always I end up staying up late.',
      },
      {
        seg: [
          { t: '寝', r: 'ね' }, { t: 'る' }, { t: '前', r: 'まえ' }, { t: 'に' }, { t: '電源', r: 'でんげん' },
          { t: 'を' }, { t: '切', r: 'き' }, { t: 'り、' }, { t: '携帯', r: 'けいたい' }, { t: 'を' },
          { t: '充電', r: 'じゅうでん' }, { t: 'する。' },
        ],
        en: 'Before sleeping I turn off the power and charge my phone.',
      },
      {
        seg: [
          { t: 'ぐっすり' }, { t: '眠', r: 'ねむ' }, { t: 'れた' }, { t: '日', r: 'ひ' }, { t: 'は、' },
          { t: '運', r: 'うん' }, { t: 'が' }, { t: 'よい' }, { t: '一日', r: 'いちにち' }, { t: 'に' },
          { t: 'なる' }, { t: '気', r: 'き' }, { t: 'が' }, { t: 'する。' },
        ],
        en: 'On days when I sleep soundly, I feel it will be a lucky day.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 3,
    section: 5,
    title: 'そのほかの暮らし',
    targetWords: [
      '日常', '常に', '出迎え', '出迎える', '見送り', '見送る', '郵送', '小包', '送料', 'あて先',
      'あて名', '差出人', 'とりあえず', '出前', 'ほどく', '留守番電話', 'よく', '早め', 'リサイクル',
      'どける',
    ],
    sentences: [
      {
        seg: [
          { t: '日常', r: 'にちじょう' }, { t: 'の' }, { t: '中', r: 'なか' }, { t: 'に' }, { t: 'は、' },
          { t: '小', r: 'ちい' }, { t: 'さな' }, { t: 'やりとり' }, { t: 'が' }, { t: '常', r: 'つね' },
          { t: 'に' }, { t: 'ある。' },
        ],
        en: 'In everyday life there are always small exchanges.',
      },
      {
        seg: [
          { t: '友人', r: 'ゆうじん' }, { t: 'が' }, { t: '来', r: 'く' }, { t: 'る' }, { t: '日', r: 'ひ' },
          { t: 'は' }, { t: '駅', r: 'えき' }, { t: 'まで' }, { t: '出迎', r: 'でむか' }, { t: 'え' },
          { t: 'に' }, { t: '行', r: 'い' }, { t: 'き、' }, { t: '帰', r: 'かえ' }, { t: 'り' },
          { t: 'は' }, { t: '見送', r: 'みおく' }, { t: 'る。' },
        ],
        en: 'On the day a friend comes I go to the station to meet them, and see them off on the way back.',
      },
      {
        seg: [
          { t: '出迎', r: 'でむか' }, { t: 'えた' }, { t: 'あと、' }, { t: 'とりあえず' }, { t: 'お茶', r: 'ちゃ' },
          { t: 'を' }, { t: '出', r: 'だ' }, { t: 'す。' },
        ],
        en: 'After meeting them, for now I serve tea.',
      },
      {
        seg: [
          { t: '見送', r: 'みおく' }, { t: 'り' }, { t: 'の' }, { t: 'あと、' }, { t: '郵便局', r: 'ゆうびんきょく' },
          { t: 'へ' }, { t: '小包', r: 'こづつみ' }, { t: 'を' }, { t: '出', r: 'だ' }, { t: 'しに' },
          { t: '行', r: 'い' }, { t: 'った。' },
        ],
        en: 'After seeing them off, I went to the post office to send a parcel.',
      },
      {
        seg: [
          { t: 'あて先', r: 'さき' }, { t: 'と' }, { t: 'あて名', r: 'な、' }, { t: '差出人', r: 'さしだしにん' }, { t: 'を' },
          { t: '書', r: 'か' }, { t: 'き、' }, { t: '送料', r: 'そうりょう' }, { t: 'を' }, { t: '確', r: 'たし' },
          { t: 'かめる。' },
        ],
        en: 'I write the destination, the addressee and the sender, and check the postage.',
      },
      {
        seg: [
          { t: '郵送', r: 'ゆうそう' }, { t: 'は' }, { t: '早', r: 'はや' }, { t: 'め' }, { t: 'に' },
          { t: '頼', r: 'たの' }, { t: 'む' }, { t: 'ほう' }, { t: 'が' }, { t: 'よい。' },
        ],
        en: 'It is better to arrange posting ahead of time.',
      },
      {
        seg: [
          { t: '留守番電話', r: 'るすばんでんわ' }, { t: 'に、' }, { t: 'よく' }, { t: '同', r: 'おな' }, { t: 'じ' },
          { t: '人', r: 'ひと' }, { t: 'から' }, { t: 'の' }, { t: '伝言', r: 'でんごん' }, { t: 'が' },
          { t: '入', r: 'はい' }, { t: 'って' }, { t: 'いる。' },
        ],
        en: 'There are often messages from the same person on the answering machine.',
      },
      {
        seg: [
          { t: '疲', r: 'つか' }, { t: 'れた' }, { t: '日', r: 'ひ' }, { t: 'は' }, { t: '出前', r: 'でまえ' },
          { t: 'を' }, { t: '頼', r: 'たの' }, { t: 'み、' }, { t: '荷物', r: 'にもつ' }, { t: 'を' },
          { t: 'どけて' }, { t: '場所', r: 'ばしょ' }, { t: 'を' }, { t: '作', r: 'つく' }, { t: 'る。' },
        ],
        en: 'On tired days I order delivery and move the luggage aside to make space.',
      },
      {
        seg: [
          { t: '包', r: 'つつ' }, { t: 'み' }, { t: 'を' }, { t: 'ほどき、' }, { t: '箱', r: 'はこ' },
          { t: 'は' }, { t: 'リサイクル' }, { t: 'に' }, { t: '出', r: 'だ' }, { t: 'す。' },
        ],
        en: 'I untie the wrapping and put the box out for recycling.',
      },
    ],
  },
]
