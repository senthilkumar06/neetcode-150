function productExceptSelf(nums: number[]) {
  let prefixArray = [1];
  let suffixArray = Array(nums.length).fill(0);
  suffixArray[nums.length - 1] = 1;
  for (let i = 1; i < nums.length; i++) {
    prefixArray[i] = prefixArray[i - 1] * nums[i - 1];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    suffixArray[j] = suffixArray[j + 1] * nums[j + 1];
  }

  return prefixArray.map((curr, index) => curr * suffixArray[index]);
}
