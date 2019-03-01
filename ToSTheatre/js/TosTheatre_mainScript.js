var txtCursor = 0;
var Text1 = ['...','Hello ! Ceci est le 1er prototype de "ToS Theatre !',"C'est ici que sera joué les scènes d'event !", "A bientot pour une version plus évoluée !",'fin']
var imgp1 = ['rsc/img/char/s1.jpg','rsc/img/char/s2.jpg']
var timeScene = 0;
function TextHub_Clicked() {
    
    if (timeScene < 5) {
        var TextHubDiv = document.getElementById("TextHubDiv")
        var txt = Text1[timeScene]
        var imgP0 = document.getElementById("p0")
        TextChange(TextHubDiv,txt)
        P1Change(imgP0,imgp1[1])
        timeScene++
    }
}

function TextChange(e,txt) {
    
    e.innerHTML = txt;
}

function P1Change(e,newImg) {
    if(timeScene > 0) {
        e.src=newImg
    }
}

function NeFaitRien() {
    alert('Bouton unitile pour le moment !')
}