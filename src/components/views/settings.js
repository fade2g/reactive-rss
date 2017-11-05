import React, {Component} from 'react';
import {Button, Form} from "semantic-ui-react";


class Settings extends Component {

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <label>Server URL</label>
            <input placeholder="Server URL" required/>
          </Form.Field>

          <Form.Field>
            <label>User name</label>
            <input placeholder="User name" required/>
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="Password" required/>
          </Form.Field>

          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Settings;
