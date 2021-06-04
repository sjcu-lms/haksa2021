<%@ page contentType="text/html;charset=utf-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
<title>세종사이버대학교</title>
<link rel="stylesheet" href="css_bvs/default.css" />
<!--[if lt IE 9]>
<script src="js/html5shiv.js"></script>
<![endif]-->
<script src="js/jquery-1.11.3.min.js"></script>
</head>
<body id="sitemap_blind" class="typeLec">
<section>
	<header>
		<h1>세종사이버대학교</h1>
			<!--<dl>
				<dt>본 홈페이지는 시각장애우를 위한 주요 메뉴 안내 및 사이트맵 페이지 입니다.</dt>
				<dd>본 페이에서는 글자 크기 및 색상을 조절할 수 있게 하거나, 키보드만으로도 모든 정보를 이용할 수 있도록 하였습니다.<br />
				로그인 전의 메뉴는 키보드에서 해당하는 메뉴 번호를 누르시면 이동하실 수 있습니다.</dd>
			</dl>-->
			<div class="help">
				<p>
					<a href="http://portal.sjcu.ac.kr" target="_blank" title="새창으로 열림">세종사이버대학교</a>
					<a href="#none">이용안내</a>
				</p>
				<dl>
					<dt>글자크기</dt>
					<dd>
						<button id="btn_small">축소</button>
						<button id="btn_normal">기본</button>
						<button id="btn_big">확대</button>
					</dd>
				</dl>
			</div>
	</header>
	<article>
		<h2 class="skip">사이트맵</h2>
		<ul>
			<li>
				<h3><a href="http://www.naver.com">정보보호개론</a>
					<span>강의목록 입니다.</span>
					<a href="#none" class="btn_lecMain">[강의실 메인]</a>
				</h3>
				<div class="list_opt">
					<a href="#none" class="btn_lecView">강의보기</a>
					<a href="#none" class="btn_sitemap">사이트맵</a>
				</div>
				<ul class="sub">
					<li>
						<span class="tit" tabindex="0">1주차 1강</span>
						<span class="txt01">
							<span tabindex="0">동영상+WBT유형 테스트</span>
						</span>
						<span class="txt02">
							<span tabindex="0"></span>
						</span>
						<span class="txt03">
							<a tabindex="0" href="#none">다시보기</a>
						</span>
						<span class="txt04">
							<a tabindex="0" href="#none">다운로드</a>
						</span>
						<span class="txt05">
							<a tabindex="0" href="#none">MP3</a>
						</span>
						<span class="txt06">
							<span tabindex="0">35분기준-20분수강</span>
						</span>
						<span class="txt07">
							<span tabindex="0">~2018.09.16까지 출석인정</span>
						</span>
					</li>
					<li>
						<span class="tit" tabindex="0">2주차 1강</span>
						<span class="txt01">
							<span tabindex="0">액션크로마유형 테스트</span>
						</span>
						<span class="txt02">
							<span tabindex="0"></span>
						</span>
						<span class="txt03">
							<a tabindex="0" href="#none">다시보기</a>
						</span>
						<span class="txt04">
							<a tabindex="0" href="#none">다운로드</a>
						</span>
						<span class="txt05">
							<a tabindex="0" href="#none">MP3</a>
						</span>
						<span class="txt06">
							<span tabindex="0">35분기준-20분수강</span>
						</span>
						<span class="txt07">
							<span tabindex="0">~2018.09.16까지 출석인정</span>
						</span>
					</li>
					<li>
						<span class="tit" tabindex="0">2주차 2강</span>
						<span class="txt01">
							<span tabindex="0">-</span>
						</span>
						<span class="txt02">
							<span tabindex="0">출석완료</span>
						</span>
						<span class="txt03">
							<a href="#none" tabindex="0">다시보기</a>
						</span>
						<span class="txt04">
							<a href="#none" tabindex="0">다운로드</a>
						</span>
						<span class="txt05">
							<a href="#none" tabindex="0">MP3</a>
						</span>
						<span class="txt06" tabindex="0">
							<span>35분기준-100분수강</span>
						</span>
						<span class="txt07" tabindex="0">
							<span>~2018.09.16까지 출석인정</span>
						</span>
					</li>
					<li>
						<span class="tit" tabindex="0">2주차 13강</span>
						<span class="txt01">
							<span tabindex="0">중간고사</span>
						</span>
						<span class="txt02">
							<span tabindex="0">출석완료</span>
						</span>
						<span class="txt03">
							<a href="#none" tabindex="0">다시보기</a>
						</span>
						<span class="txt04">
							<a href="#none" tabindex="0">다운로드</a>
						</span>
						<span class="txt05">
							<a href="#none" tabindex="0">MP3</a>
						</span>
						<span class="txt06" tabindex="0">
							<span>35분기준-100분수강</span>
						</span>
						<span class="txt07" tabindex="0">
							<span>2018.9.1 ~2018.9.10</span>
						</span>
					</li>
				</ul>
			</li>
		</ul>

		<!-- 퀵메뉴 -->
		<!--<div class="quickMenu">
			<strong>전체메뉴</strong>
			<ul>
				<li><a href="#none">1. 마이페이지</a>
					<p></p>
				</li>
				<li><a href="#none">2. 강의실(2018년 가을학기)</a>
					<p></p>
				</li>
				<li><a href="#none">3. 이전 강의실(2018년 여름학기)</a>
					<p></p>
				</li>
				<li><a href="#none">4. 학생서비스</a>
					<p></p>
				</li>
				<li><a href="#none">5. 학생상담</a>
					<p></p>
				</li>
				<li><a href="#none">6. 학생광장</a>
					<p></p>
				</li>
			</ul>
		</div>-->
		<!-- //퀵메뉴 -->

		<p class="notice">
			본 시각장애인 사이트맵은 시각장애인 여러분이 사용하시면서 불편한 사항을 아래 메일로 의견을 주시면 좀 더 편리하게 수정해 가겠습니다.<br />
			시스템을 사용하면서 어려운 사항이나, 본 사이트맵에 더 추가할 메뉴, 기타 시스템 전체적으로 필요한 기능 등에 대한 의견을 메일로 주시면 반영해 드리겠습니다.<br />
			e-mail: <a href="mailto:webmaster@sjcu.ac.kr">webmaster@sjcu.ac.kr</a>
		</p>
	</article>
</section>

<script>
$("#btn_small").click(function(){zoomIn()});
$("#btn_normal").click(function(){zoomReset()});
$("#btn_big").click(function(){zoomOut()});
var nowZoom = 100;
function zoomIn() {
	nowZoom = nowZoom - 10;
	if(nowZoom <= 70) nowZoom = 70;
	zooms();
}


function zoomOut() {
		nowZoom = nowZoom + 20;
		if(nowZoom >= 500) nowZoom = 500;
		zooms();
}

function zoomReset(){
	nowZoom = 100;
	zooms();
}

function zooms(){
	document.body.style.zoom = nowZoom + '%';

	if(nowZoom==70){
		alert ("30%축소 되었습니다. 더 이상 축소할 수 없습니다.");
	}

	if(nowZoom==500){
		alert ("500%확대 되었습니다. 더 이상 확대할 수 없습니다.");
	}
}


$("#sitemap_blind .directLink>ul>li>a").click(function(){
	var menuLoc = $(this).parent('li').index();
	var menuMove = $("#sitemap_blind article>ul>li:nth-child(" + (menuLoc+2) +")").offset().top;
	$("html, body").animate({
		scrollTop: menuMove
	}, 200);
});
$("#sitemap_blind .quickMenu>ul>li>a").click(function(){
	var menuLoc = $(this).parent('li').index();
	var menuMove = $("#sitemap_blind article>ul>li:nth-child(" + (menuLoc+2) +")").offset().top;
	$("html, body").animate({
		scrollTop: menuMove
	}, 200);
});
$("#sitemap_blind .directLink>ul>li>a").keydown(function(e){
	if(e.keyCode == 13){
		var menuLoc = $(this).parent('li').index();
		var menuMove = $("#sitemap_blind article>ul>li:nth-child(" + (menuLoc+2) +")").offset().top;
		$("html, body").animate({
			scrollTop: menuMove
		}, 200);
		$("#sitemap_blind article>ul>li:nth-child(" + (menuLoc+2) +")").find('a').first().focus();
		return false;
	}
});
$("#sitemap_blind .quickMenu>ul>li>a").keydown(function(e){
	if(e.keyCode == 13){
		var menuLoc = $(this).parent('li').index();
		var menuMove = $("#sitemap_blind article>ul>li:nth-child(" + (menuLoc+2) +")").offset().top;
		$("html, body").animate({
			scrollTop: menuMove
		}, 200);
		$("#sitemap_blind article>ul>li:nth-child(" + (menuLoc+2) +")").find('a').first().focus();
		return false;
	}
});

$("#sitemap_blind .notice>a").keydown(function(e){
	if(e.keyCode == 9){
		$("#sitemap_blind .help").attr('tabindex','0').focus();
	}
});

/* 180914 추가 */
$("#sitemap_blind.typeLec .list_opt>.btn_lecView").keydown(function(e){
	if(e.keyCode == 13){
		var weekNum = 2; //강의 주차 입력
		$("#sitemap_blind.typeLec ul.sub>li:nth-child(" + weekNum +")").find('.tit').focus();
		return false;
	}
	if(e.keyCode == 9){
		$("#sitemap_blind.typeLec .list_opt>.btn_sitemap").focus();
		return false;
	}

});
$("#sitemap_blind.typeLec ul.sub>li:last-child>span:last-child").focusout(function(e){
	$("#sitemap_blind.typeLec .list_opt>.btn_sitemap").focus();
});
$("#sitemap_blind.typeLec .list_opt>.btn_sitemap").focusout(function(e){
	$("#sitemap_blind.typeLec .notice>a").focus();
});

</script>
</body>
</html>
