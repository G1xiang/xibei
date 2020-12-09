require.config({
    paths:{
        'jquery':'./jquery'
    }
});
define(['jquery','../js/realcartstorage.js'],function($,{getCartStorage,setCartStorage}){
    //console.log($);
    initCart();

    function initCart(){
        var cartList=getCartStorage();
        console.log(cartList);
        $('.cart_list').html(
            cartList.map((v,i)=>{
                return `
                   <li><input type="checkbox"></li>
                   <li><img src="${v.foodsImg}" alt=""></li>
                   <li>￥${Number(v.foodsPrice)}.00</li>
                   <li>
                       <button class="reduce">-</button>
                       <input class="number" type="text" value="${v.goodsNumber}">
                       <button class="add">+</button>
                   </li>
                   <li>￥${ v.foodsPrice * v.goodsNumber }.00</li>
                   <li>
                       <a href="javascript:;"  class="p-del">删除</a>
                   </li>
                `
            }).join('')
        );
    }
})