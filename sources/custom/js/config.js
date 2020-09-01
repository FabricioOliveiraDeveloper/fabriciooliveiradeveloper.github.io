jQuery(function () {
    
    jQuery(window).scroll(function () 
    {
        if (jQuery(this).scrollTop() > 10) 
        {
            $("#navbar").removeClass("navbar-default");
            $("#navbar").addClass("navbar-scroll");
    
        } 
        else 
        {
    
            $("#navbar").removeClass("navbar-scroll");    
            $("#navbar").addClass("navbar-default");
    
        }
      
  });
    
});


ScrollReveal().reveal('.widget',
{ 
    duration: 500,
    distance: '100px',
    origin: 'bottom',
    opacity: 0,
    reset: false,
    interval: 200 
});