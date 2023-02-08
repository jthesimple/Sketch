# Sketch
Etch-a-Sketch Interface 

This small project involves manipulating the DOM to create a sketch pad on a broswer. 


2/7 

I was able to create the panels with CSS grid, after messing around with flexbox. I also created the restart function with prompt.

I was able to add the event listener to the panels. However, the event listener was attached to the grid container, so when you hovered over the container all panels changed color. I tried to refactor my code, but I broke it. The event listener no longer works. 

2/8

I placed the event listener inside the loop as the divs were being created. Finalized the reset button.

My only concern is that I initially create 10k divs tags and only utilize 256 divs until the user request a larger grid. When the user request a larger grid more of the divs populate with the event listeners. 