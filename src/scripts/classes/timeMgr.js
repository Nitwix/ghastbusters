class TimeMgr {
    constructor(){
        this.waveTime = 0;
        this.cmptTot = game.time.create();
        this.timeAddition = 10;
        this.tpsText;
    }
    start(){
        this.tpsText = game.add.text(32,32,"Temps :", {fill:'white', fontSize:25});
        this.tpsText.bringToTop();
        this.tpsText.fixedToCamera = true;
        this.cmptTot.start();
    }
    exportTime(){
        return this.cmptTot.seconds;
    }

    addTime(){
        this.timeAddition*=0.9;
        this.waveTime += this.timeAddition;
    }

    update(){
        this.tpsText.text = "Temps : " + Phaser.Math.roundTo(this.waveTime-this.cmptTot.seconds, -2);
        if(this.waveTime-this.cmptTot.seconds<=0){
            game.state.start("gameOver");

        }
    }
}
