Blockly.Blocks['xmlHTTP_ResponseData'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.XMLHTTP_RESPONSEDATA)
        .appendField(new Blockly.FieldDropdown([
          ["HTML","HTML"],    
          ["XML","XML"]
        ]), "value_format_");          
    this.appendValueInput("value_url_")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};



