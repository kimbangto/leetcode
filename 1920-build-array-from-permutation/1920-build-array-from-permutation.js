/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const answer = [];
    nums.forEach(x => {
        answer.push(nums[x]);
    })
    return answer;
};