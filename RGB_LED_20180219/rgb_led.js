+(function (window, document) {

  'use strict';
  
  
  function funRGB_LED(board,pin_red,value_red,pin_green,value_green,pin_blue,value_blue)
  {
    var pin = getPin(board, pin_red);
    pin.setMode(3);
    pin.write(value_red);
    var pin = getPin(board, pin_green);
    pin.setMode(3);
    pin.write(value_green);
    var pin = getPin(board, pin_blue);
    pin.setMode(3);
    pin.write(value_blue);    
  }
    
  window.funRGB_LED = funRGB_LED;
  
}(window, window.document));
