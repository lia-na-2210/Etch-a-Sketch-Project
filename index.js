const mainContainer = document.getElementById('container');
let colour = 'black'

function createGrid (size) {
    mainContainer.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    mainContainer.style.gridTemplateRows = `repeat(${size}, 1fr`;

    let squares = mainContainer.querySelectorAll('div');
    squares.forEach((div)=> div.remove());

    let amount = size * size;

    for (i=0; i < amount; i++) {
        const cells = document.createElement('div');
        cells.setAttribute('class', 'cell');
        cells.innerText = '';

        mainContainer.appendChild(cells);

        cells.addEventListener('mouseover', colorCell);
    }

    
}

function colorCell () {
    this.style.backgroundColor = colour;
}

function ask() {
    let input = prompt('Pick a number lower than 100 and bigger than 2: ');
    
    if (input >= 2 && input <= 100) {
        input = parseInt(input);
        createGrid(input);
    } else {
        console.log('error'); 
    }
        
}

function colourChange(choice) {
    if (choice == 'random') {
        randomColour = Math.floor(Math.random()*16777215).toString(16);
        colour = '#' + randomColour
    } else {
        colour = choice
    }
}

function clearBoard() {
    let squares = mainContainer.querySelectorAll('div');
    squares.forEach((div)=> div.style.backgroundColor = 'white');
}


document.body.onload = createGrid(16);