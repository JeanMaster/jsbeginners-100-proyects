const btns = document.querySelectorAll(".btn")
const customerImg = document.querySelector("#customer-img")
const customerName = document.querySelector("#customer-name")
const customerText = document.querySelector("#customer-text")
const customers = []
let counter = 0;
//class Tempalte for customers

class Customer {
    constructor(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }
}

//function to make new customers
function createCustomer(img,name,text){
    let fullImg =  `./img/customer-${img}.jpg`
    customer = new Customer(fullImg, name,text)
    customers.push(customer)
}
//making new customers one by one, this is just for testing.
createCustomer(0,"jhon" , "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eum at maxime, ipsa commodi a dolor libero amet porro aperiam blanditiis, quos numquam ea similique sunt. Amet ullam aspernatur neque.")
createCustomer(1,"pedro" , "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eum at maxime, ipsa commodi a dolor libero amet porro aperiam blanditiis, quos numquam ea similique sunt. Amet ullam aspernatur neque.")
createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')

btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.parentElement.classList.contains('prevBtn')) {
            counter--
            if (counter < 0) {
                counter = customers.length -1
            }   
            customerImg.src = customers[counter].img
            customerName.textContent = customers[counter].name
            customerText.textContent = customers[counter].text      
        }
        if (e.target.parentElement.classList.contains('nextBtn')) {
            counter++   
            if (counter === customers.length) {
                counter = 0
            }   
            customerImg.src = customers[counter].img
            customerName.textContent = customers[counter].name
            customerText.textContent = customers[counter].text      
        }
        
    })
})



