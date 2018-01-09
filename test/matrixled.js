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
  
  function MatrixLed_conversion(input_char_) {
    const A = "0111110100101001010001111";
    const B = "1111110101101011010101010";
    const C = "0111010001100011000100000";
    const D = "1111110001100011000101110";
    const E = "1111110101101011010110101";
    const F = "1111110100101001010010100";
    const G = "0111010001101011010110111";
    const H = "1111100100001000010011111";
    const I = "1000110001111111000110001";
    const J = "1001110001111111000010000";
    const K = "1111100010001000101010001";
    const L = "1111100001000010000100001";
    const M = "1111101000001000100011111";
    const N = "1111101000001000001011111";
    const O = "0111010001100011000101110";
    const P = "1111110010100101001001100";
    const Q = "0111010001101011001001101";
    const R = "1111110100101001010001011";
    const S = "0100110101101011010110010";
    const T = "1000010000111111000010000";
    const U = "1111000001000010000111110";
    const V = "1110000010000010001011100";
    const W = "1111000001111100000111110";
    const X = "1000101010001000101010001";
    const Y = "1000001000001110100010000";   
    const Z = "1000110011101011100110001";
    const comma = "0000000001000100000000000";
    const period = "0000000001000000000000000";
    const questionmark = "0100010000100111010001000";
    const exclamationmark  = "0000000000111010000000000";   
    const semicolon = "0000000001010100000000000";
    const colon = "0000000000010100000000000";
    const parenthesesledt = "0000001110100010000000000";
    const parenthesesright = "0000000000100010111000000";
    const squarebracketsleft = "0000011111100010000000000";
    const squarebracketsright = "0000000000100011111100000";
    const curlybracketsleft = "0000000100111111000100000";
    const curlybracketsright = "0000010001111110010000000";
    const Quotationmarkssingle = "0000000000110000010000000";
    const Quotationmarksdouble = "1100000100110000010000000";
    const hyphen = "0000000100001000010000000";
    const number0 = ""
    const number1 = ""
    const number2 = ""
    const number3 = ""
    const number4 = ""
    const number5 = ""
    const number6 = ""
    const number7 = ""
    const number8 = ""
    const number9 = ""
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
