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
// function categoryChange(e) {
//   var place_wes_s = [
//     "장소 선택",
//     "객실",
//     "아리아",
//     "나인스게이트",
//     "루브리카",
//     "조선델리",
//     "스시조",
//     "홍연",
//     "라운지엔바",
//     "연회",
//     "웨딩",
//     "멤버쉽",
//     "홈페이지",
//     "기타",
//   ]; //조선 서울
//   var place_wes_b = [
//     "장소 선택",
//     "객실",
//     "까밀리아",
//     "파노라마라운지",
//     "조선델리",
//     "오킴스",
//     "셔블",
//     "인룸다이닝",
//     "연회",
//     "웨딩",
//     "홈페이지",
//     "기타",
//   ]; //조선 부산
//   var place_popo_s = ["장소 선택", "객실", "더이터리", "더바", "기타"]; //포포인츠 서울역
//   var target = document.getElementById("place");

//   if (e.value == "wes_s") var d = place_wes_s;
//   else if (e.value == "wes_b") var d = place_wes_b;
//   else if (e.value == "popo_s") var d = place_popo_s;

//   target.options.length = 0;

//   for (x in d) {
//     var opt = document.createElement("option");
//     opt.value = d[x];
//     opt.innerHTML = d[x];
//     target.appendChild(opt);
//   }
// }

// 파일 추가 기능 및 삭제버튼 (~124)
class FileInputManager {
  constructor(nth_file) {
    this.HIDDEN_CLASSNAME = "hidden";

    this.input_file = $(`#file-${nth_file}`);
    this.input_file_uploadname = $(`#file-uploadname-${nth_file}`);
    this.input_file_delete = $(`#file-delete-${nth_file}`);
    //this 연결
    this.addEventListeners = this.addEventListeners.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.updateRender = this.updateRender.bind(this);
    this.syncFileName = this.syncFileName.bind(this);
    this.enableDeleteButton = this.enableDeleteButton.bind(this);
    this.disableDeleteButton = this.disableDeleteButton.bind(this);
    this.isFileSelected = this.isFileSelected.bind(this);

    this.addEventListeners();
    this.updateRender();
  }

  addEventListeners() {
    this.input_file.on("change", this.updateRender);
    this.input_file_delete.on("click", this.deleteFile);
  }

  deleteFile() {
    this.input_file.val("");
    this.updateRender();
  }

  updateRender() {
    this.syncFileName(); // 파일이름 맞춰주기
    if (this.isFileSelected()) {
      this.enableDeleteButton();
    } else {
      this.disableDeleteButton();
    }
  }

  // 페이지에 보이는 파일이름을 갱신
  syncFileName() {
    const filename = this.input_file.val();
    this.input_file_uploadname.val(filename);
  }

  isFileSelected() {
    return this.input_file.val() != "";
  }

  enableDeleteButton() {
    this.input_file_delete.removeClass(this.HIDDEN_CLASSNAME);
  }

  disableDeleteButton() {
    this.input_file_delete.addClass(this.HIDDEN_CLASSNAME);
  }
}
//페이지 로딩이 끝나면 실행시킴
window.onload = () => {
  new FileInputManager(1);
  new FileInputManager(2);
  new FileInputManager(3);
};

//개인정보
$(function () {
  $(".toggleCont").hide();
  $(".btnToggle").click(function () {
    $(".toggleCont").slideToggle("fast");
  });
});

$("#file1").on("change", function () {
  var fileName = $("#file1").val();
  $(".upload-name1").val(fileName);
});
$("#file2").on("change", function () {
  var fileName = $("#file2").val();
  $(".upload-name2").val(fileName);
});
$("#file3").on("change", function () {
  var fileName = $("#file3").val();
  $(".upload-name3").val(fileName);
});

// // 검색결과 정렬 순서 선택창 open/close
// $("button.searchSort").click(() => {
//   if (!$("button.searchSort").hasClass("open")) {
//     $("button.searchSort").addClass("open");
//     $(".option").addClass("openOption");
//   } else {
//     $("button.searchSort").removeClass("open");
//     $(".option").removeClass("openOption");
//   }
// });
