+(function (window, document) {

  'use strict';
  
  var PM_data;
  
  function PM_gov_link(input_url_) 
  {
    CreateScript(input_url_);
    
    if (window.XMLHttpRequest)
      var xmlHttp = new XMLHttpRequest();
    else
        var xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    
    xmlHttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {    
        var x = this.responseXML.getElementsByTagName("Data");
        PM_data = "";
        
        for (var i = 0; i <x.length; i++) 
        { 
          PM_data = PM_data + "County,";
          if (x[i].getElementsByTagName("County")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("County")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",SiteName,";
          if (x[i].getElementsByTagName("SiteName")[0].childNodes.length==1)
            PM_data = PM_data + x[i].getElementsByTagName("SiteName")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",PublishTime,";
          if (x[i].getElementsByTagName("PublishTime")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("PublishTime")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",Status,";
          if (x[i].getElementsByTagName("Status")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue;               
          PM_data = PM_data + ",PM10,";
          if (x[i].getElementsByTagName("PM10")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("PM10")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",PM10_AVG,";
          if (x[i].getElementsByTagName("PM10_AVG")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("PM10_AVG")[0].childNodes[0].nodeValue;                    
          PM_data = PM_data + ",PM2.5,";
          if (x[i].getElementsByTagName("PM2.5")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("PM2.5")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",PM2.5_AVG,";
          if (x[i].getElementsByTagName("PM2.5_AVG")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("PM2.5_AVG")[0].childNodes[0].nodeValue; 
          PM_data = PM_data + ",CO,";
          if (x[i].getElementsByTagName("CO")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("CO")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",CO_8hr,";
          if (x[i].getElementsByTagName("CO_8hr")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("CO_8hr")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",NO,";
          if (x[i].getElementsByTagName("NO")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("NO")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",NO2,";
          if (x[i].getElementsByTagName("NO2")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("NO2")[0].childNodes[0].nodeValue;  
          PM_data = PM_data + ",NOx,";
          if (x[i].getElementsByTagName("NOx")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("NOx")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",O3,";
          if (x[i].getElementsByTagName("O3")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("O3")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",O3_8hr,";
          if (x[i].getElementsByTagName("O3_8hr")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("O3_8hr")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",SO2,";
          if (x[i].getElementsByTagName("SO2")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("SO2")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",WindDirec,";
          if (x[i].getElementsByTagName("WindDirec")[0].childNodes.length==1)
            PM_data = PM_data + x[i].getElementsByTagName("WindDirec")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",WindSpeed,";
          if (x[i].getElementsByTagName("WindSpeed")[0].childNodes.length==1)
            PM_data = PM_data + x[i].getElementsByTagName("WindSpeed")[0].childNodes[0].nodeValue; 
          PM_data = PM_data + ";"; 
        }
      }
    };
    xmlHttp.open("GET", input_url_, true);
    xmlHttp.send(); 
  }
  
  function PM_gov_get(input_site_) 
  {
    console.log(PM_data);
    var x = PM_data.split(";");
    var s = input_site_.split("-");

    for (var i = 0; i <(x.length-1); i++) 
    { 
      if ((x[i].indexOf(s[0])!=-1)&&(x[i].indexOf(s[1])!=-1)) return x[i];
    }
  } 
  
  function AjaxCall(target)
  {
    var data = $.ajax({
        type: "POST",
        dataType : "jsonp",
        url: target,
        success: function(json)
        {
          $("#demo-area-01-show").html(json);
        },
        error: function(exception)
        {
          $("#demo-area-01-show").html(exception.statusText);
        }
     });
  }
  
  function CreateScript(target)
  {
    var script = document.createElement('script');
    script.src = target;
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  
  window.PM_gov_link = PM_gov_link;
  window.PM_gov_get = PM_gov_get;
  window.AjaxCall = AjaxCall;
  window.CreateScript = CreateScript;
  
}(window, window.document));
