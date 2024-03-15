let btn = document.querySelector('#verPassword')
let btnConfirm = document.querySelector('#verConfirmPassword')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let utilizador = document.querySelector('#utilizador')
let labelUtilizador = document.querySelector('#labelUtilizador')
let validUtilizador = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let confirmPassword = document.querySelector('#confirmPassword')
let labelConfirmPassword = document.querySelector('#labelConfirmPassword')
let validConfirmPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

utilizador.addEventListener('keyup', () => {
  if(utilizador.value.length <= 4){
    labelUtilizador.setAttribute('style', 'color: red')
    labelUtilizador.innerHTML = 'ID *Insira no minimo 5 caracteres'
    utilizador.setAttribute('style', 'border-color: red')
    validUtilizador = false
  } else {
    labelUtilizador.setAttribute('style', 'color: green')
    labelUtilizador.innerHTML = 'Usuário'
    utilizador.setAttribute('style', 'border-color: green')
    validUtilizador = true
  }
})

password.addEventListener('keyup', () => {
  if(password.value.length <= 5){
    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = 'Password *Insira no minimo 6 caracteres'
    password.setAttribute('style', 'border-color: red')
    validPassword = false
  } else {
    labelPassword.setAttribute('style', 'color: green')
    labelPassword.innerHTML = 'Password'
    password.setAttribute('style', 'border-color: green')
    validPassword = true
  }
})

confirmPassword.addEventListener('keyup', () => {
  if(password.value != confirmPassword.value){
    labelConfirmPassword.setAttribute('style', 'color: red')
    labelConfirmPassword.innerHTML = 'Confirmar Password *As passwords não coincidem'
    confirmPassword.setAttribute('style', 'border-color: red')
    validConfirmPassword = false
  } else {
    labelConfirmPassword.setAttribute('style', 'color: green')
    labelConfirmPassword.innerHTML = 'Confirmar Password'
    confirmPassword.setAttribute('style', 'border-color: green')
    validConfirmPassword = true
  }
})

function registar(){
  if(validNome && validUtilizador && validPassword && validConfirmPassword){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeRes: nome.value,
      userRes: utilizador.value,
      passwordRes: password.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Registando utilizador...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = 'file:///C:/Users/PMST/Desktop/ProjetoFinalCESAE//Login-Registar/login.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de registar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputPassword = document.querySelector('#password')
  
  if(inputPassword.getAttribute('type') == 'password'){
    inputPassword.setAttribute('type', 'text')
  } else {
    inputPassword.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmPassword = document.querySelector('#confirmPassword')
  
  if(inputConfirmPassword.getAttribute('type') == 'password'){
    inputConfirmPassword.setAttribute('type', 'text')
  } else {
    inputConfirmPassword.setAttribute('type', 'password')
  }
})


