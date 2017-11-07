$(document).ready(function(){
var x = document.getElementsByClassName("btn");
x[0].setAttribute("type", "submit");
x[1].setAttribute("type", "submit");
x[2].setAttribute("type", "submit");
$("Form").toggleClass("ns_");
$("input").toggleClass("ns_");
$("select").toggleClass("ns_");
}); 