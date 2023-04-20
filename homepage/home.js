//faq accordion
let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.querySelector(".panel");
    if (panel.classList.contains("hidden")) {
      panel.classList.remove("hidden");
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.marginTop = 20 + "px";
    } else {
      panel.classList.add("hidden");
      panel.style.maxHeight = null;
    }
  });
}

function myFunction() {
  var x = document.getElementById("navbar-js");
  if (x.className === "nav-container") {
    x.className += " responsive";
  } else {
    x.className = "nav-container";
  }
}
