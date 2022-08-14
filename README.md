In the PC implementation and Firefox mobile version of the same scroll page automatically hide navigation bar
## 页面向下滚动自动隐藏firefox导航栏
### 简述
firefox移动版有个滑动页面浏览时自动隐藏导航栏的功能，这个功能很机智，能够最大化的同时让你尽量无感。然后想在pc实现这个功能，搜了一下发现uc.js配置还是可以在最新的firefox 105生效的于是就自己做了这个scrollHideNavigator.uc.js
### 效果图
[gif](https://ozingi.github.io/img/Preview_scrollHideNavigator.gif)

<img src="https://ozingi.github.io/img/Preview_scrollHideNavigator.gif" alt="kale"/>


### 使用方法
1、将上面environment文件夹内的zip文件下载下来，其中fx-folder.zip解压复制到firefox的安装目录，另一个utils_scripts_only.zip待会再操作
![图片](https://user-images.githubusercontent.com/23213458/184523496-dc5bc83e-2e1e-4d74-bd2d-cfd1e96ae2a1.png)

2、打开firefox配置文件夹，打开路径：菜单>帮助>更多排障信息，之后再找到配置文件夹一栏中的打开文件夹按钮，

3、点击打开文件夹按钮后就打开了firefox配置文件夹，然后在此新建个“chrome”名字的文件夹，将utils_scripts_only.zip解压复制到chrome，
![图片](https://user-images.githubusercontent.com/23213458/184523514-0865c8a6-cc1d-4711-8cbb-5ddfe40a904e.png)

4、之后将userChrome.css和scrollHideNavigator.uc.js也复制到chrome文件夹

![图片](https://user-images.githubusercontent.com/23213458/184523536-3b363e99-6e49-4af0-8a25-3e7f82f34467.png)

5、 地址栏打开 `about:config` 搜索 `toolkit.legacyUserProfileCustomizations.stylesheets` 设置为 `true`

6、重启firefox，大功告成。

environment文件来源[https://github.com/xiaoxiaoflood/firefox-scripts](https://github.com/xiaoxiaoflood/firefox-scripts)

### 🥰如果喜欢你也可以请我喝果汁🥰
### [打赏 / Donate](https://ozingi.github.io/img/payment/Alipay.jpg)
<img alt="图片笑死了" style="width:40% " src="https://ozingi.github.io/img/payment/Alipay.jpg"/>

### 推广
[进入web3领取最高1万元数字礼包](https://ozingi.github.io/html/AD/crypto.html)

