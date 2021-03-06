/*
Program Name: Recipe Display Application
Author: Meredith McNulty
Date: 3/22/17
Filename: myRecipe.js
*/
/* global $ */
/* global "slow" */

//displays the next element after the current target
function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
// $("h3").click(display);

//displays and animates the next element after the current target
function display2(event) {
 $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}//end of display2
//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);


$(document).ready(function(){
    $("img").click(function(){
        var img = $("img");  
        img.animate({left: '100px'}, "slow");
        img.animate({width: '500px', height: '375px'}, "slow");
    });
});

$(document).ready(function(){
    $("h3").first().css("background-color", "cyan");
});

$(document).ready(function(){
    $("h3").last().css("background-color", "yellow");
});

$(document).ready(function(){
    $("img").first().css("background-color", "red");
});