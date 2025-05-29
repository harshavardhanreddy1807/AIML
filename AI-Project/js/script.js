document.querySelector("form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
});

console.log("Website Loaded Successfully");

// Hide center popup after 4 seconds
setTimeout(() => {
  const popup = document.getElementById('popup-center');
  if (popup) {
    popup.classList.add('fade-out');
  }
}, 2000);
