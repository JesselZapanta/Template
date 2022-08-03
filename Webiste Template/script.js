const mainContainer = document.querySelector(".container");
const mainContent = document.querySelectorAll(".main-content");
const links = document.querySelectorAll(".link-btn");

const sideBar = document.querySelector(".sidebar");
const buttons = document.querySelector(".nav-btn");

buttons.addEventListener("click", function () {
  sideBar.classList.toggle("active");
  buttons.classList.toggle("active");
});

mainContainer.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    //change the active link
    links.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
      sideBar.classList.remove("active");
      buttons.classList.remove("active");
    });
    // hide the content
    mainContent.forEach(function (content) {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
