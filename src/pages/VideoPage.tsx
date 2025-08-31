import React, { useMemo } from 'react'
import { useNavigate, Navigate, Link } from 'react-router-dom'
import VideoPlayer from '../components/VideoPlayer'
import { loadVideoState } from '../storage/videoState'

const VideoPage: React.FC = () => {
  const navigate = useNavigate()
  const state = useMemo(() => loadVideoState(), [])

  if (!state) return <Navigate to="/" replace />

  return (
    <div>
      <h2>Video</h2>
      <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
        <Link to="/gif"><button>Go to GIF Page</button></Link>
      </div>
      <VideoPlayer state={state} onEdit={() => navigate('/')} />
    </div>
  )
}

export default VideoPage