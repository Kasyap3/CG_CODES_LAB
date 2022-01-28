//To write a program to perform 2D basic transformations such as translation, rotation, scaling, shearing and reflection. 

//Translation 

let x1,y1,x2,y2,x3,y3; 

function setup() { 

  createCanvas(400, 400); 

  background(225) 

   

  x1=200 

  y1=40 

  x2=300 

  y2=40 

  x3=300 

  y3=100  

} 

function draw(){ 

  triangle(x1,y1,x2,y2,x3,y3) 

  translate(70,70) 

   triangle(x1,y1,x2,y2,x3,y3) 

   

} 



//Shearing w.r.t x axis 


let x1,y1,x2,y2,x3,y3; 

function setup() { 

  createCanvas(400, 400); 

  background(225) 

   

  x1=200; 

  y1=40; 

  x2=300; 

  y2=40; 

  x3=300; 

  y3=100; 

} 

function draw(){ 

 triangle(x1,y1,x2,y2,x3,y3); 

  shearX(PI/6); 

   triangle(x1,y1,x2,y2,x3,y3) ; 

} 


//Shearing w.r.t Y-axis 


let x1,y1,x2,y2,x3,y3; 

function setup() { 

  createCanvas(400, 400); 

  background(225) 

   

  x1=200; 

  y1=40; 

  x2=300; 

  y2=40; 

  x3=300; 

  y3=100; 

} 

function draw(){ 

triangle(x1,y1,x2,y2,x3,y3); 

  shearY(PI/8); 

   triangle(x1,y1,x2,y2,x3,y3) ; 

} 


//Scaling 


let x1,y1,x2,y2,x3,y3; 

function setup() { 

  createCanvas(500, 500); 

  background(225) 

   

  x1=100; 

  y1=20; 

  x2=300; 

  y2=20; 

  x3=300; 

  y3=100; 

   

} 

function draw(){ 

  triangle(x1,y1,x2,y2,x3,y3); 

  scale(1.5); 

  triangle(x1,y1,x2,y2,x3,y3) ; 

} 

//Reflection 

function setup() {  

  createCanvas(400, 400); 

} 

function draw() { 

  background(220); 

  reflection()  

  x1=390 

  y1=10 

  x2=390 

  y2=100 

  x3=200  

  y3=10 

  triangle(x1,y1,x2,y2,x3,y3); 

  reflection(x1,y1,x2,y2,x3,y3); 

  updatePixels(); 

} 

function reflection(x1,y1,x2,y2,x3,y3){ 

triangle(400-x1,400-y1,400-x2,400-y2,400-x3,400-y3); 

} 

//Rotation: 

let x1, y1,x2, y2, x3, y3;  

function setup() { 

createCanvas (500, 500); 

  background (225); 

x1=100; 

y1=20; 

x2=300; 

y2=20; 

x3=300; 

y3=100; 

} 

 

function draw(){ 

 

triangle(x1, y1, x2, y2, x3,y3); 

 

var theta=window.prompt("Enter the degree to rotate the object"); 

rotate (theta); 

triangle(x1,y1,x2, y2, x3, y3) ; 

 } 

 

 

 

 