import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }
    // Given a birthday, compute how many days that person has lived
    computeLifeFraction(birthDateObject) {

        // Get the number of milliseconds that have passed since 1970
        const birthDate = birthDateObject.getTime();
        const now = Date.now();

        // Find how many millisecends old the person is, then conver to days
        const difference = now - birthDate;
        const daysOld = Math.round(difference / (1000 * 60 * 60 * 24));
        
        // Compute the life fraction 
        return ((daysOld / 30000)) * 100
    }
    componentDidMount() {
        console.log(this.props.birthDateObject);
        console.log(this.computeLifeFraction(this.props.birthDateObject));
    }
    render() {
        return (
            <div className="progress-bar">
                <Filler percentage={this.computeLifeFraction(this.props.birthDateObject)} />
            </div>
        )
    }
}

ProgressBar.propTypes = {
    birthDateObject: PropTypes.object.isRequired
}