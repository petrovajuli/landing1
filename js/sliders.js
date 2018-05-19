$(document).ready(function () {
    $('#best-team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        appendDots: $('.section.best-team')
    }
    );

    $('#clients-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        appendDots: $('.section.clients')
    }
    );
});