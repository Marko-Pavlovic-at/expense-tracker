const amountInput = document.querySelector("#amountInput");
const descInput = document.querySelector("#descInput");
const dateInput = document.querySelector("#dateInput");
const typeInput = document.querySelector("#typeInput");
const submitBtn = document.querySelector("#submitBtn");
const balanceDisplay = document.querySelector("#balanceDisplay");
const logs = document.querySelector("#logs");
const errorBox = document.querySelector("#errorBox");

let transactions = [];


submitBtn.addEventListener("click", function(){
    errorBox.innerHTML =""
      if(amountInput.value  === "" || descInput.value === "" || dateInput.value === "" || typeInput.value === ""){
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Please fill in all Fields!";
    errorMsg.className ="errorText";
    errorBox.append(errorMsg);

    return;
    };
    transactions.push(
        {
            id: Date.now(),
            amount: amountInput.value,
            desc: descInput.value,
            date : dateInput.value,
            type: typeInput.value,
            
        }
    )

  
    render();

    amountInput.value = "";
    descInput.value ="";
    dateInput.value ="";
    typeInput.value ="";
    
})

function render(){
    logs.innerHTML="";
    
    
    transactions.forEach((transaction) =>{
        const logList = document.createElement("div");
        logList.className = "logList"
       const amountItem = document.createElement("p");
       amountItem.textContent = `${transaction.amount}€`;
       const descItem = document.createElement("p");
       descItem.textContent = transaction.desc;
       const dateItem = document.createElement("p");
       dateItem.textContent = transaction.date;
       const typeItem = document.createElement("p");
       typeItem.textContent = transaction.type;
       
       logList.append(amountItem,descItem, dateItem, typeItem);
       logs.append(logList);
       
    })
}

render();