import React, {Component} from 'react';
import {Segment} from "semantic-ui-react";
import {connect} from "react-redux";

class DevToolView extends Component {

  state = {
    devMode: process.env.REACT_APP_DEV_MODE === 'true'
  };

  render() {
    if (!this.state.devMode) {
      console.log('DevMode: ' + JSON.stringify(this.state));
      return null;
    }
    return (
      <div>
        <Segment basic={true}>
          {JSON.stringify(this.props.session)}
        </Segment>
      </div>
    )
  }
}

function mapStateToProps({session}) {
  return {
    session
  }
}

export default connect(mapStateToProps)(DevToolView);

