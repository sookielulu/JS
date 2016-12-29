/**
 * Created by Administrator on 2016/11/8.
 */
$(function () {
    var data = [
        {
            name:'白羊座',
            time: '3.21-4.19'
        },
        {
            name: '金牛座',
            time: '4.20-5.20'
        },
        {
            name: '双子座',
            time: '5.21-6.21'
        },
        {
            name: '巨蟹座',
            time: '6.22-7.22'
        },
        {
            name: '狮子座',
            time: '7.23-8.22'
        },
        {
            name: '处女座',
            time: '8.23-9.22'
        },
        {
            name: '天秤座',
            time: '9.23-10.23'
        },
        {
            name: '天蝎座',
            time: '10.24-11.22'
        },
        {
            name: '射手座',
            time: '11.23-12.21'
        },
        {
            name: '摩羯座',
            time: '12.22-1.19'
        },
        {
            name: '水平座',
            time: '1.20-2.18'
        },
        {
            name: '双鱼座',
            time: '2.19-3.20'
        }
    ];
    function Xingzuo(data, num) {
        this.index = num;
        this.data = data;
        this.dom = $('<div></div>').addClass('item num-' + num);
        this.config = {jqueryContainer: $('.xingzuo')};
        this.init();
    }
    Xingzuo.prototype = {
        init: function () {
            this.bindDom();
            this.bindEvents();
        },
        bindDom: function () {
            var str = '';
            str += '<div class="image"></div>';
            str += '<div class="description">';
            str += '<p class="name">@(name)</p>';
            str += '<p class="time">@(time)</p>';
            str += '<div class="mark"></div>';
            str += '</div>';
            //生成单个的星座对象
            //将单个的星座对象放到最大的容器里面
            this.dom.html($$.formateString(str, this.data)).appendTo(this.config.jqueryContainer);
            /*
             <div class="item num-0">
             <div class="image"></div>
             <div class="description">
             <p class="name">白羊座</p>
             <p class="time">3.21-4.19</p>
             <div class="mark"></div>
             </div>
             </div>
             */
        },
        bindEvents: function () {
            var that = this;
            this.dom.on('mouseenter',function () {
                that.dom.addClass('is-hover');
            }).on('mouseleave',function () {
                that.dom.removeClass('is-hover');
            });
            this.dom.click(function () {
                //that.dom.toggleClass('selected');

                //下面两种方式都可以
                //window.open('detail.html?num=0');
                window.location = 'detail.html?num=' + that.index;
            })
        }
    };

    for(var i = 0; i < data.length; i++) {
        new Xingzuo(data[i],i);
    }
})
