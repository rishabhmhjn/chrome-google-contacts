'use strict';


console.log('factories loaded');

gContacts.factory('oauth', function() {

  return chrome.extension.getBackgroundPage().oauth;

});