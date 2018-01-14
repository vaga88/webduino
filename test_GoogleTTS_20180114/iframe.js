+(function (window, document) {

  'use strict';

  function createIframe(input_id_,input_word_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    var request = createCORSRequest("get", "https://translate.google.com.tw/?hl=zh-TW#zh-CN/en/"+input_word_);
    if (request){
        request.onload = function(){
            document.getElementById("demo-area-01-show").innerHTML = request.responseText;
        };
        request.send();
    }
  }
    
  function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
  }
    
  window.createIframe = createIframe;
  window.createCORSRequest = createCORSRequest;
    
}(window, window.document));
