const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    navbar.classList.toggle("scrolled",window.scrollY>40);

});
const words = [
    "Frontend Developer",
    "UI/UX Designer",
    "AI Enthusiast",
    "Computer Engineering Student"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if (charIndex < words[wordIndex].length) {

        typing.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1800);

    }

}

function erase(){

    if(charIndex>0){

        typing.textContent=words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        wordIndex++;

        if(wordIndex>=words.length){

            wordIndex=0;

        }

        setTimeout(type,400);

    }

}

type();
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};