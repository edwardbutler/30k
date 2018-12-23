import React from 'react';
import ProgressBar from './ProgressBar';
import Utils from './utils';
import commaNumber from 'comma-number';
import PropTypes from 'prop-types';


export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="banner">
                    <p>You have lived <strong>{commaNumber(Utils.daysOld(this.props.birthDate))}</strong> / 30,000 days</p>
                </div>
            
                <div className="container">
                    <ProgressBar birthDateObject={this.props.birthDate}/>
                </div>
                
                <div>
                    <p>That means you have ~<strong>{commaNumber(30000 - Utils.daysOld(this.props.birthDate))} days left</strong> to fulfill your life</p>
                    <strong>So make every day count!</strong>
                </div>
            </div>
       );
    }
}

// TODO: Add proptypes