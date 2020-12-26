const displayCart = document.getElementById("cart-info")
const totalcart = document.getElementById ("cart-total")
const itemCount= document.getElementById ("item-count")
const itemTotal = document.querySelector(".item-total")
totalcart.textContent = "0.00"
itemTotal.textContent = "0.00"


displayCart.addEventListener("click" , () => {
    const cart = document.getElementById("cart").classList.toggle("show-cart")
})

const items = document.querySelectorAll(".card")

items.forEach((item) => {
    
    const cartBtn = item.querySelector(".store-item-icon") 
    cartBtn.addEventListener("click" , (e) => {
        const imgPath = e.target.parentElement.parentElement.children[0].attributes[0].nodeValue
        const name = e.target.parentElement.parentElement.parentElement.children[1].children[0].children[0].textContent
        const price = e.target.parentElement.parentElement.parentElement.children[1].children[0].children[1].children[0].textContent

        
        const cartItem = document.createElement("div")
       cartItem.classList.add('cart-item', 'd-flix', 'justify-content-between', 'text-capitalize', 'my-3');

            cartItem.innerHTML = `<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src="${imgPath}" class="img-fluid img-fix rounded-circle" id="item-img" alt="">
              <div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${name}</p><span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${price}</span></div><a href="#" id='cart-item-remove' class="cart-item-remove"><i class="fas fa-trash"></i></a></div>`;

        const total = document.querySelector(".cart-total-container")
        const cart = document.getElementById("cart")
        cart.insertBefore(cartItem, total)
        calcTotal()
    })
})

const calcTotal = function() {
    const items = document.querySelectorAll(".cart-item-price")
    const prices = []
    let total = 0
    items.forEach((item) => {
        console.log(item)
        prices.push(parseInt(item.textContent))
    }) 
    prices.forEach((price) => {
        total = price + total
    })

    totalcart.textContent = total.toFixed(2)
    itemTotal.textContent = total.toFixed(2)
    itemCount.textContent = prices.length
 }


