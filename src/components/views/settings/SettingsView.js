import React, {Component} from 'react';
import ServerSettings from "./ServerSettings";
import Options from "./Options";

class SettingsView extends Component {
  render() {
    return (
      <div>
        <ServerSettings/>
        <Options/>
      </div>
    )
  }
}

export default SettingsView
