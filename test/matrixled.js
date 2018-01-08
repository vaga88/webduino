+(function (window, document) {

  'use strict';
  
  var L = new Array(25);

  function MatrixLed_clear() {
    for (var i=0;i<25;i++)
    {
      L[i]=" bgcolor='white'";
    }
    MatrixLed_show();
  }
  
  function MatrixLed_on(input_x_,input_y_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        L[i]=" bgcolor='red'";
      else
      {
        if (isNaN(L[i]))
          L[i]=" bgcolor='white'";
      }
    }
    MatrixLed_show();
  }
  
  function MatrixLed_off(input_x_,input_y_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        L[i]=" bgcolor='white'";
      else
      {
        if (isNaN(L[i]))
          L[i]=" bgcolor='white'";
        alert('y');
      }
    }
    MatrixLed_show();
  }
  
  function MatrixLed_matrix(input_value_) {
    for (var i=0;i<25;i++)
    {
      if (input_value_.substr(i,1)=="1")
        L[i]=" bgcolor='red'";
      else
        L[i]=" bgcolor='white'";
    }
    MatrixLed_show();
  }
  
  function MatrixLed_show() {
    var ledtable ="<table style='width:250px;height:250px;border:white;'>"
                  + "<tr><td"+L[0]+"></td><td"+L[5]+"></td><td"+L[10]+"></td><td"+L[15]+"></td><td"+L[20]+"></td></tr>"
                  + "<tr><td"+L[1]+"></td><td"+L[6]+"></td><td"+L[11]+"></td><td"+L[16]+"></td><td"+L[21]+"></td></tr>"
                  + "<tr><td"+L[2]+"></td><td"+L[7]+"></td><td"+L[12]+"></td><td"+L[17]+"></td><td"+L[22]+"></td></tr>"
                  + "<tr><td"+L[3]+"></td><td"+L[8]+"></td><td"+L[13]+"></td><td"+L[18]+"></td><td"+L[23]+"></td></tr>"
                  + "<tr><td"+L[4]+"></td><td"+L[9]+"></td><td"+L[14]+"></td><td"+L[19]+"></td><td"+L[24]+"></td></tr>"
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

  window.MatrixLed_clear = MatrixLed_clear;
  window.MatrixLed_matrix = MatrixLed_matrix;
  window.MatrixLed_show = MatrixLed_show;
  window.MatrixLed_on = MatrixLed_on;
  window.MatrixLed_off = MatrixLed_off;

}(window, window.document));
