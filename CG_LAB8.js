
//Design a Bezier curve or order 4 with n=5. Read 5 points as inputs. 

function setup() { 

  createCanvas(800, 800); 

} 

 

function draw() { 

  background(220); 

  var x1=100,y1=100; 

  point(x1,y1) 

  var x2=400,y2=200; 

  point(x2,y2) 

  var x3=300,y3=400; 

  point(x3,y3) 

  var x4=200, y4=400; 

  point(x4,y4) 

  var x5=500, y5=900; 

  point(x5,y5) 

  var px=600, py=800; 

  for(var t=0;t<=1;t+=0.00001) 

    { 

      px=(Math.pow((1-t),4))*x1+4*(Math.pow((1-t),3))*t*x2+6*(Math.pow((1-t),2))*(Math.pow(t,2))*x3+4*(1-t)*(Math.pow(t,3))*x4+(Math.pow(t,5))*x5; 

      py=(Math.pow((1-t),4))*y1+4*(Math.pow((1-t),3))*t*y2+6*(Math.pow((1-t),2))*(Math.pow(t,2))*y3+4*(1-t)*(Math.pow(t,3))*y4+(Math.pow(t,5))*y5; 

      stroke(0,0,0); 

      point(px,py); 

    } } 

//Write a program to implement Marching square algorithm to identify contours. 

let field = []; 

let rez = 5; 

let cols, rows; 

let increment = 0.1; 

let zoff = 0; 

let noise; 

 

function setup() { 

  createCanvas(300, 300); 

  noise = new OpenSimplexNoise(Date.now()); 

  cols = 1 + width / rez; 

  rows = 1 + height / rez; 

  for (let i = 0; i < cols; i++) { 

    let k = []; 

    for (let j = 0; j < rows; j++) { 

      k.push(0); 

    } 

    field.push(k); 

  } 

} 

 

function drawLine(v1, v2) { 

  line(v1.x, v1.y, v2.x, v2.y); 

} 

 

function draw() { 

  background(0);  

  let xoff = 0; 

  for (let i = 0; i < cols; i++) { 

    xoff += increment; 

    let yoff = 0; 

    for (let j = 0; j < rows; j++) { 

      field[i][j] = float(noise.noise3D(xoff, yoff, zoff)); 

      yoff += increment; 

    } 

  } 

  zoff += 0.03; 

 

  for (let i = 0; i < cols-1; i++) { 

    for (let j = 0; j < rows-1; j++) { 

      let x = i * rez; 

      let y = j * rez; 

      let a = createVector(x + rez * 0.5, y            ); 

      let b = createVector(x + rez, y + rez * 0.5); 

      let c = createVector(x + rez * 0.5, y + rez      ); 

      let d = createVector(x, y + rez * 0.5); 

      let state = getState(ceil(field[i][j]), ceil(field[i+1][j]),  

        ceil(field[i+1][j+1]), ceil(field[i][j+1])); 

      stroke(255); 

      strokeWeight(1); 

      switch (state) { 

      case 1:   

        drawLine(c, d); 

        break; 

      case 2:   

        drawLine(b, c); 

        break; 

      case 3:   

        drawLine(b, d); 

        break; 

      case 4:   

        drawLine(a, b); 

        break; 

      case 5:   

        drawLine(a, d); 

        drawLine(b, c); 

        break; 

      case 6:   

        drawLine(a, c); 

        break; 

      case 7:   

        drawLine(a, d); 

        break; 

      case 8:   

        drawLine(a, d); 

        break; 

      case 9:   

        drawLine(a, c); 

        break; 

      case 10:  

        drawLine(a, b); 

        drawLine(c, d); 

        break; 

      case 11:  

        drawLine(a, b); 

        break; 

      case 12:  

        drawLine(b, d); 

        break; 

      case 13:  

        drawLine(b, c); 

        break; 

      case 14:  

        drawLine(c, d); 

        break; 

      } 

    } 

  } 

} 

 

function getState(a, b, c, d) { 

  return a * 8 + b * 4  + c * 2 + d * 1; 

} 



 