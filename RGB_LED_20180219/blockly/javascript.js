Blockly.JavaScript['rgb_led'] = function(block) {
  var pin_red = block.getFieldValue('PIN_RED');
  var value_red = Blockly.JavaScript.valueToCode(block, 'VALUE_RED', Blockly.JavaScript.ORDER_ATOMIC);
  var pin_green = block.getFieldValue('PIN_GREEN');
  var value_green = Blockly.JavaScript.valueToCode(block, 'VALUE_GREEN', Blockly.JavaScript.ORDER_ATOMIC);
  var pin_blue = block.getFieldValue('PIN_BLUE');
  var value_blue = Blockly.JavaScript.valueToCode(block, 'VALUE_BLUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'funRGB_LED('+board+','+pin_red+','+value_red+','+pin_green+','+value_green+','+pin_blue+','+value_blue+');\n';
  return code;
};
