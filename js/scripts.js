$(document).ready(function () {

    $(".categoriesLinks li a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
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

    // count down

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);


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