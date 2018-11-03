import { html } from 'lit-html';
import { customElement } from 'functional-element';
import { Store } from '../state/store';

customElement('tic-tac-square', ({ constructing, props, element }) => {
    if (constructing) {
        return {
            props: {
                fill: ''
            }
        };
    }

    return {
        template: html`
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

            <div class="square" @click="${() => squareClick(element.id)}">${props.fill}</div>
        `
    };
});

function squareClick(id: string) {
    Store.dispatch({
        type: 'SQUARE_CLICK',
        grid: id
    });
}