$(function () {

    $('.nav-item').click(function () {

        $('.nav-item').removeClass('active');

        $(this).addClass('active');

    });

    $('.btn-toggle').click(function () {

        $("#sidebar").animate({

            width: "toggle",
            minWidth: "toggle",
            maxWidth: "toggle"

        }, 400);

        $(".btn-toggle").toggleClass("active-rotate");
        $(".btn-toggle").toggleClass("active-no-rotate");

    });
    
    $('.btn-home').click(function () {
        
        $(".content-about").animate({
            
           width: "toggle",
            minWidth: "toggle",
            maxWidth: "toggle"
            
        }, 400);
        
        $(".content-port").animate({
            
           width: "toggle",
            minWidth: "toggle",
            maxWidth: "toggle"
            
        }, 400);
        

    });
    
     $('.btn-about').click(function () {
        
         $(".content-port").slideUp(500);
        $(".content-about").slideDown(500);
        

    });

});
