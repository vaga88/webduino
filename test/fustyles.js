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
        
var string = "time,temperature\n"+input_value_.replace(/&/ig,"\n");
        
var data = d3.csvParse(string);

var margin = {top: 20, right: 50, bottom: 30, left: 50};
var width = 800 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

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

var parseTime = d3.timeParse("%H:%M:%S");
data.forEach(function(d){
  d.time = d.time;
  d.temperature = d.temperature;
});

xScale.domain(d3.extent(data, d => d.time));
yScale.domain([0, d3.max(data, d => d.temperature)]);

svg.append('path')
  .data([data])
  .attr('class', 'line')
  .attr('d', line)

var xAxis = d3.axisBottom(xScale)
  .tickFormat(d3.timeFormat('%H:%M:%S'))
  .ticks(5);

svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis);

svg.append('g')
  .call(d3.axisLeft(yScale))

        
          
      }
    }
  }

  window.createLineChart = createLineChart;
    
}(window, window.document));
