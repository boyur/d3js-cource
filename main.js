var width = 800,
  height = 800;

var svg = d3.select("body").append("svg");

svg.attr("height", height)
  .attr("width", width);

var coords = d3.range(0, 11);
var lines = svg.selectAll('line').data(coords);

lines.enter().append('line')
  .attr('x1', function(d) {
    return 0;
  })
  .attr('y1', function(d) {
    return d * 300 / 10
  })
  .attr('x2', function(d) {
    return 300
  })
  .attr('y2', function(d) {
    return d * 300 / 10
  });

lines.enter().append('line')
  .attr('x1', function(d) {
    return d * 300 / 10;
  })
  .attr('y1', function(d) {
    return 0
  })
  .attr('x2', function(d) {
    return d * 300 / 10
  })
  .attr('y2', function(d) {
    return 300
  });
lines
  .style('stroke', 'black')
  .style('stroke-width', step / 10);