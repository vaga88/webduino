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
      var sheet = document.createElement('style');
      sheet.innerHTML = "body {font-size: 100%;}\n"
      + ".line1 {fill: none;stroke: red;stroke-width: 2px;}\n"
      + ".line2 {fill: none;stroke: blue;stroke-width: 2px;}\n"
      + ".point {fill:black;stroke: #000;}";

      document.head.appendChild(sheet); // append in head
      
      var svg = d3.select('body').append('svg')
          .attr('id','fustyles_linechart')      
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left}, ${margin.top})`);
    }    
    
    var string = "time,temperature,humidity\n"+input_value_.replace(/&/ig,"\n");
    var data = d3.csvParse(string);
    
    var parseTime = d3.timeParse("%H:%M:%S");
    data.forEach(function(d){
      d.time = d.time;
      d.temperature = d.temperature;
      d.humidity = d.humidity;
    });
    
    var xScale = d3.scaleTime().range([0, width]);
    var yScale = d3.scaleLinear().range([height, 0]);
    
    xScale.domain(d3.extent(data, d => d.time));
    yScale.domain([0, 100]); 
    

    var line1 = d3.line()
      .x(d => xScale(d.time))
      .y(d => yScale(d.temperature))

    svg.append('path')
      .data([data])
      .attr('class', 'line1')
      .attr('d', line1)
    
    
    var line2 = d3.line()
      .x(d => xScale(d.time))
      .y(d => yScale(d.humidity))

    svg.append('path')
      .data([data])
      .attr('class', 'line2')
      .attr('d', line2)
    
      
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    svg.append("text")             
        .attr("transform",
              "translate(" + (width+30) + " ," + 
                             (height + margin.top) + ")")
        .style("text-anchor", "middle")
        .text(input_TITLE_X_);

    svg.append("g")
        .call(d3.axisLeft(yScale));

    svg.append("text")
        .attr("y", 0 - margin.top )
        .attr("x", 40 )
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(input_TITLE_Y_);  
    
    
    data.forEach(function(d){
      svg.append('circle')
      .attr("cx",xScale(d.time))
      .attr("cy",yScale(d.temperature))
      .attr("r",2)
      .attr("title",'test')
      .on("mouseover", handleMouseOver1)
      .on("mouseout", handleMouseOut1)
      .attr("class", "point");

      svg.append('circle')
      .attr("cx",xScale(d.time))
      .attr("cy",yScale(d.humidity))
      .attr("r",2)
      .on("mouseover", handleMouseOver2)
      .on("mouseout", handleMouseOut2)     
      .attr("class", "point");        
    });
    
    
    
          // Create Event Handlers for mouse
      function handleMouseOver1(d, i) {  // Add interactivity

            // Specify where to put label of text
            svg.append("text").attr({
               id: "t" + d.time + "-" + d.temperature + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
                x: function() { return xScale(d.time) - 30; },
                y: function() { return yScale(d.temperature) - 15; }
            })
            .text(function() {
              return [d.time, d.temperature];  // Value of the text
            });
          }
    
          function handleMouseOver2(d, i) {  // Add interactivity


            // Specify where to put label of text
            svg.append("text").attr({
               id: "t" + d.time + "-" + d.humidity + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
                x: function() { return xScale(d.time) - 30; },
                y: function() { return yScale(d.humidity) - 15; }
            })
            .text(function() {
              return [d.time, d.humidity];  // Value of the text
            });
          }

      function handleMouseOut1(d, i) {

            // Select text by id and then remove
            d3.select("#t" + d.time + "-" + d.temperature + "-" + i).remove();  // Remove text location
          }
    

      function handleMouseOut2(d, i) {

            // Select text by id and then remove
            d3.select("#t" + d.time + "-" + d.humidity + "-" + i).remove();  // Remove text location
          }    

     
    
  }
  


  window.createLineChart = createLineChart;
    
}(window, window.document));
