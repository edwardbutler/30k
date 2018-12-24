import React from 'react';
import ProgressBar from './ProgressBar';
import Utils from './utils';
import commaNumber from 'comma-number';
import PropTypes from 'prop-types';


const numDaysLeft = function(birthDate) {
    return Utils.daysLeft(birthDate)
}

const daysOldFormat = function(birthDate) {
    return commaNumber(Utils.daysOld(birthDate));
}

const daysLeftFormat = function(birthDate) {
    return commaNumber(numDaysLeft(birthDate));
}



const DaysLeftView = function(props) {
    return (
            <div className="dashboard"> 
                <div className="banner">
                    <p>You have lived <strong>{daysOldFormat(props.birthDate)}</strong> / 30,000 days</p>
                </div>
            
                {/* {showProgressBar(daysLeft(props.birthDate)) ? } */}
                <div className="container">
                    <ProgressBar birthDateObject={props.birthDate}/>
                </div>
                
                <div>
                    <p>That means you have ~<strong>{daysLeftFormat(props.birthDate)} days left</strong> to fulfill your life</p>
                    <strong>So make every day count!</strong>
                </div>
            </div>
    );
}

const NoDaysLeftView = function(props) {
    return (
        <div className="dashboard dashboard-img">
            <div className="banner">
                <p>You have lived <strong>{daysOldFormat(props.birthDate)}</strong> days</p>
            </div>

            <p>You may have passed the 30k mark, but life is still capped.</p>
            <img src={'./hourglass.gif'} width={300} height={300}/>
            <strong>So make the most of it.</strong>
        </div>

    )
}





export default function Dashboard(props) {
    return (
        numDaysLeft(props.birthDate) > 0 ? 
            <DaysLeftView birthDate={props.birthDate}/> : 
            <NoDaysLeftView birthDate={props.birthDate}/>
    );
    
}

Dashboard.propTypes = {
    birthDate: PropTypes.object.isRequired
}