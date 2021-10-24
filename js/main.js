
// ------------------Menu burger------------------// 


const menuBtn = document.querySelector('.menu-btn');
const root = document.querySelector(":root");
const menuNav = document.querySelector('.menu-nav');
const logo = document.querySelector('#logo');
const userLogo = document.querySelector('.fa-user-circle');
const shoppingCart = document.querySelector('.fa-shopping-cart');
const menuTitle = document.querySelectorAll('.menu-title');

let menuOpen = false;

let path = window.location.pathname;
let array = path.split('/');
array.shift(); 
let logoPath = "img/";


if(menuBtn)
{
    menuBtn.addEventListener('click', () => {

        if(!menuOpen) {
            menuTitle.forEach(title => {
                title.classList.toggle('span-color');
            })

            userLogo.classList.toggle('shop-color');
            shoppingCart.classList.toggle('shop-color');
    
            logo.setAttribute('src',logoPath + 'logoblanc1.png')
    
            menuBtn.classList.add('open');
    
            root.style.setProperty("--pseudo-backgroundcolor", 'black');
    
            menuNav.classList.remove('fade-slow');
            menuNav.classList.add('show-slow')
            menuNav.addEventListener('animationend',()=>{
                menuNav.style.transform = "translateY(0)"
            })
            
            menuOpen = true;
    
        } else {
            menuTitle.forEach(title => {
                title.classList.toggle('span-color');
            })

            userLogo.classList.toggle('shop-color');
            shoppingCart.classList.toggle('shop-color');
            
            logo.setAttribute('src', logoPath + 'logoblack1.png')
    
            root.style.setProperty("--pseudo-backgroundcolor", 'white');
    
            menuBtn.classList.remove('open');
    
            menuNav.classList.remove('show-slow');
            menuNav.classList.add('fade-slow');
            menuNav.addEventListener('animationend',()=>{
                menuNav.style.transform = "translateY(-100%)"
            })
            menuOpen = false;
        }
    });
}
 

// ------------------Home Intro------------------// 

const visitBlock = document.querySelector('.visit');
const visitImg = document.querySelector('.visit-img');


window.addEventListener('scroll',function(){

    

    if(array[array.length - 1] != "index.php")
    {
        logoPath = "../../img/";
    }
    
    if(logo && menuBtn)
    {
        //Menu burger and logo background
    if(this.window.pageYOffset > 10 && !menuOpen)
    {
        logo.setAttribute('src', logoPath + 'logoblanc1.png');
        menuBtn.classList.add('bg-burger');
    }
    else if(this.window.pageYOffset < 10 && !menuOpen){
        menuBtn.classList.remove('bg-burger');
        logo.setAttribute('src', logoPath + 'logoblack1.png');
   
    }

    if(this.window.pageYOffset > 100 || this.window.pageYOffset < 101)
    {
        //home-intro translate
        if(visitImg && visitBlock )
        {
            this.setTimeout(()=>{
                visitImg.classList.add('slide-up')
            },150)
            visitBlock.classList.add('slide-up');
            
            visitBlock.addEventListener('animationend',()=>{
                visitBlock.classList.add('transform');
            })
            visitImg.addEventListener('animationend',()=>{
                visitImg.classList.add('transform');
            })
        }
        
    }
    } 
})


let orderForm = new OrderForm();
orderForm.run();

let editModal = new EditProductModal();
editModal.run();

let addModal = new AddProductModal();
addModal.run();

let checkoutModal = new CheckoutModal();
checkoutModal.run();

let orderAdmin = new OrderAdmin();
orderAdmin.run();

let searchBar = new SearchBar();
searchBar.run();


window.addEventListener("resize",function(){console.log(window.innerWidth)})

