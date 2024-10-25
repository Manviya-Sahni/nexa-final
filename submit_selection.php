<?php
// Database connection
$servername = "localhost";
$username = "root"; // Default username for XAMPP
$password = ""; // Default password is usually empty
$dbname = "tutor_selection"; // Make sure this database exists

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if data is received
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $language = trim($_POST['language']);
    $disability = trim($_POST['disability']);

    // Validate inputs
    if (empty($language) || empty($disability)) {
        echo "Please the fill the required fields";
    } else {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO selections (language, disability) VALUES (?, ?)");
        $stmt->bind_param("ss", $language, $disability); // Use "ss" for two strings

        // Execute the statement
        if ($stmt->execute()) {
            echo "Selection recorded successfully";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    }
}

$conn->close();
?>
