/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewel = jewels.split('');
    const stone = stones.split('');
    return stone.filter(x => jewel.includes(x)).length;
};