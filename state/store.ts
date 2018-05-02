import './process';
import {createStore} from 'redux';

const InitialState = {
    grid1: '',
    grid2: '',
    grid3: '',
    grid4: '',
    grid5: '',
    grid6: '',
    grid7: '',
    grid8: '',
    grid9: '',
    currentPlayer: 'player1'
};

const RootReducer = (state=InitialState, action: any) => {
    if (action.type === 'SQUARE_CLICK') {
        const gridIsBlank = state[action.grid] === '';

        if (gridIsBlank) {
            const nextPlayer = state.currentPlayer === 'player1' ? 'player2' : 'player1';
            const gridShape = state.currentPlayer === 'player1' ? 'x' : 'o';

            return {
                ...state,
                currentPlayer: nextPlayer,
                [action.grid]: gridShape
            };
        }
        else {
            return state;
        }
    }

    return state;
};

export const Store = createStore(RootReducer);
