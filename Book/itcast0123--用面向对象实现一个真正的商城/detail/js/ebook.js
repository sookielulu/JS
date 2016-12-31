/**
 * Created by Administrator on 2016/11/16.
 */

//product为基类
function eBook() {
    Product.call(this,arguments);
    this.author = '';
    this.publisher = '';
    this.pages = 0;
    this.publishDate = 0;
    this.type = '';
    this.buySum = 0;
}
eBook.prototype = new Product();
eBook.prototype.readAll = function () {

}
eBook.prototype.readTry = function () {

}
eBook.prototype.bindDOMDetail = function () {
    //拼接的形式
    var str = '';
    str += '<h1>'+this.name+'</h1>'
    str += '<ul class="rating">'
    str += '<li><a href="#" id="buyCount">'+this.buySum+'</a>人购买</li>'
}


//实例化一个对象
var ebook = new eBook();
ebook.name = 'jacascript';
ebook.description = 'good good study, day day up';
ebook.price = 144;
ebook.youhuijia = 110;
ebook.publisher = '人民邮电出版社';
ebook.pages = 670;
ebook.publishDate = 2015-1-1;
ebook.type = 'IT--JS';
ebook.images = [
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