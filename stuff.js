var paragraphe = document.getElementById("explication");

function newYork() {
    document.body.style.backgroundImage = "url('simulator/new-york.jpg')";
    document.body.style.backgroundSize = "100% 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    paragraphe.style.display = "none";
}

function dojo() {
    document.body.style.backgroundImage = "url('simulator/dojo.jpg')";
    document.body.style.backgroundSize = "100% 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    paragraphe.style.display = "none";
}

function everest() {
    document.body.style.backgroundImage = "url('simulator/everest.jpg')";
    document.body.style.backgroundSize = "100%  800px";
    document.body.style.backgroundRepeat = "no-repeat";
    paragraphe.style.display = "none";
}

function neutre() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";
    paragraphe.style.display = "block";
}



function matrix() {
    document.body.style.backgroundImage = "url('simulator/matrix-wallpaper.jpg')";
    document.body.style.backgroundSize = "100% 804px";
    paragraphe.style.display = "none";
}


function neoRed() {
    document.getElementById('neoImg').src = "simulator/neoImgRed.png";
}

function neoBlue() {
    document.getElementById('neoImg').src = "simulator/neoImgBlue.png";
}

function neoBrown() {
    document.getElementById('neoImg').src = "simulator/neoImgBrown.png";
}

function neoBlack() {
    document.getElementById('neoImg').src = "simulator/neoImg.png";
};


