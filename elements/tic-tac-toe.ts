import { html } from 'lit-html';
import { customElement } from 'functional-element';
import './tic-tac-board';

customElement('tic-tac-toe', () => {
    return {
        template: html`
            <tic-tac-board></tic-tac-board>
        `
    };
});
