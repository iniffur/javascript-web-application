class MessageView {
  constructor() {
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.inputValueEl = document.querySelector('#message-input')

    this.showButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    const message = document.createElement('div');
    message.innerText = this.inputValueEl.value;
    message.id = 'message';
    this.mainContainerEl.append(message);
  }

  hideMessage(){
    (document.querySelector('div#message')).remove();
  }
}

module.exports = MessageView;