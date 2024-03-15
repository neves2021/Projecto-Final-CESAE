 
// ===================== toggle icon navbar ====================
 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
 
 
// ===================== scroll sections active link ====================  - torna azul no menu a secção onde estamos e se descermos no site, vai mudando a secção ativa e colocando azul no menu
 
let sections = document.querySelectorAll('section');       //  Esta linha seleciona todos os elementos <section> na página e os armazena em uma NodeList na variável sections.
let navLinks = document.querySelectorAll('header nav a');       // Esta linha seleciona todos os links <a> dentro do elemento <nav> dentro do <header> na página e os armazena em uma NodeList na variável navLinks.
 
window.onscroll = () => {        // Este bloco de código define uma função de retorno de chamada (callback) que é executada toda vez que ocorre um evento de rolagem na janela do navegador. A função abaixo será executada sempre que a janela for rolada.
    sections.forEach(sec => {      //  Este método forEach itera sobre cada elemento <section> na NodeList sections.
        let top = window.scrollY;      //  Obtém a posição atual de rolagem vertical da janela do navegador.
        let offset = sec.offsetTop - 150;      //  Calcula a posição de rolagem vertical da seção atual, subtraindo 150 pixels da posição do topo da seção. Isso é feito para dar algum espaço entre o topo da página e a marcação de ativação do link.
        let height = sec.offsetHeight;     //  Obtém a altura da seção atual.
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {        // Verifica se a posição de rolagem vertical da janela está dentro da faixa de visualização da seção atual.
            navLinks.forEach(links => {
                links.classList.remove('active');       // Remove a classe "active" de todos os links de navegação.
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');       // Seleciona o link de navegação correspondente à seção atual usando seu atributo "href", que contém o valor do atributo "id" da seção. Adiciona a classe "active" a esse link de navegação.
            });
        };
    });
 
 
    // ===================== sticky navbar ====================
 
    let header = document.querySelector('header');
 
    header.classList.toggle('sticky', window.scrollY > 100);
 
    // ===================== remove toggle icon and navbar when click navbar link (scroll) ====================
 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 
};
 
 
    // ===================== scroll reveal ====================
 
    ScrollReveal({
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });
 
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
 
 





/****************************************************/  
/****************************************************/  
/*********** TYPED JS BIBILOTECA DO JS **************/  
/**QUE SERVE PARA ANIMAÇÕES DE TEXTO ESPECIALMENTE***/   
// ===================== typed js ====================
document.addEventListener('DOMContentLoaded', function() {
    let typedStrings = ['Frontend Developer', 'Youtuber', 'Blogger']; // array de strings que mostrará na animação

    const typed = new Typed('.multiple-text', {      // cria uma nova instância de Typed.js, ao elemento HTML da classe multiple-text.
        strings: typedStrings,
        typeSpeed: 100,     // velocidade de escrita (typeSpeed)
        backSpeed: 100,     // velocidade de retrocesso (backSpeed),  e se deve repetir (loop) são especificadas aqui.
        backDelay: 1000,    // o tempo quando termina o backSpeed até começar uma nova escrita
        loop: true          // permite repetir sempre
    });

    const multipleText = document.querySelector('.multiple-text');
    multipleText.addEventListener('click', function() {

        const inputCount = parseInt(prompt("Quantas frases quer?")); // pergunta quantas frases quer

        if (!isNaN(inputCount) && inputCount > 0) {  //  Verifica se o valor inserido é um numero valido e maior que zero. 
            typedStrings = promptForInputValues(inputCount); // Se sim, chama a função promptForInputValues para solicitar as novas frases. 
                typed.strings = typedStrings; 
                if (typedStrings) {           // Se as novas palavras forem válidas, atualiza as strings da instância typed e reinicia a animação.             
                typed.reset();
            }
        }
    });

    function promptForInputValues(count) { // Esta função é  para pedir as novas frases do utilizador. 
        const inputValues = [];
        for (let i = 0; i < count; i++) { // Faz um loop para o número de frases pedido pelo utilizador 
            const value = prompt(`Insira a frase nº ${i+1}:`); // e usa um prompt para obter cada frase. 
            if (value === null) { // Se o utilizador cancelar o prompt, 
                return null; // a função retorna null 
            }
            inputValues.push(value); 
        }
        return inputValues; // caso contrário, retorna um array com as frases inseridas.
    }
});



// **************************PARA O UTILIZADOR ESCOLHER A IMAGEM*********************************************
// Recupera a imagem do localStorage e define-a na pré-visualização
document.addEventListener('DOMContentLoaded', function() {
    const imagemCache = localStorage.getItem('userImage');
    const preview = document.querySelector('.image-preview');
    if (imagemCache) {
        preview.src = imagemCache;
    }
    
});

// Função para o utilizador escolher a imagem quando clicar na div/imagem
function selectImage() {
    document.getElementById('imageInput').click();
}

// Função para mostrar a imagem selecionada pelo utilizador e armazená-la no localStorage
function previewImage(input) {
    const preview = document.querySelector('.image-preview');
    const ficheiros = input.files[0];

    if (ficheiros) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageDataURL = e.target.result;
            
            // Verifica se o arquivo selecionado é do tipo jpeg
            if (ficheiros.type === 'image/jpeg') {
                // Se for PNG, atribui border-radius
                preview.style.borderRadius = '10%';
                preview.style.boxShadow = '0 15px 24px rgba(0, 0, 0, 1)'; 
            } else {
                // Se não for PNG, remove qualquer border-radius anteriormente atribuído
                preview.style.borderRadius = '0';
                preview.style.boxShadow = '0 15px 24px rgba(0, 0, 0, 0)'; 
            }

            preview.src = imageDataURL;
            // Guarda a imagem no localStorage
            localStorage.setItem('userImage', imageDataURL);
        };

        reader.readAsDataURL(ficheiros);
    }
}

// Substitui a imagem padrão apenas se uma imagem foi carregada do localStorage
window.addEventListener('unload', function() {
    const imagemCache = localStorage.getItem('userImage');
    const preview = document.querySelector('.image-preview');
    
    if (imagemCache && !preview.src.includes('images/home.png')) {
        preview.src = 'images/home.png';
    }

});


/*********************************************************************** */

function removeSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.remove();
    }
}

function addPortfolioItem() {
    const portfolioContainer = document.querySelector('.portfolio-container');
    const newPortfolioItem = `        
    <div class="portfolio-box" onclick="changePortfolioImage(this)">
    <img src="images/portfolio1.jpg" alt="">
    <div class="portfolio-layer">
        <h4>Web Design</h4>
        <p>Imagem  640 por 426</p>
        <a href="#"><i class='bx bx-link-external'></i></a>
        <button onclick="removePortfolioItem(this)" class="remove-btn">-</button>
    </div>
    </div>`;
        
    portfolioContainer.insertAdjacentHTML('beforeend', newPortfolioItem);
}

// Função para remover a última caixa do portfólio
function removePortfolioItem() {
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');
    const lastPortfolioBox = portfolioBoxes[portfolioBoxes.length - 1];
    if (lastPortfolioBox) {
        lastPortfolioBox.remove();
    }
}

// Função para alterar a imagem de uma caixa do portfólio ao clicar na caixa
function changePortfolioImage(box) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    input.addEventListener('change', function() {
        const reader = new FileReader();
        const image = box.querySelector('img');

        reader.onload = function(e) {
            image.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
}


function togglePanel() {
    var panel = document.getElementById('panel');
    panel.classList.toggle('active');
}


const fileInput = document.querySelector(".file-input"),
filterOptions = document.querySelectorAll(".filter button"),
filterName = document.querySelector(".filter-info .name"),
filterValue = document.querySelector(".filter-info .value"),
filterSlider = document.querySelector(".slider input"),
rotateOptions = document.querySelectorAll(".rotate button"),
previewImg = document.querySelector(".preview-img img"),
resetFilterBtn = document.querySelector(".reset-filter"),
chooseImgBtn = document.querySelector(".choose-img"),
saveImgBtn = document.querySelector(".save-img");

let brightness = "100", saturation = "100", inversion = "0", grayscale = "0";
let rotate = 0, flipHorizontal = 1, flipVertical = 1;

const loadImage = () => {
    let file = fileInput.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
        resetFilterBtn.click();
        document.querySelector(".container").classList.remove("disable");
    });
}

const applyFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
}

filterOptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText = option.innerText;

        if(option.id === "brightness") {
            filterSlider.max = "200";
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`;
        } else if(option.id === "saturation") {
            filterSlider.max = "200";
            filterSlider.value = saturation;
            filterValue.innerText = `${saturation}%`
        } else if(option.id === "inversion") {
            filterSlider.max = "100";
            filterSlider.value = inversion;
            filterValue.innerText = `${inversion}%`;
        } else {
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}%`;
        }
    });
});

const updateFilter = () => {
    filterValue.innerText = `${filterSlider.value}%`;
    const selectedFilter = document.querySelector(".filter .active");

    if(selectedFilter.id === "brightness") {
        brightness = filterSlider.value;
    } else if(selectedFilter.id === "saturation") {
        saturation = filterSlider.value;
    } else if(selectedFilter.id === "inversion") {
        inversion = filterSlider.value;
    } else {
        grayscale = filterSlider.value;
    }
    applyFilter();
}

rotateOptions.forEach(option => {
    option.addEventListener("click", () => {
        if(option.id === "left") {
            rotate -= 90;
        } else if(option.id === "right") {
            rotate += 90;
        } else if(option.id === "horizontal") {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        } else {
            flipVertical = flipVertical === 1 ? -1 : 1;
        }
        applyFilter();
    });
});

const resetFilter = () => {
    brightness = "100"; saturation = "100"; inversion = "0"; grayscale = "0";
    rotate = 0; flipHorizontal = 1; flipVertical = 1;
    filterOptions[0].click();
    applyFilter();
}

const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;
    
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if(rotate !== 0) {
        ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.scale(flipHorizontal, flipVertical);
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    
    const imageDataURL = canvas.toDataURL(); // Obter a imagem como URL de dados
    
    // Atualizar a imagem na <div class="home-img">
    const homeImg = document.querySelector('.home-img img');
    homeImg.src = imageDataURL;
        // Fechar a janela de edição de imagem
        const container = document.getElementById('container');
        container.style.display = 'none'
}

filterSlider.addEventListener("input", updateFilter);
resetFilterBtn.addEventListener("click", resetFilter);
saveImgBtn.addEventListener("click", saveImage);
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());

const teste = document.getElementById('teste');

const container = document.getElementById('container');


        // Adiciona um ouvinte de evento para o clique no botão
        teste.addEventListener('click', function() {
            // Verifica se o container está oculto
            if (container.style.display === 'none') {
                // Se estiver oculto, exibe o container
                container.style.display = 'block';
            } else {
                // Se estiver visível, oculta o container
                container.style.display = 'none';
            }
        });



        
/*************************************************************** */
/**********************MENU QUANDO FIZER LOGIN****************** */
/*************************************************************** */

let userLogado = JSON.parse(localStorage.getItem('userLogado'));
const h1 = document.querySelector('#bemvindo');
const sair = document.querySelector('#logout');


if(localStorage.getItem('token') == null) {
    
    sair.setAttribute('style', 'display: none');

}else {
    sair.setAttribute('style', 'visibility: visible');
    h1.innerHTML = userLogado.nome;
}


function logout() {

    localStorage.removeItem('token');

    window.location.href = 'file:///C:/Users/PMST/Desktop/ProjetoFinalCESAE/index.html';

}

let homeSection = [];
let homeDescricao = document.querySelector('#homeDescricao')
let primeiralinha = document.querySelector('#homePrimeiraLinha')
let listaTemp = [];
function guardar() {
    // Obter informações do user logado
    const userLogado = JSON.parse(localStorage.getItem('userLogado'));
    const username = userLogado.nome;

    // Obter as seções da página inicial
    let homeSection = JSON.parse(localStorage.getItem('homeSection') || '{}');

    // guarda as informações  associado ao nome de user
    homeSection[username] = {
        descricao: homeDescricao.innerHTML,
        primeiraLinha: primeiralinha.innerHTML
    };

    localStorage.setItem('homeSection', JSON.stringify(homeSection));
}


function carregar() {
    // Obter informações do usuário logado
    const userLogado = JSON.parse(localStorage.getItem('userLogado'));
    const username = userLogado.nome;

    // Obter as seções da página inicial
    let homeSection = JSON.parse(localStorage.getItem('homeSection') || '{}');

    // Verificar se há informações de seção associadas ao usuário atual
    if (homeSection[username]) {
        const section = homeSection[username];
        homeDescricao.innerHTML = section.descricao;
        primeiralinha.innerHTML = section.primeiraLinha;
    } else {
        // Se não houver informações de seção associadas ao usuário, limpar as seções
        homeDescricao.innerHTML 
        primeiralinha.innerHTML 
    }
}


// Chamar a função de carregar ao carregar a página
carregar();