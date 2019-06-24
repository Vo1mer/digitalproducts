$(document).ready(function () {

   $('.header_menu-item').on('click', 'a', function () {
       $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
           duration: 1500,
           easing: "swing"
       });
       return false;
   });

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: "<a type='button' class='prevButton'></a>",
        nextArrow: "<a type='button' class='nextButton pull-right'></a>",
        responsive: [
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    initMap();
    var map;
    function initMap() {
        var piranha = {lat: -7.9307459, lng: 112.6355576};
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -7.9307459, lng: 112.6355576},
            zoom: 20
        });
        var marker = new google.maps.Marker({position: piranha, map: map});
    }








        var btn = $('#button');

        $(window).scroll(function() {
            if ($(window).scrollTop() > 120) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });















});
