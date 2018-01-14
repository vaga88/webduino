+(function (window, document) {

  'use strict';

  function createIframe(input_id_,input_word_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    var myWindow = window.open("https://translate.google.com.tw/?hl=zh-TW#zh-CN/en/"+input_word_,"_blank");
   
    myWindow.document.getElementById('gt-res-listen').class="trans-listen-button goog-toolbar-button goog-toolbar-button-checked";
    //myWindow.document.getElementById('gt-res-listen').aria-pressed="true";
  }

  window.createIframe = createIframe;

}(window, window.document));
