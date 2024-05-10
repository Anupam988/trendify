// ------menu----bar-----
var sidemenu= document.querySelector(".nav-list");
var menu=document.querySelector(".fa-bars")
var menu_close=document.querySelector(".fa-xmark")
function openmenu(){
    sidemenu.style.right="0";
    menu.style.display="none"
    menu_close.style.display="block"

}
function closemenu(){
    sidemenu.style.right="-30%";
    menu_close.style.display="none"
    menu.style.display="block"
}

// ------slider------
const slider1= document.querySelector("#glide1");
if (slider1){
    new Glide(slider1, {
        type: "carousel",
        startAt: 0,
        autoplay: 5000,
        gap: 0,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        AnimationTimingFunc: "linear"
    }).mount()
}


// -----immage slide----
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})