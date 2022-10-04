class MessageView {
  constructor() {
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.mainContainerEl = document.querySelector('#main-container');

    this.showButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const message = document.createElement('div');
    message.innerText = 'This message was displayed by Javascript';
    message.id = 'message';
    this.mainContainerEl.append(message);
  }

  hideMessage(){
    (document.querySelector('div#message')).remove();
  }
}

module.exports = MessageView;