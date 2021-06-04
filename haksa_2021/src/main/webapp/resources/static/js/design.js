
$(function(){

	//dafault
	var $body = $("body");
	var $container = $("#container");
	
	$(window).resize(function(){
		device();
	});

	function device() {
		if($container.outerWidth() >  1007){ 
			$body.removeClass("mobile tablet").addClass("web");
			$("#gnb .menu_child div>div, #all_menu .menu_child_wrap div").removeAttr("style");
			$("#gnb .menu>li>a, #gnb .menu_child div>ul>li>a").removeClass("on");
		} 
		else if($container.outerWidth() >  743){ 
			$body.removeClass("web mobile").addClass("tablet");
		} 
		else {
			$body.removeClass("web tablet").addClass("mobile");
		};
	};
	device();
	
	$(window).scroll(function() {
		fixed_menu();
	});
	function fixed_menu() {
		if($container.outerWidth() >  1007){ 
			//lnb
			if ($(window).scrollTop() >= $("#lnb").outerHeight() - $(window).height()) {
				if($("#lnb").outerHeight() > $(window).height()) {
					$("#lnb").removeClass("fixed2").addClass("fixed");
				} else {
					$("#lnb").removeClass("fixed").addClass("fixed2");
				}
			} else {
				$("#lnb").removeClass("fixed fixed2");
			}
			//quick
			if ($(window).scrollTop() >= $("#bn_zone").outerHeight() - $(window).height()) {
				if($("#bn_zone").outerHeight() > $(window).height()) {
					$("#bn_zone").removeClass().addClass("fixed");
				} else {
					$("#bn_zone").removeClass().addClass("fixed2");
				}
			} else {
				$("#bn_zone").removeClass();
			}
			//mypage
			if($("#contents").hasClass("mypage_main")) {
				if ($(window).scrollTop() >= $(".mypage_main .info>div").outerHeight() - $(window).height()+140) {
					if($(".mypage_main .info>div").outerHeight()+140 > $(window).height()) {
						$(".mypage_main .info>div").removeClass().addClass("fixed");
					} else {
						$(".mypage_main .info>div").removeClass().addClass("fixed2");
					}
				} else {
					$(".mypage_main .info>div").removeClass();
					$("article.w").css({"min-height" : $(".mypage_main .info>div").height()});
				}
			};
			//classroom
			if($("#contents").hasClass("classroom_main")) {
				if ($(window).scrollTop() >= $(".classroom_main .history>div").outerHeight() - $(window).height()+140) {
					if($(".classroom_main .history>div").outerHeight()+140 > $(window).height()) {
						//$(".classroom_main .history>div").removeClass().addClass("fixed");
					} else {
						$(".classroom_main .history>div").removeClass().addClass("fixed2");
					}
				} else {
					$(".classroom_main .history>div").removeClass();
				}
			};
		};
	};
	fixed_menu();
	
	//메뉴활성화
	var gnbCrt1 = $(".menu>li:nth-child(" + (gnbDep1) + ")>a");
	var gnbCrt2 = $(".menu_child div:nth-child(" + (gnbDep1) + ")>ul>li:nth-child(" + (gnbDep2) + ")>a");
	var gnbCrt3 = $(".menu_child div:nth-child(" + (gnbDep1) + ")>ul>li:nth-child(" + (gnbDep2) + ") li:nth-child(" + (gnbDep3) + ")>a");
	if(gnbCrt1) gnbCrt1.addClass("on active");
	if(gnbCrt2) gnbCrt2.addClass("on active");
	if(gnbCrt3) gnbCrt3.addClass("on");

	//gnb
	$("#gnb .menu li a").click(function(){
		if($body.hasClass("web")) {
			$("#gnb .menu_child").stop(true, false).slideDown(300);
			return false;
		};
	});
	$("header").mouseleave(function(){
		if($body.hasClass("web")) {
			$("#gnb .menu_child").stop(true, false).slideUp(300);
		};
	});
	$("#gnb .gnb_close").click(function(){
		$("#gnb .menu_child").slideUp(300);
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
	if(typeof lnbDep1 == "undefined") {
		var lnbCrt1 = $("#lnb>ul>li:nth-child(" + (gnbDep2) + ")");
		if(lnbCrt1) lnbCrt1.addClass("on active").find("ul").slideDown(0);
	} else {
		var lnbCrt1 = $("#lnb>ul>li:nth-child(" + (lnbDep1) + ")");
		if(lnbCrt1) lnbCrt1.addClass("on active").find("ul").slideDown(0);
	};
	if(typeof lnbDep2 == "undefined") {
		var lnbCrt2 = $("#lnb>ul>li:nth-child(" + (gnbDep2) + ") ul li:nth-child(" + (gnbDep3) + ") a");
		if(lnbCrt2) lnbCrt2.addClass("on");
	} else {
		var lnbCrt2 = $("#lnb>ul>li:nth-child(" + (lnbDep1) + ") ul li:nth-child(" + (lnbDep2) + ") a");
		if(lnbCrt2) lnbCrt2.addClass("on");
	};


	$("#lnb").mouseleave(function(){
		setTimeout(function(){
			$("#lnb>ul>li").not(lnbCrt1).removeClass("on").find("ul").slideUp(200);
			$("#lnb>ul>li.active").addClass("on").find("ul").slideDown(200);
		},100);
		
	});

	
	//All menu
	$(".btn_menu").click(function(){
		$("#all_menu, #all_menu_bg").addClass("open");
		if($("body").hasClass("web")) {
		} else {
			if(gnbDep1 > 0) {
				if(gnbCrt1) {$("#all_menu .menu_child_wrap div:nth-child(" + (gnbDep1) + ")").fadeIn(0)};
			} else {
				$("#all_menu .menu li:nth-child(1) a").addClass("active");
				$("#all_menu .menu_child_wrap div:nth-child(1)").fadeIn(0);
			}
			$("#all_menu .menu a.active, #all_menu .menu_child li>a.active").addClass("on");
		}
		return false;
	});
	$("#all_menu .close").click(function(){
		$("#all_menu, #all_menu_bg").removeClass("open");
		$("#all_menu .menu a, #all_menu .menu_child li>a").removeClass("on");
		$("#all_menu .menu_child_wrap div").fadeOut(0);
		return false;
	});
	$("#all_menu .menu a").click(function(){
		var i = $(this).parents("li").index()+1;
		var active =$(".menu_child_wrap div:nth-child("+i+")");
		$(this).addClass("on");
		$("#all_menu .menu a").not(this).removeClass("on");
		$("#all_menu").find(active).fadeIn(200);
		$("#all_menu .menu_child>div div").not(active).fadeOut(0);
		return false;
	});
	$("#all_menu .menu_child li.child>a").click(function(){
		if($("body").hasClass("web")) {
		} else {
			$(this).toggleClass("on");
			$("#all_menu .menu_child div>ul>li>a").not(this).removeClass("on");
			return false;
		}
	});
	

	//top
	$("#bn_zone #btn_top").click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

	//tab
	$(".tabMenu button").click(function(){
		$(this).toggleClass("open").next("p").slideToggle(200);
		return false;
	});
	$(".listen_select>button").click(function(){
		$(this).toggleClass("open").next("ul").slideToggle(200);
		return false;
	});
	$(".tab_wrap>button").click(function(){
		$(this).toggleClass("open").next("ul").slideToggle(200);
		return false;
	});

	//tabArea
	$(".tabArea .tab a").click(function(){
		$($(this).attr("href")).fadeIn(300);
		$(this).addClass("on");
		$($(this).parents(".tabArea").children("div")).not($(this).attr("href")).fadeOut(0);
		$($(this).parents(".tab").find("a")).not(this).removeClass("on");
		return false;
	});
	
	

	//quick
	$(".btn_quick, header .btn_quick_ct").click(function(){
		$("#quick").toggleClass("on");
		$("body").toggleClass("quick_on");
		$("#quick_bg").fadeToggle(300);
		return false;
	});
	$("#quick .close").click(function(){
		$("#quick").removeClass("on");
		$("body").removeClass("quick_on");
		$("#quick_bg").fadeOut(300);
		return false;
	});

	//배너존
	$("#bn_zone li a[href^='#']").click(function(){
		$(this).toggleClass("on");
		$("body").toggleClass("pop");
		$("#bn_zone").toggleClass("on");
		$($(this).attr("href")).toggleClass("on");
		$("#lnb").toggleClass("off");
		$($(this).attr("href")).find(".bn_zone_bg").fadeToggle(300);
		$(".aside").not($(this).attr("href")).removeClass("on");
		return false;
	});
	//실시간채팅 mobile
	$(".btn_chatting_m").click(function(){
		$($(this).attr("href")).fadeIn(200);
		return false;
	});
	$(".aside_close").click(function(){
		$("#bn_chatting").fadeOut(200);
		return false;
	});

	//faq
	$("table.faq tr.q").click(function(){
		$(this).toggleClass("open").next(".a").slideToggle(0);
		$("table.faq tr.q").not(this).removeClass("open").next(".a").slideUp(0);
	});

	//tip
	$(".btn_tip").click(function(){
		$(this).next(".pop_tip").addClass("open");
		$(".btn_tip").not(this).next(".pop_tip").removeClass("open");
		return false;
	});
	$(".pop_tip .close").click(function(){
		$(this).parents(".pop_tip").removeClass("open");
		return false;
	});

	//높이조절
	if($("#lnb").height() > 994) {
		$("#contents article").css({"min-height" : $("#lnb").height() - 324});
	}




});