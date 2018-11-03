import { html, customElement } from 'functional-element';
import './tic-tac-board';

customElement('tic-tac-toe', () => {
    return html`
        <tic-tac-board></tic-tac-board>
    `;
});
