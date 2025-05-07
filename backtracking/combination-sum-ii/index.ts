function combinationSum2(nums: number[], target: number) {
  let results: number[][] = [];
  nums.sort((a, b) => a - b);
  function backtrack(index: number, sum: number, combination: number[]) {
    if (sum === target) {
      results.push([...combination]);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue;
      }
      sum += nums[i];
      combination.push(nums[i]);
      backtrack(i + 1, sum, combination);
      sum -= nums[i];
      combination.pop();
    }
  }

  backtrack(0, 0, []);
  return results;
}
