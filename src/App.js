
import React, {Component} from 'react';
import './App.css';
import Search from './components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component{
  render(){
    return(
      <MuiThemeProvider>
      <div >

      <Search/>

      </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
