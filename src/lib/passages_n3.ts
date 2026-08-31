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
]
