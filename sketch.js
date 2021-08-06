var wandaImage, wanda
var robotImage, robot
var ground, gameState
var bg, bgImage

function preload(){
  wandaImage = loadImage("Scarlet Witch.jpg")
  robotImage = loadImage("Robot.jpg")
  bgImage = loadImage("Background.jpg")
}
function setup() {
  createCanvas(400, 400);
  wanda = createSprite(50,280,50,50);
  wanda.addImage(wandaImage);
  robot = createSprite(100,100,50,50);
  robot.addImage(robotImage);
  ground = createSprite(250,340,1000,50);
  bg = createSprite(350,200,2000,500);
  bg.addImage(bgImage)
}

function draw() {
  background(220);
  
  if(keyDown(UP_ARROW)){
    wanda.velocityY -=10;
  }
  
  if(keyDown(DOWN_ARROW)){
    wanda.velocityY +=10;
  }
  
  if(keyDown(LEFT_ARROW)){
    wanda.velocityX -=10;
  }
  
  if(keyDown(RIGHT_ARROW)){
    wanda.velocity +=10;
  }
drawSprites()
}