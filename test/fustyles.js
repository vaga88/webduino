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
        s.style.height=500+'px';
        document.body.appendChild(s);

        
        
var element = document.createElement('style');
var sheet;
// Append style element to head
document.head.appendChild(element);
// Reference to the stylesheet
sheet = element.sheet;
        
var styles = '.line {';
styles += 'fill: none;';
styles += 'stroke: hotpink;';
styles += 'stroke-width: 2px;';
styles += '}';

// Add the first CSS rule to the stylesheet
sheet.insertRule(styles, 0);
        
        
        
        
// csv data (parse data)
var data = d3.csvParse('time,temperature\n18:20:00,25.2\n18:20:05,27.0\n18:20:10,26.4\n18:20:15,24.5\n18:20:20,23.8\n18:20:25,22.6\n18:20:30,21.8\n');

// === 1. Boilerplate setup
// Set canvas margins
var margin = {top: 20, right: 50, bottom: 30, left: 50};
var width = 800 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

// Create svg object
var svg = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

// === 2. Set scales and draw line
// Set x (timeseries) and y (linear) scales
var xScale = d3.scaleTime().range([0, width]);
var yScale = d3.scaleLinear().range([height, 0]);

// draw line callback function using d3.line helper passing in x and y coordinates
var line = d3.line()
  .x(d => xScale(d.time))
  .y(d => yScale(d.temperature))

// === 3. Append data and start drawing
// create parseTime helper to turn string into time format (11-Apr-12) into datetime JS object
//var parseTime = d3.timeParse('%d-%b-%y');
// Iterate through each data point and parse strings into time and number format
data.forEach(function(d){
  d.time = d.time;
  d.temperature = parseInt(d.temperature);
});

// Set the x and y scales to the data ranges x based on min and max date range (d3.extent()) and y based on 0 to max value
xScale.domain(d3.extent(data, d => d.time));
yScale.domain([0, d3.max(data, d => d.temperature)]);

// Draw the line svg by appending the data to a new svg path giving a class of line and d value based on the d3.line callback
svg.append('path')
  .data([data])
  .attr('class', 'line')
  .attr('d', line)

// Add the axis 
var xAxis = d3.axisBottom(xScale)
  .tickFormat(d3.timeFormat('%d-%b'))
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
