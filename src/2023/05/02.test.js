import { describe, expect, it } from 'vitest'
import { powerfulIntegers } from './02';

describe('2023-05-02', () => {
  it('test 1', () => {
    const x = 2, y = 3, bound = 10;
    const result = powerfulIntegers(x, y, bound)
    expect(result.sort()).toEqual([2, 3, 4, 5, 7, 9, 10].sort())
  })

  it('test 2', () => {
    const x = 60, y = 56, bound = 175617;
    const result = powerfulIntegers(x, y, bound)
    expect(result.sort()).toEqual([175617,2,3137,3656,6736,3601,116,57,3196,61].sort())
  })
})
