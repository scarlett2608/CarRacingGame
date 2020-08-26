var database,canvas,bagroundImage,gameState = 0,playerCount = 0,form,player,game;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var f;
var car1_img,car2_img,car3_img,car4_img,track1,track2;

function preload(){
  car1_img = loadImage('images/car1.png');
  car2_img = loadImage('images/car2.png');
  car3_img = loadImage('images/car3.png');
  car4_img = loadImage('images/car4.png');
  track1 = loadImage('images/track.jpg');
}


function setup(){
  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight-20);
  game = new Game();
  game.getState();
  game.start();
  console.log(displayHeight);
}

function draw(){
  if (playerCount === 4){
    game.update(1);
  }
 
  if(gameState == 1){
    clear();
    game.play();
  }
  if (gameState==2){
    game.end();
  }
}
