function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  function backtrack(row: number, col: number, index: number): boolean {
    // If all characters are found
    if (index === word.length) return true;

    // Check boundaries and conditions
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      visited[row][col] ||
      board[row][col] !== word.charAt(index)
    ) {
      return false;
    }

    visited[row][col] = true;

    // Explore 4 directions
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [dx, dy] of directions) {
      if (backtrack(row + dx, col + dy, index + 1)) {
        return true;
      }
    }

    // Backtrack
    visited[row][col] = false;
    return false;
  }

  // Start DFS from every cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (backtrack(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
}
