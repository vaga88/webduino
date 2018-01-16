Blockly.Blocks['speak_setting_sample_fustyles'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_LANG)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_TW, "zh-TW"],
        [Blockly.Msg.WEBDUINO_SPEAK_US, "en-US"],
        [Blockly.Msg.WEBDUINO_SPEAK_JP, "ja-JP"],
        [Blockly.Msg.WEBDUINO_SPEAK_KR, "ko-KR"],
        [Blockly.Msg.WEBDUINO_SPEAK_FR, "fr-FR"]
      ]), "lang_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_VOLUME)
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
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_PITCH)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_P20, "2"],
        [Blockly.Msg.WEBDUINO_SPEAK_P15, "1.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_P10, "1"],
        [Blockly.Msg.WEBDUINO_SPEAK_P05, "0.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_P01, "0.1"]
      ]), "pitch_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_RATE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_R20, "2"],
        [Blockly.Msg.WEBDUINO_SPEAK_R15, "1.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_R10, "1"],
        [Blockly.Msg.WEBDUINO_SPEAK_R07, "0.7"],
        [Blockly.Msg.WEBDUINO_SPEAK_R05, "0.5"]
      ]), "rate_");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setColour(270);
    this.setHelpUrl(mainUrl + 'useful/component/buzzer-clock.html' + utmUrl); 
  }
};
