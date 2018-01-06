+(function (window, document) {

  'use strict';

  function createIframe(input_url_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    var substr = input_url_.toLowerCase().split('.');
    if ((substr[substr.length-1]=='mp3')||((substr[substr.length-1]=='pdf')||((substr[substr.length-1]=='swf'))
        var src = '<embed src="' + input_url_ + '" style="width:' + input_WIDTH_ + 'px;height:' + input_HEIGHT_ + 'px">';
    else
        var src = '<iframe src="' + input_url_ + '" style="width:' + input_WIDTH_ + 'px;height:' + input_HEIGHT_ + 'px">';
    
    if (document.getElementById('fustyles'))
    {
          document.getElementById('fustyles').style.left = input_LEFT_ + 'px';
          document.getElementById('fustyles').style.top = input_TOP_ + 'px';
          document.getElementById('fustyles').style.display = 'block';
          document.getElementById('fustyles').innerHTML = src;
    }
    else
    {
        var div = document.createElement('div');
        div.id = 'fustyles';
        div.style.position = 'absolute';      
        div.style.left = input_LEFT_ + 'px';
        div.style.top = input_TOP_ + 'px';
        div.style.zindex='9999';      
        div.innerHTML = src;
        document.body.appendChild(div);
    }
  }

  window.createIframe = createIframe;

}(window, window.document));
