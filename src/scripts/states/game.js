let player;
let map,layer;
var gameState = {
    create: function(){
        initInput();

        game.physics.startSystem(Phaser.Physics.ARCADE);
        //    game.physics.arcade.gravity.y = 9.81;

        player = game.add.sprite(100,100,"player",2);

        game.physics.enable(player,Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;

        game.camera.follow(player);


        player.customProps = {};

        player.customProps.animationSpeed = 6;
        player.customProps.speed = 150;

        player.animations.add("walkLeft", [4,5,6,7], player.customProps.animationSpeed);
        player.animations.add("walkRight", [8,9,10,11], player.customProps.animationSpeed);


        map = game.add.tilemap("map"); //çA marchce pas la map. voir le nom des tilesets + collisions
        map.addTilesetImage("Netherrack","Netherrack"); // tilesetIm c'est le "nom".pnj et tileseImKey c'est le nom dans le cache de Phaser, faire en sorte qu'ils portent le même nom, comme ça un argument en moins dans la fonction

        layer = this.currentMap.createLayer("Calque de Tile 1");
        layer.resizeWorld();
        map.setCollisionByExclusion([], true, layer);


    },
    update: function(){

        player.body.velocity.x=0;

        if(input.left.isDown){
            player.body.velocity.x = -player.customProps.speed;
            player.animations.play("walkLeft",player.customProps.animationSpeed,true);

            return;
        }

        if(input.up.isDown && player.body.touching.down ){
            player.body.velocity.y = -player.customProps.speed;
            return;
        }


        if(input.right.isDown){
            player.body.velocity.x = player.customProps.speed;
            player.animations.play("walkRight",player.customProps.animationSpeed,true);
            return;
        }

        else{
            player.animations.stop(null,true);
        }

    },
};
