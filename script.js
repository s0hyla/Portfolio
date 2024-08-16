function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent!");
  });
