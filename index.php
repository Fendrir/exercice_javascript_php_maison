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
}elseif($p === 'recherche_js'){
    include('pages/recherche_js.php');
}elseif($p === 'recherche_php'){
    include('pages/recherche_php.php');
}
$content = ob_get_clean();
include("asset/nav_bar/nav_bar.php");
include('default/default.php');