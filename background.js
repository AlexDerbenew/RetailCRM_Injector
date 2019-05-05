'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
	var currentURL = tab.url;
	if( currentURL.substr(0, 40) == "https://yakosmetika.retailcrm.ru/orders/" && currentURL.substr(-4, 4) == "edit" ){
		chrome.tabs.executeScript(tab.id, {file: "inject.js"});
	}
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	var currentURL = tab.url;
	if( currentURL.substr(0, 40) == "https://yakosmetika.retailcrm.ru/orders/" && currentURL.substr(-4, 4) == "edit" && changeInfo.status == "complete"){
		chrome.tabs.executeScript(tabId, {file: "inject.js"});
	}
});


// var oldURL = window.location.href;
// function checkURLchange(currentURL){
// 	var currentURL = window.location.href;
//     if(currentURL != oldURL){
//         console.log("url changed!");
// 		oldURL = currentURL;
// 		if( currentURL.substr(0, 40) == "https://yakosmetika.retailcrm.ru/orders/" && currentURL.substr(-4, 4) == "edit" ){
// 			chrome.tabs.executeScript(null, {file: "inject.js"});
// 		}
//     }
// 	console.log("TEST");
//     oldURL = window.location.href;
//     setTimeout(function() {
//         checkURLchange(window.location.href);
//     }.bind(this), 3000);
// }

// checkURLchange(currentURL);
