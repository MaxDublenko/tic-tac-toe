// When it's player 1's turn, turn = 1, and for player 2, turn = 2
let turn = 1;
let square = 0;

function createGridArray() {
  // Create and return a grid array
  board = [ [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0] ];


  return board;
}

function createDivGrid(grid) {
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      // Create a div for each element in 2D grid
      let divEl = document.createElement("div");
      if (row === 0) {
        divEl.style.borderTop = '1px solid transparent';
      } else if (row === 2) {
        divEl.style.borderBottom = '1px solid transparent';
      }

      if (col === 0) {
        divEl.style.borderLeft = '1px solid transparent';
      } else if (col === 2) {
        divEl.style.borderRight = '1px solid transparent';
      }
      // Add div to container
      document.getElementById('container').append(divEl);
    }
  }
}

// Function to update the grid after a change has been made
function updateGrid(grid, squareNum) {
  // Accessing all elements of container div
  var elements = document.getElementById('container').children;

  // Player 1 is blue, so if the turn is 1 then make the square player 1 clicks blue
  if (turn === 1) {
    // Have to substract 1 from squareNum because arrays start at 0, not 1
    elements.item(squareNum - 1).classList.add('blue');
  } else {
    elements.item(squareNum - 1).classList.add('red');
  }
}
