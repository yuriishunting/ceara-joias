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
    
    
    else if(window.location.pathname.includes("produtos.html"))
    {
      window.location.href = 'index.html';
    }
    
    
    else
    window.location.href = 'index.html';
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
  window.location.href = 'produtos.html';
}

function redirecionamentoProduto(e, produtoPath)
{
  e.preventDefault();
  if (window.location.pathname.includes("/produtos/" + produtoPath))
    {
      window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rolagem suave
      });
    }
    
    else if(window.location.pathname.includes("/produtos/produtos.html"))
      {
        window.location.assign("/produtos/" + produtoPath)
      }
    
    else
    window.location.assign("produtos/" + produtoPath);
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
menuButton.addEventListener("click", () => {
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
  window.open('https://api.whatsapp.com/send/?phone=5547999169944&text&type=phone_number&app_absent=0', '_blank');
});



// Produto --------------------------------

