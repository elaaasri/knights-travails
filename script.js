// // node class :
// class Node {
//   constructor(vertex, coords, neighbors) {
//     this.vertex = vertex;
//     this.coords = coords;
//     this.neighbors = neighbors;
//   }
// }
// board class :
class Board {
  constructor() {
    this.rows = 8;
    this.columns = 8;
    this.board = [];
  }
  // returns a 2D array :
  buildGraph() {
    // creating 2D array :
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.board[i][j] = 0;
      }
    }
    // return this.board;
  }
  knightMoves(start, end) {
    // start knight move :
    let startRow = start[0];
    let startColumn = start[1];
    // end knight move :
    let endRow = end[0];
    let endColumn = end[1];
    // all other knight moves :
    let allKnightMovesArr = [
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

    if (knightStartMove) {
      this.board[startRow][startColumn] = "s";
    } else return "invalid knight start move!";

    if (knightEndMove) {
      this.board[endRow][endColumn] = "e";
    } else return "invalid knight end move!";

    // adding other legal knight moves :
    allKnightMovesArr.map((move) => {
      // checks each move indices if it's legal in the board before adding it :
      let isEachKnightMovePossible = this.isWithinBounds(move[0], move[1]);
      // checking knight start/ end move before adding other moves :
      if (knightStartMove && knightEndMove && isEachKnightMovePossible) {
        this.board[move[0]][move[1]] = "m";
        // this.getShortestPath(move);
      }
    });
    this.board.map((a) => console.log(a));
  }
  // checks if the given move indices is in the 2D array :
  isWithinBounds(x, y) {
    return x >= 0 && x < this.rows && y >= 0 && y < this.columns;
  }
  // getShortestPath(newSquare) {
  //   console.log(newSquare);
  // }
}

const board = new Board();
console.log(board.buildGraph());
console.log(board.knightMoves([1, 7], [1, 1]));
