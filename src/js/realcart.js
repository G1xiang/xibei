require.config({
    paths:{
        'jquery':'./jquery'
    }
});
define(['jquery','../js/realcartstorage.js'],function($,{getCartStorage,setCartStorage}){
    //console.log($);
    initCart();
    bindrealCart();

    function initCart(){
        var cartList=getCartStorage();
        
        console.log(cartList);
        $('.cart_list').html(
            cartList.map((v,i)=>{
                return `
                   <li>${v.foodschecked?'<input type="checkbox" class="cart_list_cb" checked>':'<input id="cb" class="cart_list_cb" type="checkbox">'}</li>
                   <li><img src="${v.foodsImg}" alt=""><p>${v.foodsName}</p></li>
                   <li>￥${v.foodsPrice}.00</li>
                   <li>
                       <button class="reduce">-</button>
                       <input class="number" type="text" value="${v.goodsnumber}">
                       <button class="add">+</button>
                   </li>
                   <li>￥${ v.foodsPrice * v.goodsnumber }.00</li>
                   <li>
                       <a href="javascript:;"  class="p-del">删除</a>
                   </li>
                `
            }).join('')
        );

        var $cartListCb=$('.cart_list_cb');
        var $cartListCbAll=$('#cart_list_cball');
        var flag=true;
        $cartListCb.each(function(i,elem){
            if(elem.checked==false){
                flag=false;
            }
        });
        if(flag){
            $cartListCbAll.prop('checked',true);
        }else{
            $cartListCbAll.prop('checked',false);
        }


        var numberAll=0;
        var priceAll=0;
        $cartListCb.each(function(i,elem){
            if(elem.checked==true){
                numberAll+=cartList[i].goodsnumber;
                priceAll+=cartList[i].goodsnumber*cartList[i].foodsPrice;
            }
        });
        $('.foot-box p').html(`总计： ¥ ${priceAll}.00`);
        $('.foot-box i').html(`已选择${numberAll}件商品`);
    }
    function bindrealCart(){
        var cartList=getCartStorage();
        $('#realcart').on('click','.add',function(){
            var index=$(this).closest('ul').index();
            //console.log(index);
            cartList[index].goodsnumber++;
            setCartStorage(cartList);
            initCart()
        });
        $('#realcart').on('click','.reduce',function(){
            var index=$(this).closest('ul').index();
            
            if(cartList[index].goodsnumber > 1){
            cartList[index].goodsnumber--;
            } 
            setCartStorage(cartList);
            initCart();
        })
        $('#realcart').on('click','.cart_list_cb',function(){
            var index=$(this).closest('ul').index();
            //console.log(111);
            cartList[index].foodschecked=!cartList[index].foodschecked;
            setCartStorage(cartList);
            initCart();
        })
        $('#realcart').on('click','.p-del',function(){
            var index=$(this).closest('ul').index();
            cartList.splice(index,1);
            setCartStorage(cartList);
            initCart();
        });
    }
})