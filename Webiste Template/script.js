const mainContainer = document.querySelector(".container");
const mainContent = document.querySelectorAll(".main-content");
const links = document.querySelectorAll(".link-btn");

mainContainer.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    //change the active link
    links.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide the content
    mainContent.forEach(function (content) {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
