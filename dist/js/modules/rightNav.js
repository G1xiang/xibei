var $flag=true; 
$('.nav-btn').on('click',function(){
    
if($flag){
    $('.n1').css('transform', 'rotate(45deg)');
    $('.n3').css({'transform':'rotate(-45deg)','top':'2px'});
    $('.n2').css('opacity', 0);
    $('.wrapper').css("display","block")
}else{
    $('.n1').css('transform', 'rotate(0)');
    $('.n3').css({'transform':'rotate(0)','top':'20px'});
    $('.n2').css('opacity', 1);
    $('.wrapper').css("display","none")
}
$flag=!$flag;
})