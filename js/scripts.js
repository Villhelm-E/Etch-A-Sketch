//variables
const board = document.querySelector('#board');
var gridSize = 16;

var squareSize = 960/gridSize;

//add squares to board
for (x=0; x<(gridSize**2); x++) {
    const square = document.createElement('div');
    square.classList.add('pixel');
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    board.appendChild(square);
}

//Add mouse enter listener to all squares
const pixels = document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.backgroundColor = "#111";
    });
});