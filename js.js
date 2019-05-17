//       TYPE WRITER      

var i = 0,
    e = 0,
    txt = 'Bonjour, \nje me présente, je m\'appelle Morpheus.',
    txt2 = 'Quel est ton nom? (cliques pour valider)',
    speed = 90,
    speed2 = 1000,
    text1 = document.getElementById('demo');

        
            
function typeWriter2() {
     if(e < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(e);
    e++;
    setTimeout(typeWriter2, speed2);
  }
    document.getElementById('enterName').style.display = "block";
}

            
window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  } 
     setTimeout(typeWriter2, 5000);
};


//  RÉCUPERATION NOM, TEST ET AFFICHAGE DE L'ID SUIVANTE

function valEnter() {
    var yourName = document.getElementById('yourName');
    var name = yourName.value;
    
    if (name != "") {
        document.getElementById("welcome").innerHTML = ("Bienvenue " + name + ".");
        document.getElementById('matrice').style.display = "block";
}  else {
        document.getElementById("welcome").innerHTML = ("Veuillez indiqué votre nom.");
    }
};


//  TEST VALIDATION OUI/NON    DISABLED BUTTON


document.getElementById('firstChoice').addEventListener('input', function(e){
      var value = e.target.value;
    
    if (/^oui/.test(value)) {
        document.getElementById('firstValidation').innerHTML = " <p>Bon choix, valide pour pouvoir continuer </p>";
        document.getElementById('submit-firstBtn').removeAttribute('disabled');
        
        document.getElementById('submit-firstBtn').addEventListener('click', function(){
            document.getElementById('firstText').style.display='block';
            window.scrollBy(0, 500); 
}); 
        
    } else if (/^non/.test(value)) {     document.getElementById('firstValidation').innerHTML = " <p>Dommage,je pensais que tu étais l'élu.. Nos chemin s'arrete ici ! Au revoir </p>";
    document.getElementById('submit-firstBtn').setAttribute('disabled', true);                                
    } else {
    document.getElementById('firstValidation').innerHTML = " Répond par oui ou par non ";
    document.getElementById('submit-firstBtn').setAttribute('disabled', true);
    }
});


//    ENVOIE SUR LA PAGE SUIVANTE


document.getElementById("nextPage").addEventListener ('click', function(){
    window.location.href="pilules.html";
}); 