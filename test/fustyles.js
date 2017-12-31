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
    
    alert(input_value_);
    var string = "time,temperature\n"+input_value_.replace(/<br>/ig,"\n");
    var data = d3.csvParse(string);
    
    
    var xScale = d3.scaleTime().range([0, width]);
    var yScale = d3.scaleLinear().range([height, 0]);

    var line = d3.line()
      .x(d => xScale(d.time))
      .y(d => yScale(d.temperature))

    data.forEach(function(d){
      d.time = d.time;
      d.temperature = d.temperature;
    });

    // Set the x and y scales to the data ranges x based on min and max date range (d3.extent()) and y based on 0 to max value
    xScale.domain(d3.extent(data, d => d.time));
    yScale.domain([0, d3.max(data, d => d.temperature)]);

    // Draw the line svg by appending the data to a new svg path giving a class of line and d value based on the d3.line callback
    svg.append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', line)

    // Add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    // text label for the x axis
    svg.append("text")             
        .attr("transform",
              "translate(" + (width+35) + " ," + 
                             (height + margin.top) + ")")
        .style("text-anchor", "middle")
        .text(input_TITLE_X_);

    // Add the y Axis
    svg.append("g")
        .call(d3.axisLeft(yScale));

    // text label for the y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 36)
        .attr("x", 0 )
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(input_TITLE_Y_);  
        

  }

  window.createLineChart = createLineChart;
    
}(window, window.document));
