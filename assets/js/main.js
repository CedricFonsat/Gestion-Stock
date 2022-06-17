let stock = document.querySelector("article")
let iphoneStock = document.querySelector("#iphoneStock")
let ipadStock = document.querySelector("#ipadStock")
let macbookStock = document.querySelector("#macbookStock")
let stopStock = document.querySelector("#stop")
let numberIphone = 100
let numberIpad = 50
let numberMacbook = 25

//affichage de la banière stop
stopStock.style.display = "none"


//affichage des stocks sur la page HTML
iphoneStock.innerText = numberIphone
ipadStock.innerText = numberIpad
macbookStock.innerText = numberMacbook

// fonction pour enlever du stocks
function removeStock(numberStock, removeStock) {
    console.log("testttttttt");
    let result = parseInt(numberStock) - parseInt(removeStock)
    return result

}

//update de la fonction pour enlever du stocks et utiliser pour le onclick
function updateRemove() {
    let iphoneRemoveStock = document.querySelector("#iphoneRemoveStock").value
    let ipadRemoveStock = document.querySelector("#ipadRemoveStock").value
    let macbookRemoveStock = document.querySelector("#macbookRemoveStock").value
    
    numberIphone = removeStock(numberIphone,iphoneRemoveStock)
    numberIpad = removeStock(numberIpad,ipadRemoveStock)
    numberMacbook = removeStock(numberMacbook,macbookRemoveStock)

    iphoneStock.innerText = numberIphone
    ipadStock.innerText = numberIpad
    macbookStock.innerText = numberMacbook

    statusStock(numberIphone,iphoneStock)
    statusStock(numberIpad,ipadStock)
    statusStock(numberMacbook,macbookStock)
}

//status des stocks après suppression
function statusStock(numberProduct,nameStock) {
    if (numberProduct < 0) {
        console.log("error");
        stopStock.style.display = "flex"
        nameStock.innerText = 0
    }
}


// verifier si les stocks afficher sont NaN
//tentative pour eviter l'affichage de NaN si l'on choisi un seul produit
/*
function ifNan(x) {
    if (isNaN(x)) {
        macbookRemoveStock = 0
        ipadRemoveStock = 0
    }
    return x;
  }
  function isEmpty(){
    var str = document.forms['form'].iphoneRemoveStock.value;
    if( !str.replace(/\s+/, '').length ) {
         alert( "Le champ Name est vide!" );
         return false;
    }else{
        updateRemove()
    }
}
  console.log("with : "+typeof(parseInt(iphoneStock)));
  console.log("without : "+typeof(iphoneStock));
  console.log("separate");
  console.log("with : "+typeof(parseInt(numberIphone)));
  console.log("without : "+typeof(numberIphone));
  */

