+(function (window, document) {

  'use strict';
  
  const charA = "0111110010100101001001111";
  const charB = "1111110101101011010101010";
  const charC = "0111010001100011000110001";
  const charD = "1111110001100011000101110";
  const charE = "1111110101101011010110101";
  const charF = "1111110100101001010010100";
  const charG = "0111010001101011010110111";
  const charH = "1111100100001000010011111";
  const charI = "1000110001111111000110001";
  const charJ = "1001110001111111000010000";
  const charK = "1111100010001000101010001";
  const charL = "1111100001000010000100001";
  const charM = "1111101000001000100011111";
  const charN = "1111101000001000001011111";
  const charO = "0111010001100011000101110";
  const charP = "1111110010100101001001100";
  const charQ = "0111010001101011001001101";
  const charR = "1111110100101001010001011";
  const charS = "0100110101101011010110010";
  const charT = "1000010000111111000010000";
  const charU = "1111000001000010000111110";
  const charV = "1110000010000010001011100";
  const charW = "1111000001111100000111110";
  const charX = "1000101010001000101010001";
  const charY = "1000001000001110100010000";   
  const charZ = "1000110011101011100110001";
  const char0 = "0000011111100011111100000";
  const char1 = "0000001001111110000100000";
  const char2 = "0000010111101011110100000";
  const char3 = "0000010101101011111100000";
  const char4 = "0000011100001001111100000";
  const char5 = "0000011101101011011100000";
  const char6 = "0000011111101011011100000";
  const char7 = "0000011000100001111100000";
  const char8 = "0000011111101011111100000";
  const char9 = "0000011101101011111100000";  
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
  const heart = "0110010010010011001001100";
  const heartfill = "0110011110011111111001100";  
  const arrowup = "0010001000111110100000100";
  const arrowdown = "0010000010111110001000100";
  const arrowleft = "0010001110101010010000100";
  const arrowright = "0010000100101010111000100";
  const arrowleftup = "1111011000101001001000001";
  const arrowleftdown = "0111100011001010100110000";
  const arrowrightup = "0000110010101001100011110";
  const arrowrightdown = "1000001001001010001101111";
  const arrowupfill = "0000100111111110011100001";
  const arrowdownfill = "1000011100111111110010000";
  const arrowleftfill = "0010000100011100111011111";
  const arrowrightfill = "1111101110011100010000100";  
  const noexist = "0000000000000000000000000";
  
  var L = new Array("","","","","","","","","","","","","","","","","","","","","","","","","");
  var MatrixLedcolor = "#FF0000";
  var MatrixLedwidth = 250;
  var MatrixLedheight = 250;
  var MatrixLedmarquee = "";
  var MatrixLedmarqueetime = 500;
  var MatrixLedmarqueereverse = 1;
  var marqueetimeid;

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
    if ((input_marquee_.length==25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      MatrixLed_matrix(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%5==0)&&(input_marquee_.length>25)&&(input_marquee_.search(/[^0-1]/)==-1))
      MatrixLedmarquee = input_marquee_;  
    else if (input_marquee_.length==1)
      MatrixLed_matrix(MatrixLed_conversion(input_marquee_.toUpperCase()));
    else if (input_marquee_.length>1)
    {
      MatrixLedmarquee="";
      for (var i=0;i<input_marquee_.length;i++)
        MatrixLedmarquee = MatrixLedmarquee + MatrixLed_conversion(input_marquee_.substr(i,1).toUpperCase()) + "00000";
    }
    window.clearInterval(marqueetimeid);
    marqueetimeid = window.setInterval("MatrixLed_marquee_play()",MatrixLedmarqueetime);
  }  
  
  function MatrixLed_marquee_play() {
    if (MatrixLedmarquee.length>25)
    {
      if (MatrixLedmarqueereverse==1)
      {
        MatrixLed_matrix(MatrixLedmarquee.substr(0,25));
        MatrixLedmarquee = MatrixLedmarquee.substr(5,MatrixLedmarquee.length-5)+MatrixLedmarquee.substr(0,5);
      }
      else if (MatrixLedmarqueereverse==2)
      {
        MatrixLed_matrix(MatrixLedmarquee.substr(MatrixLedmarquee.length-25,25));
        MatrixLedmarquee = MatrixLedmarquee.substr(MatrixLedmarquee.length-5,5)+MatrixLedmarquee.substr(0,MatrixLedmarquee.length-5);
      }
    }
  } 
  
  function MatrixLed_marquee_time(input_time_) {
    MatrixLedmarqueetime = input_time_;
  } 
  
  function MatrixLed_marquee_stop() {
    window.clearInterval(marqueetimeid);
  } 
  
  function MatrixLed_marquee_resume() {
    window.clearInterval(marqueetimeid);
    marqueetimeid = window.setInterval("MatrixLed_marquee_play()",MatrixLedmarqueetime);
  } 
  
  function MatrixLed_marquee_reverse() {
    if (MatrixLedmarqueereverse==1)
      MatrixLedmarqueereverse=2;
    else if (MatrixLedmarqueereverse==2)
      MatrixLedmarqueereverse=1;
  }   
  
  function MatrixLed_char(input_char_) {
    if (input_char_.length==1)
    {
      MatrixLed_matrix(MatrixLed_conversion(input_char_.toUpperCase()));
    }
  }  
  
  function MatrixLed_code(input_code_) {
    if (input_code_.length==25)
      MatrixLed_matrix(input_code_);
  }    
  
  function MatrixLed_sample(input_sample_) {
    MatrixLed_matrix(MatrixLed_conversion(input_sample_));
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

  function MatrixLed_state(input_x_,input_y_) {
    if ((L[input_x_*5+input_y_]=='')||(L[input_x_*5+input_y_]==" bgcolor='white'"))
      return 0;
    else
      return 1;
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
      return charA;
    else if (input_char_=="B")
      return charB;  
    else if (input_char_=="C")
      return charC; 
    else if (input_char_=="D")
      return charD;  
    else if (input_char_=="E")
      return charE;   
    else if (input_char_=="F")
      return charF;  
    else if (input_char_=="G")
      return charG;   
    else if (input_char_=="H")
      return charH;  
    else if (input_char_=="I")
      return charI;   
    else if (input_char_=="J")
      return charJ;  
    else if (input_char_=="K")
      return charK;   
    else if (input_char_=="L")
      return charL;  
    else if (input_char_=="M")
      return charM;  
    else if (input_char_=="N")
      return charN;  
    else if (input_char_=="O")
      return charO;  
    else if (input_char_=="P")
      return charP;  
    else if (input_char_=="Q")
      return charQ; 
    else if (input_char_=="R")
      return charR;  
    else if (input_char_=="S")
      return charS;
    else if (input_char_=="T")
      return charT;  
    else if (input_char_=="U")
      return charU;  
    else if (input_char_=="V")
      return charV;  
    else if (input_char_=="W")
      return charW;  
    else if (input_char_=="X")
      return charX;  
    else if (input_char_=="Y")
      return charY; 
    else if (input_char_=="Z")
      return charZ; 
    else if (input_char_=="0")
      return char0; 
    else if (input_char_=="1")
      return char1;   
    else if (input_char_=="2")
      return char2; 
    else if (input_char_=="3")
      return char3;       
    else if (input_char_=="4")
      return char4; 
    else if (input_char_=="5")
      return char5;       
    else if (input_char_=="6")
      return char6; 
    else if (input_char_=="7")
      return char7;       
    else if (input_char_=="8")
      return char8; 
    else if (input_char_=="9")
      return char9;     
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
    else if (input_char_=="♡")
      return heart;
    else if (input_char_=="♥")
      return heartfill;    
    else if (input_char_=="↑")
      return arrowup;
    else if (input_char_=="↓")
      return arrowdown;
    else if (input_char_=="←")
      return arrowleft;
    else if (input_char_=="→")
      return arrowright;   
    else if (input_char_=="↖")
      return arrowleftup;
    else if (input_char_=="↙")
      return arrowleftdown;
    else if (input_char_=="↗")
      return arrowrightup;
    else if (input_char_=="↘")
      return arrowrightdown;  
    else if (input_char_=="▲")
      return arrowupfill;
    else if (input_char_=="▼")
      return arrowdownfill;
    else if (input_char_=="◄")
      return arrowleftfill;
    else if (input_char_=="►")
      return arrowrightfill;    
    else
      return noexist;
  }

  window.MatrixLed_clear = MatrixLed_clear;
  window.MatrixLed_matrix = MatrixLed_matrix;
  window.MatrixLed_show = MatrixLed_show;
  window.MatrixLed_on = MatrixLed_on;
  window.MatrixLed_off = MatrixLed_off;
  window.MatrixLed_state = MatrixLed_state;
  window.MatrixLed_color = MatrixLed_color;
  window.MatrixLed_width = MatrixLed_width;
  window.MatrixLed_height = MatrixLed_height;
  window.MatrixLed_sample = MatrixLed_sample;
  window.MatrixLed_code = MatrixLed_code;
  window.MatrixLed_marquee = MatrixLed_marquee;
  window.MatrixLed_marquee_play = MatrixLed_marquee_play;
  window.MatrixLed_marquee_stop = MatrixLed_marquee_stop;
  window.MatrixLed_marquee_resume = MatrixLed_marquee_resume;
  window.MatrixLed_marquee_reverse = MatrixLed_marquee_reverse;
  window.MatrixLed_marquee_time = MatrixLed_marquee_time;
  window.MatrixLed_char = MatrixLed_char;
  window.MatrixLed_conversion =MatrixLed_conversion;
  
}(window, window.document));
