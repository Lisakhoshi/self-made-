class Game{
    constructor(){
       
    }
    
    getGameState(){
    var gameRef=database.ref("gameState")
    gameRef.on("value",function(data){
         gameState=data.val()
    })
    }

    updateGameState(state){
        database.ref("/").update({gameState:state})
    }

    play(){
      
    }
}