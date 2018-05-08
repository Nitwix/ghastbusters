class Enemies extends Phaser.Group{
    constructor(game, player){
        super(game);
        game.add.existing(this);

        this.player = player;

        this.positions = [[165, 112], [628, 192], [195, 370], [222, 338], [48, 37], [704, 305], [496, 211], [527, 34], [488, 452], [633, 400], [748, 289], [611, 109], [640, 62], [359, 80], [355, 406], [502, 377]];

        this._waveFinished = false;
    }

    addEnemies(nEnemies){
        let availPos = [].concat(this.positions);
        for(let i=0; i<nEnemies; i++){
            if(availPos.length === 0) break;

            let rIndex = Math.floor(Math.random() * availPos.length);
            let rPos = availPos[rIndex];
            availPos.splice(rIndex, 1);
            let enemy = new Enemy(game, rPos[0], rPos[1], "ghast", 0, this.player);
            this.add(enemy);
        }
    }

    updateEnemies(){
        this.callAll("updateEnemy");

        // console.log(this.getFirstAlive());
        if(this.getFirstAlive() === null){
            console.log("Wave finished");
            this.removeChildren();
            this._waveFinished = true;
        }
    }

    get waveFinished(){
        if(this._waveFinished){
            this._waveFinished = false; //resets the flag
            return true;
        }else{
            return false;
        }
    }
}