// class board :
class Board {
  constructor() {
    this.rows = 8;
    this.columns = 8;
    this.board = [];
  }
  // returns a 2D board :
  buildGraph() {
    // creating 2D array :
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.board[i][j] = 0;
      }
    }
  }
  knightMoves(start, end) {
    // build 2D array :
    this.buildGraph();
    // start knight move :
    const [startRow, startColumn] = start;
    // end knight move :
    const [endRow, endColumn] = end;
    // all other knight moves :
    const otherKnightMoves = [
      [startRow - 1, startColumn - 2],
      [startRow + 1, startColumn - 2],
      [startRow - 1, startColumn + 2],
      [startRow + 1, startColumn + 2],
      [startRow - 2, startColumn - 1],
      [startRow - 2, startColumn + 1],
      [startRow + 2, startColumn - 1],
      [startRow + 2, startColumn + 1],
    ];
    // adding legal knight start/end move :
    let knightStartMove = this.isWithinBounds(startRow, startColumn);
    let knightEndMove = this.isWithinBounds(endRow, endColumn);
    // adding moves to board :
    if (knightStartMove && knightEndMove) {
      this.board[startRow][startColumn] = "s"; // start move.
      this.board[endRow][endColumn] = "e"; // end move.

      // other legal knight moves :
      const filterdOtherKnightMoves = otherKnightMoves.filter((move) =>
        this.isWithinBounds(move[0], move[1])
      );
      filterdOtherKnightMoves.map((move) => {
        this.board[move[0]][move[1]] = "m";
        return;
      });
    } else return "start and end moves must be legal in the board!";
    console.log("#".repeat(30));
    this.board.map((a) => console.log(a));
  }
  // getShortestPath(newMoves, endMove) {
  //   newMoves.forEach((move) => {
  //     let queue = [move];
  //     currentMove = queue.pop();
  //     console.log(move);
  //     this.knightMoves(move, endMove);
  //   });
  //   return `=> You made it in ${
  //     allPaths.length
  //   } moves!  Here's your path: \n ${JSON.stringify(allPaths)}`;
  // }
  // checks if the given move indices is in the 2D array board :
  isWithinBounds(x, y) {
    return x >= 0 && x < this.rows && y >= 0 && y < this.columns;
  }
}
const board = new Board();
const start = [1, 1];
const end = [6, 6];
console.log(board.knightMoves(start, end));
