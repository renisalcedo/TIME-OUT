// BUG, the arrow is going straigh to third skipping 1st
// More content should be added by tonigh in the html
// If any css can be improve, go for it
// Decide what to do with the links
// Menu link: add a gallery of photos


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
       
       window.location = '#first-body';
    });
};

$(document).ready(main);