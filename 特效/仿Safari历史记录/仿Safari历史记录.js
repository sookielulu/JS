/**
 * Created by Administrator on 2016/9/29.
 */
window.onload = function () {
    var box = document.getElementById("box");
    var btn = document.getElementById("btn");
    var btn1 = btn.children[0];
    var btn2 = btn.children[1];
    var ul = document.getElementById("ul");
    var lis = ul.children;

    function getClass(obj) {
        //支持document.getElementsByClassName()的浏览器
        if(document.getElementsByClassName){
            return document.getElementsByClassName(obj);
        }

        //不支持document.getElementsByClassName()的浏览器
        var arr = [];
        var dom = document.getElementsByTagName("*");//*表示获取所有标签
        for(var i=0; i<dom.length; i++) {
            var txtarr = dom[i].className.split(" ");//分割类名，并转换为数组
            //["demo", "test"];
            for(var j=0; j<txtarr.length; j++){
                if(txtarr[j] == obj) {
                    arr.push(dom[i]);// 我们要的是div
                }
            }
        }
        return arr;

    }

    var left = getClass("left")[0];
    var right = getClass("right")[0];
    var current = getClass("cur")[0];

    var key = 0;
    btn1.onclick = function () {
        animate(lis[key], {
            left: -300,
            zIndex:
        });
        animate(lis[key+1], {
            left: 0,
            zIndex: 3
        });
        animate(lis[key+2], {
            left: 300
        });
        lis[key].className = "left";
        lis[key+1].className = "cur";
        lis[key+2].className = "right";

        key++;
    }
}