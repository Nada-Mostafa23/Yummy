let userName = document.querySelector("#nameInput")
let userEmail = document.getElementById('emailInput')
let userPass = document.getElementById('passwordInput')
userName.addEventListener('input',validationName)
userEmail.addEventListener('input',validationEmail)
userPass.addEventListener('input',validationPass)
export function validationName(){
    let  nameValid = userName.value
    let regexName = /^\w{4,}(\s+\w+)*$/
    if(regexName.test(nameValid) == true){
        userName.classList.add('is-valid')
        userName.classList.remove('is-invalid')
        return true
    }
        userName.classList.remove('is-valid')
        userName.classList.add('is-invalid')
        // return false
    
}
export function validationEmail() {
    let emailValid = userEmail.value
    let pattern = /^\S+@\S+\.\S+$/;
    if (pattern.test(emailValid) == true) {
        userEmail.classList.add('is-valid')
        userEmail.classList.remove('is-invalid')
        return true
    } else {
        userEmail.classList.remove('is-valid')
        userEmail.classList.add('is-invalid')
        return false
    }
}
export function validationPass() {
    let passValid = userPass.value
    let pattern = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/;
    if (pattern.test(passValid) == true) {
        userPass.classList.add('is-valid')
        userPass.classList.remove('is-invalid')
        return true
    } else {
        userPass.classList.remove('is-valid')
        userPass.classList.add('is-invalid')
        return false
    }
}



export function btnClick(){
    if(validationEmail() == true &&  validationName() == true && validationPass()==true){
        document.getElementById('submitBtn').disabled= true
    }
}