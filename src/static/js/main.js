jQuery(document).ready(function($) {

  const modalWindowInit = function(){
    let hamb = $('#hamburger'),
      menu = $('#menu'),
      popup = $('#loginPopup'),
      curtain = $('.curtain'),
      loginPopup = $('.login-popup');

    hamb.click(function() {
      menu.toggleClass('menu--active');
      hamb.toggleClass('hamburger_active');
    })

    popup.on('click', function(){
      curtain.show();
      loginPopup.toggleClass('login-popup--active');
    })

    loginPopup.click(function(e){
      e.stopPropagation();
    })

    curtain.on('click', function(e){
      loginPopup.toggleClass('login-popup--active');
      $(this).hide();
    })

    $('.login-popup__close').on('click', function(e){
      e.preventDefault();
      loginPopup.toggleClass('login-popup--active');
      $(curtain).hide();
    })
  }
  


  //Smooth scroll

  const smoothScroll = function(){
  
    const moveto = new MoveTo({
      duration: 1000
    });
  
    const links = document.querySelectorAll('.menu__item a');

    links.forEach(item => {
      let scrollTo = item.getAttribute('href');

      scrollTo = scrollTo.replace('#', '');
      item.addEventListener('click', function(e){
        e.preventDefault();
        moveto.move(document.getElementById(scrollTo));
      })
    })
  }   

  const dragdropSliderInit = function(){
    $('.js-dragdrop-slider').slick({
      slidesToShow: 1,
      prevArrow: '<button type="button" class="dragdrop-slider__button dragdrop-slider__button--prev"><i class="fas fa-caret-left"></i></i></button>',
      nextArrow: '<button type="button" class="dragdrop-slider__button dragdrop-slider__button--next"><i class="fas fa-caret-right"></i></i></button>'
    })
  }


  modalWindowInit();
  smoothScroll();
  dragdropSliderInit();
})
