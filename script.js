let mainText = document.querySelector(".mText");
let addText = document.querySelector(".aText");
let downBtn = document.querySelector(".btn");
console.log(downBtn)
downBtn.addEventListener('click', ()=>{
    for(let i = 0; i < addText.length; i++) {
        addText[i].classList.toggle("hidden")
    };
})
console.log(mainText.innerHTML);