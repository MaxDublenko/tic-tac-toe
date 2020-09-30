// Tic Tac Toe with Colors instead of Xs and Os

// GLOBAL CONSTANTS
const NUM_ROWS = 3;
const NUM_COLS = 3;

// Create an array to represent a grid
let grid = createGridArray();

// Create divs to model the grid array
createDivGrid(grid);

// In the grid, 1 represents X, -1 represents O, and 0 represents an empty tile

// Getting mouse coordinates

var x = 0;
var y = 0;

function showCoords(event) {
  x = event.clientX;
  y = event.clientY;
  // We now need to substract the margins so (0, 0) is the tic tac toe div's top left corner
  y = y - 60 // 60 is the top margin
  x = x - (screen.width - 600) / 2 // 600 is the tic tac toe div width
        // ^^This returns the left margin. It is divided by two so it does not give the sum of both margins.
  // Make sure Developer tools is closed when testing / playing
  // The maximum value for both X and Y is 599, or 600-1
  document.getElementById("coordinates").innerHTML = "X coords: " + x + ", Y coords: " + y;
}

// Function to check what square is being clicked
document.getElementById('container').addEventListener('click', move);

function move() {
  if (x < 200 && y < 200 && x > 0 && y > 0) {
    updateGrid(grid, 1);
  } else if (x < 400 && y < 200 && x > 200 && y > 0) {
    updateGrid(grid, 2);
  } else if (x < 600 && y < 200 && x > 400 && y > 0) {
    updateGrid(grid, 3);
  } else if (x < 200 && y < 400 && x > 0 && y > 200) {
    updateGrid(grid, 4);
  } else if (x < 400 && y < 400 && x > 200 && y > 200) {
    updateGrid(grid, 5);
  } else if (x < 600 && y < 400 && x > 400 && y > 200) {
    updateGrid(grid, 6);
  } else if (x < 200 && y < 600 && x > 000 && y > 400) {
    updateGrid(grid, 7);
  } else if (x < 400 && y < 600 && x > 200 && y > 400) {
    updateGrid(grid, 8);
  } else if (x < 600 && y < 600 && x > 400 && y > 400) {
    updateGrid(grid, 9);
  }

  // Switch player
  if (turn === 1) {
    turn++;
  } else {
    turn--;
  }
}
