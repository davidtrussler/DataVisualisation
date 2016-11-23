document.addEventListener('DOMContentLoaded', init, false);

function init() {
  console.log('init!')

  bindData();
}


function bindData() {
  console.log('bindData!');

  var dataset = [5, 10, 15, 20, 25];

  d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(function(d) {
      return d;
    });
}
