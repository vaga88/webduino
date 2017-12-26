Blockly.JavaScript['iframe_show'] = function (block) {
  var value_string_ = Blockly.JavaScript.valueToCode(block, 'string_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createDiv("'+value_string_+'");';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
