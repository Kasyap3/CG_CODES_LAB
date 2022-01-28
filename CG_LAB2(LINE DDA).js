//Write a program to draw a line using DDA  

function setup()  

{ createCanvas(400, 400); } 

function draw()  

{ background(220);  

method(10,20,150,300);  

updatePixels(); 

} 

function method(x1,y1,x2,y2) 

{ background(220);  

dx=x2-x1;  

dy=y2-y1;  

if(dx>=dy)  

{ steps = dx; }  

else  

{ steps = dy; }  

dx = dx/steps; 

dy = dy/steps;  

x = x1; y = y1;  

i = 1;  

while( 

i<= steps)  

{  

set(x, y, color('BLUE'));  

x += dx;  

y += dy; i=i+1; 

}  

} 

 