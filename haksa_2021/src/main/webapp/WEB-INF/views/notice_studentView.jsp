
<%@ page contentType="text/html;charset=utf-8" pageEncoding="UTF-8"%>

<jsp:include page="/edu/inc/index.jsp" />
<script>
    var gnbDep1 = 1;
</script>
<div class="edu_container">
    <div class="edu_contents">

        <div class="sVisual">
            <p>
                <em>Dream Come true</em>
                꿈이 현실이 되는 세종사이버평생교육원
            </p>
        </div>

        <!-- snb -->
        <div class="mobile_snb">
            <button class="on">수강신청 및 변경</button>
            <div class="btnBox"></div>
            <ul class="snb">
                <li><a href="#none">전체공지사항</a></li>
                <li><a href="#none">개인정보관리</a></li>
                <li><a href="#none">납입증명서</a></li>
                <li><a href="#none">수강신청 및 변경</a></li>
                <li><a href="#none">나의 수강과목</a></li>
            </ul>
        </div>

        <div class="snb_area">
            <h2 class="pageTit">전체공지사항</h2>

            <span class="snb_nav">
                <a href="#none">Home</a>
                <a href="#none">전체공지사항</a>
                <a href="#none">학생</a>
            </span>
        </div>
        <!-- //snb -->

        <!-- tab -->
        <div class="tab_area">
            <ul>
                <li><button><span>전체</span></button></li>
                <li class="on"><button><span>학생</span></button></li>
            </ul>
        </div>
        <!-- //tab -->

        <!-- 컨텐츠 -->
        <div class="tag_article noti_allView">
            <table class="viewTable" summary="제목, 유형, 기본점수, 제출기한, 제출양식, 내용 및 첨부파일 등을 확인하실 수 있는 표입니다.">
                <colgroup>
                    <col width="10%" />
                    <col width="6%" />
                    <col width="*" />
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row" colspan="2">제목</th>
                        <td>게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는
                            영역입니다.</td>
                    </tr>
                    <tr>
                        <th scope="row" colspan="2">작성자</th>
                        <td>관리자</td>
                    </tr>
                    <tr>
                        <th scope="row" colspan="2">등록일</th>
                        <td>2019.01.01</td>
                    </tr>
                    <tr>
                        <th scope="row" colspan="2">조회수</th>
                        <td>123</td>
                    </tr>
                    <tr>
                        <th scope="row" colspan="2">내용</th>
                        <td>
                            내용입니다.<br>
                            내용입니다.<br>
                            내용입니다.<br>
                            내용입니다.<br>
                            내용입니다.<br>
                            내용입니다.
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" colspan="2">첨부파일</th>
                        <td>
                            <ul class="file_list">
                                <li><img src="../img_bvs/icon/file_ppt.png" alt="" /><a href="">첨부파일_1.pptx(149.8kb)</a>
                                </li>
                                <li><img src="../img_bvs/icon/file_exel.png" alt="" /><a href="">첨부파일_2.xlsx(49.8kb)</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="btn_c">
                <a href=""><img src="../img_bvs/btn_icon/list.png" alt="목록" />목록</a>
                <a href="" class="red"><img src="../img_bvs/btn_icon/modify.png" alt="수정" />수정</a>
                <button type="button" class="white"><img src="../img_bvs/btn_icon/del.png" alt="삭제" />삭제</button>
            </p>

            <ul class="more_list">
                <li><b>이전글</b><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 </a>
                </li>
                <li><b>다음글</b>게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 </a>
                </li>
            </ul>

        </div>
        <!-- //컨텐츠 -->



<jsp:include page="/edu/inc/footer.jsp" />