define(['jquery'],function($){

    function getMenuData(){
        return $.ajax('../api/mock/menu.json');
    }
    function getDetailData(id){
        var promise = new Promise(function(resolve,reject){
            $.ajax(`/api/mock/menu.json`).then((res)=>{
                //res -> 对应type下的 数据集合
                for(var i=0;i<res.foods_list.length;i++){
                    if(res.foods_list[i].foodsId == id){
                        resolve(res.foods_list[i]);
                    }
                }
            });
        });
        return promise;
    }

    return {
        getMenuData,
        getDetailData
    }
})
