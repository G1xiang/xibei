define(['jquery'],function($){
    var $menuList=$('.menu');
    function initMenu(data){
        let inner=data.foods_list.map((v,i)=>{
            var tmp=`
           
           <ul>
            <li class="detailButton">
                <a href="javascript:;">
                    <div><img src="${v.foodsImg}" alt=""></div>
                    <h3>${v.foodsName}</h3>
                    <p>￥${v.foodsPrice}</p>
                </a>
            </li>
            </ul>
        
            
        ` 
        return tmp;
        }).join('')
        
       $menuList.html(inner);
    }
    // function details(data){
    //     let detail=data.foods_list.map((v,i)=>{
    //         var tmp=`
    //             <div class="detail-mask">
    //                 <div class="food-detail">
    //                     <dl>
    //                         <dt class="photo"><img src="http://www.xibei.com.cn/sites/all/themes/xibei/food-story/10daocai/1.jpg" alt=""></dt>
    //                         <dd>
    //                             <ul>
    //                                 <li><h3>椒麻牛蹄筋</h3></li>
    //                                 <li><button>a</button><button>b</button><button>c</button></li>
    //                                 <li><p>￥58</p></li>
    //                                 <li class="numberSelect"><span>数量</span><button>-</button><input type="text"><button>+</button></li>
    //                                 <li class="add"><button>加入购物车</button><button>立即购买</button></li>
    //                             </ul>
    //                         </dd>
    //                     </dl>
    //                 </div>
    //             </div>
            
    //         `
    //         return tmp
    //     }).join('')
    //    $menuList.html(detail);

    // }
    return initMenu;
            // details;
})



