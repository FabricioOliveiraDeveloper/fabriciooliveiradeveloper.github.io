
$(document).ready(function(){

    /* function main search input */
    $('.header-search').quicksearch('div.coluna',{
        noResult: '#noresults',
        selector: '.card-title'
    });
    
    $(".navbar-perfil, .btn-perfil-toggle, #painel-perfil").click(function () {

        $("#main-perfil").animate({
            
            width: 'toggle',
            
        }, 300);
        
    });
    
    $(".navbar-perfil, .btn-perfil-toggle, #painel-perfil").click(function () {

        $("#painel-perfil").fadeToggle();
        
    });
    


    
 
    
});


// Initialize tooltip component
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover()
})
