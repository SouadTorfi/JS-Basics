
var text=document.querySelector("#text");
var green=document.querySelector(".green");
var red=document.querySelector(".red");
var blue=document.querySelector(".blue");
function myFunction() {
   
    green.addEventListener("click",function(){
    
      text.style.color = "green";
    })
    red.addEventListener("click",function(){
    
        text.style.color = "red";
      })
      blue.addEventListener("click",function(){
    
        text.style.color = "blue";
      })
}
  myFunction();