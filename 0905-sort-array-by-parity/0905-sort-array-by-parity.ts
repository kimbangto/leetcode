function sortArrayByParity(nums: number[]): number[] {
    const answer = [];
    nums.forEach(n => {
        if(n % 2 === 0) answer.unshift(n);
        else answer.push(n);
    })
    
    return answer;
};