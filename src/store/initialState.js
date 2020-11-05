const initialState = {
    board: {
        0: ["", "", ""],
        1: ["", "", ""],
        2: ["", "", ""]
    },
    won: undefined,
    wonLine: undefined,
    draw: false,
    turn: "o"
}

export default initialState;