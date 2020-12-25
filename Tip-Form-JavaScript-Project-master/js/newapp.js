const inputs = document.querySelectorAll(".input")
const feedback = document.querySelector(".feedback")
const submitBtn = document.querySelector(".btn")
const services = [{
    value: 1,
    title: "great - 20%"
  },{
    value: 2,
    title: "good - 10%"
  },{
    value: 3,
    title: "bad - 2%"
  }]


  services.forEach((service) => {
      option = document.createElement("option")
      option.textContent = service.title
      option.value = service.value
      inputs[2].appendChild(option)
      
  })

let validFeedback = function (bill, users, service) {
    feedback.innerHTML = ""
    feedback.classList.remove('showItem', 'alert-danger')   
    let isfeedback = false
    if (bill === "") { 
        feedback.innerHTML += `<p>Bill amount cannot be blank</p>`
        feedback.classList.add("showItem", "alert-danger")
        isfeedback = true
    }
    if ( users <= "0") {
        feedback.innerHTML +=`<p>Number of users must be greater than zero</p>`;
        feedback.classList.add("showItem", "alert-danger")
        isfeedback = true
    }
    if (service === "0") {
        feedback.classList.add('showItem', 'alert-danger');
        feedback.innerHTML += `<p>You must select a Service</p>`
        isfeedback = true
    }

    setTimeout(() => {
        feedback.classList.remove('showItem', 'alert-danger')
    }, 10000)
    
    return isfeedback
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let bill = inputs[0].value
    let users = inputs[1].value
    let service = inputs[2].value
    let validation = validFeedback(bill, users, service)
    if (!validation) {
       let results =  calculation(bill,users,service)
       printResults(results)
    }
})


function calculation(bill, users,service) {
    let serviceTip = ""
    if (service === "1") {
        serviceTip = 0.20
    } 
    if (service === "2") {
        serviceTip = 0.10
    } 
    if (service === "3") {
        serviceTip = 0.02
    } 

    let tip = parseInt(bill) * serviceTip
    let totalBill = tip + parseInt(bill)
    let eachPerson = totalBill / parseInt(users)

    return [tip, totalBill, eachPerson]
}


function printResults(results) {
    const loading = document.querySelector(".loader")
    const resultsDom = document.querySelector(".results")
    const tipDom = document.querySelector("#tip-amount")
    const totalDom = document.querySelector("#total-amount")
    const personDom = document.querySelector("#person-amount")
    loading.classList.add("showItem")
    setTimeout(() => {
        loading.classList.remove('showItem')
            tipDom.textContent = `${results[0].toFixed(2)}`
            totalDom.textContent = `${results[1].toFixed(2)}`
            personDom.textContent = `${results[2].toFixed(2)}`
            resultsDom.classList.add("showItem")
    }, 3000)
}