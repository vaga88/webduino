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
    xmlHTTP_get();
    
    //var starttime=new Date().getTime();
    //while ((new Date().getTime()-starttime)<5000)
    //{
    //  if(ResponseData!="") return ResponseData;
    //}
    //return DataFormat;   
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
            DataFormat=json;
          },
          error: function(exception)
          {
            DataFormat= DataFormat + " fail";
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
            console.log(this.responseText);
          else if (DataFormat=="XML")
            console.log(this.responseXML);
        }
      };
      xmlHttp.open("GET", DataUrl, true);
      xmlHttp.send(); 
    }
  }
  
  window.xmlHTTP = xmlHTTP;
  window.xmlHTTP_get = xmlHTTP_get;
  
}(window, window.document));
