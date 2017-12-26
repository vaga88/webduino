+(function (window, document) {

  'use strict';

  function createDiv(input_string_) {
    var div = document.createElement('div',{ id: 'fustyles'}),
    div.innerHTML = "<iframe src='" + input_string_ + "' width='600' height='400'>";
    document.body.appendChild(div);
  }

  window.createDiv = createDiv;

}(window, window.document));
