<?php
$sql = "SELECT * FROM highscores ORDER BY score desc";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    echo "<td>ID</td><td>Pseudo</td><td>Score</td><td>Temps</td>";
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["id"]. "</td><td>" . $row["pseudo"]. "</td><td>" . $row["score"] . "</td><td>".$row["temps"]."</td>";
        echo "</tr>";
    }
}
else {
    echo "0 results";
}

?>