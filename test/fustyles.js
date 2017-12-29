+(function (window, document) {

  'use strict';

  function createLineChart(input_value_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    if (document.getElementById('fustyles_linechart'))
    {
        if ((input_WIDTH_>0)&&(input_HEIGHT_>0))
        {

        }
        else
        {

        }
    }
    else
    {
      if ((input_WIDTH_>0)&&(input_HEIGHT_>0))
      {


        var div = document.createElement('div');
        div.id = 'fustyles_linechart';
        div.style.position = "absolute";      
        div.style.left = input_LEFT_ + 'px';
        div.style.top = input_TOP_ + 'px';
        div.style.zindex='9999';    
        document.body.appendChild(div);

        google.load("visualization", "1", { packages: ["corechart"] });
        google.setOnLoadCallback(drawChart); 
        
        
        
        
        
          
      }
    }
  }

  window.createLineChart = createLineChart;
    
}(window, window.document));
