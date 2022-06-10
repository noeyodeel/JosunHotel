document.addEventListener("DOMContentLoaded", function () {
  // css 변수로 줘서 love_inner버튼 포지션 현재위치잡음.
  document.documentElement.style.setProperty("--main-bg-position", "-48px");
  document.documentElement.style.setProperty("--main-bg-position2", "0px");

  // love_inner버튼 클릭시 0.3초지나고 위치 변경
  const loveinnerBtn = document.querySelectorAll(".love_inner");
  for (let i = 0; i < loveinnerBtn.length; i++) {
    loveinnerBtn[i].addEventListener("click", function (e) {
      e.target.style.setProperty("--main-bg-position", "-72px");
      e.target.style.setProperty("--main-bg-position2", "-24px");

      setTimeout(function () {
        const conFirm = window.confirm(
          "로그인 후, 관심 상품 담기가 가능합니다. 로그인 하시겠습니까?"
        );
        if (conFirm === false) {
          e.target.style.setProperty("--main-bg-position", "-48px");
          e.target.style.setProperty("--main-bg-position2", "0px");
        }
      }, 300);
    });
  }
});

function en_on() {
  $(".en").toggle();
}
