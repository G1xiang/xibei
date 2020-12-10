var scrollFunc=function(e){
    // console.log(e.wheelDelta);
    if(e.wheelDelta<0){
        $('#box1').css({"top":"-100%"})
        $('#box2').css({"top":"0","position":"static"})
        $('.front-mask').removeClass('hide').addClass('show')
    }
    else if(e.wheelDelta>0&&$('#box2').offset().top - $(window).scrollTop()==0){
        $('#box1').css("top","0")
        $('#box2').css({"top":"100%","position":"fixed"})
        $('.front-mask').removeClass('show').addClass('hide')

    }
}
/*注册事件*/
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
window.onmousewheel=document.onmousewheel=scrollFunc;

