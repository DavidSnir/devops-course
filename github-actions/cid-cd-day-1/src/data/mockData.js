// Static mock data for the DevOps Learning Dashboard.
// Everything here is fake and hardcoded. There is no backend.

export const overviewStats = [
  { label: 'Total Pipelines', value: '24', hint: 'across 6 repositories' },
  { label: 'Success Rate', value: '92%', hint: 'last 30 days' },
  { label: 'Avg Build Time', value: '3m 48s', hint: 'last 50 runs' },
  { label: 'Last Deploy', value: '14m ago', hint: 'production / v1.8.3' },
]

export const recentActivitySummary = [
  { id: 1, text: 'CI passed on main after 12 commits today', tone: 'success' },
  { id: 2, text: '2 workflow runs failed and were retried', tone: 'warning' },
  { id: 3, text: 'Production deploy v1.8.3 completed cleanly', tone: 'success' },
  { id: 4, text: 'Nightly schedule run is currently in progress', tone: 'info' },
]

export const workflowRuns = [
  {
    id: 1481,
    workflow: 'CI',
    branch: 'main',
    event: 'push',
    status: 'success',
    duration: '3m 21s',
    timestamp: '2026-05-16 09:42',
  },
  {
    id: 1480,
    workflow: 'CI',
    branch: 'feature/login-rate-limit',
    event: 'pull_request',
    status: 'failed',
    duration: '2m 05s',
    timestamp: '2026-05-16 09:18',
  },
  {
    id: 1479,
    workflow: 'Deploy',
    branch: 'main',
    event: 'workflow_dispatch',
    status: 'success',
    duration: '5m 12s',
    timestamp: '2026-05-16 08:55',
  },
  {
    id: 1478,
    workflow: 'CI',
    branch: 'fix/null-pointer-checkout',
    event: 'pull_request',
    status: 'running',
    duration: '1m 02s',
    timestamp: '2026-05-16 08:40',
  },
  {
    id: 1477,
    workflow: 'Nightly',
    branch: 'main',
    event: 'schedule',
    status: 'success',
    duration: '8m 33s',
    timestamp: '2026-05-16 02:00',
  },
  {
    id: 1476,
    workflow: 'CI',
    branch: 'chore/bump-deps',
    event: 'push',
    status: 'success',
    duration: '3m 47s',
    timestamp: '2026-05-15 18:12',
  },
  {
    id: 1475,
    workflow: 'CI',
    branch: 'feature/dark-theme',
    event: 'pull_request',
    status: 'failed',
    duration: '2m 58s',
    timestamp: '2026-05-15 16:30',
  },
]

export const pipelines = [
  {
    id: 'p1',
    name: 'web-app / CI',
    status: 'success',
    lastRun: '14m ago',
    trigger: 'push to main',
  },
  {
    id: 'p2',
    name: 'web-app / Deploy',
    status: 'success',
    lastRun: '1h ago',
    trigger: 'workflow_dispatch',
  },
  {
    id: 'p3',
    name: 'api-service / CI',
    status: 'failed',
    lastRun: '32m ago',
    trigger: 'pull_request',
  },
  {
    id: 'p4',
    name: 'api-service / Nightly',
    status: 'running',
    lastRun: 'in progress',
    trigger: 'schedule',
  },
  {
    id: 'p5',
    name: 'infra / Terraform Plan',
    status: 'success',
    lastRun: '3h ago',
    trigger: 'pull_request',
  },
  {
    id: 'p6',
    name: 'docs-site / Build',
    status: 'success',
    lastRun: '5h ago',
    trigger: 'push to main',
  },
]

export const builds = [
  { id: 982, sha: 'a1b2c3d', status: 'success', artifacts: 3, branch: 'main' },
  { id: 981, sha: 'f4e5d6c', status: 'failed', artifacts: 0, branch: 'feature/login-rate-limit' },
  { id: 980, sha: '9a8b7c6', status: 'success', artifacts: 2, branch: 'main' },
  { id: 979, sha: '3d2e1f0', status: 'success', artifacts: 4, branch: 'chore/bump-deps' },
  { id: 978, sha: 'b7c8d9e', status: 'failed', artifacts: 1, branch: 'feature/dark-theme' },
  { id: 977, sha: '0f1e2d3', status: 'success', artifacts: 3, branch: 'main' },
]

export const testSummary = {
  total: 248,
  passed: 236,
  failed: 4,
  skipped: 8,
}

export const testSuites = [
  { id: 't1', name: 'auth.service.test', tests: 42, status: 'passed', duration: '1.2s' },
  { id: 't2', name: 'users.controller.test', tests: 31, status: 'passed', duration: '0.9s' },
  { id: 't3', name: 'billing.integration.test', tests: 18, status: 'failed', duration: '3.4s' },
  { id: 't4', name: 'pipeline.utils.test', tests: 27, status: 'passed', duration: '0.4s' },
  { id: 't5', name: 'notifications.test', tests: 15, status: 'failed', duration: '1.1s' },
  { id: 't6', name: 'render.smoke.test', tests: 9, status: 'passed', duration: '0.3s' },
]

export const deployments = [
  {
    id: 'd1',
    env: 'production',
    version: 'v1.8.3',
    deployedBy: 'alice',
    time: '2026-05-16 09:28',
    status: 'success',
  },
  {
    id: 'd2',
    env: 'staging',
    version: 'v1.9.0-rc1',
    deployedBy: 'bob',
    time: '2026-05-16 08:10',
    status: 'success',
  },
  {
    id: 'd3',
    env: 'production',
    version: 'v1.8.2',
    deployedBy: 'ci-bot',
    time: '2026-05-15 17:45',
    status: 'success',
  },
  {
    id: 'd4',
    env: 'staging',
    version: 'v1.9.0-rc0',
    deployedBy: 'carol',
    time: '2026-05-15 14:02',
    status: 'failed',
  },
  {
    id: 'd5',
    env: 'development',
    version: 'v1.9.0-dev',
    deployedBy: 'dave',
    time: '2026-05-15 11:20',
    status: 'success',
  },
]

export const envComparison = {
  staging: {
    version: 'v1.9.0-rc1',
    health: 'Healthy',
    lastDeploy: '2026-05-16 08:10',
    uptime: '99.4%',
  },
  production: {
    version: 'v1.8.3',
    health: 'Healthy',
    lastDeploy: '2026-05-16 09:28',
    uptime: '99.98%',
  },
}

export const workflowEvents = [
  {
    id: 'e1',
    name: 'push',
    lastTriggered: '14m ago',
    description: 'Runs on every commit pushed to any branch.',
  },
  {
    id: 'e2',
    name: 'pull_request',
    lastTriggered: '32m ago',
    description: 'Runs when a PR is opened, synchronized or reopened.',
  },
  {
    id: 'e3',
    name: 'workflow_dispatch',
    lastTriggered: '1h ago',
    description: 'Manual trigger started from the Actions tab.',
  },
  {
    id: 'e4',
    name: 'schedule',
    lastTriggered: 'today 02:00',
    description: 'Cron based nightly run for regression checks.',
  },
]

export const activityFeed = [
  { id: 'a1', actor: 'alice', text: 'pushed 3 commits to main', time: '2m ago', kind: 'push' },
  { id: 'a2', actor: 'ci-bot', text: 'opened PR #42 from chore/bump-deps', time: '11m ago', kind: 'pr' },
  { id: 'a3', actor: 'system', text: 'deploy to production succeeded (v1.8.3)', time: '14m ago', kind: 'deploy' },
  { id: 'a4', actor: 'bob', text: 'CI failed on feature/login-rate-limit', time: '32m ago', kind: 'ci' },
  { id: 'a5', actor: 'carol', text: 'merged PR #40 into main', time: '1h ago', kind: 'pr' },
  { id: 'a6', actor: 'system', text: 'nightly schedule run started', time: '3h ago', kind: 'ci' },
  { id: 'a7', actor: 'dave', text: 'pushed 1 commit to feature/dark-theme', time: '5h ago', kind: 'push' },
]

export const pullRequests = [
  {
    id: 42,
    title: 'Bump dependencies to latest minor versions',
    author: 'ci-bot',
    head: 'chore/bump-deps',
    base: 'main',
    state: 'opened',
    activity: 'opened',
  },
  {
    id: 41,
    title: 'Add rate limiting to login endpoint',
    author: 'bob',
    head: 'feature/login-rate-limit',
    base: 'main',
    state: 'opened',
    activity: 'synchronize',
  },
  {
    id: 40,
    title: 'Introduce dark dashboard theme',
    author: 'carol',
    head: 'feature/dark-theme',
    base: 'main',
    state: 'merged',
    activity: 'merged',
  },
  {
    id: 39,
    title: 'Fix null pointer in checkout flow',
    author: 'dave',
    head: 'fix/null-pointer-checkout',
    base: 'main',
    state: 'closed',
    activity: 'reopened',
  },
  {
    id: 38,
    title: 'Document deployment runbook',
    author: 'alice',
    head: 'docs/deploy-runbook',
    base: 'main',
    state: 'merged',
    activity: 'merged',
  },
]

export const executionLogs = [
  { line: 'Run actions/checkout@v4', tone: 'normal' },
  { line: 'Syncing repository: org/web-app', tone: 'normal' },
  { line: 'Run actions/setup-node@v4', tone: 'normal' },
  { line: 'Environment node-version: 20', tone: 'normal' },
  { line: '$ npm ci', tone: 'normal' },
  { line: 'added 412 packages in 9s', tone: 'success' },
  { line: '$ npm run lint', tone: 'normal' },
  { line: 'eslint . --max-warnings 0', tone: 'normal' },
  { line: 'lint passed with 0 warnings', tone: 'success' },
  { line: '$ npm test', tone: 'normal' },
  { line: 'vitest run', tone: 'normal' },
  { line: '236 passed, 4 failed, 8 skipped', tone: 'error' },
  { line: 'Test suite billing.integration.test failed', tone: 'error' },
  { line: 'Process completed with exit code 1', tone: 'error' },
]

export const environments = ['Staging', 'Production', 'Development']
