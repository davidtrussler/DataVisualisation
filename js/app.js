document.addEventListener('DOMContentLoaded', init, false);

function init() {
  console.log('init!')

  d3.select('body').append('p').text('something');
}
