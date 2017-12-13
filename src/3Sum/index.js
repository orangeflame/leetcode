/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSum = function(nums) {
    const smallToBig = 
        nums.sort((a,b) => a > b);
    const zeroCount = nums.filter(n => n === 0).length;
    const results = [];
    if (nums.length < 3){
        return [];
    }
    if (zeroCount === nums.length) {
        return [[0, 0, 0]];
    }
    for(let i = 0; i < smallToBig.length; i++) {
        if (i != 0 && smallToBig[i] === smallToBig[i - 1]) continue;
        if (smallToBig[i] > 0) {
            console.log('111', results);
            const allStrings = results.map(res => res.toString());
            return results.filter((res, idx) => allStrings.indexOf(res.toString()) === idx);
        }
        const target = - smallToBig[i];
        let lo =0;
        let hi =nums.length -1;
        while (lo < hi) {
            if (lo === i 
                || smallToBig[lo] + smallToBig[hi] < target) {
                lo++;
            } else if (hi === i || 
                smallToBig[hi] + smallToBig[lo] > target) {
                hi--;
            } else if (smallToBig[hi] + smallToBig[lo] === target) {
                if(smallToBig[i] < smallToBig[lo]) {
                    results.push([smallToBig[i], smallToBig[lo], smallToBig[hi]]);    
                } else {
                    results.push([smallToBig[lo], smallToBig[i], smallToBig[hi]]);
                }
                lo++;
            } else {
                lo++;
            }
        }
    }
};

console.log(threeSum([-1, 0, 1, 2, 2, -1, -4]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-1,0,1,0]));
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,0,0,0,0,1]));
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));