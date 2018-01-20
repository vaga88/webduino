+(function (window, document) {

  'use strict';
  
  function PM_gov_link(input_url_) 
  {
    if (document.getElementById("fustyles_PM"))
      document.getElementById("fustyles_PM").innerHTML = "";

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
        var x = this.responseXML.getElementsByTagName("Data");
        var PM_data = "";
        for (var i = 0; i <x.length; i++) 
        { 
          PM_data = PM_data + ",County,";
          if (x[i].getElementsByTagName("County")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("County")[0].childNodes[0].nodeValue;
          PM_data = PM_data + "SiteName,";
          if (x[i].getElementsByTagName("SiteName")[0].childNodes.length==1)
            PM_data = PM_data + x[i].getElementsByTagName("SiteName")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",PublishTime,";
          if (x[i].getElementsByTagName("PublishTime")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("PublishTime")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",PM10,";
          if (x[i].getElementsByTagName("PM10")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("PM10")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",PM10_AVG,";
          if (x[i].getElementsByTagName("PM10_AVG")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("PM10_AVG")[0].childNodes[0].nodeValu;                      
          PM_data = PM_data + ",PM2.5,";
          if (x[i].getElementsByTagName("PM2.5")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("PM2.5")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",PM2.5_AVG,";
          if (x[i].getElementsByTagName("PM2.5_AVG")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("PM2.5_AVG")[0].childNodes[0].nodeValue;
          PM_data = PM_data + ",Status,";
          if (x[i].getElementsByTagName("Status")[0].childNodes.length==1)                      
            PM_data = PM_data + x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue;
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
        if (document.getElementById("fustyles_PM"))
        {
              document.getElementById("fustyles_PM").style.left = '0px';
              document.getElementById("fustyles_PM").style.top = '0px';
              document.getElementById("fustyles_PM").style.width = '0px';
              document.getElementById("fustyles_PM").style.height = '0px';
              document.getElementById("fustyles_PM").style.display = 'block';
              document.getElementById("fustyles_PM").innerHTML = PM_data;
        }
        else
        {
            var div = document.createElement('div');
            div.id = "fustyles_PM";    
            div.style.left = '0px';
            div.style.top = '0px';
            div.style.width = '0px';
            div.style.height = '0px';                        
            div.style.zindex='9999';   
            div.style.display="none";
            div.innerHTML = PM_data;
            document.body.appendChild(div);
        }
      }
    };
    xmlHttp.open("GET", input_url_, true);
    xmlHttp.send(); 
  }
  
  function PM_gov_get(input_site_) 
  {
    if (document.getElementById("fustyles_PM"))
    {
      var x = (document.getElementById("fustyles_PM").innerHTML).split(";");
      var s = input_site_.split("-");

      for (var i = 0; i <(x.length-1); i++) 
      { 
        if ((x[i].indexOf(s[0])!=-1)&&(x[i].indexOf(s[1])!=-1))
        {
          return x[i];
         }
      }
    }
  } 
  
  window.PM_gov_link = PM_gov_link;
  window.PM_gov_get = PM_gov_get;
  
}(window, window.document));
