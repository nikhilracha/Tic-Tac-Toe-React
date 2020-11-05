import React from "react";
import PropTypes from "prop-types";
import { Symbol } from "./Empty"

const O = (props) => {
    return (
        <Symbol className={`symbol column${props.position}`}>
            <svg viewBox="0 0 56 56">
                <circle
                    cx={28}
                    cy={28}
                    r={25}
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>
        </Symbol>
    );
};

O.propTypes = {
    position: PropTypes.number.isRequired
};

export default O;
