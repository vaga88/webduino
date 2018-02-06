+(function (window, document) {

  'use strict';
  
  var ResponseData="";
  var DataFormat="";
  
  function xmlHTTP(input_url_,input_format_) 
  {
    ResponseData="";
    DataFormat = input_format_;
    return ResponseData;
  } 
  
  function xmlHTTP()   
  {
    if (window.XMLHttpRequest)
      var xmlHttp = new XMLHttpRequest();
    else
      var xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    
    xmlHttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {    
        if (DataFormat=="HTML")
          ResponseData = this.responseTEXT;
        else if (DataFormat=="XML")
          ResponseData = this.responseXML;
      }
    };
    xmlHttp.open("GET", target, true);
    xmlHttp.send(); 
  }
  
  window.PM_gov_link = PM_gov_link;
  window.PM_gov_get = PM_gov_get;
  window.getXML = getXML;
  window.getJSON = getJSON;
  
}(window, window.document));
