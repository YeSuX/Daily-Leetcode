/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
export function powerfulIntegers(x, y, bound) {
  const powerfulIntegers = new Set();

  // Handle edge cases where bound is 0, 1, or 2.
  if (bound < 2) {
    return [];
  } else if (bound === 2) {
    return [2];
  }

  // Find the maximum i and j values that x^i + y^j can reach without exceeding bound.
  const maxI = findMaxValues(x, bound)
  const maxJ = findMaxValues(y, bound)

  // Generate all possible sums of x^i + y^j and store them in the set.
  for (let i = 0; i <= maxI; i++) {
    for (let j = 0; j <= maxJ; j++) {
      const powerfulSum = Math.pow(x, i) + Math.pow(y, j);
      if (powerfulSum <= bound) {
        powerfulIntegers.add(powerfulSum);
      } else {
        break;
      }
    }
  }

  return [...powerfulIntegers];
}

/**
 * 找到底数对于目标数的最大幂
 * @param {number} x  底数
 * @param {number} num 目标数
 * @returns {number} 最大幂
 */
export const findMaxValues = (x, num) => {
  return x === 1 ? 0 : Math.floor(Math.log(num) / Math.log(x))
}













