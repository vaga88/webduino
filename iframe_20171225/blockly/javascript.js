Blockly.JavaScript['iframe_show'] = function (block) {
  var value_string_ = Blockly.JavaScript.valueToCode(block, 'string_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = ' document.getElementById("demo-area-01-show").innerHTML = "<iframe src='+ value_string_ +' width=600 height=400>";';
  return code;
};
