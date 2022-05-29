var currSlide = 1;

showSlides(currSlide);

function getSlide(n) {
  showSlides((currSlide += n));
}

function displayedSlide(n) {
  showSlides((currSlide = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("large-pic");
  var slideIndicator = document.getElementsByClassName("dot");
  if (n > slides.length) {
    currSlide = 1;
  }
  if (n < 1) currSlide = slides.length;

  for (i = 0; i < slides.length; i++) slides[i].style.display = "none";

  for (i = 0; i < slideIndicator.length; i++) {
    slideIndicator[i].className = slideIndicator[i].className.replace(
      " active",
      ""
    );
  }
  slides[currSlide - 1].style.display = "block";
  slideIndicator[currSlide - 1].className += " active";
}
