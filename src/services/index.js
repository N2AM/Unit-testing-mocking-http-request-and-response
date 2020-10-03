import { getToDos, postTodo } from "./unsplash";
import "../sass/style.scss";

//GET Data
getToDos().then((data) => {
  displayTitle(data.slice(0, 3));
});

const displayTitle = (data) => {
  data.forEach((element, index) => {
    let li = document.createElement("li");
    document.querySelector(".list ul").append(li);
    document.querySelectorAll(".list ul li")[index].textContent +=
      element.username;
  });
};

//POST Data

const addToDo = () => {
  let form = document.querySelector("form");
};
