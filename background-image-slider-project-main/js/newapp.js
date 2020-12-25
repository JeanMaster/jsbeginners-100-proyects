const btn = document.querySelectorAll(".btn");
const imgContainer = document.querySelector(".img-container");
let counter = 0;
let backgrounds = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
];

btn.forEach((button) => {
    button.addEventListener("click" ,() => {
        if (button.classList.contains("btn-left")) {
           counter--
           if (counter < 0) {
               counter = backgrounds.length - 1;
            }
            imgContainer.style.backgroundImage= `url(./img/${backgrounds[counter]}.jpeg)`
        } else if (button.classList.contains("btn-right")) {
            counter++
            if (counter > backgrounds.length - 1)
            counter = 0
            imgContainer.style.backgroundImage= `url(./img/${backgrounds[counter]}.jpeg)`
        }
    })
})