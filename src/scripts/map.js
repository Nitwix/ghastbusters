function initMap(){
    game.add.image(game.world.centerX + 60 , game.world.centerY + 60, 'background').anchor.set(0.5);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    map = game.add.tilemap("map"); //çA marchce pas la map. voir le nom des tilesets + collisions
    map.addTilesetImage("Netherrack","Netherrack"); // tilesetIm c'est le "nom".pnj et tileseImKey c'est le nom dans le cache de Phaser, faire en sorte qu'ils portent le même nom, comme ça un argument en moins dans la fonction

    layer = map.createLayer("Calque de Tile 1");
    layer.resizeWorld();
    map.setCollisionByExclusion([], true, layer);
}
