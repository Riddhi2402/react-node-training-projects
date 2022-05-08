const images = document.querySelectorAll(".slideshow");

var counter = 0;

images[counter].style.display = "block";

setInterval("nextImage()",2000);

function nextImage(){

    images[counter].style.display = "none";
    counter = (counter + 1) % images.length;

    images[counter].style.display = "block";

}

