$(document).ready(function () {
  $(".btnToggle").click(function () {
    var submenu = $(this).next(".toggleCont");
    if (submenu.is(":visible")) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
});

function toggleClass1() {
  document.getElementById("toggle1").classList.toggle("toggleOn");
}

function toggleClass2() {
  document.getElementById("toggle2").classList.toggle("toggleOn");
}

function toggleClass2() {
  document.getElementById("room2").classList.toggle("toggleOn");
}

function test1() {
  var con = document.getElementById("roomcontainer01");
  con.style.display = "block";
  var con = document.getElementById("tab01");
  con.className = "on";
  var con = document.getElementById("roomcontainer02");
  con.style.display = "none";
  var con = document.getElementById("tab02");
  con.className = "";
  var con = document.getElementById("roomcontainer03");
  con.style.display = "none";
  var con = document.getElementById("tab03");
  con.className = "";
}

function test2() {
  var con = document.getElementById("roomcontainer01");
  con.style.display = "none";
  var con = document.getElementById("tab01");
  con.className = "";
  var con = document.getElementById("roomcontainer02");
  con.style.display = "block";
  var con = document.getElementById("tab02");
  con.className = "on";
  var con = document.getElementById("roomcontainer03");
  con.style.display = "none";
  var con = document.getElementById("tab03");
  con.className = "";
}

function test3() {
  var con = document.getElementById("roomcontainer01");
  con.style.display = "none";
  var con = document.getElementById("tab01");
  con.className = "";
  var con = document.getElementById("roomcontainer02");
  con.style.display = "none";
  var con = document.getElementById("tab02");
  con.className = "";
  var con = document.getElementById("roomcontainer03");
  con.style.display = "block";
  var con = document.getElementById("tab03");
  con.className = "on";
}

// 플로팅 버튼
$(document).ready(function () {
  // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
  var floatPosition = parseInt($(".rightCont").css("top")),
    $banner = $(".rightCont");

  $(window)
    .scroll(function () {
      // 현재 스크롤 위치를 가져온다.
      var scrollTop = $(window).scrollTop();
      var newPosition = scrollTop + floatPosition + "px";

      $(".rightCont").stop().animate(
        {
          top: newPosition,
        },
        1000
      );
    })
    .scroll();
});

// reserve 버튼

$(document).ready(function () {
  $(".roomContainer .btnToggle").click(function () {
    var submenu = $(".roomContainer .toggleCont");
    if (submenu.is(":visible")) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
});

function toggleClass4() {
  document.getElementById("room0").classList.toggle("toggleOn");
}

function toggleClass5() {
  document.getElementById("agreeCont").classList.toggle("toggleOn");
}

function toggleClass6() {
  document.getElementById("diningStep1").classList.toggle("toggleOn");
}

// 카운트
function count1(type) {
  // 결과를 표시할 element
  const resultElement = document.querySelector(".adult");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    number = parseInt(number) - 1;
  }

  // 결과 출력
  resultElement.innerText = number;
}

function count2(type) {
  // 결과를 표시할 element
  const resultElement = document.querySelector(".child");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    number = parseInt(number) - 1;
  }

  // 결과 출력
  resultElement.innerText = number;
}

// 이미지 슬라이드

$(function () {
  var $slider = $(".swipeCont"),
    $firstSlide = $slider
      .find("li")
      .first() // 첫번째 슬라이드
      .stop(true)
      .animate({ opacity: 1 }, 200); // 첫번째 슬라이드만 보이게 하기

  // var indicator = $slider.find(".indicator");

  // indicator.html(indicatorHtml);

  // // 슬라이드 이동 함수
  // function goToSlide(index) {
  //   slideGroup.animate({ left: -100 * index + "%" }, duration, easing);
  //   currentIndex = index;
  // }

  // // indicator 이동
  // indicator.find("button").click(function () {
  //   var idx = $(this).index();
  //   goToSlide(idx);
  // });

  function PrevSlide() {
    // 이전버튼 함수
    var $lastSlide = $slider
      .find("li")
      .last() //마지막 슬라이드
      .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기
    $secondSlide = $slider
      .find("li")
      .eq(1) //두 번째 슬라이드 구하기
      .stop(true)
      .animate({ opacity: 0 }, 400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
    $firstSlide = $slider
      .find("li")
      .first() //맨 처음 슬라이드 다시 구하기
      .stop(true)
      .animate({ opacity: 1 }, 400); //새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
  }

  function NextSlide() {
    // 다음 버튼 함수
    $firstSlide = $slider
      .find("li")
      .first() // 첫 번째 슬라이드
      .appendTo($slider); // 맨 마지막으로 보내기
    var $lastSlide = $slider
      .find("li")
      .last() // 맨 마지막으로 보낸 슬라이드
      .stop(true)
      .animate({ opacity: 0 }, 400); // fadeOut시키기
    $firstSlide = $slider
      .find("li")
      .first() // 맨 처음 슬라이드
      .stop(true)
      .animate({ opacity: 1 }, 400); // fadeIn 시키기
  }

  $(".btnNext").on("click", function () {
    //다음버튼 클릭
    NextSlide();
  });
  $(".btnPrev").on("click", function () {
    //이전 버튼 클릭
    PrevSlide();
  });
});

// datepicker
$(function () {
  $("#diningCal").datepicker({
    inline: true,
    showOtherMonths: true,
    dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNames: [
      ". 01",
      ". 02",
      ". 03",
      ". 04",
      ". 05",
      ". 06",
      ". 07",
      ". 08",
      ". 09",
      ". 10",
      ". 11",
      ". 12",
    ],
    showMonthAfterYear: true,
  });
});

function off() {
  $(".rightCont.alert .alertText").hide();
  document.getElementById("alert").classList.remove("alert");
}

$("").click(function () {
  var id_check = $(this).attr("id");
});
