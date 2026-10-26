import { activityFeed } from '../data/mockData'

function ActivityFeed() {
  return (
    <div>
      <h1 className="page-title">GitHub Actions Activity Feed</h1>
      <p className="page-subtitle">
        Chronological feed of repository and pipeline events.
      </p>

      <div className="card">
        {activityFeed.map((item) => (
          <div key={item.id} className="feed-item">
            <div className="feed-avatar">{item.actor.charAt(0)}</div>
            <div className="feed-body">
              <div>
                <strong>{item.actor}</strong> {item.text}
              </div>
              <div className="feed-time">
                {item.time}
                <span className="muted"> &middot; {item.kind}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
