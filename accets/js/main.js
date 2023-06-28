

AOS.init();
$(document).ready(function(){

    // $("a[rel^='prettyPhoto']").prettyPhoto();

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });

    

    $(".header-owl").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
    })

    $(".blog-carousel").owlCarousel({
        items:3,
        loop:true,
        center:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            740:{
                items:2
            },
            1190:{
                items:3
            }
        }
    });

    $(function(){
        $('#sticky_nav').scrollupbar();
      });


    $('.mainBar').click(function(){
        $('.header-menu').toggleClass("menuSlide");
    });
    $('.bars').click(function(){
        $('.xmark').show();
        $('.bars').hide();
    });
    $('.xmark').click(function(){
        $('.bars').show()
        $('.xmark').hide()
    });


    
    
});





