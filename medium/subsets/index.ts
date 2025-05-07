function subsets(nums: number[]) {
  let results: number[][] = [];

  function backtrack(index: number, combination: number[]) {
    if (index >= nums.length) {
      results.push([...combination]);
      return;
    }

    combination.push(nums[index]);
    backtrack(index + 1, combination);
    combination.pop();
    backtrack(index + 1, combination);
  }

  backtrack(0, []);
  return results;
}
