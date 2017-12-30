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


        var svg = document.createElement('svg');
        svg.id = 's';
        document.body.appendChild(svg);

        var data = [
  {x:0, y:38, z:28}, 
  {x:20, y:27, z:15}, 
  {x:40, y:56, z:39}, 
  {x:60, y:34, z:45}, 
  {x:80, y:41, z:88}, 
  {x:100, y:35, z:74}, 
  {x:120, y:100, z:55}, 
  {x:140, y:57, z:75}, 
  {x:160, y:36, z:44}, 
  {x:180, y:41, z:30}
  ];

  var width = 400,
    height = 200;

  var s = d3.select('#s');

  s.attr({
      'width': 470,
      'height': 250,
    }).style({
      'border':'1px dotted #ccc'
    });

  var minX = d3.min(data, function(d){return d.x});
  var maxX = d3.max(data, function(d){return d.x});
  var minY = d3.min(data, function(d){return d.y});
  var maxY = d3.max(data, function(d){return d.y});

  var scaleX = d3.scale.linear()
                 .range([0,width])
                 .domain([minX,maxX]);

  var scaleY = d3.scale.linear()
                 .range([height,0])
                 .domain([0,maxY]);

  //line
  var line1 = d3.svg.line()
    .x(function(d) {
      return scaleX(d.x);
    }).y(function(d) {
      return scaleY(d.y);
    });

  var line2 = d3.svg.line()
    .x(function(d) {
      return scaleX(d.x);
    }).y(function(d) {
      return scaleY(d.z);
    });

  //area
  var area1 = d3.svg.area()
  .x(function(d) { return scaleX(d.x); })
  .y0(height)
  .y1(function(d) { return scaleY(d.y); });

  var area2 = d3.svg.area()
  .x(function(d) { return scaleX(d.x); })
  .y0(height)
  .y1(function(d) { return scaleY(d.z); });

  s.append('path')
    .attr({
      'd':line1(data),
      'stroke':'#06c',
      'fill':'none',
      'transform':'translate(35,20)' 
    });

  s.append('path')
  .attr({
    'd':area1(data),
    'fill':'rgba(0,150,255,.1)',
    'transform':'translate(35,20)' 
  });

  s.append('path')
    .attr({
      'd':line2(data),
      'stroke':'#c00',
      'fill':'none',
      'transform':'translate(35,20)' 
    });

  s.append('path')
  .attr({
    'd':area2(data),
    'fill':'rgba(255,0,0,.1)',
    'transform':'translate(35,20)' 
  });

  //axis
  var axisX = d3.svg.axis()
    .scale(scaleX)
    .orient("bottom")
    .ticks(10);

  var axisY = d3.svg.axis()
    .scale(scaleY)
    .orient("left")
    .ticks(5);

  //grid
  var axisXGrid = d3.svg.axis()
    .scale(scaleX)
    .orient("bottom")
    .ticks(10)
    .tickFormat("")
    .tickSize(-height,0);

  var axisYGrid = d3.svg.axis()
    .scale(scaleY)
    .orient("left")
    .ticks(10)
    .tickFormat("")
    .tickSize(-width,0);

  // Axis Grid line
  s.append('g')
   .call(axisXGrid)
   .attr({
    'fill':'none',
    'stroke':'rgba(0,0,0,.1)',
    'transform':'translate(35,'+(height+20)+')' 
   });

  s.append('g')
   .call(axisYGrid)
   .attr({
    'fill':'none',
    'stroke':'rgba(0,0,0,.1)',
    'transform':'translate(35,20)'
   });

  // Axis 
  s.append('g')
   .call(axisX)
   .attr({
    'fill':'none',
    'stroke':'#000',
    'transform':'translate(35,'+(height+20)+')' 
   }).selectAll('text')
   .attr({
    'fill':'#000',
    'stroke':'none',
   }).style({
    'font-size':'11px'
   });

  s.append('g')
   .call(axisY)
   .attr({
    'fill':'none',
    'stroke':'#000',
    'transform':'translate(35,20)'
   }).selectAll('text')
   .attr({
    'fill':'#000',
    'stroke':'none',
   }).style({
    'font-size':'10px'
   });
        
        
        
          
      }
    }
  }

  window.createLineChart = createLineChart;
    
}(window, window.document));
