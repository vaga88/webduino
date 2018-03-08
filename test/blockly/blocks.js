Blockly.Blocks['uart_car'] = {
  init: function() {
    this.appendValueInput("cmd")
        .setCheck("String")
        .appendField("Uart Car     cmd");
    this.appendValueInput("str1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pin(A-1A)");
    this.appendValueInput("str2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pin(A-1B)");
    this.appendValueInput("str3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pin(B-1A)");
    this.appendValueInput("str4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pin((B-1B)");
    this.appendDummyInput()
        .appendField("STATE")
        .appendField(new Blockly.FieldDropdown([["forward","F"], ["backward","B"], ["left","L"], ["right","R"], ["stop","S"]]), "str5");
    this.appendValueInput("str6")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("A speed");
    this.appendValueInput("str7")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("B speed");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['uart_system'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Uart System  cmd")
        .appendField(new Blockly.FieldDropdown([["inputPullup","inputpullup"], ["pinMode","pinmode"], ["digitalWrite","digitalwrite"], ["digitalRead","digitalread"], ["analogWrite","analogwrite"], ["analogRead","analogread"]]), "cmd");
    this.appendValueInput("str1")
        .setCheck("Number")
        .appendField("pin");
    this.appendValueInput("str2")
        .setCheck("Number")
        .appendField("value");
    this.appendValueInput("str3")
        .setCheck(null)
        .appendField("str3~str9");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['uart_custom'] = {
  init: function() {
    this.appendValueInput("cmd")
        .setCheck(null)
        .appendField("Uart Custom  cmd");
    this.appendValueInput("str1")
        .setCheck(null)
        .appendField("str1");
    this.appendValueInput("str2")
        .setCheck(null)
        .appendField("str2");
    this.appendValueInput("str3")
        .setCheck(null)
        .appendField("str3");
    this.appendValueInput("str4")
        .setCheck(null)
        .appendField("str4");
    this.appendValueInput("str5")
        .setCheck(null)
        .appendField("str5");
    this.appendValueInput("str6")
        .setCheck(null)
        .appendField("str6");
    this.appendValueInput("str7")
        .setCheck(null)
        .appendField("str7");
    this.appendValueInput("str8")
        .setCheck(null)
        .appendField("str8");
    this.appendValueInput("str9")
        .setCheck(null)
        .appendField("str9");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
