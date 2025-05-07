function permute(nums: number[]) {
  nums.sort((a, b) => a - b);
  let results: number[][] = [];

  function backtrack(index: number, permutation: number[]) {
    console.log(index, permutation);
    if (permutation.length === nums.length) {
      results.push([...permutation]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (permutation.includes(nums[i])) continue;
      permutation.push(nums[i]);
      backtrack(i + 1, permutation);
      permutation.pop();
    }
  }

  backtrack(0, []);
  return results;
}
