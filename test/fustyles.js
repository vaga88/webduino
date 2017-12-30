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
        s.style.width=960+'px';
        s.style.height=500+'px';
        document.body.appendChild(s);
        
        
// csv data (parse data)
var data = d3.csvParse('date,close\n1-May-12,58.13\n30-Apr-12,53.98\n27-Apr-12,67.00\n26-Apr-12,89.70\n25-Apr-12,99.00\n24-Apr-12,130.28\n23-Apr-12,166.70\n20-Apr-12,234.98\n19-Apr-12,345.44\n18-Apr-12,443.34\n17-Apr-12,543.70\n16-Apr-12,580.13\n13-Apr-12,605.23\n12-Apr-12,622.77\n11-Apr-12,626.20\n10-Apr-12,628.44\n9-Apr-12,636.23\n5-Apr-12,633.68\n4-Apr-12,624.31\n3-Apr-12,629.32\n2-Apr-12,618.63\n30-Mar-12,599.55\n29-Mar-12,609.86\n28-Mar-12,617.62\n27-Mar-12,614.48\n26-Mar-12,606.98\n');

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
  .x(d => xScale(d.date))
  .y(d => yScale(d.close))

// === 3. Append data and start drawing
// create parseTime helper to turn string into time format (11-Apr-12) into datetime JS object
var parseTime = d3.timeParse('%d-%b-%y');
// Iterate through each data point and parse strings into time and number format
data.forEach(function(d){
  d.date = parseTime(d.date);
  d.close = parseInt(d.close);
});

// Set the x and y scales to the data ranges x based on min and max date range (d3.extent()) and y based on 0 to max value
xScale.domain(d3.extent(data, d => d.date));
yScale.domain([0, d3.max(data, d => d.close)]);

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
