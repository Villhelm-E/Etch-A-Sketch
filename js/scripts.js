//variables
const board = document.querySelector('#board');
var gridSize = 16;

var squareSize = 960/gridSize;

function setPixels() {
    
    for (x=0; x<(gridSize**2); x++) {
        const square = document.createElement('div');
        square.classList.add('pixel');
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        board.appendChild(square);
    }
}

function listen() {
    const pixels = document.querySelectorAll(".pixel");

    //Add mouse enter listener to all squares
    pixels.forEach(item => {
        item.addEventListener('mouseenter', event => {
            item.classList.add('etched');
        });
    });
}

function clearBoard() {
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach(item => {
        item.classList.remove('etched');
    })
}

setPixels();
listen();