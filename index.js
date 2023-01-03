const mainContainer = document.getElementById('container');

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
        cells.addEventListener('mouseover', () => {
            cells.style.backgroundColor = 'black';
        });
    }

    
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


document.body.onload = createGrid(16);