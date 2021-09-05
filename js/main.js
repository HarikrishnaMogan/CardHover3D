let cards= document.querySelectorAll(".card");

cards.forEach(card=>{
    card.addEventListener("mousemove",cardhover);
    card.addEventListener("mouseleave",cardleave);
   // card.addEventListener("mouseenter",cardenter);
})

//to get center position of card(x,y);
function cardhover(event)
{   let card = event.currentTarget;//to get current card
    let cardWidth = card.offsetWidth;
    let cardHeight = card.offsetHeight;
    let centerX = card.offsetLeft+(cardWidth/2);
    let centerY = card.offsetTop +(cardHeight/2);
    let mouseX = event.clientX-centerX;
    let mouseY = event.clientY-centerY;
    let xRotation = 30*mouseX/(cardWidth/2);
    let yRotation = -1*30*mouseY/(cardHeight/2);
    card.style.transition = "transform 100ms ease";
    card.style.transform =`perspective(1000px) rotateX(${yRotation}deg)  rotateY(${xRotation}deg)`;
}

function cardleave(event)
{    let card = event.currentTarget;
    card.style.transition = "transform 300ms ease";
    //the set timeout is to avoid flicker
    setTimeout(()=>
    {
        card.style.transform = `perspective(1000px) rotateX(0deg)  rotateY(0deg)`;
    },400);
   
    //settransition();
}
/*
function cardenter()
{
    settransition();
}*/

/*function settransition(event)
{    let card = event.currentTarget;
    card.style.transition = "transform 100ms ease";
   setTimeout(()=>
    {
        card.style.transition = "";
    },1000);
}*/