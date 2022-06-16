let ipadRemoveStock = document.querySelector("#ipadRemoveStock").value
let macbookRemoveStock = document.querySelector("#macbookRemoveStock").value
let stock = document.querySelector("article")
let test = document.querySelector("#super")
let numberIphone = 100
let numberIpad = 50
let numberMacbook = 25

test.innerText = numberIphone
createText()
function createText() {
    let elementStock = document.createElement("p")
    elementStock.innerText = "vous avez iPhone disponible."
    elementStock.id = "test"
   stock.appendChild(elementStock)
}

function removeTest(numberIphone,iphoneRemoveStock){
    console.log("testttttttt");
   let result = parseInt(numberIphone) - parseInt(iphoneRemoveStock)
   return result
   
}

function updateRemove() {
    let iphoneRemoveStock = document.querySelector("#iphoneRemoveStock").value
    numberIphone = removeTest(numberIphone, iphoneRemoveStock )
    test.innerText = numberIphone
    console.log("good");
}