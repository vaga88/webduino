Blockly.Blocks['DHT_chart'] = {
  init: function() {
  this.appendValueInput("value_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT_SHOW)
      .appendField(Blockly.Msg.VALUE_SHOW)
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH_SHOW)
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT_SHOW);
  this.appendValueInput("title_x_")
    .setCheck("String")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Msg.TITLE_X_SHOW);
  this.appendValueInput("title_y_")
    .setCheck("String")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Msg.TITLE_Y_SHOW);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};
