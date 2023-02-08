/// First function will create a grid of 16x16 square div tags.

const gridContainer = document.createElement('div');
gridContainer.classList.add('container');
body = document.querySelector('body');
body.appendChild(gridContainer);

createGrid();
restartSketch();


function createGrid(){
    let i = 0;
    do {
        i += 1;
        let newDivs = document.createElement('div');
        newDivs.classList.add('panel');
        gridContainer.appendChild(newDivs);
    } while (i <=15);

}


///Create reset button

function restartSketch(){
    const btn = document.createElement('button');
    btn.textContent ='Restart Sketch Book';
    body.insertBefore(btn,gridContainer);

    restart = document.querySelector('button');
    restart.addEventListener('click', (event)=> {
        gridSize = prompt('How big should the grid be?');
    })

}














