/**
 * Created by Administrator on 2016/11/6.
 */
//数字：^[0-9]*$
//n位的数字：^\d{n}$
//至少n位数字：^\d{n,}$
//m-n位的数字：^\d{m,n}$
//零和非零开头的数字：^(0|[1-9][0-9]*)$
//非零开头的最多带两位小数的数字：^([1-9][0-9]*)+(.[0-9]{1,2})?$
//带1-2位小数的正数或负数：^(\-)?\d+(\.\d{1,2})?$
//正数、负数、和小数：^(\-|\+)?\d+(\.\d+)?$
//有两位小数的正实数：^[0-9]+(.[0-9]{2})?$
//有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$


//整数：^-?\d+$
//非零的正整数：^\+?[1-9][0-9]*$
//非零的负整数：^\-[1-9][0-9]*$
//非负整数（正整数 + 0）  ^\d+$  或  ^[1-9]\d*|0$
//非正整数（负整数 + 0）  ^((-\d+)|(0+))$  或  ^-[1-9]\d*|0$


//浮点数  ^(-?\d+)(\.\d+)?$
//正浮点数   ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
//负浮点数  ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
//非正浮点数（负浮点数 + 0） ^((-\d+(\.\d+)?)|(0+(\.0+)?))$
//非负浮点数（正浮点数 + 0）：^\d+(\.\d+)?$


//双字节字符：[^\x00-\xff]    (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))
//汉字：^[\u4e00-\u9fa5],{0,}$
//英文和数字：^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$
//长度为3的字符：^.{3}$
//长度为3-20的所有字符：^.{3,20}$
//由26个英文字母组成的字符串：^[A-Za-z]+$
//由26个大写英文字母组成的字符串：^[A-Z]+$
//由26个小写英文字母组成的字符串：^[a-z]+$
//由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
//由数字、26个英文字母或者下划线组成的字符串：^\w+$
//中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
//中文、英文、数字但不包括下划线等符号：^[\u4E00-\u9FA5A-Za-z0-9]+$ 或 ^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$
//可以输入含有^%&',;=?$\"等字符：[^%&',;=?$\x22]+
//禁止输入含有~的字符：[^~\x22]+


//空白行：\n\s*\r
//帐号是否合法：^[a-zA-Z][a-zA-Z0-9_]{4,15}$    (字母开头，允许5-16字节，允许字母数字下划线)
//用户密码: ^[a-zA-Z]\w{5,17}$    (字母开头，长度在6-18之间，只能包含字符、数字和下划线)
//强密码：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$   (必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)
//Email地址：^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
//url域名：[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?
//InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$
//手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
//电话号码：^(\d{3,4}|\d{3,4}-)?\d{7,8}$ 正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。
//身份证号（15位或18位数字）：^\d{15}|\d{}18$
//15位身份证：^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$
//18位身份证：^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$
//日期格式：^\d{4}-\d{1,2}-\d{1,2}
//一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12”
//一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$    正确格式为：01、09和1、31。


//腾讯QQ号：[1-9][0-9]{4,}    (腾讯QQ号从10000开始)
//中国邮政编码：[1-9]\d{5}(?!\d)    (中国邮政编码为6位数字)
//IP地址：\d+\.\d+\.\d+\.\d+    (提取IP地址时有用)



//目录:
//1:js 字符串长度限制、判断字符长度 、js限制输入、限制不能输入、textarea 长度限制
//2.:js判断汉字、判断是否汉字 、只能输入汉字
//3:js判断是否输入英文、只能输入英文
//4:js只能输入数字,判断数字、验证数字、检测数字、判断是否为数字、只能输入数字
//5:判断输入内容是否为空
//6:判断日期类型是否为YYYY-MM-DD格式的类型
//7:判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型
//8:判断日期类型是否为hh:mm:ss格式的类型
//9:判断输入的字符是否为英文字母
//10:判断输入的字符是否为整数
//11:判断输入的字符是否为双精度
//12:判断输入的字符是否为:a-z,A-Z,0-9
//13:判断输入的字符是否为中文
//14:判断输入的EMAIL格式是否正确
//15:判断输入的邮编(只能为六位)是否正确
//16:判断输入的数字不大于某个特定的数字
//17:计算字符串长度



//1. 长度限制
function test()
{
    if(document.a.b.value.length>50)
    {
        alert("不能超过50个字符！");
        document.a.b.focus();
        return false;
    }
}

//2. 只能是汉字
<input onkeyup="value="/oblog/value.replace(/[^u4E00-u9FA5]/g,'')">

//3. 只能是英文
function onlyEng()
{
    if(!(event.keyCode>=65&&event.keyCode<=90))
        event.returnvalue=false;
}

//4. 只能是数字
function onlyNum()
{
    if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105))) {
        return flase;
    }
//考虑小键盘上的数字键
}


//5. 判断输入内容是否为空
function IsNull(){
    var str = document.getElementById('str').value.trim();
    if(str.length==0){
        alert('对不起，文本框不能为空或者为空格!');
        //请将“文本框”改成你需要验证的属性名称!
    }
}

//6. 判断日期类型是否为YYYY-MM-DD格式的类型
function IsDate(){
    var str = document.getElementById('str').value.trim();
    if(str.length!=0){
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
        var r = str.match(reg);
        if(r==null)
            alert('对不起，您输入的日期格式不正确!');
        //请将“日期”改成你需要验证的属性名称!
    }
}

//7. 判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型
function IsDateTime(){
    var str = document.getElementById('str').value.trim();
    if(str.length!=0){
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        var r = str.match(reg);
        if(r==null)
            alert('对不起，您输入的日期格式不正确!');
        //请将“日期”改成你需要验证的属性名称!
    }
}

//8. 判断日期类型是否为hh:mm:ss格式的类型
function IsTime()
{
    var str = document.getElementById('str').value.trim();
    if(str.length!=0){
        reg=/^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/
        if(!reg.test(str)){
            alert("对不起，您输入的日期格式不正确!");
            //请将“日期”改成你需要验证的属性名称!
        }
    }
}

//9. 判断输入的字符是否为英文字母
function IsLetter()
{
    var str = document.getElementById('str').value.trim();
    if(str.length!=0){
        reg=/^[a-zA-Z]+$/;
        if(!reg.test(str)){
            alert("对不起，您输入的英文字母类型格式不正确!");
            //请将“英文字母类型”改成你需要验证的属性名称!
        }
    }
}

//10. 判断输入的字符是否为整数
function IsInteger()
{
    var str = document.getElementById('str').value.trim();
    if(str.length!=0){
        reg=/^[-+]?\d*$/;
        if(!reg.test(str)){
            alert("对不起，您输入的整数类型格式不正确!");
            //请将“整数类型”要换成你要验证的那个属性名称！
        }
    }
}

//11. 判断输入的字符是否为双精度
function IsDouble(val)
{
    var str = document.getElementById('str').value.trim();
    if(str.length!=0){
        reg=/^[-\+]?\d+(\.\d+)?$/;
        if(!reg.test(str)){
            alert("对不起，您输入的双精度类型格式不正确!");
            //请将“双精度类型”要换成你要验证的那个属性名称！
        }
    }
}


//12. 判断输入的字符是否为:a-z,A-Z,0-9
function IsString()
{
    var str = document.getElementById('str').value.trim();
    if(str.length!=0){
        reg=/^[a-zA-Z0-9_]+$/;
        if(!reg.test(str)){
            alert("对不起，您输入的字符串类型格式不正确!");
            //请将“字符串类型”要换成你要验证的那个属性名称！
        }
    }
}

//13. 判断输入的字符是否为中文
function IsChinese()
{
    var str = document.getElementById('str').value.trim();
    if(str.length!=0){
        reg=/^[\u0391-\uFFE5]+$/;
        if(!reg.test(str)){
            alert("对不起，您输入的字符串类型格式不正确!");
            //请将“字符串类型”要换成你要验证的那个属性名称！
        }
    }
}

//14. 判断输入的EMAIL格式是否正确
function IsEmail()
{
    var str = document.getElementById('str').value.trim();
    if(str.length!=0){
        reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(!reg.test(str)){
            alert("对不起，您输入的字符串类型格式不正确!");
            //请将“字符串类型”要换成你要验证的那个属性名称！
        }
    }
}

//15. 判断输入的邮编(只能为六位)是否正确
function IsZIP()
{
    var str = document.getElementById('str').value.trim();
    if(str.length!=0){
        reg=/^\d{6}$/;
        if(!reg.test(str)){
            alert("对不起，您输入的字符串类型格式不正确!");
            //请将“字符串类型”要换成你要验证的那个属性名称！
        }
    }
}

//16. 判断输入的数字不大于某个特定的数字
function MaxValue()
{
    var val = document.getElementById('str').value.trim();
    if(str.length!=0){
        reg=/^[-+]?\d*$/;
        if(!reg.test(str)){//判断是否为数字类型
            if(val>parseInt('123')) //“123”为自己设定的最大值
            {
                alert('对不起，您输入的数字超出范围');
                //请将“数字”改成你要验证的那个属性名称！
            }
        }
    }
}

//17.





























