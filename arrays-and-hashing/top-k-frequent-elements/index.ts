function topKFrequent(nums: number[], k: number) {
  const hash = new Map();
  const result: number[] = [];
  for (let i of nums) {
    hash.set(i, (hash.get(i) || 0) + 1);
  }

  let buckets: number[][] = new Array(nums.length + 1).map(() => []);
  console.log(hash);
  for (let [num, freq] of hash.entries()) {
    buckets[freq].push(num);
    console.log(freq, buckets[freq]);
  }

  for (let i = buckets.length - 1; i >= 0; i--) {
    console.log(buckets[i]);
    for (let j = 0; j < buckets[i].length; j++) {
      result.push(buckets[i][j]);
      if (result.length === k) {
        return result;
      }
    }
  }
  return result;
}
