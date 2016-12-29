/**
 * Created by Administrator on 2016/9/29.
 */
window.onload = function () {
    var box = document.getElementById("box");
    var nav = document.getElementById("nav");
    var list = document.getElementById("list");
    var nav_as = nav.getElementsByTagName("a");
    var lis = list.children[0].children;
    var imgs = list.getElementsByTagName("img");

    for (var i=0; i<nav_as.length; i++) {
        nav_as[i].onclick = function () {
            for (var j=0; j<nav_as.length; j++) {
                nav_as[j].className = "";
            }
            this.className = "current";


            change(this, this.innerHTML, "People", "people");
            change(this, this.innerHTML, "Animal", "animal");
            change(this, this.innerHTML, "Scene", "scene");

            if (this.innerHTML == "All") {
                for (var i=0; i<lis.length; i++) {
                    animate(lis[i].children[0], {
                        width: 0,
                        height: 0,
                        top: this.clientHeight/2,
                        left: this.clientHeight/2
                    });

                    setTimeout(function () {
                        for (var i=0; i<lis.length; i++) {
                            lis[i].style.display = "block";
                            animate(imgs[i], {
                                width: lis[i].clientWidth - 10,
                                height: lis[i].clientHeight - 10,
                                top: 0,
                                left: 0
                            })
                        }
                    },600)
                }
            }

            /*else if (this.innerHTML == "People") {
                for (var i=0; i<lis.length; i++) {
                    animate(imgs[i], {
                        width: 0,
                        height: 0,
                        top: this.clientHeight/2,
                        left: this.clientHeight/2
                    });

                    setTimeout(function () {
                        for (var i=0; i<lis.length; i++) {
                            screening("people");
                            animate(imgs[i], {
                                width: lis[i].clientWidth - 10,
                                height: lis[i].clientHeight - 10,
                                top: 0,
                                left: 0
                            })
                        }
                    },600)
                }
            }


            else if (this.innerHTML == "Animal") {
                for (var i=0; i<lis.length; i++) {
                    animate(imgs[i], {
                        width: 0,
                        height: 0,
                        top: this.clientHeight/2,
                        left: this.clientHeight/2
                    });

                    setTimeout(function () {
                        for (var i=0; i<lis.length; i++) {
                            screening("animal");
                            animate(imgs[i], {
                                width: lis[i].clientWidth - 10,
                                height: lis[i].clientHeight - 10,
                                top: 0,
                                left: 0
                            })
                        }
                    },600)
                }
            }





            else if (this.innerHTML == "Scene"){
                for (var i=0; i<lis.length; i++) {
                    animate(imgs[i], {
                        width: 0,
                        height: 0,
                        top: this.clientHeight/2,
                        left: this.clientHeight/2
                    });

                    setTimeout(function () {
                        for (var i=0; i<lis.length; i++) {
                            screening("scene");
                            animate(imgs[i], {
                                width: lis[i].clientWidth - 10,
                                height: lis[i].clientHeight - 10,
                                top: 0,
                                left: 0
                            })
                        }
                    },600)
                }
            }*/
        }
    }

    for (var j=0; j<lis.length; j++) {
        lis[j].onmouseover = function () {
            animate(this.getElementsByTagName("span")[0], {
                top: 0
            })
        }
        lis[j].onmouseout = function () {
            animate(this.getElementsByTagName("span")[0], {
                top: this.clientHeight
            })
        }
    }


    function change(that, inner, sClass, sclass) {
        if (inner == sClass) {
            for (var i=0; i<lis.length; i++) {
                animate(lis[i].children[0], {
                    width: 0,
                    height: 0,
                    top: that.clientHeight/2,
                    left: that.clientHeight/2
                });

                setTimeout(function () {
                    for (var i=0; i<lis.length; i++) {
                        screening(sclass);
                        animate(imgs[i], {
                            width: lis[i].clientWidth - 10,
                            height: lis[i].clientHeight - 10,
                            top: 0,
                            left: 0
                        })
                    }
                },600)
            }
        }
    }

    function screening(sClass)
    {
        for(var i=0;i<lis.length;i++)
        {
            if(imgs[i].className == sClass)
            {
                lis[i].style.display = 'block';
            }
            else
            {
                lis[i].style.display = 'none';
            }
        }
    }
}