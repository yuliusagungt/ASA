package ASA;


public class backtracking {

    static int N;

    void cetakSolusi(int sol[][]) {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                System.out.print(" " + sol[i][j] + " ");
            }
            System.out.println();
        }
    }

    boolean aman(
            int maze[][], int x, int y) {
        return (x >= 0 && x < N && y >= 0
                && y < N && maze[x][y] == 1);
    }

    boolean solusi(int maze[][]) {
        int sol[][] = new int[N][N];

        if (solusiLabirin(maze, 0, 0, sol) == false) {
            System.out.print("Solution doesn't exist");
            return false;
        }
        cetakSolusi(sol);
        return true;
    }

    boolean solusiLabirin(int maze[][], int x, int y,
            int sol[][]) {
        if (x == N - 1 && y == N - 1
                && maze[x][y] == 1) {
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

    public static void main(String args[]) {
        backtracking labirin = new backtracking();
        int maze[][] = {
            {1, 1, 0, 1, 1, 1},
            {1, 1, 0, 1, 0, 1},
            {1, 1, 1, 1, 1, 1},
            {0, 1, 0, 1, 0, 1},
            {0, 1, 1, 1, 0, 1},
            {1, 1, 0, 1, 0, 1}};

        N = maze.length;       
        
        System.out.println("Labirin Awal");
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                System.out.print(" " + maze[i][j] + " ");
            }
            System.out.println();
        }
        
        System.out.println("\nLabirin Solusi");
        labirin.solusi(maze);
    }

// This code is contributed by Abhishek Shankhadhar
}
