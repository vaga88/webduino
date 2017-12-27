+(function (window, document) {

  'use strict';

  function createDiv(input_url_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    var src = '<iframe src="' + input_url_ + '" style="width:' + input_WIDTH_ + 'px;height:' + input_HEIGHT_ + 'px">';
    
    if (document.getElementById('fustyles'))
    {
        document.getElementById('fustyles').style.left = input_LEFT_ + 'px';
        document.getElementById('fustyles').style.top = input_TOP_ + 'px';
        document.getElementById('fustyles').innerHTML = src;
    }
    else
    {
      var div = document.createElement('div');
      div.id = 'fustyles';
      div.style.position = "absolute";      
      div.style.left = input_LEFT_ + 'px';
      div.style.top = input_TOP_ + 'px';
      div.style.zindex='9999';
      div.innerHTML = src;
      document.body.appendChild(div);
    }
  }

  window.createDiv = createDiv;

}(window, window.document));
