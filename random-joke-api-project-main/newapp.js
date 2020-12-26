const button = document.getElementById("get-joke")
const display = document.getElementById("display-joke")
const apiUrl = "https://api.chucknorris.io/jokes/random"


const getJoke = async (apiUrl) => {
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
        display.textContent = data.value
    }
    catch (error) {
        console.error("fetch error" , error)
        display.textContent = "error."
        
    }
}


button.addEventListener("click" , (e) => {
    getJoke(apiUrl)
})

