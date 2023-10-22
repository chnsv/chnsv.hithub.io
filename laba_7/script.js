$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        infinity: true,
        dots: true, //точки
        slidesToShow: 3, // сколько показывается на экране
        slidesToScroll: 1, //сколько пролистывается
        prevArrow: "<img src='sl-arrow_l.svg' class='prev' alt='1'>",
        nextArrow: "<img src='sl-arrow_r.svg' class='next' alt='2'>",
        responsive:[
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, //при таком разрешении выводится только 1 слайдер
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
