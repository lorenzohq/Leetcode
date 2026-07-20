function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let needed = target - nums[i];
        if (map.has(needed)) {
            return [map.get(needed)!, i]
        } else {
            map.set(nums[i], i)
        }
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9))