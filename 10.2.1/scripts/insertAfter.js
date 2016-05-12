/*
 * @Author: ybjam
 * @Date:   2016-05-08 20:34:02
 * @Last Modified by:   ybjam
 * @Last Modified time: 2016-05-08 20:44:01
 */

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);

        // statement
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
