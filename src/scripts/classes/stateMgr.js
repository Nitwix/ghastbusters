class StateMgr{
    constructor(enemies, timeMgr){
        this.enemies = enemies;
        this.timeMgr = timeMgr;
        this.nENEMIES = 10;
    }

    initWave(){
        this.enemies.destroy(true, true); //soft destroy
        this.enemies.addEnemies(this.nENEMIES);
        this.timeMgr.addTime();
    }
}