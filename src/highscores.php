<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ghastbusters</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>

<?php require 'php/db_connect.php'?>

<h1>HIGHSCORES</h1>

<table>
    <?php require 'php/hs_table.php'?>
</table>

</body>
</html>