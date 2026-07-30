function moveZeroes(nums: number[]): void {
    let i = 0;
    let j = 0;
    while (i < nums.length) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;

            j++
        }
        i++
    }

    console.log(nums);
}

// [1, 2, 3, 0, 0, 0]
moveZeroes([0, 0, 0, 1, 2, 3])