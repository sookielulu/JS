/**
 * Created by Administrator on 2016/11/2.
 */

function Product() {
    //产品名称
    this.name = '';
    //产品价格
    this.price = 0;
    //产品描述
    this.description = '';
    //产品优惠价
    this.youhuijia = '';
    //产品折扣
    this.zhekou = '5.0';
    //图片
    this.images = '';
}
Product.prototype = {
    bindEvent: function () {

    },
    bindDom: function () {
        var str = '';
        str += '<dl>';
            str += '<dt><a><img src="'+this.images+'" width="384" height="225" /></a></dt>';
            str += '<dd>';
                str += '<span><a><em>'+this.zhekou+'折</em>'+this.name+'</a></span>';
            str += '</dd>';
            str += '<dd class="price">';
                str += '<em>'+this.youhuijia +'</em>';
                str += '<del>'+this.price+'</del>';
                str += '<i>销量：'+this.sales+'</i>';
            str += '</dd>';
        str += '</dl>';

        return str;
    }
}
window.onload = function () {
    var product1 = new Product();
    product1.name = "Avon雅芳小红裙套装（香体乳150ml+沐浴露150ml)";
    product1.price = 496.00;
    product1.youhuijia = 143.00;
    product1.sales = 300;
    product1.zhekou = 4.48;
    product1.images = 'image/boutque01_r2_c2.jpg';
    var product2 = new Product();
    product2.name = "单子水漾优白BB霜60g单子水漾优白BB霜60g 自然色倍润型";
    product2.price = 227;
    product2.youhuijia = 168;
    product2.sales = 400;
    product2.zhekou = 3.97;
    product2.images = 'image/boutque02_r2_c2.jpg';
    var product3 = new Product();
    product3.name = "典痘根尽痘抗痘疤修复膏25g";
    product3.price = 456;
    product3.youhuijia = 222;
    product3.sales = 312;
    product3.zhekou = 3.5;
    product3.images = 'image/boutque03_r2_c2.jpg';
    var product4 = new Product();
    product4.name = "典痘根尽尊贵礼盒版";
    product4.price = 1111;
    product4.youhuijia = 1000;
    product4.sales = 567;
    product4.zhekou = 3.5;
    product4.images = 'image/boutque04_r2_c2.jpg';
    var product5 = new Product();
    product5.name = "欧莱雅美眸深邃自动眼线笔0.1g";
    product5.price = 2000;
    product5.youhuijia = 134;
    product5.sales = 234;
    product5.zhekou = 3.5;
    product5.images = 'image/boutque05_r2_c2.jpg';

    //用数组来保存数据，只是数组中的每一项都是一个对象
    var products = [product1,product2,product3,product4,product5];

    var str = '';
    for(var i=0; i<products.length; i++) {
        str += products[i].bindDom();
    }

    var container = document.getElementById("container");
    container.innerHTML = str;
}