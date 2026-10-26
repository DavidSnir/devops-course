import { useState } from 'react'
import './App.css'

const adventures = [
  {
    title: 'Desert Dash',
    place: 'Rajasthan dunes',
    detail: 'Golden sand, roaring jeeps, and sunset chai at the edge of the map.',
  },
  {
    title: 'Monsoon Run',
    place: 'Western Ghats',
    detail: 'Misty roads, waterfall stops, and green cliffs built for legends.',
  },
  {
    title: 'City Quest',
    place: 'Mumbai nights',
    detail: 'Street food, neon alleys, local trains, and one unforgettable story.',
  },
]

const gameStops = [
  'chai stall',
  'camel crossing',
  'waterfall road',
  'spice market',
  'monsoon bridge',
  'hidden temple',
]

function App() {
  const [score, setScore] = useState(0)
  const [currentStop, setCurrentStop] = useState(0)

  const collectStop = () => {
    setScore((current) => current + 10)
    setCurrentStop((current) => (current + 1) % gameStops.length)
  }

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="page-title">
        <p className="stamp">Field notes from the road</p>
        <h1 id="page-title">Indian Mike Adventures</h1>
        <p className="intro">
          Big routes, bold food, wild weather, and the kind of travel stories that
          sound fake until Mike shows you the photos.
        </p>
        <div className="hero-actions">
          <a href="#adventures">Explore trips</a>
          <span>Next dispatch: sunrise, somewhere loud</span>
        </div>
      </section>

      <section className="stats" aria-label="Adventure stats">
        <div>
          <strong>27</strong>
          <span>routes scouted</span>
        </div>
        <div>
          <strong>108</strong>
          <span>chai stops</span>
        </div>
        <div>
          <strong>4</strong>
          <span>flat tires survived</span>
        </div>
      </section>

      <section className="adventure-grid" id="adventures" aria-label="Featured adventures">
        {adventures.map((adventure) => (
          <article className="adventure-card" key={adventure.title}>
            <span>{adventure.place}</span>
            <h2>{adventure.title}</h2>
            <p>{adventure.detail}</p>
          </article>
        ))}
      </section>

      <section className="game-card" aria-labelledby="game-title">
        <div>
          <p className="game-kicker">Mini game</p>
          <h2 id="game-title">Mike's Road Rush</h2>
          <p>
            Tap the next stop to collect points and keep Mike moving across the
            adventure map.
          </p>
        </div>

        <div className="game-board">
          <div className="road" aria-hidden="true">
            <span className="mike">MIKE</span>
          </div>
          <button type="button" onClick={collectStop}>
            Collect {gameStops[currentStop]}
          </button>
          <strong>{score} pts</strong>
        </div>
      </section>
    </main>
  )
}

export default App
