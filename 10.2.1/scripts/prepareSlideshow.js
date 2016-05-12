/*
 * @Author: ybjam
 * @Date:   2016-05-08 15:36:40
 * @Last Modified by:   ybjam
 * @Last Modified time: 2016-05-08 20:39:17
 */
function prepareSlideshow() {
	//确保浏览器支持DOM方法 //

	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src", "images/topics.gif");
	preview.setAttribute("alt", "building blocks of web design");
	preview.setAttribute("id", "preview");
	slideshow.appendChild(preview);


	// 取得列表中所有的链接
	var list = document.getElementById('linklist');
	insertAfter(slideshow, list);
	var links = list.getElementsByTagName("a");
	// 为mouseover事件添加动画效果
	links[0].onmouseover = function() {
		moveElement("preview", -100, 0, 10);
	};
	links[1].onmouseover = function() {
		moveElement("preview", -200, 0, 10);
	};
	links[2].onmouseover = function() {
		moveElement("preview", -300, 0, 10);



	};
}
addLoadEvent(prepareSlideshow);