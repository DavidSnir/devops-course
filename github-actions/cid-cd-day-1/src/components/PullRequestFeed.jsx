import { pullRequests } from '../data/mockData'

function PullRequestFeed() {
  return (
    <div>
      <h1 className="page-title">Pull Request Activity</h1>
      <p className="page-subtitle">
        Open and recently updated pull requests.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>PR</th>
              <th>Title</th>
              <th>Author</th>
              <th>Branch</th>
              <th>State</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {pullRequests.map((pr) => (
              <tr key={pr.id}>
                <td className="mono">#{pr.id}</td>
                <td>{pr.title}</td>
                <td>{pr.author}</td>
                <td className="mono">
                  {pr.head} &rarr; {pr.base}
                </td>
                <td>
                  <span className={`badge ${pr.state}`}>{pr.state}</span>
                </td>
                <td className="muted">{pr.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PullRequestFeed
