function myFunction(event) {
  event.preventDefault();
  const menu= document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}

function closeMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.remove("active");

}
