/**
 * @param {number} k
 * @return {number}
 */
export const smallestRepunitDivByK = function (k) {
  if (k % 2 == 0 || k % 5 == 0) {
    return -1
  }
  let rasid = 1 % k, len = 1
  const hashSet = new Set()
  hashSet.add(rasid)
  while (rasid != 0) {
    rasid = (rasid * 10 + 1) % k
    len++
    if (hashSet.has(rasid)) {
      return -1
    }
    hashSet.add(rasid)
  }
  return len
};
