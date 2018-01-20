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
          PM_data = PM_data + 
                  "SiteName," +
                  x[i].getElementsByTagName("SiteName")[0].childNodes[0].nodeValue +
                  ",County," +
                  x[i].getElementsByTagName("County")[0].childNodes[0].nodeValue +
                  ",PublishTime," +
                  x[i].getElementsByTagName("PublishTime")[0].childNodes[0].nodeValue +
                  ",PM10," +
                  x[i].getElementsByTagName("PM10")[0].childNodes[0].nodeValue +
                  ",PM10_AVG," +
                  x[i].getElementsByTagName("PM10_AVG")[0].childNodes[0].nodeValue +                       
                  ",PM2.5," +
                  x[i].getElementsByTagName("PM2.5")[0].childNodes[0].nodeValue +
                  ",PM2.5_AVG," +
                  x[i].getElementsByTagName("PM2.5_AVG")[0].childNodes[0].nodeValue +   
                  ",Status," +
                  x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue +
                  ",CO," +
                  x[i].getElementsByTagName("CO")[0].childNodes[0].nodeValue +
                  ",CO_8hr," +
                  x[i].getElementsByTagName("CO_8hr")[0].childNodes[0].nodeValue +
                  ",NO," +
                  x[i].getElementsByTagName("NO")[0].childNodes[0].nodeValue +
                  ",NO2," +
                  x[i].getElementsByTagName("NO2")[0].childNodes[0].nodeValue +    
                  ",NOx," +
                  x[i].getElementsByTagName("NOx")[0].childNodes[0].nodeValue +
                  ",O3," +
                  x[i].getElementsByTagName("O3")[0].childNodes[0].nodeValue +
                  ",O3_8hr," +
                  x[i].getElementsByTagName("O3_8hr")[0].childNodes[0].nodeValue +
                  ",SO2," +
                  x[i].getElementsByTagName("SO2")[0].childNodes[0].nodeValue + ";"; 
                  //",WindDirec," +
                  //x[i].getElementsByTagName("WindDirec")[0].childNodes[0].nodeValue +
                  //",WindSpeed," +
                  //x[i].getElementsByTagName("WindSpeed")[0].childNodes[0].nodeValue +             
                  //";"; 
            
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

      for (var i = 0; i <x.length; i++) 
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
