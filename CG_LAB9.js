
//Create a project on VFX, combine green Mat video and Normal video. 

let video; 

function setup() { 

canvas = createCanvas(640, 360,WEBGL); 

canvas.id('p5canvas'); 

background(51); 

video=createVideo("sasuke.mp4"); 

video.size(640,360); 

video.id('p5video'); 

let seriously=new Seriously(); 

let src=seriously.source('#p5video'); 

let target=seriously.target('#p5canvas'); 

let chroma=seriously.effect('chroma'); 

chroma.source='#p5video'; 

target.source=chroma; 

seriously.go(); 

} 

function draw(){ 

texture(vid); 

rect(-400,-400,800,800); 

} 

function mousePressed(){ 

video.loop(); 

} 



 

 

 

 

 