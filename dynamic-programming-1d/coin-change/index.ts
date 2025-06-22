function coinChange(coins: number[], amount: number) {
  let memo = new Map<number, number>();
  function dp(total: number): number {
    if (total === 0) return 0;
    if (memo.has(total)) {
      return memo.get(total)!;
    }
    let count = Number.MAX_SAFE_INTEGER;
    for (let coin of coins) {
      if (total - coin >= 0) {
        count = Math.min(count, 1 + dp(total - coin));
      }
    }
    memo.set(total, count);
    return count;
  }

  const min = dp(amount);
  return min < Number.MAX_SAFE_INTEGER ? min : -1;
}
