$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsiveClass: true,
    navigation: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        900: {
            items: 6,
        },
        1300: {
            items: 9,
        }
    }
})