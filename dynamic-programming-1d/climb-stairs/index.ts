function climbStairs(n: number): number {
  let result = 0;
  function climb(step: number) {
    if (step > n) {
      return;
    }
    if (step === n) {
      result += 1;
      return;
    }
    climb(step + 1);
    climb(step + 2);
  }

  climb(0);
  return result;
}
