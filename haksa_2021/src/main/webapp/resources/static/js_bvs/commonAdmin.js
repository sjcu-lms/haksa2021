var dupSubmit = false;
function fn_dupSubmitCheck(){
	if(dupSubmit){
		return dupSubmit;
	}else{
		dupSubmit = true;
		return false;
	}
}

var fileObj = {};
//var fileBuffer=[];
function fn_checkAttfile(obj,limit,ul_file,objNm){
	
	if(!objNm) objNm = 'p_temp_upfile';
	var temp_files = $(obj).get(0).files;
	fileObj[objNm] = temp_files;
	//Array.prototype.push.apply( fileObj[objNm], temp_files ); // <-- here
	
	var new_file_cnt = $(temp_files).length;
	var old_file_cnt = 0;
	if(ul_file){
		old_file_cnt = $(obj).parent().parent().find("#"+ul_file).find("li").length;
	}else{
		old_file_cnt = $(obj).parent().parent().find("#now_file_list li").length;
		if($(obj).parent().parent().find("#pre_file_list li").length){
			old_file_cnt += $(obj).parent().parent().find("#pre_file_list li").find("input:checkbox:not(:checked)").length;
		}
	}
	var names = [];
	var sizes = [];
	var newList = [];
	var file_cnt_over_flag = false;
	var att_stop = 0;
    for (var i = 0; i < new_file_cnt; ++i) {
    	if(old_file_cnt+(i+1)>limit){
    		if(file_cnt_over_flag!=true){
    			att_stop = i;
    		}
    		fileObj[objNm] = new Array(fileObj[objNm]).splice(att_stop,1); 
    		file_cnt_over_flag = true;
    	}else{
    		names.push($(obj).get(0).files[i].name);
    		sizes.push((Math.round(($(obj).get(0).files[i].size)* 100 / 1024)/100).toString()+" kb");
    	}
    }
    
    if(file_cnt_over_flag){
    	alert("첨부파일은 "+limit+"개 까지만 가능합니다.");
    	alert(temp_files[temp_files.length-1].empty());
    	return;
    }
    
    var ext = "|acb|bmp|doc|exel|gif|hwp|ie|jpg|mp3|png|ppt|text|word|zip|";
	var ext_img = "";
	var ext_val = "";
    for(var j = 0; j < names.length; j++){
    	var ext_cnt = names[j].lastIndexOf('.');
    	if(ext_cnt>0&&ext_cnt<(names[j].length-1)){
        	ext_val = names[j].substring(ext_cnt+1).toLowerCase();
        }
    	if("ppt"==ext_val||"pptx"==ext_val){
        	ext_val = "ppt";
        }else if("xls"==ext_val||"xlsx"==ext_val){
        	ext_val = "exel";
        }else if("txt"==ext_val||"text"==ext_val){
        	ext_val = "text";
        }else if("html"==ext_val||"htm"==ext_val){
        	ext_val = "ie";
        }else if("docx"==ext_val||"doc"==ext_val){
        	ext_val = "doc";
        }
    	if(ext.indexOf("|"+ext_val+"|")>0){
    		ext_img = "<img src=\"/img_bvs/icon/file_"+ext_val+".png\" alt=\"\" />";	                					             
        }else{
        	ext_img = "";
        }
    	
    	var att_file = "<li>"+ext_img+names[j]+" ( "+sizes[j]+" )<button type=\"button\" onclick=\"fn_deleteAttFile($(this).parent(),'"+objNm+"')\">삭제</button></li>"
    	if(ul_file){
    		$(obj).parent().parent().find("#"+ul_file).append(att_file);
    	}else{
    		$(obj).parent().parent().find("#now_file_list").append(att_file);
    	}
    }
}

function fn_deleteAttFile(obj,tNm){
	var file_obj = $(obj).parent().parent().find("input[type=file]");
	var index_val = $(obj).index();
	var newList = [];
	
	for(var i = 0 ; i < fileObj[tNm].length ; i++){
		if(i==index_val){
			fileObj[tNm] = new Array(fileObj[tNm]).splice(index_val,1); 
		}
		if(i!=index_val) {
	        newList.push(files.item(i));
	    }
	}
	$(file_obj).val(newList);
	$(obj).remove();
}

function fn_xhrSubmit(action,obj_form){
	var formData = new FormData(obj_form);
	var fileObjKey = Object.keys(fileObj);
	if(fileObjKey.length == 1 && fileObjKey[0] == 'p_temp_upfile'){
		for(var i=0;i<fileObj['p_temp_upfile'].length;i++){
			var file = fileObj['p_temp_upfile'].item(i);
			formData.append('p_upfile', file);
			//$(document.form1).find("input[name=p_temp_upfile]").val('');
		}
	}else{
		for(var j=0 ; j < fileObjKey.length; j++){
			for(var i=0;i<fileObj[fileObjKey[j]].length;i++){
				var file = fileObj[fileObjKey[j]].item(i);
				formData.append(fileObjKey[j], file);
				//$(document.form1).find("input[name="+fileObjKey[j]+"]").val('');
			}
		}
	}
	
	$(document.form1).find("input[name=p_temp_upfile]").each(function(){
		$(this).val("");
	});

	var xhr = new XMLHttpRequest()
    xhr.open('POST', action, true);
    xhr.responseType = 'text';
    xhr.addEventListener('load', function (evt) {
        var response = '';
        if (this.status === 200) {
            response = this.response.replace(/^\s*/g, '').replace(/\s*$/g, '');
            document.write(response);
        } else {
            alert('HTTP 오류: ' + xhr.status);
        }
    });
    xhr.send(formData);
}


//?? ???? ??
var target;

function MiniCal(jucke) {
target=jucke
x = (document.layers) ? loc.pageX : event.clientX;
y = (document.layers) ? loc.pageY : event.clientY;
minical.style.pixelTop  = y-0;
minical.style.pixelLeft  = x-50;

//	showControl(minical);
minical.style.display = (minical.style.display == "block") ? "none" : "block";
Show_cal(0,0,0)
}

var stime
function doOver() {
var el = window.event.srcElement;
cal_Day = el.title;

if (cal_Day.length > 7) {
 el.style.borderTopColor = el.style.borderLeftColor = "buttonhighlight";
 el.style.borderRightColor = el.style.borderBottomColor = "buttonshadow";
}
window.clearTimeout(stime);
}

function doClick() {
cal_Day = window.event.srcElement.title;
window.event.srcElement.style.borderColor = "red";
if (cal_Day.length > 7) {
 target.value=cal_Day
}
}

function doOut() {
var el = window.event.fromElement;
cal_Day = el.title;

if (cal_Day.length > 7) {
 el.style.borderColor = "white";
}
stime=window.setTimeout("minical.style.display='none';", 10);
}

//?? ???? ?

function SendMail(urlstr) {
var popWnd = urlstr ;
window.open(popWnd, "sendmail", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=auto,resizable=no,copyhistory=yes,width=900,height=600");
}

function userinfo(url){
window.open(url, "userinfo", "toolbar=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=562,height=285,top=0,left=0");
}

function imageOn(i)
{
eval('document.img'+i+'.src=images['+i+'][1].src');
}

function imageOff(i)
{
eval('document.img'+i+'.src=images['+i+'][0].src');
}

function logout()
{
if (confirm("??? ?????????"))
{
 top.location="logout.jsp";
}
}

function num_max_chk(data, data1)
{
for (var i = 0 ;i < data.value.length ;i++ )
{
 if ((data.value.substring(i,i+1) < "0" || data.value.substring(i,i+1) > "9" ))
 {
   alert("??? ???????.");
   data.focus();
   return;
 }
}

if (parseInt(data.value,10) > parseInt(data1,10))
{
 alert("???? ???? ??????.");
 data.focus();
 return;
}
}

function quotation_chk()
{
var data;
var sum_str = "";

for ( var k = 0 ; k < document.forms.length ; k++ )
{
 for ( var j = 0 ; j < document.forms[k].elements.length ;j++)
 {
   if ( document.forms[k].elements[j].type == "text" || document.forms[k].elements[j].type == "textarea" )
   {
     data = document.forms[k].elements[j].value;
     sum_str = "";
   
     for ( var i = 0 ; i < data.length ;i++)
     {
       if ( data.substring(i,i+1) == "'" )
       {
         sum_str = sum_str + "?";
       }
       else if ( data.substring(i,i+1) == "\"" )
       {
         sum_str = sum_str + "?";
       }
       else
       {
         sum_str = sum_str + data.substring(i,i+1);
       }
     }  
     document.forms[k].elements[j].value = sum_str;
   }
 }
}
}


function numeric_chk(data)
{
for (var i = 0 ;i < data.value.length ;i++ )
{
 if ((data.value.substring(i,i+1) < "0" || data.value.substring(i,i+1) > "9" ))
 {
   alert("숫자만 입력가능합니다.");
   data.value = "";
   data.focus();
   return false;
 }
}
return true;
}

function numeric_chk_noalert(value)
{
for (var i = 0 ;i < value.length ;i++ )
{
 if ((value.substring(i,i+1) < "0" || value.substring(i,i+1) > "9" )) {
   return false;
 }
}
return true;
}

function number_chk(data)
{
if (isNaN(data.value))
{
 alert("??? ???????.");
 data.value = "0.0";
 data.focus();
 return false;
}
return true;
}

function number_chk_noalert(value)
{
if (isNaN(value)) {
 return false;
}
return true;
}


/**
* ???? ???? ??? ?? ???? ??
* ??? format ??? ??????? 'regular expression'? ??
*/
function isValidFormat(input,format) {
 if (input.value.search(format) != -1) {
     return true; //??? ?? ??
 }
 return false;
}

/**
* ???? ??? ???? ??
* ex) if (!isValidEmail(form.email)) {
*         alert("??? ??? ??? ????.");
*     }
*/
function isValidEmail(input) {
 var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
 if (blankCheck(input.value)) return true;
 return isValidFormat(input,format);
}

/**
* ???? ???? ??(??-??-??)?? ??
*/
function isValidPhone(input) {
 var format = /^(\d+)-(\d+)-(\d+)$/;
 if (blankCheck(input.value)) return true;
 return isValidFormat(input,format);
}

/**
* ??? ?????? ??? ??
*/
function hasCheckedRadio(input) {
 if (input.length > 1) {
     for (var inx = 0; inx < input.length; inx++) {
         if (input[inx].checked) return true;
     }
 } 
 else {
     if (input.checked) return true;
 }
 return false;
}

/**
* ??? ????? ??? ??
*/
function hasCheckedBox(input) {
 return hasCheckedRadio(input);
}

function Insa_OnClick(urlstr)
{
var popWnd = urlstr ;
var popmnu = window.open(popWnd, "popmnu", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=yes,width=500,height=350");
}

function Excel(urlstr)
{
excel_popup = window.open("/excel/" + urlstr + ".csv", "popup1","toolbar=no,location=no,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=yes, width=800, height=530");
}

function PullWin(urlstr)
{
var popWnd = urlstr ;
var popup = window.open(popWnd, "popup", "toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=yes");
}

function select_YYYYMMDD_LeapYear(year)
{
var flag = new Boolean(false);

if (((year % 4 == 0) && !(year % 100 == 0))||(year % 400 ==0)) return (true);
/*
if ((parseInt(year,10) % 4) == 0)      // 4??? ????
{
 flag = true;
 if ((parseInt(year,10) % 100) == 0)    // ?? 100??? ??? ???,
 {
   flag = false;
   if ((parseInt(year,10) % 400) == 0)  // ?? 400??? ????
   {
     flag = true;
   }
 }
}
*/
return (false);
}

function select_YYYYMMDD_Change(syear,smon,sday)
{
myform = document.form1;    // FORM ????(script???)
myform_s = "document.form1.";
var end_day = new Array();
end_day[0] = 31;
end_day[1] = 28;
end_day[2] = 31;
end_day[3] = 30;
end_day[4] = 31;
end_day[5] = 30;
end_day[6] = 31;
end_day[7] = 31;
end_day[8] = 30;
end_day[9] = 31;
end_day[10] = 30;
end_day[11] = 31;
var year = parseInt(this.eval(myform_s + syear + ".value"),10);
var mon = parseInt(this.eval(myform_s + smon + ".value"),10) - 1;

if (select_YYYYMMDD_LeapYear(year))  // true?? ????? 2??? 28????
{
 end_day[1] = 29;
}
else
{
 end_day[1] = 28;
}

var s_sday = myform_s + sday + ".options.length = end_day[mon]";
this.eval(s_sday);

for (var i=0; i<end_day[mon]; i++)
{
 this.eval(myform_s + sday + ".options[i].value = i + 1");
 this.eval(myform_s + sday + ".options[i].text = i + 1");
}
if (this.eval(myform_s + sday + ".options.selectedIndex") == -1)
{
 this.eval(myform_s + sday + ".options.selectedIndex = end_day[mon] - 1");
}
}

function select_YYYYMMDD(syear,year,smon,mon,sday,day)
{  // s? ?? ?? html input name
var select_check;
var today = new Date();
var now_year = today.getYear();

if (now_year < 100)      // 2000? ???? ??? 2000???? 4??? ???..document??
{
 now_year = 1900 + now_year;
}

document.write("<select name=" + syear + " onChange=select_YYYYMMDD_Change('" + syear + "','" + smon + "','" + sday + "')>");
for (var loop_year=now_year-1; loop_year<=now_year+10; loop_year++)
{
 if (loop_year == year)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_year + select_check + ">" + loop_year + "</option>");
}
document.write("</select>/ ");

document.write("<select name=" + smon + " onChange=select_YYYYMMDD_Change('" + syear + "','" + smon + "','" + sday + "')>");

for (var loop_month=1; loop_month<=12; loop_month++)
{
 if (loop_month == mon)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_month + select_check + ">" + loop_month + "</option>");
}
document.write("</select>/ ");

document.write("<select name=" + sday + " onChange=select_YYYYMMDD_Change('" + syear + "','" + smon + "','" + sday + "')>");
for (var loop_day=1; loop_day<=31; loop_day++)
{
 if (loop_day == day)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_day + select_check + ">" + loop_day + "</option>");
}
document.write("</select>");
}

function select_YYYYMMDD2(syear,year,smon,mon,sday,day,shh,hh,smm,mm)
{  // s? ?? ?? html input name ??,??????
var select_check;
var today = new Date();
var now_year = today.getYear();

if (now_year < 100)                // 2000? ???? ??? 2000???? 4??? ???..document??
{
 now_year = 1900 + now_year;
}

document.write("<select name=" + syear + ">");
for (var loop_year=now_year-1; loop_year<=now_year+10; loop_year++)
{
 if (loop_year == year)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_year + select_check + ">" + loop_year + "</option>");
}
document.write("</select>/ ");

document.write("<select name=" + smon + " onChange=select_YYYYMMDD_Change('" + syear + "','" + smon + "','" + sday + "')>");

for (var loop_month=1; loop_month<=12; loop_month++)
{
 if (loop_month == mon)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_month + select_check + ">" + loop_month + "</option>");
}
document.write("</select>/ ");

document.write("<select name=" + sday + ">");
for (var loop_day=1; loop_day<=31; loop_day++)
{
 if (loop_day == day)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_day + select_check + ">" + loop_day + "</option>");
}
document.write("</select>&nbsp;&nbsp;");

//??
document.write("<select name=" + shh + ">");
for (var loop_hh=0; loop_hh<=23; loop_hh++)
{
 if (loop_hh == hh)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_hh + select_check + ">" + loop_hh + "</option>");
}
document.write("</select>:");
//?
document.write("<select name=" + smm + ">");
for (var loop_mm=0; loop_mm<=59; loop_mm++)
{
 if (loop_mm == mm)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_mm + select_check + ">" + loop_mm + "</option>");
}
document.write("</select>");

}


function select_YYYYMMDD3(syear,year,smon,mon,sday,day)
{  // s? ?? ?? html input name
var select_check;
var today = new Date();
var now_year = today.getYear();

if (now_year < 100)                // 2000? ???? ??? 2000???? 4??? ???..document??
{
 now_year = 1900 + now_year;
}

document.write("<select name=" + syear + ">");
for (var loop_year=1950; loop_year<=now_year+10; loop_year++)
{
 if (loop_year == year)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_year + select_check + ">" + loop_year + "</option>");
}
document.write("</select>/ ");

document.write("<select name=" + smon + " onChange=select_YYYYMMDD_Change('" + syear + "','" + smon + "','" + sday + "')>");

for (var loop_month=1; loop_month<=12; loop_month++)
{
 if (loop_month == mon)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_month + select_check + ">" + loop_month + "</option>");
}
document.write("</select>/ ");

document.write("<select name=" + sday + ">");
for (var loop_day=1; loop_day<=31; loop_day++)
{
 if (loop_day == day)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 document.write("<option value=" + loop_day + select_check + ">" + loop_day + "</option>");
}
document.write("</select>");
}


function select_hhmm(shh,hh,smm,mm){
 var select_check;
 //??
document.write("<select name=" + shh + ">");
for (var loop_hh=0; loop_hh<=23; loop_hh++)
{
 if (loop_hh == hh)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 
 if ( loop_hh < 10 )
 {
   loop_hh = "0" + loop_hh;
 }
 document.write("<option value=" + loop_hh + select_check + ">" + loop_hh + "</option>");
}
document.write("</select>:");
//?
document.write("<select name=" + smm + ">");
for (var loop_mm=0; loop_mm<=59; loop_mm++)
{
 if (loop_mm == mm)
 {
   select_check=" SELECTED ";
 }
 else
 {
   select_check=" ";
 }
 if ( loop_mm < 10 )
 {
   loop_mm = "0" + loop_mm;
 }    
 document.write("<option value=" + loop_mm + select_check + ">" + loop_mm + "</option>");
}
document.write("</select>");
}

//2001-06-22?? ??(20010622)???? ??.
function make_date(str){
 var yyyy = str.substring(0,4);
 var mm   = str.substring(5,7);
 var dd   = str.substring(8,10);
 
 var date_val = yyyy+mm+dd;
 return date_val;
}

/*
function make_date2(data1, data2, data3){
	var zero_val = "00";
	var date_val = "";
	date_val = data1 + zero_val.substring(0,2-data2.length) + data2;
	date_val = date_val + zero_val.substring(0,2-data3.length) + data3;

	return date_val;
}
*/
function blankCheck( msg )
{
	var mleng = msg.length;
	chk=0;
	
	for (i=0; i<mleng; i++)
	{
		if ( msg.substring(i,i+1)!=' ' && msg.substring(i,i+1)!='\n' && msg.substring(i,i+1)!='\r') chk++;
	}
	if ( chk == 0 ) return (true);
	
	return (false);
}

function blankFind( msg )
{
	var mleng = msg.length;
	chk=0;
	
	for (i=0; i<mleng; i++)
	{
		if ( msg.substring(i,i+1)==' ' || msg.substring(i,i+1)=='\n' || msg.substring(i,i+1)=='\r') return (false);
	}
	
	return (true);
}

function realsize( value ) 
{
	var len = 0;
	if ( value == null ) return 0;
	for(var i=0;i<value.length;i++){
	   var c = escape(value.charAt(i));
	   if ( c.length == 1 ) len ++;
	   else if ( c.indexOf("%u") != -1 ) len += 2;
	   else if ( c.indexOf("%") != -1 ) len += c.length/3;
	}
	return len;
}

function compnumChk( code )
{
	var sum = 0;
	var getlist =new Array(10);
	var chkvalue =new Array("1","3","7","1","3","7","1","3","5");
	
	for (var i=0; i<10; i++) { 
		getlist[i] = code.substring(i,i+1);
	}
	
	for (var i=0; i<9; i++) { 
		sum += getlist[i]*chkvalue[i];
	}
	sum = sum +parseInt((getlist[8]*5)/10) ;
	sidliy = sum%10;
	sidchk = 0;
	
	if ( sidliy != 0 ) { 
		sidchk = 10 - sidliy; 
	} 
	else { 
		sidchk = 0; 
	}
	
	if ( sidchk != getlist[9] ) {
		return (false);
	}
	
	return (true);
}

function useridCheck( userid )
{
//id ?? check
	var check = "y";
	var newid = userid;

	for(i=0; i<newid.length; i++){
		if (newid.charAt(i) == " "){
			check = "n";
		}
		else if (((newid.charAt(i) < "A") || (newid.charAt(i) > "Z"))
		 		 && ((newid.charAt(i) < "a") || (newid.charAt(i) > "z"))
		     && ((newid.charAt(i) < "0") || (newid.charAt(i) > "9"))){  

			check = "n";
		}
	}
	
	if (check =="n") {
		return (false);
	}
	
	return (true);
}

function passwordCheck( passwd )
{
//???? ??,?? ?? check
	var cpasschk=0;
	var npasschk=0;
	var check = "y";
	var newpasswd = passwd;

	for(i=0; i<newpasswd.length; i++) 
	{
		if (newpasswd.charAt(i) == " ") {
			check = "n";
		}
		else if (((newpasswd.charAt(i) < "A") || (newpasswd.charAt(i) > "Z"))
				 && ((newpasswd.charAt(i) < "a") || (newpasswd.charAt(i) > "z"))
		     && ((newpasswd.charAt(i) < "0") || (newpasswd.charAt(i) > "9"))){  

			check = "n";
		}
		if ( "A" <= newpasswd.charAt(i) && newpasswd.charAt(i) <= "Z" ) cpasschk++;
		if ( "a" <= newpasswd.charAt(i) && newpasswd.charAt(i) <= "z" ) cpasschk++;
		if ( "0" <= newpasswd.charAt(i) && newpasswd.charAt(i) <= "9" ) npasschk++;
	}
	
	if (check == "n" || cpasschk == 0 || npasschk == 0) {
		return (false);
	}
	
	return (true);
//check end	  	
}

//????? ??? ??
function currency(obj)
{
if (event.keyCode >= 48 && event.keyCode <= 57) {
} else {
	event.returnValue = false
}
}


//?? ??
function allcheck(theform)
{
 for( i=0; i<theform.elements.length; i++) {
     ele = theform.elements[i];
         ele.checked = true;
 }
 return;
}

//????
function discheck(theform)
{
 for( i=0; i<theform.elements.length; i++) {
     ele = theform.elements[i];
         ele.checked = false;
 }
 return;
}

//??? ??
function open_window(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable) {
	
 toolbar_str   = ((toolbar   == 'yes') ? 'yes' : 'no') ;
 menubar_str   = ((menubar   == 'yes') ? 'yes' : 'no') ;
 statusbar_str = ((statusbar == 'yes') ? 'yes' : 'no') ;
 scrollbar_str = ((scrollbar == 'yes') ? 'yes' : 'no') ;
 resizable_str = ((resizable == 'yes') ? 'yes' : 'no') ;

 //alert('left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);

 window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str).focus();
}


//null,??? ?? ( ???,???,?? ) /*??
function checkLength ( theField, s, Length)
{
 if (theField.value == "" || theField.value == null )
 {
     theField.value="";  //??? NULL? ??
     alert( s + "? ??????.");
     return(false);
 }

 if (theField.value.length < Length)
 {
     theField.value="";  //??? NULL? ??
     alert( Length+"?? ?? ??? ???.");
     return(false);
 }

 return(true);
}

//null ? ?? /*??
function isNull ( theField, s )
{
 if (theField.value == "" || theField.value == null )
 {
     theField.value="";  //??? NULL? ??
     //theField.focus();
     //theField.select();
     alert( s + "?(?) ??????.");
     return(false);
 }

 return(true);
}

//??? ?? ?? ??
function rnocheck(input) 
{
 var inputStr;
 var i = 0;
 var j = 0;
 var sum =0;
 var weight = new Array(1,3,7,1,3,7,1,3);
 inputStr= input.toString();

 for (i=0;i<inputStr.length-2;i++) {
     sum = sum + parseInt(inputStr.charAt(i)) * weight[i];
 }

 j = parseInt(inputStr.charAt(8)) * 5;

 sum = sum + ((j - (j % 10)) / 10) + ( j % 10 );
 sum = sum % 10;
 if (sum!=0) 
     sum = 10 - sum;
 if (sum != inputStr.charAt(9) )
     return false;
  else
     return true;
}

function enterKey_Event(func_name, e){
	  if(e.keyCode == 13){
	    eval(func_name);
	  }
}

//?? ?? 
//20030602 ?? 2003-06-02 ??? ??? ???? 2005-12-12 ??? ??. ??? ??? ? ?? ??)
function chkDate(obj) {
	var input = obj.value.replace(/-/g,"");
	var inputYear = input.substr(0,4);
	var inputMonth = input.substr(4,2) - 1;
	var inputDate = input.substr(6,2);
	var resultDate = new Date(inputYear, inputMonth, inputDate);
	if ( resultDate.getFullYear() != inputYear ||
	   resultDate.getMonth() != inputMonth ||
	   resultDate.getDate() != inputDate) {
	obj.value = "";
	} else {
	obj.value = inputYear + "-" + input.substr(4,2) + "-" + inputDate;
	}
}

//엔터키를 체크하여 함수 실행
function enterExeFunc(e, func_nm) {
if (e.keyCode =='13'){  
 eval(func_nm);  
}
}



function dateDefaultSet() {//현재날짜로 셋팅
		var date1 = new Date();

		v_year=date1.getFullYear();
	v_month=date1.getMonth() + 1;
	v_day=date1.getDate();
		
		if(v_month < 10){
			v_month = "0" + v_month;
		}else{
			v_month = v_month;
		}

		if(v_day < 10){
			v_day = "0" + v_day;
		}else{
			v_day = v_day;
		}
		
		v_curDate = v_year + "-" + v_month + "-" + v_day

		return v_curDate;		
}

/**
* 입력값에 특정 문자(chars)가 있는지 체크
* 특정 문자를 허용하지 않으려 할 때 사용
* ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
*         alert("이름 필드에는 특수 문자를 사용할 수 없습니다.");
*     }
*/
function containsChars(input,chars) {
 for (var inx = 0; inx < input.value.length; inx++) {
    if (chars.indexOf(input.value.charAt(inx)) != -1)
        return true;
 }
 return false;
}

function checkContain(input) {
	if (containsChars(input,"")) {
		alert("특수 문자를 사용할 수 없습니다.");
		input.value = input.value.substring(0,input.value.length-1);
	}
}