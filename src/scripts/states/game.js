let player;
let map,layer;
let enemies;

let stateMgr;
let timeMgr;

var gameState = {
    create: function(){
        initInput();
        initMap();

        initPlayer();

        // enemy1 = new Enemy(game, 50, 10, "ghast", 0, player);
        // enemies = game.add.group();

        // var enemiesPos = [[165,112],[628,192],[195,370],[222,338],[48,37],[704,305],[496,211],[527,34],[488,452],[633,400],[748,289],[611,109],[640,62],[359,80],[355,406],[502,377]];
        timeMgr = new TimeMgr();
        timeMgr.start();
        enemies = new Enemies(game, player);
        stateMgr = new StateMgr(enemies, timeMgr);
        stateMgr.initWave();

    },
    update: function(){
        updatePlayer();
        timeMgr.update();
        enemies.updateEnemies();

        if(enemies.waveFinished){
            stateMgr.initWave();
        }
    },
};
