let gameOverState = new Phaser.State();

gameOverState.create = function(){
    let txt = game.add.text(250,300,"GAME OVER", {fill:'white', fontSize: 50});

}
