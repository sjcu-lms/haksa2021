<jsp:include page="inc_bvs/header_root.jsp"/>
<%@ page contentType="text/html;charset=utf-8" pageEncoding="UTF-8"%>

	<script>
	var gnbDep1 = 0;
	var gnbDep2 = 0;
	var gnbDep3 = 0;
	var lnbDep1 = 7; //gnb에 해당하지 않고 왼쪽메뉴만 있을경우에만 사용
	var lnbDep2 = 3; //gnb에 해당하지 않고 왼쪽메뉴만 있을경우에만 사용
	</script>

	<jsp:include page="inc_bvs/lnb_mypage.jsp"/>

	<section id="contents">
		<hgroup>
			<h2>가이드(게시판)</h2>
				<p>
					<a href="">HOME</a>
					<span>가이드(게시판)</span>
				</p>
		</hgroup>

		<article>

			<p class="btn_c">
				<a href="/etc/pop_student_info.jsp" target="_blank" onclick="window.open(this.href, 'popName', 'scrollbars=yes, width=938, height=800'); return false">새창팝업 샘플</a>

			</p>

			<p class="btn_c">
				<a href="#bn_chatting" class="btn_chatting_m">실시간상담 모바일 팝업열기 샘플</a>
			</p>

		</article>
	</section>

	<jsp:include page="inc_bvs/footer.jsp"/>
