/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    const num1 = [];
    const num2 = [];
    for(let i=1; i<=n; i++) {
        if(i % m === 0) num2.push(i);
        else num1.push(i);
    }
    const sum1 = num1.length === 0 ? 0 : num1.reduce((acc,cur) => acc+cur);
    const sum2 = num2.length === 0 ? 0 : num2.reduce((acc,cur) => acc+cur);
    
    return sum1 - sum2;
};