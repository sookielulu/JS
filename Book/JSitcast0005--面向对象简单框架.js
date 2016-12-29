/**
 * Created by Administrator on 2016/11/6.
 */
function Myframe() {

}
Myframe.prototype = {
    $id: function (str) {
        return document.getElementById(str);
    },
    $tag: function (tag) {
        return document.getElementsByTagName(tag);
    },

    //数据类型检测
    isNumber: function (val) {
            return typeof val === 'number' && isfinite(val);
        },
    isBoolean: function (val) {
            return typeof val === 'boolean';
        },
    isString: function (val) {
            return typeof val === 'string';
        },
    isUndefined: function (val) {
            return typeof val === 'undefined';
        },
    isObj: function (str) {
            if(str === null || typeof str === 'undefined') {
                return false;
            }
            return typeof str === 'object';
        },
    isArray: function (arr) {
            if(arr === null || typeof arr === 'undefined') {
                return false;
            }
            return arr.constructor === Array;
        },

    //删除空格
    //删除左边的空格
    ltrim: function (str) {
        //  ^    以xx开头
        //  $    以xx结尾
        //  \s   表示空格
        //  *    表示匹配零个或多个
        //  g    表示匹配全部
        //  (^\s*)  表示匹配以空格开头的一个或者多个字符
        //  str.replace(/(^\s*)/g,'')  表示用''替换所有的空格
        return str.replace(/(^\s*)/g,'');
    },
    //删除右边的空格
    rtrim: function (str) {
        return str.replace(/(\s*$)/g,'');
    },
    //删除左右两边的空格
    trim: function (str) {
        return str.replace(/(^\s*)|(\s*$)/g,'');
    },


    //验证是否为空
    checkNull: function (input) {
        if(input != '') {
            return true;
        }else {
            return false;
        }
    },
    //匹配数字账号
    checkNum: function (input) {
        //表示必须是1或多个数字
        var regex = /^[0-9]+$/;
        //var regex = /^[0-9]{5}$/; 表示必须是5位数字
        //match表示匹配函数
        if(input.match(regex)) {
            return true;
        }else {
            return false;
        }
    },
    //匹配字母账号
    checkAlphabet: function (input) {
        //表示必须是6-12位字母
        var regex = /^[A-Z]{6,12}$/;
        if(input.match(regex)) {
            return true;
        }else {
            return false;
        }
    },
    //匹配邮箱
    checkEmail: function (input) {
        var regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(input.match(regex)) {
            return true;
        }else {
            return false;
        }
    },

    //数据绑定，详细使用见itcast0133
    formateString: function(str,data) {
        return str.replace(/@\((\w+)\)/g, function(match, key){
            return typeof data[key] === "undefined" ? '' : data[key]});
    },

    //arttemplate语法封装，详细使用见itcast0134
    bindTemplate: function(templateId, data) {
        var html = template(templateId, data);
        return html;
    },
    bindartTemplate: function(str, data) {
        var render = template.compile(str);
        var html = render(data);
        return html;
    },

    //给一个对象扩充功能
    extendMany: function () {  //将多个对象拷贝给一个目标 extend(tar, sou1, sou2, sou3);
        var key = 0, i = 0, len = arguments.length, target = null, copy;
        if (len === 0) {  //arguments[0]为target
            return;
        }else if (len === 1) {  //arguments[0]为sou1
            target = this;
        }else {
            i++;
            target = arguments[0];
        }
        for (; i < len; i++) {
            for (key in arguments[i]) {
                copy = arguments[i][key];
                target[key] = copy;
            }
        }
        return target;
    },
    extend: function (target, source) {
        //遍历对象
        for (var i in source) {
            target[i] = source[i];
        }
        return target;
    },

    //随机数
    random: function (begin, end) {
        return Math.floor(Math.random()*(end - begin)) + begin;
    },

    //获取页面传递过来的参数
    simpleQuery: function () {
        //window.location.search方法用于截取URL中？后面的字符串
        var params = window.location.search;//params:?id,date
        var arr = params.substring(1).split(",");
        return arr;
    },
    querystring: function () {//获取URL查询字符串参数值的通用函数
        var str = window.location.search.substring(1);//获取查询字符串，即 "id=1&name=loaction"的部分
        var arr = str.split("&");//以&符号为界把查询字符串分割成数组
        var json = {};//定义一个临时对象
        for(var i=0; i<arr.length; i++) {
            var c = arr[i].indexOf("=");//获取每个参数中的等号小标的位置
            if(c==-1) continue;//如果没有发现则跳转到下一次循环继续操作
            var d = arr[i].substring(0,c);//截取等号前的参数名称，这里分别是id和name
            var e = arr[i].substring(c+1);//截取等号后的参数值
            json[d] = e;//以键/值对的形式存储在对象中
        }
        return json;//返回对象
    },

    //Ajax
    myAjax: function (URL,fn) {
        var xhr = createXHR();  //返回了一个对象，这个对象IE6兼容
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 && xhr.status < 300 || xhr.status == 304) {
                    fn(xhr.responseText);
                }else {
                    alert("错误的文件！");
                }
            }
        };
        xhr.open("get",URL,true);
        xhr.send();
        
        //闭包形式，因为这个函数只服务于Ajax函数，所以放在里面
        function createXHR() {
            //本函数来自于《JavaScript高级程序设计 第3版》第21章
            if (typeof XMLHttpRequest != "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"
                        ],
                        i, len;

                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (ex) {
                            //skip
                        }
                    }
                }

                return new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw new Error("No XHR object available.");
            }
        }
    }
};


//实例化，这样外面的使用就不用实例化了
var $$ = new Myframe();