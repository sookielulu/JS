
/**
 * Created by Administrator on 2016/9/25.
 */


window.onload = function () {


        function animate(obj, json, fn) {
            clearInterval(obj.timer);
            //var current = getStyle(obj, attr);
            obj.timer = setInterval(function () {
                var flag = true;

                for (var attr in json) {
                    var current = 0;
                    if (attr == "opacity") {
                        current = getStyle(obj, attr)*100;
                    }else {
                        current = parseInt(getStyle(obj, attr));
                    }

                    var step = (json[attr] - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);

                    if (attr == "opacity") {
                        if ("opacity" in obj.style) {
                            obj.style.opacity = (current + step) / 100;
                        }else {
                            obj.style.filter = "alpha(opacity = "+(current + step)+")";
                        }
                    }else if (attr == "zIndex") {
                        obj.style[attr] = json[attr];
                    }
                    else {
                        obj.style[attr] = current + step + "px";
                    }

                    if (current != json[attr]) {
                        flag = false;
                    }


                }
                if (flag) {
                    clearInterval(obj.timer);
                    if (fn) {
                        fn();
                    }
                }
            },20);
        }

        function getStyle(obj, attr) {
            if (obj.currentStyle) {
                return obj.currentStyle[attr];
            }else {
                return window.getComputedStyle(obj, null)[attr];
            }
        }


        var wrap = document.getElementById("wrap");  // 大盒子
        var arrow = document.getElementById("arrow");  // 三角
        var slider = document.getElementById("slide");
        var lis = slider.getElementsByTagName("li");  // 所有要操作的盒子

        wrap.onmouseover = function () {
            animate(arrow, {opacity: 100});
        }
        wrap.onmouseout = function () {
            animate(arrow, {opacity: 0});
        }

        var json = [
            {   //  1
                width:400,
                top:20,
                left:50,
                opacity:20,
                z:2
            },
            {  // 2
                width:600,
                top:70,
                left:0,
                opacity:80,
                z:3
            },
            {   // 3
                width:800,
                top:100,
                left:200,
                opacity:100,
                z:4
            },
            {  // 4
                width:600,
                top:70,
                left:600,
                opacity:80,
                z:3
            },
            {   //5
                width:400,
                top:20,
                left:750,
                opacity:20,
                z:2
            }
        ];


        var jieliu = true;
        change();
        var as = arrow.children;
    for (var k in as) {
        as[k].onclick = function () {
            if (this.className == "prev") {
                //移除第一个（即后左），放到json最后一个（即后右）
                if (jieliu == true) {
                    change(false);
                    jieliu = false;  //点击完之后，立刻取反
                }
            }else {
                //移除最后一个（即后右），放到json第一个（即后左）
                if (jieliu == true) {
                    change(true);
                    jieliu = false;
                }
            }
        }
    }


    function change(flag) {

        //判断点击的是左侧还是右侧按钮
        if (flag) {
            //移除最后一个（即后右），放到json第一个（即后左）
            json.unshift(json.pop());
        }else {
            //移除第一个（即后左），放到json最后一个（即后右）
            json.push(json.shift());
        }

        for (var i=0; i<json.length; i++) {
            animate(lis[i],{
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: json[i].opacity,
                zIndex: json[i].z
            },function(){ jieliu = true;})  // 回调函数是等动画执行完毕  才执行
        }
    }
}

