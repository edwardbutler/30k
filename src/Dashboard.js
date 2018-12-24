import React from 'react';
import ProgressBar from './ProgressBar';
import Utils from './utils';
import commaNumber from 'comma-number';
import PropTypes from 'prop-types';

const daysOld = function(birthDate) {
    return commaNumber(Utils.daysOld(birthDate));
}

const daysLeft = function(birthDate) {
    return commaNumber(Utils.daysLeft(birthDate));
}

export default function Dashboard(props) {
    return (
        <div className="dashboard">
            <div className="banner">
                <p>You have lived <strong>{daysOld(props.birthDate)}</strong> / 30,000 days</p>
            </div>
        
            <div className="container">
                <ProgressBar birthDateObject={props.birthDate}/>
            </div>
            
            <div>
                <p>That means you have ~<strong>{daysLeft(props.birthDate)} days left</strong> to fulfill your life</p>
                <strong>So make every day count!</strong>
            </div>
        </div>
    );
    
}

Dashboard.propTypes = {
    birthDate: PropTypes.object.isRequired
}