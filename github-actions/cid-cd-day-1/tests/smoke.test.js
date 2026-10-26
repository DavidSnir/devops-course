import { describe, it, expect } from 'vitest'
import { workflowRuns, pipelines } from '../src/data/mockData'

describe('smoke', () => {
  it('does basic arithmetic', () => {
    expect(1 + 1).toBe(2)
  })

  it('exposes mock workflow runs', () => {
    expect(Array.isArray(workflowRuns)).toBe(true)
    expect(workflowRuns.length).toBeGreaterThan(0)
  })

  it('exposes mock pipelines', () => {
    expect(pipelines.every((p) => typeof p.name === 'string')).toBe(true)
  })
})
