/**
 * Untuk berpindah dari satu daftar menu ke daftar lainnya
 * dari menu yang ada disidebar.
 *
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 */
// const sidebar = document.querySelector(".sidebar-body");
const navbar = document.querySelector("#navbar");
const btnList = document.querySelectorAll(".button-toggle");
let btnParent = [];
let target = [];

btnList.forEach((btn, key) => {
  btnParent.push(btn.parentElement);
  target.push(btn.dataset.target);

  btn.onclick = function () {
    btnParent.filter((item, index) => {
      if (key == index) {
        toggleButton(item, item.children[1]).then((response) => {
          changeIcon(this.children[1], response);
        });
      } else {
        if (item.classList.contains("active")) {
          toggleButton(item, item.children[1]).then((response) => {
            changeIcon(item.children[0].children[1], response);
          });
        }
      }
    });
  };
});

async function toggleButton(parent, target) {
  if (
    !parent.classList.contains("active") &&
    target.classList.contains("collapse")
  ) {
    parent.classList.add("active");
    target.classList.remove("collapse");

    return true;
  } else {
    parent.classList.remove("active");
    target.classList.add("collapse");

    return false;
  }
}

async function changeIcon(element, prepend) {
  return (element.innerHTML = prepend
    ? `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg>
    `
    : `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    `);
}
