import { ADD_SYMBOL, START_AGAIN } from './types';

export const addSymbol = (row, position, symbol) => ({
    type: ADD_SYMBOL,
    symbol,
    row,
    position
});

export const startAgain = () => ({
    type: START_AGAIN
});

export const dispatcher = (dispatch) => {
    return {
        addSymbol(rowIndex, position, symbol) {
            dispatch(addSymbol(rowIndex, position, symbol));
        },
        startAgain() {
            dispatch(startAgain());
        }
    };
}


