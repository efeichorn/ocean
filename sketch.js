let cols, rows;
let scl=20;
let w=2000;
let h=800;

let img;
let img2;

var flying=0;
var canvas;

var terrain = [];


function preload(){
   
  img = loadImage("water.jpg");
  img2= loadImage ("lilacsky2.jpg");
  
}

function setup(){
  
 canvas= createCanvas(windowWidth, windowHeight,WEBGL);
  canvas.position(0,0);
  canvas.style ('z-index', '-1');
   
  cols=w/scl;
   rows=h/scl;

  
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; 
    }
    
  }
 
}

function draw(){
  

    // camera(mouseX, height/2, (height/2) / tan(PI/6), mouseX, height/2, 0, 0, 1, 0);
  


  flying-=0.1;
  var yoff=flying;
  
   for ( var  y=0; y<rows; y++){
     var xoff=0;
   for (var x=0; x<cols;x++){
     terrain[x][y]= map(noise(xoff,yoff),0,1,-50,50);
     
      xoff+=0.2;
   }
     yoff+=0.2;
   }
   
  background(0);
   //background(img2);
    //noStroke();
  //translate(0,50);
   //translate(width/2, height/2);
      //rotateX (PI/3);
      
  
 translate(-w / 2, -h / 2);
  
  for (var y = 0; y < rows - 1; y++) {
     
    beginShape(TRIANGLE_STRIP);
  
    for (var x = 0; x < cols; x++) {
      texture(img);
      vertex(x * scl, y * scl, terrain[x][y],map(x,0,cols,0,img.width), map(y,0,rows,0,img.height));
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1],  map(x,0,cols,0,img.width), map(y+1,0,rows,0,img.height));
    }
    endShape();
  }


 
}

