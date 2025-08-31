import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { extractYouTubeId } from '../utils/youtube'
import { saveVideoState } from '../storage/videoState'

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const [url, setUrl] = useState('')

  const videoId = useMemo(() => extractYouTubeId(url), [url])
  const isValid = Boolean(videoId)

  const onSave = () => {
    if (!videoId) return
    saveVideoState({
      url,
      videoId,
      lastPositionSec: 0,
      lastUpdatedAtMs: Date.now(),
    })
    navigate('/video')
  }

  return (
    <div>
      <h2>Home</h2>
      <div style={{ display: 'grid', gap: 8, maxWidth: 600 }}>
        <label htmlFor="yturl"><strong>YouTube Video URL</strong></label>
        <input
          id="yturl"
          type="url"
          placeholder="https://www.youtube.com/watch?v=..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ padding: 8, fontSize: 16 }}
        />
        {!url ? (
          <small>Paste a full YouTube URL.</small>
        ) : isValid ? (
          <small style={{ color: 'green' }}>Looks good ✔</small>
        ) : (
          <small style={{ color: 'crimson' }}>That doesn’t look like a valid YouTube URL.</small>
        )}
        <div>
          <button disabled={!isValid} onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage