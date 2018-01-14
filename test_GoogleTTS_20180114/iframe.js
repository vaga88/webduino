+(function (window, document) {

  'use strict';

  function createIframe(input_id_,input_word_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onReadyStateChange = getgoogletranslate;
    xhttp.open("GET", "https://translate.google.com.tw/?hl=zh-TW#zh-CN/en/"+input_word_ , true);
    xhttp.send();				
  }
  
  function getgoogletranslate() {
    if (xhttp.readyState==4)
    {
      if (xhttp.status==200)
        document.getElementById("demo-area-01-show").innerHTML = xhttp.responseText;
      else
        document.write("");
    }
  }

  window.createIframe = createIframe;
  window.getgoogletranslate = getgoogletranslate;

}(window, window.document));
