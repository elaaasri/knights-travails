// node class :
class Node {
  constructor(vertex, coords, neighbors) {
    this.vertex = vertex;
    this.coords = coords;
    this.neighbors = neighbors;
  }
}
// board class :
class Board {
  constructor() {
    this.board = [];
  }
  buildGraph() {
    let rows = 8;
    let columns = 8;
    for (let i = 0; i < rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < columns; j++) {
        this.board[i][j] = 0;
      }
    }
  }
  knightMoves(start, end) {
    let startRow = start[0];
    let startColumn = start[1];

    // let allKnightMoves = [
    //   [startRow - 1, startColumn - 2],
    //   [startRow + 1, startColumn - 2],
    //   [startRow - 1, startColumn + 2],
    //   [startRow + 1, startColumn + 2],
    //   [startRow - 2, startColumn - 1],
    //   [startRow - 2, startColumn + 1],
    //   [startRow + 2, startColumn - 1],
    //   [startRow + 2, startColumn + 1],
    // ];

    let startMove = this.isWithinBounds(startRow, startColumn);
    let firstLeftMove = this.isWithinBounds(startRow - 1, startColumn - 2);
    let secondLeftMove = this.isWithinBounds(startRow + 1, startColumn - 2);
    let firstRightMove = this.isWithinBounds(startRow - 1, startColumn + 2);
    let secondRightMove = this.isWithinBounds(startRow + 1, startColumn + 2);
    let firstUpMove = this.isWithinBounds(startRow - 2, startColumn - 1);
    let secondUpMove = this.isWithinBounds(startRow - 2, startColumn + 1);
    let firstDowntMove = this.isWithinBounds(startRow + 2, startColumn - 1);
    let secondDowntMove = this.isWithinBounds(startRow + 2, startColumn + 1);

    if (startMove) {
      this.board[startRow][startColumn] = "s";
      if (firstLeftMove) {
        this.board[startRow - 1][startColumn - 2] = "l";
      }
      if (secondLeftMove) {
        this.board[startRow + 1][startColumn - 2] = "l";
      }
      if (firstRightMove) {
        this.board[startRow - 1][startColumn + 2] = "r";
      }
      if (secondRightMove) {
        this.board[startRow + 1][startColumn + 2] = "r";
      }
      if (firstUpMove) {
        this.board[startRow - 2][startColumn - 1] = "u";
      }
      if (secondUpMove) {
        this.board[startRow - 2][startColumn + 1] = "u";
      }
      if (firstDowntMove) {
        this.board[startRow + 2][startColumn - 1] = "d";
      }
      if (secondDowntMove) {
        this.board[startRow + 2][startColumn + 1] = "d";
      }
    }

    this.board.map((a) => {
      console.log(a);
    });
  }
  isWithinBounds(row, column) {
    return row >= 0 && row < 8 && column >= 0 && column < 8;
  }
}

const board = new Board();
console.log(board.buildGraph());
console.log(board.knightMoves([5, 5], [1, 5]));
