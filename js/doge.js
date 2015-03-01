
var manyColors = [ 
"#0066FF", "#FF3399", "#33CC33", "#FFFF99", "#FFFF75", "#8533FF", "#33D6FF", "#FF5CFF", "#19D1A3", "#FF4719", "#197519", "#6699FF", "#4747D1", "#D1D1E0", "#FF5050", "#FFFFF0", "#CC99FF", "#66E0C2", "#FF4DFF", "#00CCFF",
];

function randomColor() {
    var clr;
    var indx;

    do{
        indx = Math.floor(Math.random() * manyColors.length);
        clr = manyColors[indx];
    } while(clr == -1);

    manyColors[indx] = -1;

    return clr;
}

function wowDiv(text){
    var wowDiv = "<div style='position: absolute; left:"+Math.floor((Math.random() * 70) + 1)+"%; top:"+Math.floor((Math.random() * 70) + 1)+"%; color: "+ randomColor() + "; font-size:" + Math.max(20, (Math.random() * 50 + 24)) + "px;'></div>";

    $('body').append($(wowDiv).text(text));
} 

function wowLink(text, url){
    var link = "<a style='position: absolute; left:"+Math.floor((Math.random() * 90) + 1)+"%; top:"+Math.floor((Math.random() * 90) + 1)+"%; color: "+ randomColor() + "; font-size:" + Math.max(20, (Math.random() * 50 + 24)) + "px;' href=' "+url+" '>"+text+"</a>";

    $('body').append($(link));
} 

function animateDoge(){
//add animation
$('body').css('font-family', 'Comic Sans MS, Comic Sans, Chalkboard, Helvetica, Arial, sans-serif');
$('h1#hi').css('font-family', 'Comic Sans MS, Comic Sans, Chalkboard, Helvetica, Arial, sans-serif');
$('body').css('background-color', '#E3DAB1');
$('p#myDescription').remove();
$('ul').remove();
    
var wows = ["wow", "such ios developer", "very tech lover", "so mega geek", "i am lead mobile", "vivocha wow"];
    
var lnks = [ ["twitter", "https://www.twitter.com/MichaelSiddi"],
            ["github", "https://www.github.com/MichaelSiddi"],
            ["linkedin", "https://www.linkedin.com/in/michaelsiddi"],
            ["resume", "./files/MichaelSiddi_Resume_5_0.pdf"],
            ["plz contact", "mailto:hi@michaelsiddi.com"],
           ];

    $.each(wows, function(index, text){    
        var timeout = setTimeout(function(){
            wowDiv(text);
        },1000*(index+1));
    });

    $.each(lnks, function(index, arr){    
        var timeout = setTimeout(function(){
            wowLink(arr[0], arr[1]);
        },1500*(index+1));
    });
}
