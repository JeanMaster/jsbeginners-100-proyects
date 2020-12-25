//geting buttoms, declaring vars
const buttons = document.querySelectorAll(".counterBtn")
let counter = 0
//for each button Do next. asing the add event listener and buttoms logic
buttons.forEach(function(button) {
    button.addEventListener("click",() => {
        if (button.classList.contains("nextBtn")) {
            counter++
        } else {
            counter--
        }
        //updating counter
        const display = document.getElementById("counter")
        display.textContent = counter;
        if ( counter > 0 ) {
            display.style.color = "green"
        } else if (counter < 0 ) {
            display.style.color = "red"
        } else {
            display.style.color = "#333333"
        }

    })
})