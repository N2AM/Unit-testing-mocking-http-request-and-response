import "regenerator-runtime/runtime";
// import { unsplash } from "./unsplash";
const unsplash = [1, 2, 3, 3, 47];
unsplash.forEach((element) => {
  let li = document.createElement("li");
  document.querySelector(".list ul").append(element, li);
});
