var as = document.querySelectorAll('.c2 a');
var goods = [{ "imgUrl": "http://www.xibei.com.cn/sites/all/themes/xibei/images/qrcode1.png", "title": "西贝莜面村" }, {"imgUrl": "http://www.xibei.com.cn/sites/all/themes/xibei/images/qrcode2.png",
    "title": "西贝品味"    }, {  "imgUrl": "http://www.xibei.com.cn/sites/all/themes/xibei/images/qrcode3.png", "title": "爱心互助金"
}, {"imgUrl": "http://www.xibei.com.cn/sites/all/themes/xibei/images/qrcode4.png",
"title": "官方微博"    
}, {"imgUrl": "http://www.xibei.com.cn/sites/all/themes/xibei/images/qrcode5.png",
"title": "西贝甄选"    
}, {"imgUrl": "http://www.xibei.com.cn/sites/all/themes/xibei/images/qrcode-qinzi.jpg",
    "title": "西贝亲子公众号"
}];
console.log(as,goods)
for (var i = 0; i < as.length; i++) {
    as[i].index=i;
    as[i].onmousedown = function () {        

        chuangjiana();
        chuangjianb(this.index);
        runlalala();
       
 

    }
}
        //创建页面
       function chuangjiana() {
            var stt = "<div class='setting-well'>" + "<div class='button'>" + "<span class='bt1'></span>" + "<span class='bt2'></span>" + "<span class='bt3'></span>" + "</div></div>"
            $('body').append(stt);
        }
         //创建二维码
        function chuangjianb(a) {
        console.log(goods[a].imgUrl,$('.setting-well'))

            var str = "<div class='tu'>" + "<img src = " + goods[a].imgUrl + ">" + "<p>" + goods[a].title + "</p>" + "</div>"
            $('.setting-well').append(str)
        }


        //右上角的×
        function runlalala() {
            var btn = document.querySelector('.button');
            var btns = document.querySelectorAll('.button span');
            var S = document.querySelector('.setting-well');
            btn.onmouseover = function () {
                for (i = 0; i < btns.length; i++) {
                    btns[i].style.backgroundColor = '#f00'
                }
            };
            btn.onmouseout = function () {
                for (i = 0; i < btns.length; i++) {
                    btns[i].style.backgroundColor = '#fff'
                }
            };
            btn.onmousedown = function () {
                var settingWell = document.querySelector(".setting-well")                
                settingWell.remove()                
            }
        }

