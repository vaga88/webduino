Blockly.JavaScript['pm_gov'] = function(block) {
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'value_url_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_site_ = Blockly.JavaScript.valueToCode(block, 'value_site_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'PM_gov_get('+value_url_+','+value_site_+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
