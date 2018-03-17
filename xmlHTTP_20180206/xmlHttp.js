+(function (window, document) {

  'use strict';
  
  var ResponseData="";
  var DataUrl="";
  var DataFormat="";
  
  function xmlHTTP(input_url_,input_format_) 
  {
    ResponseData="";
    DataUrl = input_url_;
    DataFormat = input_format_;
    return xmlHTTP_get();
  } 
  
  function xmlHTTP_get()   
  {
    if (DataFormat=="JSON")
    {
      var data = $.ajax({
          type: "get",
          dataType: "jsonp",
          url: DataUrl,
          success: function(json)
          {
            console.log(json);
            return json.replace(/\'/g,"’").replace(/\"/g,"”");
          },
          error: function(exception)
          {
            console.log(DataFormat+" fail");
            return DataFormat+" fail";
          }
       });
    }
    else
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
          {
            console.log(this.responseText);
            return this.responseText.replace(/\'/g,"’").replace(/\"/g,"”");
          }
          else if (DataFormat=="XML")
          {
            console.log(this.responseXML);
            return this.responseXML.replace(/\'/g,"’").replace(/\"/g,"”");
          }
        }
      };
      xmlHttp.open("PUT", DataUrl, true);
      xmlHttp.send(); 
    }
  }
  
  window.xmlHTTP = xmlHTTP;
  window.xmlHTTP_get = xmlHTTP_get;
  
}(window, window.document));
