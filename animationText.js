/*var string = document.getElementsByClassName;
var str = string.split("");
var el = document.getElementById('test');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();
*/

$(document).ready(function(){
  $(".slide-toggle").click(function(){
    $(".demotest").animate({
      width: "toggle"
    });
  });
});



