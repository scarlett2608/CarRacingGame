class Game{

    constructor(){


    }

    play(){
        f.hide();
        //textSize(30);
        //text('game start',120,100);
        Player.getPlayerInfo();
        player.getRank();

        //console.log(allPlayers);
        if(allPlayers !== undefined){
           var index = 0;
           var x =150;
           var y = 0;
           background('#c68767');
           image(track1,0,-displayHeight*10,displayWidth,displayHeight*11);
            for(var plr in allPlayers){
                //if(plr === "player"+player.index){
                //    fill('red');
                //}
                //else{
                //    fill('black');
                //}
                //y = y + 20;
                //textSize(15);
                //text(allPlayers[plr].name+':'+allPlayers[plr].distance,120,y);
                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index){
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                    /*stroke(10);
                    
                    ellipse(x,y,100,100);*/
                    textSize(20)
                    fill('black');
                    textAlign(CENTER);
                    text(player.name,x,y-70);
                    

                }
                
            }


        
        if(keyDown(UP_ARROW)&&player.index !== null){
            player.distance = player.distance+50;
            player.update();
        }

        if(keyDown(LEFT_ARROW)&&player.index !== null){
            car = player.x - 50;
        }

        if(player.distance>7650){
            gameState=2;
            //game.update(2);
            player.rank = player.rank+1;
            Player.updateRank(player.rank);
            textSize(50);
            text(player.rank,x,y-150);
            
        }}
        drawSprites();
    }

    end(){
        console.log('Game Ended')
        console.log(player.rank);
    }

    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on('value',function(data){
            gameState = data.val();

        })

    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if (gameState === 0) {
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            f = new Form();
            f.display();
        }
        car1 = createSprite(100,200);
        car1.addImage('car1',car1_img);
        car2 = createSprite(300,200);
        car2.addImage('car2',car2_img);
        car3 = createSprite(500,200);
        car3.addImage('car3',car3_img);
        car4 = createSprite(700,200);
        car4.addImage('car4',car4_img);
        cars = [car1,car2,car3,car4];
    }
    
}