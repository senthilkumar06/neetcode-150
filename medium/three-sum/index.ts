function threeSum(nums: number[]) {
  let result: number[][] = [];
  function twoSum(index: number, start: number, end: number) {
    while (start < end) {
      const sum = nums[start] + nums[end] + nums[index];
      if (sum < 0) {
        start++;
      } else if (sum > 0) {
        end--;
      } else {
        result.push([nums[index], nums[start], nums[end]]);
        start++;
        end--;
        while (start < end && nums[start] === nums[start - 1]) {
          start++;
        }
      }
    }
  }

  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    twoSum(i, i + 1, nums.length - 1);
  }
  return result;
}
