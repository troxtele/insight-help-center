const contents = [...document.querySelectorAll(".left-content")];
const options = document.querySelector(".options ul");

const lists = [...document.querySelectorAll(".sidenav a")];

contents.map((content) => {
  content.querySelector(".label").addEventListener("click", () => {
    const options = content.querySelector(".options ul");
    content.querySelector(".arrow svg").classList.toggle("rotate");
    options.classList.toggle("heightwidth");
  });
});

// Active option
lists.map((list) =>
  list.addEventListener("click", () => {
    lists.forEach((list) => list.classList.remove("active"));
    list.classList.add("active");
  })
);
