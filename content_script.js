'use strict';

var s = document.createElement('script');
s.src = chrome.extension.getURL('inject.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

s.onload = function(){

	var url=chrome.runtime.getURL("link_64x64.png");
  
	var evt=document.createEvent("CustomEvent");
	evt.initCustomEvent("ImgLinkEvent", true, true, url);
	document.dispatchEvent(evt);
  };