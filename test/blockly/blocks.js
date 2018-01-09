Blockly.Blocks['matrix_led_sample'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BLOCK1_SHOW)
        .appendField(new Blockly.FieldDropdown([["heart","0110011110011111111001100"], ["↑","0010001000111110100000100"], ["↓",""], ["←",""], ["→",""]]), "type_");     
    this.appendValueInput("value_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VALUE_SHOW);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(300);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_led_color'] = {
  init: function() {
    this.appendValueInput("value_color_")
        .setCheck(null)  
        .appendField(Blockly.Msg.MATRIXLED_COLOR_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};  

Blockly.Blocks['matrix_led_width'] = {
  init: function() {
    this.appendValueInput("value_width_")
        .setCheck("Number")  
        .appendField(Blockly.Msg.MATRIXLED_WIDTH_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};  

Blockly.Blocks['matrix_led_height'] = {
  init: function() {
    this.appendValueInput("value_height_")
        .setCheck("Number")  
        .appendField(Blockly.Msg.MATRIXLED_HEIGHT_SHOW);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};   

Blockly.Blocks['matrix_led_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.MATRIXLED_MATRIX_SHOW);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L01")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L06")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L11")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L16")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L21");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L02")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L07")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L12")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L17")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L22");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L03")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L08")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L13")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L18")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L23");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L04")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L09")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L14")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L19")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L24");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L05")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L10")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L15")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L20")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "L25");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_led_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_CLEAR_SHOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);    
    this.setTooltip("");
    this.setHelpUrl("");    
  }
};    

Blockly.Blocks['matrix_led_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_ON_SHOW);
    this.appendValueInput("value_x_on_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_on_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['matrix_led_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIXLED_OFF_SHOW);
    this.appendValueInput("value_x_off_")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("value_y_off_")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

