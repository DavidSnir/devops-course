import { builds } from '../data/mockData'

function BuildResults() {
  return (
    <div>
      <h1 className="page-title">Build Results</h1>
      <p className="page-subtitle">
        Recent build artifacts produced by the CI pipeline.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Build</th>
              <th>Commit</th>
              <th>Branch</th>
              <th>Status</th>
              <th>Artifacts</th>
            </tr>
          </thead>
          <tbody>
            {builds.map((build) => (
              <tr key={build.id}>
                <td className="mono">#{build.id}</td>
                <td className="mono">{build.sha}</td>
                <td className="mono">{build.branch}</td>
                <td>
                  <span className={`badge ${build.status}`}>
                    {build.status}
                  </span>
                </td>
                <td className="muted">{build.artifacts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BuildResults
