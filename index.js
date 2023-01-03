const mainContainer = document.getElementById('container');

function createGrid (numDivs) {
    for (i=0; i < numDivs; i++) {
        const cells = document.createElement('div');
        cells.setAttribute('class', 'cell');
        cells.innerText = '';

        mainContainer.appendChild(cells);
        cells.addEventListener('mouseover', mouseOver(cells));
    }

    
}

function mouseOver(square) {
    console.log('cell');
    document.getElementsByClassName(cell).style.backgroundColor = 'black';
}

document.body.onload = createGrid(256);


/*function ask() {
    let input = prompt('Pick a number lower than 100: ')
    while (input == null) {
        input = prompt('Come on, pick a number lower than 100: ')
    }
    input = parseInt(input);
    createGrid(input);
}*/
