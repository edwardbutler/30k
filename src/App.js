/*global chrome*/
import React, { Component } from 'react';
import Footer from './Footer';
import './App.css';
import Dashboard from './Dashboard';
import BirthdateInput from './BirthdateInput';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#2196f3'
      }
    }
  },
)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: undefined
    }
    this.setBirthday = this.setBirthday.bind(this);
    this.storeBirthday = this.storeBirthday.bind(this);
  }
  setBirthday(birthday) {
    this.setState({
      birthDate: birthday
    });
  }
  storeBirthday(birthdayString) {
    const birthday = Date(birthdayString);
    // chrome.storage.local.set({birthDate: birthday}, function() {
    //   console.log('Value is set to ' + birthday);
    // });
  }
  componentDidMount() {
    // Try to load the birthdate from storage
    // console.log(chrome.storage);
    // chrome.storage.sync.get(['birthDate'], function(result) {
    //   console.log('Stored birthday currently is ' + result.key);
    //   this.setBirthday(result.key);
    // });
  }

  render() {
    const birthDate = new Date('January 13, 1998 00:00:00');
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          {this.state.birthDate && <Dashboard birthDate={birthDate}/>}
          {!this.state.birthDate && <BirthdateInput onSubmit={this.setBirthday}/>}
          <Footer/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
