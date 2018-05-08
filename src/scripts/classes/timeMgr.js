class TimeMgr {
    constructor(waveTime){
        this.waveTime = waveTime;
        this.cmptTot = new Phaser.Timer();
    }
    startCmptTot(){
        this.cmptTot.start();
    }
    exportTime(){
        return this.cmptTot.seconds;
    }

    addTime(){
        this.waveTime += .9*this.cmptTot;
    }

}
