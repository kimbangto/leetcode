/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const result = [];
    nums.forEach(num => result.push(nums.filter(x => x < num).length));
    return result;
};