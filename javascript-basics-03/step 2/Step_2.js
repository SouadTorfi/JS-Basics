
var texte=document.querySelector("#texte");
var show=document.querySelector("#show");
var hide=document.querySelector("#hide");
function myFunction() {
   
    show.addEventListener("click",function(){
    
      texte.style.display = "block";
    })
      hide.addEventListener("click",function(){
        texte.style.display="none";
    })
}
  myFunction();