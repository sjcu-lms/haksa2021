<jsp:include page="inc_bvs/header_root.jsp"/>
<%@ page contentType="text/html;charset=utf-8" pageEncoding="UTF-8"%>

	<script>
	var gnbDep1 = 0;
	var gnbDep2 = 0;
	var gnbDep3 = 0;
	var lnbDep1 = 1;
	var lnbDep2 = 2;
	</script>

	<jsp:include page="inc_bvs/lnb_mypage.jsp"/>

	<section id="contents">
		<hgroup>
			<h2>가이드(레이어팝업)</h2>
				<p>
					<a href="">HOME</a>
					<span>가이드(레이어팝업)</span>
				</p>
		</hgroup>

		<article>
		</article>
	</section>

	<!--pop-->
	<div class="pop_wrap" id="">
		<div>
			<h2>[필독] 개인정보노출주의</h2>
			<div class="pop_ct">
				<div class="caution">
					<img src="img_bvs/icon/radius1.png" alt="" />
					<h3>개인정보 노출을 막기 위해 게시판 이용 시<br />아래사항을 반드시 지켜주세요.</h3>
						<ul class="dot_list red">
							<li>본인 또는 타인의 신상정보가 노출되지않도록 주의해주세요. (내용 또는 파일 업로드 시)</li>
							<li>향후 개인정보가 노출된 게시물이 발견될 경우 운영자가 관련된 글을 임의 삭제하게 됩니다.</li>
							<li>개인정보 보호법 제 59조3호에 의해 다른 사람의 개인정보를 유출하는 자는 5년 이하의 징역 또는 5천만원 이하의 벌금이 부과될 수 있으며, 등록된 글에 대한 법적 책임은 글쓴이에 있습니다.</li>
							<li>이용 중 본인, 또는 타인의 신상정보 발견 시 02)2204-8050로 신고해주세요.</li>
						</ul>
				</div>
			</div>
			<button type="button" class="pop_close">닫기</button>
		</div>
	</div>
	<!--/pop-->

	<jsp:include page="inc_bvs/footer.jsp"/>
