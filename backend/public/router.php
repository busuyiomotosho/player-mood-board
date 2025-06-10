<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Max-Age: 3600");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
// Simple router for PHP built-in server
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$request_method = $_SERVER['REQUEST_METHOD'];

// Map routes to files
$routes = [
    'POST /api/mood' => '/api/mood.php',
    'GET /api/moods' => '/api/moods.php',
];

$route_key = "$request_method $request_uri";
$route_key_alt = "$request_method " . rtrim($request_uri, '/');

if (isset($routes[$route_key]) || isset($routes[$route_key_alt])) {
    $file = $routes[$route_key] ?? $routes[$route_key_alt];
    require __DIR__ . '/..' . $file;
} else {
    http_response_code(404);
    echo json_encode([
        'error' => 'Endpoint not found',
        'request_method' => $request_method,
        'request_uri' => $request_uri
    ]);
}