let player;
let map,layer;
var gameState = {
    create: function(){
        initInput();
        game.add.image(game.world.centerX + 60 , game.world.centerY + 60, 'background').anchor.set(0.5);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        //    game.physics.arcade.gravity.y = 9.81;

        player = game.add.sprite(100,100,"player",2);

        game.physics.enable(player,Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;
        // player.body.bounce.y = 0.2;
        player.body.gravity.y = 600;
        player.body.mass = 300;

        game.camera.follow(player);


        player.data.animationSpeed = 6;
        player.data.xVelocity = 500;
        player.data.yVelocity = 500;
        player.body.maxVelocity = 200;

        player.animations.add("walkLeft", [4,5,6,7], player.data.animationSpeed);
        player.animations.add("walkRight", [8,9,10,11], player.data.animationSpeed);


        map = game.add.tilemap("map"); //çA marchce pas la map. voir le nom des tilesets + collisions
        map.addTilesetImage("Netherrack","Netherrack"); // tilesetIm c'est le "nom".pnj et tileseImKey c'est le nom dans le cache de Phaser, faire en sorte qu'ils portent le même nom, comme ça un argument en moins dans la fonction

        layer = map.createLayer("Calque de Tile 1");
        layer.resizeWorld();
        map.setCollisionByExclusion([], true, layer);


    },
    update: function(){
        game.physics.arcade.collide(player,layer);
        player.body.velocity.x=0;

        if(input.left.isDown){
            player.body.velocity.x = -player.data.xVelocity;
            player.animations.play("walkLeft",player.data.animationSpeed,true);
            // return;
        }

        if(input.right.isDown){
            player.body.velocity.x = player.data.xVelocity;
            player.animations.play("walkRight",player.data.animationSpeed,true);
            // return;
        }

        if((input.up.isDown || input.space.isDown) && player.body.blocked.down){
            player.body.velocity.y = -player.data.yVelocity;
            return;
        }

        if(input.down.isDown){
            player.body.velocity.y = player.data.yVelocity;
            return;
        }

        if(player.body.velocity.x === 0){
            player.animations.stop(null,true);
        }

    },
};
