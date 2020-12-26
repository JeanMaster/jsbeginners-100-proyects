class UI {
    constructor(){
        this.budgetForm = document.getElementById("budget-form")
        this.budgetFeedback = document.querySelector(".budget-feedback")
        this.expenseForm = document.getElementById("expense-form")
        this.expenseFeedback = document.querySelector(".expense-feedback")
        this.budget = document.getElementById("budget-amount")  
        this.expense = document.getElementById("expense-amount")
        this.balance = document.getElementById("balance-amount") 
        this.expenseList = document.getElementById("expense-list")  
        this.itemList = []
        this.id = 0
    }
    addbudget() {
        this.budgetForm.addEventListener("submit", (e) => {
            e.preventDefault()
            let budget = Number( document.getElementById("budget-input").value)
            if (this.validationInput(budget, this.budgetFeedback )){
                this.budget.textContent = `${budget}`
            }
            this.clearInputs()
            this.addBalance()
        }) 
    }

    addExpenses() {
        this.expenseForm.addEventListener("submit", (e) => {
            e.preventDefault()
            let expense = document.getElementById("expense-input").value
            let amount =  document.getElementById("amount-input").value
            const expenseAmount = document.getElementById("expense-amount")
            let totalExpenses = Number(expenseAmount.textContent)
            if (this.validationInput(expense, this.expenseFeedback) && this.validationInput(amount, this.expenseFeedback )){
                let itemExpense = {
                    expense: expense,
                    amount: amount,
                    id: this.id++
                }
                this.itemList.push(itemExpense)
                this.printItems(itemExpense)
                console.log(this.itemList)
                totalExpenses =  this.calculations(itemExpense, "sum" ,totalExpenses) 
                expenseAmount.textContent = totalExpenses
            }
            this.clearInputs()
            this.addBalance()
        })
    }

    calculations(item1 , op,  item2) {
        let total
       if (op === "sum" ) {
           total = Number(item1.amount) + Number(item2)
           return total
       }
       if (op === "rest") {
           total = Number(item1) - Number(item2)
           return total
       }
    }

    validationInput(item , feedback , message) {
        if (item <= 0 || item === "") {
            let message = "Input cant be empty or negative"
            feedback.classList.add("showItem")
            feedback.textContent = message
            setTimeout(() => {
                feedback.classList.remove("showItem")
            }, 3000)
        } else {
            return true
        }
    } 
    printItems(itemExpense) {
        let div = document.createElement("div") 
        div.classList.add("expense")
        div.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">
        <h6 class="expense-title mb-0 text-uppercase list-item">${itemExpense.expense}</h6>
        <h5 class="expense-amount mb-0 list-item">${itemExpense.amount}</h5>
        <div class="expense-icons list-item">
         <a href="#" class="edit-icon mx-2" data-id="${itemExpense.id}">
          <i class="fas fa-edit"></i>
         </a>
         <a href="#" class="delete-icon" data-id="${itemExpense.id}">
          <i class="fas fa-trash"></i>
         </a>
        </div>
       </div>`
        this.expenseList.appendChild(div)
        this.iconsBtns(div)

    } 

    clearInputs() {
        document.getElementById("budget-input").value = ""
        document.getElementById("expense-input").value = ""
        document.getElementById("amount-input").value = ""
    }
    addBalance() {  
        let budget = Number(this.budget.textContent) 
        let expense = Number(this.expense.textContent)
        let balance = this.calculations(budget , "rest" , expense)
        this.balance.textContent = balance
        
    }
    iconsBtns(element) {
        element.querySelector(".delete-icon").addEventListener("click" , (e) => {
            e.preventDefault()
            const value = Number(element.querySelector("#expense-list > div.expense > div > h5").textContent)
            const expense = Number(this.expense.textContent)
            const expenseAmount = document.getElementById("expense-amount")
            expenseAmount.textContent = this.calculations(expense, "rest" , value)
            this.expenseList.removeChild(element)
            this.addBalance()
        })
        element.querySelector(".edit-icon").addEventListener("click" , (e) => {
            e.preventDefault()
            console.log(e)
            console.log(element)
            const value = Number(element.querySelector("#expense-list > div.expense > div > h5").textContent)
            const expense = Number(this.expense.textContent)
            const item = element.querySelector("#expense-list > div.expense > div > h6").textContent
            const expenseAmount = document.getElementById("expense-amount")
            expenseAmount.textContent = this.calculations(expense, "rest" , value)
            let expenseInput = document.getElementById("expense-input")
            let amountInput =  document.getElementById("amount-input")
            amountInput.value = value
            expenseInput.value = item
            this.expenseList.removeChild(element)
            this.addBalance()
        })
    }
}

function addEventListener(ui) {
    ui.addbudget()
    ui.addExpenses()
}

document.addEventListener("DOMContentLoaded" , () => {
    const ui = new UI 
    addEventListener(ui)
})