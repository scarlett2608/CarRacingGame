class Player{
    constructor(){
        this.distance = 0;
        this.name = null;
        this.index = null;
        this.rank = null;

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on('value',function(data){
            playerCount = data.val();
        }) 
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = 'players/player' + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

    static getPlayerInfo(){
        var playerInforef = database.ref('players');
        playerInforef.on('value',(data)=>{
            allPlayers = data.val();
        })
    }

    getRank(){
        var playerrankinfo = database.ref('carsAtEnd');
        playerrankinfo.on('value', (data)=>{
            this.rank = data.val();
        })
    }

    static updateRank(rank){
        var rankref = database.ref('/').update({
            carsAtEnd:rank
        });
    }
}