/**
 * @jest-environment jsdom
 */

// file: titleView.test.js

const fs = require('fs');
const TitleView = require('./titleView');

describe('Page view', () => {
  it('displays new title', () => {
    // 1. Arrange - load the HTML so Jest can build its own DOM tree 
    // and instantiate our View class
    document.body.innerHTML = fs.readFileSync('./index.html');    
    const view = new TitleView();

    // 2. Act - ask the view to display the new title (the DOM tree will change)
    view.display('This is my new title!');

    // 3. Assert - using querySelector,
    // we get the DOM element and assert its content changed
    const titleEl = document.querySelector('#title');
    expect(titleEl.innerText).toBe('This is my new title!')
  });
});