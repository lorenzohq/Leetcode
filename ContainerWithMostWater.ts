function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let area = 0;

    while (left < right) {
        let h = Math.min(height[left], height[right])
        let w = right - left
        let clacArea = h * w

        area = Math.max(area, clacArea)

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return area;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
