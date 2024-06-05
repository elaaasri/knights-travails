class Board {
  constructor() {
    this.rows = 8;
    this.columns = 8;
    this.board = [];
  }
  // create a 2D array representing the board :
  buildGraph() {
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.board[i][j] = 0; // initialize each node as 0.
      }
    }
  }
  // Check if a given move is within the bounds of the board
  isWithinBounds(x, y) {
    return x >= 0 && x < this.rows && y >= 0 && y < this.columns;
  }
  // find the shortest path using BFS :
  findShortestPath(start, end) {
    const queue = [start]; // queue to implement the fun on each other move.
    const path = []; // stores path.
    const parentMap = new Map(); // stores each node's predecessor to reconstruct the path later.
    parentMap.set(start.toString(), null); // setting the parent of each move.

    // iterates over all other legal knight moves :
    while (queue.length > 0) {
      let currentMove = queue.shift();
      const [currentRow, currentColumn] = currentMove;
      const [endRow, endColumn] = end;

      // // shows the board on each iteration :
      // console.log("#".repeat(30));
      // this.board.map((a) => console.log(a));

      // if we reach the end, construct the path :
      if (currentRow === endRow && currentColumn === endColumn) {
        // constructuring the path :
        while (currentMove) {
          path.push(currentMove); // stores current.
          currentMove = parentMap.get(currentMove.toString()); // updates currentMove to it's predecessor.
        }
        return `=> You made it in ${
          path.length
        } moves! Here's your path: ${JSON.stringify(path.reverse())}`;
      }

      // gets all other possible knight moves :
      const allKnightMoves = [
        [currentRow - 1, currentColumn - 2],
        [currentRow + 1, currentColumn - 2],
        [currentRow - 1, currentColumn + 2],
        [currentRow + 1, currentColumn + 2],
        [currentRow - 2, currentColumn - 1],
        [currentRow - 2, currentColumn + 1],
        [currentRow + 2, currentColumn - 1],
        [currentRow + 2, currentColumn + 1],
      ];
      // filters legal knight moves :
      const legalKnightMoves = allKnightMoves.filter((move) =>
        this.isWithinBounds(move[0], move[1])
      );

      // explores all other legal knight moves :
      for (const move of legalKnightMoves) {
        const [moveRow, moveColumn] = move;
        this.board[moveRow][moveColumn] = "m"; // adding "m" as the other moves.

        // helps to not revisit moves we already encountered :
        if (!parentMap.has(move.toString())) {
          parentMap.set(move.toString(), currentMove);
          queue.push(move);
        }
      }
    }
    return "no possible path found.";
  }
  //
  knightMoves(start, end) {
    // builds board :
    this.buildGraph();
    const [startRow, startColumn] = start;
    const [endRow, endColumn] = end;
    // ensures that start and end moves is legal :
    const startMove = this.isWithinBounds(startRow, startColumn);
    const endMove = this.isWithinBounds(endRow, endColumn);
    // adding start and end moves to the board if there are both legal :
    if (startMove && endMove) {
      this.board[startRow][startColumn] = "s"; // adding "s" as the start.
      this.board[endRow][endColumn] = "e"; // adding "e" as the end.
      return this.findShortestPath(start, end); // finds the shortest path.
    } else {
      return "Start and end moves must be legal within the board!";
    }
  }
}
// Test the board and knightMoves function
const board = new Board();
const start = [3, 3];
const end = [5, 3];
console.log(board.knightMoves(start, end));
