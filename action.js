var main = function(){
    $('h1').hover(function(){
        $('nav').fadeOut(1500);
    });
    $('video').hover(function(){
       $('nav').fadeIn(1500); 
    });
};

$(document).ready(main);