// Write a program to demonstrate the chess Board 8 X 8
function setup() { 

  createCanvas(800, 800); 

  noStroke(); 

} 

 

function draw() { 

  thisIsOneWay(); 

  noLoop(); 

} 

  

function thisIsOneWay() { 

  

  

  for (let x = 0; x < 8; x++) { 

    for (let y = 0; y < 8; y++) { 

      

      if ((x + y) % 2) { 

        fill(0,0,0); 

      } else { 

        fill(255,255,255); 

      } 

    rect(x * 100, y * 100, 100, 100); 

    } 

  } 

} 

  

function thisIsAnotherWay() { 

 

  let count = 0; 

  for (let x = 0; x < 800; x += 100) { 

    for (let y = 0; y < 800; y += 100) { 

      

      

      if (count % 2) { 

        fill(0,0,0); 

      } else { 

        fill(255,255,255); 

      } 

      rect(x, y, 100, 100); 

      

      count++; 

    } 

    count++;   

  } 

} 