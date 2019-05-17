// //////       PILULES   ///////


document.getElementById("validPillRed").addEventListener('click', function(){ document.getElementById("afterValid").style.display= "block";
  document.getElementById("rightText").style.display= "none";                             
  window.scrollBy(0, 100);                                                                   
    setTimeout(function(){window.location.href="video2.html"}, 2500);
}); 




document.getElementById("validPillBlue").addEventListener('click', function(){ 
document.getElementById("pLeftText").innerHTML = ("Je pensais que tu étais l'élu.. J'ai du me tromper... Au revoir.")
    document.getElementById("validPillBlue").style.display= "none";
    window.scrollBy(0, 100);
});

 