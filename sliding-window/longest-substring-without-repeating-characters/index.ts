function lengthOfLongestSubstring(s: string): number {
  let l: number = 0;
  let charset: Set<string> = new Set();
  let longest: number = 0;
  for (let r = 0; r < s.length; r++) {
    while (charset.has(s[r])) {
      charset.delete(s[l]);
      l++;
    }
    charset.add(s[r]);
    longest = Math.max(longest, r - l + 1);
  }
  return longest;
}
