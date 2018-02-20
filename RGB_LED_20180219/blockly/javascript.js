Blockly.JavaScript['rgb_led'] = function(block) {
  var pin_red = block.getFieldValue('PIN_RED');
  var value_red = Blockly.JavaScript.valueToCode(block, 'VALUE_RED', Blockly.JavaScript.ORDER_ATOMIC);
  var pin_green = block.getFieldValue('PIN_GREEN');
  var value_green = Blockly.JavaScript.valueToCode(block, 'VALUE_GREEN', Blockly.JavaScript.ORDER_ATOMIC);
  var pin_blue = block.getFieldValue('PIN_BLUE');
  var value_blue = Blockly.JavaScript.valueToCode(block, 'VALUE_BLUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  Blockly.JavaScript.definitions_['var_rgbledpin'] = 'var pin_red,pin_green,pin_blue;';
  
  // TODO: Assemble JavaScript into code variable.
  var code = 'pin_red = getPin(board, '+pin_red+');\n'+
             'pin_red.setMode(3);\n'+
             'pin_red.write('+value_red+');\n'+
             'pin_green = getPin(board, '+pin_green+');\n'+
             'pin_green.setMode(3);\n'+
             'pin_green.write('+value_green+');\n'+
             'pin_blue = getPin(board, '+pin_blue+');\n'+
             'pin_blue.setMode(3);\n'+
             'pin_blue.write('+value_blue+');\n'+
             'funRGB_LED("Success");\n';
  return code;
};
