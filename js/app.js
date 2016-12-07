document.addEventListener('DOMContentLoaded', init, false);

function init() {
  console.log('init!')

  scales();
}


function scales() {
  console.log('scales!');

  var w = 550;
  var h = 140;
  var r = 5;
  var dataset = [
    [17, 50],
    [100, 90],
    [215, 80],
    [320, 0],
    [25, 93],
    [230, 42],
    [435, 44],
    [140, 67],
    [45, 31],
    [350, 88]
  ];
  var padding = 25;

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

  var rScale =
    d3.scaleLinear()
      .domain([0, d3.max(dataset, function(d) {
        return d[1];
      })])
      .range([2, 5]);

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
      return xScale(d[0]);
    })
    .attr('cy', function(d) {
      return yScale(d[1]);
    })
    .attr('r', function(d) {
      return rScale(d[1]);
    });

  svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
      return d[0] + ', ' + d[1];
    })
    .attr('x', function(d) {
      return xScale(d[0]);
    })
    .attr('y', function(d) {
      return yScale(d[1] - 15);
    })
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '0.75em');
}
