import { expect, it } from "vitest";
import { describe } from "vitest";
import { smallestRepunitDivByK } from "./10";

describe('2023-05-10',()=>{
  it('test1',()=>{
    const k = 1
    const result = smallestRepunitDivByK(k)
    expect(result).toBe(1)
  })
  it('test2',()=>{
    const k = 2
    const result = smallestRepunitDivByK(k)
    expect(result).toBe(-1)
  })
  it('test1',()=>{
    const k = 3
    const result = smallestRepunitDivByK(k)
    expect(result).toBe(3)
  })
})
