// https://leetcode.cn/problems/time-needed-to-inform-all-employees/

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
export const numOfMinutes = function (n, headID, manager, informTime) {
  const g = arrayToTree(manager)
  return dfsLongestPath(headID, informTime, g)
};

// 深度优先遍历+计算最长路径
/**
 * 
 * @param {number} cur 当前节点
 * @param {number} pathNum 路径权重
 * @param {Map} treeMap 树
 * 
 * @returns {number} 最长路径
 */
export const dfsLongestPath = (cur, pathNum, treeMap) => {
  // res 存储当前节点的所有下属中，最长路径
  let res = 0;

  // 遍历当前节点的每个子节点
  for (const chlid of treeMap.get(cur) || []) {
    // 递归计算子节点的路径权重，并更新res
    res = Math.max(res, dfsLongestPath(chlid, pathNum, treeMap))
  }

  // 返回当前节点的通知时间（加父子节点中最大的通知时间）
  return pathNum[cur] + res
}

// 数组转化为树
/**
 * 
 * @param {Array} arr 数组
 * @returns {Map} 树
 */
export const arrayToTree = (arr) => {
  // 构建树的邻接表
  const g = new Map()

  // 遍历每个员工，将其加入其直接负责人的下属列表
  for (let i = 0; i < arr.length; i++) {
    if (!g.get(arr[i])) {
      g.set(arr[i], [i])
    } else {
      g.get(arr[i]).push(i)
    }
  }

  return g
}
