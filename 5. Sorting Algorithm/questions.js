
// 1. Sort elements by frequency -- increasing order
function frequencySort(nums) {
    const obj = {};
    for (const num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }
    return nums.sort((a, b) => obj[a] === obj[b] ? b - a : obj[a] - obj[b]);
};

console.log(frequencySort([2, 2, 5, 5, 5, 5, 8, 3, 3, 3, 4, 4]))