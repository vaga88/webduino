+(function (window, document) {

  'use strict';

  function PM2.5_gov_get(input_url_,input_county_) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this,input_county_);
      }
    };
    xhttp.open("GET", input_url_, true);
    xhttp.send();
  }

  function PM2.5_gov_return(xml,county) {

    var xmlDoc = xml.responseXML;
    var table="<tr><th>SiteName</th><th>County</th><th>PublishTime</th><th>PM10</th><th>PM2.5</th><th>Status</th></tr>";
    var x = xmlDoc.getElementsByTagName("Data");
    for (var i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("SiteName")[0].childNodes[0].nodeValue +
      "</td><td>" +
    x[i].getElementsByTagName("County")[0].childNodes[0].nodeValue +
      "</td><td>" +
    x[i].getElementsByTagName("PublishTime")[0].childNodes[0].nodeValue +
      "</td><td>" +
    x[i].getElementsByTagName("PM10")[0].childNodes[0].nodeValue +
      "</td><td>" +
    x[i].getElementsByTagName("PM2.5")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    return  "<table >" +　table + "</table>";
  }


  window.PM2.5_gov_get = PM2.5_gov_get;
  window.PM2.5_gov_return = PM2.5_gov_return;
  
}(window, window.document));
