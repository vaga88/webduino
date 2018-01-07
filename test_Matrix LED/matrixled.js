+(function (window, document) {

  'use strict';

  function createMatrixLed(input_value_) {
    var L = new Array(25);
    for (var i=0;i<25;i++)
    {
      if (input_value_.substr(i,1)=="1")
        L[i]=" bgcolor='red'";
      else
        L[i]=" bgcolor='white'";
    }
    
    var ledtable ="<table style='width:300px;height:300px;border:0;'>"
                  + "<tr><td"+L[0]+"></td><td"+L[1]+"></td><td"+L[2]+"></td><td"+L[3]+"></td><td"+L[4]+"></td></tr>"
                  + "<tr><td"+L[5]+"></td><td"+L[6]+"></td><td"+L[7]+"></td><td"+L[8]+"></td><td"+L[9]+"></td></tr>"
                  + "<tr><td"+L[10]+"></td><td"+L[11]+"></td><td"+L[12]+"></td><td"+L[13]+"></td><td"+L[14]+"></td></tr>"
                  + "<tr><td"+L[15]+"></td><td"+L[16]+"></td><td"+L[17]+"></td><td"+L[18]+"></td><td"+L[19]+"></td></tr>"
                  + "<tr><td"+L[20]+"></td><td"+L[21]+"></td><td"+L[22]+"></td><td"+L[23]+"></td><td"+L[24]+"></td></tr>"
                  + "</table>";
      
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
