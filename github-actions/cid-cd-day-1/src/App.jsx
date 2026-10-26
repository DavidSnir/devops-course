import { useState } from 'react'
import './App.css'
import { environments } from './data/mockData'
import Overview from './components/Overview'
import WorkflowRuns from './components/WorkflowRuns'
import PipelineStatus from './components/PipelineStatus'
import BuildResults from './components/BuildResults'
import TestResults from './components/TestResults'
import Deployments from './components/Deployments'
import WorkflowEvents from './components/WorkflowEvents'
import ActivityFeed from './components/ActivityFeed'
import PullRequestFeed from './components/PullRequestFeed'

const NAV = [
  { id: 'overview', label: 'CI/CD Overview', group: 'Pipelines' },
  { id: 'runs', label: 'Workflow Runs', group: 'Pipelines' },
  { id: 'pipelines', label: 'Pipeline Status', group: 'Pipelines' },
  { id: 'builds', label: 'Build Results', group: 'Pipelines' },
  { id: 'tests', label: 'Test Results', group: 'Pipelines' },
  { id: 'deployments', label: 'Deployments', group: 'Delivery' },
  { id: 'events', label: 'Workflow Events', group: 'Delivery' },
  { id: 'activity', label: 'Activity Feed', group: 'Activity' },
  { id: 'prs', label: 'Pull Requests', group: 'Activity' },
]

const VIEWS = {
  overview: Overview,
  runs: WorkflowRuns,
  pipelines: PipelineStatus,
  builds: BuildResults,
  tests: TestResults,
  deployments: Deployments,
  events: WorkflowEvents,
  activity: ActivityFeed,
  prs: PullRequestFeed,
}

function App() {
  const [activeView, setActiveView] = useState('overview')
  const [environment, setEnvironment] = useState(environments[0])

  const ActiveComponent = VIEWS[activeView]
  const groups = [...new Set(NAV.map((item) => item.group))]

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-title">
          DevOps <span>Learning</span> Dashboard
        </div>
        <div className="topbar-right">
          <label className="env-selector">
            Environment
            <select
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
            >
              {environments.map((env) => (
                <option key={env} value={env}>
                  {env}
                </option>
              ))}
            </select>
          </label>
          <div className="avatar" title="Signed in user">
            DO
          </div>
        </div>
      </header>

      <div className="body">
        <nav className="sidebar">
          {groups.map((group) => (
            <div key={group}>
              <div className="sidebar-group">{group}</div>
              {NAV.filter((item) => item.group === group).map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${
                    activeView === item.id ? 'active' : ''
                  }`}
                  onClick={() => setActiveView(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <main className="content">
          <div className="env-banner">
            Viewing environment: <strong>{environment}</strong>
          </div>
          <ActiveComponent />
        </main>
      </div>
    </div>
  )
}

export default App
