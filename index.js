function CekNull(p1) {
  if (p1 == "") {
    return 0;
  } else {
    return 1;
  }
}
class backtracking {
  static N = 6;

  cetakSolusi(sol) {
    document.write('<p class= "solusi">');
    for (let i = 0; i < backtracking.N; i++) {
      for (let j = 0; j < backtracking.N; j++) {
        if (sol[i][j] == 1) {
          document.write("<b> " + sol[i][j] + " </b>");
        } else if (sol[i][j] == 0) {
          document.write(" " + sol[i][j] + " ");
        }
      }
      document.write("<br>");
    }
    document.write("</p>");
  }

  aman(maze, x, y) {
    return x >= 0 && x < backtracking.N && y >= 0 && y < backtracking.N && maze[x][y] == 1;
  }

  solusi(maze) {
    var sol = Array(backtracking.N)
      .fill(0)
      .map(() => new Array(backtracking.N).fill(0));
    if (this.solusiLabirin(maze, 0, 0, sol) == false) {
      document.write("<h4>TIDAK ADA SOLUSI!!!</h4>");
      return false;
    }
    this.cetakSolusi(sol);
    return true;
  }
  solusiLabirin(maze, x, y, sol) {
    if (x == backtracking.N - 1 && y == backtracking.N - 1 && maze[x][y] == 1) {
      sol[x][y] = 1;
      return true;
    }
    if (this.aman(maze, x, y) == true) {
      if (sol[x][y] == 1) {
        return false;
      }
      sol[x][y] = 1;
      if (this.solusiLabirin(maze, x + 1, y, sol)) {
        return true;
      }
      if (this.solusiLabirin(maze, x, y + 1, sol)) {
        return true;
      }
      if (this.solusiLabirin(maze, x - 1, y, sol)) {
        return true;
      }
      if (this.solusiLabirin(maze, x, y - 1, sol)) {
        return true;
      }
      sol[x][y] = 0;
      return false;
    }
    return false;
  }

  static default(args) {
    document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">');
    document.write('<link rel="stylesheet" href="index.css">');
    var labirin = new backtracking();
    var maze = [
      [1, 1, 0, 1, 1, 1],
      [1, 1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0, 1],
      [0, 1, 1, 1, 0, 1],
      [1, 1, 0, 1, 0, 1],
    ];
    backtracking.N = maze.length;
    document.write('<div class="container-fluid" id = "keluaran">');
    document.write("<h1>Labirin Awal</h1>");
    document.write('<p class= "awal">');
    for (let i = 0; i < backtracking.N; i++) {
      for (let j = 0; j < backtracking.N; j++) {
        if (maze[i][j] == 1) {
          document.write("<b> " + maze[i][j] + " </b>");
        } else if (maze[i][j] == 0) {
          document.write(" " + maze[i][j] + " ");
        }
      }
      document.write("<br>");
    }
    document.write("</p>");

    document.write("<br>");
    document.write("<h1>Labirin Solusi</h1>");
    labirin.solusi(maze);
    document.write('<br><a href="index.html"><button class="btn btn-secondary">Back</button></a>');
    document.write("</div>");
  }

  static custom(args) {
    var v11 = document.getElementById("1,1").value;
    var v12 = document.getElementById("1,2").value;
    var v13 = document.getElementById("1,3").value;
    var v14 = document.getElementById("1,4").value;
    var v15 = document.getElementById("1,5").value;
    var v16 = document.getElementById("1,6").value;

    var v21 = document.getElementById("2,1").value;
    var v22 = document.getElementById("2,2").value;
    var v23 = document.getElementById("2,3").value;
    var v24 = document.getElementById("2,4").value;
    var v25 = document.getElementById("2,5").value;
    var v26 = document.getElementById("2,6").value;

    var v31 = document.getElementById("3,1").value;
    var v32 = document.getElementById("3,2").value;
    var v33 = document.getElementById("3,3").value;
    var v34 = document.getElementById("3,4").value;
    var v35 = document.getElementById("3,5").value;
    var v36 = document.getElementById("3,6").value;

    var v41 = document.getElementById("4,1").value;
    var v42 = document.getElementById("4,2").value;
    var v43 = document.getElementById("4,3").value;
    var v44 = document.getElementById("4,4").value;
    var v45 = document.getElementById("4,5").value;
    var v46 = document.getElementById("4,6").value;

    var v51 = document.getElementById("5,1").value;
    var v52 = document.getElementById("5,2").value;
    var v53 = document.getElementById("5,3").value;
    var v54 = document.getElementById("5,4").value;
    var v55 = document.getElementById("5,5").value;
    var v56 = document.getElementById("5,6").value;

    var v61 = document.getElementById("6,1").value;
    var v62 = document.getElementById("6,2").value;
    var v63 = document.getElementById("6,3").value;
    var v64 = document.getElementById("6,4").value;
    var v65 = document.getElementById("6,5").value;
    var v66 = document.getElementById("6,6").value;

    v12 = CekNull(v12);
    v13 = CekNull(v13);
    v14 = CekNull(v14);
    v15 = CekNull(v15);
    v16 = CekNull(v16);
    v21 = CekNull(v21);
    v22 = CekNull(v22);
    v23 = CekNull(v23);
    v24 = CekNull(v24);
    v25 = CekNull(v25);
    v26 = CekNull(v26);
    v31 = CekNull(v31);
    v32 = CekNull(v32);
    v33 = CekNull(v33);
    v34 = CekNull(v34);
    v35 = CekNull(v35);
    v36 = CekNull(v36);
    v41 = CekNull(v41);
    v42 = CekNull(v42);
    v43 = CekNull(v43);
    v44 = CekNull(v44);
    v45 = CekNull(v45);
    v46 = CekNull(v46);
    v51 = CekNull(v51);
    v52 = CekNull(v52);
    v53 = CekNull(v53);
    v54 = CekNull(v54);
    v55 = CekNull(v55);
    v56 = CekNull(v56);
    v61 = CekNull(v61);
    v62 = CekNull(v62);
    v63 = CekNull(v63);
    v64 = CekNull(v64);
    v65 = CekNull(v65);

    var labirin = new backtracking();
    var maze = [
      [v11, v12, v13, v14, v15, v16],
      [v21, v22, v23, v24, v25, v26],
      [v31, v32, v33, v34, v35, v36],
      [v41, v42, v43, v44, v45, v46],
      [v51, v52, v53, v54, v55, v56],
      [v61, v62, v63, v64, v65, v66],
    ];
    backtracking.N = maze.length;

    document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">');
    document.write('<link rel="stylesheet" href="index.css">');
    document.write('<div class="container-fluid" id = "keluaran">');
    document.write("<h1>Labirin Awal</h1>");
    document.write('<p class= "awal">');
    for (let i = 0; i < backtracking.N; i++) {
      for (let j = 0; j < backtracking.N; j++) {
        if (maze[i][j] == 1) {
          document.write("<b> " + maze[i][j] + " </b>");
        } else if (maze[i][j] == 0) {
          document.write(" " + maze[i][j] + " ");
        }
      }
      document.write("<br>");
    }
    document.write("</p>");

    document.write("<br>");
    document.write("<h1>Labirin Solusi</h1>");
    labirin.solusi(maze);
    document.write('<br><a href="index.html"><button class="btn btn-secondary">Back</button></a>');
    document.write("</div>");
  }
}
