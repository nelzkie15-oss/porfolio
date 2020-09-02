(function($){
	'use strict';

    /* Smooth scroll */
    $('.smooth-scroll a[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 750);
                    return false;
            }
        }
    });
    
    /*------------------------------------------------
     Magnificpopup for gallery section
    -------------------------------------------------- */     
    $('.portfolio-gallery-set').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      gallery:{
        enabled:true
      }
    }); 

    /*------------------------------------------------
     Magnificpopup for related portfolio section
    -------------------------------------------------- */     
    $('.related-gallery').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below
      gallery:{
        enabled:true
      }
    }); 

    /* -------------------------------------------------------
     PORTFOLIO FILTER SET ACTIVE CLASS FOR STYLE
    ----------------------------------------------------------*/
    $('.portfolio-filter li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /* ----------------------------------------------------
     PORTFOLIO MASONRY STYLE ISOTOPE
    ------------------------------------------------------*/
    var $varPortfolioMasonry = $('.portfolio-masonry');
    if (typeof imagesLoaded == 'function') {
        imagesLoaded($varPortfolioMasonry, function() {
            setTimeout(function() {
                $varPortfolioMasonry.isotope({
                    itemSelector: '.portfolio-item',
                    resizesContainer: false,
                    layoutMode: 'masonry',
                    filter: '*'
                });
            }, 500);

        });
    };

    /* ---------------------------------------------------
     PORTFOLIO FILTERING
     ---------------------------------------------------- */
    $('.portfolio-filter').on('click', 'a', function() {
        $(this).addClass('current');
        var filterValue = $(this).attr('data-filter');
        $(this).parents('.portfolio-filter-wrap').next().isotope({
            filter: filterValue
        });
    });

    /*=========================================================================
    Color Schemes
    =========================================================================*/
    var colorHandle = $('.color-handle i');
    colorHandle.on('click', function(e) {
        $('.color-schemes').toggleClass('show');
    });
    $("#remove-ground").hide();
    $("#hide").on("click",function() {
        $("#particle-ground").hide();
        $("#remove-ground").show();
        $("#hide").addClass("color-button");
        $("#show").removeClass("color-button");
    });
    $("#show").on("click",function() {
        $("#particle-ground").show();
        $("#remove-ground").hide();
        $("#hide").removeClass("color-button");
        $("#show").addClass("color-button");
    });
    var colorPalate = $('.color-plate a.single-color');
    colorPalate.on('click', function(e) {
        e.preventDefault();
        $('link#colors').attr('href',$(this).attr('href'));
        return false;
    });

    /*--------------------------------
    MOBILE MENU ACTIVE
    -----------------------------------*/
    $('.mobile-menu').meanmenu();

    // Forms Validation
    var filterEmail  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    $('.form-validate').submit(function () {
        var errors = 0;
        $(this).find('[data-required="text"]').each(function () {
            if ($(this).attr('data-required-email') === 'email'){
                if (!filterEmail.test($(this).val())) {
                    $(this).addClass("redborder");
                    errors++;
                }
                else {
                    $(this).removeClass("redborder");
                }
                return;
            }
            if ($(this).val() === '') {
                $(this).addClass('redborder');
                errors++;
            } else {
                $(this).removeClass('redborder');
            }
        });
        if (errors === 0) {
            var form1 = $(this);
            $.ajax({
                type: "POST",
                url: 'contact-form.php',
                data: $(this).serialize(),
                success: function(data) {
                    form1.append('<p class="form-result">message has been sent successfully!</p>');
                    $("form").trigger('reset');
                }
            });
        }
        return false;
    });
    $('.form-validate').find('[data-required="text"]').blur(function () {
        if ($(this).attr('data-required-email') === 'email' && ($(this).hasClass("redborder"))) {
            if (filterEmail.test($(this).val()))
                $(this).removeClass("redborder");
            return;
        }
        if ($(this).val() != "" && ($(this).hasClass("redborder")))
            $(this).removeClass("redborder");
    });
    
    
    /*--------------------------------
    SLIDER PARTICLES.JS
    -----------------------------------*/
    if ( $('#particle-ground').length ) { 
        particlesJS("particle-ground", {
          "particles": {
            "number": {
              "value": 100,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ccc"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#ccc"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ccc",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 250,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 600,
                "size": 80,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
    }

    /* slider blog  */
    $('.slider-blog').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 3,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

     /*--------------------------
    Parallax
    ---------------------------- */ 
    var parallaxeffect = $(window);
    parallaxeffect.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

    /* ---------------------------------------------
     RELATED PROJECT SLIDER
    --------------------------------------------- */
    $('.related-project-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        responsive: [
          { breakpoint: 991, settings: { slidesToShow: 3 } },
          { breakpoint: 769, settings: { slidesToShow: 2 } },
          { breakpoint: 481, settings: { slidesToShow: 1 } },
        ]
    });

    /* circlechart */   
    $('.demo-1').percentcircle();

    /* ---------------------------------------------
     TESTIMONIAL SLICK SLIDER.
    --------------------------------------------- */
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });
    
    /* ---------------------------------------------
     SINGLE PROJECT SLIDER
    --------------------------------------------- */
    $('.single-project-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false
    });  

    $(window).on('scroll', function () {
        var wSize = $(window).width();
        if (wSize > 1 && $(this).scrollTop() > 1) {
            $('#sticky-header').addClass('sticky');
        }
        else {
            $('#sticky-header').removeClass('sticky');
        }
    });

    /*-------------------
     SMOTH SCROOL JS
    -------------------*/

    $('a.smoth-scroll').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });


    /*-------------------------------------------
      SCROLL TO TOP BUTTON
    ---------------------------------------------*/
    $('body').append('<a id="back-to-top" class="to-top-btn" href="#"><i class="ti-arrow-up"></i></a>');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('to-top-show');
                } else {
                    $('#back-to-top').removeClass('to-top-show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    };

    /*----------------------------
    window on load
    ------------------------------ */  

    $(window).on('load', function() {
        $('#preloader').fadeOut(500, function() {
            $(this).remove();
        });
    });

})(jQuery);