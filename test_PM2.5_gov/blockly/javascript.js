Blockly.JavaScript['pmgov_link'] = function(block) {
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'value_url_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_site_ = block.getFieldValue('value_site_');
  var code = 'PM_gov_link('+value_url_+',"'+value_site_+'")';
  return code;
};

Blockly.JavaScript['pmgov_get'] = function(block) {
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'value_url_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_site_ = block.getFieldValue('value_site_');
  var code = 'PM_gov_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
