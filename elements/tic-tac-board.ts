import { html } from 'lit-html';
import { customElement } from 'functional-element';
import { Store } from '../state/store';
import './tic-tac-square';

customElement('tic-tac-board', ({ constructing, props, update }) => {
    if (constructing) {
        Store.subscribe(() => {
            update({
                props: {
                    state: Store.getState()
                }
            });
        });

        return {
            props: {
                state: Store.getState()
            }
        };
    }

    return {
        template: html`
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
                <tic-tac-square id="grid1" .fill=${props.state.grid1}></tic-tac-square>
                <tic-tac-square id="grid2" .fill=${props.state.grid2}></tic-tac-square>
                <tic-tac-square id="grid3" .fill=${props.state.grid3}></tic-tac-square>

                <tic-tac-square id="grid4" .fill=${props.state.grid4}></tic-tac-square>
                <tic-tac-square id="grid5" .fill=${props.state.grid5}></tic-tac-square>
                <tic-tac-square id="grid6" .fill=${props.state.grid6}></tic-tac-square>

                <tic-tac-square id="grid7" .fill=${props.state.grid7}></tic-tac-square>
                <tic-tac-square id="grid8" .fill=${props.state.grid8}></tic-tac-square>
                <tic-tac-square id="grid9" .fill=${props.state.grid9}></tic-tac-square>
            </div>
        `
    }
});