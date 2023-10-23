let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const inputEL = document.getElementById("input-el")     //const can't be reassigned. If possible, use const. If not, use let.
const inputBTN = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")



inputBTN.addEventListener("click", function() {         // react to an event exemple : click on button 
    myLeads.push(inputEL.value)                 //add in an array. adding value will here, copy the text in the input
    console.log(myLeads)
})        

for (let i = 0; i < myLeads.length; i++) {
    ulEL.textContent += myLeads[i] + " "
}
