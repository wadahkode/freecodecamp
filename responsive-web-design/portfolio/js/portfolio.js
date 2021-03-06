const hero = document.querySelector(".hero");
const blinkText = hero.querySelector(".fullName");

let result = [];

for (let i = 0; i <= blinkText.innerText.length; i++) {
  result.push(
    `<span class="blink-text">${blinkText.innerText.slice(i, i + 1)}</span>`
  );
}

async function blink() {
  blinkText.innerHTML = "";

  result.filter((value, index) => {
    setTimeout(() => {
      blinkText.innerHTML += value;
    }, index * 160);
  });

  setTimeout(() => {
    blinkText.innerHTML = "";
    blink();
  }, 10000);
}

blink();

const navbarToggle = document.querySelector(".navbar-toggle");
const navbar = document.querySelector(".navbar");

navbarToggle.onclick = function () {
  let target = document.querySelector(this.dataset.target);

  return target.classList.toggle("collapse");
};

window.addEventListener("scroll", function () {
  if (this.scrollY >= 600) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
});
