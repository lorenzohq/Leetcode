function productExceptSelf(nums: number[]): number[] {
    let arr = [];
    arr[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        arr[i] = arr[i - 1] * nums[i - 1]
    }

    console.log(arr);
    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        arr[i] = arr[i] * suffix;
        suffix = suffix * nums[i]
    }

    return arr;
};

console.log(productExceptSelf([1, 2, 3, 4]));