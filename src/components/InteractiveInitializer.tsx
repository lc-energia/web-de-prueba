'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        $: any;
        jQuery: any;
        WOW: any;
    }
}

const InteractiveInitializer = ({ isJQueryLoaded }: { isJQueryLoaded: boolean }) => {
  useEffect(() => {
    if (isJQueryLoaded && typeof window.$ === 'function') {
      const $ = window.$;

      // Spinner
      var spinner = function () {
          setTimeout(function () {
              if ($('#spinner').length > 0) {
                  $('#spinner').removeClass('show');
              }
          }, 1);
      };
      spinner();
      
      
      // Initiate the wowjs
      if (typeof window.WOW !== 'undefined') {
        new window.WOW().init();
      }


      // Sticky Navbar
      $(window).scroll(function () {
          if ($(this).scrollTop() > 300) {
              $('.sticky-top').addClass('shadow-sm').css('top', '0px');
          } else {
              $('.sticky-top').removeClass('shadow-sm');
          }
      });
      
      
      // Back to top button
      $(window).scroll(function () {
          if ($(this).scrollTop() > 300) {
              $('.back-to-top').fadeIn('slow');
          } else {
              $('.back-to-top').fadeOut('slow');
          }
      });
      $('.back-to-top').click(function () {
          $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
          return false;
      });


      // Facts counter
      if ($.fn.counterUp) {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
      }


      // Header carousel
      if ($.fn.owlCarousel) {
        $(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            dotsData: true,
            autoplayHoverPause: true
        });

        // Testimonials carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                }
            },
            autoplayHoverPause: true
        });
      }


      // Portfolio isotope and filter
      if ($.fn.isotope) {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('active');
            $(this).addClass('active');

            portfolioIsotope.isotope({filter: $(this).data('filter')});
        });
      }
    }
  }, [isJQueryLoaded]);

  return null;
};

export default InteractiveInitializer;