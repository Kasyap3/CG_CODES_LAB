
//To write a  program to implement Cohen Sutherland line clipping algorithm and to perform window to viewport transformation. 

int count = 0; 

 

final int INSIDE = 0; // 0000 

final int LEFT = 1; // 0001 

final int RIGHT = 2; // 0010 

final int BOTTOM = 4; // 0100 

final int TOP = 8; // 1000 

 

 

final int x_max = 400; 

final int y_max = 400; 

final int x_min = 200; 

final int y_min = 200; 

 

final int vx_max = 370; 

final int vy_max = 400; 

final int vx_min = 230; 

final int vy_min = 200; 

 

int xw1,yw1,xw2,yw2; 

 

void setup(){ 

size(600,600); 

} 

 

void draw(){ 

background(0); 

stroke(255); 

noFill(); 

 

Clipping c = new Clipping(); 

 

if(count < 2){ 

rect(x_min,y_min,(x_max-x_min),(y_max-y_min));} 

else{ 

rect(vx_min,vy_min,vx_max-vx_min,vy_max-vy_min); 

} 

 

int x1,y1,x2,y2; 

 

x1 = 250; 

y1 = 350; 

x2 = 450; 

y2 = 350; 

 

 

if(count == 0){ 

line(x1,y1,x2,y2);} 

 

if(count == 1){ 

c.cohenSutherlandClip(x1, y1, x2, y2); 

xw1 = round(c.x1); 

yw1 = round(c.y1); 

xw2 = round(c.x2); 

yw2 = round(c.y2); 

} 

 

if(count>1){ 

WindowtoViewport(xw1,yw1,xw2,yw2,x_max,y_max,x_min,y_min 

,vx_max,vy_max,vx_min,vy_min); 

} 

 

} 

 

void keyReleased() { 

count++; 

} 

class Clipping{ 

float x1,y1,x2,y2; 

 

int computeCode(double x, double y) 

{ 

int code = INSIDE; 

 

if (x < x_min)  

code |= LEFT; 

else if (x > x_max)  

code |= RIGHT; 

if (y < y_min)  

code |= BOTTOM; 

else if (y > y_max)  

code |= TOP; 

 

return code; 

} 

 

void cohenSutherlandClip(double x1, double y1, 

double x2, double y2) 

{ 

int code1 = computeCode(x1, y1); 

int code2 = computeCode(x2, y2); 

 

boolean accept = false; 

 

while (true) { 

if ((code1 == 0) && (code2 == 0)) { 

accept = true; 

break; 

} 

else if ((code1 & code2)!=0) { 

break; 

} 

else { 

int code_out; 

double x = 0, y = 0; 

 

if (code1 != 0) 

code_out = code1; 

else 

code_out = code2; 

 

if ((code_out & TOP)!=0) { 

x = x1 + (x2 - x1) * (y_max - y1) / (y2 - y1); 

y = y_max; 

} 

else if ((code_out & BOTTOM)!=0) { 

x = x1 + (x2 - x1) * (y_min - y1) / (y2 - y1); 

y = y_min; 

} 

else if ((code_out & RIGHT)!=0) { 

y = y1 + (y2 - y1) * (x_max - x1) / (x2 - x1); 

x = x_max; 

} 

else if ((code_out & LEFT)!=0) { 

y = y1 + (y2 - y1) * (x_min - x1) / (x2 - x1); 

x = x_min; 

} 

if (code_out == code1) { 

x1 = x; 

y1 = y; 

code1 = computeCode(x1, y1); 

} 

else { 

x2 = x; 

y2 = y; 

code2 = computeCode(x2, y2); 

} 

} 

} 

 

if (accept) { 

strokeWeight(2); 

stroke(255); 

line((float)x1, (float)y1, (float)x2, (float)y2); 

this.x1 = (float)x1; 

this.x2 = (float)x2; 

this.y1 = (float)y1; 

this.y2 = (float)y2; 

} 

} 

} 

 

 

void WindowtoViewport(int x1_w, int y1_w,int x2_w, int y2_w, int x_wmax, 

int y_wmax, int x_wmin, int y_wmin, 

int x_vmax, int y_vmax, int x_vmin, 

int y_vmin) 

{ 

 

float x1_v, y1_v, x2_v, y2_v; 

float sx, sy; 

 

sx = (float)(x_vmax - x_vmin) / (x_wmax - x_wmin); 

sy = (float)(y_vmax - y_vmin) / (y_wmax - y_wmin); 

x1_v = x_vmin + (float)((x1_w - x_wmin) * sx); 

y1_v = y_vmin + (float)((y1_w - y_wmin) * sy); 

x2_v = x_vmin + (float)((x2_w - x_wmin) * sx); 

y2_v = y_vmin + (float)((y2_w - y_wmin) * sy); 

 

strokeWeight(2); 

stroke(255); 

 

line(x1_v,y1_v,x2_v,y2_v); 

} 



//To write a program to implement Sutherland – Hodgeman Polygon clipping algorithm. 


int count = 0; 

 

final int max_size = 200; 

 

int clipped_poly[][] = new int[max_size][2]; 

int clipped_poly_size; 

 

final int xmin = 100; 

final int ymin = 200; 

final int xmax = 300; 

final int ymax = 400; 

 

final int vx_max = 370; 

final int vy_max = 400; 

final int vx_min = 230; 

final int vy_min = 200; 

 

int poly_size = 3; 

int poly_points[][] = {{303, 404}, {202, 101},{303, 101}}; 

 

class CLIP{ 

int poly[][] = new int[max_size][2] ; 

int poly_size; 

 

CLIP(int[][] poly,int poly_size){ 

this.poly_size = poly_size; 

for(int i = 0; i<poly_size; i++){ 

this.poly[i][0] = poly[i][0]; 

this.poly[i][1] = poly[i][1]; 

} 

} 

 

int xIntersect(int x1, int y1, int x2, int y2, int x3, int y3, int x4, int y4) 

{ 

int num = (x1*y2 - y1*x2) * (x3-x4) - (x1-x2) * (x3*y4 - y3*x4); 

int den = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4); 

return num/den; 

} 

int yIntersect(int x1, int y1, int x2, int y2, int x3, int y3, int x4, int y4) 

{ 

int num = (x1*y2 - y1*x2) * (y3-y4) - (y1-y2) * (x3*y4 - y3*x4); 

int den = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4); 

return num/den; 

} 

 

void edgeClip(int x1, int y1, int x2, int y2) { 

 

 

 

int[][] new_poly = new int[max_size][2]; 

int new_poly_size = 0; 

 

for (int i=0; i<poly_size; i++) { 

int k = (i+1) % poly_size; 

int ix = poly[i][0], iy = poly[i][1]; 

int kx = poly[k][0], ky = poly[k][1]; 

 

int i_pos = (x2-x1) * (iy-y1) - (y2-y1) * (ix-x1); 

int k_pos = (x2-x1) * (ky-y1) - (y2-y1) * (kx-x1); 

 

if (i_pos < 0 && k_pos < 0) 

{ 

new_poly[new_poly_size][0] = kx; 

new_poly[new_poly_size][1] = ky; 

++new_poly_size; 

} 

 

else if (i_pos >= 0 && k_pos < 0) 

{ 

new_poly[new_poly_size][0] = xIntersect(x1, y1, x2, y2, ix, iy, kx, ky); 

new_poly[new_poly_size][1] = yIntersect(x1, y1, x2, y2, ix, iy, kx, ky); 

++new_poly_size; 

 

 

 

new_poly[new_poly_size][0] = kx; 

new_poly[new_poly_size][1] = ky; 

++new_poly_size; 

} 

else if (i_pos < 0 && k_pos >= 0) 

{ 

new_poly[new_poly_size][0] = xIntersect(x1, y1, x2, y2, ix, iy, kx, ky); 

new_poly[new_poly_size][1] = yIntersect(x1, y1, x2, y2, ix, iy, kx, ky); 

++new_poly_size; 

} 

else{ 

} 

} 

 

poly_size = new_poly_size; 

for (int i = 0; i < poly_size; i++) 

{ 

this.poly[i][0] = new_poly[i][0]; 

this.poly[i][1] = new_poly[i][1]; 

} 

} 

 

 

 

 

void polygonClipping(int clip[][], int clip_size) { 

for (int i = 0; i < clip_size; i++) 

{ 

int k = (i+1) % clip_size; 

edgeClip(clip[i][0], clip[i][1], clip[k][0], clip[k][1]); 

} 

} 

 

void clip_done(){ 

clipped_poly_size = poly_size; 

for(int i=0; i<poly_size; i++){ 

clipped_poly[i][0] = poly[i][0]; 

clipped_poly[i][1] = poly[i][1]; 

} 

} 

} 

 

CLIP c; 

 

void setup() { 

size(600, 600); 

c = new CLIP(poly_points,poly_size); 

int clipper_size = 4; 

int clipper_points[][] = {{xmin, ymin}, {xmin, ymax}, {xmax, ymax}, {xmax, ymin} }; 

 

c.polygonClipping(clipper_points, clipper_size); 

c.clip_done(); 

} 

 

void draw(){ 

noFill(); 

background(0); 

stroke(255); 

if(count < 2){ 

 

rect(xmin,ymin,xmax-xmin,ymax-ymin);} 

else{ 

rect(vx_min,vy_min,vx_max-vx_min,vy_max-vy_min); 

} 

 

if (count == 0){ 

beginShape(); 

 

for(int i=0; i<poly_size; i++){ 

vertex(poly_points[i][0], poly_points[i][1]); 

} 

endShape(CLOSE); 

} 

 

 

if (count == 1){ 

noFill(); 

stroke(255,0,0); 

beginShape(); 

 

for(int i=0; i<clipped_poly_size; i++){ 

vertex(clipped_poly[i][0], clipped_poly[i][1]); 

} 

endShape(CLOSE); 

} 

 

if(count>1){ 

WindowtoViewport(xmax,ymax,xmin,ymin 

,vx_max,vy_max,vx_min,vy_min); 

} 

} 

 

 

void keyReleased() { 

count++; 

} 

 

 

void WindowtoViewport(int x_wmax, 

int y_wmax, int x_wmin, int y_wmin, 

int x_vmax, int y_vmax, int x_vmin, 

int y_vmin) 

{ 

 

float sx, sy; 

 

sx = (float)(x_vmax - x_vmin) / (x_wmax - x_wmin); 

sy = (float)(y_vmax - y_vmin) / (y_wmax - y_wmin); 

 

noFill(); 

stroke(255,0,0); 

 

beginShape(); 

for(int i=0; i<clipped_poly_size; i++){ 

vertex(x_vmin+(clipped_poly[i][0]-x_wmin)*sx, y_vmin+(clipped_poly[i][1]-y_wmin)*sy); 

} 

endShape(CLOSE); 

 

} 
