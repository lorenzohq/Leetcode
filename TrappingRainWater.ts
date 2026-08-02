function trap(height: number[]): number {
    let n = height.length;
    let ans = 0;
    let left = 0;
    let right = n - 1;
    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])

        if (leftMax < rightMax) {
            ans += leftMax - height[left];
            left++;
        } else {
            ans += rightMax - height[right];
            right--;
        }
    }

    return ans;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
