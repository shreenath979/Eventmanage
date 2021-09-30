// Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('.mob-menu-area').append($mobile_nav);
    $('.mob-menu-area').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
    $('.mob-menu-area').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }


      // Back to top button
$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
$('.scroll-to-top').fadeIn('slow');
} else {
$('.scroll-to-top').fadeOut('slow');
}
});
$('.scroll-to-top').click(function() {
$('html, body').animate({
scrollTop: 0
}, 100);
return false;
});
//Service Carousel

      var owl = $('.service-carousel');
      owl.owlCarousel({
        margin: 30,
        autoplay: true,
        autoplayHoverPause:true,
        nav:false,
        dots:false,
        loop: true,
        items:1,
        responsiveClass:true,
        responsive: {
          0: {
            items: 1,
            nav:false
          },
          600: {
            items: 2
          },
          1000: {
            items: 3,
            nav:false
          }
        }
      });

      var owl = $('.testmonial-slider');
      owl.owlCarousel({
        margin: 30,
        autoplay: true,
        autoplayHoverPause:true,
        nav: true,
        loop: true,
        items:1,
        responsiveClass:true,
        responsive: {
          0: {
            items: 1,
            nav:false
          },
          600: {
            items: 2
          },
          1000: {
            items: 1,
            nav:false
          }
        }
      });


      var owl = $('.partner-slider');
      owl.owlCarousel({
        autoplay: true,
        autoplayHoverPause:true,
        nav: true,
        loop: true,
        items:1,
        responsiveClass:true,
        responsive: {
          0: {
            items: 1,
            nav:false
          },
          600: {
            items: 2
          },
          1000: {
            items: 2,
            nav:false
          }
        }
      });

      var owl = $('.speaker-carousel');
      owl.owlCarousel({
        margin: 30,
        autoplay: true,
        autoplayHoverPause:true,
        nav:false,
        dots:false,
        loop: true,
        items:1,
        responsiveClass:true,
        responsive: {
          0: {
            items: 1,
            nav:false
          },
          600: {
            items: 2
          },
          1000: {
            items: 2,
            nav:false
          }
        }
      });


      $(window).scroll(function(){
  if ($(this).scrollTop()>50) {
    $('header').addClass('headersticky');
  }
  else {
    $('header').removeClass('headersticky');
  }
});