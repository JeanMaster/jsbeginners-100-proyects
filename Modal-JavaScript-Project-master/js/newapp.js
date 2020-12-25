const imgs = document.querySelectorAll(".store-img")
const modalContainer = document.querySelector(".lightbox-container")
const modalimg = document.querySelector(".lightbox-item")
const closeBtn = document.querySelector(".fa-window-close")
const carrelBtn = document.querySelectorAll(".lightbox-control")
const imgsList= []
let index = 0

imgs.forEach((image) => {
    let url = image.src 
    imgsList.push(url)
})


imgs.forEach((image) => {
    image.addEventListener("click" , (e) => {
        let url= e.target.currentSrc
        modalContainer.style.display = "block"
        modalimg.style.backgroundImage = `url(${url})`
        index = imgsList.indexOf(url)
    })
})

carrelBtn.forEach((button) => {
    button.addEventListener("click" , (e) => {
        if ( e.target.classList.contains("fa-caret-left")) {
            index--
            if (index < 0){
                index = imgsList.length - 1 
            }
            modalimg.style.backgroundImage = `url(${imgsList[index]})`
        }
        if ( e.target.classList.contains("fa-caret-right")) {
            index++
            if (index >=  imgsList.length){
                index = 0 
            }
            modalimg.style.backgroundImage = `url(${imgsList[index]})`
        }
    })
})

closeBtn.addEventListener("click" , () => {
    modalContainer.style.display = "none"
})
