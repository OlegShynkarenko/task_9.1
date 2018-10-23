import { ToDoMainComponent } from "./components/ToDoMainComponent";

const root = document.getElementById("root");

const toDo = new ToDoMainComponent(root);
toDo.mount();
window.toDo = toDo;
