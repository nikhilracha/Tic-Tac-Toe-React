import { resultForSymbol } from './operations';
import * as _ from "lodash";
import initialState from '../store/initialState';

export const Reducer = (state, action) => {

    switch (action.type) {
        case "ADD_SYMBOL":
            const { symbol, row, position } = action;
            const newState = _.cloneDeep(state);
            newState.board[row][position] = symbol;

            const xResult = resultForSymbol("x", newState.board);
            const oResult = resultForSymbol("o", newState.board);

            if (xResult.won) {
                newState.won = "x";
                newState.wonLine = xResult.line;
            }

            if (oResult.won) {
                newState.won = "o";
                newState.wonLine = oResult.line;
            }

            if (!newState.won) {
                newState.turn = newState.turn === "o" ? "x" : "o";
            }

            const boardIsFull =
                [
                    ...newState.board[0],
                    ...newState.board[1],
                    ...newState.board[2]
                ].filter((symbol) => symbol !== "").length === 9;

            if (boardIsFull && !newState.won) {
                newState.draw = true;
            }

            return newState;
        case "START_AGAIN":
            return initialState;
        default:
            return state;
    }

};
