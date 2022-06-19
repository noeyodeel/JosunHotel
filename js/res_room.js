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

$(document).ready(function () {
  $(".btnRes").click(function () {
    var submenu = $(this).next(".toggleCont");
    if (submenu.is(":visible")) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
});

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
  var tmp = parseInt($(".resRoomWrap .rightCont.floating").css("margin-top"));

  $(window)
    .scroll(function () {
      var scrollTop = $(window).scrollTop();
      var obj_position = scrollTop + tmp + "px";

      $(".resRoomWrap > .rightCont.floating").stop().animate(
        {
          top: obj_position,
        },
        500
      );
    })
    .scroll();
});

$(document).ready(function () {
  $(".notiContainer > .btnToggle").click(function () {
    var submenu = $(this).next(".toggleCont");
    if (submenu.is(":visible")) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
});
