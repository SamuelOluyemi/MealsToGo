import React, {Component} from 'react';
import './App.css';

class App extends Component {
   constructor() {
    super()
    this.state = {date: new Date()};
   }
   render() {
    return (
        <div>
            <h1>You know what time it is?</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
   } 
}

export default App;
