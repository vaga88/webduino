Blockly.JavaScript['rgb_led'] = function(block) {
  var pin_red = block.getFieldValue('PIN_RED');
  var value_red = Blockly.JavaScript.valueToCode(block, 'VALUE_RED', Blockly.JavaScript.ORDER_ATOMIC);
  var pin_green = block.getFieldValue('PIN_GREEN');
  var value_green = Blockly.JavaScript.valueToCode(block, 'VALUE_GREEN', Blockly.JavaScript.ORDER_ATOMIC);
  var pin_blue = block.getFieldValue('PIN_BLUE');
  var value_blue = Blockly.JavaScript.valueToCode(block, 'VALUE_BLUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var pin = getPin(board, '+pin_red+');\n'+
             'pin.setMode(3);\n'+
             'pin.write('+value_red+');\n'+
             'pin = getPin(board, '+pin_green+');\n'+
             'pin.write('+value_green+');\n'+
             'pin = getPin(board, '+pin_blue+');\n'+
             'pin.write('+value_blue+');\n';
  return code;
};
