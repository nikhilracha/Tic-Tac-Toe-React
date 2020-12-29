import React from 'react';
import { useHistory } from 'react-router-dom';


const Home = () => {
    const history = useHistory();

    const goToRoom = (id) => {
        history.push(`/room/${id}`);
    }

    return (
        <div>
            <h1>Welcome to Tic Tac Toe Game</h1>
            <button onClick={() => goToRoom('AAAA')}>Go to 'AAAA' Room </button>
            <button onClick={() => goToRoom('CCCC')}>Go to 'CCCC' Room</button>
        </div>
    )
}

export default Home;