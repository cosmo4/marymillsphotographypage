let newDate = new Date()
document.getElementById("copyright").innerText = newDate.getFullYear();

// Function to handle the screen width change
function handleScreenWidthChange() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    var updatedScreenWidth = screenWidth / 1.75;
    
    document.documentElement.style.setProperty('--screen-width', updatedScreenWidth + 'px');
  }
  
  // Add event listener for the 'resize' event
  window.addEventListener('resize', handleScreenWidthChange);
  
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("heroimg");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}