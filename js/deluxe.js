document.addEventListener("DOMContentLoaded", function () {
  // 모달창 띄우기 시작
  const shareBtn = document.querySelector(".share-btn");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".modal_closeBtn");

  const openModal = () => {
    modal.classList.remove("hidden");
  };
  const closeModal = () => {
    modal.classList.add("hidden");
  };

  shareBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  // 모달창 띄우기 끝

  // 하트 버튼 색 변경 시작
  const loveBtnWrap = document.getElementById("love_btn");
  const loveBtnInner = document.querySelector(".love_img");

  const changeBtn = () => {
    loveBtnInner.style.backgroundPosition = "33% 6%";
    setTimeout(function () {
      const wngud = window.confirm(
        "로그인 후, 관심 상품 담기가 가능합니다. 로그인 하시겠습니까?"
      );
      if (wngud === false || true) {
        loveBtnInner.style.backgroundPosition = "0% 0%";
      }
    }, 200);
  };

  loveBtnWrap.addEventListener("click", changeBtn);
  // 하트 버튼 색 변경 끝
});
