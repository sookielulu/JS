/**
 * Created by Administrator on 2016/11/2.
 */
function Cart() {
    //购物车的产品个数
    this.sum = 0;
    //总价
    this.price = 0;
    //产品列表
    this.products = [];
}
Cart.prototype = {

    //结算产品总价
    getAllPrice: function () {
        var sum = 0;
        for(var i = 0; i < this.products.length; i++) {
            sum += this.products[i].youhuijia;
        }
        return sum;
    },
    getSum: function () {
        return this.products.length;
    },

    //绑定基本信息： 个数+总价
    bindBasic: function () {
        //个数
        $('.cartsum').html(this.getSum());
        //价格  
        $('.total_right').html(this.getAllPrice());
    },
    
    //绑定列表
    bindList: function () {
        var str = '';
        for (var i = 0; i < this.products.length; i++) {
            str += '<div class="cart_box">';
                str += '<div class="message'+(i+1)+'">';
                    str += '<div class="alert-close'+(i+1)+'"> </div>';
                    str += '<div class="list_img"><img src="'+this.products[i].images.small+'" class="img-responsive" alt=""/></div>';
                    str += '<div class="list_desc"><h4><a href="#">'+this.products[i].name+'</a></h4>1 x<span class="actual">'+this.products[i].youhuijia+'</span></div>';
                    str += '<div class="clearfix"></div>';
                str += '</div>';
            str += '</div>';
        }
        $('.shopping_cart').html(str);
    }
}