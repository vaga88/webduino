Blockly.JavaScript['matrix_led_char'] = function(block) {
  var value_char_ = Blockly.JavaScript.valueToCode(block, 'value_char_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MatrixLed_char('+ value_char_ +');';
  return code;
};

Blockly.JavaScript['matrix_led_marquee_time'] = function(block) {
  var value_marquee_time_ = Blockly.JavaScript.valueToCode(block, 'value_marquee_time_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MatrixLed_marquee_time('+ value_marquee_time_ +');';
  return code;
};

Blockly.JavaScript['matrix_led_marquee'] = function(block) {
  var value_marquee_ = Blockly.JavaScript.valueToCode(block, 'value_marquee_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MatrixLed_marquee('+ value_marquee_ +');';
  return code;
};

Blockly.JavaScript['matrix_led_marquee_stop'] = function(block) {
  var code = 'MatrixLed_marquee_stop();';
  return code;
};

Blockly.JavaScript['matrix_led_marquee_resume'] = function(block) {
  var code = 'MatrixLed_marquee_resume();';
  return code;
};

Blockly.JavaScript['matrix_led_marquee_reverse'] = function(block) {
  var code = 'MatrixLed_marquee_reverse();';
  return code;
};

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

Blockly.JavaScript['matrix_led_sample'] = function(block) {
  var value_sample_ = block.getFieldValue('value_sample_');
  var code = 'MatrixLed_sample("'+ value_sample_ +'");';
  return code;
};

Blockly.JavaScript['matrix_led_code'] = function(block) {
  var value_code_ = Blockly.JavaScript.valueToCode(block, 'value_code_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MatrixLed_code('+ value_code_ +');';
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

Blockly.JavaScript['matrix_led_matrixcode'] = function(block) {
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
  var code = '"'+L01+L02+L03+L04+L05+L06+L07+L08+L09+L10+L11+L12+L13+L14+L15+L16+L17+L18+L19+L20+L21+L22+L23+L24+L25+'"';
  return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript['matrix_led_state'] = function(block) {
  var value_x_state_ = Blockly.JavaScript.valueToCode(block, 'value_x_state_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_state_ = Blockly.JavaScript.valueToCode(block, 'value_y_state_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'MatrixLed_state('+value_x_state_+','+value_y_state_+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};