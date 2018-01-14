+(function (window, document) {

  'use strict';

  function createIframe(input_id_,input_word_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    var getword = new ActiveXObject("Msxml2.XMLHTTP");
    getword.onReadyStateChange = gettransferword;
    getword.open("GET", "https://translate.google.com.tw/?hl=zh-TW#zh-CN/en/"+input_word_ , true);
    getword.send(null);				
  }
  
  function getgoogletranslate() {
    if (getword.readyState==4)
    {
      if (getword.status==200)
        document.write(getword.responseText);
      else
        getword ("伺服器發生錯誤，無法回傳資料！");
    }
  }

  window.createIframe = createIframe;
  window.getgoogletranslate = getgoogletranslate;

}(window, window.document));
