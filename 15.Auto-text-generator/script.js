const typeTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector(".cursor");
// console.log(typeTextSpan);
// console.log(cursor);

let words = ['Awesome', 'Fun', 'Cool', 'Life', 'Famous', 'World']
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", ()=>{
    if(words.length) {
        setTimeout(type, newLetterDelay);
    }
});

function type() {
    if (charIndex < words[index].length){
        typeTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);

    }else{
        setTimeout(erase, newLetterDelay);
    }
}
function erase(){
    if (charIndex > 0){
        typeTextSpan.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }else{
        index++;
        if (index >= words.length){
            index = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}