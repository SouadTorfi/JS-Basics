
var Name=document.querySelector("#name");
var surname=document.querySelector("#surname");
var city=document.querySelector("#city");
var button=document.querySelector("button");

    button.addEventListener("click",function(){


    if (confirm('Are you sure you want to clear this things?')) {
        // Save it!
        Name.value="";
        surname.value="";
        city.value="";
    }
     else {
        // Do nothing
      }
     
    
    });