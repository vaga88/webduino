Blockly.Blocks['pm_gov'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.PM_SHOW);
    this.appendValueInput("value_county_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_url_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

