const amountInput = document.querySelector("#amountInput");
const descInput = document.querySelector("#descInput");
const dateInput = document.querySelector("#dateInput");
const typeInput = document.querySelector("#typeInput");
const catInput = document.querySelector("#catInput");
const submitBtn = document.querySelector("#submitBtn");
const balanceDisplay = document.querySelector("#balanceDisplay");
const logs = document.querySelector("#logs");

let transactions = [];

submitBtn.addEventListener("click", function(){
    transactions.push(
        {
            id: Date.now(),
            amount: amountInput.value,
            desc: descInput.value,
            date : dateInput.value,
            type: typeInput.value,
            cat: catInput.value
        }
    )
    render();
})

function render(){
    logs.innerHTML="";
    
    transactions.forEach((transaction) =>{
        const logList = document.createElement("div");
        logList.className = "logList"
       const amountItem = document.createElement("p");
       amountItem.textContent = `${amountInput.value}€`;
       const descItem = document.createElement("p");
       descItem.textContent = descInput.value;
       const dateItem = document.createElement("p");
       dateItem.textContent = dateInput.value;
       const typeItem = document.createElement("p");
       typeItem.textContent = typeInput.value;
       const catItem = document.createElement("p");
       catItem.textContent = catInput.value;
       logList.append(amountItem,descItem, dateItem, typeItem,catItem);
       logs.append(logList);
       
    })
}

render();