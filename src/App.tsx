import React from 'react'
import { Link } from 'react-router-dom'
import RoutesView from './routes'

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 16, maxWidth: 960, margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>YouTube Player</h1>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/video">Video</Link>
          <Link to="/gif">GIF</Link>
        </nav>
      </header>
      <RoutesView />
    </div>
  )
}

export default App