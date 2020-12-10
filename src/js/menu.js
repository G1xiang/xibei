require.config({
    paths:{
        'jquery':'/js/jquery'
    }
});
define(['jquery','../api/server.js',"./modules/cart"],function($,{getMenuData},initMenu){
    //console.log($);
    getMenuData().then((res)=>{
        initMenu(res)
        var $menuList=$('.menu');
        $(".detailButton").on("click",function(){
        var details=res.foods_list[$(this).parent().index()]
        $('body').append(`
        <div class="detail-mask">
                    <div class="food-detail">
                        <dl>
                            <dt class="photo"><img src="${details.foodsImg}"alt=""></dt>
                            <dd>
                                <ul>
                                    <li><h3>${details.foodsName}</h3><button class="close">X</button></li>
                                    <li class="taste"><button>${details.chooseStyle[0]}</button><button>${details.chooseStyle[1]}</button><button>${details.chooseStyle[2]}</button></li>
                                    <li><p>￥${details.foodsPrice}</p><span>${details.foodsInfo}</span></li>
                                    <li class="numberSelect"><span>数量</span><button>-</button><input type="text" value="1"><button>+</button></li>
                                    <li class="add"><button>加入购物车</button><button>立即购买</button></li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>
        `)
        $('.close').on('click',function(){
            $('.detail-mask').remove()
        })
        $('.numberSelect').children().eq(1).on('click',function(){
            if($('.numberSelect').children().eq(2).val()>1&&(/(^[1-9]\d*$)/.test($('.numberSelect').children().eq(2).val()))){
                var now =$('.numberSelect').children().eq(2).val()
                now--
                $('.numberSelect').children().eq(2).val(now)
            }
            else{
                $('.numberSelect').children().eq(2).val(1)
            }
        })
        $('.numberSelect').children().eq(3).on('click',function(){
            if((/(^[1-9]\d*$)/.test($('.numberSelect').children().eq(2).val()))){
                var now =$('.numberSelect').children().eq(2).val()
                now++
                $('.numberSelect').children().eq(2).val(now)
            }
            else{
                $('.numberSelect').children().eq(2).val(1)
            }
        })
        $('.numberSelect').children().eq(2).on('keyup',function(){
            if(!(/(^[1-9]\d*$)/.test($('.numberSelect').children().eq(2).val()))){
                $('.numberSelect').children().eq(2).val(1)
            }
        })
        $('.taste').children().on('click',function(){
            $('.taste').children().removeClass('active')
            $(this).addClass('active')
        })
        $('.add').children().eq(1).on('click',function(){
            let taste=$('.active').html()
            if(taste==undefined){
                alert('请选择一种口味')
            }
            else{
                // 选择口味之后
                if(window.localStorage.length!=0){
                    // 本地存储不为空
                    var storage=window.localStorage;
                    var jsonData=JSON.parse(storage.getItem("cartList"))
                    let arr=[]
                    for(i=0;i<jsonData.length;i++){
                    console.log(jsonData[i].foodsTaste,taste,jsonData[i].foodsName,details.foodsName)
                        // 遍历jsondata
                        jsonData[i].index=i
                        if(jsonData[i].foodsName==details.foodsName&&jsonData[i].foodsTaste==taste){
                            jsonData[i].foodsnumber=parseInt($('.numberSelect').children().eq(2).val())+parseInt(jsonData[i].foodsnumber)
                            storage.cartList=JSON.stringify(jsonData)
                            arr=[]
                            break
                        }
                        else{
                            arr.push({"foodsName":details.foodsName,"foodsImg":details.foodsImg,"foodsPrice":details.foodsPrice,"foodsnumber":parseInt($('.numberSelect').children().eq(2).val()),"foodschecked":true,"foodsTaste":taste})
                        }
                    }
                    console.log(arr)
                    if(arr[0]!=undefined){
                        jsonData.push(arr[0])
                        storage.cartList=JSON.stringify(jsonData)   
                    }
                    else{
                        storage.cartList=JSON.stringify(jsonData)   
                    }

                }
                else{
                    var storage=window.localStorage;
                    var jsonData=[{"foodsName":details.foodsName,"foodsImg":details.foodsImg,"foodsPrice":details.foodsPrice,"foodsnumber":parseInt($('.numberSelect').children().eq(2).val()),"foodschecked":true,"foodsTaste":taste}]
                    storage.cartList=JSON.stringify(jsonData)
                }
                window.location.replace('./cart.html')
            }
        })
        $('.add').children().eq(0).on('click',function(){
            let taste=$('.active').html()
            if(taste==undefined){
                alert('请选择一种口味')
            }
            else{
                // 选择口味之后
                if(window.localStorage.length!=0){
                    // 本地存储不为空
                    var storage=window.localStorage;
                    var jsonData=JSON.parse(storage.getItem("cartList"))
                    let arr=[]
                    for(i=0;i<jsonData.length;i++){
                    console.log(jsonData[i].foodsTaste,taste,jsonData[i].foodsName,details.foodsName)
                        // 遍历jsondata
                        jsonData[i].index=i
                        if(jsonData[i].foodsName==details.foodsName&&jsonData[i].foodsTaste==taste){
                            jsonData[i].foodsnumber=parseInt($('.numberSelect').children().eq(2).val())+parseInt(jsonData[i].foodsnumber)
                            storage.cartList=JSON.stringify(jsonData)
                            arr=[]
                            break
                        }
                        else{
                            arr.push({"foodsName":details.foodsName,"foodsImg":details.foodsImg,"foodsPrice":details.foodsPrice,"foodsnumber":parseInt($('.numberSelect').children().eq(2).val()),"foodschecked":true,"foodsTaste":taste})
                        }
                    }
                    console.log(arr)
                    if(arr[0]!=undefined){
                        jsonData.push(arr[0])
                        storage.cartList=JSON.stringify(jsonData)   
                    }
                    else{
                        storage.cartList=JSON.stringify(jsonData)   
                    }

                }
                else{
                    var storage=window.localStorage;
                    var jsonData=[{"foodsName":details.foodsName,"foodsImg":details.foodsImg,"foodsPrice":details.foodsPrice,"foodsnumber":parseInt($('.numberSelect').children().eq(2).val()),"foodschecked":true,"foodsTaste":taste}]
                    storage.cartList=JSON.stringify(jsonData)
                }
                alert('添加成功！')
            }
            
        })
        // [{"foodsName":"番茄炒蛋","foodsImg":"http://www.xibei.com.cn/sites/all/themes/xibei/food-story/10daocai/1.jpg","foodsPrice":60,"goodsnumber":3,"foodschecked":"true"}]
    //     [{"foodsName":"西贝奶酪饼","foodsImg":"http://www.xibei.com.cn/sites/all/themes/xibei/food-story/10daocai/2.jpg","foodsPrice":30,"foodsnumber":"1","foodschecked":"true","foodsTaste":"五分糖"},
    //     {"foodsName":"西贝奶","foodsImg":"http://www.xibei.com.cn/sites/all/themes/xibei/food-story/10daocai/2.jpg","foodsPrice":30,"foodsnumber":"1","foodschecked":"true","foodsTaste":"五分糖"},
    //     {"foodsName":"西贝奶酪","foodsImg":"http://www.xibei.com.cn/sites/all/themes/xibei/food-story/10daocai/2.jpg","foodsPrice":30,"foodsnumber":"1","foodschecked":"true","foodsTaste":"五分糖"},
    //     {"foodsName":"西奶酪饼","foodsImg":"http://www.xibei.com.cn/sites/all/themes/xibei/food-story/10daocai/2.jpg","foodsPrice":30,"foodsnumber":"1","foodschecked":"true","foodsTaste":"五分糖"},
    //     {"foodsName":"奶酪饼","foodsImg":"http://www.xibei.com.cn/sites/all/themes/xibei/food-story/10daocai/2.jpg","foodsPrice":30,"foodsnumber":"1","foodschecked":"true","foodsTaste":"五分糖"}
    // ]
        });
    })
})