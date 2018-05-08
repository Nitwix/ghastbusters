class Enemy extends Phaser.Sprite{
    constructor(game, x, y, key, frame, player){
        super(game,x,y,key,frame);

        this.player = player;

        this.scale.setTo(Phaser.Math.random(2,3));
        this.animations.add("float",[0,1,2,3,4,5,6,7]);
        this.animations.play("float",5,true);
        game.add.existing(this);
    }

    updateEnemy(){
        if(this.alive && this.overlap(this.player)){
            this.kill();
        }
    }
}
