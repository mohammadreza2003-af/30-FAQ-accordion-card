"use strict";

const headingSecondary = document.querySelectorAll(".heading-secondary");
const subDis = document.querySelectorAll(".sub-dis");
const arrow = document.querySelectorAll(".arrow");

headingSecondary.forEach((el) => {
  el.addEventListener("click", function () {
    el.nextElementSibling.classList.toggle("ac-hide");
    el.nextElementSibling.classList.toggle("sub-dis-ac");
    el.closest(".item").children[2].classList.toggle("arrow-ac");
  });
});
