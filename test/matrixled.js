+(function (window, document) {

  'use strict';
  
  var L = new Array("","","","","","","","","","","","","","","","","","","","","","","","","");
  var MatrixLedcolor = "#FF0000";
  var MatrixLedwidth = 250;
  var MatrixLedheight = 250;
  var MatrixLedmarquee="";

  function MatrixLed_color(input_color_) {
    MatrixLedcolor = input_color_;
  }
  
  function MatrixLed_width(input_width_) {
    MatrixLedwidth = input_width_;
  }
  
  function MatrixLed_height(input_height_) {
    MatrixLedheight = input_height_;
  }  
  
  function MatrixLed_marquee(input_marquee_) {
    MatrixLedmarquee = input_marquee_.toUpperCase();
    alert(MatrixLedmarquee);
  }  
  
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
        L[i]=" bgcolor='"+MatrixLedcolor+"'";
      else
      {
        if (L[i]=="")
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
        if (L[i]=="")
          L[i]=" bgcolor='white'";
      }
    }
    MatrixLed_show();
  }
  
  function MatrixLed_matrix(input_value_) {
    for (var i=0;i<25;i++)
    {
      if (input_value_.substr(i,1)=="1")
        L[i]=" bgcolor='"+MatrixLedcolor+"'";
      else
        L[i]=" bgcolor='white'";
    }
    MatrixLed_show();
  }
  
  function MatrixLed_show() {
    var ledtable ="<table style='width:"+MatrixLedwidth+"px;height:"+MatrixLedheight+"px;border:white;'>"
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
  
  function MatrixLed_conversion(input_str_) {
    const A = "0111110100101001010001111";
    const B = "1111110101101011010101010";
    const C = "0111010001100011000100000";
    const D = "1111110001100011000101110";
    const E = "";
    const F = "";
    const G = "";
    const H = "";
    const I = "";
    const J = "";
    const K = "";
    const L = "";
    const M = "";
    const N = "";
    const O = "";
    const P = "";
    const Q = "";
    const R = "";
    const S = "";
    const T = "";
    const U = "";
    const V = "";
    const W = "";
    const X = "";
    const Y = "";   
    const Z = "";
    const comma = "";
    const period = "";
    const questionmark = "";
    const exclamationmark  = "";   
    const semicolon = "";
    const colon = "";
    const parenthesesledt = "";
    const parenthesesright = "";
    const squarebracketsleft = "";
    const squarebracketsright = "";
    const curlybracketsleft = "";
    const curlybracketsright = "";
    const Quotationmarkssingle = "";
    const Quotationmarksdouble = "";
    const hyphen = "";
  }

  window.MatrixLed_clear = MatrixLed_clear;
  window.MatrixLed_matrix = MatrixLed_matrix;
  window.MatrixLed_show = MatrixLed_show;
  window.MatrixLed_on = MatrixLed_on;
  window.MatrixLed_off = MatrixLed_off;
  window.MatrixLed_color = MatrixLed_color;
  window.MatrixLed_width = MatrixLed_width;
  window.MatrixLed_height = MatrixLed_height;
  window.MatrixLed_marquee = MatrixLed_marquee;

}(window, window.document));
