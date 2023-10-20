/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((x, i) => nums.slice(0, i+1).reduce((acc, cur) => acc+cur));
};