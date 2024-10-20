<?php
$host = getenv('MYSQL_HOST');
$user = getenv('MYSQL_USER');
$password = getenv('MYSQL_PASSWORD');
$database = getenv('MYSQL_DATABASE');

// Create connection
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully to the MySQL database.<br>";

// Query to list all tables
$sql = "SHOW TABLES";
$result = $conn->query($sql);

// Check if query was successful
if ($result) {
    echo "Tables in database '$database':<br>";
    while ($row = $result->fetch_array()) {
        echo $row[0] . "<br>";
    }
} else {
    echo "Error retrieving tables: " . $conn->error;
}

// Close the connection
$conn->close();
?>
