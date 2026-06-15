<?php
session_start();
include 'connect.php'; // Database connection file



if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // Get the POST data from the registration form
    $email = trim($_POST['email']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST['confirm_password']);

    if (!empty($email) && !empty($username) && !empty($password) && !empty($confirm_password)) {
        // Check if passwords match
        if ($password === $confirm_password) {
            // Hash the password for security
            $confirm_password = password_hash($password, PASSWORD_BCRYPT);

            // Prepare an SQL statement to prevent SQL injection
            $query = "INSERT INTO register (email, username, password, confirm_password) VALUES (?, ?, ?, ?)";
            $stmt = $conn->prepare($query);

            if ($stmt) {
                // Bind parameters (password is hashed, confirm_password remains as plain text)
                $stmt->bind_param("ssss", $email, $username, $password, $confirm_password);
                
                if ($stmt->execute()) {
                    echo "<script type='text/javascript'>
                        alert('Successfully Registered');
                        window.location.href = 'index.html'; // Redirect to index.html
                    </script>";
                    exit();
                } else {
                    echo "<script type='text/javascript'>alert('Error in Registration. Try Again.');</script>";
                }

                $stmt->close();
            } else {
                echo "<script type='text/javascript'>alert('Failed to prepare query.');</script>";
                exit();
            }
        } else {
            echo "<script type='text/javascript'>alert('Passwords do not match.');</script>";
            exit();
        }
    } else {
        echo "<script type='text/javascript'>alert('Please fill out all fields.');</script>";
        exit();
    }
}

$conn->close();
?>