<?php
$host = 'localhost'; // o la dirección del servidor
$dbname = 'login'; // el nombre de tu base de datos
$username = 'sa'; // tu usuario de la base de datos
$password = 'tu_contraseña'; // tu contraseña de la base de datos

try {
    $conn = new PDO("sqlsrv:server=$host;Database=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Conexión fallida: " . $e->getMessage();
}
?>

