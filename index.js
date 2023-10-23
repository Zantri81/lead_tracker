let myLeads = []

const inputEL = document.getElementById("input-el")     //const can't be reassigned. If possible, use const. If not, use let.
const inputBTN = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")



inputBTN.addEventListener("click", function() {         // react to an event exemple : click on button 
    myLeads.push(inputEL.value)                 //add in an array. adding value will here, copy the text in the input
    renderLeads()
    inputEL.value =""           //change value
})        

function renderLeads() {

let  listItems = ""

for (let i = 0; i < myLeads.length; i++) {

    listItems += "<li><a href=' " + myLeads[i] + " '>" + myLeads[i] + "</a></li>"     //never forget href=""!!! and when in strings use : ' '
}
   ulEL.innerHTML = listItems               //will convert here the concatenation into html
}   