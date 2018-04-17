let config = {
    parent: 'canvas-container',
    renderer: Phaser.CANVAS,
    antialias: false,
    width: 800,
    height: 600,
};

let game = new Phaser.Game(config);

game.state.add("preload", preloadState);
game.state.add("mainMenu", mainMenuState);
game.state.add("game",gameState);

game.state.start("preload");
