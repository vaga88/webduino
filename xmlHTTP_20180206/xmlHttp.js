+(function (window, document) {

  'use strict';
  
  var PM_data="";
  
  function getresponse(input_url_,input_format_) 
  {
    if (input_format_=="JSON")
      getJSON(input_url_);
    else if (input_format_=="XML")
      getXML(input_url_);   
  }
    
  function getXML(target)  
  {
    if (window.XMLHttpRequest)
      var xmlHttp = new XMLHttpRequest();
    else
      var xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    
    xmlHttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {  
        /*
        if (DataFormat=="HTML")
        {
          console.log(this.responseText);
          return String(this.responseText);
        }                         
        else if (DataFormat=="XML")
        {
          console.log(this.responseXML);
          return String(this.responseXML);
        }
        */
        
        var x = this.responseXML.getElementsByTagName("Data");
        PM_data = "";
        for (var i = 0; i <x.length; i++) 
        { 
          PM_data += "County,";
          if (x[i].getElementsByTagName("County")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("County")[0].childNodes[0].nodeValue;
        }
      }
    };
    xmlHttp.open("GET", target, true);
    xmlHttp.send(); 
  }
  
  function getJSON(target)
  {
    var data = $.ajax({
        type: "get",
        dataType: "jsonp",
        url: target,
        success: function(json)
        {
          var s0 = JSON.stringify(json);
          if (s0.indexOf("\"records\":")!=-1)
          {
            var s1 = s0.split("\"records\":")[1];
            var s2 = s1.split("]")[0]+"]";
            json = $.parseJSON(s2);
          }
          PM_data = "";
          $.each(json, function(index, element) {
            PM_data += "County,";
            PM_data += element.County;
          });
        },
        error: function(exception)
        {
          console.log('fail');
        }
     });
  }

  function getresponse_get(input_site_) 
  {
    if (PM_data!="")
    {
      var x = PM_data.split(";");
      var s = input_site_.split("-");

      for (var i = 0; i <(x.length-1); i++) 
        if ((x[i].indexOf(s[0])!=-1)&&(x[i].indexOf(s[1])!=-1)) return x[i];
    }
    else
       return "";
  } 
    
  window.getresponse = getresponse;
  window.getresponse_get = getresponse_get;
  window.getXML = getXML;
  window.getJSON = getJSON;
  
}(window, window.document));
