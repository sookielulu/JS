/**
 * Created by Administrator on 2016/11/29.
 */
(function (w) {
    /**
     * Created by Lulu on 2016/11/6.
     */
    var Myframe = function () {};

//基础框架
    Myframe.prototype = {
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
        }

    };


//实例化，这样外面的使用就不用实例化了
    var $$ = new Myframe();


//事件框架

//模块化
//采用extend，将{}中的属性和方法拷贝给$$

//基础模块
    $$.extend($$,{

    });

//事件模块
    $$.extend($$,{
        /*绑定事件*/
        on: function (id, type, fn) {
            //var dom = document.getElementById(id);
            var dom = $$.isString(id) ? document.getElementById(id) : id;
            //如果支持
            //W3C版本 --火狐 谷歌 等大多数浏览器
            //如果你想检测对象是否支持某个属性，方法，可以通过这种方式
            if(dom.addEventListener ) {
                dom.addEventListener(type, fn, false);
            }else if(dom.attachEvent){
                //如果支持 --IE
                dom.attachEvent('on' + type, fn);
            }
        },
        /*解除事件*/
        un: function(id, type, fn) {
            //var dom = document.getElementById(id);
            var dom = $$.isString(id)?document.getElementById(id):id;
            if(dom.removeEventListener){
                dom.removeEventListener(type, fn);
            }else if(dom.detachEvent){
                dom.detachEvent(type, fn);
            }

        },
        /*点击*/
        click: function(id,fn){
            this.on(id,'click',fn);
        },
        /*鼠标移上*/
        mouseover: function(id,fn){
            this.on(id,'mouseover',fn);
        },
        /*鼠标离开*/
        mouseout: function(id,fn){
            this.on(id,'mouseout',fn);
        },
        /*悬浮*/
        hover: function(id,fnOver,fnOut){
            if(fnOver){
                this.on(id,"mouseover",fnOver);
            }
            if(fnOut){
                this.on(id,"mouseout",fnOut);
            }
        },
        //Tab
        tab: function (id) {
            //如何获取某个父元素下面的子元素
            var box = document.getElementById(id);
            var spans = box.getElementsByTagName('span');
            var lis = box.getElementsByTagName('li');

            //两步走
            //第一步: 先把上半部分实现
            //群体绑定事件  -- 对所有的span绑定事件
            //群体绑定事件
            for(var i = 0; i < spans.length; i++) {
                //自定义属性
                spans[i].index=i;
                spans[i].onmouseover = function() {
                    //排他思想 --  将所有的span置为默认状态  --- 然后再将当前鼠标移上的span置为class -- select
                    for(var i = 0; i < spans.length; i++) {
                        spans[i].className='';
                        lis[i].className='';
                    }
                    this.className='select';
                    lis[this.index].className='select';
                }
            }
        },
        //获取事件event对象
        getEvent: function (e) {
            return e ? e : window.event;
        },
        //获取目标元素
        getTarget: function (e) {
            var event = $$.getEvent(e);
            return event.target || event.srcElement;
        },
        //阻止冒泡
        stopPropagation: function (event) {
            var event = $$.getEvent(event);
            if(event.stopPropagation) {
                event.stopPropagation();
            }else {
                event.cancelBubble = true;
            }
        },
        //阻止默认行为
        preventDefault: function (event) {
            var event = $$.getEvent(event);
            if(event.preventDefault) {
                event.preventDefault();
            }else {
                event.returnValue = false;
            }
        },
        //事件委托
        delegate: function (pid, eventType, selector, fn) {
            //参数处理
            var parent = $$.$id(pid);
            function handle(e) {
                var target = $$.getTarget(e);
                console.log(target.nodeName);
                if (target.nodeName.toLowerCase() === selector || target.id === selector || target.className.indexOf(selector) != -1) {
                    //在事件冒泡的时候会以此遍历每个子孙后代，如果找到对应的元素，则执行如下函数
                    //为什么使用call，因为call可以改变this指向
                    //函数中的this默认指向window，而我们希望它指向dom
                    fn.call(target);
                }
            }
            parent[eventType] = handle;
        }
    });

//选择框架
    $$.extend($$,{
        $id: function (str) {
            return document.getElementById(str);
        },
        //tag选择器，根据标签选择元素
        $tag:function(tag, context){
            if(typeof context == 'string'){
                context = $$.$id(context);
            }
            if(context){
                return context.getElementsByTagName(tag);
            }else{
                return document.getElementsByTagName(tag);
            }
        },
        //class选择器
        $class:function(className, context){
            var elements;
            var dom = [];
            if($$.isString(context)){
                context = document.getElementById(context);
            }else {
                context = document;
            }
            if(context.getElementsByClassName){
                return context.getElementsByClassName(className);
            }else{
                dom = context.getElementsByTagName('*');
                for(var i = 0,len = dom.length;i < len;i++) {
                    if(dom[i].className && dom[i].className ==className ) {
                        elements.push(dom[i]);
                    }
                }
            }
            return elements;
        },
        //多组选择器
        $group: function (content) {
            var result = [], doms = [];
            var arr = $$.trim(content).split(',');
            //alert(arr.length);
            for(var i=0,len=arr.length;i<len;i++) {
                var item = $$.trim(arr[i]);
                var first = item.charAt(0);
                var index = item.indexOf(first);
                if(first === '.') {
                    doms=$$.$class(item.slice(index+1));
                    //每次循环将doms保存在reult中
                    //result.push(doms);//错误来源

                    //错误陷阱1解决
                    pushArray(doms,result)

                }else if(first ==='#'){
                    doms=[$$.$id(item.slice(index+1))];
                    //id获取的是一个元素，而不是一个数组，所以要加[]

                    pushArray(doms,result)
                }else{
                    doms = $$.$tag(item);
                    pushArray(doms,result)
                }
            }
            return result;

            function pushArray(doms,result){
                for(var j= 0, domlen = doms.length; j < domlen; j++){
                    result.push(doms[j])
                }
            }
        },
        //层次选择器
        $cengci:function (select) {
            var sel = $$.trim(select).split(' ');
            var result = [];
            var context = [];
            for (var i = 0, len = sel.length; i < len; i++) {
                result = [];
                var item = $$.trim(sel[i]);
                var first = sel[i].charAt(0);
                var index = item.indexOf(first);
                if (first === '#') {
                    pushArray([$$.$id(item.slice(index + 1))]);
                    context = result;
                } else if (first === '.') {
                    if (context.length) {
                        for (var j = 0, contextLen = context.length; j < contextLen; j++) {
                            pushArray($$.$class(item.slice(index + 1), context[j]));
                        }
                    } else {
                        pushArray($$.$class(item.slice(index + 1)));
                    }
                    context = result;
                } else {
                    if (context.length) {
                        for (var j = 0, contextLen = context.length; j < contextLen; j++) {
                            pushArray($$.$tag(item, context[j]));
                        }
                    } else {
                        pushArray($$.$tag(item));
                    }
                    context = result;
                }
            }

            return context;

            function pushArray(doms) {
                for (var j = 0, domlen = doms.length; j < domlen; j++) {
                    result.push(doms[j])
                }
            }
        },
        //多组+层次选择器
        $select:function(str) {
            var result = [];
            var item = $$.trim(str).split(',');
            for(var i = 0, glen = item.length; i < glen; i++){
                var select = $$.trim(item[i]);
                var context = [];
                context = $$.$cengci(select);
                pushArray(context);

            };
            return result;

            function pushArray(doms){
                for(var j= 0, domlen = doms.length; j < domlen; j++){
                    result.push(doms[j])
                }
            }
        },
        //html5实现的选择器
        $all: function (selector, context) {
            context = context || document;
            return context.querySelectorAll(selector);//最终结果始终为一个dom的集合
        }
    });

//CSS
    $$.extend($$,{
        css: function (context, key, value) {
            var doms = $$.isString(context) ? $$.$all(context) : context;

            if(doms.length) {//如果获取的是集合
                if(value) {
                    //获取模式
                    for(var i = 0; i < doms.length; i++) {
                        setStyle(doms[i], key, value);
                    }
                }else {
                    return getStyle(doms[0], key);
                }
            }else{//如果只有1个dom元素
                if(value) {
                    //获取模式
                    setStyle(doms, key, value);
                }else {
                    return getStyle(doms, key);
                }
            }

            //设置
            function setStyle(dom, key, value) {
                dom.style[key] = value;
            }
            //获取
            function getStyle(dom, key) {
                if(dom.currentStyle) {
                    //IE
                    return dom.currentStyle[key];
                }else {
                    //标准浏览器
                    return window.getComputedStyle(dom,null)[key];
                }
            }
        },
        //隐藏
        hide: function (context) {
            var doms = $$.$all(context);
            //由于用$all获取的是集合，因此要遍历
            for(var i = 0; i < doms.length; i++) {
                $$.css(doms[i], 'display', 'none');
            }
        },
        //显示
        show: function (context) {
            var doms = $$.$all(context);
            //由于用$all获取的是集合，因此要遍历
            for(var i = 0; i < doms.length; i++) {
                $$.css(doms[i], 'display', 'block');
            }
        },
        //元素的高度宽度+border，不包含滚动条
        Width: function (id) {
            return $$.$id(id).clientWidth;
        },
        Height: function (id) {
            return $$.$id(id).clientHeight;
        },
        //出现滚动条时高度
        scrollWidth: function (id) {
            return $$.$id(id).scrollWidth;
        },
        scrollHeight: function (id) {
            return $$.$id(id).scrollHeight;
        },
        //出现滚动条时，相对于左上角的偏移量
        scrollTop: function (id) {
            return $$.$id(id).scrollTop;
        },
        scrollLeft: function (id) {
            return $$.$id(id).scrollLeft;
        },
        //获取屏幕的宽高
        screenWidth: function (id) {
            return window.screen.width;
        },
        screenHeight: function () {
            return window.screen.height;
        },
        //文档视口宽高
        wWidth: function () {
            return document.documentElement.clientWidth;
        },
        wHeight: function () {
            return document.documentElement.clientHeight;
        },
        //文档滚动区域的整体的宽高
        wScrollWidth: function () {
            return document.body.scrollWidth;
        },
        wScrollHeight: function () {
            return document.body.scrollHeight;
        },
        //获取滚动条相对于其顶部的偏移
        wScrollTop: function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            return scrollTop;
        },
        wScrollLeft: function () {
            var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
            return scrollLeft;
        }
    });

//属性框架
    $$.extend($$, {
        //设置/查询属性
        attr: function (context, key, value) {
            var doms = $$.$all(context);
            if(value) {  //设置属性
                for(var i = 0; i < doms.length; i++) {
                    doms[i].setAttribute(key, value);
                }
            }else {  //获取属性
                return doms[0].getAttribute(key);
            }
        },

        //添加class
        addClass: function (context, name) {
            var doms = $$.$all(context);
            for (var i = 0; i < doms.length; i++) {
                addOneName(doms[i]);
            }

            //给一个元素添加样式
            function addOneName(dom) {
                dom.className = dom.className + " " + name;
            }
        },

        //移除class
        removeClass: function (context, name) {
            var doms = $$.$all(context);
            for (var i = 0; i < doms.length; i++) {
                removeOneName(doms[i], name);
            }

            //给一个元素添加样式
            function removeOneName(dom, name) {
                dom.className = dom.className.replace(name,'');
            }
        },

        //判断是否有 class 名称为 name 的元素
        hasClass: function (context, name) {
            var doms = $$.$all(context);
            var flag = true;
            for(var i = 0; i < doms.length; i++) {
                flag = flag && check(doms[i], name);
            }

            return flag;
            function check(element, name) {
                return -1 < (" " + element.className + " ").indexOf(" " + name + " ");
            }
        },
    });

//值
    $$.extend($$, {
        //获取/设置值
        html: function (context, value) {
            var doms = $$.$all(context);
            if(value) {  //设置值
                for(var i = 0; i < doms.length; i++) {
                    doms[i].innerHTML = value;
                }
            }else {  //获取值
                return doms[0].innerHTML;
            }
        }
    });

//Ajax
    $$.extend($$,{
//Ajax
        myAjax: function (URL,fn) {
            var xhr = createXHR();  //返回了一个对象，这个对象IE6兼容
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
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
    });

//字符串相关操作
    $$.extend($$,{
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
        }
    });

//日期相关操作
    $$.extend($$,{

    });

//数字相关操作
    $$.extend($$,{
        //随机数
        random: function (begin, end) {
            return Math.floor(Math.random()*(end - begin)) + begin;
        }
    });

//判断数据类型
    $$.extend($$,{
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
        isNull: function (val) {
            return val === null;
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
        }
    });

//运动框架
    function Animate(dom,json,duration) {
        //定时器的句柄
        this.timer;
        //间隔时间
        this.interval = 16;
        //动画对象
        //this._obj = {};  //单个物体运动是一个对象，多个则为数组
        this.queen = [];
    }
    Animate.prototype = {
        //动画的本质

        //运行部分
        //就是一个循环，循环做一些事情
        _run: function () {
            var that = this;
            that.timer = setInterval(function () {
                that._loop(that._obj);
            },that.interval);
        },

        //每次循环要做的事情
        _move: function (_obj) {
            var that = this;
            var dom = _obj.dom;
            var styles = _obj.styles;
            var pass = new Date();
            var tween = that._getTween(_obj.now, pass, _obj.duration, 'easeOutBounce');
            if(tween >= 1) {
                that._stop(dom, styles);
            }else{
                that._manyProperty(dom,styles,tween);
            }
        },

        //循环，每次循环就是单物体代码
        //设计模式原则：开放封闭原则。每次代码需求变化时，只变更一个部分
        _loop: function () {
            var that = this;
            for(var i = 0; i < this.queen.length; i++) {
                var _obj = this.queen[i];
                that._move(_obj);
            }
        },

        _getTween: function (now, pass, duration, ease) {
            var eases = {
                easeOutExpo: function (t, b, c, d) {
                    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
                },
                easeOutBounce: function (t, b, c, d) {
                    if ((t/=d) < (1/2.75)) {
                        return c*(7.5625*t*t) + b;
                    } else if (t < (2/2.75)) {
                        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                    } else if (t < (2.5/2.75)) {
                        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                    } else {
                        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                    }
                }
            };
            var yongshi = pass - now;
            return eases[ease](yongshi,0,1,duration);
        },

        _stop: function (dom, styles) {
            //让动画直接运行到终点，然后停止
            this._manyProperty(dom, styles, 1);
            clearInterval(this.timer);
        },

        _oneProperty: function (dom,name,start,juli,tween) {
            if(name == 'opacity') {
                $$.css(dom, name, (start+juli*tween));
            }else {
                $$.css(dom, name, (start+juli*tween)+'px');
            }
        },
        _manyProperty: function (dom,styles,tween) {
            for(var i = 0; i < styles.length; i++) {
                this._oneProperty(dom,styles[i].name,styles[i].start,styles[i].juli,tween);
            }
        },


        //添加部分
        //接收用户传递的参数
        add: function (dom,json,duration) {
            this._adapterMany(dom,json,duration);
            this._run();
        },

        _adapterOne: function (dom, json, duration) {
            var _obj = {};
            _obj.duration = duration;
            _obj.dom = dom;
            _obj.tween = 0;
            _obj.now = new Date();
            _obj.styles = this.getStyles(dom, json);

            return _obj;
        },
        _adapterMany: function (dom, json, duration) {
            var _obj = this._adapterOne(dom, json, duration);
            this.queen.push(_obj);
        },

        getStyles: function (dom, source) {
            var styles = [];

            for(var item in source) {
                var json = {};
                //属性名称
                json.name = item;
                //起始位置
                json.start = parseFloat($$.css(dom,item));
                //距离
                json.juli = parseFloat(source[item]) - json.start;

                styles.push(json);
            }

            return styles;
        },

        //内存回收
        _destroy: function () {

        }
    };
    $$.animate = new Animate();

    w.$$ = $$;
})(window);