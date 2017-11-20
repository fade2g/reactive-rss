import React, {Component} from 'react';
import {Menu, Segment} from "semantic-ui-react";
import SettingsView from "../views/settings/SettingsView";
import CategoriesView from "../views/categories/categories";

class MainNavigation extends Component {

  state = { activeItem: 'settings' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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

        <Segment basic={true}>
          {'settings'=== activeItem && <SettingsView/>}
        </Segment>
        <Segment basic={true}>
          {'home'=== activeItem && <CategoriesView/>}
        </Segment>
      </div>
    )
  }
}

export default MainNavigation
