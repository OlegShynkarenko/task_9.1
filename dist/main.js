!(function(t) {
  var e = {};
  function o(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.m = t),
    (o.c = e),
    (o.d = function(t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          o.d(
            n,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "dist/"),
    o((o.s = 0));
})([
  function(t, e, o) {
    "use strict";
    o.r(e);
    class n {
      constructor(t, e) {
        (this.mountPoint = t), (this.addItem = e);
      }
      querySelectors() {
        (this.inputField = this.mountPoint.querySelector(".to-do__form-text")),
          (this.addButton = this.mountPoint.querySelector(
            ".to-do__form-button"
          ));
      }
      addEventListeners() {
        this.addButton.addEventListener("click", this.handleAddItem.bind(this));
      }
      handleAddItem() {
        const t = this.inputField.value;
        this.addItem(t);
      }
      mount() {
        (this.mountPoint.innerHTML = this.render()),
          this.querySelectors(),
          this.addEventListeners();
      }
      render() {
        return '\n         <form class="to-do__form">\n          <input type="text" class="to-do__form-text">\n          <button type="button" class="to-do__form-button">Add item</button>  \n        </form>      \n    ';
      }
    }
    class i {
      constructor(t, e) {
        (this.mountPoint = t), (this.listStorage = e);
      }
      querySelectors() {
        (this.listContainer = this.mountPoint.querySelector(".to-do__list")),
          this.listStorage.forEach(t => {
            this.listContainer.innerHTML =
              this.listContainer.innerHTML + `<li>${t}</li>`;
          });
      }
      mount() {
        (this.mountPoint.innerHTML = this.render()), this.querySelectors();
      }
      render() {
        return '\n      <ol class="to-do__list"></ol>\n  ';
      }
    }
    const r = new class {
      constructor(t) {
        (this.mountPoint = t), (this.listStorage = []);
      }
      addItem(t) {
        this.listStorage.push(t), console.log(this.listStorage), this.mount();
      }
      querySelectors() {
        (this.toDoList = this.mountPoint.querySelector(
          ".to-do__list-container"
        )),
          (this.formContainer = this.mountPoint.querySelector(
            ".to-do__add-form"
          ));
      }
      mountChildren() {
        (this.listComponent = new i(this.toDoList, this.listStorage)),
          this.listComponent.mount(),
          (this.formComponent = new n(
            this.formContainer,
            this.addItem.bind(this)
          )),
          this.formComponent.mount();
      }
      mount() {
        (this.mountPoint.innerHTML = this.render()),
          this.querySelectors(),
          this.mountChildren();
      }
      render() {
        return '\n       <div class="to-do__list-container"></div>\n       <div class="to-do__add-form"></div>       \n    ';
      }
    }(document.getElementById("root"));
    r.mount(), (window.toDo = r);
  }
]);
//# sourceMappingURL=main.js.map
