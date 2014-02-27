<?php
try {
    
    $dbh = new PDO( 'mysql:host=localhost;dbname=microinjertoB0j4nini', 'asfalto', '4sf4l70' );
    $dbh->exec("SET CHARACTER SET utf8");
} catch ( PDOException $e ){
    
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}