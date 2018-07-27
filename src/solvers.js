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



window.findNRooksSolution = function (n) {
  var board = new Board({ n: n });
  var solution = board.rows();

  for (var i = 0; i < solution.length; i++) {
    var row = solution[i];

    for (var j = 0; j < row.length; j++) {
      var square = row[j];
      board.togglePiece(i, j);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, j);
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = 0; //fixme
  var board = new Board({ n: n });
  // function(combos)
  var looper = function(row) { ///this will mean we are one past the edge of the board;
    if (n === row) {
      solutionCount ++;
      //gets incremented because we have exited the board and completed another solution
      return;
    }
    for (var i = 0; i < n; i++) {
      // togglepiece(combos, i)
      board.togglePiece(row, i);
      // check anyROok conflicts
      if (!board.hasAnyRooksConflicts()) {
        looper(row + 1);
      }
      board.togglePiece(row, i);
    }

  }
  looper(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  // empty container array for solution
  var solution = [];
  // starting state of board
  var board = new Board({ n: n });
  // start at 0, but increment later to test diff combos
  //  * move the starting square (column index)
  var startingAtRow = 0;

  // recursive function to loop board, find solution
  //   and base case
  var putQueens = function (board, row) {
    // base case
    if (row === n) {
      return solution;
    } else {
      // loop thru board, toggle, test, repeat recursively
      for (var column = 0; column < n; column++) {
        // toggle (row, column)
        board.togglePiece(row, column);
        // if no conflicts, keep checking
        if (!board.hasAnyQueensConflicts()) {
          solution = board.rows();
          var boardWithQueens = putQueens(board, row + 1);
          // do we have a solution?
          if (boardWithQueens) {
            // if so, escape inception
            return solution;
          }
          board.togglePiece(row, column);
        } else {
          board.togglePiece(row, column);
        }
      }
    }
  };

  // get started
  putQueens(board, startingAtRow);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return board w Queens that passed helpers
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = 0; //fixme
  var board = new Board({ n: n });
  // function(combos)
  var putQueens = function (combos) {
    // if combos === n
    if (combos === n) {
      // increment solutionCount
      solutionCount++;
      return;
    }
    // for loop
    for (var i = 0; i < n; i++) {
      // togglepiece(combos, i)
      board.togglePiece(combos, i);
      // check anyROok conflicts
      if (!board.hasAnyQueensConflicts()) {
        putQueens(combos + 1);
      }
      board.togglePiece(combos, i);
    }
  };
  putQueens(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
