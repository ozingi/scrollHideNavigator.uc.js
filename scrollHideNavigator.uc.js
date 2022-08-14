// ==UserScript==
// @name            scrollHideNavigator.uc.js
// @author          ozingi
// @include         main
//
// ==/UserScript==

var navBar = document.getElementById("nav-bar");
var titleBar = document.getElementById("titlebar");
var appcontent1 = document.getElementById("appcontent");



appcontent1.onmouseover = function () {

    var scrollFunc = function (e) {
        e = e
        ////Firefox滑轮事件  
        if (e.detail > 0) { //当滑轮向上滚动时  
            navBar.style.marginTop = "-"+navBar.clientHeight+"px";
            navBar.style.opacity = 0;

            titleBar.style.marginTop = "-"+titleBar.clientHeight+"px";
            titleBar.style.opacity = 0;

        }
        if (e.detail < 0) { //当滑轮向下滚动时  
            //console.log("滑轮向下滚动");
            navBar.style.marginTop = "0px";
            navBar.style.opacity = 100;

            titleBar.style.marginTop = "0px";
            titleBar.style.opacity = 100;

        }
    }
    ////给页面可视部分绑定滑轮滚动事件  
    ////firefox  
    appcontent.addEventListener('DOMMouseScroll', scrollFunc, false);
}


