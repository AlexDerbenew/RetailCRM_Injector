'use strict';
console.log("Injection file worked");

var imgUrl = chrome.extension.getURL("./link_64x64.png");

var orderIDs = Array();
var elements = [].slice.call(document.getElementsByClassName('status-prop-list'));
if(elements.length > 2){
    elements.slice(1, -1);
}

[].forEach.call(elements, function(props){
    props = [].slice.call(props.childNodes)[0].childNodes;
    [].forEach.call(props, function(prop){
        if(prop.getAttribute('data-code').includes('supply') || prop.getAttribute('data-code').includes('order')){
            orderIDs.push(prop.getAttribute('data-code').replace( /^\D+/g, ''));
        }
    });
});

var needles = [].slice.call(document.getElementsByClassName('order-product-properties'));
if(needles.length > 2){
    needles.slice(1, -1);
}
var counter = 0;
[].forEach.call(needles, function(needle){
    needle = [].slice.call(needle.children);
    [].forEach.call(needle, function(prop){
        var link = document.createElement('a');
        if(prop.getAttribute('title').includes('заказ') || prop.getAttribute('title').includes('поставка')){
            var number = orderIDs[counter];
            link.setAttribute('href', 'https://yakosmetika.retailcrm.ru/orders/'+number+'/edit');
            link.setAttribute('display','inline-block');
            link.setAttribute('style','float:left');
            //link.setAttribute('onclick', '(new Promise((resolve) => setTimeout(resolve, 2000))).then(()=>{document.dispatchEvent(new Event(\'OrderPageLoaded\'));})');
            var linkImg = document.createElement('img');
            linkImg.setAttribute('src', imgUrl);
            linkImg.setAttribute('alt', 'Быстрый переход');
            linkImg.setAttribute('width', '10');
            linkImg.setAttribute('height', '10');
            link.appendChild(linkImg);
            prop.before(link);
            counter++;
        }
    });
});