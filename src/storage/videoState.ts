export type VideoState = {
    url: string
    videoId: string
    lastPositionSec: number 
    lastUpdatedAtMs: number  
  }
  
  const STORAGE_KEY = 'yt_player_state_v1'
  
  export function saveVideoState(state: VideoState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }
  
  export function loadVideoState(): VideoState | null {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    try {
      const parsed = JSON.parse(raw) as VideoState
      if (!parsed.url || !parsed.videoId) return null
      return parsed
    } catch {
      return null
    }
  }
  
  export function clearVideoState() {
    localStorage.removeItem(STORAGE_KEY)
  }