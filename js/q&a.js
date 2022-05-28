function emailCheck(val) {
  var obj = document.getElementById("email2");
  if (val == "email") {
    obj.value = "";
    obj.readOnly = false;
    obj.focus();
  } else {
    obj.value = val;
    obj.readOnly = true;
  }
}
//호텔찾기 멀티 셀렉트박스
function categoryChange(e) {
  var place_wes_s = [
    "장소 선택",
    "객실",
    "아리아",
    "나인스게이트",
    "루브리카",
    "조선델리",
    "스시조",
    "홍연",
    "라운지엔바",
    "연회",
    "웨딩",
    "멤버쉽",
    "홈페이지",
    "기타",
  ]; //조선 서울
  var place_wes_b = [
    "장소 선택",
    "객실",
    "까밀리아",
    "파노라마라운지",
    "조선델리",
    "오킴스",
    "셔블",
    "인룸다이닝",
    "연회",
    "웨딩",
    "홈페이지",
    "기타",
  ]; //조선 부산
  var place_popo_s = ["장소 선택", "객실", "더이터리", "더바", "기타"]; //포포인츠 서울역
  var target = document.getElementById("place");

  if (e.value == "wes_s") var d = place_wes_s;
  else if (e.value == "wes_b") var d = place_wes_b;
  else if (e.value == "popo_s") var d = place_popo_s;

  target.options.length = 0;

  for (x in d) {
    var opt = document.createElement("option");
    opt.value = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  }
}
//개인정보
$(function () {
  $(".toggleCont").hide();
  $(".btnToggle").click(function () {
    $(".toggleCont").slideToggle("fast");
  });
});
