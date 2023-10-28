let myLeads = []

const inputEL = document.getElementById("input-el")     //const can't be reassigned. If possible, use const. If not, use let.
const inputBTN = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
const deleteBTN = document.getElementById("delete-btn")
const tabBTN = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )   //get myLeads from localStorage it's a truthy or falsy value (which different from boolean)


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}


inputBTN.addEventListener("click", function() {         // react to an event exemple : click on button 
    myLeads.push(inputEL.value)                 //add in an array. adding value will here, copy the text in the input
    inputEL.value =""           //change value    
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )       //save array into localStorage. must be transform into a string

    render(myLeads)
})  

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


tabBTN.addEventListener("click",function(){
    myLeads.push(tabs[0].url)  
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    console.log(tabs[0].url)
})

deleteBTN.addEventListener("dblclick", function() {
    myLeads = []
    localStorage.clear()
    render(myLeads)
})




function render(leads) {            // a parameter is inside
    let  listItems = ""
    for (let i = 0; i < leads.length; i++) {
     // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>" <== before
     listItems += `
            <li>                                                                         
                <a target='_blank' href='${leads[i]}'> 
                ${leads[i]}</a>
            </li>
    `                                                   //never forget href=""!!! and when in strings use : ' '      target='_blank' for new tabs   ${myLeads[i]} template strings/literals
}
   ulEL.innerHTML = listItems               //will convert here the concatenation into html
}   