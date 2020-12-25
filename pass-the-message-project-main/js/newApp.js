//Geting from HTML all stuff needed
const msgImput = document.getElementById("message")
const sendbuton = document.getElementById("submitBtn")
const messagePrint = document.querySelector(".message-content")
const feedback = document.querySelector(".feedback")
//event listener for buttom
sendbuton.addEventListener("click" , submit)
//button function
function submit(e) {
        //this stop form  from refreshing website. this is new for me
          e.preventDefault()
        //this check input vaule, if is empty then show msg adding Display block from CSS then remove at 2secs
        if(msgImput.value =="") {
            feedback.classList.add("show")
            setTimeout(() => {
                feedback.classList.remove("show")
              
            },2000)
        }
        //print mesage, clearing input.
        messagePrint.textContent = msgImput.value
        msgImput.value = ""
    }