function combinationSum(nums: number[], target: number) {
  let results: number[][] = [];

  function backtrack(index: number, sum: number, combination: number[]) {
    if (sum === target) {
      results.push([...combination]);
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = index; i < nums.length; i++) {
      sum += nums[i];
      combination.push(nums[i]);
      backtrack(i, sum, combination);
      sum -= nums[i];
      combination.pop();
    }
  }

  backtrack(0, 0, []);
  return results;
}
