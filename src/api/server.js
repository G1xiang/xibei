define(['jquery'],function($){

    function getMenuData(){
        return $.ajax('../api/mock/menu.json');
    }
    

    return {
        getMenuData,
    }
})
