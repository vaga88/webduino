Blockly.JavaScript['iframe_open'] = function (block) {
  var ifttt_eventname = Blockly.JavaScript.valueToCode(block, 'ifttt_eventname', Blockly.JavaScript.ORDER_ATOMIC);  
  var ifttt_key = Blockly.JavaScript.valueToCode(block, 'ifttt_key', Blockly.JavaScript.ORDER_ATOMIC);
  var ifttt_value1 = Blockly.JavaScript.valueToCode(block, 'ifttt_value1', Blockly.JavaScript.ORDER_ATOMIC);
  var ifttt_value2 = Blockly.JavaScript.valueToCode(block, 'ifttt_value2', Blockly.JavaScript.ORDER_ATOMIC);
  var ifttt_value3 = Blockly.JavaScript.valueToCode(block, 'ifttt_value3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createIframe('+ifttt_eventname+','+ifttt_key+','+ifttt_value1+','+ifttt_value2+','+ifttt_value3+');';
  return code; 
};