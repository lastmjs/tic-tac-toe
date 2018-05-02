import {html, render} from 'lit-html/lib/lit-extended.js';
import './tic-tac-board';

class TicTacToe extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        render(html`
            <tic-tac-board></tic-tac-board>
        `, this);
    }
}

window.customElements.define('tic-tac-toe', TicTacToe);
