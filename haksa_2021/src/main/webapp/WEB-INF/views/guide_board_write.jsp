<jsp:include page="inc_bvs/header_root.jsp"/>
<%@ page contentType="text/html;charset=utf-8" pageEncoding="UTF-8"%>

	<script>
	var gnbDep1 = 2;
	var gnbDep2 = 2;
	var gnbDep3 = 2;
	//var lnbDep1 = 1;
	//var lnbDep2 = 2;
	</script>

	<jsp:include page="inc_bvs/lnb_classroom.jsp"/>

	<section id="contents">
		<hgroup>
			<h2>가이드(게시판 등록)</h2>
				<p>
					<a href="">HOME</a>
					<span>가이드(게시판)</span>
				</p>
		</hgroup>
		<article>
			<p class="need">필수항목</p>
			<table class="viewTable" summary="요약안내입니다.">
				<colgroup><col width="15%" /><col width="*" /></colgroup>
				<tbody>
				<tr>
					<th class="need" scope="row">년도·학기</th>
					<td>2017년도 여름학기</td>
				</tr>
				<tr>
					<th class="need" scope="row">강의</th>
					<td>심리학개론</td>
				</tr>
				<tr>
					<th class="need" scope="row">구분</th>
					<td>
						<select class="s2">
							<option>선택</option>
						</select>
						<select class="s2">
							<option>선택</option>
						</select>
					</td>
				</tr>
				<tr>
					<th class="need" scope="row">공개·비공개</th>
					<td>
						<label><input type="radio" /><i></i>공개</label>
						<label><input type="radio" checked /><i></i>비공개</label>
					</td>
				</tr>
				<tr>
					<th class="need" scope="row">상단공지</th>
					<td>
						<label><input type="radio" /><i></i>Y</label>
						<label><input type="radio" checked /><i></i>N</label>
					</td>
				</tr>
				<tr>
					<th class="need" scope="row">필독글</th>
					<td>
						<label><input type="radio" /><i></i>Y</label>
						<label><input type="radio" checked /><i></i>N</label>
					</td>
				</tr>
				<tr class="title">
					<th class="need" scope="row">제목</th>
					<td>
						<input type="text" class="txt" />
						<select>
							<option>글자색</option>
						</select>
						<label><input type="checkbox" checked /><i></i>굵게</label>
					</td>
				</tr>
				<tr>
					<th class="need" scope="row">내용</th>
					<td>**에디터위치**</td>
				</tr>
				<tr>
					<th class="need" scope="row">날짜</th>
					<td><input type="text" class="txt t2 datepicker" value="2014-01-01"></td>
				</tr>
				<tr>
					<th scope="row">첨부파일</th>
					<td>
						<span class="btn_s" style="cursor:pointer" id="IdAddFileButton"><img src="img_bvs/btn_icon/search_s.png" alt="" />파일첨부</span>
						<span class="btn_s gray" style="cursor:pointer" id="IdRemoveFileButton"><img src="img_bvs/btn_icon/del_s.png" alt="" />파일삭제</span>
						<div class="chxupload_wrapper">
							<div class="chxupload_filelist" id="IdUploadWrapper">
								<div id="IdUploadFileList">
									<div class="chxupload_upload_filename">이름</div>
									<div class="chxupload_upload_filesize">크기</div>
								</div>
								<!--list-->
								<div class="list">
									<div id="ID_UPLOAD_FILE_123.PNG"></div>
									<div class="chxupload_upload_filename"><input id="123.PNG" type="checkbox">세종사이버대학교 학습자료_1세종사이버대학교 학습자료_1.pptx</div>
									<div class="chxupload_upload_filesize">48 KB</div>
								</div>
								<!--list-->
								<div class="list">
									<div id="ID_UPLOAD_FILE_123.PNG"></div>
									<div class="chxupload_upload_filename"><input id="123.PNG" type="checkbox">123.PNG</div>
									<div class="chxupload_upload_filesize">1,248 KB</div>
								</div>
							</div>
						</div>
					</td>
				</tr>
				</tbody>
			</table>
			<p class="btn_c">
				<button type="button" class="red"><img src="img_bvs/btn_icon/write.png" alt="" />저장</button>
				<a href=""><img src="img_bvs/btn_icon/list.png" alt="" />목록</a>
			</p>
			<p class="btn_l"><a href="" class="btn_line"><img src="img_bvs/btn_icon/secret2.png" alt="" /><b>필독</b> 개인정보노출주의</a></p>
		</article>
	</section>

	<jsp:include page="inc_bvs/footer.jsp"/>
