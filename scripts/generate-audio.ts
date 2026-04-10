/**
 * Audio generation script for Listening Quiz
 * Run once: npx tsx scripts/generate-audio.ts
 *
 * Reads VITE_MINIMAX_API_KEY from .env at project root.
 * Outputs MP3 files to public/audio/listening/[id].mp3
 * Writes a manifest to public/audio/listening/manifest.json
 *
 * Idempotent — skips questions whose file already exists.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'
import os from 'os'

// ─── ffmpeg check ─────────────────────────────────────────────────────────────
try {
  execSync('ffmpeg -version', { stdio: 'ignore' })
} catch {
  console.error('❌  ffmpeg not found. Run: brew install ffmpeg')
  process.exit(1)
}

// ─── Load .env manually (no Vite here) ───────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const envPath = path.join(ROOT, '.env')

const envVars: Record<string, string> = {}
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const eqIdx = line.indexOf('=')
    if (eqIdx > 0 && !line.startsWith('#')) {
      const key = line.slice(0, eqIdx).trim()
      const val = line.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '')
      envVars[key] = val
    }
  }
}

const API_KEY = envVars['VITE_MINIMAX_API_KEY']
const GROUP_ID = envVars['VITE_MINIMAX_GROUP_ID']
if (!API_KEY) {
  console.error('❌  VITE_MINIMAX_API_KEY not found in .env')
  process.exit(1)
}
if (!GROUP_ID) {
  console.error('❌  VITE_MINIMAX_GROUP_ID not found in .env')
  process.exit(1)
}

const API_URL = `https://api.minimax.io/v1/t2a_v2?GroupId=${GROUP_ID}`
const OUT_DIR = path.join(ROOT, 'public', 'audio', 'listening')
const AMBIANCE_DIR = path.join(ROOT, 'public', 'audio', 'ambiance')
const MANIFEST_PATH = path.join(OUT_DIR, 'manifest.json')

// ─── Types ────────────────────────────────────────────────────────────────────
interface DialogueLine {
  speaker: string
  text: string
  voiceId: string
  emotion: 'neutral' | 'happy' | 'sad'
  speed: number
}

interface ListeningQuestion {
  id: string
  scene: string
  script: DialogueLine[]
  question: string
}

interface ManifestEntry {
  id: string
  audioUrl: string
  durationMs: number
}

// ─── Voice constants ──────────────────────────────────────────────────────────
const NARRATOR = 'Japanese_DependableWoman'

// Per-question voice casting (M/F matched to character role in each scene)
const QUESTION_VOICES: Record<string, { M: string; F: string }> = {
  lq001: { M: 'Japanese_IntellectualSenior', F: 'Japanese_GracefulMaiden' },  // office coworkers
  lq002: { M: 'Japanese_GentleButler',       F: 'Japanese_GracefulMaiden' },  // station staff + passenger
  lq003: { M: 'Japanese_IntellectualSenior', F: 'Japanese_KindLady'       },  // restaurant customer + waitress
  lq004: { M: 'Japanese_InnocentBoy',        F: 'Japanese_KindLady'       },  // home son + mother
  lq005: { M: 'Japanese_SportyStudent',      F: 'Japanese_DependableWoman'},  // classroom student + teacher
  lq006: { M: 'Japanese_GentleButler',       F: 'Japanese_GracefulMaiden' },  // store staff + customer
  lq007: { M: 'Japanese_IntellectualSenior', F: 'Japanese_GracefulMaiden' },  // office coworkers
  lq008: { M: 'Japanese_OptimisticYouth',    F: 'Japanese_GracefulMaiden' },  // restaurant friends
  lq009: { M: 'Japanese_SeriousCommander',   F: 'Japanese_DependableWoman'},  // station PA
  lq010: { M: 'Japanese_IntellectualSenior', F: 'Japanese_GracefulMaiden' },  // home husband + wife
  lq011: { M: 'Japanese_SportyStudent',      F: 'Japanese_GracefulMaiden' },  // classroom students
  lq012: { M: 'Japanese_IntellectualSenior', F: 'Japanese_KindLady'       },  // store customer + bookshop staff
  lq013: { M: 'Japanese_DominantMan',        F: 'Japanese_GracefulMaiden' },  // office boss + subordinate
  lq014: { M: 'Japanese_OptimisticYouth',    F: 'Japanese_GracefulMaiden' },  // restaurant friends
  lq015: { M: 'Japanese_InnocentBoy',        F: 'Japanese_GracefulMaiden' },  // home brother + sister
  lq016: { M: 'Japanese_GentleButler',       F: 'Japanese_GracefulMaiden' },  // store pharmacist + customer
  lq017: { M: 'Japanese_IntellectualSenior', F: 'Japanese_GracefulMaiden' },  // office colleagues
  lq018: { M: 'Japanese_DependableWoman',    F: 'Japanese_DependableWoman'},  // classroom teacher monologue
  lq019: { M: 'Japanese_OptimisticYouth',    F: 'Japanese_GracefulMaiden' },  // station friends on phone
  lq020: { M: 'Japanese_IntellectualSenior', F: 'Japanese_GracefulMaiden' },  // home father + daughter
  lq021: { M: 'Japanese_SportyStudent',      F: 'Japanese_GracefulMaiden' },  // restaurant students
  lq022: { M: 'Japanese_IntellectualSenior', F: 'Japanese_GracefulMaiden' },  // office business meeting
  lq023: { M: 'Japanese_IntellectualSenior', F: 'Japanese_KindLady'       },  // store customer + staff
  lq024: { M: 'Japanese_IntellectualSenior', F: 'Japanese_DependableWoman'},  // classroom trainer monologue
  lq025: { M: 'Japanese_IntellectualSenior', F: 'Japanese_GracefulMaiden' },  // home neighbors
}

// ─── Inline question bank ─────────────────────────────────────────────────────
const V = { NARRATOR, MALE: 'Japanese_IntellectualSenior', FEMALE: 'Japanese_KindLady' }

const QUESTIONS: ListeningQuestion[] = [
  { id: 'lq001', scene: 'office',     question: '男の人はこれから何をしますか。', script: [
    { speaker: 'NARRATOR', text: '会社で、男の人と女の人が話しています。男の人はこれから何をしますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '田中さん、明日の会議の資料、もう準備できましたか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'あ、まだなんです。今日の午後には終わりそうです。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'そうですか。じゃあ、私がコピーしておきましょうか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'ありがとうございます。でも、コピーは自分でします。田中さんは会議室の予約をお願いできますか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'わかりました。じゃあ、会議室を予約しておきます。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq002', scene: 'station',    question: '女の人はまず、どこに行きますか。', script: [
    { speaker: 'NARRATOR', text: '駅で、女の人と駅員が話しています。女の人はまず、どこに行きますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'すみません、東京駅に行きたいんですが、どのホームですか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '東京駅ですか。3番ホームから中央線に乗ってください。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '乗り換えはありますか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'はい、新宿駅で山手線に乗り換えてください。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '新宿駅で乗り換えるんですね。ありがとうございます。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq003', scene: 'restaurant', question: '男の人が食事と一緒に受け取るものはどれですか。', script: [
    { speaker: 'NARRATOR', text: 'レストランで、男の人と店員が話しています。男の人が食事と一緒に受け取るものはどれですか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'すみません、ランチセットをください。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'ランチセットは、サラダとスープとライスかパンのどちらかです。どちらになさいますか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'ライスにします。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'お飲み物はいかがですか。コーヒーとオレンジジュースがあります。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'じゃあ、コーヒーは食後にお願いします。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'かしこまりました。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq004', scene: 'home',       question: '息子は今日、何時から勉強しますか。', script: [
    { speaker: 'NARRATOR', text: '家で、母と息子が話しています。息子は今日、何時から勉強しますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '晩ご飯の前に宿題は終わった？', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'まだです。算数の宿題があと1時間くらいかかります。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'じゃあ、晩ご飯は7時だから、6時から始めれば大丈夫ね。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'でも友達と電話したいんですけど…', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '電話は宿題が終わってからにしなさい。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'わかった、6時から始める。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq005', scene: 'classroom',  question: '学生は来週、何を必ず持ってこなければなりませんか。', script: [
    { speaker: 'NARRATOR', text: '学校で、先生と学生が話しています。学生は来週、何を必ず持ってこなければなりませんか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '先生、来週の授業は何を準備すればいいですか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '来週は地図を使う授業です。教科書の80ページを開いてきてください。あ、それと色鉛筆も持ってきてね。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '色鉛筆ですか。何色でもいいですか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '赤と青があれば十分ですよ。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq006', scene: 'store',      question: '女の人はいくら払いますか。', script: [
    { speaker: 'NARRATOR', text: '店で、女の人と店員が話しています。女の人はいくら払いますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'このリンゴ、一つはいくらですか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '一つ150円ですが、3つで400円になります。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'じゃあ、3つください。あと、このバナナも1房ください。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'バナナは250円です。合わせて650円になります。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'わかりました。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq007', scene: 'office',     question: '女の人は明日、どうやって会社に来ますか。', script: [
    { speaker: 'NARRATOR', text: '会社で、二人の社員が話しています。女の人は明日どうやって会社に来ますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '山本さん、明日も電車で来るんですか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '実は明日、電車が工事で止まるんです。バスは混むと思って…', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '自転車は？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'うちから遠くて、1時間以上かかるんです。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'じゃあタクシーしかないですね。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'そうします。少し高いけど仕方ないですね。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq008', scene: 'restaurant', question: '二人は何時に会う約束でしたか。', script: [
    { speaker: 'NARRATOR', text: 'カフェで、二人の友達が話しています。二人は何時に会う約束でしたか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'ごめん、遅くなって！待った？', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '少し待ったよ。3時の約束だったのに、もう3時半だよ。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '本当にごめんなさい。電車が遅れて…', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '大丈夫、気にしないで。でも次は連絡してね。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq009', scene: 'station',    question: '電車は何時ごろ到着しますか。', script: [
    { speaker: 'NARRATOR', text: '駅のホームで、アナウンスが流れています。電車は何時ごろ到着しますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'お客様にご案内いたします。5番線、15時23分発、横浜行き急行は、ただいまの時間、約10分遅れて運行しております。なお、この電車は15時33分ごろ到着予定です。お待ちのお客様にはご不便をおかけし、申し訳ございません。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq010', scene: 'home',       question: '妻はスーパーで何を買いますか。', script: [
    { speaker: 'NARRATOR', text: '家で、夫と妻が話しています。妻はスーパーで何を買いますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'ねえ、今夜の夕飯、何？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'カレーにしようと思ってたけど、ジャガイモがなかった。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'じゃあスーパーに行く？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'そうする。他に何か必要なものある？', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '牛乳がそろそろなくなりそうだよ。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'わかった。ジャガイモと牛乳を買ってくる。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq011', scene: 'classroom',  question: '二人は今日どこで勉強しますか。', script: [
    { speaker: 'NARRATOR', text: '大学で、学生同士が話しています。二人は今日どこで勉強しますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '今日の午後、一緒に図書館で勉強しない？', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '図書館か…今日は混んでそう。試験前だから。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'そうだね。じゃあカフェテリアにする？', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'カフェテリアもうるさいよ。空き教室はどう？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'あ、いいね。3階の302号室が空いてるって聞いたよ。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'そこにしよう。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq012', scene: 'store',      question: '男の人は今すぐどこに行きますか。', script: [
    { speaker: 'NARRATOR', text: '本屋で、男の人と店員が話しています。男の人は今すぐどこに行きますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'すみません、日本語の文法の本を探しているんですが。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '文法の本でしたら、2階の参考書コーナーにございます。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '辞書も2階ですか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '辞書は3階になります。N4の問題集でしたら2階にまとめてございます。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'はい、N4の問題集も合わせて探しています。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq013', scene: 'office',     question: '部下はいつレポートを提出しますか。', script: [
    { speaker: 'NARRATOR', text: '会社で、上司と部下が話しています。部下はいつレポートを提出しますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '課長、先週のセミナーのレポート、いつまでに出せばいいですか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '本当は今週の金曜日までなんだけど、出張があるから…来週の月曜日でいいよ。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'ありがとうございます。月曜日までに必ず提出します。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq014', scene: 'restaurant', question: '二人はどのテーブルに座りますか。', script: [
    { speaker: 'NARRATOR', text: 'レストランで、二人の友達が話しています。二人はどのテーブルに座りますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '窓側の席が空いてるよ。あそこにしようか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'あそこ、日が当たって暑そうじゃない？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'そうだね。じゃあ奥の席は？', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '奥は少し暗いな。入り口の近くのこの席はどう？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'ここは人の出入りが気になる…', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'じゃあ真ん中のあの4人席は？誰も座ってないよ。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'いいね、そこにしよう。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq015', scene: 'home',       question: '弟は明日の朝、何時に起きますか。', script: [
    { speaker: 'NARRATOR', text: '家で、姉と弟が話しています。弟は明日の朝、何時に起きますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'お姉ちゃん、明日の電車、何時だっけ？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '8時15分発だよ。駅まで15分かかるから、7時50分には家を出ないと。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '朝ごはんを食べる時間が20分くらいいるから…7時半に起きればいいかな。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '準備も時間がかかるでしょ。7時には起きた方がいいよ。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'わかった、7時に起きる。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq016', scene: 'store',      question: '女の人はどんな薬を買いますか。', script: [
    { speaker: 'NARRATOR', text: '薬局で、女の人と薬剤師が話しています。女の人はどの薬を買いますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'すみません、頭痛と少し熱があるんですが、どの薬がいいですか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '熱は何度ですか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '37度8分くらいです。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'それでしたら、こちらの解熱鎮痛剤をお勧めします。頭痛にも効きますよ。ただ、胃が弱い方には少し刺激が強いかもしれません。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '最近、胃の調子がよくないんです。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'でしたら、胃に優しいこちらのタイプはいかがでしょうか。少し効き目は穏やかですが、安全です。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'じゃあ、そちらにします。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq017', scene: 'office',     question: '現在、プロジェクトの締め切りはいつですか。', script: [
    { speaker: 'NARRATOR', text: '会社で、二人の同僚が話しています。現在、プロジェクトの締め切りはいつですか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '鈴木さん、例のプロジェクト、締め切り来週の水曜日でしたよね。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'え、違いますよ。部長が木曜日に変更したって、昨日メールが来ましたよ。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'あ、そのメール見ていませんでした。でも木曜日だと、私、出張があって…', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '部長に相談してみたらどうですか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'そうですね。金曜日なら間に合うんですが。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq018', scene: 'classroom',  question: '学生はA4用紙に何を書いてきますか。', script: [
    { speaker: 'NARRATOR', text: '教室で、先生が話しています。学生はA4用紙に何を書いてきますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'みなさん、来週の授業では発表をしてもらいます。テーマは自分が住んでいる地域の文化か、伝統的な食べ物か、どちらかを選んでください。調べた内容をA4用紙1枚にまとめてきてください。発表は一人3分です。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq019', scene: 'station',    question: '二人はどこで会いますか。', script: [
    { speaker: 'NARRATOR', text: '電話で、男の人と女の人が話しています。二人はどこで会いますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'もしもし、今どこにいる？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '駅の改札の前にいるんだけど、会えないね。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'あ、南口の改札にいるんだけど、そっちは？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '私、北口にいた！ごめんね。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'どっちに行こうか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '南口の方が分かりやすいから、そっちに行くよ。改札の前で待ってて。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq020', scene: 'home',       question: '娘はこの週末、何をしますか。', script: [
    { speaker: 'NARRATOR', text: '家で、父と娘が話しています。娘はこの週末、何をしますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '今週末、どこか行くの？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '土曜日は友達と映画を見に行って、日曜日は家で試験勉強する予定です。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '日曜日は一緒に買い物に行かない？冷蔵庫が空っぽだから。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'ごめん、試験が近いから…', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'わかった。じゃあ一人で行ってくる。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq021', scene: 'restaurant', question: '男の学生は何を注文しましたか。', script: [
    { speaker: 'NARRATOR', text: '食堂で、二人の学生が話しています。男の学生は何を注文しましたか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '何にした？', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'ラーメンにしようと思ったけど、今日は売り切れで。結局、定食にした。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '定食か。私はカレーにしたよ。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'カレー、おいしそうだな。次はそれにしよう。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq022', scene: 'office',     question: '次の打ち合わせはいつですか。', script: [
    { speaker: 'NARRATOR', text: '会議室で、社員と取引先の人が話しています。次の打ち合わせはいつですか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '本日はお時間いただきありがとうございました。次回の打ち合わせはいつにいたしましょうか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'そうですね、来月の上旬はいかがですか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '来月の5日か6日あたりはいかがでしょうか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '5日は社内で重要な会議が入っておりまして。6日はよろしいですよ。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'では6日の午後2時でよろしいでしょうか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'はい、大丈夫です。よろしくお願いいたします。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq023', scene: 'store',      question: '男の人はどんなパソコンを買いますか。', script: [
    { speaker: 'NARRATOR', text: '家電店で、男の人と店員が話しています。男の人はどんなパソコンを買いますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'パソコンを買いたいんですが、どれがおすすめですか。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '用途によって変わりますが、主に何に使いますか。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '仕事でワードやエクセルを使うのと、たまに動画を見るくらいです。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'でしたら、このモデルが人気ですよ。軽くて、バッテリーが長持ちします。価格も手頃です。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'デザインもいいですね。これにします。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq024', scene: 'classroom',  question: '参加者は最初に何をしますか。', script: [
    { speaker: 'NARRATOR', text: '研修で、講師が説明しています。参加者は最初に何をしますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '本日の研修へようこそ。まず最初に、お手元の資料に名前と所属部署をご記入ください。その後、隣の方と簡単な自己紹介をしてもらいます。自己紹介は3分程度でお願いします。全員が終わりましたら、研修の内容に入っていきます。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
  ]},
  { id: 'lq025', scene: 'home',       question: '女の人はどうして引っ越しますか。', script: [
    { speaker: 'NARRATOR', text: 'アパートで、隣人同士が話しています。女の人はどうして引っ越しますか。', voiceId: V.NARRATOR, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: '田中さん、引っ越すって本当ですか？', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: 'ええ、来月末に。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'どうしてですか？このアパート、便利ですよね。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '便利なんですが、会社が遠くて毎日1時間半かかるんです。もっと会社の近くに住みたくて。', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'MALE',   text: 'そうでしたか。寂しくなりますね。', voiceId: V.MALE, emotion: 'neutral', speed: 0.9 },
    { speaker: 'FEMALE', text: '私もこのアパートは気に入っているんですが、通勤時間がちょっと…', voiceId: V.FEMALE, emotion: 'neutral', speed: 0.9 },
  ]},
]

// ─── MiniMax API ──────────────────────────────────────────────────────────────
async function callMiniMax(
  text: string,
  voiceId: string,
  emotion: 'neutral' | 'happy' | 'sad',
  speed: number,
  pitch = 0,
  vol = 1.0,
): Promise<Buffer> {
  const body = {
    model: 'speech-02-hd',
    text,
    stream: false,
    output_format: 'hex',
    language_boost: 'Japanese',
    voice_setting: { voice_id: voiceId, speed, vol, pitch, emotion },
    audio_setting: { format: 'mp3', sample_rate: 32000, bitrate: 128000, channel: 1 },
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`MiniMax API ${res.status}: ${err}`)
  }

  const json = await res.json() as { data?: { audio?: string }; base_resp?: { status_code: number; status_msg: string } }

  if (json.base_resp && json.base_resp.status_code !== 0) {
    throw new Error(`MiniMax error: ${json.base_resp.status_msg}`)
  }

  if (!json.data?.audio) {
    throw new Error(`MiniMax returned no audio data: ${JSON.stringify(json)}`)
  }

  return Buffer.from(json.data.audio, 'hex')
}

// Silence via TTS pause tag — MiniMax supports <#x.x#> inline
async function generateSilence(ms: number): Promise<Buffer> {
  const sec = (ms / 1000).toFixed(1)
  return callMiniMax(`<#${sec}#>`, V.NARRATOR, 'neutral', 1.0)
}

function estimateDurationMs(buf: Buffer): number {
  // CBR 128kbps = 16000 bytes/sec
  return Math.round((buf.length / 16000) * 1000)
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Helper: call TTS then wait for rate-limit window
async function tts(
  text: string,
  voiceId: string,
  emotion: 'neutral' | 'happy' | 'sad' = 'neutral',
  speed = 0.9,
  pitch = 0,
  vol = 1.0,
): Promise<Buffer> {
  const buf = await callMiniMax(text, voiceId, emotion, speed, pitch, vol)
  await sleep(12000)
  return buf
}

// Helper: silence + wait
async function sil(ms: number): Promise<Buffer> {
  const buf = await generateSilence(ms)
  await sleep(12000)
  return buf
}

// ─── Voice shorthand ──────────────────────────────────────────────────────────
const nar = (text: string, speed = 0.85) => tts(text, V.NARRATOR, 'neutral', speed, 0)

function makeMale(voiceId: string) {
  return (text: string, emotion: 'neutral' | 'happy' | 'sad' = 'neutral', speed = 0.92) =>
    tts(text, voiceId, emotion, speed, 0)
}
function makeFem(voiceId: string) {
  return (text: string, emotion: 'neutral' | 'happy' | 'sad' = 'neutral', speed = 0.93) =>
    tts(text, voiceId, emotion, speed, 0)
}

// ─── ffmpeg ambiance mixing ───────────────────────────────────────────────────
function mixAmbiance(voiceMp3: string, scene: string, outputMp3: string) {
  const ambianceWav = path.join(AMBIANCE_DIR, `${scene}.wav`)
  if (!fs.existsSync(ambianceWav)) {
    console.warn(`  warn: ambiance/${scene}.wav not found, skipping mix`)
    fs.copyFileSync(voiceMp3, outputMp3)
    return
  }
  const cmd = [
    'ffmpeg -y',
    `-stream_loop -1 -i "${ambianceWav}"`,
    `-i "${voiceMp3}"`,
    `-filter_complex "[0]volume=0.10[a];[1]volume=1.0[b];[a][b]amix=inputs=2:duration=shortest"`,
    `-ac 1 -ar 32000 -b:a 128k`,
    `"${outputMp3}"`,
  ].join(' ')
  execSync(cmd, { stdio: ['ignore', 'ignore', 'pipe'] })
}

// ─── Exam intro tracks ────────────────────────────────────────────────────────
// Split into two files so the UI can transition cleanly between phases:
//   intro-instructions.mp3 — title + 問題1 header + instruction text
//   intro-example.mp3      — れい dialogue + answer reveal + 「では、始めます」

async function generateIntroInstructions(): Promise<Buffer> {
  const parts: Buffer[] = []
  console.log('    [intro-instructions] Title...')

  parts.push(await sil(1500))
  parts.push(await nar('日本語能力試験　聴解　N4。', 0.80))
  parts.push(await sil(2000))

  parts.push(await nar('問題1。', 0.80))
  parts.push(await sil(800))

  parts.push(await nar(
    '問題1では、まず質問を聞いてください。<#0.5#>それから話を聞いて、<#0.3#>問題用紙の1から4の中から、<#0.3#>いちばんいいものを一つえらんでください。',
    0.85,
  ))
  parts.push(await sil(1000))

  return Buffer.concat(parts)
}

async function generateIntroExample(): Promise<Buffer> {
  const parts: Buffer[] = []
  console.log('    [intro-example] Example question...')

  parts.push(await nar('れい。', 0.80))
  parts.push(await sil(500))

  parts.push(await nar('学校で、先生と学生が話しています。<#0.3#>学生はこれから何をしますか。', 0.85))
  parts.push(await sil(600))

  parts.push(await tts('山田くん、今日の宿題はもう出しましたか。', V.FEMALE, 'neutral', 0.90))
  parts.push(await sil(300))
  parts.push(await tts('あ、まだです。今から出しに行きます。', V.MALE, 'neutral', 0.92))
  parts.push(await sil(300))
  parts.push(await tts('そうですか。先生の机の上に置いておいてください。', V.FEMALE, 'neutral', 0.90))
  parts.push(await sil(300))
  parts.push(await tts('わかりました。', V.MALE, 'neutral', 0.92))
  parts.push(await sil(1000))

  parts.push(await nar('学生はこれから何をしますか。', 0.85))
  parts.push(await sil(4000))

  parts.push(await nar('1番、先生に宿題を出す。<#0.3#>正解は1番です。', 0.85))
  parts.push(await sil(1500))

  parts.push(await nar('では、始めます。', 0.82))
  parts.push(await sil(2000))

  return Buffer.concat(parts)
}

// Legacy combined intro (kept for backward compatibility — skipped if exists)
async function generateIntro(): Promise<Buffer> {
  const a = await generateIntroInstructions()
  const b = await generateIntroExample()
  return Buffer.concat([a, b])
}

// ─── Per-question generation ──────────────────────────────────────────────────
// Structure per real JLPT:
//   [number]  →  scene-setter (NARRATOR)  →  dialogue (MALE/FEMALE with natural pauses)
//   →  question repeated  →  4s silence for answer
//
// Speech variety: characters speak at slightly different speeds/emotions
// to avoid robotic feel. Inline <#0.x#> tags add micro-pauses inside long lines.

const QUESTION_NUMBERS = [
  '1番。', '2番。', '3番。', '4番。', '5番。',
  '6番。', '7番。', '8番。', '9番。', '10番。',
  '11番。', '12番。', '13番。', '14番。', '15番。',
  '16番。', '17番。', '18番。', '19番。', '20番。',
  '21番。', '22番。', '23番。', '24番。', '25番。',
]

// Add micro-pauses to long sentences (>20 chars) at natural break points
function addMicroPauses(text: string): string {
  return text
    .replace(/、/g, '、<#0.2#>')   // brief comma pause
    .replace(/。(?!$)/g, '。<#0.4#>') // sentence boundary (not end)
    .replace(/が、/g, 'が、<#0.2#>')
    .replace(/けど、/g, 'けど、<#0.2#>')
    .replace(/から、/g, 'から、<#0.2#>')
}

async function generateQuestion(q: ListeningQuestion, questionNumber: number, outPath: string): Promise<void> {
  const voices = QUESTION_VOICES[q.id] ?? { M: V.MALE, F: V.FEMALE }
  const male = makeMale(voices.M)
  const fem  = makeFem(voices.F)

  const parts: Buffer[] = []
  const numLabel = QUESTION_NUMBERS[questionNumber - 1] ?? `${questionNumber}番。`

  parts.push(await nar(numLabel, 0.82))
  parts.push(await sil(600))

  const [sceneLine, ...dialogueLines] = q.script
  parts.push(await nar(addMicroPauses(sceneLine.text), 0.85))
  parts.push(await sil(700))

  for (let i = 0; i < dialogueLines.length; i++) {
    const line = dialogueLines[i]
    const text = addMicroPauses(line.text)

    let buf: Buffer
    if (line.speaker === 'NARRATOR') {
      buf = await nar(text, 0.85)
    } else if (line.speaker === 'MALE') {
      const spd = text.includes('？') || text.includes('か。') ? 0.95 : 0.91
      buf = await male(text, line.emotion, spd)
    } else {
      const spd = text.includes('？') || text.includes('か。') ? 0.96 : 0.92
      buf = await fem(text, line.emotion, spd)
    }
    parts.push(buf)

    if (i < dialogueLines.length - 1) {
      const pauseMs = (line.text.endsWith('か。') || line.text.endsWith('？')) ? 400 : 600
      parts.push(await sil(pauseMs))
    }
  }

  parts.push(await sil(1500))
  parts.push(await nar(q.question, 0.85))
  parts.push(await sil(4000))

  // Write voice-only to temp, then mix ambiance
  const tmpVoice = path.join(os.tmpdir(), `kamaru-voice-${q.id}-${Date.now()}.mp3`)
  fs.writeFileSync(tmpVoice, Buffer.concat(parts))
  try {
    mixAmbiance(tmpVoice, q.scene, outPath)
  } finally {
    fs.unlinkSync(tmpVoice)
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true })
    console.log(`Created directory: ${OUT_DIR}`)
  }

  const manifest: { generatedAt: string; questions: ManifestEntry[] } = {
    generatedAt: new Date().toISOString(),
    questions: [],
  }

  // Load existing manifest if present
  if (fs.existsSync(MANIFEST_PATH)) {
    try {
      const existing = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8')) as typeof manifest
      manifest.questions = existing.questions
    } catch {
      // ignore parse errors
    }
  }

  // ── Generate intro-instructions track ────────────────────────────────────
  const introInstrPath = path.join(OUT_DIR, 'intro-instructions.mp3')
  if (fs.existsSync(introInstrPath)) {
    console.log('  skip  intro-instructions  (already exists)')
  } else {
    console.log('  gen   intro-instructions  (title + 問題1 + instruction text)')
    try {
      const buf = await generateIntroInstructions()
      fs.writeFileSync(introInstrPath, buf)
      console.log(`        intro-instructions  done  ${(buf.length / 1024).toFixed(0)}KB`)
    } catch (err) {
      console.log(`        intro-instructions  FAILED: ${err}`)
    }
    await sleep(5000)
  }

  // ── Generate intro-example track ─────────────────────────────────────────
  const introExPath = path.join(OUT_DIR, 'intro-example.mp3')
  if (fs.existsSync(introExPath)) {
    console.log('  skip  intro-example  (already exists)')
  } else {
    console.log('  gen   intro-example  (れい dialogue + answer reveal + 始めます)')
    try {
      const buf = await generateIntroExample()
      fs.writeFileSync(introExPath, buf)
      console.log(`        intro-example  done  ${(buf.length / 1024).toFixed(0)}KB`)
    } catch (err) {
      console.log(`        intro-example  FAILED: ${err}`)
    }
    await sleep(5000)
  }

  // ── Legacy combined intro (kept for backward compat) ─────────────────────
  const introPath = path.join(OUT_DIR, 'intro.mp3')
  if (fs.existsSync(introPath)) {
    console.log('  skip  intro  (already exists)')
  } else {
    console.log('  gen   intro  (combined legacy track)')
    try {
      const introBuf = await generateIntro()
      fs.writeFileSync(introPath, introBuf)
      console.log(`        intro  done  ${(introBuf.length / 1024).toFixed(0)}KB`)
    } catch (err) {
      console.log(`        intro  FAILED: ${err}`)
    }
    await sleep(5000)
  }

  let generated = 0
  let skipped = 0
  let failed = 0

  for (let i = 0; i < QUESTIONS.length; i++) {
    const q = QUESTIONS[i]
    const outPath = path.join(OUT_DIR, `${q.id}.mp3`)

    if (fs.existsSync(outPath)) {
      console.log(`  skip  ${q.id}  (already exists)`)
      if (!manifest.questions.find(e => e.id === q.id)) {
        manifest.questions.push({ id: q.id, audioUrl: `/audio/listening/${q.id}.mp3`, durationMs: 0 })
      }
      skipped++
      continue
    }

    process.stdout.write(`  gen   ${q.id}  (${i + 1}/${QUESTIONS.length})  `)
    const start = Date.now()

    try {
      await generateQuestion(q, i + 1, outPath)
      const elapsed = ((Date.now() - start) / 1000).toFixed(1)
      const kb = (fs.statSync(outPath).size / 1024).toFixed(0)
      const durationMs = estimateDurationMs(fs.readFileSync(outPath))
      console.log(`done  ${elapsed}s  ${kb}KB  ~${(durationMs / 1000).toFixed(1)}s audio`)

      const idx = manifest.questions.findIndex(e => e.id === q.id)
      const entry = { id: q.id, audioUrl: `/audio/listening/${q.id}.mp3`, durationMs }
      if (idx >= 0) manifest.questions[idx] = entry
      else manifest.questions.push(entry)

      generated++
    } catch (err) {
      console.log(`FAILED: ${err}`)
      failed++
    }

    // Save manifest after each question (incremental)
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2))

    // 15s delay between questions
    if (i < QUESTIONS.length - 1) await sleep(15000)
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2))

  console.log(`\n✅  Done!`)
  console.log(`   Generated : ${generated}`)
  console.log(`   Skipped   : ${skipped}`)
  console.log(`   Failed    : ${failed}`)
  console.log(`   Manifest  : ${MANIFEST_PATH}`)
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
