const screen = document.querySelector(".screen")
const btns = document.querySelectorAll(".btn")
const clear = document.querySelector(".btn-clear")
const equal = document.querySelector(".btn-equal")

btns.forEach((button) => { button.addEventListener("click", (e) => {
    let value = e.target.dataset.num    
    screen.value += value 
})})

clear.addEventListener("click", () =>  screen.value = "")
equal.addEventListener("click" , () => {
    if (screen.value == "") {
        screen.value == "please insert value"
    } else {
        screen.value = eval(screen.value)
    }  
})