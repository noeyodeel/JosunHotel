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

  // 객실 어메니티 버튼 클릭시 리스트 시작
  // 객실 4가지 버튼들
  const bathroom_btn = document.querySelector(".amanity_bathroom");
  const bedroom_btn = document.querySelector(".amanity_bedroom");
  const minibar_btn = document.querySelector(".amanity_minibar");
  const closet_btn = document.querySelector(".amanity_closet");

  // 객실 리스트들
  const bathroom_list = document.querySelector(".bath_room_list");
  const bedroom_list = document.querySelector(".bed_room_list");
  const minibar_list = document.querySelector(".mini_bar_list");
  const closet_list = document.querySelector(".closet_list");
  // 첫번째 bath room 버튼 클릭했을때
  document
    .querySelector(".amanity_bathroom")
    .addEventListener("click", function () {
      bathroom_list.style.display = "block";
      bedroom_list.style.display = "none";
      minibar_list.style.display = "none";
      closet_list.style.display = "none";

      bathroom_btn.style.borderTop = "1px solid black";
      bathroom_btn.style.borderLeft = "1px solid black";
      bathroom_btn.style.borderRight = "1px solid black";
      bathroom_btn.style.borderBottom = "none";

      bedroom_btn.style.borderTop = "none";
      bedroom_btn.style.borderLeft = "none";
      bedroom_btn.style.borderRight = "none";
      bedroom_btn.style.borderBottom = "1px solid black";

      minibar_btn.style.borderTop = "none";
      minibar_btn.style.borderRight = "none";
      minibar_btn.style.borderLeft = "none";
      minibar_btn.style.borderBottom = "1px solid black";

      closet_btn.style.borderLeft = "none";
      closet_btn.style.borderTop = "none";
      closet_btn.style.borderRight = "none";
      closet_btn.style.borderBottom = "1px solid black";
    });

  // 두번째 bed room 버튼 클릭했을때
  document
    .querySelector(".amanity_bedroom")
    .addEventListener("click", function () {
      bedroom_list.style.display = "block";
      bathroom_list.style.display = "none";
      minibar_list.style.display = "none";
      closet_list.style.display = "none";

      bathroom_btn.style.borderTop = "none";
      bathroom_btn.style.borderLeft = "none";
      bathroom_btn.style.borderRight = "none";
      bathroom_btn.style.borderBottom = "1px solid black";

      bedroom_btn.style.borderBottom = "none";
      bedroom_btn.style.borderTop = "1px solid black";
      bedroom_btn.style.borderRight = "1px solid black";
      bedroom_btn.style.borderLeft = "1px solid black";

      minibar_btn.style.borderTop = "none";
      minibar_btn.style.borderRight = "none";
      minibar_btn.style.borderLeft = "none";
      minibar_btn.style.borderBottom = "1px solid black";

      closet_btn.style.borderLeft = "none";
      closet_btn.style.borderTop = "none";
      closet_btn.style.borderRight = "none";
      closet_btn.style.borderBottom = "1px solid black";
    });

  // 세번째 mini bar 버튼 클릭했을때
  document
    .querySelector(".amanity_minibar")
    .addEventListener("click", function () {
      minibar_list.style.display = "block";
      bathroom_list.style.display = "none";
      bedroom_list.style.display = "none";
      closet_list.style.display = "none";

      bathroom_btn.style.borderRight = "none";
      bathroom_btn.style.borderLeft = "none";
      bathroom_btn.style.borderTop = "none";
      bathroom_btn.style.borderBottom = "1px solid black";

      bedroom_btn.style.borderTop = "none";
      bedroom_btn.style.borderLeft = "none";
      bedroom_btn.style.borderRight = "none";
      bedroom_btn.style.borderBottom = "1px solid black";

      minibar_btn.style.borderTop = "1px solid black";
      minibar_btn.style.borderRight = "1px solid black";
      minibar_btn.style.borderLeft = "1px solid black";
      minibar_btn.style.borderBottom = "none";

      closet_btn.style.borderTop = "none";
      closet_btn.style.borderRight = "none";
      closet_btn.style.borderLeft = "none";
      closet_btn.style.borderBottom = "1px solid black";
    });

  // 네번째 closet 버튼 클릭했을때
  document
    .querySelector(".amanity_closet")
    .addEventListener("click", function () {
      closet_list.style.display = "block";
      bathroom_list.style.display = "none";
      bedroom_list.style.display = "none";
      minibar_list.style.display = "none";

      bathroom_btn.style.borderTop = "none";
      bathroom_btn.style.borderRight = "none";
      bathroom_btn.style.borderLeft = "none";
      bathroom_btn.style.borderBottom = "1px solid black";

      bedroom_btn.style.borderLeft = "none";
      bedroom_btn.style.borderTop = "none";
      bedroom_btn.style.borderRight = "none";
      bedroom_btn.style.borderBottom = "1px solid black";

      minibar_btn.style.borderTop = "none";
      minibar_btn.style.borderBottom = "1px solid black";
      minibar_btn.style.borderLeft = "none";
      minibar_btn.style.borderRight = "none";

      closet_btn.style.borderTop = "1px solid black";
      closet_btn.style.borderRight = "1px solid black";
      closet_btn.style.borderLeft = "1px solid black";
      closet_btn.style.borderBottom = "none";
    });
  // 객실 어메니티 버튼 클릭시 리스트 끝
});
