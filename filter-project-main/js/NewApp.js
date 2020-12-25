const btns = document.querySelectorAll(".btn")
const storeItems = document.querySelectorAll(".store-item")

btns.forEach((button) => {
    button.addEventListener("click" , (e) =>  {
        e.preventDefault()
        console.log(e)
        let filter = e.target.dataset.filter
        console.log(filter)
        if (filter === "all") {
            console.log("all") 
            storeItems.forEach((item) => {
                item.style.display ="block"
            })
        }
        else if (filter === "cakes") {
            storeItems.forEach((item) => {
                if (item.classList.contains("cakes")) {
                    item.style.display = "block"
                } else {
                    item.style.display = "none"
                }
            })
        }
        else if (filter === "cupcakes") {
            storeItems.forEach((item) => {
                if (item.classList.contains("cupcakes")) {
                    item.style.display = "block"
                } else {
                    item.style.display = "none"
                }
            })
        }
        else if (filter === "sweets") {
            storeItems.forEach((item) => {
                if (item.classList.contains("sweets")) {
                    item.style.display = "block"
                } else {
                    item.style.display = "none"
                }
            })
        }
        else if (filter === "doughnuts") {
            storeItems.forEach((item) => {
                if (item.classList.contains("doughnuts")) {
                    item.style.display = "block"
                } else {
                    item.style.display = "none"
                }
            })
        }
    }) 
})

const search = document.getElementById("search-item")
console.log(search)
search.addEventListener("keyup", (e) => {
    let searchValue = e.target.value.toLowerCase().trim()
    storeItems.forEach((item) => {
        if (item.textContent.includes(searchValue)) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })  
})