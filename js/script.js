$(document).ready(function() {
  /* Easy pie chart is a jQuery plugin that uses the canvas element to render simple pie charts for single values. */
  $('.percent').easyPieChart({
        barColor: '#02b3e4',
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });


});
