import React from 'react';
import PropTypes from 'prop-types';
import './styles/index.css';
import Utils from './utils';

  
const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }}/>
}

export default function ProgressBar(props) {
    return (
        <div className="progress-bar">
            <Filler percentage={Utils.computeLifeFraction(props.birthDateObject)}/>
        </div>
    )
}

ProgressBar.propTypes = {
    birthDateObject: PropTypes.object.isRequired
}