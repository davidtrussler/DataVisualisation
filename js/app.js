document.addEventListener('DOMContentLoaded', init, false);

function init() {
  console.log('init!')

  drawData();
}


function drawData() {
  console.log('drawData!');

  var dataset = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  var w = 500;
  var h = 100;
  var barPadding = 1;
  var svg = d3
              .select('body')
              .append('svg')
              .attr('width', w)
              .attr('height', h);

  svg
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', function(d, i) {
      return i * (w / dataset.length);
    })
    .attr('y', function(d) {
      return h - d;
    })
    .attr('width', w / dataset.length - barPadding)
    .attr('height', function(d) {
      return d;
    })
    .attr('fill', function(d) {
      return "rgb(0, 0, " + d * 5 + ")";
    });

  svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
      return d;
    })
    .attr('x', function(d, i) {
      return (i * (w / dataset.length)) + ((w / dataset.length - barPadding) / 2);
    })
    .attr('y', function(d) {
      return h - d - 5;
    })
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '1em');
}
