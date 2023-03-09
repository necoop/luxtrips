//Скрытие панели навигации при прокрутке вниз
let lastScrollTop = 0;
$(window).scroll(function (event) {
  let st = $(this).scrollTop();
  if (st > lastScrollTop) {
    // scroll down
    $(".fixed-top").addClass("navbar-hidden");
    $(".fixed-top").removeClass("navbar-visible");
  } else {
    // scroll up
    $(".fixed-top").addClass("navbar-visible");
    $(".fixed-top").removeClass("navbar-hidden");
  }
  lastScrollTop = st;
});

let menuTouggle = $("#menu__toggle");

//Закрываем меню при нажатии ни него
$("#menu__box li a").click(function () {
  menuTouggle[0].checked = false;
  $("body").css("overflow-y", "scroll");
  menuBox.css("transform", "translateX(100%)");
});

//Блокируем прокрутку экрана при открытом меню
let menuBox = $("#menu__box");
menuTouggle.change(function () {
  if (this.checked) {
    $("body").css("overflow-y", "hidden");
    menuBox.css("transform", "translateX(0)");
  } else {
    $("body").css("overflow-y", "scroll");
    menuBox.css("transform", "translateX(100%)");
  }
});
