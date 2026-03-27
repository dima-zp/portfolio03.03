document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});





	const goTopBtn = document.getElementById("goTopBtn");

// показываем кнопку при прокрутке
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

// плавный скролл вверх
goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});







    

 
