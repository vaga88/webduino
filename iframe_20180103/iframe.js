+(function (window, document) {

  'use strict';

  function createIframe(input_url_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    var substr = input_url_.toLowerCase().split('.');
    
    if (substr[substr.length-1].indexOf("aac,au,aif,aiff,aiffc,alac,ape,asf,avi,cda,dat,divx,flac,m2ts,m4a,mid,mov,mp2,mp3,mp4,mpc,mpg,mpeg,mv2,ogg,pdf,ra,ram,raw,rcp,rm,rmvb,snd,tak,tta,vob,voc,wma,wav,wmf,wmv,wv,xmi")!=-1)
        var src = '<embed src="' + input_url_ + '" style="width:' + input_WIDTH_ + 'px;height:' + input_HEIGHT_ + 'px" autostart="true"></embed>'; 
    else if ((substr[substr.length-1]=='swf')||(substr[substr.length-1]=='flv'))
        var src = '<embed src="' + input_url_ + '" style="width:' + input_WIDTH_ + 'px;height:' + input_HEIGHT_ + 'px" type="application/x-shockwave-flash"></embed>';
    else
        var src = '<iframe src="' + input_url_ + '" style="width:' + input_WIDTH_ + 'px;height:' + input_HEIGHT_ + 'px" frameborder="0"></iframe>';
    
    if (document.getElementById('fustyles'))
    {
          document.getElementById('fustyles').style.left = input_LEFT_ + 'px';
          document.getElementById('fustyles').style.top = input_TOP_ + 'px';
          document.getElementById('fustyles').style.display = 'block';
          document.getElementById('fustyles').innerHTML = src;
    }
    else
    {
        var div = document.createElement('div');
        div.id = 'fustyles';
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
