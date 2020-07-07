document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

     $(".phone_mask").mask("+7 (000) 000 00 00", {
        placeholder: ""
    });
    $(".fancybox-thumb").fancybox({

        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            },
        }
    });
    $('[data-fancybox]').fancybox({
        clickContent : function( current, event ) {
            return current.type === 'image' ? 'zoom' : 'close';
        }
    });
    $( function() {
        $( ".accordion" ).accordion({
            collapsible: true,

        });
    } );

    $('.promo_slider').slick({
        infinite: false,
        draggable:true,
        slidesToShow: 8,
        slidesToScroll: 1,
        speed:300,
        dots: true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [

            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    settings: 'unslick'
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:false,

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]


    });

    $('.slider_content').slick({
        infinite: false,
        draggable:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:300,
        dots: true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',

    });

    $('.project_slider').slick({
        infinite: false,
        draggable:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:300,
        dots: false,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [

            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:false,

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });

    $('.reviews_slider').slick({
        infinite: false,
        draggable:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed:300,
        dots: false,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [

            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:false,

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });


    $('.tabs-button').click(function(){
        if($(this).is(':visible')){
            setTimeout(function(){
                $(".project_slider").slick('setPosition');
                $(window).resize();
            },0);
        }
    });

    $(".project_filter .tabs-button a").click(function(e) {
        $("div [data-id]").removeClass("active");
        $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("active");
        e.preventDefault();
    });
    $(".project_filter .tabs-button").click(function(e) {
        e.preventDefault();
        $(".tabs-button").removeClass('active');
        $(this).addClass('active');
    });
    $(".project_filter .filter-open").on("click",function(){
        $(this).next().toggleClass("active")
    });
    $(".project_filter #pp_offers_list li").on("click",function(){
        $("#pp_offers_list li").removeClass("active"),
            $(this).addClass("active"),
            $(this).parent("#pp_offers_list").removeClass("active"),
            $(".filter-open").find("span b").text($(this).find("a").text())
    });


    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $('#scrollto').on('click', function() {
        $('html,body').animate({scrollTop:$('.section_2').offset().top+"px"},{duration:1E3});

    });
    $('#scrollto1').on('click', function() {
        $('html,body').animate({scrollTop:$('.section_3').offset().top+"px"},{duration:1E3});

    });


    $('.open_video').on("click", function () {
        $('.overlay-video').addClass('active fadeInDown');
        $('.overlay-video').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-video .close,.close-popup').on("click", function () {
        $('.overlay-video').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-video').removeClass('active');
        }, 500);
    });
    $('.overlay-video .closeBtn').on("click", function () {
        $('.overlay-video').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });

    $('.open-imprint').on("click", function () {
        $('.overlay-imprint').addClass('active fadeInDown');
        $('.overlay-imprint').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-imprint .close,.close-popup').on("click", function () {
        $('.overlay-imprint').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-imprint').removeClass('active');
        }, 500);
    });
    $('.overlay-imprint .closeBtn').on("click", function () {
        $('.overlay-imprint').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });


    $('.open-confidentiality').on("click", function () {
        $('.overlay-confidentiality').addClass('active fadeInDown');
        $('.overlay-confidentiality').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-confidentiality .close,.close-popup').on("click", function () {
        $('.overlay-confidentiality').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-confidentiality').removeClass('active');
        }, 500);
    });
    $('.overlay-confidentiality .closeBtn').on("click", function () {
        $('.overlay-confidentiality').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });



    $('.menu_burger').on("click", function () {
        $('.sub_menu').addClass('active fadeInDown');
        $('.sub_menu').removeClass('fadeOutUp');

    });
    $('.sub_menu, menu li, .close').on("click", function () {
        $('.sub_menu').toggleClass('fadeOutUp fadeInDown');
        window.setTimeout(function() {
            $('.sub_menu').removeClass('active');
        }, 500);
    });


    var wrapper = document.querySelector(".text");
    var text = document.querySelector(".animate");

    var textCont = text.textContent;
    text.style.display = "none";

    for (var i = 0; i < textCont.length; i++) {
        (function(i) {
            setTimeout(function() {
                // Created textNode to append
                var texts = document.createTextNode(textCont[i])
                var span = document.createElement('span');
                span.appendChild(texts);

                span.classList.add("wave");
                wrapper.appendChild(span);

            }, 75 * i);
        }(i));
    }



});
