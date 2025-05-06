function longestConsecutive(nums: number[]) {
  let numSet = new Set(nums);
  let length = 0;
  let longest = 0;
  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      length = 1;
      while (numSet.has(num + length)) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}
