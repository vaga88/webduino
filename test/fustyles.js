+(function (window, document) {

  'use strict';

  function createLineChart(input_value_,input_WIDTH_,input_HEIGHT_,input_LEFT_,input_TOP_) {
    
    if (document.getElementById('fustyles_googlechart'))
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
        div.id = 'fustyles_googlechart';
        div.style.position = "absolute";      
        div.style.left = input_LEFT_ + 'px';
        div.style.top = input_TOP_ + 'px';
        div.style.zindex='9999';    
        document.body.appendChild(div);
        
        google.load("visualization", "1", { packages: ["corechart"] });
        google.setOnLoadCallback(drawChart);
        
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'time');
        data.addColumn('number', 'temperature(°C )');
        data.addColumn('number', 'humidity( % )');

        var getPara, ParaVal, ParaValTH;

        getPara = input_value_.split(",");

        data.addRows(getPara.length);

        for (i = 0; i < getPara.length; i++) {
          ParaVal = getPara[i].split("=");
          ParaValTH = ParaVal[1].split("-");
          data.setValue(i, 0, ParaVal[0]);
          data.setValue(i, 1, ParaValTH[0]);
          data.setValue(i, 2, ParaValTH[1]);

          if (i==(getPara.length-1)) {
            var ShowTH ='temperature = '+ParaValTH[0].toString()+'°C   '+'humidity = '+ParaValTH[1].toString()+'%';
         }


          //Line Chart
          var chart = new google.visualization.LineChart(document.getElementById('fustyles_googlechart'));

          //Stepped Area Chart
          //var chart = new google.visualization.SteppedAreaChart(document.getElementById('fustyles_googlechart'));

          var options = {
                    title: ShowTH,
                    titleTextStyle:{
                      color: 'red', 
                      fontName: 'Times New Roman', 
                      fontSize: 28, 
                      bold: true,  
                      italic: false 
                        },
                    hAxis : { 
                            textStyle : {fontSize: 14}
                      },
                    vAxis : { 
                            textStyle : {fontSize: 18}
                      },
                    allowHtml: true,
                    showRowNumber: true,
                    width:'100%',
                    height:'400',
                    legend: { position: 'bottom' }
            };

            chart.draw(data, options);
          
          
      }
    }

  window.createLineChart = createLineChart;

}(window, window.document));
