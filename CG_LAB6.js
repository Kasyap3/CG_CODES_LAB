 


//Write a program to apply texture to an Image. 

let img; 

function preload() { 

  img = loadImage("image.jpg"); 

} 

 

function setup() { 

  createCanvas(400, 400, WEBGL); 

} 

 

function draw() { 

  background(0); 

  rotateZ(frameCount * 0.01); 

  rotateX(frameCount * 0.01); 

  rotateY(frameCount * 0.01); 

  texture(img); 

 box(width/2); 

} 


//Write a program to apply texture to Video 


let vid; 

function preload() { 

  vid = createVideo('video.mp4'); 

  vid.hide(); 

} 

 

function setup() { 

  createCanvas(400, 400, WEBGL); 

} 

 

function draw() { 

  background(0); 

  rotateZ(frameCount * 0.01); 

  rotateX(frameCount * 0.01); 

  rotateY(frameCount * 0.01); 

  texture(vid); 

  box(width/2); 

} 

 

function mousePressed() { 

  vid.loop(); 

} 


//Write a program to demonstrate ambientLight, DiffuseLight, pointLight and Directional Light. 

//Ambient Light: 


function setup() { 

  createCanvas(400, 400, WEBGL); 

} 

 

function draw() { 

  background(0); 

  let locX= mouseX-width/2; 

  let locY=mouseY-width/2; 

  ambientLight(50,200,250,locX,locY,50); 

  rotateX(millis()/1000); 

  rotateY(millis()/1000); 

  rotateZ(millis()/1000); 

  noStroke(); 

  sphere(100); 

} 

//Diffuse Light: 

Program: 

function setup() { 

  createCanvas(400, 400, WEBGL); 

} 

 

function draw() { 

  background(0); 

  let locX= mouseX-width/2; 

  let locY=mouseY-width/2; 

  lights(150,250,30,locX,locY,50); 

  rotateX(millis()/1000); 

  rotateY(millis()/1000); 

  rotateZ(millis()/1000); 

  noStroke(); 

  sphere(100); 

} 

//Point Light: 


function setup() { 

  createCanvas(400, 400, WEBGL); 

} 

 

function draw() { 

  background(0); 

  let locX= mouseX-width/2; 

  let locY=mouseY-width/2; 

  pointLight(250,250,250,locX,locY,50); 

  rotateX(millis()/1000); 

  rotateY(millis()/1000); 

  rotateZ(millis()/1000); 

  fill(color('red')); 

  noStroke(); 

  sphere(100); 

} 

//Directional Light: 

function setup() { 

  createCanvas(400, 400, WEBGL); 

} 

 

function draw() { 

  background(0); 

  let locX= mouseX-width/2; 

  let locY=mouseY-width/2; 

  directionalLight(250,250,250,locX,locY,50); 

  rotateX(millis()/1000); 

  rotateY(millis()/1000); 

  rotateZ(millis()/1000); 

  fill(color('red')); 

  noStroke(); 

  sphere(100); 

} 


//Write a program to demonstrate flat shading. 

var angle = 0.1;  

function setup() {  

    createCanvas(400, 400, WEBGL);  

}  

 

function draw() {  

    directionalLight(150, 250, 30, 101, 100, 50);  

    background(225);  

    rotateX(angle);  

    rotateY(angle * 0.3);  

    rotateZ(angle * 1.2);  

    fill(0, 0, 205);  

    noStroke();  

    ambientMaterial(300);  

    cone(100);  

    angle += 0.003;  

} 

//Write a program to demonstrate phong shading 

function setup() {  

  createCanvas(400, 400, WEBGL);  

}  

function draw() {  

  let dx = 300;  

  let dy = 200;  

  let dz = -600;  

 

  let v = createVector(dx, dy, dz);  

 

  ambientLight(0, 0,255);  

 

  directionalLight(255, 0, 0, v);  

 

  shininess(255);  

  specularColor(255);  

  specularMaterial(255);  

 

  pointLight(255, 255, 255, 0, -50, 0);  

  pointLight(255, 255, 255, 200,200,30);  

 

  rotateX(millis()/1000);  

  rotateY(millis()/1000);  

  rotateZ(millis()/3000);  

 

  background(0);  

  noStroke();  

  fill(255, 0, 0);  

  torus(100,25);  

} 
