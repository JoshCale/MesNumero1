const openBtn=document.getElementById("openBtn");
const continueBtn=document.getElementById("continueBtn");
const message=document.getElementById("message");
const story=document.getElementById("story");

openBtn.addEventListener("click",()=>{
  openBtn.style.display="none";
  message.classList.remove("hidden");
});
continueBtn.addEventListener("click",()=>{
  story.classList.remove("hidden");
  story.scrollIntoView({behavior:"smooth"});
});
