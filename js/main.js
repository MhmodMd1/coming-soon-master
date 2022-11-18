let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
let inputV = document.querySelector(".inputv")
let button = document.querySelector("button")
let span = document.querySelector(".erorr-message")
let img = document.querySelector(".erorr")
let field = 'This field is required'
let valid = "Please provide a valid email"
let work = "Email registered correctly"

button.addEventListener('click', () => {
    if (inputV.value == '') {
        img.classList.add("show")
        span.innerHTML = field
    } else {
        if (regex.test(inputV.value)) {
            img.classList.remove("show")
            span.innerHTML = work
            span.classList.add("message-work")
            window.location.reload()
        } else {
            span.innerHTML = valid
            img.classList.remove("show")
        }
    }
})