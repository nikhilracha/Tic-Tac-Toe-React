import React from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { useParams } from 'react-router-dom'
import Boardp from '../../components/Boardp';

const Room = ({ tasks }) => {
    const { id } = useParams()
    console.log("Tasks", tasks)
    return (
        <div className="App">
            <Boardp id={id} />
        </div>
    );
};
const mapStateToProps = (state) => {
    console.log(state);
    const tasks = state.firestore.ordered.rooms;
    return {
        tasks: tasks,
    };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        {
            collection: "rooms",
            doc: props.match.params.id
        },
    ])
)(Room);