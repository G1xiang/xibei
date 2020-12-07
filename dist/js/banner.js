var scrollFunc=function(e){
    console.log(e.wheelDelta);
    // ee=e || window.event;
    // var t1=document.getElementById("wheelDelta");
    // var t2=document.getElementById("detail");
    // if(e.wheelDelta){//IE/Opera/Chrome
    //     t1.value=e.wheelDelta;
    // }else if(e.detail){//Firefox
    //     t2.value=e.detail;
    // }
    console.log()
    if(e.wheelDelta<0&&$('.container').css('top')!=0){
        $('.video-wrapper').removeClass('hide1')
        $('.container').removeClass('hide')
        console.log('成功')
    }
}
/*注册事件*/
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;

