// file: titleView.js

class TitleView {
  display(newTitle) {
    document.querySelector('#title').innerText = newTitle;
  }
}

module.exports = TitleView