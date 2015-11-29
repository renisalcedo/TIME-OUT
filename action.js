var main = function(){
    $('#first-body').hover(function(){
        $('nav').fadeOut(1500);
        $('.content').slideDown(1000);
    });
    
    $('video').hover(function(){
       $('nav').fadeIn(1500);
       $('.content').hide();
    });
    
    $('#downArrow').click(function(){
        window.location = '#first-body';
        $('nav').fadeOut(1500);
        $('.content').slideDown(1000);
    });
};

$(document).ready(main);