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
            birthday: '',
            month: 10,
            day: '',
            year: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
       const value = event.target.value;
       this.setState({
           birthday: value
       });
    }

    constructBirthdayObject() {
        const birthDayString = this.state.month + ' ' + this.state.day + ', ' + this.state.year + '00:00:00';
        return new Date(birthDayString);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("submit clicked");
        console.log(this.state.birthday)
        const birthdayObject = this.constructBirthdayObject();
        this.props.onSubmit(birthdayObject);
    }
   
    render() {
        return (
            <div className="birthdayInput">
               <h1>When were you born?</h1>
               <form onSubmit={this.handleSubmit}>

                <FormControl variant="outlined" className='column row'>

                    <div className="formInput">
                        <TextField
                                id="date"
                                variant="outlined"
                                label="Birth Date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleChange}
                                value={this.state.birthday}
                            />
                    </div>
                        

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