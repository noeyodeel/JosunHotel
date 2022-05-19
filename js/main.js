//기본 스크롤 이벤트 제거
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
//참조하는 요소 미리 탐색 및 선언
var $html = $("html");

var page = 1; //뷰포트에 표시되는 페이지의 번호

var lastPage = $(".content").length; //마지막 페이지의 번호

$html.animate({ scrollTop: 0 }, 10); //문서(페이지)가 로드되면 첫 페이지 시작

//휠 움직이면 페이지 바뀜
$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });

  // 스크롤 내릴 시 top_bar 안보이게
  if (page > 1) {
    $(".top_bar").css("display", "none");
  } else {
    $(".top_bar").css("display", "block");
  }
  // 스크롤 내릴 시 res_bar 안보이게
  if (page > 1) {
    $(".res_bar").css("display", "none");
  } else {
    $(".res_bar").css("display", "flex");
  }
});

// 달력 api 사용
$("#calendar").fullCalendar({
  googleCalendarApiKey: "AIzaSyAy-8yEFSYYeDLybdvsPPQ-Z0dRrf9Tiqk", //API key
  header: {
    left: "",
    center: "prev, title, next",
    // right: 'month, basicWeek, agendaDay'
    right: "",
  },
  monthYearFormat: "MMMM YYYY",
  ventLimit: true,
  fixedWeekCount: false,
  defaultView: "month",
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
  buttonText: {
    today: "오늘",
    month: "월별",
    week: "주별",
    day: "일별",
  },
});

//----------- 오른쪽으로 슬라이드
// setInterval(function () {
//   $(".swiper-container > ul").delay(2500);
//   $(".swiper-container > ul").animate({ marginLeft: "-1200px" });
//   $(".swiper-container > ul").delay(2500);
//   $(".swiper-container > ul").animate({ marginLeft: "-2400px" });
//   $(".swiper-container > ul").delay(2500);
//   $(".swiper-container > ul").animate({ marginLeft: "0px" });
// });

//import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";
// 일반 swiper 설정 예시
// var mySwiper = new Swiper(".swiper-container", {
//   slidesPerView: "1", // 한 슬라이드에 보여줄 갯수
//   spaceBetween: 0, // 슬라이드 사이 여백
//   loop: true, // 슬라이드 반복 여부
//   loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
//   pagination: false, // pager 여부
//   allowTouchMove: true, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
//   autoplay: {
//     // 자동 슬라이드 설정 , 비 활성화 시 false
//     delay: 1, // 시간 설정
//     disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
//   },
// });

// const slide = new Swiper("#room_slide", {
//   slidesPerView: "1", // 한 슬라이드에 보여줄 갯수
//   spaceBetween: 0, // 슬라이드 사이 여백
//   loop: true, // 슬라이드 반복 여부
//   loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
//   pagination: false, // pager 여부
//   allowTouchMove: true, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
//   autoplay: {
//     // 자동 슬라이드 설정 , 비 활성화 시 false
//     delay: 1, // 시간 설정
//     disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
//   },
// navigation: {
//   // 버튼 사용자 지정
//   nextEl: ".swiper-button-next",
//   prevEl: ".swiper-button-prev",
// },
// });

// .slidePrev(index, speed, runCallbacks) // 이전 슬라이드로 이동
// .slideNext(index, speed, runCallbacks); // 다음 슬라이드로 이동

// swiper가 초기화 된 후 동작합니다.
// var mySwiper = new Swiper('.swiper-container', {
//   // ...
// });
// mySwiper.on('init', function () {
//   console.log('slide가 초기화 설정을 마친 후 실행');
// });
