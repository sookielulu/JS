/**
 * Created by Administrator on 2016/9/27.
 */
window.onload = function () {
    function $(id) {
        return document.getElementById(id);
    }
    var box = $("box");
    var back = $("back");
    var prev = $("prev");
    var next = $("next");
    var big1 = $("big1");
    var big2 = $("big2");
    var imgbig1 = big1.getElementsByTagName("img");
    var imgbig2 = big2.getElementsByTagName("img");
    var main = $("main");
    var groups = main.children;
    var imgsmall1 = groups[0].getElementsByTagName("img");
    var imgsmall2 = groups[1].getElementsByTagName("img");
    var span1 = groups[0].getElementsByTagName("span")[0];
    var span2 = groups[1].getElementsByTagName("span")[0];

    var json = [
        {
            left:50
        },
        {
            left:260
        },
        {
            left:470
        },
        {
            left:690
        },
        {
            left:900
        },
        {
            left:1110
        }
    ];

    /*groups[0].onclick = function () {
        change();
        groups[1].style.display = "none";
    }
    groups[1].onclick = function () {
        change();
        groups[0].style.display = "none";
    }*/



    //照片旋转
    /*for(var j=0;j<aImg.length;j++)
    {
        var ranDom =  Math.random() * 40 -20;

        aImg[j].style.WebkitTransform = 'rotate(' + ranDom + 'deg)';
        aImg[j].style.MozTransform = 'rotate(' + ranDom + 'deg)';
        aImg[j].style.MskitTransform = 'rotate(' + ranDom + 'deg)';
        aImg[j].style.OTransform = 'rotate(' + ranDom + 'deg)';
    }*/


    groupOpen(0, imgsmall1,span1,span2,imgbig1);
    groupOpen(1, imgsmall2,span2,span1,imgbig2);

    /*back.onclick = function () {
        for (var i=0; i<groups.length; i++) {
            for (var j=0; j<json.length; j++) {
                animate(imggroup[i],{
                    left: groups[i].offsetLeft
                })
            }
        }
    }*/
    function groupOpen(index,imggroup,spanclose,spanopen,imgbig) {


        //照片旋转
        for(var j=0;j<imggroup.length;j++)
        {
            var ranDom =  Math.random() * 40 -20;

            imggroup[j].style.WebkitTransform = 'rotate(' + ranDom + 'deg)';
            imggroup[j].style.MozTransform = 'rotate(' + ranDom + 'deg)';
            imggroup[j].style.MskitTransform = 'rotate(' + ranDom + 'deg)';
            imggroup[j].style.OTransform = 'rotate(' + ranDom + 'deg)';
        }
        for(var j=0;j<imgbig.length;j++)
        {
            var ranDom =  Math.random() * 40 -20;

            imgbig[j].style.WebkitTransform = 'rotate(' + ranDom + 'deg)';
            imgbig[j].style.MozTransform = 'rotate(' + ranDom + 'deg)';
            imgbig[j].style.MskitTransform = 'rotate(' + ranDom + 'deg)';
            imgbig[j].style.OTransform = 'rotate(' + ranDom + 'deg)';
        }


        //点击LEFT IMAGES 和 RIGHT IMAGES 展开图片
        groups[index].onclick = function () {
            change(imggroup);
            groups[1-index].style.display = "none";
            spanclose.style.display = "none";
            back.style.display = "block";



            //点击展开后的下面一排小图
            for (var i=0; i<imggroup.length; i++) {
                imggroup[i].ind = i;
                imggroup[i].onclick = function () {
                    for (var j=0; j<imggroup.length; j++) {
                        animate(imgbig[j], {
                            top: -900
                        });
                    }
                    imgbig[this.ind].style.top = 700 + "px";
                    animate(imgbig[this.ind], {
                        top: -50
                    });

                    prev.style.display = "block";
                    next.style.display = "block";


                    //点击prev和next
                    var that = this.ind;
                    prev.onclick = function () {
                        animate(imgbig[that], {
                            top: -800});
                        --that < 0 ? that = imggroup.length - 1 : that;
                        imgbig[that].style.top = 700 + "px";
                        animate(imgbig[that], {
                            top: -50
                        });
                    }
                    next.onclick = function () {
                        animate(imgbig[that], {
                            top: -900});
                        ++that > imggroup.length - 1 ? that = 0 : that;
                        imgbig[that].style.top = 700 + "px";
                        animate(imgbig[that], {
                            top: -50
                        });
                    }

                    //点击back返回
                    back.onclick = function () {
                        back.style.display = "none";
                        spanopen.style.display = "block";
                        spanclose.style.display = "block";
                        groups[1-index].style.display = "block";
                        for (var j=0; j<json.length; j++) {
                            animate(imggroup[j],{
                                left: groups[index].offsetLeft
                            });
                            animate(imgbig[j], {
                                top: -900
                            })
                        }

                    }
                }
            }


        
        
        }
    }
    function change(imggroup) {
        for (var i=0; i<json.length; i++) {
            animate(imggroup[i],{
                left: json[i].left
            })  // 回调函数是等动画执行完毕  才执行
        }
    }

}