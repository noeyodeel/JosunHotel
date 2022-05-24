window.onscroll = function () {
  scrollFunction();
  scrollFunction2();
};
// 스크롤 시 헤더 바꾸는 함수
function scrollFunction() {
  if (
    //스크롤 100만큼 내렸을 때
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("nav_bar").style.top = "0"; //0인 위치에서 부터 보여줌
  } else {
    document.getElementById("nav_bar").style.top = "-300px"; //스크롤이 내려가지 않았을 때는 -300에 위치시켜서 숨김
  }
}
function scrollFunction2() {
  if (
    //스크롤 100만큼 내렸을 때
    document.body.scrollTop < 100 ||
    document.documentElement.scrollTop < 100
  ) {
    // $("#nav_bar").css("display", "none");
  }
}

$(document).ready(function () {
  //스크롤 마지막인식해서 푸터 뜨게함
  $(".wrapper").scroll(function () {
    var scrollTop = $(this).scrollTop();
    var innerHeight = $(this).innerHeight();
    var scrollHeight = $(this).prop("scrollHeight");

    if (scrollTop + innerHeight >= scrollHeight) {
      $("footer").attr("disabled", false);
    } else {
      $("footer").attr("disabled", true);
    }
  });
  //메뉴 슬라이드
  $(".mainbuilding_list_ > li > button").click(function (e) {
    e.stopPropagation();
    $(this).next($(".main_roomlist_")).slideToggle("fast");
  });
  $(".hillbuilding_list_ > li > button").click(function (e) {
    e.stopPropagation();
    $(this).next($(".hill_roomlist_")).slideToggle("fast");
  });
  //전체 네비게이션 클릭시 슬라이드- 방법1
  // $(".dropdown_new> div>button").click(function (e) {
  //   // e.stopPropagation();
  //   $(this).next($(".dc_new")).slideToggle("fast");
  // });

  //전체 네비게이션 클릭시 슬라이드- 방법2
  // $(".dm-new").click(function () {
  //   if ($(this).hasClass("active")) {
  //     $(".dc_new").css("display", "none");
  //     $(this).removeClass();
  //     $(".gnb_new").css("height", "30px");
  //   } else {
  //     $(this).addClass("active");
  //     $(".dc_new").css("display", "block");
  //     $(".gnb_new").css("height", "590px");
  //   }
  // });

  // 버튼 클릭 시 스타일 변경
  $(".mainbuilding_list_ > li > button").focus(function () {
    $(this).addClass("selec");
  });
  $(".mainbuilding_list_ > li > button").blur(function () {
    $(this).removeClass("selec");
  });

  $(".hillbuilding_list_ > li > button").focus(function () {
    $(this).addClass("selec");
  });
  $(".hillbuilding_list_ > li > button").blur(function () {
    $(this).removeClass("selec");
  });
});

// $(window).scroll(NotScrollTop0__init);
// NotScrollTop0__init();

//$("#nav_bar").css("display", "none");

// var header = document.querySelector("header"),
//   mainMenuList = document.querySelectorAll(".dropdown > a div"),
//   subMenu = document.querySelectorAll(".dropdown-content"),
//   headerHeight = header.offsetHeight,
//   subMenuHeight = 0;

// for (var i = 0; i < mainMenuList.length; i++) {
//   mainMenuList[i].addEventListener("mouseover", function () {
//     subMenuHeight = this.querySelector("ul").offsetHeight;
//     header.style.height = headerHeight + subMenuHeight + "px";
//   });
//   mainMenuList[i].addEventListener("mouseout", function () {
//     header.style.height = headerHeight + "px";
//   });
// }
