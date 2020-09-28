$(document).ready(function() {
	flexibility(document.documentElement);

    //MENU-MOBILE
    $('body').on('click','.js-menu-btn', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.menu-mobile').toggleClass('active');
        $('.menu-mobile__bg').fadeToggle();
        $('body').toggleClass('fixed');
    });
    $('body').on('click','.menu-mobile__bg', function(e){
        e.preventDefault();
        $('.menu-btn').removeClass('active');
        $('.menu-mobile').removeClass('active');
        $(this).fadeOut();
        $('body').removeClass('fixed');
    });

	//benefits-slider
    if ($('.benefits__slider').length>0) {
        var $b_slider = $('.benefits__slider');

        $b_slider.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:true,
            useTransform:true,
            accessibility: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            adaptiveHeight:true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover:false,
        });
    };



    $(".scroll-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top -100},'slow');
    });


    //POPUP-INLINE
    $(".js-popup-inline").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        toolbar  : false,
        smallBtn: true,
        buttons: [

        ],
    });

    //POPUP-IMAGE
    $(".js-popup-image").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        toolbar  : false,
        smallBtn: true,
        buttons: [

        ],
    });


    $('.btn-close').click(function() {
        parent.$.fancybox.close();
    })

});




$(window).resize(function () {

});

//functions
function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}