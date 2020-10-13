//geting HTMLelements and event listener
const body = document.querySelector("body")
const buttom = document.querySelector("button")
buttom.addEventListener("click" , SetBackgrondColor)
//Colors List
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','black']

// change background function 
function SetBackgrondColor() {
    RandoMcolor = Math.floor(Math.random() * colors.length)  //random number between 0 and colors length 
    body.style.backgroundColor = colors[RandoMcolor]        //  aplly new background
}

//loading first background color
SetBackgrondColor()


//@jeanMasterMagic 
//jeancarlos70@gmail.com