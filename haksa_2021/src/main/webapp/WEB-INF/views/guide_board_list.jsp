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
		<div class="tabMenu">
			<button type="button">메뉴</button>
			<p>
				<a href="" class="on">메뉴</a>
				<a href="">메뉴</a>
				<a href="">탭메뉴는 너비에 맞게 조절됨</a>
				<a href="">메뉴</a>
				<a href="">메뉴</a>
			</p>
		</div>
		<article class="mpd0">

			<fieldset class="searchBox">
				<select>
					<option>2017년 1학기</option>
				</select>
				<select>
					<option>선택</option>
				</select>
				<span class="block">
					<select class="s1">
						<option>제목</option>
					</select>
					<input type="text" class="txt" />
					<button type="button" class="btn_board search">검색</button>
				</span>
			</fieldset>

			<!-- 181024 수정 -->
			<fieldset class="searchBox typeSel02">
				<span class="block">
					<select>
						<option>선택</option>
					</select>
					<select class="s1">
						<option>제목</option>
					</select>
					<input type="text" class="txt" />
					<button type="button" class="btn_board search">검색</button>
				</span>
			</fieldset>
			<!-- //181024 수정 -->

			<fieldset class="searchBox">
				<span class="block">
					<select>
						<option>제목</option>
					</select>
					<input type="text" class="txt" />
					<button type="button" class="btn_board search">검색</button>
				</span>
			</fieldset>


			<p class="title_total">총 <b>100</b>건</p>
			<table class="listTable" summary="게시판 요약안내입니다.">
				<colgroup><col width="7%" /><col width="*" /><col width="9%" /><col width="13%" /><col width="12%" /><col width="8%" /></colgroup>
				<thead>
				<tr>
					<th scope="col">번호</th>
					<th scope="col">제목</th>
					<th scope="col">파일</th>
					<th scope="col">작성일</th>
					<th scope="col">작성자</th>
					<th scope="col">조회수</th>
				</tr>
				</thead>
				<tbody>
				<tr class="noti">
					<td><b class="icon_noti">공지</b></td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다.</a></td>
					<td class="w"><a href="" class="icon_file">첨부파일</a></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="w">153</td>
				</tr>
				<tr class="noti required">
					<td><b class="icon_noti">필독</b></td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다.</a></td>
					<td class="w"><a href="" class="icon_file">첨부파일<em>2</em></a></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="w">50</td>
				</tr>
				<tr>
					<td>10</td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다.</a></td>
					<td class="w"><a href="" class="icon_file">첨부파일<em>2</em></a></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="w">50</td>
				</tr>
				</tbody>
			</table>
			<p class="pagination typeRow">
				<a href=""><img src="img_bvs/btn/paging1.png" alt="맨앞" /></a>
				<a href=""><img src="img_bvs/btn/paging2.png" alt="이전" /></a>
				<span>
					<a href="" class="on">1</a>
					<a href="">2</a>
					<a href="">3</a>
					<a href="">4</a>
					<a href="">5</a>
					<a href="">6</a>
					<a href="">7</a>
					<a href="">8</a>
					<a href="">9</a>
					<a href="">10</a>
				</span>
				<a href=""><img src="img_bvs/btn/paging3.png" alt="다음" /></a>
				<a href=""><img src="img_bvs/btn/paging4.png" alt="맨뒤" /></a>
			</p>
			<p class="btn_r">
				<a href="" class="mWrite red"><img src="img_bvs/btn_icon/write.png" alt="" />등록</a>
				<button type="button" class="white"><img src="img_bvs/btn_icon/del.png" alt="" />삭제</button>
			</p>

			<br /><br /><br /><br /><br />

			<fieldset class="searchBox">
				<select>
					<option>2017년 1학기</option>
				</select>
				<select>
					<option>선택</option>
				</select>
				<span class="block">
					<select class="s1">
						<option>제목</option>
					</select>
					<input type="text" class="txt" />
					<button type="button" class="btn_board search">검색</button>
				</span>
			</fieldset>
			<p class="title_total">총 <b>100</b>건</p>
			<table class="listTable" summary="게시판 요약안내입니다.">
				<colgroup><col width="5%" /><col width="7%" /><col width="12%" /><col width="*" /><col width="9%" /><col width="13%" /><col width="12%" /><col width="8%" /><col width="70px" /></colgroup>
				<thead>
				<tr>
					<th scope="col"><label><input type="checkbox" /><i></i></label></th>
					<th scope="col">번호</th>
					<th scope="col">카테고리</th>
					<th scope="col">제목</th>
					<th scope="col">파일</th>
					<th scope="col">작성일</th>
					<th scope="col">작성자</th>
					<th scope="col">조회수</th>
					<th scope="col">상태</th>
				</tr>
				</thead>
				<tbody>
				<tr class="noti check">
					<td><label><input type="checkbox" /><i></i></label></td>
					<td><b class="icon_noti">공지</b></td>
					<td>수업내용</td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다.</a></td>
					<td class="w"><a href="" class="icon_file">첨부파일</a></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="w">153</td>
					<td></td>
				</tr>
				<tr class="noti required check">
					<td><label><input type="checkbox" /><i></i></label></td>
					<td><b class="icon_noti">필독</b></td>
					<td>수업내용</td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다.</a></td>
					<td class="w"><a href="" class="icon_file">첨부파일<em>2</em></a></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="w">50</td>
					<td class="line"><span class="state blue">준비중</span></td>
				</tr>
				<tr class="check">
					<td><label><input type="checkbox" /><i></i></label></td>
					<td class="w">100</td>
					<td>자기소개/인사</td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다.</a><i class="icon_reply">댓글<em>10</em></i><i class="icon_secret">비밀글</i><i class="icon_new">N</i></td>
					<td class="w"><a href="" class="icon_file">첨부파일<em>15</em></a></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="w">50</td>
					<td class="line"><span class="state">답변완료</span></td>
				</tr>
				<tr class="comment check">
					<td><label><input type="checkbox" /><i></i></label></td>
					<td class="w">100</td>
					<td>수업내용</td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다.</a><i class="icon_reply">댓글<em>10</em></i><i class="icon_new">N</i></td>
					<td class="w"><a href="" class="icon_file">첨부파일<em>15</em></a></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="w">50</td>
					<td></td>
				</tr>
				<tr class="comment reply check">
					<td><label><input type="checkbox" /><i></i></label></td>
					<td class="w">100</td>
					<td></td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다.</a><i class="icon_new">N</i></td>
					<td class="w"></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="w">50</td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td class="w">100</td>
					<td>수업내용</td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다.</a></td>
					<td class="w"></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="line" data-cell-header="조회수 :">163</td>
					<td></td>
				</tr>
				<tr class="comment">
					<td></td>
					<td class="w">100</td>
					<td>수업내용</td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다.</a><i class="icon_reply">댓글<em>10</em></i><i class="icon_new">N</i></td>
					<td class="w"><a href="" class="icon_file">첨부파일<em>15</em></a></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="line" data-cell-header="조회수 :">163</td>
					<td></td>
				</tr>
				<tr class="comment reply">
					<td></td>
					<td class="w">100</td>
					<td></td>
					<td class="al"><a href="">강의경력 증명서를 발급 받고 싶습니다.</a><i class="icon_new">N</i></td>
					<td class="w"></td>
					<td>2017.02.24</td>
					<td class="line" data-cell-header="작성자 :">정길동[학생]</td>
					<td class="line" data-cell-header="조회수 :">163</td>
					<td></td>
				</tr>
				</tbody>
			</table>
			<p class="pagination typeRow">
				<a href=""><img src="img_bvs/btn/paging1.png" alt="맨앞" /></a>
				<a href=""><img src="img_bvs/btn/paging2.png" alt="이전" /></a>
				<span>
					<a href="" class="on">1</a>
					<a href="">2</a>
					<a href="">3</a>
					<a href="">4</a>
					<a href="">5</a>
					<a href="">6</a>
					<a href="">7</a>
					<a href="">8</a>
					<a href="">9</a>
					<a href="">10</a>
				</span>
				<a href=""><img src="img_bvs/btn/paging3.png" alt="다음" /></a>
				<a href=""><img src="img_bvs/btn/paging4.png" alt="맨뒤" /></a>
			</p>
			<p class="btn_c">
				<button type="button"><img src="img_bvs/btn_icon/check.png" alt="" />선택보기</button>
				<a href="" class="mWrite red"><img src="img_bvs/btn_icon/write.png" alt="" />등록</a>
				<button type="button" class="white"><img src="img_bvs/btn_icon/del.png" alt="" />삭제</button>
			</p>

			<br /><br /><br />

			<div class="mpd">
				<div class="tabMenu no_line">
					<button type="button">메뉴</button>
					<p>
						<a href="" class="on">메뉴</a>
						<a href="">메뉴</a>
					</p>
				</div>
				<p class="title_total">총 <b>100</b>건 <span>(확인<b>5</b>,미확인<b>2</b>)</span></p>
				<p class="btns_top">
					<a href="" class="btn_s"><img src="img_bvs/btn_icon/down_.png" alt="" />엑셀다운로드</a>
					<select class="s3">
						<option>등록일순</option>
					</select>
				</p>
				<div class="tableWrap">
					<table class="normalTable" summary="표요약 입니다.">
						<colgroup><col width="13%" /><col width="10%" /><col width="*" /><col width="*" /><col width="5%" /><col width="120px" /><col width="8%" /><col width="100px" /><col width="120px" /></colgroup>
						<thead>
						<tr>
							<th scope="col">년도/학기</th>
							<th scope="col">이수구분</th>
							<th scope="col">교과목명</th>
							<th scope="col">개설학과</th>
							<th scope="col">학점</th>
							<th scope="col">가중치</th>
							<th scope="col">미리보기</th>
							<th scope="col">채점</th>
							<th scope="col">기타</th>
						</tr>
						</thead>
						<tfoot>
						<tr>
							<td>누계</td>
							<td colspan="8" class="total"><span>신청학점 <b>18</b></span><span>취득학점 <b>18</b></span><span>평균평점 <b>3.65/4.5</b></span><span>환산점수 <b>89.2/100</b></span></td>
						</tr>
						</tfoot>
						<tbody>
						<tr>
							<td><b>2015/1학기</b></td>
							<td><b class="point_blue">전공선택</b></td>
							<td><b class="point_red">평생교육프로그램개발론</b></td>
							<td>심리학과</td>
							<td>3</td>
							<td><input type="text" class="txt t0" value="40" /> %</td>
							<td><a href="" class="btn_preview">미리보기</a></td>
							<td><a href="" class="btn_s">채점</a></td>
							<td><a href="" class="btn_s"><img src="img_bvs/btn_icon/check.png" alt="" />채점</a></td>
						</tr>
						<tr>
							<td colspan="9" class="total"><span>신청학점 <b>18</b></span><span>취득학점 <b>18</b></span><span>평균평점 <b>3.65/4.5</b></span><span>환산점수 <b>89.2/100</b></span></td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>


		</article>
	</section>

	<jsp:include page="inc_bvs/footer.jsp"/>
