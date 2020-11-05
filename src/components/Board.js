import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import X from './players/X';
import O from './players/O';
import Empty from './players/Empty';

import { dispatcher } from '../actions/actions'

class Board extends React.Component {
    addSymboll(rowIndex, columnIndex, symbol) {
        !this.props.won && this.props.addSymbol(rowIndex, columnIndex, symbol);
    }

    getSymbol(rowIndex, position, symbol) {
        if (symbol === 'x') {
            return <X key={position} position={position} />;
        }
        if (symbol === 'o') {
            return <O key={position} position={position} />;
        }

        return (
            <Empty
                key={position}
                addSymbol={this.addSymboll.bind(this, rowIndex, position)}
                turn={this.props.turn}
            />
        );
    }

    render() {
        const wonClass = this.props.won ? ` won-${this.props.wonLine}` : "";
        const drawClass = this.props.draw ? " draw" : "";
        const boardClass = "board" + wonClass + drawClass;
        return (
            <div className={boardClass}>
                {Object.keys(this.props.board).map((rowIndex) => {
                    return (
                        <div className={`row row${rowIndex}`} key={rowIndex}>
                            {this.props.board[rowIndex].map((symbol, positon) => {
                                return this.getSymbol(rowIndex, positon, symbol);
                            })}
                        </div>
                    );
                })}
                {this.props.won || this.props.draw ? (
                    <p className="startAgain" onClick={this.props.startAgain}>
                        Click to start again!
                    </p>
                ) : (
                        false
                    )}
            </div>
        );
    }
}

Board.propTypes = {
    board: PropTypes.object.isRequired,
    turn: PropTypes.string.isRequired,
    won: PropTypes.string,
    draw: PropTypes.bool.isRequired,
    wonLine: PropTypes.string,
    addSymbol: PropTypes.func.isRequired,
    startAgain: PropTypes.func.isRequired
};

const mapStateToProps = ({ board, turn, won, draw, wonLine }) => ({
    board,
    turn,
    won,
    draw,
    wonLine
})


export default connect(mapStateToProps, dispatcher)(Board);



