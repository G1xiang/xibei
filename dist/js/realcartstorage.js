define(['jquery'],function($){
    var key='cartList';
    
    function addCartStorage(){
        



    }

    function setCartStorage(){
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