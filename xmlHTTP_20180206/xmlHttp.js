+(function (window, document) {

  'use strict';
  
  var DataUrl="";
  var DataFormat="";
  
  function xmlHTTP(input_url_,input_format_) 
  {
    DataUrl = input_url_;
    DataFormat = input_format_;
    xmlHTTP_get(function(err, response) 
                {
                    if (err)
                        return "";
                    else 
                        return response;
                }
    );
  } 
  
  function xmlHTTP_get(callback)   
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
            callback(null, String(json));
          },
          error: function(exception)
          {
            console.log(DataFormat+" fail");
            callback(null, DataFormat+" fail");
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
            callback(null, String(this.responseText));
          }
          else if (DataFormat=="XML")
          {
            console.log(this.responseXML);
            callback(null, String(this.responseXML));
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
