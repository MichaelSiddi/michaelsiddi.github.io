var body = $('body').css('font-family', 'Comic Sans MS, Comic Sans, Chalkboard, Helvetica, Arial, sans-serif');

var manyColors = [ 
    "#0066FF", "#FF3399", "#33CC33", "#FFFF99", "#FFFF75", "#8533FF", "#33D6FF", "#FF5CFF", "#19D1A3", "#FF4719", "#197519", "#6699FF", "#4747D1", "#D1D1E0", "#FF5050", "#FFFFF0", "#CC99FF", "#66E0C2", "#FF4DFF", "#00CCFF",
];

var descText = $('myDescription').text();

function randomColor() {
	return manyColors[Math.floor(Math.random() * manyColors.length)];
}

jQuery.each(descText.split(' '), function(index, val){
  var wowDiv = "<div style='position: absolute; left:"+Math.floor((Math.random() 500) + 1)+"px; top:"+Math.floor((Math.random()  500) + 1)+"px; color: "+ randomColor + "; font-size:50px;'></div>";
  jQuery('body').append(jQuery(wowDiv).text(val));
});


