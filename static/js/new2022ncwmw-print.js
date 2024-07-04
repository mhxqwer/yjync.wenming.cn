// JavaScript Document

//font-zoom
//取得字体大小，在html标记下定义了font-size
var originalFontSize = $(".article").css("font-size");
//恢复默认字体大小
$("#btnPrint .medium").click(function () {
    $(".article").css("font-size", originalFontSize);
    //JavaScript不向下执行
    return false;
});

//加大字体,某个元素的class定义为increaseFont
$("#btnPrint .big-tex").click(function () {
    //取得当前字体大小 后缀px,pt,pc
    var currentFontSize = $(".article").css("font-size");
    //取得当前字体大小，parseFloat()转为float类型去除后缀
    var currentFontSizeNumber = parseFloat(currentFontSize);
    //新定义的字体大小
    var newFontSize = currentFontSizeNumber + 2;
    if (newFontSize >= 24) {
        newFontSize = 24;
    }
    //重写样式表
    $(".article").css("font-size", newFontSize);


    //JavaScript不向下执行
    return false;
});

//减小字体，某个元素的class定义为decreaseFont
$("#btnPrint .sml-tex").click(function () {
    //取得当前字体大小 后缀px,pt,pc
    var currentFontSize = $(".article").css("font-size");
    //取得当前字体大小，parseFloat()转为float类型去除后缀
    var currentFontSizeNumber = parseFloat(currentFontSize);
    //重新定义字体大小
    var newFontSize = currentFontSizeNumber - 2;
    if (newFontSize <= 12) {
        newFontSize = 12;
    }
    //重写样式表
    $(".article").css("font-size", newFontSize);
    //JavaScript不向下执行
    return false;
});



/*图标位置变动*/
$(function(){
	$(".font").hover(function(){
			$(this).find(".big-tex").animate({"top":"0px"},200);	
		},function(){
			$(this).find(".big-tex").animate({"top":"27px"},200);	
		})
	$(".font01").hover(function(){
			$(this).find(".sml-tex").animate({"top":"0px"},200);	
		},function(){
			$(this).find(".sml-tex").animate({"top":"27px"},200);	
		})
	    $(".share").hover(function(){
            $(this).find(".share02").animate({"top":"0px"},200);    
        },function(){
            $(this).find(".share02").animate({"top":"27px"},200);   
        })
         $(".print").hover(function(){
            $(this).find(".print-tex").animate({"top":"0px"},200);    
        },function(){
            $(this).find(".print-tex").animate({"top":"27px"},200);   
        })
})



/*打印*/

function doZoom(size,content){
	document.getElementById(content).style.fontSize=size+'px';
}


function doPrint(vTitle,vTime,vContent,viphone)
{
    
	var Title = document.getElementById(vTitle).innerHTML;
	var Time = document.getElementById(vTime).innerHTML;
	//var Position =""; //= document.all.Position.innerHTML;
	var mContent = document.getElementById(vContent).innerHTML;
    var Cewm = document.getElementById(viphone).innerHTML;
   // var aUl=aCewm.src;

	var Images = ""; //document.all.Image.innerHTML;
var PartI = ' \
<style type="text/css"><!-- \
.print-head,\ .print-fot{background:#f22400;\ line-height: 50px; \ margin-bottom: 20px; \ color: #fff;\ font-size: 14px;\ padding: 0 20px;\} \
		.print-fot{\ text-align: right;\} \
		.C-text,\ .C-text01{\ text-align: center;\ line-height: 32px;\ font-size: 22px;\} \ .C-text01{\ font-size: 16px;\}\
		.text,.text p{\ line-height: 35px;\ margin:20px 0;\}\ #show_ew{\ display: block;\ text-align: center;\}\
--></style>\
<div class="inner"> \
  <div class="print-head">欢迎访问南昌文明网   -  NC.WENMING.CN</div>\
     \
     ';
var PartIII= '<div class="C-text">'+Title+'</div>';
var Part4=' <div  class="C-text01">'+Time+'</div>';
var Part6=' <div  id="show_ew">'+Cewm+'</div>';
var Part5='<div id="tex">'+Images+mContent+' </div> <div class="print-fot">南昌文明网版权所有</div></div>';

document.body.innerHTML = PartI+PartIII+Part4+Part5+Part6;
window.print();

}// JavaScript Document