<?php
$servername = "localhost";
$username = "root";
$password = ""; // Default password is empty in XAMPP
$dbname = "BookStoreDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
$name = $_POST['firstName'] . ' ' . $_POST['lastName'];
$password = $_POST['password'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO Users (name, password, email_id, phone_number) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $password, $email, $phoneNumber);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>
