function trap(height: number[]): number {
    let n = height.length;

    let leftMax = [];
    let rightMax = [];

    leftMax[0] = height[0]
    rightMax[n - 1] = height[n - 1]

    for (let i = 1; i < n - 1; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }

    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }

    let ans = 0;
    for (let i = 0; i < n - 1; i++) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return ans;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
