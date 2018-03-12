+(function (window, document) {

  'use strict';

  function createIframe(ifttt_eventname,ifttt_key,ifttt_value1,ifttt_value2,ifttt_value3,input_id_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    var input_url="https://maker.ifttt.com/trigger/"+ifttt_eventname+"/with/key/"+ifttt_key+"?value1="+ifttt_value1+"&value2="+ifttt_value2+"&value3="+ifttt_value3;
    var src = '<iframe src="' + input_url + '" style="width:' + input_WIDTH_ + 'px;height:' + input_HEIGHT_ + 'px"></iframe>';
    
    if (document.getElementById("fustyles_iframe"+input_id_))
    {
          document.getElementById("fustyles_iframe"+input_id_).style.left = input_LEFT_ + 'px';
          document.getElementById("fustyles_iframe"+input_id_).style.top = input_TOP_ + 'px';
          document.getElementById("fustyles_iframe"+input_id_).style.display = 'block';
          document.getElementById("fustyles_iframe"+input_id_).innerHTML = src;
    }
    else
    {
        var div = document.createElement('div');
        div.id = "fustyles_iframe"+input_id_;
        div.style.position = 'absolute';      
        div.style.left = input_LEFT_ + 'px';
        div.style.top = input_TOP_ + 'px';
        div.style.zindex='9999';      
        div.innerHTML = src;
        document.body.appendChild(div);
    }
  }

  window.createIframe = createIframe;

}(window, window.document));
