/*
Program Name: Recipe Display Application
Author: Meredith McNulty
Date: 3/22/17
Filename: script.js
*/
/* global $ */
/* global "slow" */

//displays the next element after the current target
function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
}//end of display

//displays and animates the next element after the current target
function display2(event) {
 $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}//end of display2
//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);
