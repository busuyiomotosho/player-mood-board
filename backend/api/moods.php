<?php
require_once __DIR__ . '/../config/database.php';

$date = $_GET['date'] ?? date('Y-m-d');
$start = $date . ' 00:00:00';
$end = $date . ' 23:59:59';

$stmt = $conn->prepare("
    SELECT emoji, COUNT(id) AS count 
    FROM moods 
    WHERE timestamp BETWEEN :start AND :end 
    GROUP BY emoji
");
$stmt->bindValue(':start', $start);
$stmt->bindValue(':end', $end);
$stmt->execute();

$response = ['happy' => 0, 'neutral' => 0, 'sad' => 0];
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $response[$row['emoji']] = (int)$row['count'];
}
echo json_encode($response);