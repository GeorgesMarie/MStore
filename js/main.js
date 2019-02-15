// Hover on Product
$(document).ready(function(){
    $(".swiper-img").mouseover(function(){
        $(".product-title").css("color", "#ff4081");
        }, function(){
        $(".price").css("color", "#ff4081");
    });
});

// Header Fix
  $(function() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('header').addClass('Header-Fix')
        // $('li a').addClass('nav-linkColor')
        // $('nav').css("padding", "0");
      } 
      if ($(this).scrollTop() < 10) {
        $('header').removeClass('Header-Fix')
        // $('li a').removeClass('nav-linkColor')
        // $('nav').css("padding", ".5rem 1rem");
      } 
  });
});
