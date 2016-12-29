/**
 * Created by Administrator on 2016/11/2.
 */
//思考
//产品对象
//属性
//方法
function Product() {
    //产品名称
    this.name = '';
    //产品原价
    this.price = 0;
    //产品团购价
    this.youhuijia = 0;
    //产品描述
    this.description = '';
    //产品图片
    this.images = [
        {small:'',big:''},
        {small:'',big:''},
        {small:'',big:''}
    ];
}
Product.prototype = {

    //绑定产品基本信息
    bindBasic: function () {
        $('#pname').html(this.name);
        $('#price').html(this.price);
        $('#groupPrice').html(this.youhuijia);
        $('#description').html(this.description);
        $('#d').html(this.publisher);
    },

    //绑定图片列表
    bindImages: function () {
        //拼接
        var str = '';
        for (var i = 0; i < this.images.length; i++) {
            str += '<li>';
            str += '<img class="etalage_thumb_image" src="'+this.images[i].small+'" class="img-responsive" />';
            str += '<img class="etalage_source_image" src="'+this.images[i].big+'" class="img-responsive" />';
            str += '</li>';
        }
        $('#etalage').html(str);
        //jQuery插件实现幻灯片特效
        $('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,

            show_hint: true,
            click_callback: function(image_anchor, instance_id){
                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
            }
        });
        // This is for the dropdown list example:
        $('.dropdownlist').change(function(){
            etalage_show( $(this).find('option:selected').attr('class') );
        });
    }

    //用formateString进行图片绑定
    /*
    * bindImages: function() {
    *   var str = '';
    *   var html = '';
    *   html += '<li>';
    *   html +='<img class="etalage_thumb_image" src="@(small)" class="img-responsive" />';
    *   html += '<img class="etalage_source_image" src="@(big)" class="img-responsive" />';
    *   html += '</li>';
    *
    *   for(var i=0; i<this.images.length; i++){
    *       str += $$.formateString(html,this.images[i])
    *   }
    *
    *   //后面写法一样
    * }
    *
    * */

    //用arttemplate进行图片绑定
    /*
    * bindImages: function() {
    *   var html = '';
    *   console.log(this.images);
    *
    *   //each images as value i  中：
    *   //each表示对images数组进行遍历，遍历的每一项保存在value中
    *   //i表示images每次遍历时的索引值
    *   html += '{{each images as value i}}'
    *       html += '<li>';
    *           html += '<img class="etalage_thumb_image" src="{{value.small}}" class="img-responsive" />>'
    *           html += '<img class="etalage_source_image" src="{{value.big}}" class="img-responsive" />>'
    *       html += '</li>'
    *   html += '{{/each}}'
    *
    *   $('#etalage').html($$.artTemplate(html,this));
    *
    *   //jQuery
    *   插件实现幻灯片特效
    *   $('#etalage').etalage({
    *
    * }
    * */
}


/*

//也可以引入simplejavascriptinheritance.js框架
var Product = Class.extend({

    //基本属性
    init: function () {
        //产品名称
        this.name = '';
        //产品原价
        this.price = 0;
        //产品团购价
        this.youhuijia = 0;
        //产品描述
        this.description = '';
        //产品图片
        this.images = [
            {small:'',big:''},
            {small:'',big:''},
            {small:'',big:''}
        ];
    },

    //下面是原型对象中的方法
    //绑定产品基本信息
    bindBasic: function () {
        $('#pname').html(this.name);
        $('#price').html(this.price);
        $('#groupPrice').html(this.youhuijia);
        $('#description').html(this.description);
    },

    //绑定图片列表
    bindImages: function () {
        //拼接
        var str = '';
        for (var i = 0; i < this.images.length; i++) {
            str += '<li>';
            str += '<img class="etalage_thumb_image" src="'+this.images[i].small+'" class="img-responsive" />';
            str += '<img class="etalage_source_image" src="'+this.images[i].big+'" class="img-responsive" />';
            str += '</li>';
        }
        $('#etalage').html(str);
        //jQuery插件实现幻灯片特效
        $('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,

            show_hint: true,
            click_callback: function(image_anchor, instance_id){
                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
            }
        });
        // This is for the dropdown list example:
        $('.dropdownlist').change(function(){
            etalage_show( $(this).find('option:selected').attr('class') );
        });
    }

})

*/