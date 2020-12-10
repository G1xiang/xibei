// $(document).ready(function(){
//     console.log($(".detailButton").html())
//     $(".detailButton").on("click",function(){
//       alert("段落被点击了。");
//     });
//   });
require.config({
    paths:{
        'jquery':'/js/jquery'
    }
});
define(['jquery','../api/server.js',"./modules/cart"],function($,{getMenuData},initMenu){
    //console.log($);
    getMenuData().then((res)=>{
        console.log(res);
        initMenu(res)
    })
})

