import React, {Component} from 'react';
import {Menu, Segment} from "semantic-ui-react";
import Settings from "../views/settings";

class MainNavigation extends Component {

  state = { activeItem: 'settings' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name="home" active={'home' === activeItem} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item name="settings" active={'settings' === activeItem} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <Segment>
          {'settings'=== activeItem && <Settings/>}
        </Segment>
      </div>
    )
  }
}

export default MainNavigation
