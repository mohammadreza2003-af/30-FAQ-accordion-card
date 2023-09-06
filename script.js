"use strict";

const headingSecondary = document.querySelectorAll(".heading-secondary");
const subDis = document.querySelectorAll(".sub-dis");

headingSecondary.forEach((el) => {
  el.addEventListener("click", function () {
    el.nextElementSibling.classList.toggle("ac-hide");
  });
});
