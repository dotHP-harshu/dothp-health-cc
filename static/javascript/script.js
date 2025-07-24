// Script for navbar -----------------------------------------------------------------
const hamburgerBtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const icons = document.getElementById("icons");
const mobileMenu = document.getElementById("mobile-menu");
let isShowingMenu = false;

icons.addEventListener("click", () => {
  if (!isShowingMenu) {
    mobileMenu.classList.add("flex");
    mobileMenu.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
    hamburgerBtn.classList.add("hidden");
    isShowingMenu = true;
  } else {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    closeBtn.classList.add("hidden");
    hamburgerBtn.classList.remove("hidden");
    isShowingMenu = false;
  }
});
// Script for navbar -----------------------------------------------------------------

// Logic for home page -----------------------------------------------------------------
// const inputBox = document.getElementById("input-box");
// const addBtn = document.getElementById("add-button");
// const symptomContainer = document.getElementById("symptom-container");

// const inputedSymptoms = [];

// addBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let inputedValue = inputBox.value;
//   if (inputedValue === "") return;
//   let symptomTag = document.createElement("div");
//   symptomTag.classList.add(
//     "symptom-tag",
//     "w-fit",
//     "flex",
//     "justify-center",
//     "items-center",
//     "gap-1",
//     "px-2",
//     "py-1",
//     "rounded-sm",
//     "bg-top-surface-dark"
//   );
//   symptomTag.innerHTML = `${inputedValue} `;
//   let crossBtn = document.createElement("span");
//   crossBtn.innerHTML = `<img
//                 src="../static/images/close.svg"
//                 alt="cut"
//                 class="cursor-pointer w-6 h-auto"
//             />`;
//   crossBtn.addEventListener("click", () => {
//     symptomTag.remove();
//     inputedSymptoms.splice(inputedSymptoms.indexOf(inputedValue), 1);
//   });
//   symptomTag.appendChild(crossBtn);
//   symptomContainer.appendChild(symptomTag);
//   inputedSymptoms.push(inputedValue);
//   inputBox.value = "";
// });
