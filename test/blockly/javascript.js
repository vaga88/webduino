Blockly.JavaScript['boardserial'] = function (block) {
  var value_device_ = Blockly.JavaScript.valueToCode(block, 'device_', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_check_ = block.getFieldValue('check_');
  var checkbox_multi_ = block.getFieldValue('multi_');
  var dropdown_board_ = block.getFieldValue('board_');
  var dropdown_type_ = block.getFieldValue('type_');
  var dropdown_rate_ = block.getFieldValue('rate_');
  var statements_callbacks_ = Blockly.JavaScript.statementToCode(block, 'callbacks_');
  var type, board, transport, ws;

  if (dropdown_board_ === '2') {
    // Smart
    board = 'board: \'Smart\', ';
    transport = ', transport: \'mqtt\'';
    ws = '';
  } else {
    // Mark 1 or Fly
    board = '';
    transport = '';
    ws = ', transport: \'websocket\''
  }

  if (dropdown_type_ === '1') {
    // Wi-Fi
    if (checkbox_multi_ === 'TRUE') {
      type = 'boardReady({' + board + 'device: ' + value_device_ + transport + ', multi: true}, async function (board) {\n';
    } else {
      type = 'boardReady({' + board + 'device: ' + value_device_ + transport + '}, async function (board) {\n';
    }
  } else if (dropdown_type_ === '2') {
    // Serial
    type = 'boardReady({' + board + 'transport: \'serial\', path: ' + value_device_ + '}, async function (board) {\n';
  } else if (dropdown_type_ === '3') {
    // Bluetooth
    type = 'boardReady({' + board + 'transport: \'bluetooth\', address: ' + value_device_ + '}, async function (board) {\n';
  } else if (dropdown_type_ === '4') {
    // WebSocket
    type = 'boardReady({' + board + 'url: ' + value_device_ + ws + '}, async function (board) {\n';
  }

  var code;
  if (checkbox_check_ === 'FALSE') {
    code = type +
      '  board.systemReset();\n' +
      '  board.samplingInterval = ' + dropdown_rate_ + ';\n' +
      statements_callbacks_ +
      '});\n';
  } else if (checkbox_check_ === 'TRUE') {
    code = 'if(window.readyBoardLength){\n' +
      '  window.readyBoardLength = window.readyBoardLength + 1;\n' +
      '}else{\n' +
      '  window.readyBoardLength = 1;\n' +
      '}\n\n' +
      type +
      '  board.systemReset();\n' +
      '  board.samplingInterval = ' + dropdown_rate_ + ';\n' +
      statements_callbacks_ +
      '  if(window.boardReadyNumber){\n' +
      '    window.boardReadyNumber = window.boardReadyNumber +1;\n' +
      '  }else{\n' +
      '    window.boardReadyNumber = 1;\n' +
      '  }\n' +
      '  allBoardReady(window.boardReadyNumber);\n' +
      '});\n';
  }
  return code;
}
