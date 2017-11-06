import React, {Component} from 'react';
import {Button, Form} from "semantic-ui-react";


class Settings extends Component {

  state = {
    serverUrl: process.env.REACT_APP_DEFAULT_HOST_URL || '',
    userName: process.env.REACT_APP_DEFAULT_USER_NAME || '',
    password: ''
  };

  handleChange = (event) => {
    console.log(event.target.name + ", " + event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })

  };

  render() {
    const {serverUrl, userName, password} = this.state;
    const submitActive = serverUrl && userName && password;
    return (
      <div>
        <Form>
          <Form.Field>
            <label>Server URL</label>
            <input type="text"
                   placeholder="Server URL"
                   name="serverUrl"
                   value={serverUrl}
                   onChange={this.handleChange}
                   required/>
          </Form.Field>

          <Form.Field>
            <label>User name</label>
            <input type="text"
                   placeholder="User name"
                   name="userName"
                   value={userName}
                   onChange={this.handleChange}
                   required/>
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input type="password"
                   placeholder="Password"
                   name="password"
                   value={password}
                   onChange={this.handleChange}
                   required/>
          </Form.Field>
          <Form.Group>
            <Button disabled={!submitActive}>Test Connection</Button>
            <Button type='submit' disabled={!submitActive}>Save</Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}


export default Settings;
