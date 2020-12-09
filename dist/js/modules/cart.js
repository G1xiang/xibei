define(['jquery'],function($){
    var $menuList=$('.menu');
    function initMenu(data){
        let inner=data.foods_list.map((v,i)=>{
            var tmp=`
           
            <ul>
                <li>
                    <a id="outter" href="#">
                        <div><img src="${v.foodsImg}" alt=""></div>
                        <h3>${v.foodsName}</h3>
                        <p>￥${v.foodsPrice}</p>
                        <span>加入购物车</span>
                    </a>
                </li>
            </ul>
        
            
        ` 
        return tmp;
        }).join('')
        
       $menuList.html(inner);
    }
 
    return initMenu;
})