/**
 * @jest-environment jsdom
 */

// file: paragraphView.test.js


const fs = require('fs');
const ParagraphView = require('./paragraphView');

describe('Paragraph view', () => {
    it('displays new paragraph', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const view = new ParagraphView();

        view.display('Change Paragraph');
        const paragraphEl = document.querySelector('p')
        expect(paragraphEl.textContent).toBe('Change Paragraph')
    })
})