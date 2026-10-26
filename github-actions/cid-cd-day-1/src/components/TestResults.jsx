import { testSummary, testSuites } from '../data/mockData'

function TestResults() {
  const stats = [
    { label: 'Total', value: testSummary.total, tone: 'info' },
    { label: 'Passed', value: testSummary.passed, tone: 'success' },
    { label: 'Failed', value: testSummary.failed, tone: 'error' },
    { label: 'Skipped', value: testSummary.skipped, tone: 'warning' },
  ]

  return (
    <div>
      <h1 className="page-title">Test Results</h1>
      <p className="page-subtitle">
        Aggregated unit and integration test results from the latest run.
      </p>

      <div className="stat-row">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <div className={`stat-value badge ${stat.tone}`}>{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="section">
        <h2 className="section-title">Test Suites</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Suite</th>
                <th>Tests</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {testSuites.map((suite) => (
                <tr key={suite.id}>
                  <td className="mono">{suite.name}</td>
                  <td className="muted">{suite.tests}</td>
                  <td className="muted">{suite.duration}</td>
                  <td>
                    <span className={`badge ${suite.status}`}>
                      {suite.status}
                    </span>
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

export default TestResults
