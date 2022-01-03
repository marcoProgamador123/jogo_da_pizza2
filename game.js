class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
            
            form = new Form();
            form.display();
            }
            girl1 = createSprite(200,500);
            //boy1 = createSprite(800,500);
            players=[girl1];
        }
    
    play(){

        form.hide();
                Player.getPlayerInfo();
                //if(allPlayers!==undefined){

                image(fundo,600,400,1000,height);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                    
                 //}
                }
                 if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARRROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     pizzas = createSprite(random(100, 1200), 0, 100, 100);
                     pizzas.velocityY = 6;
                     var rand = Math.round(random(1,4));
                     switch(rand){
                         case 1: fruits.addImage("calabresa",pizza1_img);
                         break;
                         case 2: fruits.addImage("manjericão", pizza2_img);
                         break;
                         case 3: fruits.addImage("champion", pizza3_img);
                         break;
                         case 4: fruits.addImage("bacon", pizza4_img);
                         break;
                     }
                     
                 }
             
    }

}