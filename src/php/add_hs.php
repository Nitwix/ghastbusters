<?php

    require 'db_connect.php';

    $pseudo = htmlspecialchars($_POST["pseudo"]);
    $score = htmlspecialchars($_POST["score"]);
    $temps = htmlspecialchars($_POST["temps"]);

    $sql = "INSERT INTO highscores (pseudo, score, temps) VALUES ('$pseudo',$score,$temps)";
    echo $sql;

    $result = $conn->query($sql);

    header("location: ../highscores.php");

?>