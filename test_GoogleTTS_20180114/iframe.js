+(function (window, document) {

  'use strict';

  function createIframe(input_id_,input_word_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    var src = '<iframe id="googletts" src="https://translate.google.com.tw/?hl=zh-TW#zh-CN/en/'+input_word_+'" style="width:' + input_WIDTH_ + 'px;height:' + input_HEIGHT_ + 'px"></iframe>';
    
    if (document.getElementById("fustyles_iframe"+input_id_))
    {
          document.getElementById("fustyles_iframe"+input_id_).style.left = input_LEFT_ + 'px';
          document.getElementById("fustyles_iframe"+input_id_).style.top = input_TOP_ + 'px';
          document.getElementById("fustyles_iframe"+input_id_).style.display = 'block';
          document.getElementById("fustyles_iframe"+input_id_).innerHTML = src;
    }
    else
    {
        var div = document.createElement('div');
        div.id = "fustyles_iframe"+input_id_;
        div.style.position = 'absolute';      
        div.style.left = input_LEFT_ + 'px';
        div.style.top = input_TOP_ + 'px';
        div.style.zindex='9999';      
        div.innerHTML = src;
        document.body.appendChild(div);
    }
    
    document.getElementById("googletts").contentWindow.document.getElementById('gt-res-listen').class="trans-listen-button goog-toolbar-button goog-toolbar-button-checked";
    //document.getElementById("googletts").contentWindow.document.getElementById('gt-res-listen').aria-pressed="true";
  }

  window.createIframe = createIframe;

}(window, window.document));
