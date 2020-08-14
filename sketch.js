var database,canvas,bagroundImage,gameState = 0,playerCount = 0,form,player,game;
var allPlayers;
var car1,car2,car3,car4;
var cars;



function setup(){
  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight-20);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if (playerCount === 4){
    game.update(1);
  }
 
  if(gameState == 1){
    clear();
    game.play();
  }
}
