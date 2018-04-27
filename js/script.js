$(document).ready(function(){
/* Easy pie chart is a jQuery plugin that uses the canvas element to render simple pie charts for single values. */    
$('.percent').easyPieChart({
    barColor: '#02b3e4',    /*#02b3e4, #2d3c49, #7d97ad */
    trackColor: '#f2f2f2',
    scaleColor:'#dfe0e0',
    scaleLength: 5,
    percent:67,
    lineCap: 'round',
    lineWidth: 10, 
    size: 200, 
    animate: {duration: 2000,enabled: true},
    onStep: function(from, to, percent) {$(this.el).find('.percent').text(Math.round(percent));   
    }
    
  });
  });

