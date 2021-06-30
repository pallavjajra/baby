$(document).foundation();

$('#title-bar').on('sticky.zf.stuckto:top', function () {
    $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function () {
    $(this).removeClass('shrink');
})



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToScroll: 4,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 4
        }
    }
})


