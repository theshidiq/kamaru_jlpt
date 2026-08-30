/**
 * Audio asset base URL.
 *
 * Audio (listening questions + reading passages) is large enough that keeping
 * it in the repo is undesirable. Set VITE_AUDIO_BASE_URL to an R2 public
 * bucket URL to serve it from there instead; leave it unset to serve the
 * copies under public/.
 *
 * Paths stored in manifests stay root-relative ("/audio/..."), so switching
 * is a deploy-time decision and no data needs regenerating.
 */
const BASE = (import.meta.env.VITE_AUDIO_BASE_URL as string | undefined)?.replace(/\/$/, '') ?? ''

/** Resolve a root-relative audio path against the configured base. */
export function audioUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  return BASE ? `${BASE}${path.startsWith('/') ? path : `/${path}`}` : path
}
