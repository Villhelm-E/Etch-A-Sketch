//variables
const board = document.querySelector('#board');
var gridSize = 16;

//calculates pixel size and adds them to the board
function setPixels() {
    //calculate pixel size
    var squareSize = 960/gridSize;

    //add pixels to board
    for (x=0; x<(gridSize**2); x++) {
        const square = document.createElement('div');
        square.classList.add('pixel');
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        board.appendChild(square);
    }
    //Add mouseenter listener to all pixels
    listen();
}

//Adds mouseenter listener to all pixels
function listen() {
    const pixels = document.querySelectorAll(".pixel");

    //Add mouse enter listener to all squares
    pixels.forEach(item => {
        item.addEventListener('mouseenter', event => {
            item.classList.add('etched');
        });
    });
}

//Removes the 'etched' class from all pixels
function clearBoard() {
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach(item => {
        item.classList.remove('etched');
    })
}

//removes all pixels from the board
function deletePixels() {
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

//Deletes all pixels, prompts for new board size, and generates pixels
function resetBoard() {
    
    //data validation
    do {
        gridSize = prompt("Choose the side length of the grid. (Up to 100)", 16);
    }
    while (isNaN(gridSize) || gridSize > 100 || (gridSize < 1 && gridSize !== null));
    
    //handle canceling of prompt
    if (gridSize === null) {
        return;
    } 
    
    //Reset the board
    else {
        //remove pixels from board
        deletePixels();
        
        //add pixels to board
        setPixels();
    }
}

//Initialize the board for first time
setPixels();
listen();