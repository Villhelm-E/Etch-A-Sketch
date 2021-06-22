//variables
const board = document.querySelector('#board');
var gridSize = 16;
var mode = "normal";

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
            //normal draw mode
            if (mode == "normal") {
                item.classList.add('etched');
            }
            //darken draw mode
            else if (mode == "darken") {
                if (!item.classList.contains("ten")) {
                    item.classList.add("ten");
                }
                else if (!item.classList.contains("twenty")) {
                    item.classList.add("twenty");
                }
                else if (!item.classList.contains("thirty")) {
                    item.classList.add("thirty");
                }
                else if (!item.classList.contains("forty")) {
                    item.classList.add("forty");
                }
                else if (!item.classList.contains("fifty")) {
                    item.classList.add("fifty");
                }
                else if (!item.classList.contains("sixty")) {
                    item.classList.add("sixty");
                }
                else if (!item.classList.contains("seventy")) {
                    item.classList.add("seventy");
                }
                else if (!item.classList.contains("eighty")) {
                    item.classList.add("eighty");
                }
                else if (!item.classList.contains("ninety")) {
                    item.classList.add("ninety");
                }
                else if (!item.classList.contains("hundred")) {
                    item.classList.add("hundred");
                }
                else {
                    //nothing
                }
            }
            else {
                item.classList.add('etched');
            }
        });
    });
}

//Removes the 'etched' class from all pixels
function clearBoard() {
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach(item => {
        //normal draw mode
        if (mode == "normal") {
            item.classList.remove('etched');
        }
        //darken draw mode
        else if (mode == "darken") {
            item.classList.remove("ten");
            item.classList.remove("twenty");
            item.classList.remove("thirty");
            item.classList.remove("forty");
            item.classList.remove("fifty");
            item.classList.remove("sixty");
            item.classList.remove("seventy");
            item.classList.remove("eighty");
            item.classList.remove("ninety");
            item.classList.remove("hundred");
        }
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

//set up radio buttons
const radio = document.querySelectorAll('input[name=mode]');

//add event listeners to radio buttons
radio.forEach(item => {
    item.addEventListener('change', event => {
        //manage draw modes
        switch (item.id) {
            case "normal":  
                normal();
                break;
            case "darken":
                darken();
                break;
            default:
                normal();
        }
    });
});

//sets board to normal draw mode
function normal() {
    mode = "normal";
    deletePixels();
    setPixels()
}

//sets board to darken draw mode
function darken() {
    mode = "darken";
    deletePixels();
    setPixels();
}

//Initialize the board for first time
setPixels();
listen();