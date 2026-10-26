const express = require('express');
const os = require('os');
const app = express();
const PORT = 3000;

const movies = [
  { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 },
  { title: 'The Godfather', genre: 'Crime', year: 1972 },
  { title: 'The Dark Knight', genre: 'Action', year: 2008 },
  { title: 'Pulp Fiction', genre: 'Crime', year: 1994 },
  { title: 'Forrest Gump', genre: 'Drama', year: 1994 },
  { title: 'Inception', genre: 'Sci-Fi', year: 2010 },
  { title: 'The Matrix', genre: 'Sci-Fi', year: 1999 },
  { title: 'Interstellar', genre: 'Sci-Fi', year: 2014 },
  { title: 'Goodfellas', genre: 'Crime', year: 1990 },
  { title: 'Fight Club', genre: 'Drama', year: 1999 },
];

function getRecommendation() {
  return movies[Math.floor(Math.random() * movies.length)];
}

app.get('/', (req, res) => {
  const movie = getRecommendation();
  const hostname = os.hostname();

  res.type('html').send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Movie Recommendation</title>
    <style>
      :root {
        color-scheme: dark;
        font-family: Arial, Helvetica, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      body {
        align-items: center;
        background: radial-gradient(circle at top left, #334155, #020617 55%);
        color: #f8fafc;
        display: flex;
        justify-content: center;
        margin: 0;
        min-height: 100vh;
        padding: 24px;
      }

      main {
        background: rgba(15, 23, 42, 0.88);
        border: 1px solid rgba(148, 163, 184, 0.25);
        border-radius: 24px;
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
        max-width: 520px;
        padding: 32px;
        text-align: center;
        width: 100%;
      }

      .eyebrow {
        color: #38bdf8;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        margin: 0 0 12px;
        text-transform: uppercase;
      }

      h1 {
        font-size: clamp(2rem, 8vw, 3.5rem);
        line-height: 1;
        margin: 0 0 12px;
      }

      .hostname {
        color: #cbd5e1;
        font-size: 1rem;
        margin: 0 0 24px;
      }

      .card {
        background: #f8fafc;
        border-radius: 18px;
        color: #0f172a;
        margin: 0 0 24px;
        padding: 24px;
      }

      .title {
        font-size: 1.6rem;
        font-weight: 800;
        margin: 0 0 12px;
      }

      .details {
        color: #475569;
        font-size: 1rem;
        margin: 0;
      }

      button {
        background: #38bdf8;
        border: 0;
        border-radius: 999px;
        color: #082f49;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 800;
        padding: 14px 22px;
      }

      button:hover {
        background: #7dd3fc;
      }
    </style>
  </head>
  <body>
    <main>
      <p class="eyebrow">Movie API v2</p>
      <h1>Tonight's pick</h1>
      <p class="hostname">Served by ${hostname}</p>
      <section class="card" aria-live="polite">
        <p class="title" id="movie-title">${movie.title}</p>
        <p class="details" id="movie-details">${movie.genre} - ${movie.year}</p>
      </section>
      <button id="recommend-button" type="button">Recommend another</button>
    </main>

    <script>
      const button = document.getElementById('recommend-button');
      const title = document.getElementById('movie-title');
      const details = document.getElementById('movie-details');

      button.addEventListener('click', async () => {
        button.disabled = true;
        button.textContent = 'Choosing...';

        try {
          const response = await fetch('/api/recommendation');
          const data = await response.json();
          title.textContent = data.recommendation.title;
          details.textContent = data.recommendation.genre + ' - ' + data.recommendation.year;
        } finally {
          button.disabled = false;
          button.textContent = 'Recommend another';
        }
      });
    </script>
  </body>
</html>`);
});

app.get('/api/recommendation', (req, res) => {
  const movie = getRecommendation();

  res.json({
    version: 'v2',
    recommendation: movie,
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Movie Recommendation API v2 running on port ${PORT}`);
});
