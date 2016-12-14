document.addEventListener('DOMContentLoaded', init, false);

function init() {
  console.log('init!')

  drawAxes();
}


function drawAxes() {
  console.log('drawAxes!');

  var w = 600;
  var h = 300;
  var r = 5;
  var padding = 25;

  var dataset = [
    [17, 50],
    [100, 90],
    [215, 80],
    [320, 33],
    [25, 93],
    [230, 42],
    [435, 44],
    [140, 67],
    [45, 31],
    [350, 88]
  ];

  var xScale =
    d3.scaleLinear()
      .domain([0, d3.max(dataset, function(d) {
        return d[0];
      })])
      .range([padding, w - padding]);

  var yScale =
    d3.scaleLinear()
      .domain([0, d3.max(dataset, function(d) {
        return d[1];
      })])
      .range([h - padding, padding]);

  var xAxis = d3
                .axisBottom()
                .scale(xScale)
                .ticks(10);

  var yAxis = d3
                .axisLeft()
                .scale(yScale)
                .ticks(5);

  var svg = d3
              .select('body')
              .append('svg')
              .attr('width', w)
              .attr('height', h);

  svg
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function(d) {
      return d[0];
    })
    .attr('cy', function(d) {
      return d[1]
    })
    .attr('r', r);

  svg
    .append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(0,' + (h - padding) + ')')
    .call(xAxis);

  svg
    .append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + padding + ', 0)')
    .call(yAxis);
}
