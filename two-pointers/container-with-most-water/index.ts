function containerWithMostWater(heights: number[]) {
  let maxWater = 0;
  let start = 0;
  let end = heights.length - 1;
  while (start < end) {
    maxWater = Math.max(
      Math.min(heights[start], heights[end]) * (end - start),
      maxWater
    );
    if (heights[start] < heights[end]) {
      start++;
    } else {
      end--;
    }
  }
  return maxWater;
}
