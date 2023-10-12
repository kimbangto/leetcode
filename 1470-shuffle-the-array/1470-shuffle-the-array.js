/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const slice1 = nums.slice(0, n);
    const slice2 = nums.slice(n, n*2);
    const answer = [];
    for(let i=0; i<n; i++) {
        answer.push(slice1[i]);
        answer.push(slice2[i]);
    }
    return answer;
};