
document.addEventListener("DOMContentLoaded" , () => {
    const display = new Display
    display.checkinput()
    display.hideBtn()
})

document.getElementById("customer-form").addEventListener("submit" , (e) => {
        e.preventDefault()
        console.log(e)
        const name = document.querySelector(".name")
        const course = document.querySelector(".course")
        const author = document.querySelector(".author")
        
        const customer = new Customer(name.value,course.value,author.value)
        const display = new Display()
        
        display.clearInputs()     
        display.feedback(customer)
        
})

class Customer {
    constructor(name, course, author) {
        this.name = name
        this.course = course
        this.author = author
    }
}

class Display {
    constructor() {
        this.name = document.getElementById("name")
        this.course = document.getElementById("course")
        this.author = document.getElementById("author")
        this.customerList = document.querySelector(".customer-list")
    }

    validationInput() {
        if (this.value === "") {
            this.classList.add("fail")
        } else {
            this.classList.add("complete")
        }
        if ( document.querySelectorAll(".complete").length === 3) {
            let submitBtn = document.querySelector(".btn")
            submitBtn.disabled = false
        }
    }
    checkinput() {
        this.name.addEventListener("blur" , this.validationInput)
        this.course.addEventListener("blur" , this.validationInput)
        this.author.addEventListener("blur" , this.validationInput)
    }
    hideBtn() {
        let submitBtn = document.querySelector(".btn")
        submitBtn.disabled = true
    }

    feedback(customer) {
        const feedback = document.querySelector(".feedback") 
        const loading = document.querySelector(".loading")

        feedback.classList.add("showItem", "alert", "alert-success")
        loading.classList.add("showItem")

        this.hideBtn()
        this.randomNumber()

        setTimeout(() => {
            feedback.classList.remove("showItem", "alert", "alert-success")
            loading.classList.remove("showItem")
            this.addCustomer(customer)
        }, 3000)


    }

        clearInputs(){
            this.name.value = ""
            this.course.value = ""   
            this.author.value = ""
            this.name.classList.remove("complete" , "alert")
            this.course.classList.remove("complete" , "alert")
            this.author.classList.remove("complete" , "alert")
        }

        randomNumber() {
            let random =  Math.floor( Math.random() * 5 + 1)  
            return random     
        }

        addCustomer(customer) {
            let random = this.randomNumber() 
            let div = document.createElement("div")
            div.classList.add("col-11", "mx-auto", "col-md-6", "col-lg-4", "my-3")
            div.innerHTML = ` <div class="card text-left">
            <img src="./img/cust-${random}.jpg" class="card-img-top" alt="">
            <div class="card-body">
             <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${customer.name} </span></h6>
             <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">${customer.course}</span></h6>
             <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">${customer.author}</span></h6>
            </div>
           </div>`
           this.customerList.appendChild(div)
        }
    }


