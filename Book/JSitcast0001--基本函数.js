/**
 * Created by Administrator on 2016/9/18.
 */
function $(id) {
    return document.getElementById(id);
}
function show(obj) {
    obj.style.display = "block";
}
function hide(obj) {
    obj.style.display = "none";
}
function scroll() {
    if (window.pageYOffset != null) {  //IE9+ 及 普通浏览器
        //未拖动时，window.pageYOffset为0，则if中内容不会执行，因此写成 != null
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if (document.compatMode == "CSS1Compat") {
        //document.compatMode == "CSS1Compat" 表示检测是不是怪异模式的浏览器
        //也就是没有声明  <!DOCTYPE html>  的浏览器
        // BackCompat表示未声明，CSS1Compat表示已经声明
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}