let mainText = document.querySelector(".mText");
let addText = document.querySelector(".aText");
let downBtn = document.querySelector(".btn");
console.log(downBtn)
function show() {
    for(let i = 0; i < addText.length; i++) {
            addText[i].classList.toggle(".hidden")
    }
}
