let preloadState = new Phaser.State();

preloadState.preload = function(){
    game.load.spritesheet("player","assets/sprites/candideSprite.png",35,67);
    game.load.spritesheet("ghast","assets/sprites/ghast.png",16,16);
    game.load.spritesheet("redGhast","assets/sprites/redGhast.png",16,16);

    game.load.tilemap("map","assets/map/map.json",null,Phaser.Tilemap.TILED_JSON);
    game.load.spritesheet("Netherrack","assets/sprites/Netherrack.png",32,32);
    game.load.image("background","assets/sprites/background.png");
}

preloadState.create = function(){
    game.state.start("game");
}
