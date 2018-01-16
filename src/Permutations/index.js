/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  if (nums.length === 1) {
    return [nums]
  }
  const permutionEachNum = nums.map((num) => {
    const otherNumsPermution = permute(nums.filter((val) => num !== val));
    return otherNumsPermution.map((arr) => [num, ...arr]);
  });
  return permutionEachNum.reduce((pre, cur) => {
    return [...pre, ...cur];
  }, []);
};

console.log(permute([1]));
console.log(permute([1, 2, 3, 4]));