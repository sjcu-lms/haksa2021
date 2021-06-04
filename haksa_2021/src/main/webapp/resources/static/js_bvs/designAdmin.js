
$(function(){

	//dafault
	var $body = $("body");
	var $container = $("#container");
	
	//gnb
	$("#gnb .menu li a").hover(function(){
		if($body.hasClass("web")) {
			$("#gnb .menu_child").stop(true, false).slideDown(300);
		};
	});
	$("header").mouseleave(function(){
		if($body.hasClass("web")) {
			$("#gnb .menu_child").stop(true, false).slideUp(300);
		};
	});
	
	$(".menu_child ul").parents("li").addClass("child");
	$("#gnb .menu li a").click(function(){
		if($body.hasClass("web")) {
		} else {
			var i = $(this).parents("li").index()+1;
			var active =$("#gnb .menu_child_wrap div:nth-child("+i+")");
			
			if(active.hasClass("open")) {
				$("#gnb").removeClass("open");
				$(this).removeClass("on");
				active.removeClass("open").fadeOut(0);
				$("#gnb .menu_child div>ul>li>a").removeClass("on");
				$("#gnb .menu_child div>ul>li>a.active").addClass("on");
			} else {
				$("#gnb").addClass("open");
				$(this).addClass("on");
				$("#gnb .menu a").not(this).removeClass("on");
				active.addClass("open").fadeIn(0);
				$("#gnb .menu_child>div div").not(active).removeClass("open").fadeOut(0);
			}
			return false;
		};
	});
	$("#gnb .menu_child li.child>a").click(function(){
		if($body.hasClass("web")) {
		} else {
			$(this).toggleClass("on");
			$("#gnb .menu_child_wrap div>ul>li>a").not(this).removeClass("on");
			return false;
		};
	});
	
	//lnb
	$("#lnb ul ul").parents("li").addClass("child");
	$("#lnb>ul>li.child>a").click(function(){
		$(this).parent().toggleClass("on").find("ul").slideToggle(200);
		$("#lnb>ul>li>a").not(this).parent().removeClass("on").find("ul").slideUp(200);
		return false;
	});
});