import {html, render} from 'lit-html/lib/lit-extended.js';

class TicTacSquare extends HTMLElement {
    _fill: 'x' | 'o' | '';

    constructor() {
        super();

        this.fill = '';

        this.render();
    }

    get fill() {
        return this._fill;
    }

    set fill(val) {
        this._fill = val;
        this.render();
    }

    squareClick() {
        this.dispatchEvent(new CustomEvent('square-click'));
    }

    render() {
        render(html`
            <style>
                .square {
                    height: 100%;
                    width: 100%;
                    border: 1px solid black;
                    cursor: pointer;
                    font-size: 10vw;
                    text-align: center;
                    vertical-align: middle;
                }

                .square:hover {
                    background-color: rgba(0, 0, 0, .1);
                }
            </style>

            <div class="square" onclick="${() => this.squareClick()}">${this.fill}</div>

        `, this);
    }
}

window.customElements.define('tic-tac-square', TicTacSquare);
