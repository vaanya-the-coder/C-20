var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300,200,80,30);
  movingRect = createSprite(500,200,30,80);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
 
}

function draw() {
  background("black"); 

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red"; 
    }
    else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
    
  drawSprites();
}