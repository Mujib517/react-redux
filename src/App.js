import React, { Component } from 'react';
import Courses from './Courses';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Courses />
        <Users />
      </div>
    );
  }
}

export default App;
