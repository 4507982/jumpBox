var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,100,20,40);
  car.shapeColor="orange";
  car.velocityX=3
  wall=createSprite(900,100,40,100);
  wall.shapeColor="teal";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

//if(  isTouching(wall,car)){
  //car.velocityX=0
//}
bounceOff(car,wall);
  drawSprites();
}
