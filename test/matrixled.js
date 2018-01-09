+(function (window, document) {

  'use strict';
  
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
  const parenthesesleft = "0000001110100010000000000";
  const parenthesesright = "0000000000100010111000000";
  const squarebracketsleft = "0000011111100010000000000";
  const squarebracketsright = "0000000000100011111100000";
  const curlybracketsleft = "0000000100111111000100000";
  const curlybracketsright = "0000010001111110010000000";
  const Quotationmarkssingle = "0000000000110000010000000";
  const Quotationmarksdouble = "1100000100110000010000000";
  const hyphen = "0000000100001000010000000";
  const number0 = "0000001110100010111000000"
  const number1 = "0000001001111110000100000"
  const number2 = "0000010111101011110100000"
  const number3 = "0000010101101011111100000"
  const number4 = "0000011100001001111100000"
  const number5 = "0000011101101011011100000"
  const number6 = "0000011111101011011100000"
  const number7 = "0000011000100001111100000"
  const number8 = "0000011111101011111100000"
  const number9 = "0000011101101011111100000"  
  const cls = "0000000000000000000000000"
  
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
  
  function MatrixLed_char(input_char_) {
    if (input_char_.length==1)
    {
      MatrixLed_matrix(MatrixLed_conversion(input_char_.toUpperCase()));
    }
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
    if (input_char_=="A")
      return A;
    else if (input_char_=="B")
      return B;  
    else if (input_char_=="C")
      return C; 
    else if (input_char_=="D")
      return D;  
    else if (input_char_=="E")
      return E;   
    else if (input_char_=="F")
      return F;  
    else if (input_char_=="G")
      return G;   
    else if (input_char_=="H")
      return H;  
    else if (input_char_=="I")
      return I;   
    else if (input_char_=="J")
      return J;  
    else if (input_char_=="K")
      return K;   
    else if (input_char_=="L")
      return L;  
    else if (input_char_=="M")
      return M;  
    else if (input_char_=="N")
      return N;  
    else if (input_char_=="O")
      return O;  
    else if (input_char_=="P")
      return P;  
    else if (input_char_=="Q")
      return Q; 
    else if (input_char_=="R")
      return R;  
    else if (input_char_=="S")
        return S;
    else if (input_char_=="T")
      return T;  
    else if (input_char_=="U")
      return U;  
    else if (input_char_=="V")
      return V;  
    else if (input_char_=="W")
      return W;  
    else if (input_char_=="X")
      return X;  
    else if (input_char_=="Y")
      return Y; 
    else if (input_char_=="Z")
      return Z;  
    else if (input_char_==",")
        return comma;
    else if (input_char_==".")
      return period;  
    else if (input_char_=="?")
      return questionmark;      
    else if (input_char_=="!")
      return exclamationmark;  
    else if (input_char_==";")
      return semicolon;  
    else if (input_char_==":")
      return colon;  
    else if (input_char_=="(")
      return parenthesesleft; 
    else if (input_char_==")")
      return parenthesesright;  
    else if (input_char_=="[")
      return squarebracketsleft;
    else if (input_char_=="]")
      return squarebracketsright;  
    else if (input_char_=="{")
      return curlybracketsleft;      
    else if (input_char_=="}")
      return curlybracketsright; 
    else if (input_char_=="'")
      return Quotationmarkssingle;     
    else if (input_char_=="\"")
      return Quotationmarksdouble;   
    else if (input_char_=="0")
      return number0; 
    else if (input_char_=="1")
      return number1;   
    else if (input_char_=="2")
      return number2; 
    else if (input_char_=="3")
      return number3;       
    else if (input_char_=="4")
      return number4; 
    else if (input_char_=="5")
      return number5;       
    else if (input_char_=="6")
      return number6; 
    else if (input_char_=="7")
      return number7;       
    else if (input_char_=="8")
      return number8; 
    else if (input_char_=="9")
      return number9;  
    else
      return cls;
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
  window.MatrixLed_char = MatrixLed_char;
  window.MatrixLed_conversion =MatrixLed_conversion;
  
}(window, window.document));
