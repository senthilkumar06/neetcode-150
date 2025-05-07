function hasDuplicates(nums: number[]) {
  let numSet = new Set();
  for (let num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}
