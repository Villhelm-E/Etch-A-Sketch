//variables
const board = document.querySelector('#board');
var gridSize = 16;

function setPixels() {
    
    var squareSize = 960/gridSize;

    for (x=0; x<(gridSize**2); x++) {
        const square = document.createElement('div');
        square.classList.add('pixel');
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        board.appendChild(square);
    }

    listen();
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

function deletePixels() {
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

function resetBoard() {
    deletePixels();

    gridSize = prompt("Choose a resolution.", 16);
    setPixels();
}

setPixels();
listen();