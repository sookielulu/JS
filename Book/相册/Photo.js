// 1、能够点击
//  (1) 找到id为。。。的Dom对象(标签)
//       var link = document.getElementById('link');
//  (2) 获取的id所在的标签有什么属性，则link后面就可以“点”出来什么
//     
//      给link注册单击事件：
//      事件三要素： 
//           事件源：  事件的触发者link
//           事件处理程序：  onclick == 匿名函数
//           事件名称： cilck
//       link.onclick = function(){
//			alert("haha");
//
//			//取消a标签默认行为的执行(即跳转)
//			return false;
//        };
//
//
//   (3)若要获取多个标签，则：
// 		var links = document.getElementsByTagName("a")
// 		for (var i = 0; i < links.length; i++) {
// 			var link = links[i];  //获取每一个a标签

// 			//给link对象注册事件
// 			link.onclick = function () {
// 				// body....
// 				return false;
// 			}
// 		}
// 2、改变图片
// 3、改变标题

function showPic(link) {
	//切换图片
	var img = document.getElementById('image');
	img.src = link.href;

	//改变p中的内容
	var p = document.getElementById('chos');
	//innerText
	p.innerText = link.title;
}