function combinationSum3(k: number, n: number): number[][] {
  let nums = Array(9)
    .fill(0)
    .map((i, index) => index + 1);
  let results: number[][] = [];
  function backtrack(index: number, sum: number, combination: number[]) {
    if (combination.length === k && sum === n) {
      results.push([...combination]);
      return;
    }

    if (combination.length > k || sum > n) {
      return;
    }

    for (let i = index; i < nums.length; i++) {
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
