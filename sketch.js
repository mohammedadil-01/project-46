var edges;

var rabbit;

var house;

var carrotIMG,rabbitIMG,crackerIMG,houseIMG;

var wall1,wall2,wall3,wall4,wall5,wall5;
var wall6,wall7,wall8,wall9,wall10,wall11;
var wall12,wall13,wall14,wall15,wall16,wall17;
var wall18,wall19,wall20,wall21,wall22,wall23;
var wall24,wall25,wall26;


var score = 0;

var gameState = "play";

var gameOverSound,collectSound,winSound;

function preload(){
  rabbitIMG = loadImage("images/rabbit.png");
  carrotIMG = loadImage("images/carrot.png");
  crackerIMG = loadImage("images/cracker.png");
  houseIMG = loadImage("images/house.png");

  gameOverSound = loadSound("sounds/game over.wav");
  collectSound = loadSound("sounds/collect.mp3");
  winSound = loadSound("sounds/win.mp3");
}

function setup() {
  createCanvas(500,300);

  rabbit = createSprite(20,20,50,50);
  rabbit.addImage(rabbitIMG);
  rabbit.scale = 0.1;


  house = createSprite(475,280,50,50);
  house.addImage(houseIMG);
  house.scale = 0.115;
  

  wall1 = createSprite(50,20,10,40);
  wall1.shapeColor = ("black");

  wall2 = createSprite(70,35,50,10);
  wall2.shapeColor = ("black");

  wall3 = createSprite(100,20,10,40);
  wall3.shapeColor = ("black");

  wall4 = createSprite(50,85,100,10);
  wall4.shapeColor = ("black");

  wall5 = createSprite(145,37,10,105);
  wall5.shapeColor = ("black");

  wall6 = createSprite(170,85,50,10);
  wall6.shapeColor = ("black");

  wall7 = createSprite(195,37,10,105);
  wall7.shapeColor = ("black");

  wall8 = createSprite(100,130,130,10);
  wall8.shapeColor = ("black");

  wall9 = createSprite(230,130,50,10);
  wall9.shapeColor = ("black");

  wall10 = createSprite(250,85,10,80);
  wall10.shapeColor = ("black");

  wall11 = createSprite(330,50,150,10);
  wall11.shapeColor = ("black");

  wall12 = createSprite(400,20,10,55);
  wall12.shapeColor = ("black");

  wall13 = createSprite(80,175,160,10);
  wall13.shapeColor = ("black");

  wall14 = createSprite(155,195,10,30);
  wall14.shapeColor = ("black");

  wall15 = createSprite(80,210,160,10);
  wall15.shapeColor = ("black");

  wall16 = createSprite(120,255,160,10);
  wall16.shapeColor = ("black");

  wall17 = createSprite(230,175,50,10);
  wall17.shapeColor = ("black");

  wall18 = createSprite(205,215,10,90);
  wall18.shapeColor = ("black");

  wall19 = createSprite(255,215,10,90);
  wall19.shapeColor = ("black");

  wall20 = createSprite(310,255,100,10);
  wall20.shapeColor = ("black");

  wall21 = createSprite(355,230,10,50);
  wall21.shapeColor = ("black");

  wall22 = createSprite(325,210,60,10);
  wall22.shapeColor = ("black");

  wall23 = createSprite(340,168,80,10);
  wall23.shapeColor = ("black");

  wall24 = createSprite(300,188,10,45);
  wall24.shapeColor = ("black");

  wall25 = createSprite(385,135,10,75);
  wall25.shapeColor = ("black");

  wall26 = createSprite(445,175,10,255);
  wall26.shapeColor = ("black");


  carrot1 = createSprite(40,60,20,20);
  carrot1.addImage(carrotIMG);
  carrot1.scale = 0.080;
  
  carrot2 = createSprite(110,60,20,20);
  carrot2.addImage(carrotIMG);
  carrot2.scale = 0.080;

  carrot3 = createSprite(70,105,20,20);
  carrot3.addImage(carrotIMG);
  carrot3.scale = 0.080;

  carrot4 = createSprite(140,105,20,20);
  carrot4.addImage(carrotIMG);
  carrot4.scale = 0.080;

  carrot5 = createSprite(230,100,20,20);
  carrot5.addImage(carrotIMG);
  carrot5.scale = 0.080;  

  carrot6 = createSprite(230,20,20,20);
  carrot6.addImage(carrotIMG);
  carrot6.scale = 0.080;

  carrot7 = createSprite(290,20,20,20);
  carrot7.addImage(carrotIMG);
  carrot7.scale = 0.080;

  carrot8 = createSprite(20,150,20,20);
  carrot8.addImage(carrotIMG);
  carrot8.scale = 0.080;

  carrot9 = createSprite(80,150,20,20);
  carrot9.addImage(carrotIMG);
  carrot9.scale = 0.080;
  
  carrot10 = createSprite(150,150,20,20);
  carrot10.addImage(carrotIMG);
  carrot10.scale = 0.080;

  carrot11 = createSprite(230,150,20,20);
  carrot11.addImage(carrotIMG);
  carrot11.scale = 0.080;

  carrot12 = createSprite(290,140,20,20);
  carrot12.addImage(carrotIMG);
  carrot12.scale = 0.080;

  carrot13 = createSprite(290,75,20,20);
  carrot13.addImage(carrotIMG);
  carrot13.scale = 0.080;

  carrot14 = createSprite(350,140,20,20);
  carrot14.addImage(carrotIMG);
  carrot14.scale = 0.080;  

  carrot15 = createSprite(180,230,20,20);
  carrot15.addImage(carrotIMG);
  carrot15.scale = 0.080;

  carrot16 = createSprite(110,230,20,20);
  carrot16.addImage(carrotIMG);
  carrot16.scale = 0.080;

  carrot17 = createSprite(40,230,20,20);
  carrot17.addImage(carrotIMG);
  carrot17.scale = 0.080;

  carrot18 = createSprite(70,280,20,20);
  carrot18.addImage(carrotIMG);
  carrot18.scale = 0.080;

  carrot19 = createSprite(140,280,20,20);
  carrot19.addImage(carrotIMG);
  carrot19.scale = 0.080;

  carrot20 = createSprite(200,280,20,20);
  carrot20.addImage(carrotIMG);
  carrot20.scale = 0.080;

  carrot21 = createSprite(230,240,20,20);
  carrot21.addImage(carrotIMG);
  carrot21.scale = 0.080;

  carrot22 = createSprite(280,230,20,20);
  carrot22.addImage(carrotIMG);
  carrot22.scale = 0.080;

  carrot23 = createSprite(280,280,20,20);
  carrot23.addImage(carrotIMG);
  carrot23.scale = 0.080;

  carrot24 = createSprite(350,280,20,20);
  carrot24.addImage(carrotIMG);
  carrot24.scale = 0.080;

  carrot25 = createSprite(420,280,20,20);
  carrot25.addImage(carrotIMG);
  carrot25.scale = 0.080;

  carrot26 = createSprite(420,230,20,20);
  carrot26.addImage(carrotIMG);
  carrot26.scale = 0.080;

  carrot27 = createSprite(420,170,20,20);
  carrot27.addImage(carrotIMG);
  carrot27.scale = 0.080;

  carrot28 = createSprite(420,110,20,20);
  carrot28.addImage(carrotIMG);
  carrot28.scale = 0.080;

  carrot29 = createSprite(430,40,20,20);
  carrot29.addImage(carrotIMG);
  carrot29.scale = 0.080;

  carrot30 = createSprite(480,40,20,20);
  carrot30.addImage(carrotIMG);
  carrot30.scale = 0.080;

  carrot31 = createSprite(480,110,20,20);
  carrot31.addImage(carrotIMG);
  carrot31.scale = 0.120;

  carrot32 = createSprite(480,190,20,20);
  carrot32.addImage(carrotIMG);
  carrot32.scale = 0.120;


  cracker1 = createSprite(330,20,10,10);
  cracker1.addImage(crackerIMG);
  cracker1.scale = 0.070;

  cracker2 = createSprite(370,20,10,10);
  cracker2.addImage(crackerIMG);
  cracker2.scale = 0.070;

  cracker3 = createSprite(350,75,10,10);
  cracker3.addImage(crackerIMG);
  cracker3.scale = 0.070;

  cracker4 = createSprite(330,230,10,10);
  cracker4.addImage(crackerIMG);
  cracker4.scale = 0.060;

  cracker5 = createSprite(320,188,10,10);
  cracker5.addImage(crackerIMG);
  cracker5.scale = 0.060;

  cracker6 = createSprite(360,188,10,10);
  cracker6.addImage(crackerIMG);
  cracker6.scale = 0.060;

  cracker7 = createSprite(230,200,10,10);
  cracker7.addImage(crackerIMG);
  cracker7.scale = 0.070;

}

function draw() { 
  background("white");  

  fill("red");
  textSize = 30;
  textStyle(BOLD);
  textFont("Georgia");  
  text("Score : "+score+" /80",40,195);

  if(gameState === "play"){

    if (keyDown(UP_ARROW)) {
      rabbit.y = rabbit.y-3
    }
  
    if (keyDown(DOWN_ARROW)) { 
      rabbit.y = rabbit.y+3
    }
    
    if (keyDown(LEFT_ARROW)) {
      rabbit.x = rabbit.x-3;
    }
        
    if (keyDown(RIGHT_ARROW)) {
      rabbit.x = rabbit.x+3;
    }

    if(rabbit.isTouching(carrot1)){
      score = score + 2;
      carrot1.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot2)){
      score = score + 2;
      carrot2.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot3)){
      score = score + 2;
      carrot3.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot4)){
      score = score + 2;
      carrot4.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot5)){
      score = score + 2;
      carrot5.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot6)){
      score = score + 2;
      carrot6.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot7)){
      score = score + 2;
      carrot7.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot8)){
      score = score + 2;
      carrot8.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot9)){
      score = score + 2;
      carrot9.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot10)){
      score = score + 2;
      carrot10.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot11)){
      score = score + 2;
      carrot11.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot12)){
      score = score + 2;
      carrot12.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot13)){
      score = score + 2;
      carrot13.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot14)){
      score = score + 2;
      carrot14.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot15)){
      score = score + 2;
      carrot15.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot16)){
      score = score + 2;
      carrot16.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot17)){
      score = score + 2;
      carrot17.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot18)){
      score = score + 2;
      carrot18.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot19)){
      score = score + 2;
      carrot19.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot20)){
      score = score + 2;
      carrot20.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot21)){
      score = score + 2;
      carrot21.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot22)){
      score = score + 2;
      carrot22.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot23)){
      score = score + 2;
      carrot23.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot24)){
      score = score + 2;
      carrot24.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot25)){
      score = score + 2;
      carrot25.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot26)){
      score = score + 2;
      carrot26.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot27)){
      score = score + 2;
      carrot27.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot28)){
      score = score + 2;
      carrot28.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot29)){
      score = score + 2;
      carrot29.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot30)){
      score = score + 2;
      carrot30.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot31)){
      score = score + 10;
      carrot31.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(carrot32)){
      score = score + 10;
      carrot32.destroy();
      collectSound.play();
    }

    if(rabbit.isTouching(cracker1) || rabbit.isTouching(cracker2) || rabbit.isTouching(cracker3) || rabbit.isTouching(cracker4) || rabbit.isTouching(cracker5) || rabbit.isTouching(cracker6) || rabbit.isTouching(cracker7)){
      gameState = "end";
      gameOverSound.play();
    }

  }

  if(gameState === "end"){
    rabbit.velocityX = 0;
    rabbit.velocityY = 0;
    text("Game Over",40,50);
    text("Press ctrl+R To Restart",80,110);
  }

  if(rabbit.isTouching(house)&&(gameState!= "end")){
    gameState = "end";
    winSound.play();
  }


  edges = createEdgeSprites();
  rabbit.bounceOff(edges);  
  rabbit.bounce(wall1);
  rabbit.bounce(wall2);
  rabbit.bounce(wall3);
  rabbit.bounce(wall4);
  rabbit.bounce(wall5);
  rabbit.bounce(wall6);
  rabbit.bounce(wall7);
  rabbit.bounce(wall8);
  rabbit.bounce(wall9);
  rabbit.bounce(wall10);
  rabbit.bounce(wall11);
  rabbit.bounce(wall12);
  rabbit.bounce(wall13);
  rabbit.bounce(wall14);
  rabbit.bounce(wall15);
  rabbit.bounce(wall16);
  rabbit.bounce(wall17);
  rabbit.bounce(wall18);
  rabbit.bounce(wall19);
  rabbit.bounce(wall20);
  rabbit.bounce(wall21);
  rabbit.bounce(wall22);
  rabbit.bounce(wall23);
  rabbit.bounce(wall24);
  rabbit.bounce(wall25);
  rabbit.bounce(wall26);

  drawSprites();
}
