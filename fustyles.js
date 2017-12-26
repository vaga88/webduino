+(function (window, document, $) {

  'use strict';

  function createDiv(input_string_) {
    var div = document.createElement('div'),
    document.body.appendChild(div);
    div.innerHTML = "<iframe src='+ input_string_ +' width=600 height=400>";'
  }

  window.createDiv = createDiv;

}(window, window.document, window.jQuery));
