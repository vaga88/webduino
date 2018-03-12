+(function (window, document) {

  'use strict';

  function createIframe(ifttt_eventname,ifttt_key,ifttt_value1,ifttt_value2,ifttt_value3) {
    
    var input_url="https://maker.ifttt.com/trigger/"+ifttt_eventname+"/with/key/"+ifttt_key+"?value1="+ifttt_value1+"&value2="+ifttt_value2+"&value3="+ifttt_value3;
    var src = '<iframe src="' + input_url + '" style="width:400px;height:100px"></iframe>';
    
    if (document.getElementById("fustyles_iframe"))
    {
          document.getElementById("fustyles_iframe").style.left = '0px';
          document.getElementById("fustyles_iframe").style.top = '100px';
          document.getElementById("fustyles_iframe").style.display = 'block';
          document.getElementById("fustyles_iframe").innerHTML = src;
    }
    else
    {
        var div = document.createElement('div');
        div.id = "fustyles_iframe";
        div.style.position = 'absolute';      
        div.style.left = '0px';
        div.style.top = '100px';
        div.style.zindex='9999';      
        div.innerHTML = src;
        document.body.appendChild(div);
    }
  }

  window.createIframe = createIframe;

}(window, window.document));
