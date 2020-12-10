$(function(){
a(),
b(),
c(),
d(),
e(),
f()
})






function a(){
    $(window).scroll(function () {     
    var scrollTop = $(document).scrollTop()/*滚动距离 */  
    var clientHeight=$(window).height();/*可视区高 */    
    var WY = scrollTop + clientHeight;/*body顶部到可视区底部 */  
    var offsetTop =$('.fudongleft').height();/*到body顶的高度 */
    var AY = $('.fudongleft .active').offset().top - offsetTop;/*到父盒子的高*/
    
      
    if( WY>(offsetTop + (AY-100))){       
        $('.fudongleft .active').css("top","70px");                 
    }
    if( WY<(offsetTop + (AY-100))){
        $('.fudongleft .active').css("top","150px"); 
    }  

   
})
}
function b(){
    $(window).scroll(function () {     
    var scrollTop = $(document).scrollTop()/*滚动距离 */  
    var clientHeight=$(window).height();/*可视区高 */    
    var WY = scrollTop + clientHeight;/*body顶部到可视区底部 */  
    var offsetTop =$('.fudongright').height();/*到body顶的高度 */
    var AY = $('.fudongright .active').offset().top - offsetTop;/*到父盒子的高*/
    
      
    if( WY>(offsetTop + (AY-100))){       
        $('.fudongright .active').css("top","70px");                 
    }
    if( WY<(offsetTop + (AY-100))){
        $('.fudongright .active').css("top","150px"); 
    }  

   
})
}
function c(){
    $(window).scroll(function () {     
    var scrollTop = $(document).scrollTop()/*滚动距离 */  
    var clientHeight=$(window).height();/*可视区高 */    
    var WY = scrollTop + clientHeight;/*body顶部到可视区底部 */  
    var offsetTop =$('.fudongleft2').height();/*到body顶的高度 */
    var AY = $('.fudongleft2 .active').offset().top - offsetTop;/*到父盒子的高*/
    
      
    if( WY>(offsetTop + (AY-100))){       
        $('.fudongleft2 .active').css("top","70px");                 
    }
    if( WY<(offsetTop + (AY-100))){
        $('.fudongleft2 .active').css("top","150px"); 
    }  

   
})
}
function d(){
    $(window).scroll(function () {     
    var scrollTop = $(document).scrollTop()/*滚动距离 */  
    var clientHeight=$(window).height();/*可视区高 */    
    var WY = scrollTop + clientHeight;/*body顶部到可视区底部 */  
    var offsetTop =$('.fudongzhengt').height();/*盒子的高度 */
    var AY = $('.fudongzhengt .waiwai').offset().top - offsetTop;/*到父盒子的高*/  
    
    
    if(WY<$('.fudongzhengt').offset().top){
        $('.fudongzhengt').css("transform","translateY(50px)")
        $('.waiwai').css({"top":"250px","opacity":"0.5","transform": "rotate(-20deg)"}); 
    }
    if(WY>=$('.fudongzhengt').offset().top){
        $('.fudongzhengt').css("transform","translateY(0px)")
        $('.waiwai').css({"top":"170px","opacity":"1","transform": "rotate(-43deg)"});  
    }
   
    // if( WY<(offsetTop + (AY-100))){
    //     $('.fudongleft .active').css("top","150px"); 
    // }  

   
})
}
function e(){ 
    var btn = document.querySelector('.meiyongdehezi .dianji')
    var btn2 = document.querySelector('.meiyongdehezi .dianji2')  
    var bukan = document.querySelectorAll('.meiyongdehezi .food-zhaopai .burangkan')      
    btn.onmousedown=function(){          
         for(i=0;i<bukan.length;i++){
                bukan[i].style.display="block"; 
                btn.style.display='none' 
                btn2.style.display='block'               
            } 
    }
    btn2.onmousedown=function(){          
        for(i=0;i<bukan.length;i++){
               bukan[i].style.display="none"; 
               btn.style.display='block' 
               btn2.style.display='none'               
           } 
   }    
       
}

function f(){ 
    var arr = [
        "http://www.xibei.com.cn/sites/all/themes/xibei/images/food1.jpg","http://www.xibei.com.cn/sites/all/themes/xibei/images/food2.jpg","http://www.xibei.com.cn/sites/all/themes/xibei/images/food3.jpg"
    ]  
    var i=1  
    var tou = document.querySelector('header');
    tou.style.background="url('" + arr[0] + "')";
    setInterval(function(){
        if(i==  arr.length-1){
            i=0
        }             
        tou.style.background="url('" + arr[i++] + "')";
        tou.style.backgroundSize="cover";              
    },2000)
   tou.style.backgroundSize="cover"; 



    
}




