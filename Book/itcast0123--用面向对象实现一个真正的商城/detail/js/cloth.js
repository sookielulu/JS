/**
 * Created by Administrator on 2016/11/16.
 */
/**
 * Created by Administrator on 2016/11/16.
 */

//product为基类
function Cloth() {
    Product.call(this,arguments);
    this.sizes = ['s','m','l'];
    this.colors = ['red', 'blue', 'white'];
}
Cloth.prototype = new Product();
Cloth.prototype.bindSizes = function () {
    var str = '';
    str += '<h3>颜色</h3>'
    for(var i = 0; i < this.sizes.length; i++) {
        str += '<li><a href="#">'+this.sizes[i]+'</a></li>'
    }
    $('.sizes').html(str);
};
Cloth.prototype.bindColors = function () {

};
Cloth.prototype.bindDOMDetail = function () {
    //拼接的形式
    var str = '';
    str += '<h1>'+this.name+'</h1>'
    str += '<ul class="rating">'
    str += '<li><a href="#" id="buyCount">'+this.buySum+'</a>人购买</li>'
}


//实例化一个对象
var cloth = new eBook();
cloth.name = 'jacascript';
cloth.description = 'good good study, day day up';
cloth.price = 144;
cloth.youhuijia = 110;
cloth.publisher = '人民邮电出版社';
cloth.pages = 670;
cloth.publishDate = 2015-1-1;
cloth.type = 'IT--JS';
cloth.images = [
    {small:'../images/s11.jpg',big:'../images/s11.jpg'},
    {small:'../images/s12.jpg',big:'../images/s12.jpg'},
    {small:'../images/s13.jpg',big:'../images/s13.jpg'}
];

//使用
//绑定基本信息
ebook.bindBasic();
//绑定图片
ebook.bindImages();


//绑定事件
$('#btnaddcart').click(function () {
    //购物车新增一个产品
    cart.products.push(product);

    //更新购物车，重新绑定购物车
    //绑定基本信息
    cart.bindBasic();
    //绑定购物车里面的产品列表
    cart.bindList();
    $(window).scrollTop(0);
});


//实例化一个购物车对象
var cart = new Cart();