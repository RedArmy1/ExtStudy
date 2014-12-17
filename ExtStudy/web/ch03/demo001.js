/**
 * Created by qwn on 2014/12/13.
 */
var appFunction = function () {
    var childNode = Ext.dom.Element.get('numbersList').child('li');
    console.info(childNode.dom.innerHTML);
};