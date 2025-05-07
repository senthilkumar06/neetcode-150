function subsetsWithDup(nums: number[]) {
  let results: number[][] = [];
  nums.sort((a, b) => a - b);
  function backtrack(index: number, combination: number[]) {
    results.push([...combination]);
    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue;
      combination.push(nums[i]);
      backtrack(i + 1, combination);
      combination.pop();
    }
  }
  backtrack(0, []);
  return results;
}
