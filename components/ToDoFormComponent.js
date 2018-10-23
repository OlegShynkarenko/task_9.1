export class ToDoFormComponent {
  constructor(mountPoint, addItem) {
    this.mountPoint = mountPoint;
    this.addItem = addItem;
    //this.listStorage = [];
  }

  querySelectors() {
    this.inputField = this.mountPoint.querySelector(".to-do__form-text");
    this.addButton = this.mountPoint.querySelector(".to-do__form-button");
  }

  addEventListeners() {
    this.addButton.addEventListener("click", this.handleAddItem.bind(this));
  }

  handleAddItem() {
    const newItemValue = this.inputField.value;
    this.addItem(newItemValue);
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
    this.addEventListeners();
  }

  render() {
    return `
         <form class="to-do__form">
          <input type="text" class="to-do__form-text">
          <button type="button" class="to-do__form-button">Add item</button>  
        </form>      
    `;
  }
}
