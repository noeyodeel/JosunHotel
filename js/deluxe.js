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
    }, 300);
  };

  loveBtnWrap.addEventListener("click", changeBtn);
  // 하트 버튼 색 변경 끝

  document.querySelector(".scroll_top").addEventListener("click", function () {
    const location = document.querySelector(".scroll").offsetTop;
    const menuHeight = document.querySelector(".menu_height").offsetHeight;
    window.scrollTo({
      top: location - menuHeight,
      behavior: "smooth",
    });
  });

  // 메인이미지 슬라이드 시작
  const slides = document.querySelector(".deluxe_01"); //전체 슬라이드 컨테이너
  const slideImg = document.querySelectorAll(".deluxe_01 li"); //모든 슬라이드들
  let currentIdx = 0; //현재 슬라이드 index
  const slideCount = slideImg.length; // 슬라이드 개수
  const prev = document.querySelector(".btnPrev"); //이전 버튼
  const next = document.querySelector(".btnNext"); //다음 버튼
  const slideWidth = 1400; //한개의 슬라이드 넓이

  //전체 슬라이드 컨테이너 넓이 설정
  slides.style.width = slideWidth * slideCount + "px";

  function moveSlide(num) {
    slides.style.left = -num * 1400 + "px";
    currentIdx = num;
  }

  // 왼쪽 버튼
  prev.addEventListener("click", function () {
    if (currentIdx !== 0) moveSlide(currentIdx - 1);
  });

  // 오른쪽 버튼
  next.addEventListener("click", function () {
    if (currentIdx !== slideCount - 1) {
      moveSlide(currentIdx + 1);
    }
  });
  // 메인이미지 슬라이드 끝
});
