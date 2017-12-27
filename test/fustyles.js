+(function (window, document) {

  'use strict';

  function createDiv(input_url_,input_WIDTH_,input_HEIGHT_,input_RIGHT_,input_TOP_) {
    
    var src = '<iframe src="' + input_url_ + '" style="width:' + input_WIDTH_ + 'px;height=' + input_HEIGHT_ + 'px;right=' + input_RIGHT_ + 'px;top=' + input_TOP_ + 'px">';
    if (document.getElementById('fustyles'))
    {
        document.getElementById('fustyles').innerHTML = src;
    }
    else
    {
      var div = document.createElement('div');
      div.id = 'fustyles';
      div.innerHTML = src;
      document.body.appendChild(div);
    }
  }

  window.createDiv = createDiv;

}(window, window.document));
