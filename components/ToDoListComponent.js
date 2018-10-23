export class ToDoListComponent {
  constructor(mountPoint, listStorage) {
    this.mountPoint = mountPoint;
    this.listStorage = listStorage;
  }

  querySelectors() {
    this.listContainer = this.mountPoint.querySelector(".to-do__list");
    this.listStorage.forEach(i => {
      this.listContainer.innerHTML =
        this.listContainer.innerHTML + `<li>${i}</li>`;
    });
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
  }

  render() {
    return `
      <ol class="to-do__list"></ol>
  `;
  }
}
