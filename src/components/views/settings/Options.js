import React, { Component } from 'react';
import {Message, Segment} from "semantic-ui-react";

class Options extends Component {
  render() {
    return (
      <Segment  color='teal'>
        <Message info={true}>
          <Message.Header>
            INFO
          </Message.Header>
          <p>Additional options will be added on demand</p>
        </Message>
      </Segment>
    )
  }
}

export default Options
