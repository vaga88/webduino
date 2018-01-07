Blockly.Blocks['matrix_led'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L1")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L2")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L3")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L4")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L5");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L6")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L7")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L8")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L9")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L10");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L14")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L15");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L16")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L17")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L18")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L19")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L20");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L21")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L22")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L23")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L24")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L25");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);    
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
