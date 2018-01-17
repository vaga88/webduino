Blockly.JavaScript['speak_setting_sample_fustyles'] = function (block) {
  var dropdown_lang_ = block.getFieldValue('lang_');
  var dropdown_volume_ = block.getFieldValue('volume_');
  var dropdown_pitch_ = block.getFieldValue('pitch_');
  var dropdown_rate_ = block.getFieldValue('rate_');
  var code = '"' + dropdown_lang_ + '",' + dropdown_volume_ + ',' + dropdown_pitch_ + ',' + dropdown_rate_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['speak_setting_sample1_fustyles'] = function (block) {
  var dropdown_lang_ = block.getFieldValue('lang_');
  var dropdown_volume_ = block.getFieldValue('volume_');
  var dropdown_pitch_ = block.getFieldValue('pitch_');
  var dropdown_rate_ = block.getFieldValue('rate_');
  var code = '"' + dropdown_lang_ + '",' + dropdown_volume_ + ',' + dropdown_pitch_ + ',' + dropdown_rate_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
