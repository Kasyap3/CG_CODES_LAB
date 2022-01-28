//Write a program to draw a line using equation  
function setup() { 

createCanvas(800, 800); 

} 

function draw() 

{ 

background(220); 

method(10,20,150,300); 

updatePixels(); 

} 

function method(x1,y1,x2,y2){ 

slope=(y2-y1)/(x2-x1); 

c=y1-(slope*x1); 

if (x2-x1 <0) 

{ 

x=x2; 

y=y2; 

xend=x1; 

} 

else 

{ 

x=x1; 

y=y1; 

xend=x2; 

} 

while (x<=xend) { 

set (x, y, color('BLUE')); 

x++; 

y=(slope*x) +c; 

} 

} 