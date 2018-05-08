let gameOverState = new Phaser.State();

gameOverState.create = function(){
    let txt = game.add.text(0,0,"GAME OVER", {fill:'white', fontSize: 50});
    txt.alignIn(game.world, Phaser.CENTER);
}