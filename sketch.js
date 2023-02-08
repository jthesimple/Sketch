const gridContainer = document.createElement('div');
gridContainer.classList.add('container');
body = document.querySelector('body');
body.appendChild(gridContainer);
gridSize = '';



createGrid();
restartSketch();



/// First function will create 100x100 div tags. Our CSS file will create a 16x16 grid. 

function createGrid(){
    let i = 0;
    do {
        i++ ; 
        let newDivs = document.createElement('div');
        newDivs.classList.add('panel');
        gridContainer.appendChild(newDivs);
        newDivs.addEventListener('mouseover', (event)=>{
            event.target.style['background-color']='green';
        })
    } while (i <= 10000);   
}

/// Function below creates reset button and subsequently ask the user for the new size of the grid.


function restartSketch(){
    const btn = document.createElement('button');
    btn.textContent ='Restart Sketch Book';
    body.insertBefore(btn,gridContainer);
    
    btn.addEventListener('click', (event)=> {
        gridSize = prompt('How many panels on each side?');
        if (gridSize > 100){
            window.alert('Grid size is too big ! Max size is 100x100. Try Again !')
        } else {
        panels = document.querySelectorAll('.panel');
        panels.forEach(panel=> panel.style['background-color']='');
        gridContainer.setAttribute('style', `grid-template-rows:repeat(${gridSize}, 1fr); grid-template-columns:repeat(${gridSize}, 1fr);`);
        }
    })   
}


