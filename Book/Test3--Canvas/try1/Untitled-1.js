// JavaScript Document


var drawing = document.getElementById("drawing");

//确定浏览器支持<canvas>元素
if (drawing.getContext){
	
	var context = drawing.getContext("2d");
	
	//设置阴影
	context.shadowOffsetX = 5;
	context.shadowOffsetY = 2;
	context.shadowBlur    = 3;
	context.shadowColor   = "rgba(0,0,0,0.5)";
	
	//设置渐变
	var gradient1 = context.createLinearGradient(55,55,115,115);//从一个点(55,55)到另一个点(115,115)的线性渐变
	gradient1.addColorStop(0,"white");
	gradient1.addColorStop(1,"black");
	
    var gradient2 = context.createRadialGradient(300,80,5,300,80,30);
	gradient2.addColorStop(0,"white");
	gradient2.addColorStop(1,"black");

	//绘制红色矩形
	context.fillStyle = "#ff0000";	
	context.fillRect(10,10,50,50);
	
	//绘制半透明的蓝色矩形
	context.fillStyle = "rgba(0,0,255,0.2)";	
	context.fillRect(30,30,50,50);
	
	//绘制渐变矩形
	context.fillStyle = gradient1;	
	context.fillRect(65,65,50,50);	
	
	context.fillStyle = gradient2;	
	context.fillRect(275,55,50,50);	
	
	//在两个矩形重叠的地方清除一个小矩形
	context.clearRect(40,40,10,10);
	
	//绘制红色描边矩形
	context.strokeStyle = "#ff0000";	
	context.strokeRect(140,140,50,50);
	
	//绘制半透明的蓝色描边矩形
	context.strokeStyle = "rgba(0,0,255,0.7)";	
	context.strokeRect(160,160,50,50);	
	
	
	//下面53-79行  为绘制一个不带数字的时钟表盘
	//开始路径
	context.beginPath();
	
	//绘制外圆
	context.arc(450,150,99,0,2*Math.PI,false);

	//绘制内圆
	context.moveTo(544,150);
	context.arc(450,150,94,0,2*Math.PI,false);
	
	//绘制分针
	context.moveTo(450,150);     //或者先通过将原点变换到（450,150） 即        context.translate(450,150);  // context.rotate(1);旋转表针
	context.lineTo(450,65);      //                                      context.moveTo(0,0);
	                             //                                      context.lineTo(0,-85);
	//绘制时针                                                             context.moveTo(0,0);
	context.moveTo(450,150);     //                                      context.lineTo(-65,0);
	context.lineTo(385,150);
	
	//描边路径
	context.stroke();
	
	//添加文本
	context.font = "bold 14px Arial";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText("12",450,65);
	
}

