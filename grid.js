function createGridArray() {
  // Create and return a grid array
  return [ [0, 0, 0],
           [0, 0, 0],
           [0, 0, 0] ];
}

function createDivGrid(grid) {
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      // Create a div for each element in 2D grid
      let divEl = document.createElement("div");
      if (grid[row][col] === 1) {
        divEl.classList.add("blue");
      } else if (grid[row][col] === -1) {
        divEl.classList.add("red");
      }
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
