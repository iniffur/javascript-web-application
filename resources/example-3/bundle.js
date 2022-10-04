(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.showButtonEl = document.querySelector("#show-message-button");
          this.hideButtonEl = document.querySelector("#hide-message-button");
          this.mainContainerEl = document.querySelector("#main-container");
          this.inputValueEl = document.querySelector("#message-input");
          this.showButtonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButtonEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const message = document.createElement("div");
          message.innerText = this.inputValueEl.value;
          message.id = "message";
          this.mainContainerEl.append(message);
        }
        hideMessage() {
          document.querySelector("div#message").remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
