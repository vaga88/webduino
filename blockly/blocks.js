Blockly.Blocks['iframe_show'] = {
  init: function() {
  this.appendValueInput('string_')
      .setCheck('String')
      .appendField(Blockly.Msg.TEXT_SHOW);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};
