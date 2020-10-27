
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var PLAY = 0;
var END = 1;
var gameState = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey= createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  monkey.debug=true;

  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  console.log(ground.x);
  

survivalTime =0
bananaG= createGroup();
  rockG= createGroup();
}


function draw() {
background(255);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  if (keyDown("space")){
    monkey.velocityY=-12;
  }       
  
  
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  
  if(monkey.isTouching(bananaG)){
    bananaG.destroyEach();
    survivalTime=survivalTime+5;
  }

if (monkey.isTouching(rockG)){
      gameState = END;
    }
    
  
  
  if (gameState === END){
    ground.velocityX = 0;
    
    monkey.y = 235;
    monkey.scale = 0.12;
 
    
    rockG.setVelocityXEach(0);
    bananaG.setVelocityXEach(0);
    fill("red")
    textSize(15);
    text("GAMEOVER!", 200, 200);
  survivalTime=0;

   }
  
  
  banana();
  rock();
  drawSprites();
  text("suvival time: "+ survivalTime, 200,50);
  if (frameCount % 15 === 0) {
survivalTime=survivalTime+1
    
  }
}


  
  


function rock(){
  if (frameCount % 150 === 0) {
    rock1=createSprite(400,310,20,20)
    rock1.velocityX=-3;
    rock1.addImage(obstacleImage);
    rock1.scale=0.25;
    rock1.lifetime=200;
    rockG.add(rock1);
}
}

function banana(){
  if (frameCount % 150 === 0) {
  banana1=createSprite(400,150,20,20)
    banana1.addImage(bananaImage);
    banana1.scale=0.1;
  banana1.velocityX=-3;
    banana1.lifetime=200;
    bananaG.add(banana1);
}
}



