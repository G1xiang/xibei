define(['jquery'],function($){
    var key='cartList';
    
    function addCartStorage(foodsData , cb){
        
        var cartList=getCartStorage();
        var flag=true;
        var index=-1;
        for(var i=0;i<cartList.length;i++){
            if(cartList[i].foodsId==foodsData.foodsId){
                flag=false;
                index=i
            }
        }
        if(flag){
            cartList[index].goodsnumber+=foodsData.goodsnumber;
            setCartStorage(cartList);
        }

        cb();


    }

    function setCartStorage(data){
        localStorage.setItem(key,JSON.stringify(data));
    }

    function getCartStorage(){
        return JSON.parse(localStorage.getItem(key)||'[]');
    }

    return {
        addCartStorage,
        setCartStorage,
        getCartStorage
    }
})