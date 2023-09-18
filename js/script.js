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

// active nav
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

// FEEDBACK

const feedbackContainer = document.querySelector(".feedback");
const btns = feedbackContainer.querySelector(".buttons");
const inbox = feedbackContainer.querySelector(".inbox");
const assist = feedbackContainer.querySelector(".assist");
const sent = feedbackContainer.querySelector(".sent");

function feedback(val) {
  btns.classList.add("hidden");

  if (val) {
    inbox.classList.remove("hidden");
  } else {
    assist.classList.remove("hidden");
  }
}

function msgSent(e) {
  e.preventDefault();
  inbox.classList.add("hidden");
  sent.classList.remove("hidden");
}
