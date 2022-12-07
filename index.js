const mainContainer = document.getElementById('container');

function createGrid (numDivs) {
    for (i=0; i < numDivs; i++) {
        const cells = document.createElement('div');
        cells.setAttribute('class', 'cell');
        cells.innerText = '';

        mainContainer.appendChild(cells);
    }
}

/*function ask() {
    let input = prompt('Pick a number lower than 100: ')
    while (input == null) {
        input = prompt('Come on, pick a number lower than 100: ')
    }
    input = parseInt(input);
    createGrid(input);
}*/



document.body.onload = createGrid(256);