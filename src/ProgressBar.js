import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Utils from './utils';

  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }}/>
  }

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }
  
    componentDidMount() {
        // console.log(this.props.birthDateObject);
        // console.log(this.computeLifeFraction(this.props.birthDateObject));
    }
    render() {
        return (
            <div className="progress-bar">
                {/* <Filler percentage={this.computeLifeFraction(this.props.birthDateObject)} /> */}
                <Filler percentage={Utils.computeLifeFraction(this.props.birthDateObject)}/>
            </div>
        )
    }
}

ProgressBar.propTypes = {
    birthDateObject: PropTypes.object.isRequired
}