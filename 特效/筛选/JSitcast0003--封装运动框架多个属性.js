/**
 * Created by Administrator on 2016/9/20.
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {

        var flag = true;
        for (var attr in json) {

            var current = 0;
            if (attr == "opacity") {
                current = parseInt(getStyle(obj, attr)*100);
            }else {
                current = parseInt(getStyle(obj,attr));
            }

            var step = (json[attr] - current) / 5;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            //判断透明度
            if (attr == "opacity") {//判断有没有输入opacity
                if ("opacity" in obj.style) {
                    //如果obj.style中有opacity，表示是IE6以上的版本
                    obj.style.opacity = (current + step) / 100;
                }else {
                    //IE6版本
                    obj.style.filter = "alpha(opacity = "+(current+step)+")";
                }
            }else if (attr == "zIndex") {
                obj.style.zIndex = json[attr];
                //层级不需要加动画，直接执行就行
            }else {
                obj.style[attr] = current + step + "px";
            }


            if (current != obj[attr]) {
                flag = false;
            }
        }

        if (flag == true) {
            clearInterval(obj.timer);
            if (fn) {  //定时器停止后，如果有回调函数，就执行回调
                fn();
            }
        }
    },20);
}

function getStyle(obj,attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj,null)[attr];
    }
}