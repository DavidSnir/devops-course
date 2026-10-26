import { pipelines } from '../data/mockData'

function PipelineStatus() {
  return (
    <div>
      <h1 className="page-title">Pipeline Status</h1>
      <p className="page-subtitle">
        Current status of every configured pipeline.
      </p>

      <div className="card-grid">
        {pipelines.map((pipeline) => (
          <div key={pipeline.id} className="card">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12,
              }}
            >
              <strong>{pipeline.name}</strong>
              <span className={`badge ${pipeline.status}`}>
                {pipeline.status}
              </span>
            </div>
            <div className="kv">
              <span className="k">Last run</span>
              <span>{pipeline.lastRun}</span>
            </div>
            <div className="kv">
              <span className="k">Trigger</span>
              <span className="mono">{pipeline.trigger}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PipelineStatus
