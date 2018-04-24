<!DOCTYPE html>
<html lang="en">
<head>
    <?php require 'php/head.php' ?>
</head>
<body>
    <div id="canvas-container"></div>

    <form action="php/add_hs.php" method="post">
        <input type="text" name="pseudo" value="pseudo1">
        <input type="hidden" name="score" value="42">
        <input type="hidden" name="temps" value="4200">
        <input type="submit" value="Envoyer!">
    </form>


    <script src="../node_modules/phaser-ce/build/phaser.js"/></script>

    <script src="scripts/classes/enemy.js"></script>

    <script src="scripts/states/preload.js"></script>
    <script src="scripts/states/mainMenu.js"></script>
    <script src="scripts/states/game.js"></script>
    <script src="scripts/input.js"></script>
    <script src="scripts/player.js"></script>
    <script src="scripts/timeManager.js"></script>
    <script src="scripts/map.js"></script>
    <script src="scripts/main.js"></script>
</body>
</html>
