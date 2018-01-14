+(function (window, document) {

  'use strict';
 

  function GoogleTTS(input_url_,input_sheet_,input_word_,input_x_,input_y_) {

    var myData= {};
    myData.sheetUrl = input_url_;
    myData.sheetName = input_sheet_;
    myData.column0 = input_word_;
    myData.column1 = '=GOOGLETRANSLATE(A1,"auto","en")';
    writeSheetData(myData);
    
    readSheetData({
      row : 1,
      col : 2,
      sheetUrl : myData.sheetUrl,
      sheetName : myData.sheetName
    },function(googleSheetReadData){
      speak(googleSheetReadData,["en-US",1,1,1]);
    });
  }
    
  window.GoogleTTS = GoogleTTS;
    
}(window, window.document));
