function threeSumClosest(nums: number[], target: number): number {
    let arr = [...nums].sort((a, b) => a - b);
    let closest = arr[0] + arr[1] + arr[2];

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum == target) return sum;
            else if (sum < target) left++;
            else right--;
        }
    }

    return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
