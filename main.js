import gsap from "gsap";

const text = document.querySelector(".text");
const split = (mots)=>{
  const txt = mots.textContent;
  const array = txt.split('');
  mots.textContent = "";
  for(let i = 0; i < array.length; i++){
    const span = document.createElement("span");
    span.textContent = txt[i];
    text.appendChild(span);
  }
}

split(text);

gsap.timeline().from('span', {
  opacity: 0,
  stagger: 0.45,
})