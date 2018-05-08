class TimeMgr {
    constructor(){
        this.waveTime = 0;
        this.cmptTot = game.time.create();
        this.timeAddition = 10;
        this.tpsText;
    }
    start(){
        this.tpsText = game.add.text(32,32,"temps");
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
        console.log(this.waveTime);
        if(this.waveTime-this.cmptTot.seconds<=0){
            console.log("Game over");
        }
    }
}
