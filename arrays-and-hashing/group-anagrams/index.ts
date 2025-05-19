function groupAnagrams(strs: string[]) {
  const hash: Map<string, string[]> = new Map();

  for (let str of strs) {
    let count = Array(26).fill(0);
    for (const c of str) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    let sorted = count.join("#");
    if (hash.has(sorted)) {
      hash.set(sorted, [...(hash.get(sorted) || []), str]);
    } else {
      hash.set(sorted, [str]);
    }
  }

  return Array.from(hash.values());
}
