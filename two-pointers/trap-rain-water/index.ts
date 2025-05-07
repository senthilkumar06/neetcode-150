function trap(height: number[]): number {
  let prefixMax = Array(height.length).fill(0);
  let suffixMax = Array(height.length).fill(0);
  function max() {
    prefixMax[0] = height[0];
    suffixMax[height.length - 1] = height[height.length - 1];

    for (let i = 1; i < height.length; i++) {
      prefixMax[i] = Math.max(prefixMax[i - 1], height[i]);
    }
    for (let i = height.length - 2; i >= 0; i--) {
      suffixMax[i] = Math.max(suffixMax[i + 1], height[i]);
    }
  }

  let trapped = 0;
  max();
  for (let i = 0; i < height.length; i++) {
    trapped += Math.min(prefixMax[i], suffixMax[i]) - height[i];
  }
  return trapped;
}
