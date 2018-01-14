+(function (window, document) {

  'use strict';

  function createIframe(input_id_,input_word_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    var getcode = new ActiveXObject("Msxml2.XMLHTTP");
    getcode.onReadyStateChange = getgoogletranslate;
    getcode.open("GET", "https://translate.google.com.tw/?hl=zh-TW#zh-CN/en/"+input_word_ , true);
    getcode.send(null);				
  }
  
  function getgoogletranslate() {
    if (getcode.readyState==4)
    {
      if (getcode.status==200)
        document.write(getcode.responseText);
      else
        document.write("");
    }
  }

  window.createIframe = createIframe;
  window.getgoogletranslate = getgoogletranslate;

}(window, window.document));
