import React from 'react'
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { useHistory } from 'react-router-dom';

import X from './players/X';
import O from './players/O';
import Empty from './players/Empty';

import { resetBoard } from '../actions/gameActions';

const Boardp = ({ tasks, id }) => {
    const history = useHistory();
    console.log("In Board with id", tasks, id)

    if (!tasks) return <h1>Loading.....</h1>
    const x = tasks[0]
    console.log("x", x)

    const getSymbol = (rowIndex, position, symbol, id) => {
        console.log("In getSymbol", rowIndex, position, symbol, id)
        if (symbol === 'x') {
            return <X key={position} position={position} />;
        }
        if (symbol === 'o') {
            return <O key={position} position={position} />;
        }

        return (
            <Empty
                key={position}
                symbol={symbol}
                rowIndex={rowIndex}
                position={position}
                id={id}
                //addSymbol={this.addSymboll.bind(this, rowIndex, position)}
                data={x}
            />
        );
    }

    const wonClass = x.won ? ` won-${x.wonLine}` : "";
    const drawClass = x.draw ? " draw" : "";
    const boardClass = "board" + wonClass + drawClass;


    let t = x.turn === "x" ? "o" : "x";

    let result = "";
    if (x.turn) {
        result = `It's ${t.toUpperCase()}'s turn.`;
    }
    if (x.won) {
        result = `Yay! ${x.won.toUpperCase()} won!`;
    } else if (x.draw) {
        result = "We have a draw!";
    }

    return (
        <>
            <div>
                <button onClick={() => { history.goBack() }}>Leave Room</button>
                <h2>Tic-Tac-Toe</h2>
                <></>
                <p>{result}</p>
            </div>
            <div className={boardClass}>
                {Object.keys(x.board).map((rowIndex) => {
                    return (
                        <div className={`row row${rowIndex}`} key={rowIndex}>
                            {x.board[rowIndex].map((symbol, positon) => {
                                return getSymbol(rowIndex, positon, symbol, id);
                            })}
                        </div>
                    );
                })}
                {x.won || x.draw ? (
                    <button onClick={resetBoard(id)}>Play Again</button>
                ) : (
                        false
                    )}
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    console.log(state);
    const tasks = state.firestore.ordered.rooms;
    return {
        tasks: tasks,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetBoard: () => dispatch(resetBoard()),
    };
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [
        {
            collection: "rooms",
            doc: props.id
        },
    ])
)(Boardp);
