// select
const selectOpenClose = (li) => {
  if (!$(li + " button.select").hasClass("open")) {
    $(li + " button.select").addClass("open");
    $(li + " .option").addClass("openOption");
  } else {
    $(li + " button.select").removeClass("open");
    $(li + " .option").removeClass("openOption");
  }
};

$(".nationalityArea button.select").click(() => {
  selectOpenClose(".nationalityArea");
});
$(".emailArea button.select").click(() => {
  selectOpenClose(".emailArea");
});

// 약관동의
const agreeOpenClose = (li) => {
  if (!$(li + "> div > button").hasClass("openAgreeBtn")) {
    $(li + "> div > button").addClass("openAgreeBtn");
    $(li + "> div > button").text("상세내용 닫기");
    $(li + " .detailArea").addClass("openAgree");
  } else {
    $(li + "> div > button").removeClass("openAgreeBtn");
    $(li + "> div > button").text("상세내용 열기");
    $(li + " .detailArea").removeClass("openAgree");
  }
};

$(".agree1 > div > button").click(() => {
  agreeOpenClose(".agree1");
  console.log($(".agree1" + " .detailArea"));
});

function en_on() {
  $(".en").toggle();
}
