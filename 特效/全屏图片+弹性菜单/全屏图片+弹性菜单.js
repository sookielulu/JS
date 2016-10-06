/**
 * Created by Administrator on 2016/9/29.
 */
window.onload = function () {
    var banner = document.getElementById("banner");
    var as = banner.getElementsByTagName("a");
    var open = document.getElementById("open");
    var close = open.getElementsByTagName("a")[0];
    var title = open.getElementsByTagName("h3")[0];
    
    for (var i=0; i<as.length; i++) {
        as[i].index = i;
        as[i].onclick = function () {
            var j=0;
            var timer = null;
            timer = setInterval(function () {
                animate(as[j], {
                    top: 60
                });
                j++;
                if (j == as.length) {
                    clearInterval(timer);
                }
            },100);


            title.innerHTML = as[this.index].innerHTML;


            setTimeout(function () {
                animate(open, {
                    height: 420,//前面css将高度设为0，这里设置高度
                    top: 100
                });
                open.style.display = "block";
            },1000);
        }
    }

    close.onclick = function () {
        animate(open, {
            height: 0,
            top: banner.clientHeight/2 + banner.offsetTop
            // 前面open的css中一定要加一句overflow:hidden，否则背景消失时文字不会消失
        });
        setTimeout(function () {
            var j = 0;
            var timer = null;
            timer = setInterval(function () {
                animate(as[j], {
                    top: 0
                });
                j++;
                if (j == as.length) {
                    clearInterval(timer);
                }
            }, 100);
        },1000);
    }
}