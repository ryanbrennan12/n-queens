/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// initialize boar
//hasRowConflictAt: function (rowIndex)
//hasColConflictAt: function (colIndex) {
//togglePiece: function (rowIndex, colIndex) 
// for (var row in board.attributes) {
//   if (Array.isArray(board.attributes[row])) {
//     board.attributes[row].forEach(function(square, column) {

//       if (!board.hasRowConflictAt(row) &&
//           !board.hasColConflictAt(column) &&
//           !board.hasAnyRooksConflicts()) {

//         board.togglePiece(row, column);

//       }
//     });
//     solution.push(board.attributes[row]);
//   }
// }


window.findNRooksSolution = function (n) {
  var solution = [];
  // initialize board
  //hasRowConflictAt: function (rowIndex)
  //hasColConflictAt: function (colIndex) {
  //togglePiece: function (rowIndex, colIndex) 
  var board = new Board({ n: n }); //fixme // [ [0,0,0,0],[0,0,0,0] ]
  
  var recursiveRowTest = function (rowArray) {
    for (var i = 0; i < rowArray.length; i++) {
      // toggle a piece
      board.togglePiece(row, i);
      // test for conflicts
      if (board.hasAnyRooksConflicts()) {
        // if true (conflicts) then toggle again
        board.togglePiece(row, i);
        return rowArray;
      }
    }
  };
  
  for (var row in board.attributes) {
    if (Array.isArray(board.attributes[row])) {
      console.log(board.attributes[row], 'before')
      board.attributes[row] = recursiveRowTest(board.attributes[row]);
      console.log(board.attributes[row], 'after')
      solution.push(board.attributes[row]);
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
