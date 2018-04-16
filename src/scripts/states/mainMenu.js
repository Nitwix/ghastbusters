let mainMenuState = new Phaser.State();

mainMenuState.create = function(){
    let testTxt = game.add.text(0,0, "Ghastbusters!" , {
        fill: 'white',
        font: "bold 60pt 'Arial'"
    });
    testTxt.alignIn(game.world, Phaser.CENTER);
    console.log(testTxt)
};