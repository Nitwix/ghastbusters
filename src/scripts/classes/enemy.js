class Enemy extends Phaser.Sprite{
    constructor(game, x, y, key, frame, player){
        super(game,x,y,key,frame);

        this.player = player;

        this.scale.setTo(Phaser.Math.random(2,3));

        game.add.existing(this);
    }

    update(){
        if(this.alive && this.overlap(this.player)){
            this.kill();
        }
    }
}