// ==UserScript==
// @name            scrollHideNavigator.uc.js
// @author          ozingi
// @include         main
//
// ==/UserScript==

var navBar = document.getElementById("nav-bar");
var titleBar = document.getElementById("titlebar");
var appcontent1 = document.getElementById("appcontent");
navBar.style.transition = "margin-top ease 0.3s, opacity ease 0.5s";
appcontent1.onmouseover = function () {
    var scrollFunc = function (e) {
        e = e
        ////Firefox滑轮事件  
        if (e.detail > 0) { //当滑轮向上滚动时  
            titleBar.style.marginTop = "-" + titleBar.clientHeight + "px";
            navBar.style.marginTop = "-" + navBar.clientHeight + 1 + "px";
            navBar.style.opacity = 0;
        }
        if (e.detail < 0) { //当滑轮向下滚动时
            navBar.style.marginTop = titleBar.style.marginTop = "0px";
            navBar.style.opacity = 100;
        }
    }
    ////给页面可视部分绑定滑轮滚动事件  
    ////firefox  
    appcontent.addEventListener('DOMMouseScroll', scrollFunc, false);
}



