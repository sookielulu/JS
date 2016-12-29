/**
 * Created by Administrator on 2016/9/22.
 */
window.onload = function () {

    //获取元素
    function $(id) {
        return document.getElementById(id);
    }
    var js_slider = $("js_slider");
    var slider_main_block = $("slider_main_block");  //图片的父亲
    var imgs = slider_main_block.children;  //获得所有图片
    var slider_ctrl = $("slider_ctrl");

    //生成小span
    for (var i=0; i<imgs.length; i++) {
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";
        span.innerHTML = imgs.length - i;
        slider_ctrl.insertBefore(span, slider_ctrl.children[1]);
    }
    var spans = slider_ctrl.children;
    spans[1].setAttribute("class", "slider-ctrl-con current");

    var scrollWidth = js_slider.clientWidth;  //得到大盒子的宽度（即动画每次走的距离）
    //最开始，第一张图片在正中间，其余图片都在右边（left都为310）
    for (var i=1; i<imgs.length; i++) {
        imgs[i].style.left = scrollWidth + "px";
    }

    //遍历三个按钮
    //span是8个按钮，他们都是span
    var key = 0;  //k用来控制播放哪张图片
    for (var k in spans) {  //k是索引号  span[k]为第k个span
        spans[k].onclick = function () {
            //alert(this.innerHTML);  //即1,2,3,4,5,6
            if (this.className == "slider-ctrl-prev") {
                //alert("点击了left");

                //当我们点击按钮，当前图片先慢慢走到右边，上一张图片先快速走到左边(-310)的位置
                //然后慢慢走到中间
                animate(imgs[key], {left: scrollWidth});
                --key < 0 ? key = imgs.length - 1 : key;
                imgs[key].style.left = -scrollWidth + "px";
                animate(imgs[key], {left: 0});
                setSquare();  //调用setSquare函数
            }else if (this.className == "slider-ctrl-next") {
                //alert("点击了right");

                /*
                //点击时当前图片向左走
                animate(imgs[key], {left: -scrollWidth});

                //下张图片进来
                ++key > imgs.length - 1 ? key = 0 : key;
                imgs[key].style.left = scrollWidth + "px";
                animate(imgs[key], {left: 0});
                setSquare();  //调用setSquare函数
                */
                autoplay();
            }else {
                //alert("点击了下面的span");

                //首先要获得当前索引号，直接获取比较麻烦，则通过innerHTML
                var that = this.innerHTML - 1; //字符型-1 = 数值型
                if (that > key) {
                    //做法等同于右侧按钮
                    //当前图片慢慢走到左边，点击的索引号的图片快速走到右边，再慢慢走进来
                    animate(imgs[key], {left: -scrollWidth});//当前图片走到左边
                    imgs[that].style.left = scrollWidth + "px";//点击索引号的图片快速走到右边
                    //animate(imgs[that], {left: 0});//点击索引号的图片再慢慢走进来
                }else if (that < key) {
                    animate(imgs[key], {left: scrollWidth});//当前图片走到右边
                    imgs[that].style.left = -scrollWidth + "px";
                    //animate(imgs[that], {left: 0});
                }
                key = that;
                //令key为要进来的图片的索引号，即下次的当前图片，
                // 不写这句则点击时当前图片不会移出去
                animate(imgs[that], {left: 0}); //将66，70行提出来写在这里
                setSquare();
            }
        }
    }

    //一个可以控制播放span的函数
    function setSquare() {
        //清除所有的span_current，留下需要的那一个
        for (var i=1; i<spans.length-1; i++) { //共有8个span，我们需要的是1-6
            spans[i].className = "slider-ctrl-con";
        }
        spans[key+1].className = "slider-ctrl-con current";
    }
    
    //定时器。其实定时器就是右侧按钮
    var timer = null;
    timer = setInterval(autoplay, 2000);
    function autoplay() {
        //点击时当前图片向左走
        animate(imgs[key], {left: -scrollWidth});

        //下张图片进来
        ++key > imgs.length - 1 ? key = 0 : key;
        imgs[key].style.left = scrollWidth + "px";
        animate(imgs[key], {left: 0});
        setSquare();  //调用setSquare函数
    }

    //鼠标经过清除定时器
    js_slider.onmouseover = function () {
        clearInterval(timer);
    }
    js_slider.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(autoplay, 2000);
    }
}