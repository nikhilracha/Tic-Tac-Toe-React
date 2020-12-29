import { db } from '../config/firebaseConfig';
import * as _ from 'lodash';
import { resultForSymbol } from '../reducers/operations';

export const setSymbol = (task) => {
    console.log("id in set", task)
    return (dispatch) => {
        const x = task.data;
        let turn;
        if (task.data.turn === "x") {
            turn = "o"
        }
        else {
            turn = "x"
        }

        const position = task.position;
        const rowIndex = task.rowIndex;

        console.log("jjj", task);

        const newState = _.cloneDeep(x);
        newState.board[rowIndex][position] = turn;
        newState.turn = turn

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

        const boardIsFull =
            [
                ...newState.board[0],
                ...newState.board[1],
                ...newState.board[2]
            ].filter((symbol) => symbol !== "").length === 9;

        if (boardIsFull && !newState.won) {
            newState.draw = true;
        }


        db.collection("rooms").doc(task.id)
            .update({
                board: newState.board,
                turn: turn,
                won: newState.won,
                wonLine: newState.wonLine,
                draw: newState.draw

            })
            .then(() => {
                dispatch({
                    type: "SET_SYMBOL",
                    x,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "SET_SYMBOL_ERR",
                    err,
                });
            });

    };
};


export const resetBoard = (id) => {
    return (dispatch) => {

        const initialState = {
            board: {
                0: ["", "", ""],
                1: ["", "", ""],
                2: ["", "", ""]
            },
            turn: "x",
            draw: false,
            won: "",
            wonLine: ""
        }

        console.log("resetting")

        // db.collection("rooms").doc("CCCC")
        //     .get()
        //     .then(function (doc) {
        //         if (doc.exists) {
        //             console.log("Document data:", doc.data());
        //         } else {
        //             // doc.data() will be undefined in this case
        //             console.log("No such document!");
        //         }
        //     }).catch(function (error) {
        //         console.log("Error getting document:", error);
        //     });

        db.collection("rooms").doc(id)
            .update({
                board: initialState.board,
                turn: initialState.turn,
                draw: initialState.draw,
                won: initialState.won,
                wonLine: initialState.wonLine

            })



    }
}

