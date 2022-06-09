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
	$( '.agree' ).toggle( );
	console.log("dk");
});


$("button[name='btnToggletwo']").click(() => {
	// agreeOpen(".toggle");
	$( '.agree2' ).toggle( );
	console.log("dk");
});











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


