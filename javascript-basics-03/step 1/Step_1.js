
const image1 = document.querySelector("#image1")

var change_images = function(){
    
    image1.addEventListener('mouseover', function (){
        image1.style.border="3px solid red";
    })
}

var out = function(){
    
    image1.addEventListener('mouseout', function (){
        image1.style.border="none";
    })
}

change_images();
out();