function slideshow() {
    const images = ["./assets/imageFloder/slide.png", "./assets/imageFloder/slider3.png"]; // Add more image URLs if needed
    let currentIndex = 0;
    const imgElement = document.querySelector(".slide-image");
  
    function showImage() {
      imgElement.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Change image every 3 seconds (adjust the duration as needed)
    setInterval(showImage, 3000);
  }
  
  // Call the slideshow function after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    slideshow();
  });
  // JavaScript to handle the drawer toggle
document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.querySelector(".drawer");
    const toggleBtn = document.getElementById("toggle-btn");
    const closeBtn=document.getElementById("close-drawer-btn")
  
    const computedStyle = window.getComputedStyle(drawer);
    const leftValue = computedStyle.getPropertyValue("left");

    // Function to toggle the drawer
    function toggleDrawer() {
      setTimeout(() => {
    const computedStyle = window.getComputedStyle(drawer);
    const leftValue = computedStyle.getPropertyValue("left");

    if (leftValue === "-300px") {
      drawer.style.left = "0";
    } else {
      drawer.style.left = "-300px";
    }
  }, 100); 
    }
  
    // Event listener for the toggle button
    toggleBtn.addEventListener("click", toggleDrawer);
    closeBtn.addEventListener("click", toggleDrawer);
  });
  
