function isValid(board: string[][]) {
  const rows: Set<string>[] = Array.from({ length: 9 }).map(
    () => new Set<string>()
  );
  const columns: Set<string>[] = Array.from({ length: 9 }).map(
    () => new Set<string>()
  );
  const grids: Set<string>[] = Array.from({ length: 9 }).map(
    () => new Set<string>()
  );

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        continue;
      }

      let gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (
        rows[i].has(board[i][j]) ||
        columns[j].has(board[i][j]) ||
        grids[gridIndex].has(board[i][j])
      ) {
        return false;
      }

      rows[i].add(board[i][j]);
      columns[j].add(board[i][j]);
      grids[gridIndex].add(board[i][j]);
    }
  }
  return true;
}
