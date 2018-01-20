Blockly.Blocks['pm2.5_gov'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.PM25_SHOW);
    this.appendValueInput("value_x_state_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_state_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

