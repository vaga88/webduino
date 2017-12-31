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
      .on("mouseover", handleMouseOver1(d.time,d.temperature))
      .on("mouseout", handleMouseOut1(d.time,d.temperature))
      .attr("class", "point");

      svg.append('circle')
      .attr("cx",xScale(d.time))
      .attr("cy",yScale(d.humidity))
      .attr("r",2)
      .on("mouseover", handleMouseOver2(d.time,d.humidity))
      .on("mouseout", handleMouseOut2(d.time,d.humidity))     
      .attr("class", "point");        
    });
    
  }
  


      function handleMouseOver1(v1,v2) {  
            var svg = d3.select('#fustyles_linechart');
            svg.append("text").attr({
               id: "t" + v1 + "-" + v2 + "-1",  
                x: function() { return xScale(v1) - 30; },
                y: function() { return yScale(v2) - 15; }
            })
            .text(function() {
              return [v1, v2]; 
            });
          }
    
      function handleMouseOver2(v1,v2) {  
            var svg = d3.select('#fustyles_linechart');
            svg.append("text").attr({
               id: "t" + v1 + "-" + v2 + "-2",  
                x: function() { return xScale(v1) - 30; },
                y: function() { return yScale(v2) - 15; }
            })
            .text(function() {
              return [v1, v2]; 
            });
          }
  
      function handleMouseOut1(v1,v2) {

            // Select text by id and then remove
            d3.select("#t" + v1 + "-" + v2 + "-1").remove();  // Remove text location
          }
     
       function handleMouseOut2(v1,v2) {

            // Select text by id and then remove
            d3.select("#t" + v1 + "-" + v2 + "-2").remove();  // Remove text location
          }
     
  
  

  window.createLineChart = createLineChart;
    
}(window, window.document));
