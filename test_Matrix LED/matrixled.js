+(function (window, document) {

  'use strict';

  function createMatrixLed(input_value_) {
    
    var ledtable ="";
      
    if (document.getElementById("fustyles_matrixled"))
    {
          document.getElementById("fustyles_matrixled").innerHTML = ledtable;
    }
    else
    {
        var div = document.createElement('div');
        div.id = "fustyles_matrixled";   
        div.innerHTML = ledtable;
        document.body.appendChild(div);
    }
  }

  window.createMatrixLed = createMatrixLed;

}(window, window.document));
