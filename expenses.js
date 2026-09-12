const amountInput = document.querySelector("#amountInput");
const descInput = document.querySelector("#descInput");
const dateInput = document.querySelector("#dateInput");
const typeInput = document.querySelector("#typeInput");
const submitBtn = document.querySelector("#submitBtn");
const balanceDisplay = document.querySelector("#balanceDisplay");
const logs = document.querySelector("#logs");
const errorBox = document.querySelector("#errorBox");

let balance = 0;
let editId = null;
let transactions = [
    {id: 1, amount: 2000, desc : "Salary", date:"9.1.2026", type: "Income"},
    {id: 2, amount: 1000, desc : "Laptop", date:"15.1.2026", type: "Expense"},
    {id: 3, amount: 500, desc : "Freelancing", date:"15.2.2026", type: "Income"},
    {id: 4, amount: 300, desc : "headphones", date:"15.3.2026", type: "Expense"},
];


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
            amount: Number(amountInput.value),
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
    calcBalance(transactions);
    balanceDisplay.textContent = balance + "€"
    
    
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
       const remBtn = document.createElement("button");
       remBtn.className = "button redBtn";
       remBtn.textContent = "X"
       const editBtn = document.createElement("button");
       editBtn.className = "button blueBtn";
       const editImg = document.createElement("img");
       editImg.src = "./edit.png";
       editImg.className = "editImg";
       editBtn.append(editImg);
       logList.append(amountItem,descItem, dateItem, typeItem, remBtn, editBtn);
       logs.append(logList);

       remBtn.addEventListener("click", function(e){
        transactions = transactions.filter(item => item.id !== transaction.id);
        render();
       })

       editBtn.addEventListener("click", function(e){
        editId = transaction.id;
        console.log(editId);
        render();
       })
       
    })
}

function calcBalance(arr){
    const incomes = arr.filter(item => item.type === "Income");
    const expenses = arr.filter(item => item.type === "Expense");
    const incomeSum = incomes.reduce(function(acc,item){
        return acc + item.amount
    },0)
    const expenseSum = expenses.reduce(function(acc,item){
        return acc + item.amount
    },0)
    balance = incomeSum - expenseSum;
    
}



render();
