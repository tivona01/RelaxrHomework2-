
function stopSelfRefs() { //prevent blank links from reloading the page
    event.preventDefault();
}

function showReadMore() { //show all of the article, hide the readmore button and show the readless button
    $("#show-this-on-click").slideDown();
    $(".readless").show();
    $(".readmore").hide();
}

function hideReadMore() { //show all of the article, hide the readmore button and show the readless button
    $("#show-this-on-click").slideUp();
    $(".readless").hide(100, function() {
        $(".readmore").show(); //dont show the readmore until all the text has collapsed
    });
}

function showLearnMore() { //show all of the article, hide the readmore button and show the readless button
    $("#learnmoretext").slideDown();
    $(".learnmore").hide();
}


function start() {
    // All JavaScript and jQuery goes in here
    $("a[href*=#]").click(stopSelfRefs); 
    $(".readmore").click(showReadMore); 
    $(".readless").click(hideReadMore); 
    $(".learnmore").click(showLearnMore); 

}
$(document).ready(start);