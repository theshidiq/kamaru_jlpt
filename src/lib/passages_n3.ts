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
  {
    level: 'N3',
    chapter: 4,
    section: 1,
    title: '町のようす',
    targetWords: [
      '商店街', 'にぎやかな', '高層ビル', '建つ', '水族館', '博物館', '出入り口', '自動ドア', '入館料',
      '混雑', '行列', '休館日', 'ホール', '使用料', '無料', '老人ホーム', '目印', '歩道橋', 'タワー',
      'ライト', '居酒屋', '八百屋', '正面', 'そば', 'コンクリート', '地方', '地域', '郊外', '中心',
      '移転', '工事', '空き地',
    ],
    sentences: [
      {
        seg: [
          { t: '駅', r: 'えき' }, { t: 'の' }, { t: '正面', r: 'しょうめん' }, { t: 'に' }, { t: '商店街', r: 'しょうてんがい' },
          { t: 'が' }, { t: 'あり、' }, { t: '夕方', r: 'ゆうがた' }, { t: 'は' }, { t: 'にぎやか' },
          { t: 'だ。' },
        ],
        en: 'There is a shopping street directly opposite the station, and in the evening it is lively.',
      },
      {
        seg: [
          { t: '八百屋', r: 'やおや' }, { t: 'の' }, { t: 'そば' }, { t: 'に' }, { t: '居酒屋', r: 'いざかや' },
          { t: 'が' }, { t: 'でき、' }, { t: 'その' }, { t: '隣', r: 'となり' }, { t: 'は' },
          { t: '空', r: 'あ' }, { t: 'き' }, { t: '地', r: 'ち' }, { t: 'の' }, { t: 'まま' },
          { t: 'だ。' },
        ],
        en: 'An izakaya has opened beside the greengrocer, and the plot next to it is still a vacant lot.',
      },
      {
        seg: [
          { t: '町', r: 'まち' }, { t: 'の' }, { t: '中心', r: 'ちゅうしん' }, { t: 'に' }, { t: 'は' },
          { t: '高層', r: 'こうそう' }, { t: 'ビル' }, { t: 'が' }, { t: '建', r: 'た' }, { t: 'ち、' },
          { t: 'コンクリート' }, { t: 'の' }, { t: 'タワー' }, { t: 'が' }, { t: '目印', r: 'めじるし' },
          { t: 'に' }, { t: 'なる。' },
        ],
        en: 'A high-rise stands in the town centre, and the concrete tower serves as a landmark.',
      },
      {
        seg: [
          { t: '夜', r: 'よる' }, { t: 'は' }, { t: 'ライト' }, { t: 'が' }, { t: 'つき、' },
          { t: '歩道橋', r: 'ほどうきょう' }, { t: 'の' }, { t: '上', r: 'うえ' }, { t: 'から' }, { t: 'よく' },
          { t: '見', r: 'み' }, { t: 'える。' },
        ],
        en: 'At night the lights come on, and it is clearly visible from the footbridge.',
      },
      {
        seg: [
          { t: '水族館', r: 'すいぞくかん' }, { t: 'と' }, { t: '博物館', r: 'はくぶつかん' }, { t: 'は' }, { t: '郊外', r: 'こうがい' },
          { t: 'に' }, { t: 'あり、' }, { t: '入館料', r: 'にゅうかんりょう' }, { t: 'は' }, { t: '子', r: 'こ' },
          { t: 'ども' }, { t: 'が' }, { t: '無料', r: 'むりょう' }, { t: 'だ。' },
        ],
        en: 'The aquarium and museum are in the suburbs, and admission is free for children.',
      },
      {
        seg: [
          { t: '休日', r: 'きゅうじつ' }, { t: 'は' }, { t: '混雑', r: 'こんざつ' }, { t: 'して' }, { t: '行列', r: 'ぎょうれつ' },
          { t: 'が' }, { t: 'でき、' }, { t: '自動', r: 'じどう' }, { t: 'ドア' }, { t: 'の' },
          { t: '出入', r: 'でい' }, { t: 'り' }, { t: '口', r: 'ぐち' }, { t: 'が' }, { t: 'せまく' },
          { t: '感', r: 'かん' }, { t: 'じる。' },
        ],
        en: 'On holidays it is crowded and queues form, and the automatic door’s entrance feels narrow.',
      },
      {
        seg: [
          { t: '休館日', r: 'きゅうかんび' }, { t: 'を' }, { t: '確', r: 'たし' }, { t: 'かめて' }, { t: 'から' },
          { t: '出', r: 'で' }, { t: 'かける' }, { t: 'と、' }, { t: 'むだ' }, { t: 'が' },
          { t: 'ない。' },
        ],
        en: 'If you check the closing day before setting out, there is no waste.',
      },
      {
        seg: [
          { t: 'ホール' }, { t: 'の' }, { t: '使用料', r: 'しようりょう' }, { t: 'は' }, { t: '地域', r: 'ちいき' },
          { t: 'の' }, { t: '人', r: 'ひと' }, { t: 'に' }, { t: 'は' }, { t: '安', r: 'やす' },
          { t: 'い。' },
        ],
        en: 'The hall’s usage fee is cheap for people of the area.',
      },
      {
        seg: [
          { t: '地方', r: 'ちほう' }, { t: 'から' }, { t: '移転', r: 'いてん' }, { t: 'して' }, { t: 'きた' },
          { t: '老人', r: 'ろうじん' }, { t: 'ホーム' }, { t: 'の' }, { t: '前', r: 'まえ' }, { t: 'で、' },
          { t: 'いま' }, { t: 'も' }, { t: '工事', r: 'こうじ' }, { t: 'が' }, { t: '続', r: 'つづ' },
          { t: 'いて' }, { t: 'いる。' },
        ],
        en: 'In front of the nursing home that relocated from the countryside, construction still continues.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 4,
    section: 2,
    title: '町を歩く',
    targetWords: [
      '人ごみ', '都会', 'ぶらぶら', 'うろうろ', '通りかかる', '通り過ぎる', '徒歩', '方向', '遠回り',
      '近道', '距離', '追いかける', '追いつく', '追い越す', '突き当たり', '立ち止まる', '横切る', '見かける',
    ],
    sentences: [
      {
        seg: [
          { t: '休', r: 'やす' }, { t: 'み' }, { t: 'の' }, { t: '日', r: 'ひ' }, { t: 'は、' },
          { t: '都会', r: 'とかい' }, { t: 'の' }, { t: '人', r: 'ひと' }, { t: 'ごみ' }, { t: 'を' },
          { t: 'ぶらぶら' }, { t: '歩', r: 'ある' }, { t: 'く' }, { t: 'の' }, { t: 'が' },
          { t: '好', r: 'す' }, { t: 'き' }, { t: 'だ。' },
        ],
        en: 'On days off I like to stroll through the city crowds.',
      },
      {
        seg: [
          { t: '地図', r: 'ちず' }, { t: 'を' }, { t: '見', r: 'み' }, { t: 'ながら' }, { t: 'うろうろ' },
          { t: 'して' }, { t: 'いる' }, { t: '人', r: 'ひと' }, { t: 'を、' }, { t: 'よく' },
          { t: '見', r: 'み' }, { t: 'かける。' },
        ],
        en: 'I often spot people loitering about while looking at a map.',
      },
      {
        seg: [
          { t: '駅', r: 'えき' }, { t: 'から' }, { t: '徒歩', r: 'とほ' }, { t: '十分', r: 'じっぷん、' }, { t: '距離', r: 'きょり' },
          { t: 'は' }, { t: '短', r: 'みじか' }, { t: 'い' }, { t: 'が' }, { t: '方向', r: 'ほうこう' },
          { t: 'が' }, { t: '分', r: 'わ' }, { t: 'かり' }, { t: 'にくい。' },
        ],
        en: 'Ten minutes on foot from the station — the distance is short but the direction is hard to work out.',
      },
      {
        seg: [
          { t: '近道', r: 'ちかみち' }, { t: 'を' }, { t: '通', r: 'とお' }, { t: 'る' }, { t: 'つもり' },
          { t: 'が、' }, { t: 'かえって' }, { t: '遠回', r: 'とおまわ' }, { t: 'り' }, { t: 'に' },
          { t: 'なった。' },
        ],
        en: 'I meant to take a shortcut but ended up going the long way round instead.',
      },
      {
        seg: [
          { t: '道', r: 'みち' }, { t: 'の' }, { t: '突', r: 'つ' }, { t: 'き' }, { t: '当', r: 'あ' },
          { t: 'たり' }, { t: 'で' }, { t: '立', r: 'た' }, { t: 'ち' }, { t: '止', r: 'ど' },
          { t: 'まり、' }, { t: '通', r: 'とお' }, { t: 'りかかった' }, { t: '人', r: 'ひと' }, { t: 'に' },
          { t: '道', r: 'みち' }, { t: 'を' }, { t: '聞', r: 'き' }, { t: 'いた。' },
        ],
        en: 'I stopped at the end of the road and asked someone who happened to pass by for directions.',
      },
      {
        seg: [
          { t: '前', r: 'まえ' }, { t: 'を' }, { t: '歩', r: 'ある' }, { t: 'く' }, { t: '友人', r: 'ゆうじん' },
          { t: 'を' }, { t: '追', r: 'お' }, { t: 'いかけ、' }, { t: '走', r: 'はし' }, { t: 'って' },
          { t: 'ようやく' }, { t: '追', r: 'お' }, { t: 'いついた。' },
        ],
        en: 'I chased after the friend walking ahead and finally caught up at a run.',
      },
      {
        seg: [
          { t: '自転車', r: 'じてんしゃ' }, { t: 'が' }, { t: '私', r: 'わたし' }, { t: 'を' }, { t: '追', r: 'お' },
          { t: 'い' }, { t: '越', r: 'こ' }, { t: 'し、' }, { t: '横断歩道', r: 'おうだんほどう' }, { t: 'を' },
          { t: '横切', r: 'よこぎ' }, { t: 'って' }, { t: '行', r: 'い' }, { t: 'った。' },
        ],
        en: 'A bicycle overtook me and went across the crossing.',
      },
      {
        seg: [
          { t: '店', r: 'みせ' }, { t: 'の' }, { t: '前', r: 'まえ' }, { t: 'を' }, { t: '通', r: 'とお' },
          { t: 'り' }, { t: '過', r: 'す' }, { t: 'ぎて' }, { t: 'から、' }, { t: '戻', r: 'もど' },
          { t: 'る' }, { t: 'こと' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'After passing the shop I decided to go back.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 4,
    section: 3,
    title: '電車と新幹線',
    targetWords: [
      '行き先', '往復', '片道', '各駅停車', '急行', '始発', '終電', '終点', '上り', '下り', 'JR',
      '私鉄', '経由', '定期券', '有効期限', '窓口', '販売', '通路側', '改札', '指定席', '車内アナウンス',
      '車掌', 'ホーム', '線路', '踏切', '乗り遅れる', '乗り換える', '乗り越す', '乗り過ごす', '踏む',
    ],
    sentences: [
      {
        seg: [
          { t: '窓口', r: 'まどぐち' }, { t: 'で' }, { t: '行', r: 'い' }, { t: 'き' }, { t: '先', r: 'さき' },
          { t: 'を' }, { t: '告', r: 'つ' }, { t: 'げ、' }, { t: '往復', r: 'おうふく' }, { t: 'の' },
          { t: '切符', r: 'きっぷ' }, { t: 'を' }, { t: '買', r: 'か' }, { t: 'った。' },
        ],
        en: 'I told the counter my destination and bought a return ticket.',
      },
      {
        seg: [
          { t: '片道', r: 'かたみち' }, { t: 'だけ' }, { t: 'なら' }, { t: '安', r: 'やす' }, { t: 'い' },
          { t: 'が、' }, { t: '指定席', r: 'していせき' }, { t: 'は' }, { t: '別料金', r: 'べつりょうきん' }, { t: 'だ。' },
        ],
        en: 'One way alone is cheap, but a reserved seat costs extra.',
      },
      {
        seg: [
          { t: '通路側', r: 'つうろがわ' }, { t: 'の' }, { t: '席', r: 'せき' }, { t: 'が' }, { t: 'よかった' },
          { t: 'が、' }, { t: '販売', r: 'はんばい' }, { t: 'は' }, { t: 'もう' }, { t: '終', r: 'お' },
          { t: 'わって' }, { t: 'いた。' },
        ],
        en: 'I wanted an aisle seat, but sales had already ended.',
      },
      {
        seg: [
          { t: '急行', r: 'きゅうこう' }, { t: 'に' }, { t: '乗', r: 'の' }, { t: 'り' }, { t: '遅', r: 'おく' },
          { t: 'れた' }, { t: 'ので、' }, { t: '各駅停車', r: 'かくえきていしゃ' }, { t: 'で' }, { t: '行', r: 'い' },
          { t: 'く' }, { t: 'こと' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'I missed the express, so I decided to go by local train.',
      },
      {
        seg: [
          { t: 'JR' }, { t: 'から' }, { t: '私鉄', r: 'してつ' }, { t: 'に' }, { t: '乗', r: 'の' },
          { t: 'り' }, { t: '換', r: 'か' }, { t: 'え、' }, { t: '途中', r: 'とちゅう' }, { t: 'の' },
          { t: '駅', r: 'えき' }, { t: 'を' }, { t: '経由', r: 'けいゆ' }, { t: 'する。' },
        ],
        en: 'I change from JR to a private line and go via a station on the way.',
      },
      {
        seg: [
          { t: '上', r: 'のぼ' }, { t: 'り' }, { t: 'の' }, { t: 'ホーム' }, { t: 'と' },
          { t: '下', r: 'くだ' }, { t: 'り' }, { t: 'の' }, { t: 'ホーム' }, { t: 'を' },
          { t: 'まちがえ、' }, { t: '改札', r: 'かいさつ' }, { t: 'を' }, { t: '出', r: 'で' }, { t: '直', r: 'なお' },
          { t: 'した。' },
        ],
        en: 'I mistook the inbound platform for the outbound one and went back out through the gate.',
      },
      {
        seg: [
          { t: '定期券', r: 'ていきけん' }, { t: 'の' }, { t: '有効期限', r: 'ゆうこうきげん' }, { t: 'が' }, { t: '切', r: 'き' },
          { t: 'れて' }, { t: 'いて、' }, { t: 'あわてた。' },
        ],
        en: 'My commuter pass had expired, and I panicked.',
      },
      {
        seg: [
          { t: '車内', r: 'しゃない' }, { t: 'アナウンス' }, { t: 'を' }, { t: '聞', r: 'き' }, { t: 'き' },
          { t: '逃', r: 'のが' }, { t: 'し、' }, { t: '終点', r: 'しゅうてん' }, { t: 'まで' }, { t: '乗', r: 'の' },
          { t: 'り' }, { t: '過', r: 'す' }, { t: 'ごした。' },
        ],
        en: 'I missed the in-train announcement and rode past my stop to the terminus.',
      },
      {
        seg: [
          { t: '車掌', r: 'しゃしょう' }, { t: 'に' }, { t: '相談', r: 'そうだん' }, { t: 'し、' }, { t: '乗', r: 'の' },
          { t: 'り' }, { t: '越', r: 'こ' }, { t: 'した' }, { t: '分', r: 'ぶん' }, { t: 'を' },
          { t: '払', r: 'はら' }, { t: 'った。' },
        ],
        en: 'I consulted the conductor and paid for the distance I had ridden past.',
      },
      {
        seg: [
          { t: '線路', r: 'せんろ' }, { t: 'の' }, { t: 'そば' }, { t: 'の' }, { t: '踏切', r: 'ふみきり' },
          { t: 'を' }, { t: 'わたる' }, { t: 'とき' }, { t: 'は、' }, { t: '足元', r: 'あしもと' },
          { t: 'を' }, { t: 'よく' }, { t: '踏', r: 'ふ' }, { t: 'みしめる。' },
        ],
        en: 'When crossing the railway crossing beside the track, I tread firmly.',
      },
      {
        seg: [
          { t: '始発', r: 'しはつ' }, { t: 'で' }, { t: '出', r: 'で' }, { t: 'れば、' }, { t: '終電', r: 'しゅうでん' },
          { t: 'を' }, { t: '気', r: 'き' }, { t: 'に' }, { t: 'せず' }, { t: '済', r: 'す' },
          { t: 'む。' },
        ],
        en: 'If I leave on the first train, I need not worry about the last one.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 4,
    section: 4,
    title: 'バス',
    targetWords: [
      'バス停', '乗車口', '乗客', '乗車', '発車', '通過', '停車', '下車', '交通費', 'バス代',
      '払い戻す', '定員', 'つめる', 'がらがらな', 'すく', '満員', 'ぎっしり', '時刻', '優先席',
      '立ち上がる', 'ゆずる', 'かかる', 'ブレーキ',
    ],
    sentences: [
      {
        seg: [
          { t: 'バス停', r: 'てい' }, { t: 'で' }, { t: '時刻', r: 'じこく' }, { t: 'を' }, { t: '確', r: 'たし' },
          { t: 'かめ、' }, { t: '乗車口', r: 'じょうしゃぐち' }, { t: 'から' }, { t: '乗車', r: 'じょうしゃ' }, { t: 'する。' },
        ],
        en: 'I check the time at the bus stop and board through the boarding door.',
      },
      {
        seg: [
          { t: '朝', r: 'あさ' }, { t: 'の' }, { t: 'バス' }, { t: 'は' }, { t: '満員', r: 'まんいん' },
          { t: 'で、' }, { t: '乗客', r: 'じょうきゃく' }, { t: 'が' }, { t: 'ぎっしり' }, { t: '立', r: 'た' },
          { t: 'って' }, { t: 'いる。' },
        ],
        en: 'The morning bus is full, with passengers standing packed tightly.',
      },
      {
        seg: [
          { t: '少', r: 'すこ' }, { t: 'し' }, { t: 'つめて' }, { t: 'ください' }, { t: 'と' },
          { t: '言', r: 'い' }, { t: 'われ、' }, { t: 'みんな' }, { t: 'が' }, { t: '奥', r: 'おく' },
          { t: 'へ' }, { t: '動', r: 'うご' }, { t: 'いた。' },
        ],
        en: 'We were asked to move up a little, and everyone shifted toward the back.',
      },
      {
        seg: [
          { t: '昼', r: 'ひる' }, { t: 'ごろ' }, { t: 'は' }, { t: 'すいて、' }, { t: 'がらがら' },
          { t: 'の' }, { t: 'こと' }, { t: 'も' }, { t: 'ある。' },
        ],
        en: 'Around midday it thins out, and sometimes it is quite empty.',
      },
      {
        seg: [
          { t: '定員', r: 'ていいん' }, { t: 'を' }, { t: 'こえる' }, { t: 'と、' }, { t: '次', r: 'つぎ' },
          { t: 'の' }, { t: 'バス停', r: 'てい' }, { t: 'を' }, { t: '通過', r: 'つうか' }, { t: 'する' },
          { t: 'そう' }, { t: 'だ。' },
        ],
        en: 'If it exceeds capacity, apparently it passes the next stop without stopping.',
      },
      {
        seg: [
          { t: '優先席', r: 'ゆうせんせき' }, { t: 'の' }, { t: '前', r: 'まえ' }, { t: 'で、' }, { t: '若', r: 'わか' },
          { t: 'い' }, { t: '人', r: 'ひと' }, { t: 'が' }, { t: '立', r: 'た' }, { t: 'ち' },
          { t: '上', r: 'あ' }, { t: 'がって' }, { t: '席', r: 'せき' }, { t: 'を' }, { t: 'ゆずった。' },
        ],
        en: 'In front of the priority seats, a young person stood up and gave up their seat.',
      },
      {
        seg: [
          { t: '急', r: 'きゅう' }, { t: 'な' }, { t: 'ブレーキ' }, { t: 'で' }, { t: '体', r: 'からだ' },
          { t: 'が' }, { t: '揺', r: 'ゆ' }, { t: 'れ、' }, { t: '停車', r: 'ていしゃ' }, { t: 'して' },
          { t: 'から' }, { t: '下車', r: 'げしゃ' }, { t: 'した。' },
        ],
        en: 'My body swayed with a sudden brake, and I got off after it had stopped.',
      },
      {
        seg: [
          { t: 'バス代', r: 'だい' }, { t: 'と' }, { t: '電車代', r: 'でんしゃだい' }, { t: 'を' }, { t: '合', r: 'あ' },
          { t: 'わせた' }, { t: '交通費', r: 'こうつうひ' }, { t: 'は、' }, { t: '会社', r: 'かいしゃ' }, { t: 'が' },
          { t: '払', r: 'はら' }, { t: 'い' }, { t: '戻', r: 'もど' }, { t: 'して' }, { t: 'くれる。' },
        ],
        en: 'The company refunds the travel expenses combining bus and train fares.',
      },
      {
        seg: [
          { t: '発車', r: 'はっしゃ' }, { t: 'まで' }, { t: '五分', r: 'ごふん、' }, { t: '会社', r: 'かいしゃ' }, { t: 'まで' },
          { t: 'は' }, { t: '三十分', r: 'さんじっぷん' }, { t: 'かかる。' },
        ],
        en: 'Five minutes until departure, and it takes thirty minutes to the office.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 4,
    section: 5,
    title: '車の運転',
    targetWords: [
      'ドライブ', '乗せる', '助手席', 'シートベルト', 'カーナビ', '道路', '渋滞', '速度', '高速道路',
      '安全', '列', '割り込む', '駐車違反', 'スピード違反', '飲酒運転', 'アクセル', 'カーブ', 'ゆるい',
      'パンク', '一方通行', '通行止め', '運転免許証', 'ぶつかる', 'ひく', 'ハンドル', 'トランク', 'エンジン',
      '中古車', 'トラック',
    ],
    sentences: [
      {
        seg: [
          { t: '中古車', r: 'ちゅうこしゃ' }, { t: 'を' }, { t: '買', r: 'か' }, { t: 'い、' }, { t: '友人', r: 'ゆうじん' },
          { t: 'を' }, { t: '助手席', r: 'じょしゅせき' }, { t: 'に' }, { t: '乗', r: 'の' }, { t: 'せて' },
          { t: 'ドライブ' }, { t: 'に' }, { t: '出', r: 'で' }, { t: 'た。' },
        ],
        en: 'I bought a used car and set out for a drive with a friend in the passenger seat.',
      },
      {
        seg: [
          { t: 'エンジン' }, { t: 'を' }, { t: 'かける' }, { t: '前', r: 'まえ' }, { t: 'に、' },
          { t: 'シートベルト' }, { t: 'を' }, { t: '締', r: 'し' }, { t: 'め、' }, { t: 'カーナビ' },
          { t: 'を' }, { t: 'セット' }, { t: 'する。' },
        ],
        en: 'Before starting the engine, I fasten the seat belt and set the car navigation.',
      },
      {
        seg: [
          { t: '高速道路', r: 'こうそくどうろ' }, { t: 'は' }, { t: '渋滞', r: 'じゅうたい' }, { t: 'して' }, { t: 'いて、' },
          { t: '車', r: 'くるま' }, { t: 'の' }, { t: '列', r: 'れつ' }, { t: 'が' }, { t: '長', r: 'なが' },
          { t: 'く' }, { t: '続', r: 'つづ' }, { t: 'いた。' },
        ],
        en: 'The expressway was congested, and the line of cars stretched on and on.',
      },
      {
        seg: [
          { t: '速度', r: 'そくど' }, { t: 'を' }, { t: '落', r: 'お' }, { t: 'とし、' }, { t: 'ハンドル' },
          { t: 'を' }, { t: 'しっかり' }, { t: '持', r: 'も' }, { t: 'って' }, { t: 'ゆるい' },
          { t: 'カーブ' }, { t: 'を' }, { t: '曲', r: 'ま' }, { t: 'がる。' },
        ],
        en: 'I reduce speed, hold the steering wheel firmly and take the gentle curve.',
      },
      {
        seg: [
          { t: '前', r: 'まえ' }, { t: 'の' }, { t: '車', r: 'くるま' }, { t: 'が' }, { t: '急', r: 'きゅう' },
          { t: 'に' }, { t: '割', r: 'わ' }, { t: 'り' }, { t: '込', r: 'こ' }, { t: 'み、' },
          { t: '危', r: 'あぶ' }, { t: 'うく' }, { t: 'ぶつかる' }, { t: 'ところ' }, { t: 'だった。' },
        ],
        en: 'The car in front cut in suddenly and we nearly collided.',
      },
      {
        seg: [
          { t: 'アクセル' }, { t: 'を' }, { t: 'ふみすぎて、' }, { t: 'スピード違反', r: 'いはん' }, { t: 'に' },
          { t: 'なる' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: 'いる。' },
        ],
        en: 'Some people press the accelerator too hard and commit a speeding violation.',
      },
      {
        seg: [
          { t: '飲酒運転', r: 'いんしゅうんてん' }, { t: 'も' }, { t: '駐車違反', r: 'ちゅうしゃいはん' }, { t: 'も、' }, { t: '絶対', r: 'ぜったい' },
          { t: 'に' }, { t: 'して' }, { t: 'は' }, { t: 'いけない。' },
        ],
        en: 'Neither drunk driving nor a parking violation must ever be committed.',
      },
      {
        seg: [
          { t: 'この' }, { t: '道', r: 'みち' }, { t: 'は' }, { t: '一方通行', r: 'いっぽうつうこう' }, { t: 'で、' },
          { t: '先', r: 'さき' }, { t: 'は' }, { t: '工事', r: 'こうじ' }, { t: 'の' }, { t: 'ため' },
          { t: '通行止', r: 'つうこうど' }, { t: 'め' }, { t: 'だった。' },
        ],
        en: 'This road is one-way, and ahead it was closed for construction.',
      },
      {
        seg: [
          { t: 'タイヤ' }, { t: 'が' }, { t: 'パンク' }, { t: 'し、' }, { t: 'トランク' },
          { t: 'から' }, { t: '道具', r: 'どうぐ' }, { t: 'を' }, { t: '出', r: 'だ' }, { t: 'した。' },
        ],
        en: 'The tyre got a puncture, and I took the tools out of the boot.',
      },
      {
        seg: [
          { t: '大', r: 'おお' }, { t: 'きな' }, { t: 'トラック' }, { t: 'の' }, { t: 'そば' },
          { t: 'を' }, { t: '通', r: 'とお' }, { t: 'る' }, { t: 'とき' }, { t: 'は、' },
          { t: '安全', r: 'あんぜん' }, { t: 'の' }, { t: 'ため' }, { t: '速度', r: 'そくど' }, { t: 'を' },
          { t: '落', r: 'お' }, { t: 'とす。' },
        ],
        en: 'When passing beside a large truck, I slow down for safety.',
      },
      {
        seg: [
          { t: '人', r: 'ひと' }, { t: 'を' }, { t: 'ひく' }, { t: 'こと' }, { t: 'の' },
          { t: 'ない' }, { t: 'よう、' }, { t: '運転免許証', r: 'うんてんめんきょしょう' }, { t: 'を' }, { t: '持', r: 'も' },
          { t: 'つ' }, { t: '者', r: 'もの' }, { t: 'は' }, { t: '常', r: 'つね' }, { t: 'に' },
          { t: '気', r: 'き' }, { t: 'を' }, { t: 'つける。' },
        ],
        en: 'So as never to run anyone over, those holding a driver’s licence must always take care.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 5,
    section: 1,
    title: '学校で',
    targetWords: [
      '入学式', '卒業式', '通学', '学年', '学期', '欠席', '遅れる', '遅刻', 'サボる', '集中',
      'うとうと', '居眠り', '寝不足', '期間', '期限', '時間割', '項目', '座席', '締め切り', '開く',
      '一応', 'きちんと', 'きっかけ', 'かしこい', '貸し出し', '返却', '名札', '給食', '体育',
    ],
    sentences: [
      {
        seg: [
          { t: '四月', r: 'しがつ' }, { t: 'の' }, { t: '入学式', r: 'にゅうがくしき' }, { t: 'で、' }, { t: '新', r: 'あたら' },
          { t: 'しい' }, { t: '学年', r: 'がくねん' }, { t: 'が' }, { t: '始', r: 'はじ' }, { t: 'まった。' },
        ],
        en: 'With the entrance ceremony in April, the new school year began.',
      },
      {
        seg: [
          { t: '通学', r: 'つうがく' }, { t: 'に' }, { t: '一時間', r: 'いちじかん' }, { t: 'かかる' }, { t: 'ので、' },
          { t: '朝', r: 'あさ' }, { t: 'は' }, { t: '少', r: 'すこ' }, { t: 'し' }, { t: '早', r: 'はや' },
          { t: 'い。' },
        ],
        en: 'The commute to school takes an hour, so mornings are a little early.',
      },
      {
        seg: [
          { t: '電車', r: 'でんしゃ' }, { t: 'が' }, { t: '遅', r: 'おく' }, { t: 'れて' }, { t: '遅刻', r: 'ちこく' },
          { t: 'し' }, { t: 'そう' }, { t: 'に' }, { t: 'なり、' }, { t: 'あわてた。' },
        ],
        en: 'The train was delayed and I nearly arrived late, which flustered me.',
      },
      {
        seg: [
          { t: '欠席', r: 'けっせき' }, { t: 'も' }, { t: 'サボる' }, { t: 'こと' }, { t: 'も' },
          { t: 'せず、' }, { t: 'きちんと' }, { t: '通', r: 'かよ' }, { t: 'って' }, { t: 'いる。' },
        ],
        en: 'I neither miss class nor skip it, and attend properly.',
      },
      {
        seg: [
          { t: '寝不足', r: 'ねぶそく' }, { t: 'の' }, { t: '日', r: 'ひ' }, { t: 'は' }, { t: '集中', r: 'しゅうちゅう' },
          { t: 'できず、' }, { t: 'うとうと' }, { t: 'して' }, { t: '居眠', r: 'いねむ' }, { t: 'り' },
          { t: 'を' }, { t: 'して' }, { t: 'しまう。' },
        ],
        en: 'On days when I lack sleep I cannot concentrate, and I doze off and fall asleep.',
      },
      {
        seg: [
          { t: '時間割', r: 'じかんわり' }, { t: 'を' }, { t: '開', r: 'ひら' }, { t: 'き、' }, { t: '項目', r: 'こうもく' },
          { t: 'ごと' }, { t: 'に' }, { t: '締', r: 'し' }, { t: 'め' }, { t: '切', r: 'き' },
          { t: 'り' }, { t: 'を' }, { t: '書', r: 'か' }, { t: 'き' }, { t: '込', r: 'こ' },
          { t: 'む。' },
        ],
        en: 'I open the timetable and write in the deadline for each item.',
      },
      {
        seg: [
          { t: 'レポート' }, { t: 'の' }, { t: '期限', r: 'きげん' }, { t: 'まで' }, { t: 'の' },
          { t: '期間', r: 'きかん' }, { t: 'は、' }, { t: '一応', r: 'いちおう' }, { t: '二週間', r: 'にしゅうかん' }, { t: 'ある。' },
        ],
        en: 'The period until the report deadline is, for now, two weeks.',
      },
      {
        seg: [
          { t: '図書館', r: 'としょかん' }, { t: 'の' }, { t: '貸', r: 'か' }, { t: 'し' }, { t: '出', r: 'だ' },
          { t: 'し' }, { t: 'は' }, { t: '一人', r: 'ひとり' }, { t: '五冊', r: 'ごさつ、' }, { t: '返却', r: 'へんきゃく' },
          { t: 'も' }, { t: '忘', r: 'わす' }, { t: 'れない。' },
        ],
        en: 'The library lends five books per person, and I do not forget the return either.',
      },
      {
        seg: [
          { t: '名札', r: 'なふだ' }, { t: 'を' }, { t: 'つけた' }, { t: '一年生', r: 'いちねんせい' }, { t: 'が、' },
          { t: '座席', r: 'ざせき' }, { t: 'を' }, { t: 'さがして' }, { t: 'いた。' },
        ],
        en: 'A first-year wearing a name tag was looking for a seat.',
      },
      {
        seg: [
          { t: '給食', r: 'きゅうしょく' }, { t: 'の' }, { t: 'あと' }, { t: 'の' }, { t: '体育', r: 'たいいく' },
          { t: 'は、' }, { t: '少', r: 'すこ' }, { t: 'し' }, { t: 'つらい。' },
        ],
        en: 'PE after the school lunch is a little hard.',
      },
      {
        seg: [
          { t: 'かしこい' }, { t: '友人', r: 'ゆうじん' }, { t: 'の' }, { t: '一言', r: 'ひとこと' }, { t: 'が、' },
          { t: '勉強', r: 'べんきょう' }, { t: 'を' }, { t: '始', r: 'はじ' }, { t: 'める' }, { t: 'きっかけ' },
          { t: 'に' }, { t: 'なった。' },
        ],
        en: 'A clever friend’s single remark became the trigger for me to start studying.',
      },
      {
        seg: [
          { t: '三月', r: 'さんがつ' }, { t: 'の' }, { t: '卒業式', r: 'そつぎょうしき' }, { t: 'で、' }, { t: 'この' },
          { t: '学期', r: 'がっき' }, { t: 'も' }, { t: '終', r: 'お' }, { t: 'わる。' },
        ],
        en: 'With the graduation ceremony in March, this term too comes to an end.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 5,
    section: 2,
    title: '勉強する',
    targetWords: [
      '単語', 'アクセント', '暗記', '記憶', 'くり返す', '聞き取る', '聞き返す', '聞き直す', '言い直す',
      '英会話', '入門', '下書き', '清書', '表れる', '物語', '教科', '科目', '足し算', 'イコール',
      'グラフ', '三角形', '定規', 'センチ', '自習', 'ローマ字', '補講', 'けずる',
    ],
    sentences: [
      {
        seg: [
          { t: '新', r: 'あたら' }, { t: 'しい' }, { t: '単語', r: 'たんご' }, { t: 'を' }, { t: '暗記', r: 'あんき' },
          { t: 'し、' }, { t: 'アクセント' }, { t: 'も' }, { t: '声', r: 'こえ' }, { t: 'に' },
          { t: '出', r: 'だ' }, { t: 'して' }, { t: '覚', r: 'おぼ' }, { t: 'える。' },
        ],
        en: 'I memorise new words and learn their accent by saying them aloud.',
      },
      {
        seg: [
          { t: 'くり' }, { t: '返', r: 'かえ' }, { t: 'す' }, { t: 'ほど' }, { t: '記憶', r: 'きおく' },
          { t: 'に' }, { t: '残', r: 'のこ' }, { t: 'り、' }, { t: '力', r: 'ちから' }, { t: 'が' },
          { t: '表', r: 'あらわ' }, { t: 'れて' }, { t: 'くる。' },
        ],
        en: 'The more I repeat, the more it stays in memory and my ability shows.',
      },
      {
        seg: [
          { t: '聞', r: 'き' }, { t: 'き' }, { t: '取', r: 'と' }, { t: 'れない' }, { t: 'ところ' },
          { t: 'は' }, { t: '聞', r: 'き' }, { t: 'き' }, { t: '返', r: 'かえ' }, { t: 'し、' },
          { t: 'もう' }, { t: '一度', r: 'いちど' }, { t: '聞', r: 'き' }, { t: 'き' }, { t: '直', r: 'なお' },
          { t: 'す。' },
        ],
        en: 'Where I cannot catch what is said I ask again, and listen once more.',
      },
      {
        seg: [
          { t: 'うまく' }, { t: '言', r: 'い' }, { t: 'えなかった' }, { t: 'とき' }, { t: 'は、' },
          { t: 'ゆっくり' }, { t: '言', r: 'い' }, { t: 'い' }, { t: '直', r: 'なお' }, { t: 'す。' },
        ],
        en: 'When I cannot say it well, I rephrase it slowly.',
      },
      {
        seg: [
          { t: '英会話', r: 'えいかいわ' }, { t: 'の' }, { t: '入門', r: 'にゅうもん' }, { t: 'の' }, { t: 'クラス' },
          { t: 'で、' }, { t: '短', r: 'みじか' }, { t: 'い' }, { t: '物語', r: 'ものがたり' }, { t: 'を' },
          { t: '読', r: 'よ' }, { t: 'んだ。' },
        ],
        en: 'In the introductory English conversation class we read a short story.',
      },
      {
        seg: [
          { t: '下書', r: 'したが' }, { t: 'き' }, { t: 'を' }, { t: 'して' }, { t: 'から' },
          { t: '清書', r: 'せいしょ' }, { t: 'する' }, { t: 'と、' }, { t: 'まちがい' }, { t: 'が' },
          { t: '減', r: 'へ' }, { t: 'る。' },
        ],
        en: 'If you make a rough draft before writing the fair copy, mistakes decrease.',
      },
      {
        seg: [
          { t: '得意', r: 'とくい' }, { t: 'な' }, { t: '教科', r: 'きょうか' }, { t: 'も' }, { t: '苦手', r: 'にがて' },
          { t: 'な' }, { t: '科目', r: 'かもく' }, { t: 'も、' }, { t: '自習', r: 'じしゅう' }, { t: 'の' },
          { t: '時間', r: 'じかん' }, { t: 'に' }, { t: '進', r: 'すす' }, { t: 'める。' },
        ],
        en: 'Both subjects I am good at and ones I am weak at, I work on during self-study.',
      },
      {
        seg: [
          { t: 'えんぴつ' }, { t: 'を' }, { t: 'けずり、' }, { t: '定規', r: 'じょうぎ' }, { t: 'で' },
          { t: '十', r: 'じゅう' }, { t: 'センチ' }, { t: 'の' }, { t: '線', r: 'せん' }, { t: 'を' },
          { t: '引', r: 'ひ' }, { t: 'く。' },
        ],
        en: 'I sharpen my pencil and draw a ten-centimetre line with a ruler.',
      },
      {
        seg: [
          { t: '三角形', r: 'さんかっけい' }, { t: 'の' }, { t: '面積', r: 'めんせき' }, { t: 'を' }, { t: '足', r: 'た' },
          { t: 'し' }, { t: '算', r: 'ざん' }, { t: 'で' }, { t: '求', r: 'もと' }, { t: 'め、' },
          { t: 'グラフ' }, { t: 'に' }, { t: 'した。' },
        ],
        en: 'I found the area of the triangle by addition and made it into a graph.',
      },
      {
        seg: [
          { t: '答', r: 'こた' }, { t: 'え' }, { t: 'が' }, { t: 'イコール' }, { t: 'で' },
          { t: '結', r: 'むす' }, { t: 'ばれる' }, { t: 'と、' }, { t: 'すっきり' }, { t: 'する。' },
        ],
        en: 'When the answers are joined by an equals sign, it feels satisfying.',
      },
      {
        seg: [
          { t: 'ローマ字', r: 'じ' }, { t: 'の' }, { t: '書', r: 'か' }, { t: 'き方', r: 'かた' }, { t: 'は、' },
          { t: '補講', r: 'ほこう' }, { t: 'で' }, { t: 'もう' }, { t: '一度', r: 'いちど' }, { t: '習', r: 'なら' },
          { t: 'った。' },
        ],
        en: 'I learned how to write romaji once more in a supplementary lesson.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 5,
    section: 3,
    title: '日本の大学',
    targetWords: [
      '学部', '文系', '理系', '学科', '専攻', '前期', '学費', '奨学金', '公立', '私立', '教授',
      '講義', 'えらい', 'ゼミ', 'テーマ', '手続き', '日付', '筆者', '内容', 'まとめる', '仕上げる',
      '提出', '進路', '大学院', '進学', '一人暮らし', 'アルバイト', '時給', '寮', '休学', '退学',
    ],
    sentences: [
      {
        seg: [
          { t: '高校', r: 'こうこう' }, { t: 'の' }, { t: '終', r: 'お' }, { t: 'わり' }, { t: 'に' },
          { t: '進路', r: 'しんろ' }, { t: 'を' }, { t: '考', r: 'かんが' }, { t: 'え、' }, { t: '大学', r: 'だいがく' },
          { t: 'へ' }, { t: 'の' }, { t: '進学', r: 'しんがく' }, { t: 'を' }, { t: '決', r: 'き' },
          { t: 'めた。' },
        ],
        en: 'At the end of high school I thought about my future course and decided to go on to university.',
      },
      {
        seg: [
          { t: '文系', r: 'ぶんけい' }, { t: 'か' }, { t: '理系', r: 'りけい' }, { t: 'か' }, { t: 'で' },
          { t: '迷', r: 'まよ' }, { t: 'い、' }, { t: 'いま' }, { t: 'の' }, { t: '学部', r: 'がくぶ' },
          { t: 'と' }, { t: '学科', r: 'がっか' }, { t: 'を' }, { t: '選', r: 'えら' }, { t: 'んだ。' },
        ],
        en: 'I hesitated between humanities and sciences, and chose my present faculty and department.',
      },
      {
        seg: [
          { t: '公立', r: 'こうりつ' }, { t: 'より' }, { t: '私立', r: 'しりつ' }, { t: 'の' }, { t: 'ほう' },
          { t: 'が' }, { t: '学費', r: 'がくひ' }, { t: 'が' }, { t: '高', r: 'たか' }, { t: 'く、' },
          { t: '奨学金', r: 'しょうがくきん' }, { t: 'を' }, { t: '申', r: 'もう' }, { t: 'し' }, { t: '込', r: 'こ' },
          { t: 'んだ。' },
        ],
        en: 'Private universities have higher tuition than public ones, so I applied for a scholarship.',
      },
      {
        seg: [
          { t: '前期', r: 'ぜんき' }, { t: 'の' }, { t: '講義', r: 'こうぎ' }, { t: 'で' }, { t: 'は、' },
          { t: 'えらい' }, { t: '教授', r: 'きょうじゅ' }, { t: 'の' }, { t: '話', r: 'はなし' }, { t: 'を' },
          { t: '聞', r: 'き' }, { t: 'く' }, { t: '機会', r: 'きかい' }, { t: 'が' }, { t: 'あった。' },
        ],
        en: 'In the first term’s lectures I had the chance to hear a distinguished professor speak.',
      },
      {
        seg: [
          { t: 'ゼミ' }, { t: 'の' }, { t: 'テーマ' }, { t: 'を' }, { t: '決', r: 'き' },
          { t: 'め、' }, { t: '筆者', r: 'ひっしゃ' }, { t: 'の' }, { t: '主張', r: 'しゅちょう' }, { t: 'を' },
          { t: 'まとめる。' },
        ],
        en: 'I decide on the seminar theme and summarise the author’s argument.',
      },
      {
        seg: [
          { t: '内容', r: 'ないよう' }, { t: 'を' }, { t: '仕上', r: 'しあ' }, { t: 'げ、' }, { t: '日付', r: 'ひづけ' },
          { t: 'を' }, { t: '書', r: 'か' }, { t: 'いて' }, { t: '提出', r: 'ていしゅつ' }, { t: 'した。' },
        ],
        en: 'I completed the content, wrote the date and submitted it.',
      },
      {
        seg: [
          { t: '手続', r: 'てつづ' }, { t: 'き' }, { t: 'が' }, { t: '多', r: 'おお' }, { t: 'く、' },
          { t: '窓口', r: 'まどぐち' }, { t: 'を' }, { t: '何度', r: 'なんど' }, { t: 'も' }, { t: 'たずねた。' },
        ],
        en: 'There was a lot of paperwork, and I visited the counter many times.',
      },
      {
        seg: [
          { t: '寮', r: 'りょう' }, { t: 'を' }, { t: '出', r: 'で' }, { t: 'て' }, { t: '一人暮', r: 'ひとりぐ' },
          { t: 'らし' }, { t: 'を' }, { t: '始', r: 'はじ' }, { t: 'め、' }, { t: 'アルバイト' },
          { t: 'も' }, { t: '探', r: 'さが' }, { t: 'した。' },
        ],
        en: 'I left the dormitory, began living alone and looked for a part-time job.',
      },
      {
        seg: [
          { t: '時給', r: 'じきゅう' }, { t: 'は' }, { t: '高', r: 'たか' }, { t: 'く' }, { t: 'ない' },
          { t: 'が、' }, { t: '続', r: 'つづ' }, { t: 'けられる' }, { t: '仕事', r: 'しごと' }, { t: 'だ。' },
        ],
        en: 'The hourly wage is not high, but it is work I can keep doing.',
      },
      {
        seg: [
          { t: '休学', r: 'きゅうがく' }, { t: 'する' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: '退学', r: 'たいがく' },
          { t: 'する' }, { t: '人', r: 'ひと' }, { t: 'も' }, { t: 'いる' }, { t: '中', r: 'なか' },
          { t: 'で、' }, { t: '大学院', r: 'だいがくいん' }, { t: 'を' }, { t: '目指', r: 'めざ' }, { t: 'す' },
          { t: '友人', r: 'ゆうじん' }, { t: 'も' }, { t: 'いる。' },
        ],
        en: 'Among those who take leave or drop out, there are also friends aiming for graduate school.',
      },
      {
        seg: [
          { t: '専攻', r: 'せんこう' }, { t: 'を' }, { t: '生', r: 'い' }, { t: 'かせる' }, { t: '道', r: 'みち' },
          { t: 'を、' }, { t: 'いま' }, { t: 'も' }, { t: '探', r: 'さが' }, { t: 'して' },
          { t: 'いる。' },
        ],
        en: 'I am still searching for a path where I can make use of my major.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 5,
    section: 4,
    title: '試験',
    targetWords: [
      '受験', '受験生', '合格', '配る', '氏名', '裏返す', '問い', '解く', '正解', '正確', 'すらすら',
      'ちっとも', 'カンニング', 'ぎりぎり', '余る', '適当な', 'でたらめ', '間違い', '優れる', '実力',
      '結果', '少数', '可能性', 'あきらめる', '掲示板',
    ],
    sentences: [
      {
        seg: [
          { t: '受験生', r: 'じゅけんせい' }, { t: 'に' }, { t: 'とって、' }, { t: '受験', r: 'じゅけん' }, { t: 'の' },
          { t: '日', r: 'ひ' }, { t: 'は' }, { t: '一年', r: 'いちねん' }, { t: 'で' }, { t: 'いちばん' },
          { t: '長', r: 'なが' }, { t: 'い。' },
        ],
        en: 'For an exam candidate, the day of the exam is the longest of the year.',
      },
      {
        seg: [
          { t: '問題用紙', r: 'もんだいようし' }, { t: 'が' }, { t: '配', r: 'くば' }, { t: 'られ、' }, { t: '氏名', r: 'しめい' },
          { t: 'を' }, { t: '書', r: 'か' }, { t: 'いて' }, { t: 'から' }, { t: '裏返', r: 'うらがえ' },
          { t: 'す。' },
        ],
        en: 'The question papers are handed out; I write my name and turn it over.',
      },
      {
        seg: [
          { t: '最初', r: 'さいしょ' }, { t: 'の' }, { t: '問', r: 'と' }, { t: 'い' }, { t: 'は' },
          { t: 'すらすら' }, { t: '解', r: 'と' }, { t: 'けた' }, { t: 'が、' }, { t: '次', r: 'つぎ' },
          { t: 'は' }, { t: 'ちっとも' }, { t: '分', r: 'わ' }, { t: 'からなかった。' },
        ],
        en: 'I solved the first question smoothly, but the next I did not understand at all.',
      },
      {
        seg: [
          { t: '適当', r: 'てきとう' }, { t: 'に' }, { t: '答', r: 'こた' }, { t: 'える' }, { t: 'の' },
          { t: 'は' }, { t: 'でたらめ' }, { t: 'と' }, { t: '同', r: 'おな' }, { t: 'じ' },
          { t: 'だ' }, { t: 'と' }, { t: '思', r: 'おも' }, { t: 'い、' }, { t: '落', r: 'お' },
          { t: 'ち' }, { t: '着', r: 'つ' }, { t: 'いて' }, { t: '考', r: 'かんが' }, { t: 'えた。' },
        ],
        en: 'Thinking that answering slapdash is the same as nonsense, I thought calmly.',
      },
      {
        seg: [
          { t: '正確', r: 'せいかく' }, { t: 'に' }, { t: '書', r: 'か' }, { t: 'けば、' }, { t: '正解', r: 'せいかい' },
          { t: 'に' }, { t: '近', r: 'ちか' }, { t: 'づく。' },
        ],
        en: 'If you write accurately, you get closer to the correct answer.',
      },
      {
        seg: [
          { t: 'カンニング' }, { t: 'を' }, { t: 'する' }, { t: '人', r: 'ひと' }, { t: 'は' },
          { t: '少数', r: 'しょうすう' }, { t: 'だ' }, { t: 'が、' }, { t: '見', r: 'み' }, { t: 'つかれば' },
          { t: '大', r: 'おお' }, { t: 'きな' }, { t: '間違', r: 'まちが' }, { t: 'い' }, { t: 'に' },
          { t: 'なる。' },
        ],
        en: 'Those who cheat are a minority, but if caught it becomes a serious mistake.',
      },
      {
        seg: [
          { t: '時間', r: 'じかん' }, { t: 'は' }, { t: 'ぎりぎり' }, { t: 'で、' }, { t: '見直', r: 'みなお' },
          { t: 'す' }, { t: '時間', r: 'じかん' }, { t: 'は' }, { t: '余', r: 'あま' }, { t: 'らなかった。' },
        ],
        en: 'Time was just barely enough; none was left over for checking.',
      },
      {
        seg: [
          { t: '実力', r: 'じつりょく' }, { t: 'が' }, { t: '優', r: 'すぐ' }, { t: 'れて' }, { t: 'いる' },
          { t: '人', r: 'ひと' }, { t: 'でも、' }, { t: '結果', r: 'けっか' }, { t: 'は' }, { t: '分', r: 'わ' },
          { t: 'からない。' },
        ],
        en: 'Even for someone whose true ability is excellent, the result is unknown.',
      },
      {
        seg: [
          { t: '掲示板', r: 'けいじばん' }, { t: 'の' }, { t: '前', r: 'まえ' }, { t: 'で、' }, { t: '合格', r: 'ごうかく' },
          { t: 'の' }, { t: '番号', r: 'ばんごう' }, { t: 'を' }, { t: 'さがした。' },
        ],
        en: 'In front of the notice board, I searched for my pass number.',
      },
      {
        seg: [
          { t: '可能性', r: 'かのうせい' }, { t: 'が' }, { t: 'ある' }, { t: '限', r: 'かぎ' }, { t: 'り、' },
          { t: 'あきらめる' }, { t: '必要', r: 'ひつよう' }, { t: 'は' }, { t: 'ない。' },
        ],
        en: 'As long as there is a possibility, there is no need to give up.',
      },
    ],
  },
  {
    level: 'N3',
    chapter: 5,
    section: 5,
    title: 'もっとがんばろう',
    targetWords: [
      '知識', '理解', '目指す', '試す', '自信', 'やる気', 'くやしい', 'レベル', '利口', 'さっそく',
      'ざっと', 'しっかり', 'じっくり', '相当', 'まあまあ', '努力', 'なまける', '得意な', '苦手な',
      'マスター', '問い合わせる',
    ],
    sentences: [
      {
        seg: [
          { t: '新', r: 'あたら' }, { t: 'しい' }, { t: '知識', r: 'ちしき' }, { t: 'を' }, { t: '増', r: 'ふ' },
          { t: 'やす' }, { t: 'こと' }, { t: 'が、' }, { t: 'いまの' }, { t: '目標', r: 'もくひょう' },
          { t: 'だ。' },
        ],
        en: 'Increasing my knowledge is my current goal.',
      },
      {
        seg: [
          { t: 'ざっと' }, { t: '目', r: 'め' }, { t: 'を' }, { t: '通', r: 'とお' }, { t: 'した' },
          { t: 'あと、' }, { t: 'じっくり' }, { t: '読', r: 'よ' }, { t: 'み' }, { t: '直', r: 'なお' },
          { t: 'して' }, { t: '理解', r: 'りかい' }, { t: 'を' }, { t: '深', r: 'ふか' }, { t: 'める。' },
        ],
        en: 'After glancing through it, I reread it carefully and deepen my understanding.',
      },
      {
        seg: [
          { t: '苦手', r: 'にがて' }, { t: 'な' }, { t: '分野', r: 'ぶんや' }, { t: 'は' }, { t: 'しっかり' },
          { t: '復習', r: 'ふくしゅう' }, { t: 'し、' }, { t: '得意', r: 'とくい' }, { t: 'な' }, { t: '分野', r: 'ぶんや' },
          { t: 'で' }, { t: '自信', r: 'じしん' }, { t: 'を' }, { t: 'つける。' },
        ],
        en: 'I review my weak areas thoroughly and build confidence in my strong ones.',
      },
      {
        seg: [
          { t: '試験', r: 'しけん' }, { t: 'の' }, { t: '結果', r: 'けっか' }, { t: 'は' }, { t: 'まあまあ' },
          { t: 'で、' }, { t: 'くやしい' }, { t: '気持', r: 'きも' }, { t: 'ち' }, { t: 'も' },
          { t: '残', r: 'のこ' }, { t: 'った。' },
        ],
        en: 'The exam result was so-so, and a frustrated feeling remained.',
      },
      {
        seg: [
          { t: '相当', r: 'そうとう' }, { t: '努力', r: 'どりょく' }, { t: 'した' }, { t: 'つもり' }, { t: 'でも、' },
          { t: 'レベル' }, { t: 'は' }, { t: 'すぐ' }, { t: 'に' }, { t: 'は' },
          { t: '上', r: 'あ' }, { t: 'がらない。' },
        ],
        en: 'Even when I think I have made considerable effort, the level does not rise at once.',
      },
      {
        seg: [
          { t: 'なまけて' }, { t: 'しまう' }, { t: '日', r: 'ひ' }, { t: 'も' }, { t: 'ある' },
          { t: 'が、' }, { t: 'やる気', r: 'き' }, { t: 'は' }, { t: '消', r: 'き' }, { t: 'えない。' },
        ],
        en: 'There are days when I slack off, but the motivation does not disappear.',
      },
      {
        seg: [
          { t: '分', r: 'わ' }, { t: 'からない' }, { t: 'こと' }, { t: 'は、' }, { t: 'さっそく' },
          { t: '先生', r: 'せんせい' }, { t: 'に' }, { t: '問', r: 'と' }, { t: 'い' }, { t: '合', r: 'あ' },
          { t: 'わせる。' },
        ],
        en: 'What I do not understand, I ask the teacher about right away.',
      },
      {
        seg: [
          { t: '利口', r: 'りこう' }, { t: 'な' }, { t: 'やり方', r: 'かた' }, { t: 'を' }, { t: '試', r: 'ため' },
          { t: 'し' }, { t: 'ながら、' }, { t: '少', r: 'すこ' }, { t: 'し' }, { t: 'ずつ' },
          { t: 'マスター' }, { t: 'して' }, { t: 'いく。' },
        ],
        en: 'Trying out clever methods, I gradually master it.',
      },
      {
        seg: [
          { t: '高', r: 'たか' }, { t: 'い' }, { t: 'ところ' }, { t: 'を' }, { t: '目指', r: 'めざ' },
          { t: 'す' }, { t: '人', r: 'ひと' }, { t: 'ほど、' }, { t: '静', r: 'しず' }, { t: 'か' },
          { t: 'に' }, { t: '続', r: 'つづ' }, { t: 'けて' }, { t: 'いる。' },
        ],
        en: 'The higher someone aims, the more quietly they keep going.',
      },
    ],
  },
]
