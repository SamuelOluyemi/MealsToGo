var colors = ['gold', 'red', 'bisque', 'antiquewhite', 'beige', 'aqua', 'aquamarine'];

i = 0;

$('#change-color').click(function() { 
   $("div").css('backgroundColor', colors[i]);
   i = (i==colors.length-1) ? 0 : (i+1);
    
});