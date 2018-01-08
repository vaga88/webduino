
Blockly.JavaScript['matrix_led_color'] = function(block) {
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'value_color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MatrixLed_color('+ value_color_ +');';
  return code;
};

Blockly.JavaScript['matrix_led_width'] = function(block) {
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'value_width_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MatrixLed_width('+ value_width_ +');';
  return code;
};

Blockly.JavaScript['matrix_led_height'] = function(block) {
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'value_height_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MatrixLed_height('+ value_height_ +');';
  return code;
};

Blockly.JavaScript['matrix_led_matrix'] = function(block) {
  var L01 = (block.getFieldValue('L01') == 'TRUE')?"1":"0";
  var L02 = (block.getFieldValue('L02') == 'TRUE')?"1":"0";
  var L03 = (block.getFieldValue('L03') == 'TRUE')?"1":"0";
  var L04 = (block.getFieldValue('L04') == 'TRUE')?"1":"0";
  var L05 = (block.getFieldValue('L05') == 'TRUE')?"1":"0";
  var L06 = (block.getFieldValue('L06') == 'TRUE')?"1":"0";
  var L07 = (block.getFieldValue('L07') == 'TRUE')?"1":"0";
  var L08 = (block.getFieldValue('L08') == 'TRUE')?"1":"0";
  var L09 = (block.getFieldValue('L09') == 'TRUE')?"1":"0";
  var L10 = (block.getFieldValue('L10') == 'TRUE')?"1":"0";
  var L11 = (block.getFieldValue('L11') == 'TRUE')?"1":"0";
  var L12 = (block.getFieldValue('L12') == 'TRUE')?"1":"0";
  var L13 = (block.getFieldValue('L13') == 'TRUE')?"1":"0";
  var L14 = (block.getFieldValue('L14') == 'TRUE')?"1":"0";
  var L15 = (block.getFieldValue('L15') == 'TRUE')?"1":"0";
  var L16 = (block.getFieldValue('L16') == 'TRUE')?"1":"0";
  var L17 = (block.getFieldValue('L17') == 'TRUE')?"1":"0";
  var L18 = (block.getFieldValue('L18') == 'TRUE')?"1":"0";
  var L19 = (block.getFieldValue('L19') == 'TRUE')?"1":"0";
  var L20 = (block.getFieldValue('L20') == 'TRUE')?"1":"0";
  var L21 = (block.getFieldValue('L21') == 'TRUE')?"1":"0";
  var L22 = (block.getFieldValue('L22') == 'TRUE')?"1":"0";
  var L23 = (block.getFieldValue('L23') == 'TRUE')?"1":"0";
  var L24 = (block.getFieldValue('L24') == 'TRUE')?"1":"0";
  var L25 = (block.getFieldValue('L25') == 'TRUE')?"1":"0";
  var code = 'MatrixLed_matrix("'+L01+L02+L03+L04+L05+L06+L07+L08+L09+L10+L11+L12+L13+L14+L15+L16+L17+L18+L19+L20+L21+L22+L23+L24+L25+'");';
  return code;
};

Blockly.JavaScript['matrix_led_clear'] = function(block) {
  var code = 'MatrixLed_clear();';
  return code;
};

Blockly.JavaScript['matrix_led_on'] = function(block) {
  var value_x_on_ = Blockly.JavaScript.valueToCode(block, 'value_x_on_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_on_ = Blockly.JavaScript.valueToCode(block, 'value_y_on_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MatrixLed_on('+value_x_on_+','+value_y_on_+');';
  return code;
};

Blockly.JavaScript['matrix_led_off'] = function(block) {
  var value_x_off_ = Blockly.JavaScript.valueToCode(block, 'value_x_off_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_off_ = Blockly.JavaScript.valueToCode(block, 'value_y_off_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MatrixLed_off('+value_x_off_+','+value_y_off_+');';
  return code;
};

