import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MainNavigation from "./components/layout/menu";
import store from "./store/index";
import Provider from "react-redux/es/components/Provider";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainNavigation/>
        </div>
      </Provider>
    );
  }
}

export default App;
