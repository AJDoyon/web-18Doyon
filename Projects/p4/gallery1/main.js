$(document).ready(function() {
    // run function on initial page load
    showDivs();

    plusDivs();

    demoFunction();
    // vPosH1();
    console.log('click');
    // run function on resize of the window
    $(window).resize(function() {
      // vPosH1();
    });
 
    // run function on scroll
    $(window).scroll(function() {


 
    });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  });
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
  });  
}