+(function (window, document) {

  'use strict';

  function createDiv(input_url_,input_WIDTH_,input_HEIGHT_) {
    var src = '<iframe src="' + input_url_ + '" width="' + input_WIDTH_ + '" height="' + input_HEIGHT_ + '">';
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
