+(function (window, document) {

  'use strict';

  function createDiv(input_url_) {
    var div = document.createElement('div',{ id: 'fustyles'}),
    div.innerHTML = "<iframe src='" + input_url_ + "' width='600' height='400'>";
    document.body.appendChild(div);
  }

  window.createDiv = createDiv;

}(window, window.document));
