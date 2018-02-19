Blockly.Blocks['rgb_led'] = {
  init: function() {
    this.appendValueInput("VALUE_RED")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RGB LED   ")
        .appendField("RED")
        .appendField(new Blockly.FieldDropdown([["15","15"], ["12","12"], ["13","13"]]), "PIN_RED")
        .appendField("VALUE");
    this.appendValueInput("VALUE_GREEN")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("GREEN")
        .appendField(new Blockly.FieldDropdown([["15","15"], ["12","12"], ["13","13"]]), "PIN_GREEN")
        .appendField("VALUE");
    this.appendValueInput("VALUE_BLUE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("BLUE")
        .appendField(new Blockly.FieldDropdown([["15","15"], ["12","12"], ["13","13"]]), "PIN_BLUE")
        .appendField("VALUE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


