import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from "@material-ui/core/FormControl";

export default class BirthdateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: 10,
            day: '',
            year: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDayChange(event) {
        const value = event.target.value;
        this.setState({
            day: value
        });
    }

    handleYearChange(event) {
        const value = event.target.value;
        this.setState({
            year: value
        });
    }

    // handleChange(event) {
    //     var value = event.target.value;

    //     this.setState(function () {
    //       return {
    //         month: value,
    //       }
    //     });
    // }

    constructBirthdayObject() {
        const birthDayString = this.state.month + ' ' + this.state.day + ', ' + this.state.year + '00:00:00';
        return new Date(birthDayString);
    }

    handleSubmit(event) {
        event.preventDefault();
        const birthdayObject = this.constructBirthdayObject();
        this.props.onSubmit(birthdayObject);
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
   
    render() {
        const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        // const options = months.map((month) => Object({value: month.toLowerCase(), label: month}));
        const options = months.map((month) => (<option key={month} value={month}>{month}</option>))

        return (
            <div className="birthdayInput">
               <h1>When were you born?</h1>
               <form onSubmit={this.handleSubmit}>

                <FormControl variant="outlined" className='column row'>
                        <InputLabel
                            ref={ref => {
                            this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-native-simple"
                        >
                            Month
                        </InputLabel>
                        <Select
                            native
                            value={this.state.age}
                            onChange={this.handleChange("age")}
                            input={
                            <OutlinedInput
                                name="age"
                                labelWidth={50}
                                id="outlined-age-native-simple"
                            />
                            }
                        >
                            {options}
                        </Select>

                        <TextField
                                id="outlined-email-input"
                                label="Day"
                                value={this.state.day}
                                onChange={this.handleDayChange}
                                // className={classes.textField}
                                className="formElement"
                                type="text"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                        />

                        <TextField
                                id="outlined-email-input"
                                label="Year"
                                value={this.state.year}
                                onChange={this.handleYearChange}
                                className="formElement"
                                type="text"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                        />

                        <Button 
                            variant="contained" 
                            size="large" 
                            type="submit"
                            color="primary">
                            Submit
                        </Button>

                </FormControl>
            </form>
            </div>
        )
    }
}