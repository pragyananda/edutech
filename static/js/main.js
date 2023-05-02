
'use strict';

function MobileMeniu() {

    $(".mobile-button").click(function () {
        $(this).toggleClass("open");

    });


}
// Defining a function to set size for #hero 
function fullscreenHeroSection() {
    $('.homepage-hero-module').css({
        height: $(window).height() - 30
    });
}

function fixedHeader() {
    var setHeader = function () {
        if ($(window).scrollTop() > 10) {
            $('#top-nav').addClass('fixed-header');
            $('.navbar-right .meniu-button.custom-button').removeClass('header');
        } else {
            $('#top-nav').removeClass('fixed-header');
            $('.navbar-right .meniu-button.custom-button').addClass('header');
        }
    }
    try {
        setHeader();
        $(window).scroll(setHeader).resize(setHeader);
    } catch (error) {
        console.log(error);
    }
}

function customWidth(formId, clickedElem, hiddenText) {
    var formId = '#' + formId,
        formWidth = $(formId)[0].getBoundingClientRect().width,
        elemWidth = $(formId + ' ' + clickedElem)[0].getBoundingClientRect().width;
    $(formId + ' ' + clickedElem).on('click', (function () {
        var i = 0;
        return function (e) {
            $(this).toggleClass('hide-button-text').addClass('disable-click').animate({
                width: (++i % 2) ? formWidth - 10 : elemWidth
            }, 500, function () {
                window.setTimeout(function () {
                    if ($('.hide-button-text').length > 0) {
                        $('.hide-button-text').click();
                    }
                }, 3000);
                if (!$(formId + ' ' + clickedElem).hasClass('hide-button-text')) {
                    window.setTimeout(function () {
                        $(formId + ' div').removeClass('disable-click');
                    }, 2000);
                }
            });
            if ($(hiddenText).hasClass('sign-text-show') == false) {
                window.setTimeout(function () {
                    $(hiddenText).addClass('sign-text-show');
                    $(formId + ' ' + clickedElem + ":contains('Sign Up')").html("<span class='sign-text sign-text-show'>Thank you for subscribing!</span>");
                }, 1000);
            } else {
                $(hiddenText).removeClass('sign-text-show');
                $(formId + ' ' + clickedElem).html("<span class='sign-text'>Thank you for subscribing!</span>Sign Up");
            }
        }
    })());
}

var moveElementOnSmall = function () {
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        $('.img-order').addClass('services').append($('.move-on-small-services'));
    } else {
        if ($('.img-order').hasClass('services') == true) {
            $('.img-order').removeClass('services');
            $('.move-on-small').append($('.move-on-small-services'));
        }
    }
}

var contentWayPoint = function () {
    var i = 0;

    $('.animate-box').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function () {

                $('body .animate-box.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn animated-fast');
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated-fast');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated-fast');
                        } else {
                            el.addClass('fadeInUp animated-fast');
                        }

                        el.removeClass('item-animate');
                    }, k * 400, 'easeInOutExpo');
                });

            }, 100);

        }

    }, { offset: '85%' });

    $('.animate-box-home').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function () {

                $('body .animate-box-home.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn animated-fast');
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated-fast');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated-fast');
                        } else {
                            el.addClass('fadeInUp animated-fast');
                        }

                        el.removeClass('item-animate');
                    }, k * 150, 'easeInOutExpo');
                });

            }, 400);

        }

    }, { offset: '80%' });


};

var counter = function () {
    $('.js-counter').countTo({
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
    });
};

var counterWayPoint = function () {
    if ($('#pricing-section').length > 0) {
        $('#pricing-section').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                setTimeout(counter, 400);
                $(this.element).addClass('animated');
            }
        }, { offset: '90%' });
    }
};

var loaderPage = function () {
    $(".gtco-loader").fadeOut("slow");
};


function Initialize() {


    if (($('body').hasClass('about-us') || $('body').hasClass('contact') || $('body').hasClass('blog') || $('body').hasClass('article-page') || $('body').hasClass('portfolio') || $('body').hasClass('project')) == false) {
        fixedHeader();
        fullscreenHeroSection();
    }
    customWidth("sign-up-form", "div", "span");
    moveElementOnSmall();

    // Run the function in case of window resize
    $(window).resize(function () {
        if (($('body').hasClass('about-us') || $('body').hasClass('contact') || $('body').hasClass('blog') || $('body').hasClass('article-page') || $('body').hasClass('portfolio') || $('body').hasClass('project')) == false) {
            fullscreenHeroSection();
        }
        moveElementOnSmall();
    });

    moveElementOnSmall();
    contentWayPoint();
    counterWayPoint();
    MobileMeniu();

    /*jumbotron parallax */
    $(window).scroll(function () {
        $('.jumbotron-description').css({
            'bottom': -($(this).scrollTop() / 2) + "px" // increase # to make even slower
        });
    });

    $('.partners-logos').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


};










function menuClick() {
    $('.menu-link').on('click', function () {
        var scrollSpeed = 1000; // Default scrolling speed
        console.log(this.hash);
        if (this.hash == '#features-section') {
            scrollSpeed = 1500;
        } else if (this.hash == '#pricing-section') {
            scrollSpeed = 2000;
        } else if (this.hash == '#newsletter-section') {
            scrollSpeed = 2500;
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            console.log(target.href);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            console.log(target.length);

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, scrollSpeed);
                return false;
            }
        }
    });
}





/** Reusable Functions **/
/********************************************************************/

/* function scaleVideoContainer() {

     var height = $(window).height();
     var unitHeight = parseInt(height, 10) + 'px';
     $('.homepage-hero-module').css('height', unitHeight);

 }

 function initBannerVideoSize(element) {

     $(element).each(function () {
         $(this).data('height', $(this).height());
         $(this).data('width', $(this).width());
     });

     scaleBannerVideoSize(element);

 }

 function scaleBannerVideoSize(element) {

     var windowWidth = $(window).width(),
         windowHeight = $(window).height(),
         videoWidth,
         videoHeight;

     $(element).each(function () {
         var videoAspectRatio = $(this).data('height') / $(this).data('width'),
             windowAspectRatio = windowHeight / windowWidth;

         if (videoAspectRatio > windowAspectRatio) {
             videoWidth = windowWidth;
             videoHeight = videoWidth * videoAspectRatio;
             $(this).css({ 'top': -(videoHeight - windowHeight) / 2 + 'px', 'margin-left': 0 });
         } else {
             videoHeight = windowHeight;
             videoWidth = videoHeight / videoAspectRatio;
             $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });
         }

         $(this).width(videoWidth).height(videoHeight);

         $('.homepage-hero-module .video-container video').addClass('fadeIn animated');


     });
 }*/

function blogCategories() {
    $(".article-type, .category-title").on('click', function () {
        var posts = $('.blog-body .blog-article, .blog-category-title');
        var customType = $(this).data('filter');
        if (customType == 'all') {
            posts.show();
        } else {
            posts
                .hide()
                .filter(function () {
                    return $(this).data('cat') === customType;
                })
                .show();
        }
    });

}


function articleCategories() {
    var width = window.innerWidth;
    var posts = $(".second-about .details");
    posts.not(':eq(0)').hide();
    $(".second-about:eq(0)").show();
    $(".round-image.one").addClass('js-helper-round-image-shadow').append('<div class="js-helper-round-image-border"></div>');

    if (width < 768) {
        var item = $('.second-about .details:eq(0)');
        var image = $('.round-image:eq(0)');
        image.siblings(":last").after(item);
        item.find('h3, h4').hide();
    }

    $(".round-image").on('click', function () {
        var elem = $('.round-image');
        $.each(elem, function () {
            $(this).removeClass('js-helper-round-image-shadow');
            $(this).empty();
        });
        $(this).addClass('js-helper-round-image-shadow').append('<div class="js-helper-round-image-border"></div>');
        var customType = $(this).data('filter');

        posts
            .hide()
            .filter(function () {
                return $(this).data('cat') === customType;
            })
            .show();

        if (width < 768) {
            var item = $('.second-about .details');
            var elem = posts.filter(function () {
                return $(this).data('cat') === customType;
            });
            elem.find(item);
            $(this).siblings(":last").after(elem);
            elem.find('h3, h4').hide();
        }
    });

}



function opacityAtScroll() {

    $(window).scroll(function () {
        var introSection = $('.article-header');
        var introSectionHeight = introSection.height();
        var scaleSpeed = 0.1;
        var opacitySpeed = 1.1;
        var scrollPercentage = ($(window).scrollTop() / introSectionHeight).toFixed(5),
            scaleValue = 1 + scrollPercentage * scaleSpeed;
        //check if the introSection is still visible
        if ($(window).scrollTop() < introSectionHeight) {
            introSection.css({
                '-moz-transform': 'scale(' + scaleValue + ') translateZ(0)',
                '-webkit-transform': 'scale(' + scaleValue + ') translateZ(0)',
                '-ms-transform': 'scale(' + scaleValue + ') translateZ(0)',
                '-o-transform': 'scale(' + scaleValue + ') translateZ(0)',
                'transform': 'scale(' + scaleValue + ') translateZ(0)',
                'opacity': 1 - scrollPercentage * opacitySpeed
            });
        }
    });


}


function CategoryFix() {
    $('.category-title').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });



    $('.testimonials').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    });
    $('.cbutton').on('hover', function (e) {
        $(this).toggleClass('cbutton--click');

    });
    $('.cbutton').on('click', function (e) {
        $(this).toggleClass('cbutton--click');

    });

    // function buttonEffect() {
    //     $('.cbutton').toggleClass('cbutton--click');
    // }
}

/** Document Ready Functions **/
/********************************************************************/

$(document).ready(function () {

    Initialize();
    menuClick();
    blogCategories();
    articleCategories();
    opacityAtScroll();
    CategoryFix();
});










