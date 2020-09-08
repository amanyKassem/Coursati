$(document).ready(function () {

    // category active link
    $(".categoriesLinks li a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
        event.preventDefault();
    });

    // toggle menu
    $("header .toggle").click(function () {
        $(".overlay").css({
            "transform": "scaleX(1)"
        });

        $(".menu").addClass('ulDir');

    });

    $("header .overlay").click(function () {
        $(this).removeAttr("style");
        $(".menu").removeClass("ulDir");
    });

    // toggle mobile search
    $(".toggleSearch").click(function () {
        $('.mobileSearch').toggleClass( 'd-flex');
        $('.mobileSearch input').focus();
        event.preventDefault();
    });

    // carousal

    $('.courses').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        vertical: true,
        verticalSwiping: true,
        prevArrow:"<i class='fas fa-chevron-up'></i>",
        nextArrow:"<i class='fas fa-chevron-down'></i>",
        infinite:true

    });

    $('#owl-demo1 , #owl-demo2 , #owl-demo3').owlCarousel({
        // center: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        autoplay: true,
        loop: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
                // center: false
            },
            992: {
                items: 6,
            }
        }
    });

    // lang selector

    $(function(){
        $('.selectpicker').selectpicker();
    });


    //scroll top
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn(1000);
        } else {
            scrollButton.fadeOut(1000);
        }
    });

    //click to scroll top
    scrollButton.click(function () {
        $('html,body').animate({scrollTop: 0}, 600);
    });


});

/* loading screen */
$(window).on('load', function () {

    $(".layer-preloader").fadeOut(700, function () {

        $(".lds-dual-ring").delay(1000).fadeOut(700);

        $("body").css("overflow-y", "auto");

    });

});