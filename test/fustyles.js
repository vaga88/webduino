+(function (window, document) {

  'use strict';

  function createLineChart(input_value_,input_WIDTH_,input_HEIGHT_,input_TITLE_X_,input_TITLE_Y_) {
    
    if (document.getElementById('fustyles_linechart'))
    {
      rave.selectAll("svg").remove();     
    }
    
    var s = document.createElement('svg');
    s.id='fustyles_linechart';
    s.style.width=input_WIDTH_+'px';
    s.style.height=input_HEIGHT_+'px';
    s.style.zindex='9999';
    document.body.appendChild(s);

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

        
    var string = "time,temperature\n"+input_value_.replace(/&/ig,"\n");

    var data = d3.csvParse(string);

    var margin = {top: 20, right: 50, bottom: 30, left: 50};
    var width = input_WIDTH_ - margin.left - margin.right;
    var height = input_HEIGHT_ - margin.top - margin.bottom;

    var svg = d3.select('body').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

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
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(input_TITLE_Y_);  
        

  }

  window.createLineChart = createLineChart;
    
}(window, window.document));
