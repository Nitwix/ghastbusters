class TimeManager {
    constructor(){
        this.tpsRestant = 10;
        this.tpsAjout = 10;
        this.cmptRestant;
        this.tpsText;
    }
    addTime(){
        this.tpsRestant += 0.9*this.tpsAjout;
        this.tpsAjout = 0.9.this.tpsAjout;
    }

    start(){
        this.cmptRestant = game.time.create();
        this.cmptRestant.start();
        this.tpsText = game.add.text(32,32,"temps");
        this.tpsText.fixedToCamera = true;
    }

    update(){
        if(this.tpsRestant-this.cmptRestant.seconds<=0){
            console.log("Game over");
        }
    }



}
