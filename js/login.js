// const agreeOpenClose = (li) => {
// 	if (!$(li + "> div > button").hasClass("openAgreeBtn")) {
// 		$(li + "> div > button").addClass("openAgreeBtn");
// 		$(li + "> div > button").text("상세내용 닫기");
// 		$(li + " .detailArea").addClass("openAgree");
// 	} else {
// 		$(li + "> div > button").removeClass("openAgreeBtn");
// 		$(li + "> div > button").text("상세내용 열기");
// 		$(li + " .detailArea").removeClass("openAgree");
// 	}
// };

// $(".agree1 > div > button").click(() => {
// 	agreeOpenClose(".agree1");
// 	console.log($(".agree1" + " .detailArea"));
// });

// const agreeOpen = (li) => {
// 	if (!$(li).hasClass("toggleOn")) {
// 		$(li ).addClass("toggleOn");
// 		$(li + "> button > span").text("상세내용 닫기");
// 		$(li + " .agree").addClass("toggleCont");
// 		$(li + " > .agree > .box").addClass("toggleInner");
// 		// $(li + "> .agree ").Attr("style","display:block");
// 		// .height(curHeight).animate({
// 		// 	height: autoHeight
// 		// }, 500);
// 	} else {
// 		$(li).removeClass("toggleOn");
// 		$(li + "> button > span").text("상세내용 열기");
// 		$(li + " .agree").removeClass("toggleCont");
// 		$(li + "> .agree > .box").removeClass("toggleInner");
// 		$(li + "> .agree > .box >notiTxt").removeClass(");
// 		$(li + "> .agree").removeAttr("style");

// 	}
// };

$("button[name='btnToggle']").click(() => {
	// agreeOpen(".toggle");
	$('.agree').slideToggle();
	console.log("dk");
});


$("button[name='btnToggletwo']").click(() => {
	// agreeOpen(".toggle");
	$('.agree2').slideToggle();
	console.log("dk");
});

// 체크선택
// 체크 선택
// $(".frm > label").click(() => {
// 	$(".frm > label").Attr("style", "background-position: 0 -13px;");
// });

function is_checked() {

	// 1. checkbox element를 찾습니다.
	const checkbox = document.getElementById('frmChk01');

	// 2. checked 속성을 체크합니다.
	const is_checked = checkbox.checked;

	// 3. 결과를 출력합니다.
	if(is_checked == true){

		document.getElementById('frmChk01').style.backgroundPosition="top right";
		console.log("ok");
	}

}











// $('.btnToggle').on('click', function () {
// 	var open = $(this).next('.toggleCont').height();
// 	var el = $('.toggleCont'),
// 		curHeight = el.height(),
// 		autoHeight = el.css('height', 'auto').height();
// 	if (open === 0) {
// 		el.height(curHeight).animate(
// 			{height: autoHeight}, 500);
// 	} else {
// 		el.animate(
// 			{height: 0}, 500);
// 	}
// });