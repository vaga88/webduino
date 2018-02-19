Blockly.JavaScript['rgb_led'] = function(block) {
  var dropdown_pin_red = block.getFieldValue('PIN_RED');
  var value_value_red = Blockly.JavaScript.valueToCode(block, 'VALUE_RED', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_pin_green = block.getFieldValue('PIN_GREEN');
  var value_value_green = Blockly.JavaScript.valueToCode(block, 'VALUE_GREEN', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_pin_blue = block.getFieldValue('PIN_BLUE');
  var value_value_blue = Blockly.JavaScript.valueToCode(block, 'VALUE_BLUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var pinred = getPin(board, '+pin_red+');\n'+
             'pinred.setMode(3);\n'+
             'pinred.write('+value_red+');\n'+
             'var pingreen = getPin(board, '+pin_green+');\n'+
             'pingreen.setMode(3);\n'+
             'pingreen.write('+value_green+');\n'+
             'var pinblue = getPin(board, '+pin_blue+');\n'+
             'pinblue.setMode(3);\n'+
             'pinblue.write('+value_blue+');\n'+
             'funRGB_LED("Success");\n';
  return code;
};
