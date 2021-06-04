
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
        <div class="tag_article">
            <fieldset class="searchBox">
                <p class="title_total">총 <b>111</b>건</p>
                <span class="block">
                    <select>
                        <option>전체</option>
                        <option>제목</option>
                        <option>내용</option>
                        <option>작성자</option>
                    </select>
                    <input type="text" class="txt" />
                    <button type="button" class="btn_board search">검색</button>
                </span>
            </fieldset>
            <table class="listTable">
                <caption>
                    <p>번호, 제목, 첨부파일, 작성자, 작성일, 조회수를 확인 하실 수 있는 표입니다</p>
                </caption>
                <colgroup>
                    <col width="7%" />
                    <col width="*" />
                    <col width="9%" />
                    <col width="13%" />
                    <col width="12%" />
                    <col width="8%" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">첨부파일</th>
                        <th scope="col">작성자</th>
                        <th scope="col">등록일</th>
                        <th scope="col">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="noti">
                        <td class="w"><b class="icon_noti">공지</b></td>
                        <td class="al"><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다.</a>
                            <i class="icon_new w">New</i>
                        </td>
                        <td class="file"></td>
                        <td>온라인홍보팀</td>
                        <td class="line">2017.02.24</td>
                        <td data-cell-header="조회수 :" class="line">153</td>
                    </tr>
                    <tr class="noti">
                        <td class="w"><b class="icon_noti">공지</b></td>
                        <td class="al"><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다.</a></td>
                        <td class="file"></td>
                        <td>온라인홍보팀</td>
                        <td class="line">2017.02.24</td>
                        <td data-cell-header="조회수 :" class="line">153</td>
                    </tr>
                    <tr>
                        <td class="w">10</td>
                        <td class="al"><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다.</a></td>
                        <td class="file"><a href="" class="icon_file">첨부파일<em>2</em></a></td>
                        <td>온라인홍보팀</td>
                        <td class="line">2017.02.24</td>
                        <td data-cell-header="조회수 :" class="line">50</td>
                    </tr>
                    <tr>
                        <td class="w">9</td>
                        <td class="al"><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다.</a></td>
                        <td class="file"></td>
                        <td>온라인홍보팀</td>
                        <td class="line">2017.02.24</td>
                        <td data-cell-header="조회수 :" class="line">50</td>
                    </tr>
                    <tr>
                        <td class="w">8</td>
                        <td class="al"><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다.</a></td>
                        <td class="file"><a href="" class="icon_file">첨부파일<em>1</em></a></td>
                        <td>온라인홍보팀</td>
                        <td class="line">2017.02.24</td>
                        <td data-cell-header="조회수 :" class="line">50</td>
                    </tr>
                    <tr>
                        <td class="w">7</td>
                        <td class="al"><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다.</a></td>
                        <td class="file"></td>
                        <td>온라인홍보팀</td>
                        <td class="line">2017.02.24</td>
                        <td data-cell-header="조회수 :" class="line">50</td>
                    </tr>
                    <tr>
                        <td class="w">6</td>
                        <td class="al"><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다.</a></td>
                        <td class="file"></td>
                        <td>온라인홍보팀</td>
                        <td class="line">2017.02.24</td>
                        <td data-cell-header="조회수 :" class="line">50</td>
                    </tr>
                    <tr>
                        <td class="w">5</td>
                        <td class="al"><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다.</a></td>
                        <td class="file"></td>
                        <td>온라인홍보팀</td>
                        <td class="line">2017.02.24</td>
                        <td data-cell-header="조회수 :" class="line">50</td>
                    </tr>
                    <tr>
                        <td class="w">4</td>
                        <td class="al"><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다.</a></td>
                        <td class="file"></td>
                        <td>온라인홍보팀</td>
                        <td class="line">2017.02.24</td>
                        <td data-cell-header="조회수 :" class="line">50</td>
                    </tr>
                    <tr>
                        <td class="w">3</td>
                        <td class="al"><a href="">게시물 제목이 표시되는 영역입니다. 게시물 제목이 표시되는 영역입니다.</a></td>
                        <td class="file"></td>
                        <td>온라인홍보팀</td>
                        <td class="line">2017.02.24</td>
                        <td data-cell-header="조회수 :" class="line">50</td>
                    </tr>
                </tbody>
            </table>
            <button class="mobileMore">
                더보기(1/375) +
            </button>
            <p class="pagination">
                <a href="">&lt;&lt;</a>
                <a href="">&lt;</a>
                <span>
                    <a href="" class="on">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">4</a>
                    <a href="">5</a>
                </span>
                <a href="">&gt;</a>
                <a href="">&gt;&gt;</a>
            </p>
        </div>
        <!-- //컨텐츠 -->
        </div>
        <!-- //컨텐츠 -->


<jsp:include page="/edu/inc/footer.jsp" />