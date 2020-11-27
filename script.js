"use strict";

const btnsShowModal = document.querySelectorAll(".show-modal");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const modal = document.querySelector(".modal");
const chocoModal = document.querySelector(".choco-modal");
const friesModal = document.querySelector(".fries-modal");
const teaModal = document.querySelector(".tea-modal");
const overlay = document.querySelector(".overlay");

// Show Modal Windows
for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(btnsShowModal[i]);
  btnsShowModal[i].addEventListener("click", function () {
    if (btnsShowModal[i].classList.contains("choco")) {
      //   console.log("choco");
      chocoModal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    } else if (btnsShowModal[i].classList.contains("fries")) {
      //   console.log("fries");
      friesModal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    } else if (btnsShowModal[i].classList.contains("tea")) {
      //   console.log("tea");
      teaModal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    }
  });
}

// Close Modal Windows
for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener("click", function () {
    if (btnsCloseModal[i].classList.contains("choco")) {
      chocoModal.classList.add("hidden");
      overlay.classList.add("hidden");
    } else if (btnsCloseModal[i].classList.contains("fries")) {
      friesModal.classList.add("hidden");
      overlay.classList.add("hidden");
    } else if (btnsCloseModal[i].classList.contains("tea")) {
      teaModal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
}
for (let i = 0; i < btnsCloseModal.length; i++) {
  overlay.addEventListener("click", function () {
    if (btnsCloseModal[i].classList.contains("choco")) {
      chocoModal.classList.add("hidden");
      overlay.classList.add("hidden");
    } else if (btnsCloseModal[i].classList.contains("fries")) {
      friesModal.classList.add("hidden");
      overlay.classList.add("hidden");
    } else if (btnsCloseModal[i].classList.contains("tea")) {
      teaModal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
}
