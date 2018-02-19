Blockly.JavaScript['rgb_led'] = function(block) {
  var pin_red = block.getFieldValue('PIN_RED');
  var value_red = Blockly.JavaScript.valueToCode(block, 'VALUE_RED', Blockly.JavaScript.ORDER_ATOMIC);
  var pin_green = block.getFieldValue('PIN_GREEN');
  var value_green = Blockly.JavaScript.valueToCode(block, 'VALUE_GREEN', Blockly.JavaScript.ORDER_ATOMIC);
  var pin_blue = block.getFieldValue('PIN_BLUE');
  var value_blue = Blockly.JavaScript.valueToCode(block, 'VALUE_BLUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  Blockly.JavaScript.definitions_['var_rgbledpin'] = 'var pinred,pingreen,pinblue;';
  
  // TODO: Assemble JavaScript into code variable.
  var code = 'pinred = getPin(board, '+pin_red+');\n'+
             'pinred.setMode(3);\n'+
             'pinred.write('+value_red+');\n'+
             'pingreen = getPin(board, '+pin_green+');\n'+
             'pingreen.setMode(3);\n'+
             'pingreen.write('+value_green+');\n'+
             'pinblue = getPin(board, '+pin_blue+');\n'+
             'pinblue.setMode(3);\n'+
             'pinblue.write('+value_blue+');\n\n'+
             'funRGB_LED("Success");\n';
  return code;
};
