
$(document).ready(function () {
    // slider
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    })

    $(".shares-content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.shares-img',
        prevArrow: '<button class="shares-icon-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="shares-icon-next"><i class="fas fa-arrow-right"></i></button>',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                }
            }
        ]
    });

    $(".shares-img").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.shares-content',
        dots: false,
        arrows: false,
        fade: false,
        centerMode: true,
        centerPadding: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: false,
                }
            }
        ]
    });

    // toggle nav
    $('.nav-btn').click(function () {
        $('.nav-list').toggleClass('nav-active')
        $('.overlay').toggleClass('show-overlay')
        $('body').toggleClass('noscroll')
    })

    $('.category-icon-down').click(function () {
        $('.category-icon-down').toggleClass('rotate')
    })

    $('.category-icon-down').click(function () {
        $('.item-list').toggleClass('show')
    })


});



