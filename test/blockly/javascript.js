// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#dwe33p
Blockly.JavaScript['uart_new'] = function(block) {
    var dropdown_baud_rate = block.getFieldValue('baud_rate');
    var code = 'getUART(board,"' + dropdown_baud_rate + '")';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#4bu9f9
Blockly.JavaScript['uart_tx'] = function(block) {
    var variable_uart = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('uart'), Blockly.Variables.NAME_TYPE);
    var value_uart_data = Blockly.JavaScript.valueToCode(block, 'uart_data', Blockly.JavaScript.ORDER_ATOMIC);
    var code = variable_uart + '.tx(' + value_uart_data + ');\n';
    return code;
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#b9pxdq
Blockly.JavaScript['uart_rx'] = function(block) {
    var variable_uart = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('uart'), Blockly.Variables.NAME_TYPE);
    var statements_rx = Blockly.JavaScript.statementToCode(block, 'rx');
    var code = variable_uart + '.rx(';
    code += "function(){\n" + statements_rx + "});\n";
    return code;
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#d9sohf
Blockly.JavaScript['uart_data'] = function(block) {
    var variable_uart = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('uart'), Blockly.Variables.NAME_TYPE);
    var dropdown_dataType = block.getFieldValue('dataType');
    var code = variable_uart + '.' + dropdown_dataType;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['uart_car'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str1 = Blockly.JavaScript.valueToCode(block, 'str1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str2 = Blockly.JavaScript.valueToCode(block, 'str2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str3 = Blockly.JavaScript.valueToCode(block, 'str3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str4 = Blockly.JavaScript.valueToCode(block, 'str4', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_str5 = block.getFieldValue('str5');
  var value_str6 = Blockly.JavaScript.valueToCode(block, 'str6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str7 = Blockly.JavaScript.valueToCode(block, 'str7', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '?'+value_cmd+'='+value_str1+';'+value_str2+';'+value_str3+';'+value_str4+';'+value_str5+';'+value_str6+';'+value_str7;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['uart_system'] = function(block) {
  var dropdown_cmd = block.getFieldValue('cmd');
  var value_str1 = Blockly.JavaScript.valueToCode(block, 'str1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str2 = Blockly.JavaScript.valueToCode(block, 'str2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str3 = Blockly.JavaScript.valueToCode(block, 'str3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '?'+dropdown_cmd+'='+value_str1+';'+value_str2+';'+value_str3;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['uart_custom'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str1 = Blockly.JavaScript.valueToCode(block, 'str1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str2 = Blockly.JavaScript.valueToCode(block, 'str2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str3 = Blockly.JavaScript.valueToCode(block, 'str3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str4 = Blockly.JavaScript.valueToCode(block, 'str4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str5 = Blockly.JavaScript.valueToCode(block, 'str5', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str6 = Blockly.JavaScript.valueToCode(block, 'str6', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str7 = Blockly.JavaScript.valueToCode(block, 'str7', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str8 = Blockly.JavaScript.valueToCode(block, 'str8', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str9 = Blockly.JavaScript.valueToCode(block, 'str9', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '?'+value_cmd+'='+value_str1+';'+value_str2+';'+value_str3+';'+value_str4+';'+value_str5+';'+value_str6+';'+value_str7+';'+value_str8+';'+value_str9;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
