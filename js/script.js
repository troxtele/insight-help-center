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

const feedbackContainer = [...document.querySelectorAll(".feedback")];
const btns = [...document.querySelectorAll(".buttons")];
const inbox = [...document.querySelectorAll(".inbox")];
const assist = [...document.querySelectorAll(".assist")];
const sent = [...document.querySelectorAll(".sent")];

function feedback(val, index) {
  console.log(btns);
  console.log(btns[index]);
  btns[index].classList.add("invisible");
  if (val) {
    assist[index].classList.remove("invisible");
    assist[index].classList.add("visible");
  } else {
    inbox[index].classList.remove("invisible");
    inbox[index].classList.add("visible");
  }
}

function msgSent(e, i) {
  e.preventDefault();
  inbox[i].classList.add("invisible");
  sent[i].classList.remove("invisible");
  sent[i].classList.add("visible");
}
