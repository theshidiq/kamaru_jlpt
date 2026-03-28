import type { VocabWord, ChapterInfo } from '@/types/vocab'

export const TOTAL_SECTIONS = 42 // 7 chapters × 6 sections
const START_DATE = new Date('2026-03-26')

export function getTodaySection() {
  const today = new Date()
  const daysElapsed = Math.floor((today.getTime() - START_DATE.getTime()) / 86400000)
  const sectionIndex = ((daysElapsed % TOTAL_SECTIONS) + TOTAL_SECTIONS) % TOTAL_SECTIONS
  const chapter = Math.floor(sectionIndex / 6) + 1
  const section = (sectionIndex % 6) + 1
  return { chapter, section, sectionIndex, daysElapsed }
}

function decodeEntities(s: string): string {
  return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
}

export function cleanWord(raw: string): string {
  const decoded = decodeEntities(raw)
  return decoded.replace(/[＜<]する[＞>]/g, '').replace(/[＜<][^＞>]*[＞>]/g, '').trim()
}

export function isSuruVerb(raw: string): boolean {
  const decoded = decodeEntities(raw)
  return /[＜<]する[＞>]/.test(decoded)
}

// Furigana lookup for kanji words
export const FURIGANA_MAP: Record<string, string> = {
  // Chapter 1 — Daily Life / Time
  '最近': 'さいきん',
  'この間': 'このあいだ',
  '今度': 'こんど',
  '昼間': 'ひるま',
  '夕方': 'ゆうがた',
  '夜中': 'よなか',
  '明日': 'あした',
  '今夜': 'こんや',
  '今週': 'こんしゅう',
  '今月': 'こんげつ',
  '再来週': 'さらいしゅう',
  '再来月': 'さらいげつ',
  '再来年': 'さらいねん',
  '毎週': 'まいしゅう',
  '毎月': 'まいつき',
  '毎年': 'まいとし',
  '平日': 'へいじつ',
  '時間': 'じかん',
  '時代': 'じだい',
  '期間': 'きかん',
  '予定': 'よてい',
  '準備': 'じゅんび',
  '用意': 'ようい',
  '目覚まし': 'めざまし',
  '生活': 'せいかつ',
  '食事': 'しょくじ',
  '食欲': 'しょくよく',
  '朝食': 'ちょうしょく',
  '昼食': 'ちゅうしょく',
  '夕食': 'ゆうしょく',
  '料理': 'りょうり',
  '野菜': 'やさい',
  '果物': 'くだもの',
  '飲み物': 'のみもの',
  '食べ物': 'たべもの',
  '肉': 'にく',
  '魚': 'さかな',
  '米': 'こめ',
  '砂糖': 'さとう',
  '塩': 'しお',
  '油': 'あぶら',
  '皿': 'さら',
  '茶碗': 'ちゃわん',
  '箸': 'はし',
  '冷蔵庫': 'れいぞうこ',
  // Chapter 1 — Body / Health
  '身体': 'からだ',
  '体重': 'たいじゅう',
  '体温': 'たいおん',
  '血液': 'けつえき',
  '心臓': 'しんぞう',
  '胃': 'い',
  '腸': 'ちょう',
  '頭痛': 'ずつう',
  '腹痛': 'ふくつう',
  '発熱': 'はつねつ',
  '病気': 'びょうき',
  '病院': 'びょういん',
  '医者': 'いしゃ',
  '看護師': 'かんごし',
  '薬': 'くすり',
  '注射': 'ちゅうしゃ',
  '手術': 'しゅじゅつ',
  '入院': 'にゅういん',
  '退院': 'たいいん',
  '回復': 'かいふく',
  // Chapter 2 — People / Relationships
  '人間': 'にんげん',
  '家族': 'かぞく',
  '両親': 'りょうしん',
  '祖父': 'そふ',
  '祖母': 'そぼ',
  '兄弟': 'きょうだい',
  '姉妹': 'しまい',
  '夫婦': 'ふうふ',
  '友人': 'ゆうじん',
  '知人': 'ちじん',
  '恋人': 'こいびと',
  '隣人': 'りんじん',
  '同僚': 'どうりょう',
  '上司': 'じょうし',
  '部下': 'ぶか',
  '先輩': 'せんぱい',
  '後輩': 'こうはい',
  '他人': 'たにん',
  '性格': 'せいかく',
  '態度': 'たいど',
  '礼儀': 'れいぎ',
  '感情': 'かんじょう',
  '喜び': 'よろこび',
  '悲しみ': 'かなしみ',
  '怒り': 'いかり',
  '驚き': 'おどろき',
  '心配': 'しんぱい',
  '緊張': 'きんちょう',
  '恥ずかしい': 'はずかしい',
  '寂しい': 'さびしい',
  // Chapter 2 — Work / Society
  '会社': 'かいしゃ',
  '仕事': 'しごと',
  '職業': 'しょくぎょう',
  '労働': 'ろうどう',
  '給料': 'きゅうりょう',
  '残業': 'ざんぎょう',
  '休暇': 'きゅうか',
  '会議': 'かいぎ',
  '報告': 'ほうこく',
  '連絡': 'れんらく',
  '相談': 'そうだん',
  '依頼': 'いらい',
  '申し込み': 'もうしこみ',
  '申請': 'しんせい',
  '提出': 'ていしゅつ',
  '書類': 'しょるい',
  '資料': 'しりょう',
  '記録': 'きろく',
  '問題': 'もんだい',
  '解決': 'かいけつ',
  // Chapter 3 — Leisure / Travel
  '旅行': 'りょこう',
  '出張': 'しゅっちょう',
  '観光': 'かんこう',
  '景色': 'けしき',
  '写真': 'しゃしん',
  '記念': 'きねん',
  '土産': 'みやげ',
  '宿泊': 'しゅくはく',
  '予約': 'よやく',
  '案内': 'あんない',
  '地図': 'ちず',
  '道路': 'どうろ',
  '信号': 'しんごう',
  '交差点': 'こうさてん',
  '駅': 'えき',
  '空港': 'くうこう',
  '港': 'みなと',
  '乗り物': 'のりもの',
  '電車': 'でんしゃ',
  '新幹線': 'しんかんせん',
  '飛行機': 'ひこうき',
  '船': 'ふね',
  '自転車': 'じてんしゃ',
  '運転': 'うんてん',
  '駐車場': 'ちゅうしゃじょう',
  // Chapter 3 — Shopping / Money
  '買い物': 'かいもの',
  '値段': 'ねだん',
  '割引': 'わりびき',
  '消費税': 'しょうひぜい',
  '支払い': 'しはらい',
  '現金': 'げんきん',
  '銀行': 'ぎんこう',
  '貯金': 'ちょきん',
  '借金': 'しゃっきん',
  '財布': 'さいふ',
  '領収書': 'りょうしゅうしょ',
  // Chapter 4 — Nature / Environment
  '自然': 'しぜん',
  '環境': 'かんきょう',
  '天気': 'てんき',
  '天候': 'てんこう',
  '気温': 'きおん',
  '気候': 'きこう',
  '季節': 'きせつ',
  '春': 'はる',
  '夏': 'なつ',
  '秋': 'あき',
  '冬': 'ふゆ',
  '雨': 'あめ',
  '雪': 'ゆき',
  '風': 'かぜ',
  '台風': 'たいふう',
  '地震': 'じしん',
  '洪水': 'こうずい',
  '火山': 'かざん',
  '山': 'やま',
  '川': 'かわ',
  '海': 'うみ',
  '池': 'いけ',
  '森': 'もり',
  '花': 'はな',
  '木': 'き',
  '草': 'くさ',
  '動物': 'どうぶつ',
  '植物': 'しょくぶつ',
  // Chapter 4 — Housing
  '建物': 'たてもの',
  '住宅': 'じゅうたく',
  '部屋': 'へや',
  '玄関': 'げんかん',
  '廊下': 'ろうか',
  '階段': 'かいだん',
  '窓': 'まど',
  '壁': 'かべ',
  '天井': 'てんじょう',
  '床': 'ゆか',
  '屋根': 'やね',
  '庭': 'にわ',
  '家賃': 'やちん',
  '引越し': 'ひっこし',
  // Chapter 5 — Education
  '学校': 'がっこう',
  '大学': 'だいがく',
  '授業': 'じゅぎょう',
  '宿題': 'しゅくだい',
  '試験': 'しけん',
  '成績': 'せいせき',
  '卒業': 'そつぎょう',
  '入学': 'にゅうがく',
  '留学': 'りゅうがく',
  '研究': 'けんきゅう',
  '実験': 'じっけん',
  '図書館': 'としょかん',
  '教室': 'きょうしつ',
  '黒板': 'こくばん',
  '教科書': 'きょうかしょ',
  '辞書': 'じしょ',
  '鉛筆': 'えんぴつ',
  '消しゴム': 'けしごむ',
  // Chapter 6 — Society / Events
  '社会': 'しゃかい',
  '政治': 'せいじ',
  '経済': 'けいざい',
  '文化': 'ぶんか',
  '伝統': 'でんとう',
  '行事': 'ぎょうじ',
  '祭り': 'まつり',
  '結婚': 'けっこん',
  '離婚': 'りこん',
  '葬式': 'そうしき',
  '式典': 'しきてん',
  '法律': 'ほうりつ',
  '権利': 'けんり',
  '義務': 'ぎむ',
  '責任': 'せきにん',
  '選挙': 'せんきょ',
  '税金': 'ぜいきん',
  '保険': 'ほけん',
  '警察': 'けいさつ',
  '消防': 'しょうぼう',
  // Chapter 7 — Media / Technology
  '情報': 'じょうほう',
  '新聞社': 'しんぶんしゃ',
  '出版': 'しゅっぱん',
  '放送': 'ほうそう',
  '番組': 'ばんぐみ',
  '広告': 'こうこく',
  '技術': 'ぎじゅつ',
  '機械': 'きかい',
  '電話': 'でんわ',
  '電気': 'でんき',
  '電池': 'でんち',
  '画面': 'がめん',
  '説明書': 'せつめいしょ',
  '操作': 'そうさ',
  '故障': 'こしょう',
  '修理': 'しゅうり',
  '交換': 'こうかん',
  '開発': 'かいはつ',
  '発明': 'はつめい',
  '発見': 'はっけん',
}

let cachedVocab: VocabWord[] | null = null

export async function loadVocab(): Promise<VocabWord[]> {
  if (cachedVocab) return cachedVocab

  const res = await fetch('/jtest_n4_vocab.json')
  const raw: Array<{
    chapter: number
    chapter_title: string
    section: number
    section_title: string
    word: string
    meaning_vi: string
    meaning_en: string
  }> = await res.json()

  cachedVocab = raw.map(item => ({
    ...item,
    wordClean: cleanWord(item.word),
    isSuruVerb: isSuruVerb(item.word),
    furigana: FURIGANA_MAP[cleanWord(item.word)],
  }))

  return cachedVocab
}

export function getSection(vocab: VocabWord[], chapter: number, section: number): VocabWord[] {
  return vocab.filter(w => w.chapter === chapter && w.section === section)
}

export function getChapterWords(vocab: VocabWord[], chapter: number): VocabWord[] {
  return vocab.filter(w => w.chapter === chapter)
}

export function buildChapterMap(vocab: VocabWord[]): ChapterInfo[] {
  const chapters: Map<number, ChapterInfo> = new Map()

  for (const word of vocab) {
    if (!chapters.has(word.chapter)) {
      chapters.set(word.chapter, {
        chapter: word.chapter,
        chapter_title: word.chapter_title,
        sections: [],
        totalWords: 0,
      })
    }
    const ch = chapters.get(word.chapter)!
    ch.totalWords++

    let sec = ch.sections.find(s => s.section === word.section)
    if (!sec) {
      const sectionIndex = (word.chapter - 1) * 6 + (word.section - 1)
      sec = {
        chapter: word.chapter,
        section: word.section,
        chapter_title: word.chapter_title,
        section_title: word.section_title,
        words: [],
        sectionIndex,
      }
      ch.sections.push(sec)
    }
    sec.words.push(word)
  }

  return Array.from(chapters.values()).sort((a, b) => a.chapter - b.chapter)
}

export function getSectionTitle(vocab: VocabWord[], chapter: number, section: number): string {
  const w = vocab.find(v => v.chapter === chapter && v.section === section)
  return w?.section_title ?? ''
}

export function getChapterTitle(vocab: VocabWord[], chapter: number): string {
  const w = vocab.find(v => v.chapter === chapter)
  return w?.chapter_title ?? ''
}

export function filterVocab(
  vocab: VocabWord[],
  query: string,
  statusFilter: 'all' | 'new' | 'learning' | 'known',
  statuses: Record<string, string>,
  chapterFilter?: number,
): VocabWord[] {
  return vocab.filter(w => {
    if (chapterFilter && w.chapter !== chapterFilter) return false
    if (statusFilter !== 'all') {
      const s = statuses[w.wordClean] ?? 'new'
      if (s !== statusFilter) return false
    }
    if (query) {
      const q = query.toLowerCase()
      return (
        w.wordClean.includes(q) ||
        w.meaning_en.toLowerCase().includes(q) ||
        w.meaning_vi.toLowerCase().includes(q)
      )
    }
    return true
  })
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
