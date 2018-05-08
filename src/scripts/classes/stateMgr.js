class StateMgr{
    constructor(enemies, timeMgr){
        this.enemies = enemies;
        this.timeMgr = timeMgr;
        this.nENEMIES = 10;

        this.waveNumber = 0;

        this.waveDisplay = game.add.text(600,32,"Vague : "+this.waveNumber, {fill:'white', fontSize:25});
        this.waveDisplay.fixedToCamera = true;
    }

    initWave(){
        this.enemies.destroy(true, true); //soft destroy
        this.enemies.addEnemies(this.nENEMIES);
        this.timeMgr.addTime();

        this.waveNumber++;
        this.waveDisplay.text = "Vague : " + this.waveNumber;
    }
}