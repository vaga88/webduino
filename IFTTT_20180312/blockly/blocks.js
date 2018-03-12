Blockly.Blocks['ifttt_open'] = {
  init: function() {
  this.appendValueInput("ifttt_eventname")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("IFTTT LINE   ")
      .appendField("EventName")    
  this.appendValueInput("ifttt_key")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Key")
  this.appendValueInput("ifttt_value1")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value1")
  this.appendValueInput("ifttt_value2")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value2")
  this.appendValueInput("ifttt_value3")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value3")  
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};
