const itemInput = document.querySelector("#itemInput")
const  btns = document.querySelectorAll(".btn")
const itemList = document.querySelector(".item-list")
let toDoList = []

btns.forEach((button) => {
    button.addEventListener("click" ,(e)=> {
        e.preventDefault()
        if (e.target.id === "clear-list") {
            clear();
        } else {
            const validInput = validation()
            addItems(validInput)
            getItem(toDoList)
        }
    })
})

const setLocalsotore = (items) => {
    localStorage.setItem("todolist" ,JSON.stringify(items))
}

const getLocalStorage = () => {
    toDoStorage = localStorage.getItem("todolist") 
    if (toDoStorage === "undefined" || toDoStorage === null) {
        toDoList = []
    } else {
        toDoList = JSON.parse(toDoStorage)
        getItem(toDoList)
    }
}

getLocalStorage()

function validation() {
    const feedback = document.querySelector(".feedback")
    let validInput = false
    
    if (itemInput.value === "") {
        feedback.classList.add('showItem', 'alert-danger')
        validInput = true
    }
    setTimeout(() => {
        feedback.classList.remove('showItem', 'alert-danger')
    }, 3000)
    return validInput
}

function addItems(validInput) {
    if (!validInput) {
        toDoList.push(itemInput.value)
        itemInput.value ="";
        setLocalsotore(toDoList)
    }
}

 function getItem(todolist) {
    
    itemList.innerHTML = ""
    todolist.forEach((item) => {
        itemList.insertAdjacentHTML("beforeend", 
        `<div class="item my-3">
            <h5 class="item-name text-capitalize">${item}</h5>
            <div class="item-icons">
                <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
                <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
                <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
            </div>
        </div>`)
        handleItems(item)
    })
}

function clear() {
    localStorage.clear()
    toDoList= []
    getItem(toDoList)

}

function handleItems(itemName) {
    const items = document.querySelectorAll(".item")
    items.forEach((item) => {
       if (item.querySelector(".item-name").textContent === itemName ) {
            item.querySelector(".complete-item").addEventListener("click" ,() => {
               console.log("complete")
               item.querySelector(".item-name").classList.toggle("completed")
               item.querySelector(".complete-item").classList.toggle("visibility")
           })
           
            item.querySelector(".edit-item").addEventListener("click" ,() => {
            console.log("edit item")
            itemInput.value = itemName
            itemList.removeChild(item)
            toDoList = toDoList.filter((item) => {
                return item !== itemName
                })     
            })  
            item.querySelector(".delete-item").addEventListener("click" ,() => {
                console.log("delete-item")
                itemList.removeChild(item)
                toDoList = toDoList.filter((item) => {
                    return item !== itemName
                    }) 
            }) 
       }  
    })
}