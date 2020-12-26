const submitBtn = document.querySelector(".addItems-submit")
const inputItem = document.querySelector(".addItems-input")
const itemAction = document.querySelector(".addItems-action")
const displayAction = document.querySelector(".displayItems-action")
const displayList = document.querySelector(".grocery-list")
const displayItems = document.querySelector(".displayItems-action")


let groceryList = []

submitBtn.addEventListener("click" , (e) => {
    e.preventDefault()
    if (inputItem.value ==="") {
        console.log("emp")
        showAction(itemAction, 'Please add grocery item', false)
    } else {
        showAction(itemAction, "Item Added", true)
        itemAdd(inputItem.value)
        setLocalStorage(groceryList)
        itemList(inputItem.value)
        inputItem.value = ""
        removeSingleItem()
    }
})

const showAction = function(element, text, value) {
    if (value === true) {
        element.classList.add("success")
        element.textContent = text
        setTimeout(() => {
            element.classList.toggle("success")
        }, 3500)
    } else if (value === false ) {
        element.classList.add("alert")
        element.textContent = text
        setTimeout(() => {
            element.classList.toggle("alert")
        }, 3500)
    }  
}


const itemAdd = function(item) {
    groceryList.push(item)
}

const setLocalStorage = function(items) {
    localStorage.setItem("groceryList", JSON.stringify(items))
}

const getLocalStorage = function() {
    localList = localStorage.getItem("groceryList") 
    if (localList === "undefined" || localList === null) {
        groceryList = []
    } else {
        groceryList = JSON.parse(localList)
    }
}

const itemList = function(item) {
    list = document.createElement("div")
        list.classList.add("grocery-item")
        list.innerHTML = `
        <h4 class="grocery-item__title">${item}</h4>
        <a href="#" class="grocery-item__link">
            <i class="far fa-trash-alt"></i>
        </a>`
        displayList.appendChild(list)
}

const getList = function (items) {
    items.forEach((item) => {
        itemList(item)
    });
    removeSingleItem()
}


const clearBtn = document.querySelector(".displayItems-clear")
clearBtn.addEventListener("click" , () => {
    localStorage.clear()
    if (groceryList.length > 0) {
        showAction(displayItems , "all items cleared" , true)
    } else {
        showAction(displayItems , "nothing to clear" , false)
    }

    groceryList = []
    displayList.textContent =""
})

const removeSingleItem = function() {
    let items =  document.querySelectorAll(".grocery-item")
    items.forEach((item) => {
        let child = item
        let button = item.querySelector(".grocery-item__link")
        button.addEventListener("click" ,(e) => {
            e.preventDefault()
            console.log(e)
            let name = e.path[2].children[0].textContent
            console.log(name)
            displayList.removeChild(child)
            console.log(child)
            showAction(displayItems , `${name} has been removed` , true)
            editStorage(name)
        })   
    })
}

const editStorage = function(item) {
    console.log(item)
    let itemList = JSON.parse(localStorage.getItem("groceryList")) 
    let index = itemList.indexOf(item)
    console.log(itemList)
    itemList.splice(index , 1 ) 
    console.log(itemList)
    localStorage.removeItem("groceryList")
    localStorage.setItem("groceryList" , JSON.stringify(itemList))
}

getLocalStorage()
getList(groceryList)