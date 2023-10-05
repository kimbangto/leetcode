/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const result = [];
    for(let i=0; i<nums.length-1; i++) {
        for(let j=0; j<nums.length; j++) {
            if(nums[i] === nums[j]) {
                if(i < j) result.push([i, j]);
            }
        }
    }
    return result.length;
};