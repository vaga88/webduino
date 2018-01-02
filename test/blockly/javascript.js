Blockly.JavaScript['DHT_chart'] = function (block) {
  var dropdown_kind_ = block.getFieldValue('kind_');
  var value_value_ = Blockly.JavaScript.valueToCode(block, 'value_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_title_x_ = Blockly.JavaScript.valueToCode(block, 'title_x_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_title_y_ = Blockly.JavaScript.valueToCode(block, 'title_y_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'createDHTchart(' + dropdown_kind_ + ',' + value_value_ + ','+ value_width_ + ',' + value_height_ + ',' + value_title_x_ + ',' + value_title_y_ + ');';
  return code;
};
