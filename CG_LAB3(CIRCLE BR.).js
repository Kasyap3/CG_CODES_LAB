//Write a program to draw a Circle using Bresnahan’s algorithm  


let r=200; 

function setup() { 

  createCanvas(400,400); 

  background(225); 

} 

function draw()  

{ 

  circle(250,250,20,20); 

} 

function circle(x,y,xc,yc) 

{ 

  let D=3-(2*r); 

  x=0; 

  y=r; 

  if(x>=y) 

  {point(x + xc, y + yc); 

   point(x + xc, -y + yc); 

   point(-x + xc, -y + yc); 

   point(-x + xc, y + yc); 

   point(y + xc, x + yc); 

   point(y + xc, -x + yc); 

   point(-y + xc, -x + yc); 

   point(-y + xc, x + yc); 

  } 

  if(D<0) 

  { 

    D=D+(4*x)+6; 

    x=x+1; 

  } 

  else 

  { 

    D=D+4*(x-y)+10; 

    x=x+1; 

    y=y+1; 

  } 

} 