document.addEventListener("DOMContentLoaded" , () => {
    let itemList = []
    const display = new Display(itemList)
    display.getList()
    display.addEventListeners()
})

class Display {
    constructor(itemList) {
        this.itemList = itemList
    }
    addEventListeners() {
        const showBtn = document.getElementById("show-btn")
        const questionForm = document.getElementById("question-form")
        showBtn.addEventListener("click" , () => {
            document.querySelector(".question-card").classList.add("showItem")
           document.querySelector(".close-btn").addEventListener("click" ,() => {
               document.querySelector(".question-card").classList.remove("showItem")
           })
           this.submitBtn(questionForm)
           
        })
    }
    
    submitBtn(questionForm) {
        questionForm.addEventListener("submit", (e) => {
            e.preventDefault()
            let question = document.getElementById("question-input")
            let answer = document.getElementById("answer-input")
            if (!this.validationInput(question.value , answer.value)) {
                let id = this.idlocation(this.itemList)
                console.log(id)
                let item = new Question(question.value,answer.value,id)
                this.itemList.push(item)
                this.setLocalStorage(this.itemList)
                this.addQuestionList(item)
                question.value = ""
                answer.value =""
                console.log(this.itemList)
            }
        })
    }
    setLocalStorage(itemList) {
        localStorage.setItem("questionList", JSON.stringify(itemList))
    } 
    
    addQuestionList(item) {
        const questionList = document.getElementById("questions-list")
        let div = document.createElement("div")
        div.classList.add("col-md-4")
        div.innerHTML = 
        `<div class="card card-body flashcard my-3">
            <h4 class="text-capitalize">${item.question}</h4>
            <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
            <h5 class="answer mb-3">${item.answer}</h5>
            <div class="flashcard-btn d-flex justify-content-between">
            <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
            <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
        </div>`
        questionList.appendChild(div)
        div.querySelector(".show-answer").addEventListener("click" ,(e) =>{
            e.preventDefault()
            div.querySelector(".answer").classList.toggle("showItem")
        })
        div.querySelector(".delete-flashcard").addEventListener("click" , (e) => {
            questionList.removeChild(div)
            let index = this.itemList.indexOf(item) 
            let tempList = this.itemList.filter((item) => {
                return item.id !== this.itemList[index].id
            })
            this.itemList = tempList
            this.setLocalStorage(this.itemList)
              
        })
        div.querySelector(".edit-flashcard").addEventListener("click" , (e) => {
            e.preventDefault()
            questionList.removeChild(div)
            const questionForm = document.querySelector(".question-card")
            let question = document.getElementById("question-input")
            let answer = document.getElementById("answer-input")
            questionForm.classList.add("showItem")
            question.value = item.question
            question,answer = item.answer
            let index = this.itemList.indexOf(item) 
            let tempList = this.itemList.filter((item) => {
                return item.id !== this.itemList[index].id
            })
            this.itemList = tempList
            this.setLocalStorage(this.itemList)
        })
    } 

    validationInput(question,answer) {
        const feedback = document.querySelector(".feedback")
        let isfeedback = false
        if (question ==="") {
            feedback.classList.add("showItem")
            isfeedback = true
        }
        if (answer ==="") {
            feedback.classList.add("showItem")
        }
        setTimeout(() => {
            feedback.classList.remove("showItem")
        }, 3000)
        return isfeedback
    }  
    getList() {
        this.itemList = JSON.parse(localStorage.getItem("questionList"))
        if (this.itemList === "undefined " || this.itemList === null) {
           this.itemList = []
        } else {
           this.itemList.forEach((item) => {
                this.addQuestionList(item)
            })
        } 
    }
    idlocation(item) {
        if (item.length === 0 ) {
            let id = 0 
            return id
            
        } else {
            let index = JSON.parse(localStorage.getItem("questionList"))
            let array = index.pop()
            let id =array.id
            return id + 1
        }
        
    }
    
}

class Question{
    constructor(question, answer, id) {
        this.question = question
        this.answer = answer
        this.id = id
    }
}