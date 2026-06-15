<?php
session_start();
if (!isset($_SESSION['email'])) {
    header("Location: admin.html"); // Redirect to login if not logged in
    exit();
}



