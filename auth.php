<?php
include 'db.php';

if (isset($_POST['signup'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    if ($password !== $confirmPassword) {
        echo "Passwords do not match.";
        exit;
    }

    // Check for existing username
    $stmt = $conn->prepare("SELECT * FROM loginpage WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "Username already exists.";
    } else {
        // Prepare to insert new user
        $stmt = $conn->prepare("INSERT INTO loginpage (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $password);

        // Check if insert was successful
        if ($stmt->execute()) {
            echo "<script>alert('Signup successful!')</script>";
        } else {
            echo "Error: " . $stmt->error;
        }
    }
    $stmt->close();
    $conn->close();
}