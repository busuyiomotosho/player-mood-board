<?php
require_once __DIR__ . '/../config/database.php';

$data = json_decode(file_get_contents("php://input"), true);
$emoji = $data['emoji'] ?? '';

if (in_array($emoji, ['happy', 'neutral', 'sad'])) {
    $stmt = $conn->prepare("INSERT INTO moods (emoji) VALUES (:emoji)");
    $stmt->bindParam(':emoji', $emoji);
    $stmt->execute();
    echo json_encode(['status' => 'success']);
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid emoji']);
}