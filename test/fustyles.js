+(function (window, document) {

  'use strict';

  function createLineChart(input_value_,input_WIDTH_,input_HEIGHT_,input_TITLE_X_,input_TITLE_Y_) {
    
    var margin = {top: 20, right: 50, bottom: 30, left: 50};
    var width = input_WIDTH_ - margin.left - margin.right;
    var height = input_HEIGHT_ - margin.top - margin.bottom;

    
    if (document.getElementById('fustyles_linechart'))
    {
      d3.selectAll("svg > *").remove();
      var svg = d3.select('#fustyles_linechart')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left}, ${margin.top})`);
    }
    else
    {
      var element = document.createElement('style');
      var sheet;
      document.head.appendChild(element);
      sheet = element.sheet;

      var styles = '.line {';
      styles += 'fill: none;';
      styles += 'stroke: hotpink;';
      styles += 'stroke-width: 2px;';
      styles += '}';

      sheet.insertRule(styles, 0);    
      
      var svg = d3.select('body').append('svg')
          .attr('id','fustyles_linechart')      
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left}, ${margin.top})`);
    }    
    
    var string = "time,temperature,humidity\n"+input_value_.replace(/<br>/ig,"\n");
    var data = d3.csvParse(string);
    
    data.forEach(function(d){
      d.time = d.time;
      d.temperature = d.temperature;
      d.humidity = d.humidity;
    });
    
    var xScale = d3.scaleTime().range([0, width]);
    var yScale = d3.scaleLinear().range([height, 0]);
    
    xScale.domain(d3.extent(data, d => d.time));
    yScale.domain([0, 100]);    

    var line = d3.line()
      .x(d => xScale(d.time))
      .y(d => yScale(d.temperature))

    svg.append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', line)
    
    var line1 = d3.line()
      .x(d => xScale(d.time))
      .y(d => yScale(d.humidity))

    svg.append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', line1)
    

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    svg.append("text")             
        .attr("transform",
              "translate(" + (width+35) + " ," + 
                             (height + margin.top) + ")")
        .style("text-anchor", "middle")
        .text(input_TITLE_X_);

    svg.append("g")
        .call(d3.axisLeft(yScale));

    svg.append("text")
        .attr("y", 0 - margin.top )
        .attr("x", 20 )
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(input_TITLE_Y_);  
        

  }

  window.createLineChart = createLineChart;
    
}(window, window.document));
