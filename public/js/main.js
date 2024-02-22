$("#pages-btn").on('click', function (e) {
     $(".menu").toggleClass("menu-show");
     $(".menu2").removeClass("menu-show");
     $(".menu3").removeClass("menu-show");
});

$("#pages-btn2").on('click', function (e) {
     $(".menu2").toggleClass("menu-show");
     $(".menu").removeClass("menu-show");
     $(".menu3").removeClass("menu-show");
});

$("#pages-btn3").on('click', function (e) {
     $(".menu3").toggleClass("menu-show");
     $(".menu2").removeClass("menu-show");
     $(".menu").removeClass("menu-show");
});