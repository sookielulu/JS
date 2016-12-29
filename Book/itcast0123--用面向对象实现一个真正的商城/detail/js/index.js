/**
 * Created by Administrator on 2016/11/2.
 */
//使用对象，搭积木

//绑定产品
$(function () {



    //实例化一个对象
    var product = new Product();
    product.name = 'hm climb bag';
    product.description = 'best for climb, best for travel, best for you';
    product.price = 1440;
    product.youhuijia = 1120;
    product.images = [
        {small:'../images/s11.jpg',big:'../images/s11.jpg'},
        {small:'../images/s12.jpg',big:'../images/s12.jpg'},
        {small:'../images/s13.jpg',big:'../images/s13.jpg'}
    ];

    //使用
    //绑定基本信息
    product.bindBasic();
    //绑定图片
    product.bindImages();


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

});