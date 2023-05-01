import { describe, it, expect } from 'vitest'
import { numOfMinutes } from './01'

describe('2023-05-01', () => {
  it('test 1', () => {
    const n = 1, headID = 0, manager = [-1], informTime = [0]
    const result = numOfMinutes(n, headID, manager, informTime)
    expect(result).toBe(0)
  })

  it('test 2', () => {
    const n = 6, headID = 2, manager = [2, 2, -1, 2, 2, 2], informTime = [0, 0, 1, 0, 0, 0]
    const result = numOfMinutes(n, headID, manager, informTime)
    expect(result).toBe(1)
  })

  it('test 3', () => {
    const n = 15, headID = 0, manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    const result = numOfMinutes(n, headID, manager, informTime)
    expect(result).toBe(3)
  })
})
