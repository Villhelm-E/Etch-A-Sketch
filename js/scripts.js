//variables
const container = document.querySelector('#board');
var gridSize = 16;

var squareSize = 960/gridSize;

//add 9 squares
for (x=0; x<(gridSize**2); x++) {
    const square = document.createElement('div');
    square.classList.add('content');
    square.textContent = "test";
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    board.appendChild(square);
}