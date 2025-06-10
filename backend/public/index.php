<?php
header('Content-Type: application/json');
echo json_encode([
    'status' => 'online',
    'message' => 'Player Mood Board API',
    'endpoints' => [
        'POST /api/mood' => 'Submit mood',
        'GET /api/moods' => 'Get mood summary'
    ]
]);