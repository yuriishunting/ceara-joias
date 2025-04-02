// URL HOSTNAME

const baseURL = window.location.hostname === 'yuriishunting.github.io/ceara-joias/';
// Dom Caching


// HOME -------------------------------------------------------

// NAV
const navbar = document.querySelector(".navbar")
const nav_home = document.querySelector(".nav-home")
const nav_pecas = document.querySelector(".nav-pecas")


// Main
const productsButton = document.querySelector(".products-button")


// Menu
const menuLogo = document.querySelectorAll(".logo")
const menuButton = document.querySelector(".menu-button")


// Icons
const instagramIcon = document.querySelector(".instagram-icon")
const facebookIcon = document.querySelector(".facebook-icon")
const whatsappIcon = document.querySelector(".whatsapp-icon")

// Products
const brinco_de_gota = document.querySelector(".brinco-de-gota")
const ponto_de_luz = document.querySelector(".ponto-de-luz")
const pulseira_baiana = document.querySelector(".pulseira-baiana")
const prata_grumet = document.querySelector(".prata-grumet")
const conjunto_trevo = document.querySelector(".conjunto-trevo")
// PRODUTOS ------------------------------------------------


// Functions 

function redirecionamentoHome(e){
    e.preventDefault(); 
    
    
    if (window.location.pathname.includes("index.html"))
    {
      window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rolagem suave
      });
    }
    
    else
    window.location.href = baseURL + 'index.html'
}

function redirecionamentoSecaoProdutos(e){
  e.preventDefault();
  if (window.location.pathname.includes("produtos.html"))
    {
      window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rolagem suave
      });
    }

  else
  window.location.href = baseURL + 'produtos.html'
}

function redirecionamentoProduto(produtoPath)
{
  if (window.location.pathname.includes("/produtos/" + produtoPath))
    {
      window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rolagem suave
      });
    }
    
    else
    window.location.href = baseURL + 'produtos/' + produtoPath;
}

// Event Listeners

// Home ------------------------------------------------

// NAV
nav_home.addEventListener('click', redirecionamentoHome)

nav_pecas.addEventListener('click', redirecionamentoSecaoProdutos)



// Main
if(productsButton)
productsButton.addEventListener('click', redirecionamentoSecaoProdutos)



// Menu
menuButton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");  // remove ou coloca a classe show-menu ao clicar
}
)

menuLogo.forEach(function(logo){
  logo.addEventListener('click', redirecionamentoHome);
});



// Icons
instagramIcon.addEventListener('click', () => {
  window.open('https://www.instagram.com/ceara.joias/', '_blank');
});
facebookIcon.addEventListener('click', () => {
  window.open('https://www.instagram.com/ceara.joias/', '_blank');
});
whatsappIcon.addEventListener('click', () => {
  window.open('https://api.whatsapp.com/send/?phone=5547988504077&text&type=phone_number&app_absent=0', '_blank');
});



// Produto --------------------------------
if(brinco_de_gota)
brinco_de_gota.addEventListener('click',  () => redirecionamentoProduto('brinco-de-gota.html'))

if(ponto_de_luz)
  ponto_de_luz.addEventListener('click',  () => redirecionamentoProduto('ponto-de-luz.html'))

if(prata_grumet)
  prata_grumet.addEventListener('click',  () => redirecionamentoProduto('prata-grumet.html'))

if(pulseira_baiana)
  pulseira_baiana.addEventListener('click',  () => redirecionamentoProduto('pulseira-baiana.html'))

if(conjunto_trevo)
  conjunto_trevo.addEventListener('click',  () => redirecionamentoProduto('conjunto-trevo.html'))