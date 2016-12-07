document.addEventListener('DOMContentLoaded', init, false);

function init() {
  console.log('init!')

  drawScatterplot();
}


function drawScatterplot() {
  console.log('drawScatterplot!');

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

  var w = 550;
  var h = 140;
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
    .attr('r', 5);

  svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
      return d[0] + ', ' + d[1];
    })
    .attr('x', function(d) {
      return d[0];
    })
    .attr('y', function(d) {
      return d[1] - 10;
    })
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '0.75em');
}
