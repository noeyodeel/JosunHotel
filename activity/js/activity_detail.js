// 내용보기 btn start
const toContent = function () {
  window.scrollTo({ left: 0, top: 969, behavior: "smooth" });
};
// 내용보기 btn end

// reservationArea fix effect start
const reservationAreaFix = function () {
  let reservationArea, winH;

  const initModule = function () {
    reservationArea = document.getElementById("reservationArea"); // target
    winH = window.innerHeight; // window창 높이

    _addEventHandlers();
  };

  const _addEventHandlers = function () {
    window.addEventListener("load", _checkPosition);
    window.addEventListener("resize", initModule);
    window.addEventListener("scroll", _checkPosition);
  };

  const _checkPosition = function () {
    let nowlocation = document.documentElement.scrollTop;
    let contentArea = document.getElementById("contentArea");
    if (nowlocation >= winH) {
      reservationArea.classList.add("fixed"); // 조건 만족시 fixed
      contentArea.classList.add("marginForFixed"); // 조건 만족시 fixed
    } else {
      reservationArea.classList.remove("fixed"); // 범위를 벗아날 경우 fixed 제거
      contentArea.classList.remove("marginForFixed"); // 범위를 벗아날 경우 fixed 제거
    }
  };

  return {
    init: initModule,
  };
};
// reservationArea fix effect end

// otherPrograms list input start
const inputLists = function (list) {
  const otherProgramLists = document.getElementById("otherProgramLists");
  // 새로운 리스트를 담을 ul
  const newLists = document.createElement("ul");

  for (let i = 0; i < list.length; ++i) {
    // 현재 페이지는 리스트에서 제외
    // 미구현

    const li = document.createElement("li");
    li.innerHTML =
      // li.innerHTML +
      '<a href="#">' +
      `<img src="${list[i].imgForOtherPrograms}" />` +
      '<div class="textContents">' +
      '<div class="title">' +
      `<p>${list[i].title}</p>` +
      "</div>" +
      '<div class="info">' +
      "<p>" +
      `${list[i].info}` +
      "</p>" +
      "</div>" +
      '<div class="date">' +
      `<p>${list[i].date}</p>` +
      "</div>" +
      '<div class="sort">' +
      `<p>${list[i].sort}</p>` +
      "</div>" +
      "</div>" +
      "</a>";

    newLists.appendChild(li);
  }
  otherProgramLists.innerHTML = newLists.innerHTML; // 리스트 교체
};
// otherPrograms list input end
