/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Random text'
    buttonEl.click();
    expect(document.querySelector('#message').innerText).toEqual('Random text')
  });

  it('removes the message when button clicked', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();
    const showButtonEl = document.querySelector('#show-message-button');
    showButtonEl.click();
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();
    expect(document.querySelector('#message')).toBeNull();
  })
});