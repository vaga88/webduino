+(function (window, document) {

  'use strict';

  function MatrixLed_indentcode(input_indentcode_) {
    var indentcode = input_indentcode_;
    while (indentcode.search(/0000000000/)!=-1)
      indentcode = indentcode.replace(/0000000000/g,"00000"); 
    return indentcode;
  } 

  window.uart_car = uart_car;
  window.uart_system = uart_system;
  window.uart_custom = uart_custom;
  window.uart_url = uart_url;
  
}(window, window.document));
