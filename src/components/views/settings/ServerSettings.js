import React, {Component} from 'react';
import {Button, Form, Message, Segment} from "semantic-ui-react";
import {login} from "../../../api/api";
import {connect} from "react-redux";
import {storeSessionIdAction} from "../../../actions/sessionHandling";
import {bindActionCreators} from "redux";


class ServerSettings extends Component {

  state = {
    serverUrl: process.env.REACT_APP_DEFAULT_HOST_URL || '',
    userName: process.env.REACT_APP_DEFAULT_USER_NAME || '',
    password: process.env.REACT_APP_DEFAULT_PASSWORD || '',
    testResult: undefined,
    testError: false,
    sessionId: undefined,
    loading: false,
  };

  clearSessionState() {
    this.setState({
      testResult: false,
      testError: false,
      sessionId: undefined,
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.clearSessionState()
  };

  handleTest = () => {
    const {serverUrl, userName, password} = this.state;
    this.setState({loading: true});
    login(serverUrl, userName, password)
      .then(data => {
        this.setState({
          testResult: true,
          testError: false,
          sessionId: data.session_id,
          loading: false
        })
      })
      .catch(() => {
        this.setState({
          testError: true,
          loading: false
        })
      })
  };

  handleSubmit = () => {
    this.props.storeSessionId(this.state.sessionId, this.state.serverUrl);
  };

  render() {
    const {serverUrl, userName, password, testResult, sessionId, loading, testError} = this.state;
    const submitActive = serverUrl && userName && password;
    return (
      <Segment color='orange'>
        <Form loading={loading} onSubmit={this.handleSubmit}>
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
            <Button disabled={!submitActive || sessionId !== undefined} type="button" onClick={this.handleTest}>Test Connection</Button>
            <Button disabled={!testResult} type='submit'>Save</Button>
          </Form.Group>
        </Form>
        {testError && <Message error={true}>
          <Message.Header>
            Test Failed
          </Message.Header>
          <p>
            Testing connection to server failed. Check that URL, username and password are correct and the server is available.
          </p>
        </Message>}
      </Segment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeSessionId: bindActionCreators(storeSessionIdAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ServerSettings);
// export default ServerSettings;
