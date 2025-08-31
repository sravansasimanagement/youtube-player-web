import React, { useCallback, useEffect, useRef, useState } from 'react'
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube'
import { saveVideoState, VideoState } from '../storage/videoState'

interface Props {
  state: VideoState
  onEdit: () => void
}

const POLL_MS = 1000 

const VideoPlayer: React.FC<Props> = ({ state, onEdit }) => {
  const playerRef = useRef<YouTube | null>(null)
  const [ready, setReady] = useState(false)
  const [appliedResume, setAppliedResume] = useState(false)

  const expectedResumeSeconds = useRef<number>(state.lastPositionSec + Math.max(0, (Date.now() - state.lastUpdatedAtMs) / 1000))

  const onReady = useCallback((e: YouTubeEvent) => {
    setReady(true)
  }, [])

  const onStateChange: YouTubeProps['onStateChange'] = useCallback(async (e) => {
    const player = e.target
    if (!appliedResume && ready) {
      try {
        const duration = await player.getDuration()
        const target = Math.min(Math.max(0, expectedResumeSeconds.current), Math.max(0, duration - 0.5))
        if (!Number.isNaN(target) && Number.isFinite(target)) {
          await player.seekTo(target, true)
        }
        await player.playVideo()
        setAppliedResume(true)
      } catch {}
    }
  }, [appliedResume, ready])

  useEffect(() => {
    let timer: number | undefined
    const tick = async () => {
      try {
        // @ts-ignore 
        const player = playerRef.current?.getInternalPlayer?.() || (playerRef.current as any)?._internalPlayer || null
        if (player && player.getCurrentTime) {
          const t = await player.getCurrentTime()
          if (typeof t === 'number' && !Number.isNaN(t)) {
            saveVideoState({
              ...state,
              lastPositionSec: t,
              lastUpdatedAtMs: Date.now(),
            })
          }
        }
      } catch {}
      timer = window.setTimeout(tick, POLL_MS)
    }
    timer = window.setTimeout(tick, POLL_MS)
    return () => { if (timer) window.clearTimeout(timer) }
  }, [state])

  return (
    <div>
      <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
        <button onClick={onEdit}>Edit URL</button>
      </div>
      <YouTube
        ref={playerRef as any}
        videoId={state.videoId}
        opts={{
          playerVars: {
            autoplay: 1, 
            controls: 1,
            rel: 0,
          },
        }}
        onReady={onReady}
        onStateChange={onStateChange}
      />
      <p style={{ color: '#555', marginTop: 8 }}>
        Tip: Some browsers block sound on autoplay. If the video starts muted, unmute it using the player controls.
      </p>
    </div>
  )
}

export default VideoPlayer