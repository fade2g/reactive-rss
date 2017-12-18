import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MainNavigation from "./components/layout/MainNavigation";
import store, {persistor} from "./store/index";
import {PersistGate} from 'redux-persist/es/integration/react'
import Provider from "react-redux/es/components/Provider";

class App extends Component {
  render() {
    return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <div className="App">
            <MainNavigation/>
          </div>
        </Provider>
      </PersistGate>
    );
  }
}

export default App;
