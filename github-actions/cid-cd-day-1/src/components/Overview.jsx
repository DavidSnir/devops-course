import { overviewStats, recentActivitySummary } from '../data/mockData'

function Overview() {
  return (
    <div>
      <h1 className="page-title">CI/CD Overview</h1>
      <p className="page-subtitle">
        High level health of all pipelines and recent activity.
      </p>

      <div className="tile-grid">
        {overviewStats.map((stat) => (
          <div key={stat.label} className="card tile">
            <div className="tile-label">{stat.label}</div>
            <div className="tile-value">{stat.value}</div>
            <div className="tile-hint">{stat.hint}</div>
          </div>
        ))}
      </div>

      <div className="section">
        <h2 className="section-title">Recent Activity Summary</h2>
        <div className="card">
          <ul className="list">
            {recentActivitySummary.map((item) => (
              <li key={item.id} className="list-row">
                <span>{item.text}</span>
                <span className={`badge ${item.tone}`}>{item.tone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Overview
