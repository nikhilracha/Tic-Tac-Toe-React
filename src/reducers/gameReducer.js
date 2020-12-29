const gameReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_SYMBOL": {
            console.log("Setting a symbol on board", state, action)
            return action.x;
        }
        case "SET_SYMBOL_ERR": {
            console.log("Error in setting symbol")
            return state;
        }
        case "RESET_BOARD": {
            console.log("Resetting on board", state, action)
            return state;
        }
        case "RESET_BOARD_ERR": {
            console.log("Error in setting resetting")
            return state;
        }
        default:
            return state;
    }
};

export default gameReducer;