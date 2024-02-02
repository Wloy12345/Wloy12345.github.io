<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];

    try {

        require_once 'dbh.inc.php';
        require_once 'signup_model.inc.php';
        require_once 'signup_contr.inc.php';

        // ERROR HANDLERS
        

    } catch (PDOException $e) {
        echo "Query Failed: ". $e->getMessage();
    }
} else {
    header("location: ../index.php");
    die();
}