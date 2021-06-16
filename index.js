var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function(popoverTrigger) {
    return new bootstrap.Popover(popoverTrigger);
});


$('#owl-carousel1').owlCarousel({
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
});
$('#owl-carousel2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    navigation: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        900: {
            items: 2,
        },
        1300: {
            items: 3,
        }
    }
});
$('#owl-carousel3').owlCarousel({
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
});
$('#owl-carousel4').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsiveClass: true,
    navigation: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        900: {
            items: 3,
        },
        1300: {
            items: 4,
        }

    }
});