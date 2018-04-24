let player;
let map,layer;
var gameState = {
    create: function(){
        initInput();
        initMap();

        initPlayer();


        var tab = [[165,112],[628,192],[195,370],[222,338],[48,37],[704,305],[496,211],[527,34],[488,452],[633,400],[748,289],[611,109],[640,62],[359,80],[355,406],[502,377]];
    },
    update: function(){
        updatePlayer();
    },
};
