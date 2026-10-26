import { workflowRuns, executionLogs } from '../data/mockData'

function WorkflowRuns() {
  return (
    <div>
      <h1 className="page-title">Workflow Runs</h1>
      <p className="page-subtitle">
        Recent GitHub Actions workflow runs across all branches.
      </p>

      <div className="table-wrap section">
        <table>
          <thead>
            <tr>
              <th>Run</th>
              <th>Workflow</th>
              <th>Branch</th>
              <th>Event</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {workflowRuns.map((run) => (
              <tr key={run.id}>
                <td className="mono">#{run.id}</td>
                <td>{run.workflow}</td>
                <td className="mono">{run.branch}</td>
                <td className="mono">{run.event}</td>
                <td>
                  <span className={`badge ${run.status}`}>{run.status}</span>
                </td>
                <td className="muted">{run.duration}</td>
                <td className="muted">{run.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">Workflow Execution Logs</h2>
        <div className="log-panel">
          <pre>
            {executionLogs.map((log, idx) => (
              <div key={idx} className={`log-line ${log.tone}`}>
                <span className="log-prefix">{String(idx + 1).padStart(2, '0')}</span>
                {log.line}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default WorkflowRuns
