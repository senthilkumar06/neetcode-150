function groupAnagrams(strs) {
  const hash = new Map();

  for (let str of strs) {
    const sorted = str.split("").sort().join();
    if (hash.has(sorted)) {
      hash.set(sorted, [...hash.get(sorted), str]);
    } else {
      hash.set(sorted, [str]);
    }
  }

  return Array.from(hash.values());
}
