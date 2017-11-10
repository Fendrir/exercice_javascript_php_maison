<?php

// mise en place du layout

if(htmlspecialchars(isset($_GET['p']), ENT_QUOTES)){
    $p = htmlspecialchars($_GET['p'], ENT_QUOTES);
}else{
    $p = 'home';
}

// mise en place des pages de layout


ob_start();
if($p === 'home'){
    include('pages/home.php');
}
$content = ob_get_clean();
include('default/default.php');