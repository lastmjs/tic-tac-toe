import { html, customElement } from 'functional-element';
import { Store } from '../state/store';
import './tic-tac-square';

customElement('tic-tac-board', ({ constructing, update, state }) => {
    if (constructing) {
        Store.subscribe(() => {
            update({
                state: Store.getState()
            });
        });

        return {
            state: Store.getState()
        };
    }

    return html`
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
            <tic-tac-square id="grid1" .fill=${state.grid1}></tic-tac-square>
            <tic-tac-square id="grid2" .fill=${state.grid2}></tic-tac-square>
            <tic-tac-square id="grid3" .fill=${state.grid3}></tic-tac-square>

            <tic-tac-square id="grid4" .fill=${state.grid4}></tic-tac-square>
            <tic-tac-square id="grid5" .fill=${state.grid5}></tic-tac-square>
            <tic-tac-square id="grid6" .fill=${state.grid6}></tic-tac-square>

            <tic-tac-square id="grid7" .fill=${state.grid7}></tic-tac-square>
            <tic-tac-square id="grid8" .fill=${state.grid8}></tic-tac-square>
            <tic-tac-square id="grid9" .fill=${state.grid9}></tic-tac-square>
        </div>
    `;
});