function alienDictionary(words: string[]): string {
  const graph = new Map<string, Set<string>>();
  const indegree = new Map<string, number>();

  for (const word of words) {
    for (const char of word) {
      indegree.set(char, 0);
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    if (w1.startsWith(w2) && w1.length > w2.length) {
      return "";
    }
    const minLength = Math.min(w1.length, w2.length);

    for (let j = 0; j < minLength; j++) {
      if (w1[j] !== w2[j]) {
        const first = w1[j];
        const next = w2[j];

        if (!graph.has(first)) {
          graph.set(first, new Set());
        }

        if (!graph.get(first)!.has(next)) {
          graph.get(first)?.add(next);
          indegree.set(next, indegree.get(next)! + 1);
        }
        break;
      }
    }
  }
  let queue: string[] = [];
  let result = "";

  for (const [char, degree] of indegree) {
    if (degree === 0) {
      queue.push(char);
    }
  }

  while (queue.length > 0) {
    const curr = queue.shift()!;
    result += curr;

    for (const neighbor of graph.get(curr) ?? []) {
      let neighborDegree = indegree.get(neighbor)!;
      neighborDegree -= 1;
      indegree.set(neighbor, neighborDegree);
      if (neighborDegree === 0) {
        queue.push(neighbor);
      }
    }
  }
  if (result.length !== Object.keys(indegree).length) {
    return "";
  }
  return result;
}
