<?php
session_start();
if (!isset($_SESSION['email'])) {
    header("Location: admin.html"); // Redirect to login if not logged in
    exit();
}


if ($_SERVER['REQUEST_METHOD'] == "POST") { 
    // Get the POST data from the login form
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    if (!empty($email) && !empty($password)) {
        // Use SELECT to fetch the user based on email
        $query = "SELECT * FROM register WHERE email = ? LIMIT 1";
        $stmt = $conn->prepare($query);

        if ($stmt) {
            $stmt->bind_param("s", $email); // Bind the email parameter
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $user_data = $result->fetch_assoc();

                // Compare the provided password (assuming passwords are hashed)
                if (password_verify($password, $user_data['password'])) { // Use password_verify() for hashed passwords
                    // Save user data in session
                    $_SESSION['email'] = $user_data['email'];

                    // Redirect to dashboard after successful login
                    echo "<script type='text/javascript'>
                        alert('Successfully logged in');
                        window.location.href = 'admin.html'; // Redirect to admin dashboard
                    </script>";
                    exit();
                
                } else {
                    echo "<script type='text/javascript'>alert('Error in Log In. Try Again.');</script>";

                    exit();
                }
                } else {
                    echo "<script type='text/javascript'>alert('Invalid email or password.');</script>";
                    exit();
                }
            
            } else {
                echo "<script type='text/javascript'>alert('No user found with this email.');</script>";
                exit();
            }
        } else {
            echo "<script type='text/javascript'>alert('Failed to prepare query.');</script>";
            exit();
        }
    } else {
        echo "<script type='text/javascript'>alert('Please fill out all fields.');</script>";

    }


$conn->close();
?>