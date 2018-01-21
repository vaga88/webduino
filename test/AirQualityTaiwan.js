+(function (window, document) {

  'use strict';
  
  var PM_data = "";
  
  function PM_gov_link(input_url_,input_format_) 
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
        var x = this.responseXML.getElementsByTagName("Data");
        PM_data = "";
        
        for (var i = 0; i <x.length; i++) 
        { 
          PM_data += "County,";
          if (x[i].getElementsByTagName("County")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("County")[0].childNodes[0].nodeValue;
          PM_data += ",SiteName,";
          if (x[i].getElementsByTagName("SiteName")[0].childNodes.length==1)
            PM_data += x[i].getElementsByTagName("SiteName")[0].childNodes[0].nodeValue;
          PM_data += ",PublishTime,";
          if (x[i].getElementsByTagName("PublishTime")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("PublishTime")[0].childNodes[0].nodeValue;
          PM_data += ",Status,";
          if (x[i].getElementsByTagName("Status")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue;               
          PM_data += ",PM10,";
          if (x[i].getElementsByTagName("PM10")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("PM10")[0].childNodes[0].nodeValue;
          PM_data += ",PM10_AVG,";
          if (x[i].getElementsByTagName("PM10_AVG")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("PM10_AVG")[0].childNodes[0].nodeValue;                    
          PM_data += ",PM2.5,";
          if (x[i].getElementsByTagName("PM2.5")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("PM2.5")[0].childNodes[0].nodeValue;
          PM_data += ",PM2.5_AVG,";
          if (x[i].getElementsByTagName("PM2.5_AVG")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("PM2.5_AVG")[0].childNodes[0].nodeValue; 
          PM_data += ",CO,";
          if (x[i].getElementsByTagName("CO")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("CO")[0].childNodes[0].nodeValue;
          PM_data += ",CO_8hr,";
          if (x[i].getElementsByTagName("CO_8hr")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("CO_8hr")[0].childNodes[0].nodeValue;
          PM_data += ",NO,";
          if (x[i].getElementsByTagName("NO")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("NO")[0].childNodes[0].nodeValue;
          PM_data += ",NO2,";
          if (x[i].getElementsByTagName("NO2")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("NO2")[0].childNodes[0].nodeValue;  
          PM_data += ",NOx,";
          if (x[i].getElementsByTagName("NOx")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("NOx")[0].childNodes[0].nodeValue;
          PM_data += ",O3,";
          if (x[i].getElementsByTagName("O3")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("O3")[0].childNodes[0].nodeValue;
          PM_data += ",O3_8hr,";
          if (x[i].getElementsByTagName("O3_8hr")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("O3_8hr")[0].childNodes[0].nodeValue;
          PM_data += ",SO2,";
          if (x[i].getElementsByTagName("SO2")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("SO2")[0].childNodes[0].nodeValue;
          PM_data += ",WindDirec,";
          if (x[i].getElementsByTagName("WindDirec")[0].childNodes.length==1)
            PM_data += x[i].getElementsByTagName("WindDirec")[0].childNodes[0].nodeValue;
          PM_data += ",WindSpeed,";
          if (x[i].getElementsByTagName("WindSpeed")[0].childNodes.length==1)
            PM_data += x[i].getElementsByTagName("WindSpeed")[0].childNodes[0].nodeValue; 
          PM_data += ";"; 
        }
      }
    };
    xmlHttp.open("GET", input_url_, true);
    xmlHttp.send(); 
  }
  
  function getJSON(target)
  {
    var data = $.ajax({
        type: "POST",
        dataType : "jsonp",
        url: target,
        success: function(json)
        {
          
          
          json = JSON.stringify(json);
          var s1 = json.split("\"records\":")[1];
          var s2 = s1.split("]")[0]+"]";
          console.log(s2);
          json = $.parseJSON(s2);
          
          $.each(json, function(index, element) {
            PM_data += "County,";
            PM_data += element.County;
            PM_data += ",SiteName,";
            PM_data += element.SiteName;
            PM_data += ",PublishTime,";
            PM_data += element.PublishTime;
            PM_data += ",Status,";
            PM_data += element.Status;
            PM_data += ",PM10,";
            PM_data += element.PM10;
            PM_data += ",PM10_AVG,";
            PM_data += element.PM10_AVG;
            PM_data += ",PM2.5,";
            PM_data += element["PM2.5"];
            PM_data += ",PM2.5_AVG,";
            PM_data += element["PM2.5_AVG"];
            PM_data += ",CO,";
            PM_data += element.CO;
            PM_data += ",CO_8hr,";
            PM_data += element.CO_8hr;
            PM_data += ",NO,";
            PM_data += element.NO;
            PM_data += ",NO2,";
            PM_data += element.NO2;
            PM_data += ",NOx,";
            PM_data += element.NOx;
            PM_data += ",O3,";
            PM_data += element.O3;
            PM_data += ",O3_8hr,";
            PM_data += element.O3_8hr;
            PM_data += ",SO2,";
            PM_data += element.SO2;
            PM_data += ",WindDirec,";
            PM_data += element.WindDirec;
            PM_data += ",WindSpeed,";
            PM_data += element.WindSpeed;
            PM_data += ";";
          });
        },
        error: function(exception)
        {
          console.log('fail');
        }
     });
  }

  function PM_gov_get(input_site_) 
  {
    var x = PM_data.split(";");
    var s = input_site_.split("-");

    for (var i = 0; i <(x.length-1); i++) 
      if ((x[i].indexOf(s[0])!=-1)&&(x[i].indexOf(s[1])!=-1)) return x[i];
  } 
    
  window.PM_gov_link = PM_gov_link;
  window.PM_gov_get = PM_gov_get;
  window.getXML = getXML;
  window.getJSON = getJSON;
  
}(window, window.document));
