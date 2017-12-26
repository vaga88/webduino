Blockly.JavaScript['iframe_show'] = function (block) {
  var number_width_ = block.getFieldValue('width_');
  var number_height_ = block.getFieldValue('height_');  
  var url_string_ = Blockly.JavaScript.valueToCode(block, 'string_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createDiv(' + url_string_ + ','+ number_width_ + ',' + number_height_ +');';
  return code;
};
