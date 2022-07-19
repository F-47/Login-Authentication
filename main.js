function validate() {
    let emailValue = document.getElementById("email").value
    let indicator = document.querySelector(".indicator")
    let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (emailValue.match(emailRegex)) {
        indicator.classList.add("valid")
        indicator.classList.remove("Invalid")
    } else {
        indicator.classList.remove("valid")
        indicator.classList.add("Invalid")
    }
}

var state = false
function toggle() {
    let eye = document.getElementById("eye")
    let password = document.getElementById("password")
    if (state) {
        password.setAttribute("type", "password")
        eye.classList.toggle("fa-eye-slash")    
        state = false
    } else {
        password.setAttribute("type", "text")
        eye.classList.toggle("fa-eye-slash")
        state = true
    }
}



