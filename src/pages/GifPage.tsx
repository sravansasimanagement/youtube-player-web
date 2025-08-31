import React from 'react'
import { useNavigate } from 'react-router-dom'

const funnyGif = 'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif'

const GifPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>GIF Page</h2>
      <p>Enjoy this funny GIF 😸</p>
      <img src={funnyGif} alt="Funny GIF" style={{ maxWidth: '100%', height: 'auto', borderRadius: 12 }} />
      <div style={{ marginTop: 16 }}>
        <button onClick={() => navigate('/video')}>Back to Video</button>
      </div>
    </div>
  )
}

export default GifPage