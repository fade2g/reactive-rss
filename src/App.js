import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MainNavigation from "./components/layout/menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavigation/>
      </div>
    );
  }
}

export default App;
