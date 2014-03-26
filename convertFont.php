<?php

date_default_timezone_set( 'America/Mexico_City' );
error_reporting ( E_ALL | E_STRICT );
ini_set ( "display_errors", 1 );
$file   = 'css/fonts/HelveticaNeueLTStd_Roman.ttf';
if ( fopen( $file, 'r' ) ) {
    $data   = fread( fopen( $file, 'r' ), filesize( $file ) );
    echo base64_encode( $data );
} else {
    echo 'naaa';
}
?>