let btn = document.querySelector('.fa-eye');

btn.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha');

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }

})

function entrar() {
    let inputUtilizador = document.querySelector('#utilizador');
    let labelUtilizador = document.querySelector('#labelUtilizador');

    let inputPassword = document.querySelector('#password');
    let labelPassword = document.querySelector('#labelPassword');

    let msgError = document.querySelector('#msgError');
    let listaUser = [];

    let userValid = {
        nome: '',
        user: '',
        password: ''
    }




    listaUser = JSON.parse(localStorage.getItem('listaUser'))



    listaUser.forEach((item) => {
        if(inputUtilizador.value == item.userRes && inputPassword.value == item.passwordRes) {
            userValid = {
                nome: item.nomeRes,
                user: item.userRes,
                password: item.passwordRes
            }
        }
    });

    if(inputUtilizador.value == userValid.user && inputPassword.value == userValid.password && inputUtilizador.value !== '' && inputPassword.value !== ''){
        window.location.href = 'file:///C:/Users/PMST/Desktop/ProjetoFinalCESAE/index.html';
    
        let token = Math.random().toString(16).substring(2);

        localStorage.setItem('token', token);

        localStorage.setItem('userLogado', JSON.stringify(userValid));

    }else {
        labelUtilizador.setAttribute('style', 'color: red');
        utilizador.setAttribute('style', 'border-color: red');

        labelPassword.setAttribute('style', 'border-color: red');
        password.setAttribute('style', 'border-color: red');

        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Login ou password incorretos';

        utilizador.focus();
    }

    console.log(listaUser)
    
    console.log(userValid)
}
