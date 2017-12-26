Blockly.Blocks['iframe_show'] = {
  init: function() {
  this.appendValueInput('url_')
      .setCheck('String')
      .appendField(Blockly.Msg.TEXT_SHOW)
      .appendField(Blockly.Msg.WIDTH_SHOW)
      .appendValueInput('width_')
      .appendField(Blockly.Msg.HEIGHT_SHOW)
      .appendValueInput('height_')
      .appendField(Blockly.Msg.URL_SHOW);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};
