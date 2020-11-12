class Form {

    constructor(){


        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greeting = createElement('h3');
        this.reset = createButton('Reset');

    }

    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();


    }

    display(){
        var title = createElement('h2');
        title.html('Car Racing Game');
        title.position(displayWidth/2 - 50,0);
        //var input = createInput('Name');
        //var button = createButton('Play');
        //var greeting = createElement('h3');
        this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30,displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello "+player.name);
            this.greeting.position(displayWidth/2 - 70,displayHeight/2);
        });


        this.reset.position(displayWidth-200,100);
        this.reset.mousePressed(()=>{

            player.updateCount(0);
            game.update(0);
            Player.updateRank(0);
            
        });
    }
}