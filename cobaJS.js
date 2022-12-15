const sol = [
  [1, 1, 0, 1, 1, 1],
  [1, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0, 1],
  [1, 1, 0, 1, 0, 1],
];

let N = sol.length;

function cetakSolusi(sol) {
  document.write("<h1>");
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      document.write(" " + sol[i][j] + " ");
    }
    document.write("<br>");
  }
  document.write("</h1>");
}

solusi(sol);

function aman(maze, x, y) {
  return x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1;
}

function solusi(maze) {
  const sol = [[], []];

  if (solusiLabirin(maze, 0, 0, sol) == false) {
    console.log("Solution doesn't exist");
    return false;
  }
  cetakSolusi(sol);
  return true;
}

function solusiLabirin(maze, x, y, sol) {
  if (x == N - 1 && y == N - 1 && maze[x][y] == 1) {
    sol[x][y] = 1;
    return true;
  }

  if (aman(maze, x, y) == true) {
    if (sol[x][y] == 1) {
      return false;
    }

    sol[x][y] = 1;

    if (solusiLabirin(maze, x + 1, y, sol)) {
      return true;
    }

    if (solusiLabirin(maze, x, y + 1, sol)) {
      return true;
    }

    if (solusiLabirin(maze, x - 1, y, sol)) {
      return true;
    }

    if (solusiLabirin(maze, x, y - 1, sol)) {
      return true;
    }

    sol[x][y] = 0;
    return false;
  }

  return false;
}
