jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww <= 575) {
      $('.left-nav-col').addClass('fit-viewport');
    } else if (ww >= 576) {
      $('.left-nav-col').removeClass('fit-viewport');
    };
    if (ww <= 767) {
      $('.left-nav-col').addClass('pos-fixed-top-left');
      $('.left-nav-col').addClass('hidden');
      $('.toc-header').addClass('display-flex');
      $('.left-nav-col').removeClass('display-flex');
      $('.left-nav-col').removeClass('pos-sticky');
    } else if (ww >= 768) {
      $('.left-nav-col').removeClass('pos-fixed-top-left');
      $('.left-nav-col').removeClass('hidden');
      $('.toc-header').removeClass('display-flex');
      $('.left-nav-col').addClass('display-flex');
      $('.left-nav-col').addClass('pos-sticky');
    };
    if (ww <= 991) {
      $('.right-nav-col').addClass('hidden');
    } else if (ww >= 992) {
      $('.right-nav-col').removeClass('hidden');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});





