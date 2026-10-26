import { deployments, envComparison } from '../data/mockData'

function EnvPanel({ title, data }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <div className="kv">
        <span className="k">Version</span>
        <span className="mono">{data.version}</span>
      </div>
      <div className="kv">
        <span className="k">Health</span>
        <span className="badge success">{data.health}</span>
      </div>
      <div className="kv">
        <span className="k">Last Deploy</span>
        <span className="muted">{data.lastDeploy}</span>
      </div>
      <div className="kv">
        <span className="k">Uptime</span>
        <span>{data.uptime}</span>
      </div>
    </div>
  )
}

function Deployments() {
  return (
    <div>
      <h1 className="page-title">Deployments</h1>
      <p className="page-subtitle">
        Deployment history and a staging vs production comparison.
      </p>

      <div className="section">
        <h2 className="section-title">Staging vs Production</h2>
        <div className="compare-grid">
          <EnvPanel title="Staging" data={envComparison.staging} />
          <EnvPanel title="Production" data={envComparison.production} />
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Deployment History</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Environment</th>
                <th>Version</th>
                <th>Deployed By</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {deployments.map((dep) => (
                <tr key={dep.id}>
                  <td style={{ textTransform: 'capitalize' }}>{dep.env}</td>
                  <td className="mono">{dep.version}</td>
                  <td>{dep.deployedBy}</td>
                  <td className="muted">{dep.time}</td>
                  <td>
                    <span className={`badge ${dep.status}`}>{dep.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Deployments
