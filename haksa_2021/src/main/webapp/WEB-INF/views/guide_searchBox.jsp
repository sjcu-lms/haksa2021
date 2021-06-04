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
			<h2>가이드(게시판)</h2>
				<p>
					<a href="">HOME</a>
					<span>가이드(게시판)</span>
				</p>
		</hgroup>
		<article>



			<fieldset class="searchBoxBg">
				<select class="sl1">
					<option>이름</option>
				</select>
				<input type="text" class="txt tx1" />
				<label><input type="checkbox" /><i></i>확인</label>
				<label><input type="checkbox" checked /><i></i>미확인</label>
				<button type="button" class="btn_search">검색</button>
			</fieldset>

			<fieldset class="searchBoxBg">
				<select class="sl1">
					<option>구분값</option>
				</select>
				<select class="sl1">
					<option>구분값</option>
				</select>
				<input type="text" class="txt tx2" />
				<label><input type="checkbox" /><i></i>확인</label>
				<label><input type="checkbox" checked /><i></i>미확인</label>
				<button type="button" class="btn_search">검색</button>
			</fieldset>

			<fieldset class="searchBoxBg">
				<span class="block">
					<b>교과목명</b>
					<select class="sl2">
						<option>전체</option>
					</select>
				</span>
				<span class="block">
					<b>분류</b>
					<select class="sl2">
						<option>전체</option>
					</select>
				</span>
				<span class="block">
					<b>신청자</b>
					<input type="text" class="txt tx3" />
				</span>
				<p>
					<span class="block">
						<b>제목 + 내용</b>
						<input type="text" class="txt tx4" />
					</span>
					<span class="block">
						<b>상태</b>
						<label><input type="checkbox" /><i></i>신청</label>
						<label><input type="checkbox" checked /><i></i>완료</label>
					</span>
				</p>
				<button type="button" class="btn_search">검색</button>
			</fieldset>

			<fieldset class="searchBoxBg">
				<span class="block">
					<b>분류</b>
					<select class="sl3">
						<option>전체</option>
					</select>
					<select class="sl3">
						<option>전체</option>
					</select>
					<select class="sl3">
						<option>전체</option>
					</select>
				</span>
				<span class="block">
					<b>신청자</b>
					<input type="text" class="txt tx3" />
				</span>
				<p>
					<span class="block">
						<b>제목 + 내용</b>
						<input type="text" class="txt tx4" />
					</span>
					<span class="block">
						<b>상태</b>
						<label><input type="checkbox" /><i></i>신청</label>
						<label><input type="checkbox" checked /><i></i>완료</label>
					</span>
				</p>
				<button type="button" class="btn_search">검색</button>
			</fieldset>

			<fieldset class="searchBoxBg">
				<span class="block">
					<b>카테고리</b>
					<select class="sl4">
						<option>전체</option>
					</select>
				</span>
					<span class="block">
					<b>구분</b>
					<select class="sl4">
						<option>전체</option>
					</select>
				</span>
				<p>
					<label><input type="checkbox" /><i></i>작성자</label>
					<label><input type="checkbox" checked /><i></i>제목</label>
					<label><input type="checkbox" /><i></i>내용</label>
					<input type="text" class="txt tx5" />
					<span class="block tblock">
						<b>답변상태</b>
						<label><input type="checkbox" /><i></i>준비중</label>
						<label><input type="checkbox" checked /><i></i>답변완료</label>
					</span>
				</p>
				<button type="button" class="btn_search">검색</button>
			</fieldset>

			<fieldset class="searchBoxBg">
				<span class="block">
					<b>학적상태</b>
					<select class="sl0">
						<option>전체</option>
					</select>
				</span>
				<span class="block">
					<b>학부</b>
					<select class="sl1">
						<option>경영학부</option>
					</select>
				</span>
				<span class="block tblock">
					<b>학과</b>
					<select class="sl5">
						<option>세무회계화</option>
					</select>
				</span>
				<p>
					<span class="block">
						<b>학년</b>
						<select class="sl2">
							<option>전체</option>
						</select>
					</span>
					<span class="block">
						<b>학번</b>
						<input type="text" class="txt tx6" />
					</span>
					<span class="block">
						<b>성명</b>
						<input type="text" class="txt tx6" />
					</span>
				</p>
				<button type="button" class="btn_search">검색</button>
			</fieldset>

			<fieldset class="searchBoxBg">
				<span class="block">
					<b>학과</b>
					<select class="sl5">
						<option>세무회계화</option>
					</select>
				</span>
				<span class="block">
					<b>학생구분</b>
					<select class="sl0">
						<option>전체</option>
					</select>
				</span>
				<span class="block">
					<b>입학구분</b>
					<select class="sl0">
						<option>전체</option>
					</select>
				</span>
				<p>
					<span class="block">
						<b>학적상태</b>
						<select class="sl0">
							<option>전체</option>
						</select>
					</span>
					<span class="block">
						<b>학년</b>
						<select class="sl0">
							<option>전체</option>
						</select>
					</span>
					<span class="block">
						<b>학번</b>
						<input type="text" class="txt tx8" />
					</span>
					<span class="block">
						<b>성명</b>
						<input type="text" class="txt tx8" />
					</span>
				</p>
				<button type="button" class="btn_search">검색</button>
			</fieldset>

			<fieldset class="searchBoxBg">
				<span class="block">
					<b>교과목명</b>
					<select class="sl4">
						<option>전체</option>
					</select>
				</span>
				<span class="block">
					<b>학적상태</b>
					<select class="sl5">
						<option>전체</option>
					</select>
				</span>
				<p>
					<span class="block">
						<b>학부</b>
						<select class="sl4">
							<option>경영학부</option>
						</select>
					</span>
					<span class="block">
						<b>학과</b>
						<select class="sl4">
							<option>세무회계화</option>
						</select>
					</span>
				</p>
				<p>
					<span class="block">
						<b>학년</b>
						<select class="sl2">
							<option>전체</option>
						</select>
					</span>
					<span class="block">
						<b>학번</b>
						<input type="text" class="txt tx6" />
					</span>
					<span class="block">
						<b>성명</b>
						<input type="text" class="txt tx6" />
					</span>
				</p>
				<button type="button" class="btn_search">검색</button>
			</fieldset>

			<fieldset class="searchBoxBg no_btn">
				<span class="block">
					<select class="sl3">
						<option>2017년 1학기</option>
					</select>
					<select class="sl3">
						<option>경영전략론</option>
					</select>
				</span>
				<p class="tstyle1">
					<span class="block">
						<b>분류</b>
						<select class="sl1">
							<option>전체</option>
						</select>
					</span>
					<span class="block">
						<b>제목 + 내용</b>
						<input type="text" class="txt tx5" />
					</span>
					<span class="block tblock">
						<b>상태</b>
						<label><input type="checkbox" /><i></i>신청</label>
						<label><input type="checkbox" checked /><i></i>완료</label>
					</span>
					<button type="button" class="btn_search">검색</button>
				</p>
			</fieldset>

			<fieldset class="searchBoxBg">
				<span class="block">
					<b>신청년도</b>
					<select class="sl0">
						<option>2017</option>
					</select>
				</span>
				<span class="block">
					<b>학부/과</b>
					<select class="sl5">
						<option>세무회계화</option>
					</select>
				</span>
				<p>
					<span class="block tblock2">
						<b>교과목명</b>
						<input type="text" class="txt tx7" />
					</span>
					<span class="block">
						<b>학년</b>
						<select class="sl0">
							<option>전체</option>
						</select>
					</span>
					<span class="block">
						<b>학기</b>
						<select class="sl0">
							<option>전체</option>
						</select>
					</span>
				</p>
				<button type="button" class="btn_search">검색</button>
			</fieldset>

			<fieldset class="searchBoxBg no_title">
				<span class="block">
					<select class="sl3">
						<option>구분값</option>
					</select>
				</span>
				<span class="block">
					<select class="sl5">
						<option>구분값</option>
					</select>
				</span>
				<a href="" class="btn_s red">강좌메인<img src="img_bvs/btn_icon/list.png" alt=""></a>
			</fieldset>

			<p class="select_area">
				<select class="s3">
					<option>IT학부</option>
				</select>
				<select class="s2">
					<option>컴퓨터소프웨어공학과</option>
				</select>
			</p>

			<p class="select_area ar">
				<select class="s3">
					<option>IT학부</option>
				</select>
				<select class="s2">
					<option>컴퓨터소프웨어공학과</option>
				</select>
			</p>

			<p class="select_area">
				<select class="s3">
					<option>2017년 1학기</option>
				</select>
				<select class="s3">
					<option>경영전략론</option>
				</select>
			</p>

		</article>
	</section>

	<jsp:include page="inc_bvs/footer.jsp"/>
