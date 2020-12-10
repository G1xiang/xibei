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
                <li>
                <div>${v.foodschecked?'<input type="checkbox" class="cart_list_cb" checked>':'<input id="cb" class="cart_list_cb" type="checkbox">'}</div>
                <div><img src="${v.foodsImg}" alt=""><p>${v.foodsName}&nbsp;${v.foodsTaste}</p></div>
                <div>￥${v.foodsPrice}.00</div>
                <div>
                    <button class="reduce">-</button>
                    <input class="number" type="text" value="${v.foodsnumber}">
                    <button class="add">+</button>
                </div>
                <div>￥${v.foodsnumber*v.foodsPrice}</div>
                <div>
                    <a href="javascript:;"  class="p-del">删除</a>
                </div>
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
                numberAll+=Number(cartList[i].foodsnumber);
                priceAll+=cartList[i].foodsnumber*cartList[i].foodsPrice;
            }
        });
        console.log(numberAll);
        $('.foot-box p').html(`总计： ¥ ${priceAll}.00`);
        $('.foot-box i').html(`已选择${numberAll}件商品`);
    }
    function bindrealCart(){
        var cartList=getCartStorage();
        $('#realcart').on('click','.add',function(){
            var index=$(this).closest('li').index();
            //console.log(index);
            cartList[index].foodsnumber++;
            setCartStorage(cartList);
            initCart()
        });
        $('#realcart').on('click','.reduce',function(){
            var index=$(this).closest('li').index();
            
            if(cartList[index].foodsnumber > 1){
            cartList[index].foodsnumber--;
            } 
            setCartStorage(cartList);
            initCart();
        })
        $('#realcart').on('click','.cart_list_cb',function(){
            var index=$(this).closest('li').index();
            //console.log(111);
            cartList[index].foodschecked=!cartList[index].foodschecked;
            setCartStorage(cartList);
            initCart();
        })
        $('#realcart').on('click','.p-del',function(){
            var index=$(this).closest('li').index();
            cartList.splice(index,1);
            setCartStorage(cartList);
            initCart();
        });
    }
})