+(function (window, document) {

  'use strict';

  function PM_gov_get(input_url_,input_site_) 
  {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
            var x = this.responseXML.getElementsByTagName("Data");
            for (var i = 0; i <x.length; i++) 
            { 
              if ((x[i].getElementsByTagName("SiteName")[0].childNodes[0].nodeValue+"-"+x[i].getElementsByTagName("County")[0].childNodes[0].nodeValue)==input_site_)
                  return "SiteName," +
                          x[i].getElementsByTagName("SiteName")[0].childNodes[0].nodeValue +
                          ",County," +
                        x[i].getElementsByTagName("County")[0].childNodes[0].nodeValue +
                          ",PublishTime," +
                        x[i].getElementsByTagName("PublishTime")[0].childNodes[0].nodeValue +
                          ",PM10," +
                        x[i].getElementsByTagName("PM10")[0].childNodes[0].nodeValue +
                          ",PM2.5," +
                        x[i].getElementsByTagName("PM2.5")[0].childNodes[0].nodeValue +
                          ",Status," +
                          x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue;
            }
      }
    };
    xhttp.open("GET", input_url_, true);
    xhttp.send();
  }
    
  window.PM_gov_get = PM_gov_get;
  
}(window, window.document));
