import "regenerator-runtime/runtime";
import { unsplash } from "./unsplash";
import "../sass/style.scss";

unsplash.forEach((element, index) => {
  let li = document.createElement("li");
  document.querySelector(".list ul").append(li);
  document.querySelectorAll(".list ul li")[index].textContent += element;
});
