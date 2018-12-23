import React from 'react';
import ProgressBar from './ProgressBar';
import Utils from './utils';
import commaNumber from 'comma-number';

export default class Dashboard extends React.Component {
    render() {
        const birthDate = new Date('January 01, 2000 00:00:00');
        return (
            <div className="dashboard">
                {/* <h1>You have ~30,000 days to fulfill your life. That may sound like a lot, but let's be objective.</h1> */}
                    <div className="banner">
                        <p>You have lived <strong>{commaNumber(Utils.daysOld(birthDate))}</strong> / 30,000 days</p>
                    </div>
                
                <div className="container">
                    <ProgressBar birthDateObject={birthDate}/>
                </div>
                
                <div>
                    <p>That means you have ~<strong>{commaNumber(30000 - Utils.daysOld(birthDate))} days left</strong> to fulfill your life</p>
                    <strong>So make every day count.</strong>
                </div>
            </div>
       );
    }

}