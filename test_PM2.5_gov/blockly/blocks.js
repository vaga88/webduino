Blockly.Blocks['pm_gov'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.PM_SHOW);
        .appendField(new Blockly.FieldDropdown([
          ["1", "1"],
          ["0.9", "0.9"],
          ["0.8", "0.8"],
          ["0.7", "0.7"],
          ["0.6", "0.6"],
          ["0.5", "0.5"],
          ["0.4", "0.4"],
          ["0.3", "0.3"],
          ["0.2", "0.3"],
          ["0.1", "0.1"],
          ["0", "0"]
        ]), "volume_")
        .appendValueInput("value_url_")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

