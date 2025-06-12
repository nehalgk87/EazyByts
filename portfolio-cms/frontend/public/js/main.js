$(document).ready(function() {
  // AOS initialization
  AOS.init({
    duration: 800,
    easing: 'slide'
  });


  // Full height adjustment
  const fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function() {
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  // Loader
  const loader = function() {
    setTimeout(function() {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Scrollax init
  if (typeof $.Scrollax !== "undefined") {
    $.Scrollax();
  }

  // Burger Menu Toggle
  const burgerMenu = function() {
    $('body').on('click', '.js-fh5co-nav-toggle', function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $('#ftco-nav').toggleClass('show');
    });
  };
  burgerMenu();

  // One Page Navigation
  const onePageClick = function() {
    $(document).on('click', '#ftco-nav a[href^="#"]', function(event) {
      event.preventDefault();
      const href = $.attr(this, 'href');
      $('html, body').animate({
        scrollTop: $(href).offset().top - 70
      }, 500);
    });
  };
  onePageClick();

  // Owl Carousel
  const carousel = function() {
    $('.home-slider').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
      }
    });
  };
  carousel();

  // Dropdown Menu Hover
  $('nav .dropdown').hover(
    function() {
      $(this).addClass('show').find('> a').attr('aria-expanded', true);
      $(this).find('.dropdown-menu').addClass('show');
    },
    function() {
      $(this).removeClass('show').find('> a').attr('aria-expanded', false);
      $(this).find('.dropdown-menu').removeClass('show');
    }
  );

  // Navbar scroll effect
  const scrollWindow = function() {
    $(window).scroll(function() {
      const st = $(this).scrollTop();
      const navbar = $('.ftco_navbar');
      const sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) navbar.addClass('scrolled');
      } else {
        if (navbar.hasClass('scrolled')) navbar.removeClass('scrolled sleep');
      }

      if (st > 350) {
        if (!navbar.hasClass('awake')) navbar.addClass('awake');
        if (sd.length > 0) sd.addClass('sleep');
      } else {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake').addClass('sleep');
        }
        if (sd.length > 0) sd.removeClass('sleep');
      }
    });
  };
  scrollWindow();

  // Counter animation
  const counter = function() {
    $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
        $('.number').each(function() {
          const $this = $(this);
          const num = $this.data('number');
          $this.animateNumber({ number: num, numberStep: comma_separator_number_step }, 7000);
        });
      }
    }, { offset: '95%' });
  };
  counter();

  // Animate on scroll using Waypoints
  const contentWayPoint = function() {
    let i = 0;
    $('.ftco-animate').waypoint(function(direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function() {
          $('body .ftco-animate.item-animate').each(function(k) {
            const el = $(this);
            setTimeout(function() {
              const effect = el.data('animate-effect');
              if (effect === 'fadeIn') el.addClass('fadeIn ftco-animated');
              else if (effect === 'fadeInLeft') el.addClass('fadeInLeft ftco-animated');
              else if (effect === 'fadeInRight') el.addClass('fadeInRight ftco-animated');
              else el.addClass('fadeInUp ftco-animated');
              el.removeClass('item-animate');
            }, k * 50, 'easeInOutExpo');
          });
        }, 100);
      }
    }, { offset: '95%' });
  };
  contentWayPoint();

  // Magnific Image Popup
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    }
  });

  // Magnific Video Popup
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});
