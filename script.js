const accordion = document.querySelectorAll(".accordion")
accordion.forEach(function(){
  const btn = document.querySelectorAll(".btn");
  const question = document.querySelectorAll(".mText");
  const para = document.querySelectorAll(".aText");

  btn.forEach(function (button) {
    
    button.addEventListener('click', () => {
      para.forEach(function(item){
        item.classList.toggle("hidden");
      })
      question.forEach(function(item){
        item.classList.add("font-bold")
      })
    })
  })
})