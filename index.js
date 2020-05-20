
var sub =  document.querySelectorAll(".sub");
var explorerListElement =  document.querySelectorAll(".explorerListElement");

for(var i = 0; i < sub.length; i++){
  sub[i].classList.toggle("invisible");
}

for(var i = 0; i < explorerListElement.length; i++){
  explorerListElement[i].addEventListener("click", handleClick);
}

function handleClick(){
  console.log(this);
  console.log(this.parentElement.lastElementChild);
  this.parentElement.lastElementChild.classList.toggle("invisible");
}

document.querySelector("#showAll").addEventListener("click", showAll);
document.querySelector("#closeAll").addEventListener("click", closeAll);

function showAll(){
  for(var i = 0; i < sub.length; i++){
    sub[i].classList.remove("invisible");
  }
}

function closeAll(){
  for(var i = 0; i < sub.length; i++){
    sub[i].classList.add("invisible");
  }
}
