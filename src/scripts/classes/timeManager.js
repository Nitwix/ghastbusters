class TimeManager {
    constructor(){
        this.tempsExport = 0;
        this.cmptTot = new Phaser.Timer;
    }
    startCmptTot(){
        this.cmptTot.start();
    }
    exportTime(){
        return this.cmptTot.seconds;
    }


}
