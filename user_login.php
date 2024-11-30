<?php
session_start();
require 'db_connection.php'; // Asegúrate de que este archivo contiene la conexión a tu base de datos

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitizar las entradas
    $username = filter_var(trim($_POST['username']), FILTER_SANITIZE_STRING);
    $password = trim($_POST['password']);

    // Verificar conexión a la base de datos
    if ($conn) {
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username");
        $stmt->bindParam(':username', $username);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verificar si el usuario existe y la contraseña es válida
        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            header("Location: ../index.php");
            exit();
        } else {
            $error = "Credenciales incorrectas.";
        }
    } else {
        $error = "Error al conectar con la base de datos.";
    }
}
?>
