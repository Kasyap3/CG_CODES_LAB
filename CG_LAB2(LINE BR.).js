//Write a program to draw a line using Bresnahan’s Algorithm 

function setup() { 

  createCanvas(400, 400); 

} 

 

function draw() { 

  background(220); 

  method(10,20,150,300); 

  updatePixels(); 

} 

function method(x1,y1,xn,yn) 

{ 

  background(200); 

  detx=xn-x1; 

  dety=yn-y1; 

  Pk=2*(dety)-detx; 

  i=1; 

  while(i<=detx-1) 

    { 

      set (x1, y1, color('BLUE')); 

      if(Pk<0) 

    { 

      Pk=Pk+2*dety; 

      x1=x1+1; 

      y1=y1; 

    } 

  else 

    { 

      Pk=Pk+2*dety-2*detx; 

      x1=x1+1; 

      y1=y1+1; 

    } 

      i++; 

    } 

} 