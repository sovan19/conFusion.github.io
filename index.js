//SLIDER CODE
var slideIndex = 0;
showSlides();
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
    dots[slideIndex - 1].className += " active";
}

//MODEL FOR IMAGES
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlidesimg");
   if (n > slides2.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = slides2.length }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  
  slides2[slideIndex2 - 1].style.display = "block";
  
}
//MODEL FOR VIDEO

function openModalvid() {
  document.getElementById("myModalvid").style.display = "block";
}

function closeModalvid() {   
document.getElementById("myModalvid").style.display = "none";

}
jQuery('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-iframe");

jQuery(".close").click(function() {
  // changes the iframe src to prevent playback or stop the video playback in our case
  $('.youtube-iframe').each(function(index) {
    $(this).attr('src', $(this).attr('src'));
    return false;
  });
  
});

var slideIndexvid = 1;
showSlidesvid(slideIndexvid);

function plusSlidesvid(n) {
  showSlidesvid(slideIndexvid += n);
}

function currentSlidevid(n) {
  showSlidesvid(slideIndexvid = n);
}

function showSlidesvid(n) {
  var i;
  var slidesvid = document.getElementsByClassName("mySlidesvid");
  
  if (n > slidesvid.length) { slideIndexvid = 1 }
  if (n < 1) { slideIndexvid = slidesvid.length }
  for (i = 0; i < slidesvid.length; i++) {
    slidesvid[i].style.display = "none";
  }
 
  slidesvid[slideIndexvid - 1].style.display = "block";
  
}

