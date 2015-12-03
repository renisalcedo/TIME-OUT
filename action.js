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
       $('nav').fadeOut(1500);
       $('.content').slideDown(1000);
       
       var first = window.location = '#first-body';
       var second = window.location = '#second-body';
       var third = window.location = '#third-body';
       
       if(window.location == first)
        window.location = second;
        
    });
};

$(document).ready(main);