let btns=document.querySelectorAll("button");
for(let btn of btns){
    btn.addEventListener("click",()=>{
    console.log(`Button ${btn.innerText} is clicked`)
})}