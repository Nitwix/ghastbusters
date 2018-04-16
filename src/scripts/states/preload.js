let preloadState = new Phaser.State();

preloadState.preload = function(){
    //charger des trucs ici
}

preloadState.create = function(){
    game.state.start("mainMenu");
}