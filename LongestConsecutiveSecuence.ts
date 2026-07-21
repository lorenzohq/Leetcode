function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    let sNums = nums.sort((a, b) => a - b)
    let longest = 1;
    let best = 1;

    for (let i = 1; i < sNums.length; i++) {
        if (sNums[i] === sNums[i - 1]) {
            continue;
        }
        if (sNums[i] === sNums[i - 1] + 1) {
            longest++
        } else {
            longest = 1
        }
        best = Math.max(best, longest)
    }

    return best;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));