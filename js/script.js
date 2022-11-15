let gymnaste = 100;
let nb_gymnaste_per_click = 1
let multiplicateur = 0
let multiplicateur_cost = 10
let entraineur = 0
let entraineur_cost = 200
let bonus = 0
let bonus_cost = 1000
document.querySelector (".multiplicateur_cost").innerHTML = multiplicateur_cost
document.querySelector (".entraineur_cost").innerHTML = entraineur_cost
document.querySelector (".bonus_cost").innerHTML = bonus_cost



function recuperer_images(){
    let images = [
        {url : "images/gymnaste4.png", min:160 },
        {url : "images/gymnaste3.png", min:120 },
        {url : "images/gymnaste2.png", min:10 },
        {url : "images/olympic-gymnastic-png.png", min:0 },
    ];

    result = images.find (element => element.min <= gymnaste)
    return result.url
}


// ---multiplicateur---//


document.querySelector(".image").addEventListener("click", mettreAJourMonResult)
function mettreAJourMonResult(){
    gymnaste = gymnaste + nb_gymnaste_per_click
    document.querySelector(".result").innerHTML = gymnaste
     document.getElementById ('gymage').src =recuperer_images();
}



document.querySelector(".médailles-b-img").addEventListener("click", augmenterMultiplicateur)
function augmenterMultiplicateur(){
    if (gymnaste>=multiplicateur_cost) {
    nb_gymnaste_per_click = nb_gymnaste_per_click *2
    gymnaste = gymnaste - multiplicateur_cost
    multiplicateur_cost = multiplicateur_cost *2
    multiplicateur = multiplicateur + 1
    document.querySelector (".multiplicateur").innerHTML = multiplicateur
    document.querySelector (".multiplicateur_cost").innerHTML = multiplicateur_cost
    document.querySelector(".result").innerHTML = gymnaste
    }
    else{
        alert ("Vous n'avez pas assez de gymnastes! \nCliquez encore.")
    }
}
 

// ---autoclicker---//


let click = function(){
    gymnaste = gymnaste + entraineur
    document.querySelector (".entraineur").innerHTML = entraineur
    document.querySelector (".entraineur_cost").innerHTML = entraineur_cost
    document.querySelector(".result").innerHTML = gymnaste
}

document.querySelector(".entraineur-img").addEventListener("click", mettreAJourentraineur)
function mettreAJourentraineur(){
    if (gymnaste>=entraineur_cost) {
    gymnaste = gymnaste - entraineur_cost
    entraineur_cost = entraineur_cost *2
    entraineur = entraineur + 1
    setInterval(click, 1000)
    }
    else{
        alert ("Vous n'avez pas assez de gymnastes! \nCliquez encore.")
    }
}

// ---bonus---//


document.querySelector("#bonus").addEventListener("click", augmenterbonus)
function augmenterbonus(){
    if (gymnaste>=bonus_cost) {
    nb_gymnaste_per_click = nb_gymnaste_per_click *(1+200/100)
    gymnaste = gymnaste - bonus_cost
    bonus = bonus + 1
    document.querySelector(".result").innerHTML = gymnaste
    }
    else{
        alert ("Vous n'avez pas assez de gymnastes! \nCliquez encore.")
    }
}





