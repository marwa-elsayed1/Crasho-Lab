let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}



// First Part of Slider
var secondShrinked = document.getElementById("second-shrinked");
var firstShrinked = document.getElementById("first-shrinked");
var thirdShrinked = document.getElementById("third-shrinked");

secondShrinked.addEventListener("mouseover", HoveringSlider);
secondShrinked.addEventListener("mouseout", EndHoveringSlider);
thirdShrinked.addEventListener("mouseover", HoveringFirstFromThird);
thirdShrinked.addEventListener("mouseout", EndingHoveringFirstFromThird);


function HoveringSlider(){

  firstShrinked.style.backgroundImage = 'url("./images/un-colored1.png")';
  firstShrinked.style.width = "23%";

}

function EndHoveringSlider(){
  firstShrinked.style.backgroundImage = 'url("./images/colored1.png")';
  firstShrinked.style.width = "26%";

}

function HoveringFirstFromThird(){
  firstShrinked.style.backgroundImage = 'url("./images/un-colored1.png")';
  firstShrinked.style.width = "23%";
}

function EndingHoveringFirstFromThird(){
  firstShrinked.style.backgroundImage = 'url("./images/colored1.png")';
  firstShrinked.style.width = "26%";
}

// Second Part of Slider

var SecondNewService = document.getElementById("second-new-service");
var FirstNewService = document.getElementById("first-new-service");
var ThirdNewService = document.getElementById("third-new-service");

SecondNewService.addEventListener("mouseover", NewServiceHoveringSlider);
SecondNewService.addEventListener("mouseout", EndNewServiceHoveringSlider);
ThirdNewService.addEventListener("mouseover", NewServiceHoveringFirstFromThird);
ThirdNewService.addEventListener("mouseout", EndingNewServiceHoveringFirstFromThird);


function NewServiceHoveringSlider(){

  FirstNewService.style.backgroundImage = 'url("./images/un-colored4.png")';
  FirstNewService.style.width = "23%";

}

function EndNewServiceHoveringSlider(){
  FirstNewService.style.backgroundImage = 'url("./images/colored4.png")';
  FirstNewService.style.width = "26%";

}

function NewServiceHoveringFirstFromThird(){
  FirstNewService.style.backgroundImage = 'url("./images/un-colored4.png")';
  FirstNewService.style.width = "23%";
}

function EndingNewServiceHoveringFirstFromThird(){
  FirstNewService.style.backgroundImage = 'url("./images/colored4.png")';
  FirstNewService.style.width = "26%";
}


// Third Part of Slider

var SecondNewerService = document.getElementById("second-newer-service");
var FirstNewerService = document.getElementById("first-newer-service");
var ThirdNewerService = document.getElementById("third-newer-service");

SecondNewerService.addEventListener("mouseover", NewerServiceHoveringSlider);
SecondNewerService.addEventListener("mouseout", EndNewerServiceHoveringSlider);
ThirdNewerService.addEventListener("mouseover", NewerServiceHoveringFirstFromThird);
ThirdNewerService.addEventListener("mouseout", EndingNewerServiceHoveringFirstFromThird);


function NewerServiceHoveringSlider(){

  FirstNewerService.style.backgroundImage = 'url("./images/un-colored7.png")';
  FirstNewerService.style.width = "23%";

}

function EndNewerServiceHoveringSlider(){
  FirstNewerService.style.backgroundImage = 'url("./images/colored7.png")';
  FirstNewerService.style.width = "26%";

}

function NewerServiceHoveringFirstFromThird(){
  FirstNewerService.style.backgroundImage = 'url("./images/un-colored7.png")';
  FirstNewerService.style.width = "23%";
}

function EndingNewerServiceHoveringFirstFromThird(){
  FirstNewerService.style.backgroundImage = 'url("./images/colored7.png")';
  FirstNewerService.style.width = "26%";
}