import { workflowEvents } from '../data/mockData'

function WorkflowEvents() {
  return (
    <div>
      <h1 className="page-title">Workflow Events</h1>
      <p className="page-subtitle">
        GitHub Actions event types that can trigger workflows.
      </p>

      <div className="card-grid">
        {workflowEvents.map((event) => (
          <div key={event.id} className="card">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <strong className="mono">{event.name}</strong>
              <span className="badge info">{event.lastTriggered}</span>
            </div>
            <p className="muted">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkflowEvents
