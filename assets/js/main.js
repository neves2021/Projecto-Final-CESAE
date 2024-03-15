
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


/*************************************************************** */
/**********************MENU QUANDO FIZER LOGIN****************** */
/*************************************************************** */

let userLogado = JSON.parse(localStorage.getItem('userLogado'));
const h1 = document.querySelector('#bemvindo');
const sair = document.querySelector('#logout');


if(localStorage.getItem('token') == null) {
    

    h1.setAttribute('style', 'display: none');
    sair.setAttribute('style', 'display: none');
}else {
    h1.setAttribute('style', 'display: block');
    sair.setAttribute('style', 'visibility: visible');
    h1.innerHTML = 'Olá, ' + userLogado.nome;
}


function comecar() {

    if(localStorage.getItem('token') == null) {
    
        window.location.href = 'file:///C:/Users/PMST/Desktop/ProjetoFinalCESAE/Login-Registar/login.html';
    
    }else {
        
        window.location.href = 'file:///C:/Users/PMST/Desktop/ProjetoFinalCESAE/template1/index.html';

    }
}

function logout() {

    localStorage.removeItem('token');

    window.location.href = 'file:///C:/Users/PMST/Desktop/ProjetoFinalCESAE/index.html';

}