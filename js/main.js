// Hover on Product
$(document).ready(function(){
    $(".swiper-img").mouseover(function(){
        $(".product-title").css("color", "#ff4081");
        }, function(){
        $(".price").css("color", "#ff4081");
    });
});
