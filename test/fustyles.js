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

        
        var s = document.createElement('svg');
        s.id='fustyles_linechart';
        s.style.width=800+'px';
        s.style.height=400+'px';
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
        
var margin = {top: 20, right: 50, bottom: 30, left: 50};
var width = 800 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;        
var svg = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

var string = "time,temperature\n"+input_value_.replace(/&/ig,"\n");       
var data = d3.csv.parse(string);  
data.forEach(function(d){
  d.time = d.time;
  d.temperature = d.temperature;
});
        



var parseDate = d3.time.format("%H:%M:%S").parse;  
var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(d3.time.format("%H:%M:%S"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

        
        
var line = d3.svg.line()
    .x(function(d) { return x(d.time); })
    .y(function(d) { return y(d.temperature); });


svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(0)")
    .attr("y", 25)
    .attr("x", 75)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("temperature");
        
svg.append("path")
   .datum(data)
   .attr("class", "line")
   .attr("d", line)
   .attr("opacity", 0)
   .transition()
   .duration(2000)
   .attr("opacity", 1);        


          
      }
    }
  }

  window.createLineChart = createLineChart;
    
}(window, window.document));
