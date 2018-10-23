import { ToDoFormComponent } from "./ToDoFormComponent";
import { ToDoListComponent } from "./ToDoListComponent";

export class ToDoMainComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
    this.listStorage = [];
  }

  addItem(newItemValue) {
    this.listStorage.push(newItemValue);
    console.log(this.listStorage);
    this.mount();
  }

  querySelectors() {
    this.toDoList = this.mountPoint.querySelector(".to-do__list-container");
    this.formContainer = this.mountPoint.querySelector(".to-do__add-form");
  }

  mountChildren() {
    this.listComponent = new ToDoListComponent(this.toDoList, this.listStorage);
    this.listComponent.mount();
    this.formComponent = new ToDoFormComponent(
      this.formContainer,
      this.addItem.bind(this)
    );
    this.formComponent.mount();
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
    this.mountChildren();
  }

  render() {
    return `
       <div class="to-do__list-container"></div>
       <div class="to-do__add-form"></div>       
    `;
  }
}

/*addEventListeners() {
    this.formComponent.addButton.addEventListener('click', () => {
      const newItemValue = this.formComponent.inputField.value;
      const newItem = this.listComponent.toDoList.createElement('li');
      newItem.innerText = newItemValue;
      this.listComponent.toDoList.appendChild(newItem);
    })
  }*/

/*addEventListeners() {
  this.formComponent.addButton.addEventListener('click', this.handleAddItem());
}

handleAddItem() {
  const newItemValue = this.formComponent.inputField.value;
  const newItem = this.listComponent.toDoList.createElement('li');
  newItem.innerText = newItemValue;
  this.listComponent.toDoList.appendChild(newItem);
}*/
