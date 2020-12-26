const img = document.querySelector("#photo")
const btn = document.querySelector("#btn")
const apiUrl = "https://randomuser.me/api/" 
const name = document.querySelector("#first")
const lastname =document.querySelector("#last")
const direction = document.querySelector("#street")
const email = document.querySelector("#email")
const phone =document.querySelector("#phone")


const getData = async function(apiUrl) {
   try {
       const response = await fetch(apiUrl)
       const data = await response.json()
       return data
   }
   catch (error){
       console.log("error")
   }
}


btn.addEventListener("click", () => {
    getData(apiUrl) 
    .then(data => {
         name.textContent = data.results[0].name.first
         lastname.textContent = data.results[0].name.last
         direction.textContent = data.results[0].location.city
         phone.textContent = data.results[0].phone
         email.textContent = data.results[0].email
         img.src = data.results[0].picture.large
    })  
    
})

