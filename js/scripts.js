//variables
const container = document.querySelector('#board');
var gridSize = 16;

//add 9 squares
for (x=0; x<(gridSize**2); x++) {
    const square = document.createElement('div');
    square.classList.add('content');
    square.textContent = "test";
    board.appendChild(square);
}