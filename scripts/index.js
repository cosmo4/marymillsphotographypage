let newDate = new Date()
document.getElementById("copyright").innerText = newDate.getFullYear();

// Function to handle the screen width change
async function handleScreenWidthChange() {
    var screenWidth = await window.innerWidth || await document.documentElement.clientWidth;
    var updatedScreenWidth = screenWidth / 1.75;
    
    document.documentElement.style.setProperty('--screen-width', updatedScreenWidth + 'px');
  }
  
  // Add event listener for the 'resize' event
  window.addEventListener('resize', handleScreenWidthChange);
  
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
// Images will scroll automatically
function autoNext() {
  plusDivs(1);
}
function startAutoNext() {
  intervalId = setInterval(autoNext, 5000);
}

function stopAutoNext() {
  clearInterval(intervalId);
}
// initially start auto scroll
startAutoNext();

const herobanner = document.querySelector('.herobanner');

herobanner.addEventListener('mouseenter', function() {
  stopAutoNext();
});

herobanner.addEventListener('mouseleave', function() {
  startAutoNext();
});

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("heroimg");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;
    x[i].classList.remove('current', 'next');
  }
  x[slideIndex - 1].style.opacity = 1;
  x[slideIndex - 1].classList.add('current');
  if (slideIndex < x.length) {
    x[slideIndex].classList.add('next');
  } else {
    x[0].classList.add('next');
  }
}