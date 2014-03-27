<?php
try {
    
    $dbh = new PDO( 'mysql:host=localhost;dbname=microinjertoB0j4nini', 'b0j4n1n14sf4l70', '_CMV4sf4l70_' );
    $dbh->exec("SET CHARACTER SET utf8");
} catch ( PDOException $e ){
    
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}