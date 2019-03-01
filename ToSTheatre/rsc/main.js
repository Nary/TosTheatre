function writeText2(item) {
    txt = 'Error';
    nm = 'Error nm';
    //document.getElementById("descHud").innerHTML = txt; // test
    switch (item) {
        case 'i1':
            nm = 'Couteau';
            txt = 'Un couteau massif, une arme décente.';
            changeCutImg(5);
            break;
        case 'i2':
            nm = 'Mangouste';
            txt = "Ca l'air bien juteuse.";
            changeCutImg(4);
            break;
        case 'i3':
            nm = 'Olives géante';
            txt = "De magnifiques olives géante, elles ont l'air délicieuses !";
            changeCutImg(4);
            break;
        case 'i4':
            nm = 'Oiseau en papier';
            txt = 'Cette feuille en papier géante pourrait servir de combustible. ';
            changeCutImg(3);
            break;
        case 'i5':
            nm = 'Fruit de la connaissance';
            txt = 'Un fruit original qui semble assez bon.';
            changeCutImg(4);
            break;
        case 'i6':
            nm = 'Cristal pure ';
            txt = "Ce cristal brille d'une nitescence sans commune mesure.";
            changeCutImg(3);
            break;
        case 'i7': // Glacie ?
            nm = 'Fleur des glaces';
            txt = "Cette magnifique plante de glace vous intrigue, en vous approchant vous découvrez qu'elle parle ! ";
            changeCutImg(3);
            break;
        case 'i8':
            nm = 'Arrosoir';
            txt = "Cet arrosoir est particulièrement mignon et rempli d'une eau pure.";
            changeCutImg(3);
            break;
        case 'i9':
            nm = 'Champs de fleur';
            txt = "Un amas floral, vous constater sans mal qu'il s'agit du cœur des odeurs qui vous troublent.";
            changeCutImg(3);
            break;
        case 'i10':
            nm = 'Râteau';
            txt = "Ceci est un râteau, encore un. ";
            changeCutImg(1);
            break;
        case 'i11':
            nm = "Bois";
            txt = "Du bois, bien sec, idéal pour faire du feu.";
            changeCutImg(5);
            break;
        case 'i12':
            nm = "Pièce en Acier";
            txt = "Un bout de métal, quelle triste pollution."
            changeCutImg(2);
            break;
        case 'i13':
            nm = "Potion";
            txt = "Une curieuse potion qui dégage une odeur empyreume - Sur l'étiquette est marqué « Buvez moi » ";
            changeCutImg(3);
            break;
        case 'i14':
            nm = "Pelle";
            txt = "Une belle pelle, elle permet de creuser.";
            changeCutImg(3);
            break;
        case 'i15':
            nm = "Pioche";
            txt = "Une veille pioche, comme votre belle mère.";
            changeCutImg(1);
            break;
        case 'i16':
            nm = "Marteau";
            txt = "Un gros marteau bien lourd."
            changeCutImg(5);
            break;
        case 'i17':
            nm = "Outillage";
            txt = "Une montagne d'écrou et autres pièces en acier. C'est sale."
            changeCutImg(2);
            break;
        case 'i18':
            nm = "Pierre Silex";
            txt = "Cette belle pierre pourrait être utile et tient dans vos poches sans soucis."
            changeCutImg(5);
            break;

        case 'i19':
            nm = "Litchi";
            txt = "Une délicieuse litchi bien juteuse."
            changeCutImg(4);
            break;
        default:
            txt = "***Passez la souris sur les objets pour une description !***";
    }
    document.getElementById("descHud").innerHTML = txt;
    document.getElementById("nameHud").innerHTML = nm;

}

function setHUD() {
    var imgDoc = document.getElementById("noelImg");
    var imgHUD = document.getElementById("cutImg");
    var txtBlockHUD = document.getElementById("textBlock");
    var iwidth = imgDoc.clientWidth + "px";
    var iheight = imgDoc.clientHeight + "px";
    var ihudheight = imgHUD.clientHeight + "px";
    var ihudwidth = (imgDoc.clientWidth - imgHUD.clientWidth) + "px";
    // alert('width = ' + width + "\n" + 
    //       "height = "+ height);
    // alert(iwidth);
    document.getElementById("hud").style.width = iwidth;
    document.getElementById("hud").style.height = ihudheight;
    document.getElementById("textBlock").style.height = ihudheight;
    document.getElementById("textBlock").style.width = ihudwidth;
}

function changeCutImg(imgID) {
    var cutImg = document.getElementById("cutImg");
    switch (imgID) {
        case 0:
            cutImg.src = "rsc/img/cut0.png";
            break;
        case 1:
            cutImg.src = "rsc/img/cut1.png";
            break;
        case 2:
        cutImg.src = "rsc/img/cut2.png";
        break;
        case 3:
        cutImg.src = "rsc/img/cut3.png";
        break;
        case 4:
        cutImg.src = "rsc/img/cut4.png";
        break;
        case 5:
        cutImg.src = "rsc/img/cut5.png";
        break;
        default:
        cutImg.src = "rsc/img/cut3.png";
        break;
    }
}