// MENU JS
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', function() {
    // Toggles the 'active' class on the 'nav' element instead of changing display style
    nav.classList.toggle('active');
  });

  // Closes the menu when a link is clicked
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
      // Removes the 'active' class from 'nav' to hide the menu
      nav.classList.remove('active');
    });
  });

  function toggleNav() {
    nav.classList.toggle('active');
  }

  function addHamburgerShadow() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      hamburger.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    } else {
      hamburger.style.boxShadow = '';
    }
  }

  hamburger.addEventListener('click', toggleNav);
  window.addEventListener('resize', addHamburgerShadow);

  // Closes the menu when a link is clicked
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  });

  // Applies the box shadow
  addHamburgerShadow();
});



// HERO JS
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Starts the slideshow
showSlide(currentIndex);
setInterval(nextSlide, 5000); // Changes slide every 5 seconds

// OUR WORKS JS
let index = 0;
const works = document.querySelectorAll(".work");

function showWorks(n) {
  works.forEach((work, i) => {
    work.style.display = "none";
    work.classList.remove("active");
  });

  if (n > works.length - 1) index = 0;
  if (n < 0) index = works.length - 1;
  
  works[index].style.display = "flex";
  works[index].classList.add("active");
}

function moveWork(n) {
  showWorks(index += n);
}

// Initialises the worker by showing the first work
showWorks(index);

// Adds styles for improving contrast and enclosing the text
document.addEventListener("DOMContentLoaded", function() {
  // Selects the content containers within each .work element
  const contentContainers = document.querySelectorAll('.work .content');

  contentContainers.forEach(container => {
    // Adds a semi-transparent background to the text container for better contrast
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    container.style.color = 'white'; // Ensures that text color is white
    container.style.padding = '20px'; // Adds padding inside the container
    container.style.borderRadius = '5px'; // Rounds corners for aesthetics

    // Sets a maximum width and centres the text container
    container.style.maxWidth = '600px'; // Adjusts width as needed
    container.style.margin = '0 auto'; // Centres the container

    // Adds text shadow for better readability
    container.style.textShadow = '1px 1px 3px #000000';
  });

  // Initialises the worker by showing the first work
  showWorks(index);
});

document.addEventListener("DOMContentLoaded", function() {
  // Selects the content containers within each .work element
  const contentContainers = document.querySelectorAll('.work .content');

  // Applies styles to each content container
  contentContainers.forEach(container => {
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; // Semi-transparent black background
    container.style.color = 'white'; // Ensures that text color is white
    container.style.padding = '20px'; // Adds padding inside the container
    container.style.borderRadius = '10px'; // Softer border radius

    // A soft text shadow
    container.style.textShadow = '2px 2px 8px #000';
  });

  // Selects the side buttons
  const sideButtons = document.querySelectorAll('.prev, .next');

  // Applies styles to make the side buttons more visible
  sideButtons.forEach(button => {
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    button.style.borderRadius = '50%'; // Circular buttons
    button.style.width = '40px'; // Sets a fixed width
    button.style.height = '40px'; // Sets a fixed height
    button.style.display = 'flex'; // Uses flexbox for centering the content
    button.style.justifyContent = 'center'; // Centres content horizontally
    button.style.alignItems = 'center'; // Centres content vertically
    button.style.color = '#000'; // Button arrow colour
    button.style.fontSize = '20px'; // Adjusts the size of the arrow if needed
    button.style.textDecoration = 'none'; // Removes underlines from links
    button.style.position = 'absolute'; // Positions them absolutely
    button.style.top = '50%'; // Centres vertically in the container
    button.style.transform = 'translateY(-50%)'; // Offsets the button by half its height to truly centre
    // Applies left and right positioning for prev and next buttons
    if (button.classList.contains('prev')) {
      button.style.left = '10px';
    } else if (button.classList.contains('next')) {
      button.style.right = '10px';
    }
    // Adds a hover effect to improve visibility when mouse is over the buttons
    button.onmouseover = function() {
      this.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    };
    button.onmouseout = function() {
      this.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    };
  });
});



// IMAGE GALLERY JS
document.querySelectorAll('.image-contain img').forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () =>{
  document.querySelector('.popup-image').style.display = 'none';
}

// COMMUNITY JS
var slider_img = document.querySelector('.slider-img');
var images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg', 'slide5.jpg', 'slide6.jpg'];
var i = 0;

function prev(){
  if(i <= 0) i = images.length;
  i--;
  return setImg();
}

function next(){
  if( i >= images.length-1 ) i = -1;
  i++;
  return setImg();
}

function setImg(){
  return slider_img.setAttribute('src', 'img/'+ images[i]);
}

document.querySelectorAll('.image-contain img').forEach(image => {
  image.onclick = () => {
    // Shows the popup
    document.querySelector('.popup-image').style.display = 'block';
    // Sets the source of the popup image
    document.querySelector('.popup-image img').src = image.getAttribute('src');
    // Hides the navigation bar
    document.querySelector('header').style.display = 'none';
  }
});

// Closes the popup when the background is clicked
document.querySelector('.popup-image').onclick = (e) => {
  // Checks if the actual popup image was not clicked
  if (e.target.className === 'popup-image') {
    // Hides the popup
    document.querySelector('.popup-image').style.display = 'none';
    // Shows the nav bar again
    document.querySelector('header').style.display = 'flex';
  }
}

// CONTACT JS
function adjustLayoutForMobile() {
  const contactSection = document.getElementById('contact-section');
  const formSide = document.querySelector('.form-side');
  const graphicSide = document.querySelector('.graphic-side');

  if (window.innerWidth <= 768) {
    contactSection.style.flexDirection = 'column';
    contactSection.style.justifyContent = 'center';
    contactSection.style.textAlign = 'center';

    formSide.style.paddingLeft = '0';
    formSide.style.justifyContent = 'center';

    graphicSide.style.paddingRight = '0';
    graphicSide.style.paddingTop = '5%';
    graphicSide.style.justifyContent = 'center';
    
    const graphicImg = graphicSide.querySelector('img');
    graphicImg.style.width = '80%';
    graphicImg.style.margin = '0 auto';
  } else {
    // Reset styles if the window is scaled over a max-width of 768px
    contactSection.style.flexDirection = 'row';
    contactSection.style.justifyContent = '';
    contactSection.style.textAlign = '';

    formSide.style.paddingLeft = '5%';
    formSide.style.justifyContent = 'flex-start';

    graphicSide.style.paddingRight = '5%';
    graphicSide.style.paddingTop = '0';
    graphicSide.style.justifyContent = 'flex-end';
    
    const graphicImg = graphicSide.querySelector('img');
    graphicImg.style.width = '500px';
    graphicImg.style.margin = '';
  }
}

//Command that listens for window resize events
window.addEventListener('resize', adjustLayoutForMobile);

// Initial check
adjustLayoutForMobile();