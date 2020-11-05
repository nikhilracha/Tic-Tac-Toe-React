import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Display = (props) => {
    let result = "";
    if (props.turn) {
        result = `It's ${props.turn.toUpperCase()}'s turn.`;
    }
    if (props.won) {
        result = `Yay! ${props.won.toUpperCase()} won!`;
    } else if (props.draw) {
        result = "We have a draw!";
    }
    return (
        <div>
            <h2>Tic-Tac-Toe</h2>
            <></>
            <p>{result}</p>
        </div>
    );
}

Display.propTypes = {
    won: PropTypes.string,
    turn: PropTypes.string.isRequired,
    draw: PropTypes.bool.isRequired
};

const mapStateToProps = ({ won, turn, draw }) => ({
    won,
    turn,
    draw
})

export default connect(mapStateToProps)(Display);

