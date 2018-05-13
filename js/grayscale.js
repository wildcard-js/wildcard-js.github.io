/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})


var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

if(!isMobile) {
    $(function() {
        $(window).scroll(function () {
        if ($(this).scrollTop() > $(document).height()*0.01) {
            $('html').addClass('yellow-bg')
        }
        if ($(this).scrollTop() < $(document).height()*0.09 || $(this).scrollTop() > $(document).height()*0.32) {
            $('html').removeClass('yellow-bg')
        }
        });
    });

    $(function() {
        $(window).scroll(function () {
        if ($(this).scrollTop() > $(document).height()*0.09) {
            $('.logo-top').remove()
            if(!$('.logo-black').length) {
                $('.navbar-brand').append('<img class="logo-black" src="img/logo-black.png">');
            }
        }
        if ($(this).scrollTop() < $(document).height()*0.09) {
            $('.logo-black').remove();
            if(!$('.logo-top').length) {
                $('.navbar-brand').append('<img class="logo-top" src="img/logo.jpg">');
            }
        }
        });
    });
}

