import {html, render} from 'lit-html/lib/lit-extended.js';
import './tic-tac-square';

class TicTacBoard extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    squareClick(e: CustomEvent) {
        
    }

    render() {
        render(html`
            <style>
                .grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: repeat(3, 1fr);
                    width: 100vw;
                    height: 100vh;
                    border: 1px solid black;
                }
            </style>

            <div class="grid">
                <tic-tac-square on-square-click="${(e: CustomEvent) => this.squareClick(e)}"></tic-tac-square>
                <tic-tac-square></tic-tac-square>
                <tic-tac-square></tic-tac-square>

                <tic-tac-square></tic-tac-square>
                <tic-tac-square></tic-tac-square>
                <tic-tac-square></tic-tac-square>

                <tic-tac-square></tic-tac-square>
                <tic-tac-square></tic-tac-square>
                <tic-tac-square></tic-tac-square>
            </div>
        `, this);
    }
}

window.customElements.define('tic-tac-board', TicTacBoard);
