import { getToDos, postTodo } from "./unsplash";
import "../sass/style.scss";

//GET Data
getToDos().then((data) => {
  displayTitle(data.slice(0, 3));
});

const createLi = (element) => {
  let li = document.createElement("li");
  document.querySelector(".list ul").appendChild(li);
  li.textContent += element;
};

const displayTitle = (data) => {
  if (Array.isArray(data) && data.length > 0) {
    data.forEach((element, index) => {
      createLi(element.username);
    });
  } else if (data) {
    console.log(data);
    createLi(data);
  }
};

//POST Data

var form = document.querySelector("form");
const formEvent = form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let title = document.getElementById("new-todos__name").value;
  let userId = document.getElementById("new-todos__userId").value;

  const toDo = {
    title,
    userId,
  };
  const addToDo = await postTodo(toDo);
  displayTitle(title);
});
